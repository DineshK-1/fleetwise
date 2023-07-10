"use client";
import React, { useRef, useState } from "react";
import cabimg from "@/public/cabpic.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function CabCard({
  cab_id,
  reg_no,
  cab_model,
  cab_color,
  modalOccuoied,
  setModalOccupied,
  setCabs,
}) {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const modelref = useRef();
  const colorref = useRef();
  const regnoref = useRef();

  const [editing, setEditing] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleEdit = async () => {
    setEditing(true);
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_HOST +
        `/update_cab?id=${cab_id}&model=${modelref.current.value}&color=${colorref.current.value}&regno=${regnoref.current.value}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          console.log("ERROR");
        } else {
          setCabs((cabs) => {
            let temp = [...cabs.cabs];
            let index = temp.findIndex((ele) => ele.id === cab_id);
            temp[index] = res;
            return { cabs: temp };
          });
          router.refresh();
        }
      })
      .finally(() => {
        setEditing(false);
        setEdit(false);
        setModalOccupied(false);
      });
  };

  const handleDelete = async () => {
    if (confirmDelete) {
      const resp = await fetch(
        process.env.NEXT_PUBLIC_API_HOST + `/delete_cab?id=${cab_id}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.detail) {
            console.log("ERROR");
          } else if (res.deleted == true) {
            setCabs((cabs) => {
              let temp = [...cabs.cabs];
              temp = temp.filter((cab) => cab.id != cab_id);
              return {
                cabs: temp,
              };
            });
          }
        })
        .finally(() => {
          setEdit(false);
          setConfirmDelete(false);
          setModalOccupied(false);
          router.refresh();
        });
      return;
    }
    setConfirmDelete(true);
  };

  return (
    <AnimatePresence>
      <div>
        <div className="cab-container">
          <div className="cab-info-top">
            <p>{reg_no}</p>
            <span
              className="material-icons-outlined"
              onClick={() => {
                setEdit(true);
              }}
            >
              edit
            </span>
          </div>
          <motion.div
            className="cab-img"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Image src={cabimg} alt="cab" />
          </motion.div>
          <div className="cab-info-bottom">
            <div className="bottom-text">
              <p>{cab_model}</p>
            </div>
            <div className="bottom-color">
              <div
                className="color-box"
                style={{ backgroundColor: cab_color }}
              ></div>
            </div>
          </div>
        </div>
        {edit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="update-modal"
          >
            <div className="update-modal-content">
              <div className="top">
                <h3>UPDATE CAB</h3>
                <div
                  className="close-button"
                  onClick={() =>
                    setEdit(() => {
                      setModalOccupied(false);
                      return false;
                    })
                  }
                >
                  <span className="material-icons-outlined">close</span>
                </div>
              </div>
              <div className="update-modal-body">
                <div className="fields">
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
                        defaultValue={reg_no}
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
                        defaultValue={cab_model}
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
                        defaultValue={cab_color}
                        className="search search-alter"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="submit"
                  disabled={editing ? true : false}
                  onClick={handleEdit}
                >
                  {editing ? "Updating cab..." : "Update"}
                </button>
                <button className="submit delete-button" onClick={handleDelete}>
                  {confirmDelete ? "Are you sure?" : "Retire Cab"}
                </button>
                {confirmDelete && (
                  <motion.button
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="submit delete-button"
                    onClick={() => setConfirmDelete(false)}
                  >
                    X
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
