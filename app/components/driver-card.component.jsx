"use client";

import React, { useState } from "react";
import "../Drivers/driverdeets.css";
import Image from "next/image";

export default function DriverCard({ name, ID, email, phone }) {
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <div>
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
              <div className="title">{name}</div>
              <div className="id">ID: {ID}</div>
            </div>
          </div>
          <div className="action-buttons">
            <div className="edit-button">
              <span
                class="material-icons-outlined"
                onClick={() => {
                  setShowUpdate(true);
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
      </div>
      <div className="add-drivers">
        <button onClick={() => setShowModal(true)}>
          <span class="material-icons-outlined">add</span>
          <h2>ADD DRIVER</h2>
        </button>
      </div>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-top">
              <h3>ADD A DRIVER</h3>
              <span
                class="material-icons-outlined"
                onClick={() => setShowModal(false)}
              >
                {" "}
                close
              </span>
            </div>

            <form onSubmit={""}>
              <label>Driver Name:</label>
              <input type="text" />
              <label>Driver ID:</label>
              <input type="text" />
              <label>Driver Email:</label>
              <input type="text" />
              <label>Driver Ph. Number:</label>
              <input type="text" />
              <label>Driving Since:</label>
              <input type="text" />
              <label>Assigned Vehicle:</label>
              <input type="text" />
              <button type="submit">ADD DRIVER</button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showUpdate ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-top">
              <h3>ALTER DRIVER DETAILS</h3>
              <span
                class="material-icons-outlined"
                onClick={() => setShowUpdate(false)}
              >
                {" "}
                close
              </span>
            </div>

            <form onSubmit={""}>
              <label>Driver Name:</label>
              <input type="text" />
              <label>Driver ID:</label>
              <input type="text" />
              <label>Driver Email:</label>
              <input type="text" />
              <label>Driver Ph. Number:</label>
              <input type="text" />
              <label>Driving Since:</label>
              <input type="text" />
              <label>Assigned Vehicle:</label>
              <input type="text" />
              <div className="modal-bottom">
                <button type="submit">UPDATE DRIVER</button>
                <button onClick={""}>REMOVE DRIVER</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
