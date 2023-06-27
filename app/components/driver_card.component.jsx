"use client";

import { useRef, useState } from "react";
import "../drivers/driver.styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DriverCard({ primary_id, first_name, last_name, ID, email, phone, created_data, setModalOccupied, modalOccupied, setDrivers }) {

  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const idRef = useRef();
  const phoneRef = useRef();

  const [editing, setEditing] = useState(false);

  const handleEdit = async () => {
    setEditing(true);
    const resp = await fetch(process.env.NEXT_PUBLIC_API_HOST + `/update_driver?id=${primary_id}&first_name=${firstNameRef.current.value}&last_name=${lastNameRef.current.value}&ID=${idRef.current.value}&email=${emailRef.current.value}&phone=${phoneRef.current.value}`, {
      method: "PUT",
    }).then((res) => res.json()).then((res) => {
      if (res.detail) {
        console.log("ERROR")
      } else {
        setDrivers((drivers) => {
          let tempArray = [...drivers.drivers]
          let index = tempArray.findIndex((ele) => ele.id === primary_id)
          tempArray[index] = res
          return { drivers: tempArray }
        })
        router.refresh()
      }
    }).finally(() => setEditing(false))
  }

  return (
    <>
      <div className="driver-card">
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
                      return false
                    }
                    setModalOccupied(true);
                    return true
                  });
                }}
              >
                edit
              </span>
            </div>
          </div>
        </div>

        <div className="tags">
          <div className="cab tag">Drives a Subaru</div>
          <div className="since tag">Driving since 2020</div>
        </div>

        <div className="tags">
          <div className="email tag">{email}</div>
          <div className="phone tag">{phone}</div>
        </div>
      </div >
      {
        edit &&
        <div className="driver-modal">
          <div className="driver-modal-content">
            <div className="top">
              <h3>Edit a driver</h3>
              <div className="close-button" onClick={() => setEdit(() => {
                setModalOccupied(false);
                return false;
              })}>
                <span className="material-icons-outlined">close</span>
              </div>
            </div>

            <div className="fields" >
              <form>
                <div className="field" >
                  <label>First Name</label>
                  <input ref={firstNameRef} type="text" defaultValue={first_name} className="search search-alter" />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input ref={lastNameRef} type="text" defaultValue={last_name} className="search search-alter" />
                </div>
                <div className="field">
                  <label>ID</label>
                  <input ref={idRef} type="number" defaultValue={ID} className="search search-alter" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input ref={emailRef} type="email" defaultValue={email} className="search search-alter" />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input ref={phoneRef} type="number" defaultValue={phone} className="search search-alter" />
                </div>
              </form>
            </div>
            <button className="submit" disabled={editing ? true : false} onClick={handleEdit}>
              {editing ? "Editing driver..." : "Edit Driver"}
            </button>
          </div>

        </div>

      }
    </>
  );
}
