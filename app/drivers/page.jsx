import React from "react";
import DriverCard from "../components/driver-card.component";

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.API_HOST + "/get_drivers")

  return res.json();
}

export default async function DriverDetails() {
  
  const data = await getData()
  console.log(data)

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
        {data.drivers.map((driver) => {
          return (
            <DriverCard
              key={driver.id}
              first_name={driver.driver_first_name}
              last_name={driver.driver_last_name}
              ID={driver.driver_ID}
              email={driver.driver_email}
              phone={driver.driver_phone}
            />
          );
        })}
      </div>
    </div>
  );
}
