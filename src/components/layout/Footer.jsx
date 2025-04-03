import React from "react";

const Footer = () => {
  return (
      <footer className="border-t border-gray-200 py-6 px-4 md:px-8 text-sm text-center text-gray-600 font-semibold">
          &copy; {new Date().getFullYear()} Sean Christopher Davis. All rights reserved.
      </footer>
  );
}

export default Footer;