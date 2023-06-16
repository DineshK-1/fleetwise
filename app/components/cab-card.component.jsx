"use client";
import React, { useState } from "react";

export default function CabCard({ reg, name, color }) {
  const [expanded, setExpanded] = useState(false);
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
        <button>
          <span class="material-icons-outlined">add</span>
          <h2>ADD</h2>
        </button>
      </div>
    </div>
  );
}
