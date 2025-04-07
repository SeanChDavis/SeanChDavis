import { Link } from "react-router-dom";
import React from "react";
import siteData from "../../data/siteData";
import Navigation from "../ui/Navigation.jsx";


const Header = () => {

    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-800 py-4 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-lg font-semibold">
                    <Link to="/" className="text-gray-900 dark:text-gray-200">{siteData.siteName}</Link>
                </h1>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;