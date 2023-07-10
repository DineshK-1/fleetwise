"use client"

import { useEffect, useState } from "react";
import DraggableDriver from "./draggable_driver.component";
import { useRouter } from "next/navigation";

export default function ManageCabCard({ setCabs, cab_id, cab_name, reg, color, driver_name, driver_id }) {

    const router = useRouter();
    const [name, setName] = useState(driver_name);
    const [id, setID] = useState(driver_id);

    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        setName(driver_name)
        setID(driver_id)
    }, [driver_id, driver_name])

    const deleteDriver = async () => {
        let resp = await fetch(process.env.NEXT_PUBLIC_API_HOST + `/delete_cab_assignment?cab_id=${cab_id}`, {
            method: "POST"
        }).then((res) => res.json()).then((res) => {
            if (res.detail) {
                console.log("ERROR")
            } else {
                setName();
                setID();
                router.refresh();
            }
        })
    }

    const handleDrop = async (event) => {
        setUpdating(true);
        let res = await fetch(process.env.NEXT_PUBLIC_API_HOST + `/assign_cab?cab_id=${cab_id}&driver_id=${event.dataTransfer.getData("driver_id")}`, {
            method: "POST"
        }).then((res) => res.json()).then((res) => {
            if (res.detail) {
                console.log("ERROR")
            } else {
                setCabs(({ cabs }) => {
                    let tempArray = [...cabs]

                    tempArray = tempArray.map((cab) => {
                        if (cab.id == cab_id) {
                            return res
                        }
                        return cab
                    })
                    return { cabs: tempArray }
                })
                router.refresh();
            }
        }).finally(() => {
            setUpdating(false);
        })
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    return (
        <div className="cab-card" onDrop={handleDrop} onDragOver={handleDragOver}>
            <span className="reg">Registeration: {reg}</span>
            <span className="model">Model: {cab_name}</span>
            <span className="color">Color: {color}</span>
            <hr className="divider" />
            <DraggableDriver first={"69"} second={name} third={id} Draggable={false} deleteEvent={deleteDriver} updating={updating} />
        </div>
    )
}