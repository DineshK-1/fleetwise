"use client";

import { useState } from "react";
import DraggableDriver from "./draggable_driver.component";

/**
 * DriverWrapper Component
 *
 * The DriverWrapper component is a React component that represents a wrapper for displaying a list of drivers.
 * It includes a search functionality to filter drivers based on their names and IDs.
 * Each driver is displayed using the DraggableDriver component, which allows dragging and dropping the driver onto a cab.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.Drivers - The list of drivers to be displayed.
 *
 * @returns {JSX.Element} The JSX representation of the DriverWrapper component.
 */
export default function DriverWrapper({ Drivers }) {
  const [drivers, setDrivers] = useState(Drivers);
  const [nameQuery, setNameQuery] = useState("");
  const [idQuery, setIDQuery] = useState("");

  return (
    <div className="drivers">
      <h3 className="w-500">Drivers</h3>
      <div className="search-boxes-mgmt">
        <input
          type="text"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
          className="search"
          placeholder="Search name here"
        />
        <input
          type="number"
          value={idQuery}
          onChange={(e) => setIDQuery(e.target.value)}
          className="search"
          placeholder="Search ID here"
        />
      </div>

      {drivers &&
        drivers.drivers.map((driver) => {
          if (
            (driver.driver_first_name + " " + driver.driver_last_name)
              .toLowerCase()
              .includes(nameQuery.toLowerCase()) &&
            driver.driver_ID.toString().includes(idQuery)
          ) {
            return (
              <DraggableDriver
                key={driver.id}
                driver_id={driver.id}
                cab={driver.cab}
                first={"test"}
                second={`${driver.driver_first_name} ${driver.driver_last_name}`}
                third={driver.driver_ID}
                Draggable={true}
              />
            );
          }
        })}
    </div>
  );
}
