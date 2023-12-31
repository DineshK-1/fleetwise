"use client";

import { useState } from "react";
import NavItem from "./nav_item.component";
import ColorMode from "./color_mode.component";

/**
 * We lost the hackathon
 */
export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="sidebar"
      style={{ width: expanded ? "175px" : "75px" }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Navigation Icons */}
      <div className="Navigation">
        <NavItem
          text={"Fleet wise"}
          icon={"home"}
          expanded={expanded}
          link={"/"}
        />
        <NavItem
          text={"Cabs"}
          icon={"local_taxi"}
          expanded={expanded}
          link={"/Cabs"}
        />
        <NavItem
          text={"Drivers"}
          icon={"person"}
          expanded={expanded}
          link={"/drivers"}
        />
        <NavItem
          text={"Management"}
          icon={"manage_accounts"}
          expanded={expanded}
          link={"/Manage"}
        />
      </div>

      <div className="nav-bottom">
        <ColorMode />
      </div>
    </div>
  );
}
