import { Link, NavLink } from "react-router-dom";
import React from "react";
import { MdEmail } from "react-icons/md";
import siteData from "../../data/siteData";

const Header = () => {

    const navigationLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/now", label: "Now" },
        { to: "/uses", label: "Uses" },
        { to: "/projects", label: "Projects" },
        { to: "/contact", label: <MdEmail className="inline-block text-lg align-middle ms-2" title="Contact Sean" /> }
    ];

    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-800 py-4 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-lg font-semibold">
                    <Link to="/" className="text-gray-900 dark:text-gray-200">{siteData.siteName}</Link>
                </h1>
                <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 text-sm font-semibold">
                    {navigationLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) => isActive
                                ? "text-gray-800 dark:text-gray-200"
                                : "transition duration-300 ease-in-out text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;