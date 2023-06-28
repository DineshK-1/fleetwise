"use client"

import { useState } from "react";
import DraggableDriver from "./draggable_driver.component";

export default function ManageCabCard({ cab_name, reg, color, driver_name, driver_id }) {

    const [name, setName] = useState(driver_name);
    const [id, setID] = useState(driver_id);

    const deleteDriver = () => {
        setName(null);
        setID(null);
    }

    const handleDrop = (event) => {
        setName(event.dataTransfer.getData("widgetName"));
        setID(event.dataTransfer.getData("widgetName"));
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
            <DraggableDriver first={"69"} second={name} third={id} Draggable={false} deleteEvent={deleteDriver} />
        </div>
    )
}