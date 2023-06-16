import React from "react";
import Image from "next/image";

export default function DriverCard({ name, ID, email, phone }) {
  return (
    <div className="card-column">
      <div className="card-row">
        <Image src="" alt="driver image" />
        <h3>{name}</h3>
        <h4>{ID}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <span class="material-icons-outlined">edit</span>
        <span class="material-icons-outlined">remove_circle_outline</span>
      </div>
    </div>
  );
}
