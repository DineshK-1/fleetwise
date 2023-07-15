"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * NavItem Component
 *
 * The NavItem component represents a single item in the navigation menu of the Sidebar. It includes an icon and a text label for the navigation item. The component also adds an "active" class to the currently selected item based on the current pathname.
 *
 * @param {Object} props - The props passed to the NavItem component.
 * @param {string} props.text - The text label for the navigation item.
 * @param {string} props.icon - The icon for the navigation item.
 * @param {boolean} props.expanded - Whether the sidebar is expanded or collapsed.
 * @param {string} props.link - The URL link for the navigation item.
 * @returns {JSX.Element} The JSX representation of the NavItem component.
 */
export default function NavItem({ text, icon, expanded, link }) {
  const pathname = usePathname();

  return (
    <Link href={link} prefetch={false}>
      <div className={"nav-item" + (pathname === link ? " active" : "")}>
        <span className="material-icons-outlined">{icon}</span>
        <span className={"text" + (expanded ? "" : " hide")}>{text}</span>
      </div>
    </Link>
  );
}
