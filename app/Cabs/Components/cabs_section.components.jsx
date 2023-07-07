"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import CabCard from "@/app/components/cab_card.component";
import CreateCab from "./create_cab.component";

export default function CabsSection({ cabs_data }) {
  const [cabs, setCabs] = useState(cabs_data);
  const [modalOccupied, setModalOccupied] = useState(false);

  const nameRef = useRef();
  const idRef = useRef();

  const handleSearch = async () => {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_cabs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        ID: parseInt(idRef.current.value),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          console.log("ERROR");
        } else if (res.cabs) {
          setCabs(res);
        }
      });
  };

  return (
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
            className="search name-search"
            placeholder="Filter by model (Dropdown)"
            ref={nameRef}
          />
        </div>
        <motion.input
          type="search"
          className="search name-search"
          placeholder="Search by reg number"
          ref={idRef}
        />
      </div>
      <div className="add-cab-btn">
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
        <CreateCab
          setCabs={setCabs}
          modalOccupied={modalOccupied}
          setModalOccupied={setModalOccupied}
        />
      </div>

      <div className="cab-cards">
        {cabs.cabs.map((cab) => (
          <CabCard
            key={cab.id}
            cab_id={cab.id}
            reg_no={cab.cab_regno}
            cab_model={cab.cab_model}
            cab_color={cab.cab_color}
          />
        ))}
      </div>
    </div>
  );
}
