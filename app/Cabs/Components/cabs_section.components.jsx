"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import CabCard from "@/app/components/cab_card.component";
import CreateCab from "./create_cab.component";

export default function CabsSection({ cabs_data }) {
  const [cabs, setCabs] = useState(cabs_data);
  const [modalOccupied, setModalOccupied] = useState(false);

  const [nameQuery, setNameQuery] = useState("");
  const [colorQuery, setColorQuery] = useState("");
  const [idQuery, setIDQuery] = useState("");

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
              value={nameQuery} onChange={(e) => setNameQuery(e.target.value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.input
              type="search"
              className="search cab-search"
              placeholder="Search by Registeration Number"
              value={idQuery} onChange={(e) => setIDQuery(e.target.value)}
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
              value={colorQuery} onChange={(e) => setColorQuery(e.target.value)}
            />
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
            </div>
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
              if (cab.cab_model.toLowerCase().includes(nameQuery.toLowerCase()) && cab.cab_color.toLowerCase().includes(colorQuery.toLowerCase()) && cab.cab_regno.toLowerCase().includes(idQuery.toLowerCase())) {
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
