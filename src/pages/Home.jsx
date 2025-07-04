import {Link} from "react-router-dom";
import siteData from "../data/siteData.json";
import React from "react";
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function Home({linkClasses, headingClasses, listClasses}) {

    const connectClasses = "text-sm font-bold bg-gray-100 dark:bg-gray-950 hover:text-cyan-600 hover:dark:text-cyan-500 px-3 py-1.5 rounded-full border-2 border-gray-200 dark:border-gray-800";

    return (
        <>
            <section className="space-y-6">
                <PageHeadline text={siteData.siteTagline} />
                <div className="grid md:grid-cols-[8.9fr_2.2fr] lg:grid-cols-[11fr_2.2fr] gap-6 lg:gap-8 pb-3 md:pb-6 mt-2">
                    <div>
                        <p className="mb-6">I’m Sean — a former U.S. Army service member turned web developer and information systems
                            professional. Since 2008, I’ve been building websites and navigating various systems — military,
                            tech, academic, and personal. I enjoy mapping things out and operating within strategically set
                            boundaries. Welcome to my platform on the web, where I document my journey, share my projects, and
                            explore the intersections of technology, systems, and life.</p>
                        <ul className="space-x-3 flex flex-wrap">
                            <li>
                                <a href={siteData.githubUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>GitHub</a>
                            </li>
                            <li>
                                <a href={siteData.linkedinUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>LinkedIn</a>
                            </li>
                            <li>
                                <Link to="/contact" className={connectClasses}>Email</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <img src="/sean-davis-headshot.png" alt="Sean's Headshot" className="w-28 h-28 rounded-full" />
                    </div>
                </div>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Education</h2>
                <p>I graduated Magna Cum Laude from the University of Missouri-St. Louis with a Bachelor of Science in Information Systems. The curriculum focused primarily on software development, data management & security, and information system design & development.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>I Write Code</h2>
                <p>
                    I specialize in web development, focusing on front-end technologies like React, NextJS, Angular, and
                    Tailwind CSS. I also have extensive experience with WordPress, databases, DevOps, and back-end systems. My goal is to create accessible, intuitive applications that solve real business cases. Connect with me on <a href="https://github.com/SeanChDavis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>GitHub</a> and view my <Link to="/projects" className={linkClasses}>Projects</Link> to see what I've worked on.
                </p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Current Focus</h2>
                <ul className={listClasses}>
                    <li>Preparing for <Link to="/netherlands-journey" className={linkClasses}>relocation to the Netherlands</Link> using the DAFT visa.</li>
                    <li>Developing a long-term life strategy to include Dutch integration & sustained freedom</li>
                    <li>Building this site as my all-encompassing digital platform with optimized digital footprint</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Explore More</h2>
                <ul className={listClasses}>
                    <li><Link to="/about" className={linkClasses}>About</Link> – My background, journey, and plans</li>
                    <li><Link to="/projects" className={linkClasses}>Projects</Link> – Experiments and things I’ve built</li>
                    <li><Link to="/uses" className={linkClasses}>Uses</Link> – My tools, stack, and workflow</li>
                </ul>
            </section>
        </>
    );
}