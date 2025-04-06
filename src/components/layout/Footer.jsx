import React from "react";
import { Link } from "react-router-dom";
import siteData from "../../data/siteData.json";

const Footer = () => {
    return (
        <footer
          className="border-t border-gray-200 dark:border-gray-800 py-6 px-4 md:px-8 text-sm text-center text-gray-600 dark:text-gray-400 font-semibold">
          &copy; {new Date().getFullYear()} <Link className="transition duration-300 ease-in-out dark:hover:text-gray-200"
                                                  to="/">{siteData.siteNameShort}</Link> &middot; Nothing here is accidental.
        </footer>
    );
}

export default Footer;