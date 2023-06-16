"use client"

import { useState } from "react"
import NavItem from "./nav-item.component";

export default function Sidebar({ child }) {

    const [expanded, setExpanded] = useState(true);

    return (
        <div className="sidebar" style={{ width: expanded ? "175px" : "75px" }} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
            {/* Navigation Icons */}
            <div className="Navigation">
                <NavItem text={"Fleet wise"} icon={"question_mark"} expanded={expanded} link={"/"} />
                <NavItem text={"Cabs"} icon={"local_taxi"} expanded={expanded} link={"/Cabs"} />
                <NavItem text={"Drivers"} icon={"person"} expanded={expanded} link={"/Drivers"} />
                <NavItem text={"Management"} icon={"manage_accounts"} expanded={expanded} link={"/Manage"} />
            </div>
        </div>
    )
}