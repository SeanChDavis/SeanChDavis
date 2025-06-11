import React from "react";
import { Link } from "react-router-dom";
import siteData from "../../data/siteData.json";

const Footer = () => {
    return (
        <footer
          className="bg-auto dark:bg-gray-950 border-t border-gray-200 dark:border-gray-950 py-6 px-4 md:px-8 text-sm text-center text-gray-600 dark:text-gray-400 font-semibold">
          &copy; {new Date().getFullYear()} <Link className="dark:transition duration-300 ease-in-out dark:hover:text-gray-200"
                                                  to="/">{siteData.siteNameShort}</Link> &middot; {siteData.footerText}
        </footer>
    );
}

export default Footer;