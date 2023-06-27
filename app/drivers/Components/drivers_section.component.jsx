"use client"

import DriverCard from "@/app/components/driver_card.component";
import { useState } from "react";
import CreateButton from "./create_driver.component";
import { motion, AnimatePresence } from "framer-motion";

export default function DriversSection({ drivers_data }) {

    const [drivers, setDrivers] = useState(drivers_data);
    const [modalOccupied, setModalOccupied] = useState(false);

    return (
        <>
            <AnimatePresence>
                {
                    modalOccupied &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hide-background" />
                }
            </AnimatePresence>
            <div className="search-drivers">
                <div className="search-boxes">
                    <motion.input
                        type="search"
                        className="search name-search"
                        placeholder="Enter a name to search"
                    />
                    <motion.input
                        type="search"
                        className="search"
                        placeholder="Enter a ID to search"
                    />
                    <motion.input
                        type="search"
                        className="search cab-search"
                        placeholder="Enter name of the cab"
                    />
                </div>
                <div className="buttons-section">
                    <motion.div initial={{ opacitx: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} className="search-button">
                        Search
                    </motion.div>
                    <CreateButton setDrivers={setDrivers} modalOccupied={modalOccupied} setModalOccupied={setModalOccupied} />
                </div>
            </div>

            <div className="driver-cards">
                {
                    drivers &&
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
                                modalOccupied={modalOccupied}
                                setModalOccupied={setModalOccupied}
                                setDrivers={setDrivers}
                            />
                        );
                    })}
            </div>
        </>
    )
}