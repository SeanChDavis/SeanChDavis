import { NavLink } from "react-router-dom";
import React from "react";
import { MdEmail } from "react-icons/md";

export default function Navigation() {

    const navigationLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/now", label: "Now" },
        { to: "/uses", label: "Uses" },
        { to: "/projects", label: "Projects" },
        { to: "/contact", label: <MdEmail className="inline-block text-lg align-middle ms-2" title="Contact Sean" /> }
    ];

    return (
        <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 text-sm font-semibold">
            {navigationLinks.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.to}
                    className={({ isActive }) => isActive
                        ? "underline text-gray-800 dark:text-gray-200"
                        : "transition duration-300 ease-in-out text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}