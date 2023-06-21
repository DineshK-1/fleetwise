"use client"

import DriverCard from "@/app/components/driver_card.component";
import { useState } from "react";
import CreateButton from "./create_driver.component";

export default function DriversSection({ drivers_data }) {

    const [drivers, setDrivers] = useState(drivers_data);

    return (
        <>
            <div className="driver-cards">
                {
                    drivers &&
                    drivers.drivers.map((driver) => {
                        return (
                            <DriverCard
                                key={driver.id}
                                first_name={driver.driver_first_name}
                                last_name={driver.driver_last_name}
                                ID={driver.driver_ID}
                                email={driver.driver_email}
                                phone={driver.driver_phone}
                            />
                        );
                    })}
            </div>

            <CreateButton setDrivers={setDrivers} />
        </>
    )
}