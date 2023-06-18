"use client";
import React, { useState } from "react";

export default function CabCard({ reg, name, color }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="cabcard"
      style={{ height: expanded ? "160px" : "75px" }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="cabcardtop">
        <p>
          {color}
          {name}
        </p>
        <h3> {reg} </h3>

        <h4>IMAGE</h4>
      </div>
      {expanded ? (
        <div className="revealcabcard">
          <div className="update">
            <span class="material-icons-outlined">info</span>
            <h3> Update Cab Info </h3>
          </div>
          <div className="delete">
            <span class="material-icons-outlined">delete</span>
            <h3> Retire Cab </h3>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="addcabs">
        <button onClick={() => setShowModal(true)}>
          <span class="material-icons-outlined">add</span>
          <h2>ADD CAB</h2>
        </button>
      </div>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-top">
              <h3>ADD A CAB</h3>
              <span
                class="material-icons-outlined"
                onClick={() => setShowModal(false)}
              >
                {" "}
                close
              </span>
            </div>

            <form onSubmit={""}>
              <label>Cab Registration Number:</label>
              <input type="text" />
              <label>Cab Model:</label>
              <input type="text" />
              <button type="submit">ADD CAB</button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
