"use client"
import { useRef, useState } from "react"
import "./create_driver.styles.css"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function CreateButton({ setDrivers, modalOccupied, setModalOccupied }) {

    const router = useRouter();

    const [showModal, setShowModal] = useState(false);
    const [creating, setCreating] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const idRef = useRef();
    const phoneRef = useRef();


    const handleSubmit = async () => {
        setCreating(true);
        const resp = await fetch(process.env.NEXT_PUBLIC_API_HOST + `/create_driver?first_name=${firstNameRef.current.value}&last_name=${lastNameRef.current.value}&ID=${idRef.current.value}&email=${emailRef.current.value}&phone=${phoneRef.current.value}`, {
            method: "POST",
        }).then((res) => res.json()).then((res) => {
            if (res.detail) {
                console.log("ERROR")
            } else {
                setDrivers((drivers) => {
                    let tempArray = [...drivers.drivers, res]
                    return { drivers: tempArray }
                })
                router.refresh()
            }
        }).finally(() => setCreating(false))
        setShowModal(() => {
            setModalOccupied(false);
            return false
        });
    }

    return (
        <>
            <AnimatePresence>
                {
                    showModal &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="driver-modal">
                        <div className="driver-modal-content">
                            <div className="top">
                                <h3>Add a driver</h3>
                                <div className="close-button" onClick={() => { setShowModal(false); setModalOccupied(false); }}>
                                    <span className="material-icons-outlined">close</span>
                                </div>
                            </div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fields">
                                <form>
                                    <div className="field" >
                                        <label>First Name</label>
                                        <motion.input ref={firstNameRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" defaultValue={"Meyenk"} className="search search-alter" />
                                    </div>
                                    <div className="field">
                                        <label>Last Name</label>
                                        <motion.input ref={lastNameRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" defaultValue={"Rey"} className="search search-alter" />
                                    </div>
                                    <div className="field">
                                        <label>ID</label>
                                        <motion.input ref={idRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="number" defaultValue={69} className="search search-alter" />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <motion.input ref={emailRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="email" defaultValue={"mk@gmail.com"} className="search search-alter" />
                                    </div>
                                    <div className="field">
                                        <label>Phone Number</label>
                                        <motion.input ref={phoneRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="number" defaultValue={20} className="search search-alter" />
                                    </div>
                                </form>
                            </motion.div>
                            <button className="submit" disabled={creating ? true : false} onClick={handleSubmit}>
                                {creating ? "Creating driver..." : "Create Driver"}
                            </button>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
            <motion.div initial={{ opacitx: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} className="search-button" onClick={() => {
                if (modalOccupied) {
                    return null;
                }
                setShowModal(true);
                setModalOccupied(true);
            }}>
                Create Driver
            </motion.div>
        </>
    )
}