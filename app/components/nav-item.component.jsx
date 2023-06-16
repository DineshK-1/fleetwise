import Link from "next/link";

export default function NavItem({ text, icon, expanded, link }) {
    return (
        <Link href={link}>
            <div className="nav-item">
                <span className="material-icons-outlined">{icon}</span>
                <span className={"text" + (expanded ? "" : " hide")}>{text}</span>
            </div>
        </Link>
    )
}