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
                                modalOccupied={modalOccupied}
                                setModalOccupied={setModalOccupied}
                                setDrivers={setDrivers}
                            />
                        );
                    })}
            </div>

            <CreateButton setDrivers={setDrivers} />
        </>
    )
}