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
    <div className="drivers">
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
  );
}
