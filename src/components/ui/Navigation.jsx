import {NavLink} from "react-router-dom";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";

export default function Navigation() {

    const navigationLinks = [
        {to: "/about", label: "About"},
        {to: "/projects", label: "Projects"},
        {to: "/uses", label: "Uses"},
        {to: "/contact", label: <MdAlternateEmail className="inline-block text-lg align-middle" title="Contact Sean Davis"/>}
    ];

    return (
        <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 text-sm font-semibold">
            {navigationLinks.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.to}
                    className={({isActive}) => isActive
                        ? "no-underline text-[#9ca4b1]"
                        : "transition duration-300 ease-in-out text-white hover:text-[#9ca4b1]"}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}