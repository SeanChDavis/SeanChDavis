import React from "react";
import { Link } from "react-router-dom";
import siteData from "../../data/siteData.json";

const Footer = () => {
    return (
        <footer
          className="bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-8 text-sm text-center font-semibold">
          &copy; {new Date().getFullYear()} <Link className="dark:text-gray-200 dark:hover:transition dark:hover:duration-300 dark:hover:ease-in-out dark:hover:text-gray-400"
                                                  to="/">{siteData.siteNameShort}</Link> &middot; {siteData.footerText}
        </footer>
    );
}

export default Footer;