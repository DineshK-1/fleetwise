"use client"

import { useState } from "react"
import DraggableDriver from "./draggable_driver.component";

export default function DriverWrapper({ Drivers }) {
    const [drivers, setDrivers] = useState(Drivers);

    return (
        <div className="drivers">
            <h3 className="w-500">Drivers</h3>
            <div className="search-boxes">
                <input type="text" className="search" placeholder="Search name here" />
                <input type="text" className="search" placeholder="Search ID here" />
            </div>

            {drivers &&
                drivers.drivers.map((driver) => {
                    console.log(driver)
                    return (
                        <DraggableDriver key={driver.id} first={"test"} second={`${driver.driver_first_name} ${driver.driver_last_name}`} third={driver.driver_ID} Draggable={true} />
                    )
                })}
        </div>
    )
}