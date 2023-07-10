"use client"

import Image from "next/image"

export default function DraggableDriver({ driver_id, first, second, third, cab, Draggable, deleteEvent, updating }) {

    const handleOnDrag = (event) => {
        event.dataTransfer.setData("driver_id", driver_id)
        event.dataTransfer.setData("widgetName", second)
        event.dataTransfer.setData("widgetID", third)
    }

    return (
        <div className={Draggable ? "draggable-box fg" : "draggable-box"} draggable={Draggable || !cab} onDragStart={handleOnDrag}>
            {(first && second && third) ?
                <>
                    <div className="first"><Image
                        src={"/blank-profile.png"}
                        alt="driver pic"
                        width={16}
                        height={16}
                        style={{ borderRadius: "5rem" }}
                    /></div>
                    <div className="second">{second}</div>
                    <div className="third" style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                        <span>ID: {third}</span>
                        {
                            !Draggable &&
                            <span className="material-icons-outlined" style={{ cursor: "pointer" }} onClick={deleteEvent}>delete</span>
                        }
                        {
                            (Draggable && cab) &&
                            <span className="tag cab">Assigned</span>
                        }
                    </div>
                </>
                :
                <div className="msg">{updating ? "Assigning driver" : "No Driver Assigned"}</div>
            }
        </div>
    )
}