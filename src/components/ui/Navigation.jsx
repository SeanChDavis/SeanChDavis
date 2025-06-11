import {NavLink} from "react-router-dom";
import React from "react";
import {MdEmail} from "react-icons/md";

export default function Navigation() {

    const navigationLinks = [
        {to: "/about", label: "About"},
        {to: "/now", label: "Now"},
        {to: "/uses", label: "Uses"},
        {to: "/projects", label: "Projects"},
        {to: "/contact", label: <MdEmail className="inline-block text-lg align-middle" title="Contact Sean"/>}
    ];

    return (
        <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 text-sm font-semibold">
            {navigationLinks.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.to}
                    className={({isActive}) => isActive
                        ? "no-underline text-cyan-500"
                        : "transition duration-300 ease-in-out text-white hover:text-gray-400"}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}