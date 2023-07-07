import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function CreateCab({
  setCabs,
  modalOccupied,
  setModalOccupied,
}) {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);

  const model = useRef();
  const color = useRef();
  const regno = useRef();

  const handleSubmit = async () => {
    setCreating(true);
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
      })
      .finally(() => {
        setCreating(false);
        setShowModal(() => {
          setModalOccupied(false);
          return false;
        });
      });
  };

  return (
    <div>
      <div
        className="add-cabs-btn"
        onClick={() => {
          if (!modalOccupied) {
            setShowModal(true);
          }
        }}
      >
        + ADD CABS
      </div>
      {showModal && (
        <div className="add-modal">
          <div className="modal-header">
            <h3>ADD CAB</h3>
            <span
              className="material-icons-outlined"
              onClick={() => {
                setShowModal(false);
              }}
            >
              close
            </span>
          </div>
          <div className="modal-body">
            <form>
              <div className="modal-inputs">
                <label>Model:</label>
                <input type="text" placeholder="Model" ref={model} />
                <label>Color:</label>
                <input type="text" placeholder="Color" ref={color} />
                <label>Reg Number:</label>
                <input
                  type="text"
                  placeholder="Registration Number"
                  ref={regno}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="create-btn"
              onClick={handleSubmit}
              disabled={creating ? true : false}
            >
              {creating ? "Creating Cab..." : "Create Cab"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
