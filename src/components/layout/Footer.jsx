import React from "react";
import {Link} from "react-router-dom";
import siteData from "../../data/siteData.json";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";

export default function Footer() {
    const iconClasses = "inline-block align-middle text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition duration-300";

    return (
        <footer className="bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-8 text-sm text-center font-semibold">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:block">
                    <div className="block md:inline">
                        <span>&copy; {new Date().getFullYear()}</span>{" "}&middot;{" "}
                        {siteData.footerText}<span className="hidden md:inline">{" "}&middot;{" "}</span>
                    </div>
                    <div className="block md:inline">
                        A site by <a href="https://crispydiv.com/">Crispy Div</a>.
                    </div>
                </div>
                <div className="flex gap-2 text-lg">
                    <a href={siteData.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={iconClasses}/>
                    </a>
                    <a href={siteData.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={iconClasses}/>
                    </a>
                    <Link to="/contact">
                        <MdAlternateEmail className={iconClasses}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
}