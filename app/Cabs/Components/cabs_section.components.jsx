"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import CabCard from "@/app/components/cab_card.component";
import CreateCab from "./create_cab.component";
import { ErrorContext } from "@/app/components/errorContext";

/**
 * CabsSection Component
 *
 * The CabsSection component is a React component that displays a section for managing cabs.
 * It allows users to search and filter cab data based on model name, registration number, and color.
 *
 * This component receives the `cabs_data` prop, which contains an object with cabs data from the API.
 * It uses the Framer Motion library for animations on input boxes and search button interactions.
 *
 * The `CabsSection` component also includes the `CreateCab` component, which allows users to create new cabs.
 *
 * @param {Object} cabs_data - An object containing cabs data from the FleetWise API.
 * @returns {JSX.Element} The JSX representation of the CabsSection component.
 */

export default function CabsSection({ cabs_data }) {
  // State to hold the cabs data
  const [cabs, setCabs] = useState(cabs_data);
  const [modalOccupied, setModalOccupied] = useState(false);

  const [nameQuery, setNameQuery] = useState("");
  const [colorQuery, setColorQuery] = useState("");
  const [idQuery, setIDQuery] = useState("");

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
      <div
        className="cabs-page"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="search-cabs">
          <div className="search-boxes">
            <motion.input
              type="search"
              className="search cab-search"
              placeholder="Filter by model name"
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.input
              type="search"
              className="search cab-search"
              placeholder="Search by Registeration Number"
              value={idQuery}
              onChange={(e) => setIDQuery(e.target.value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.input
              type="search"
              className="search cab-search"
              placeholder="Search by Color"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              value={colorQuery}
              onChange={(e) => setColorQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-and-card">
          <CreateCab
            setCabs={setCabs}
            modalOccupied={modalOccupied}
            setModalOccupied={setModalOccupied}
          />
          <div className="cab-cards">
            {cabs.cabs.map((cab, i) => {
              if (
                cab.cab_model.toLowerCase().includes(nameQuery.toLowerCase()) &&
                cab.cab_color
                  .toLowerCase()
                  .includes(colorQuery.toLowerCase()) &&
                cab.cab_regno.toLowerCase().includes(idQuery.toLowerCase())
              ) {
                return (
                  <CabCard
                    key={i}
                    cab_id={cab.id}
                    reg_no={cab.cab_regno}
                    cab_model={cab.cab_model}
                    cab_color={cab.cab_color}
                    driver={cab.driver}
                    modalOccupied={modalOccupied}
                    setModalOccupied={setModalOccupied}
                    setCabs={setCabs}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
