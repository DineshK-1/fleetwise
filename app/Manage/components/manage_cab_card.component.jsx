"use client";

import { useContext, useEffect, useState } from "react";
import DraggableDriver from "./draggable_driver.component";
import { useRouter } from "next/navigation";
import { ErrorContext } from "@/app/components/errorContext";

/**
 * ManageCabCard Component
 *
 * The ManageCabCard component is a React component that represents a card for managing a specific cab.
 * It includes information about the cab, such as registration, model, and color.
 * The card allows for dragging and dropping drivers onto the cab to assign them, and it provides a button to delete the assigned driver.
 *
 * @param {Object} props - The component props.
 * @param {function} props.setCabs - A function to update the list of cabs.
 * @param {string} props.cab_id - The ID of the cab.
 * @param {string} props.cab_name - The name/model of the cab.
 * @param {string} props.reg - The registration number of the cab.
 * @param {string} props.color - The color of the cab.
 * @param {string} props.driver_name - The name of the assigned driver.
 * @param {string} props.driver_id - The ID of the assigned driver.
 *
 * @returns {JSX.Element} The JSX representation of the ManageCabCard component.
 */
export default function ManageCabCard({
  setCabs,
  cab_id,
  cab_name,
  reg,
  color,
  driver_name,
  driver_id,
}) {
  const router = useRouter();
  const [name, setName] = useState(driver_name);
  const [id, setID] = useState(driver_id);

  const [updating, setUpdating] = useState(false);

  let { setErrors } = useContext(ErrorContext);

  useEffect(() => {
    // Update the name and ID state when the driver_name and driver_id props change
    setName(driver_name);
    setID(driver_id);
  }, [driver_id, driver_name]);

  const deleteDriver = async () => {
    // Delete the assigned driver for the cab
    let resp = await fetch(
      process.env.NEXT_PUBLIC_API_HOST +
        `/delete_cab_assignment?cab_id=${cab_id}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          setErrors((e) => {
            return [...e, "Error Deleting Driver"]
          })
        } else {
          setName();
          setID();
          router.refresh();
        }
      });
  };

  const handleDrop = async (event) => {
    // Handle the dropping of a driver onto the cab to assign them
    setUpdating(true);
    let res = await fetch(
      process.env.NEXT_PUBLIC_API_HOST +
        `/assign_cab?cab_id=${cab_id}&driver_id=${event.dataTransfer.getData("driver_id")}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.detail) {
          setErrors((e) => {
            return [...e, res.detail]
          })
        } else {
          setCabs(({ cabs }) => {
            let tempArray = [...cabs];

            tempArray = tempArray.map((cab) => {
              if (cab.id == cab_id) {
                return res;
              }
              return cab;
            });
            return { cabs: tempArray };
          });
          router.refresh();
        }
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="cab-card" onDrop={handleDrop} onDragOver={handleDragOver}>
      <span className="reg">Registeration: {reg}</span>
      <span className="model">Model: {cab_name}</span>
      <span className="color">Color: {color}</span>
      <hr className="divider" />
      <DraggableDriver
        first={"69"}
        second={name}
        third={id}
        Draggable={false}
        deleteEvent={deleteDriver}
        updating={updating}
      />
    </div>
  );
}
