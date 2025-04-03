import { Link, NavLink } from "react-router-dom";
import React from "react";
import { MdEmail } from "react-icons/md";

const Header = () => {

    const transitionClasses = "transition duration-300 ease-in-out hover:text-gray-800";

    return (
        <header className="w-full border-b border-gray-200 py-4 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-lg font-semibold">
                    <Link to="/" className="hover:text-gray-800">Sean Ch<span className={`text-gray-500 ${transitionClasses}`}>ristopher</span> Davis</Link>
                </h1>
                <nav className="mt-2 md:mt-0 space-x-2 sm:space-x-4 text-sm text-gray-500 font-semibold">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-800" : "hover:text-gray-800"}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-800" : "hover:text-gray-800"}>
                        About
                    </NavLink>
                    <NavLink to="/now" className={({ isActive }) => isActive ? "text-gray-800" : "hover:text-gray-800"}>
                        Now
                    </NavLink>
                    <NavLink to="/uses" className={({ isActive }) => isActive ? "text-gray-800" : "hover:text-gray-800"}>
                        Uses
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "text-gray-800" : "hover:text-gray-800"}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-gray-800" : "hover:text-gray-800"}>
                        <MdEmail className="inline-block text-lg align-middle ms-2" />
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;