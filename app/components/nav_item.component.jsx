"use client"

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function NavItem({ text, icon, expanded, link }) {

    const pathname = usePathname();

    return (
        <Link href={link}>
            <div className={"nav-item" + (pathname === link ? " active" : "")}>
                <span className="material-icons-outlined">{icon}</span>
                <span className={"text" + (expanded ? "" : " hide")}>{text}</span>
            </div>
        </Link>
    )
}