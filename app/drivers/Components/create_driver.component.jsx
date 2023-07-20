"use client";
import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ErrorContext } from "@/app/components/errorContext";

/**
 * CreateButton Component
 *
 * The CreateButton component is a React component that displays a button for creating a new driver.
 * When clicked, the button opens a modal with input fields for entering the driver's information.
 * The modal allows the user to submit the form to create a new driver with the entered information.
 *
 * @param {Object} setDrivers - A function to update the driver list after creating a new driver.
 * @param {boolean} modalOccupied - A boolean indicating if the modal is occupied by other actions.
 * @param {Function} setModalOccupied - A function to set the state of modalOccupied.
 * @returns {JSX.Element} The JSX representation of the CreateButton component.
 */

export default function CreateButton({
  setDrivers,
  modalOccupied,
  setModalOccupied,
}) {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const idRef = useRef();
  const phoneRef = useRef();

  let { setErrors } = useContext(ErrorContext);

  /**
   * handleSubmit function
   *
   * This function is called when the user submits the form in the modal.
   * It sends a request to the API to create a new driver with the entered information.
   * After successfully creating the driver, it updates the driver list and refreshes the page.
   *
   */
  const handleSubmit = async () => {
    setCreating(true);
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_HOST +
        `/create_driver?first_name=${firstNameRef.current.value}&last_name=${lastNameRef.current.value}&ID=${idRef.current.value}&email=${emailRef.current.value}&phone=${phoneRef.current.value}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          console.log(res.detail)
          setErrors((e) => {
            if(res.detail[0]){
              return [...e, "Fill the fields properly"]
            }
            return [...e, res.detail]
          })
        } else {
          setDrivers((drivers) => {
            let tempArray = [...drivers.drivers, res];
            return { drivers: tempArray };
          });
          router.refresh();
        }
      })
      .finally(() => setCreating(false));
    setShowModal(() => {
      setModalOccupied(false);
      return false;
    });
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="create-modal"
          >
            <div className="create-modal-content">
              <div className="top">
                <h3>Add a driver</h3>
                <div
                  className="close-button"
                  onClick={() => {
                    setShowModal(false);
                    setModalOccupied(false);
                  }}
                >
                  <span className="material-icons-outlined">close</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fields"
              >
                <form>
                  <div className="field">
                    <label>First Name</label>
                    <motion.input
                      ref={firstNameRef}
                      whileFocus={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="text"
                      className="search search-alter"
                    />
                  </div>
                  <div className="field">
                    <label>Last Name</label>
                    <motion.input
                      ref={lastNameRef}
                      whileFocus={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="text"
                      className="search search-alter"
                    />
                  </div>
                  <div className="field">
                    <label>ID</label>
                    <motion.input
                      ref={idRef}
                      whileFocus={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="number"
                      className="search search-alter"
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <motion.input
                      ref={emailRef}
                      whileFocus={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="email"
                      className="search search-alter"
                    />
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <motion.input
                      ref={phoneRef}
                      whileFocus={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="number"
                      className="search search-alter"
                    />
                  </div>
                </form>
              </motion.div>
              <button
                className="submit"
                disabled={creating ? true : false}
                onClick={handleSubmit}
              >
                {creating ? "Creating driver..." : "Create Driver"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="search-button"
        onClick={() => {
          if (modalOccupied) {
            return null;
          }
          setShowModal(true);
          setModalOccupied(true);
        }}
      >
        Create Driver
      </motion.div>
    </>
  );
}
