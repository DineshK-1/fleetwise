"use client"

import Image from "next/image"

export default function DraggableDriver({ first, second, third, Draggable, deleteEvent }) {

    const handleOnDrag = (event) => {
        event.dataTransfer.setData("widgetName", second)
        event.dataTransfer.setData("widgetID", third)
    }

    return (
        <div className={Draggable ? "draggable-box fg" : "draggable-box"} draggable={Draggable} onDragStart={handleOnDrag}>
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
                    <div className="third" style={{ display: "flex", alignItems: "center", gap: ".25rem" }}>
                        <span>ID: {third}</span>
                        {
                            !Draggable &&
                            <span className="material-icons-outlined" onClick={deleteEvent}>delete</span>
                        }
                    </div>
                </>
                :
                <div className="msg">No Driver Assigned</div>
            }
        </div>
    )
}