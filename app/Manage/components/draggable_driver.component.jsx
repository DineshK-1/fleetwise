"use client";

import Image from "next/image";

/**
 * DraggableDriver Component
 *
 * The DraggableDriver component is a React component that represents a draggable box displaying information about a driver.
 * It allows dragging the driver onto a cab and supports additional features like deleting a driver and indicating if a driver is already assigned to a cab.
 *
 * @param {Object} props - The component props.
 * @param {number} props.driver_id - The unique ID of the driver.
 * @param {string} props.first - Custom ID for the draggable driver
 * @param {string} props.second - The full name of the driver.
 * @param {number} props.third - The ID of the driver.
 * @param {Object} props.cab - Information about the assigned cab (not explicitly explained in the code provided).
 * @param {boolean} props.Draggable - Indicates whether the driver is draggable.
 * @param {function} props.deleteEvent - The function to handle the deletion of the driver (if applicable).
 * @param {boolean} props.updating - Indicates whether the driver information is currently being updated (not explicitly explained in the code provided).
 *
 * @returns {JSX.Element} The JSX representation of the DraggableDriver component.
 */
export default function DraggableDriver({
  driver_id,
  first,
  second,
  third,
  cab,
  Draggable,
  deleteEvent,
  updating,
}) {
  const handleOnDrag = (event) => {
    event.dataTransfer.setData("driver_id", driver_id);
    event.dataTransfer.setData("widgetName", second);
    event.dataTransfer.setData("widgetID", third);
  };

  return (
    <div
      className={Draggable ? "draggable-box fg" : "draggable-box"}
      draggable={Draggable || !cab}
      onDragStart={handleOnDrag}
    >
      {first && second && third ? (
        <>
          <div className="first">
            <Image
              src={"/blank-profile.png"}
              alt="driver pic"
              width={16}
              height={16}
              style={{ borderRadius: "5rem" }}
            />
          </div>
          <div className="second">{second}</div>
          <div
            className="third"
            style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
          >
            <span>ID: {third}</span>
            {!Draggable && (
              <span
                className="material-icons-outlined"
                style={{ cursor: "pointer" }}
                onClick={deleteEvent}
              >
                delete
              </span>
            )}
            {Draggable && cab && <span className="tag cab">Assigned</span>}
          </div>
        </>
      ) : (
        <div className="msg">
          {updating ? "Assigning driver" : "No Driver Assigned"}
        </div>
      )}
    </div>
  );
}
