"use client";

import DriverCard from "@/app/components/driver_card.component";
import { useRef, useState } from "react";
import CreateButton from "./create_driver.component";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DriversSection Component
 *
 * The DriversSection component is a React component that displays a section for managing drivers.
 * It renders a search bar to filter drivers, a list of driver cards, and a create button to add new drivers.
 * The driver cards are displayed using data fetched from an API.
 *
 * @param {Object} drivers_data - The data containing the list of drivers to be displayed.
 * @returns {JSX.Element} The JSX representation of the DriversSection component.
 */

export default function DriversSection({ drivers_data }) {
  const [drivers, setDrivers] = useState(drivers_data);
  const [modalOccupied, setModalOccupied] = useState(false);

  const nameRef = useRef();
  const idRef = useRef();

  /**
   * handleSearch function
   *
   * This function is called when the search button is clicked.
   * It fetches the drivers based on the search criteria provided in the search bar inputs.
   * The fetched drivers are then set in the component's state to update the driver list.
   *
   */

  const handleSearch = async () => {
    const resp = await fetch(
      process.env.NEXT_PUBLIC_API_HOST + "/get_drivers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          ID: parseInt(idRef.current.value),
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          console.log("ERROR");
        } else if (res.drivers) {
          setDrivers(res);
        }
      });
  };

  return (
    <>
      <AnimatePresence>
        {modalOccupied && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hide-background"
          />
        )}
      </AnimatePresence>

      <div className="search-drivers">
        <div className="search-boxes">
          <motion.input
            type="search"
            className="search name-search"
            placeholder="Enter a name to search"
            ref={nameRef}
          />
          <motion.input
            type="number"
            className="search"
            placeholder="Enter a ID to search"
            ref={idRef}
          />
          <motion.input
            type="search"
            className="search cab-search"
            placeholder="Enter name of the cab"
          />
        </div>
        <div className="buttons-section">
          <motion.div
            initial={{ opacitx: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="search-button"
            onClick={handleSearch}
          >
            Search
          </motion.div>
          <CreateButton
            setDrivers={setDrivers}
            modalOccupied={modalOccupied}
            setModalOccupied={setModalOccupied}
          />
        </div>
      </div>

      <div className="driver-cards">
        <AnimatePresence mode="sync">
          {drivers &&
            drivers.drivers.map((driver) => {
              return (
                <DriverCard
                  key={driver.id}
                  primary_id={driver.id}
                  first_name={driver.driver_first_name}
                  last_name={driver.driver_last_name}
                  ID={driver.driver_ID}
                  email={driver.driver_email}
                  phone={driver.driver_phone}
                  created_date={driver.created_date}
                  cab={driver.cab}
                  modalOccupied={modalOccupied}
                  setModalOccupied={setModalOccupied}
                  setDrivers={setDrivers}
                />
              );
            })}
        </AnimatePresence>
      </div>
    </>
  );
}
