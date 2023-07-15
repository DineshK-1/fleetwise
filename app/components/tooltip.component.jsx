import React from "react";

/**
 * Tooltip Component
 *
 * The Tooltip component is a simple React component that renders a tooltip with the specified content and adjusts its position based on the iscolor prop.
 *
 * @param {Object} props - The component props.
 * @param {string} props.content - The content to be displayed inside the tooltip.
 * @param {boolean} props.iscolor - A boolean value to determine the tooltip's position. If true, the tooltip will have a bottom position; otherwise, it will have a default position.
 *
 * @returns {JSX.Element} The JSX representation of the Tooltip component.
 */
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
