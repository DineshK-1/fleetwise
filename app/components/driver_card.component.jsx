"use client";

import { useRef, useState } from "react";
import "../drivers/driver.styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function DriverCard({
  primary_id,
  first_name,
  last_name,
  ID,
  email,
  phone,
  created_date,
  cab,
  setModalOccupied,
  modalOccupied,
  setDrivers,
}) {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const idRef = useRef();
  const phoneRef = useRef();

  const [editing, setEditing] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleEdit = async () => {
    setEditing(true);
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_HOST +
        `/update_driver?id=${primary_id}&first_name=${firstNameRef.current.value}&last_name=${lastNameRef.current.value}&ID=${idRef.current.value}&email=${emailRef.current.value}&phone=${phoneRef.current.value}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          console.log("ERROR");
        } else {
          setDrivers((drivers) => {
            let tempArray = [...drivers.drivers];
            let index = tempArray.findIndex((ele) => ele.id === primary_id);
            tempArray[index] = res;
            return { drivers: tempArray };
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
        process.env.NEXT_PUBLIC_API_HOST + `/delete_driver?id=${primary_id}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.detail) {
            console.log("ERROR");
          } else if (res.deleted == true) {
            setDrivers((drivers) => {
              let tempArray = [...drivers.drivers];
              tempArray = tempArray.filter((ele) => ele.id !== primary_id);
              return { drivers: tempArray };
            });
            router.refresh();
          }
        })
        .finally(() => {
          setEdit(false);
          setConfirmDelete(false);
          setModalOccupied(false);
        });
      return;
    }
    setConfirmDelete(true);
  };

  return (
    <>
      <motion.div
        key={primary_id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="driver-card"
      >
        <div className="card-top">
          <div className="left">
            <div className="image">
              <Image
                src={"/blank-profile.png"}
                alt="driver pic"
                width={64}
                height={64}
                style={{ borderRadius: "5rem" }}
              />
            </div>

            <div className="details">
              <div className="title">{first_name + " " + last_name}</div>
              <div className="id">ID: {ID}</div>
            </div>
          </div>
          <div className="action-buttons">
            <div className="edit-button">
              <span
                className="material-icons-outlined"
                onClick={() => {
                  setEdit(() => {
                    if (modalOccupied) {
                      return false;
                    }
                    setModalOccupied(true);
                    return true;
                  });
                }}
              >
                edit
              </span>
            </div>
          </div>
        </div>

        <div className="tags">
          <div className="cab tag">
            {cab ? `Drives a ${cab.cab_model}` : "Cab's not assigned"}
          </div>
          <div className="since tag">Driving since {created_date}</div>
        </div>

        <div className="tags">
          <div className="email tag">{email}</div>
          <div className="phone tag">{phone}</div>
        </div>
      </motion.div>
      <AnimatePresence>
        {edit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="update-modal"
          >
            <div className="update-modal-content">
              <div className="top">
                <h3>Edit a driver</h3>
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

              {/* Input fields */}

              <div className="fields">
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
                      defaultValue={first_name}
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
                      defaultValue={last_name}
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
                      defaultValue={ID}
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
                      defaultValue={email}
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
                      defaultValue={phone}
                      className="search search-alter"
                    />
                  </div>
                </form>
              </div>

              {/* Buttons for server actions */}

              <div className="buttons">
                <button
                  className="submit"
                  disabled={editing ? true : false}
                  onClick={handleEdit}
                >
                  {editing ? "Editing driver..." : "Edit Driver"}
                </button>
                <button className="submit delete-button" onClick={handleDelete}>
                  {confirmDelete ? "Are you sure?" : "Delete Driver"}
                </button>

                <AnimatePresence>
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
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
