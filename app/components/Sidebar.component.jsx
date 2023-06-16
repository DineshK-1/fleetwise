"use client"

import { useState } from "react"
import NavItem from "./nav-item.component";

export default function Sidebar({ child }) {

    const [expanded, setExpanded] = useState(true);

    return (
        <div className="main-wrapper">
            <div className="container">
                <div className="sidebar" style={{ width: expanded ? "175px" : "75px" }}>
                    {/* Navigation Icons */}
                    <div className="Navigation">
                        <NavItem text={"Fleet wise"} icon={"question_mark"} expanded={expanded} link={"/"} />
                        <NavItem text={"Cabs"} icon={"local_taxi"} expanded={expanded} link={"/Cabs"} />
                        <NavItem text={"Drivers"} icon={"person"} expanded={expanded} link={"/Drivers"}  />
                        <NavItem text={"Management"} icon={"manage_accounts"} expanded={expanded} link={"/Mangement"} />

                        <div className="expand" style={{ justifyContent: "center" }} onClick={() => setExpanded((e) => !e)}>
                            <span className="material-icons-outlined" style={{ transform: expanded ? "rotate(90deg)" : "rotate(270deg)", transition:"all 500ms" }}>expand_more</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-section">
                {child}
            </div>
        </div>
    )
}