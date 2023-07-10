"use client"

import { useState } from "react";
import ManageCabCard from "./manage_cab_card.component";

export default function CabWrapper({ cabs }) {

    const [cabbies, setCabs] = useState(cabs);
    return (
        <div className="cabs">
            {
                cabbies &&
                cabbies.cabs.map(({ id, cab_model, cab_color, cab_regno, driver }) => {
                    let driver_name, driver_id = null;
                    if (driver) {
                        driver_name = driver.driver_first_name + " " + driver.driver_last_name
                        driver_id = driver.driver_ID
                    }
                    return (
                        <ManageCabCard key={id} setCabs={setCabs} cab_id={id} cab_name={cab_model} color={cab_color} reg={cab_regno} driver_name={driver_name} driver_id={driver_id} />
                    )
                })
            }
        </div>
    )
}