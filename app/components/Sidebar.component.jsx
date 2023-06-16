"use client"

import { useState } from "react"

export default function Sidebar() {

    const [expanded, setExpanded] = useState(true);

    return (
        <div className="sidebar">
            <div className="logo">
                <span className="material-icons-outlined">question_mark</span>
            </div>

            {/* Navigation Icons */}
            <div className="Navigation">
                <div className="nav-item">
                    <span className="material-icons-outlined">local_taxi</span>
                </div>
                <div className="nav-item">
                    <span className="material-icons-outlined">person</span>
                </div>
                <div className="nav-item">
                    <span className="material-icons-outlined">manage_accounts</span>
                </div>
                <div className="nav-item" onClick={() => setExpanded((e) => !e)}>
                    <span className="material-icons-outlined" style={{ transform: expanded ? "rotate(90deg)" : "rotate(270deg)" }}>expand_more</span>
                </div>
            </div>
        </div>
    )
}