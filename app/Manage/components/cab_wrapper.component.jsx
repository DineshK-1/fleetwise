"use client"

import { useState } from "react";
import ManageCabCard from "./manage_cab_card.component";

export default function CabWrapper({ cabs }) {

    const [cabbies, setCabs] = useState(cabs);

    const [nameQuery, setNameQuery] = useState("");
    const [colorQuery, setColorQuery] = useState("");
    const [idQuery, setIDQuery] = useState("");

    return (
        <div className="cabs">
            <h3 className="w-500">Cabs</h3>
            <div className="search-boxes-mgmt">
                <input type="text" value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} className="search" placeholder="Search name here" />
                <input type="text" value={idQuery} onChange={(e) => setIDQuery(e.target.value)} className="search" placeholder="Search ID here" />
                <input type="text" value={colorQuery} onChange={(e) => setColorQuery(e.target.value)} className="search" placeholder="Search by color here" />
            </div>

            {
                cabbies &&
                cabbies.cabs.map(({ id, cab_model, cab_color, cab_regno, driver }) => {
                    let driver_name, driver_id = null;
                    if (driver) {
                        driver_name = driver.driver_first_name + " " + driver.driver_last_name
                        driver_id = driver.driver_ID
                    }
                    if (cab_model.toLowerCase().includes(nameQuery.toLowerCase()) && cab_color.toLowerCase().includes(colorQuery.toLowerCase()) && cab_regno.toLowerCase().includes(idQuery.toLowerCase())) {
                        return (
                            <ManageCabCard key={id} setCabs={setCabs} cab_id={id} cab_name={cab_model} color={cab_color} reg={cab_regno} driver_name={driver_name} driver_id={driver_id} />
                        )
                    }
                })
            }
        </div>
    )
}