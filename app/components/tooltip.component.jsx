import React from "react";

export default function Tooltip({ content, iscolor }) {
  
  return (
    <div className="tooltip">
      <div
        className="tooltip-inner"
        style={{ bottom: iscolor ? "10px" : "0px" }}
      >
        {content}
      </div>
    </div>
  );
}
