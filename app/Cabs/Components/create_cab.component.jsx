"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function CreateCab({
  setCabs,
  modalOccupied,
  setModalOccupied,
}) {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);

  const modelref = useRef();
  const colorref = useRef();
  const regnoref = useRef();

  const handleCreateCab = () => {
    if (modalOccupied) {
      return null;
    }
    setModalOccupied(true);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    setCreating(true);
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_HOST +
      `/create_cab?model=${modelref.current.value}&color=${colorref.current.value}&regno=${regnoref.current.value}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          console.log("ERROR");
        } else {
          setCabs((cabs) => {
            let temp = [...cabs.cabs, res];
            return {
              cabs: temp,
            };
          });
          router.refresh();
        }
      })
      .finally(() => {
        setCreating(false);
        setShowModal(() => {
          setModalOccupied(false);
          return false;
        });
      });
  };

  return (
    <>
      <div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="search-button"
        style={{
          backgroundColor: "yellow",
          color: "black",
          fontFamily: "sans-serif",
          fontWeight: 600,
        }}
        onClick={handleCreateCab}>
        + Create Cab
      </div>

      {showModal && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="create-modal"
        >
          <div className="create-modal-content">
            <div className="top">
              <h3>Add a Cab</h3>
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
                  <label>Registration Number</label>
                  <motion.input
                    ref={regnoref}
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
                  <label>Model</label>
                  <motion.input
                    ref={modelref}
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
                  <label>Color</label>
                  <motion.input
                    ref={colorref}
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
              </form>
            </motion.div>
            <button
              className="submit"
              disabled={creating ? true : false}
              onClick={handleSubmit}
            >
              {creating ? "Creating Cab..." : "Create Cab"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
