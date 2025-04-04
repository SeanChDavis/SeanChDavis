import React from "react";
import { Link } from "react-router-dom";
import siteData from "../../data/siteData.json";

const Footer = () => {
  return (
      <footer className="border-t border-gray-200 py-6 px-4 md:px-8 text-sm text-center text-gray-600 font-semibold">
          &copy; {new Date().getFullYear()} <Link to="/">{siteData.siteTitle}</Link>. All rights reserved.
      </footer>
  );
}

export default Footer;