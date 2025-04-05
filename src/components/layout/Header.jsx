import { Link, NavLink } from "react-router-dom";
import React from "react";
import { MdEmail } from "react-icons/md";

const Header = () => {

    const menuActiveClasses = "text-gray-800 dark:text-gray-200";
    const menuHoverClasses = "transition duration-300 ease-in-out text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200";

    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-800 py-4 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-lg font-semibold">
                    <Link to="/" className="dark:text-gray-200">Sean Christopher Davis</Link>
                </h1>
                <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 text-sm font-semibold">
                    <NavLink to="/" className={({ isActive }) => isActive ? menuActiveClasses : menuHoverClasses}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? menuActiveClasses : menuHoverClasses}>
                        About
                    </NavLink>
                    <NavLink to="/now" className={({ isActive }) => isActive ? menuActiveClasses : menuHoverClasses}>
                        Now
                    </NavLink>
                    <NavLink to="/uses" className={({ isActive }) => isActive ? menuActiveClasses : menuHoverClasses}>
                        Uses
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? menuActiveClasses : menuHoverClasses}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? menuActiveClasses : menuHoverClasses}>
                        <MdEmail className="inline-block text-lg align-middle ms-2" />
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;