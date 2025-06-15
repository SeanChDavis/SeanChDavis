import {Link} from "react-router-dom";
import siteData from "../data/siteData.json";
import React from "react";

export default function Home({ linkClasses, headingClasses, mainHeadingClasses, listClasses }) {

    return (
        <>
            <section className="space-y-6">
                <h1 className={mainHeadingClasses}>{siteData.siteTagline}</h1>
                <p>I’m Sean — a former U.S. Army service member turned web developer and information systems professional. Since 2008, I’ve been building websites and navigating various systems — military, tech, academic, and personal. I enjoy mapping things out and operating within strategically set boundaries. Welcome to my platform on the web, where I document my journey, share my projects, and explore the intersections of technology, systems, and life.</p>
                <ul className="space-x-3 flex flex-wrap pb-7 border-b-1 border-dashed mt-2 mb-6 border-gray-400 dark:border-gray-700">
                    <li>
                        <a
                            href="https://github.com/SeanChDavis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold bg-gray-100 dark:bg-gray-950 hover:text-cyan-600 hover:dark:text-cyan-500 px-3 py-1.5 rounded-full"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/SeanChDavis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold bg-gray-100 dark:bg-gray-950 hover:text-cyan-600 hover:dark:text-cyan-500 px-3 py-1.5 rounded-full"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <Link
                            className="text-sm font-semibold bg-gray-100 dark:bg-gray-950 hover:text-cyan-600 hover:dark:text-cyan-500 px-3 py-1.5 rounded-full"
                            to="/contact"
                        >
                            Email
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>I Write Code</h2>
                <p>
                    I specialize in web development, focusing on front-end technologies like React, Angular, and Tailwind CSS. I also have extensive experience with back-end systems, databases, WordPress, and DevOps practices. My goal is to create efficient, easy-to-use applications that solve real-world problems.
                </p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Currently</h2>
                <ul className={listClasses}>
                    <li>Preparing for <Link to="/netherlands-journey" className={linkClasses}>relocation to the Netherlands</Link> (September 2025) using the <abbr className="cursor-help no-underline" title="Dutch American Friendship Treaty">DAFT</abbr> visa</li>
                    <li>Focusing on long-term life strategy, Dutch integration, sustained freedom</li>
                    <li>Building this site as my all-encompassing digital platform with reduced digital footprint</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Past Milestones</h2>
                <ul className={listClasses}>
                    <li>2003 – Joined U.S. Army (<a href="https://www.goarmy.com/careers-and-jobs/support-logistics/transportation-inventory/92a-automated-logistical-specialist" className={'underline hover:no-underline'} target={"_blank"} rel="noopener noreferrer">92A</a>, Iraq [2003-04, 2005-06, 2009-10] + S. Korea [2007-08])</li>
                    <li>2012 – Honorable discharge from Army, transitioned to full-time web development</li>
                    <li>2021 – Sold company (w/ partners) and reset professional direction</li>
                    <li>2023 – Returned to university to complete Information Systems degree</li>
                    <li>2024 – Began planning move to Rotterdam, Netherlands</li>
                    <li>2025 – Graduated with a BS in Information Systems & Technology from <abbr className="cursor-help no-underline" title="University of Missouri-St. Louis">UMSL</abbr></li>
                </ul>
            </section>

            <section className="space-y-2">
                <p>For more information about my journey up to this point, <Link to="/about" className={linkClasses}>check out the About page</Link>. I share a few more details there, including my academic background, places I've lived, and where I'm headed next.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Explore More</h2>
                <ul className={listClasses}>
                    <li><Link to="/now" className={linkClasses}>Now</Link> – What I’m focused on right now</li>
                    <li><Link to="/uses" className={linkClasses}>Uses</Link> – My tools, stack, and workflow</li>
                    <li><Link to="/projects" className={linkClasses}>Projects</Link> – Experiments and things I’ve built</li>
                </ul>
            </section>
        </>
    );
}