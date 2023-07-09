"use client";
import React, { useRef, useState } from "react";
import cabimg from "@/public/cabpic.svg";
import Image from "next/image";

export default function CabCard({ cab_id, reg_no, cab_model, cab_color }) {
  const [updateModal, setUpdateModal] = useState(false);

  const model = useRef();
  const color = useRef();
  const regno = useRef();

  const [editing, setEditing] = useState(false);

  const handleEdit = async () => {
    setCreating(true);
    try {
      const resp = await fetch(
        process.env.NEXT_PUBLIC_API_HOST +
          `/create_cab?model=${model.current.value}&color=${color.current.value}&regno=${regno.current.value}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.detail) {
            console.log("ERROR");
          } else {
            setCabs((cabs) => {
              let temp = [...cabs.cabs, res];
              return {
                cabs: temp,
              };
            });
            router.refresh();
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
      setCreating(false);
      setShowModal(() => {
        setModalOccupied(false);
        return false;
      });
    }
  };

  return (
    <>
      <div>
        <div className="cab-container">
          <div className="cab-img">
            <div className="cab-info">
              <div style={{ color: cab_color }} className="cab-info-text">
                <h3>{reg_no}</h3>
                <h3>{cab_model}</h3>
                <h3>{cab_color}</h3>
              </div>
              <div className="cab-info-del">
                <span
                  class="material-icons-outlined"
                  onClick={() => {
                    setUpdateModal(true);
                  }}
                >
                  edit
                </span>
              </div>
              <Image src={cabimg} alt="cab" width={220} height={150} />
            </div>
          </div>
        </div>
      </div>
      {updateModal && (
        <div className="update-modal">
          <div className="update-modal-header">
            <h3>UPDATE CAB</h3>
            <span
              className="material-icons-outlined"
              onClick={() => {
                setUpdateModal(false);
              }}
            >
              close
            </span>
          </div>
          <div className="update-modal-body">
            <form>
              <div className="update-modal-inputs">
                <label>Model:</label>
                <input type="text" placeholder="Model" value={cab_model} />
                <label>Color:</label>
                <input type="text" placeholder="Color" value={color} />
                <label>Reg Number:</label>
                <input
                  type="text"
                  placeholder="Registration Number"
                  value={reg_no}
                />
              </div>
            </form>
          </div>
          <div className="update-modal-footer">
            <button className="update-btn" onClick={handleEdit}>
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
}
