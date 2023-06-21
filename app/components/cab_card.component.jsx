"use client";
import React, { useState } from "react";

export default function CabCard({ reg, name, color }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
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
          <div
            className="update"
            onClick={() => {
              setShowUpdate(true);
            }}
          >
            <span className="material-icons-outlined">info</span>
            <h3> Update Cab Info </h3>
          </div>
          <div
            className="delete"
            onClick={() => {
              setShowDelete(true);
              console.log(showDelete);
            }}
          >
            <span className="material-icons-outlined">delete</span>
            <h3> Retire Cab </h3>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="addcabs">
        <button onClick={() => setShowModal(true)}>
          <span className="material-icons-outlined">add</span>
          <h2>ADD CAB</h2>
        </button>
      </div>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-top">
              <h3>ADD A CAB</h3>
              <span
                className="material-icons-outlined"
                onClick={() => setShowModal(false)}
              >
                {" "}
                close
              </span>
            </div>

            <form
              onSubmit={() => {
                return <></>;
              }}
            >
              <label>Cab Registration Number:</label>
              <input type="text" />
              <label>Cab Model:</label>
              <input type="text" />
              <label>Cab Color:</label>
              <input type="text" />
              <button type="submit">ADD CAB</button>
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
              <h3>UPDATE DETAILS</h3>
              <span
                className="material-icons-outlined"
                onClick={() => setShowUpdate(false)}
              >
                {" "}
                close
              </span>
            </div>
            <form onSubmit={""}>
              <label>Registration Number:</label>
              <input type="text" />
              <label>Cab Model:</label>
              <input type="text" />
              <label>Cab Color:</label>
              <input type="text" />
              <button type="submit">UPDATE DETAILS</button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showDelete ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-top">
              <h3>CONFIRM RETIRE CAB</h3>
              <span
                className="material-icons-outlined"
                onClick={() => setShowDelete(false)}
              >
                {" "}
                close
              </span>
            </div>
            <div className="delete-modal">
              <form onSubmit={""}>
                <label> Are You sure you want to RETIRE this cab?</label>
                <button>RETURN</button>
                <button type="submit">DELETE CAB</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
