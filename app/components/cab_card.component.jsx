"use client";
import React, { useState } from "react";
import cabimg from "../Cabs/cabpic.jpg";

export default function CabCard({ cab_id, reg_no, cab_model, color }) {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        className="cab-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="cab-img"
          style={{
            backgroundImage: `url(${cabimg.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: hover ? "0.75" : "1",
            width: "200px",
            height: "400px",
            borderRadius: "10px",
          }}
        >
          {hover && (
            <div className="cab-info" style={{ opacity: "1" }}>
              <p>{reg_no}</p>
              <p>{cab_model}</p>
              <p>{color}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
