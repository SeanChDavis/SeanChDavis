import {Link} from "react-router-dom";
import React from "react";
import siteData from "../../data/siteData";
import Navigation from "../ui/Navigation.jsx";
import {MdHome} from "react-icons/md";
import {useLocation} from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header
            className="w-full border-b-3 bg-gray-900 text-gray-400 border-[#0080a3] dark:border-gray-800 py-4 px-4 md:px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-lg font-semibold">
                    <Link to="/" className="text-gray-200 flex items-center gap-x-1.5 group">
                        <span className="inline-block">{siteData.siteName}</span>
                        {location.pathname !== "/" && (
                            <span className="hidden md:inline-block text-gray-600 group-hover:text-white transition duration-200">
                                <MdHome/>
                            </span>
                        )}
                    </Link>
                </h1>
                <Navigation/>
            </div>
        </header>
    );
}