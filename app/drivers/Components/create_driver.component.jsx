"use client"
import { useRef, useState } from "react"
import "./create_driver.styles.css"
import { motion } from "framer-motion"

export default function CreateButton() {

    const [showModal, setShowModal] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const idRef = useRef();
    const phoneRef = useRef();


    const handleSubmit = async () => {
        const resp = await fetch(process.env.NEXT_PUBLIC_API_HOST + `/create_driver?first_name=${firstNameRef.current.value}&last_name=${lastNameRef.current.value}&ID=${parseInt(idRef.current.value)}&email=${emailRef.current.value}&phone=${parseInt(phoneRef.current.value)}`, {
            method: "POST",
        })


        setShowModal(false);
    }

    return (
        <>
            {
                showModal &&
                <motion.div initial={{ opacitx: 0 }} animate={{ opacity: 1 }} className="driver-modal">
                    <div className="driver-modal-content">
                        <div className="close-button" onClick={() => setShowModal(false)}>
                            <span className="material-icons-outlined">close</span>
                        </div>
                        <motion.div className="fields" initial={{ transition: { staggerChildren: 0.5 } }}>
                            <motion.div className="field" initial={{ x: -75 }} animate={{ x: 0 }}>
                                <label>First Name</label>
                                <motion.input ref={firstNameRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" className="search search-alter" />
                            </motion.div>
                            <motion.div className="field" initial={{ x: -75 }} animate={{ x: 0 }}>
                                <label>Last Name</label>
                                <motion.input ref={lastNameRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" className="search search-alter" />
                            </motion.div>
                            <motion.div className="field" initial={{ x: -75 }} animate={{ x: 0 }}>
                                <label>ID</label>
                                <motion.input ref={idRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" className="search search-alter" />
                            </motion.div>
                            <motion.div className="field" initial={{ x: -75 }} animate={{ x: 0 }}>
                                <label>Email</label>
                                <motion.input ref={emailRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" className="search search-alter" />
                            </motion.div>
                            <motion.div className="field" initial={{ x: -75 }} animate={{ x: 0 }}>
                                <label>Phone Number</label>
                                <motion.input ref={phoneRef} whileFocus={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} type="text" className="search search-alter" />
                            </motion.div>
                        </motion.div>
                        <div className="submit" onClick={handleSubmit}>
                            Create Driver
                        </div>
                    </div>

                </motion.div>
            }
            <motion.div initial={{ opacitx: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} className="create-button" onClick={() => setShowModal(true)}>
                Create Driver
            </motion.div>
        </>
    )
}