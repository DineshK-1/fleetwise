import React from "react";
import DriverCard from "../components/driver-card.component";

export default function DriverDetails() {
  const driverarray = [
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    ,
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
    {
      name: "Joseph Mourinho",
      id: "2127",
      email: "joe@hotmail.com",
      phone: "1892192839",
    },
  ];
  return (
    <div className="driver-section">
      <h2 className="w-500">Drivers Management</h2>

      <div className="search-drivers">
        <input
          type="search"
          className="search name-search"
          placeholder="Enter a name to search"
        />
        <input
          type="search"
          className="search"
          placeholder="Enter a ID to search"
        />
        <input
          type="search"
          className="search cab-search"
          placeholder="Enter name of the cab"
        />
      </div>

      <div className="driver-cards">
        {driverarray.map((driver) => {
          return (
            <DriverCard
              key={driver.id}
              name={driver.name}
              ID={driver.id}
              email={driver.email}
              phone={driver.phone}
            />
          );
        })}
      </div>
    </div>
  );
}
