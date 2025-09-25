import {Link} from "react-router-dom";
import siteData from "../data/siteData.json";
import React from "react";
import PageHeadline from "../components/ui/pageHeadline.jsx";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Home({linkClasses, headingClasses, unorderedListClasses, connectClasses, connectIconClasses}) {

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <section className="space-y-6 mb-8">
                <PageHeadline text={siteData.siteTagline} />
                <div className="grid md:grid-cols-[11fr_2.2fr] gap-x-8">
                    <div>
                        <p className="mb-6">I’m Sean&mdash;a U.S. Army veteran turned coder and Information Systems
                            professional. I relocated to Rotterdam, Netherlands in September 2025, working as an independent contractor building websites and software. On this website, I document my life journey and share my projects. Welkom.</p>
                    </div>
                    <div className="hidden md:block">
                        <img src="/images/sean-davis-headshot.png" alt="Sean's Headshot" className="w-24 h-24 rounded-full" />
                    </div>
                </div>
                <ul className="space-x-2 md:space-x-3.5 gap-y-2.5 md:gap-y-0 flex flex-wrap">
                    <li>
                        <a href={siteData.githubUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>
                            <FaGithub className={connectIconClasses} />
                            <span className="leading-0"><span className="hidden md:inline">Follow on </span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href={siteData.linkedinUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>
                            <FaLinkedin className={connectIconClasses} />
                            <span className="leading-0"><span className="hidden md:inline">Connect on </span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/contact" className={connectClasses}>
                            <MdAlternateEmail className={connectIconClasses} />
                            <span className="leading-0"><span className="hidden md:inline">Send an </span>Email</span>
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Education</h2>
                <p>I graduated from the University of Missouri-St. Louis with a Bachelor of Science in Information Systems & Technology. The curriculum focused primarily on software development, data management & security, and information system design & development.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>I Write Code</h2>
                <p>
                    I specialize in web development, focusing on front-end technologies like React, Astro, NextJS, and
                    Tailwind CSS. I also have extensive experience with WordPress, databases, DevOps, and back-end systems. My goal is to create accessible, intuitive applications that solve real business cases. Connect with me on <a href="https://github.com/SeanChDavis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>GitHub</a> and view my <Link to="/projects" className={linkClasses}>Projects</Link> to see what I've worked on.
                </p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Current Focus</h2>
                <ul className={unorderedListClasses}>
                    <li>Adjusting to <Link to="/netherlands-journey" className={linkClasses}>life in the Netherlands</Link> using the DAFT visa</li>
                    <li>Developing a long-term strategy to include Dutch integration & sustained freedom</li>
                    <li>Building the next stage of my career as a seasoned developer</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Explore More</h2>
                <ul className={unorderedListClasses}>
                    <li><Link to="/about" className={linkClasses}>About</Link> – Background, journey, and plans</li>
                    <li><Link to="/projects" className={linkClasses}>Projects</Link> – Experiments and things I’ve built</li>
                    <li><Link to="/uses" className={linkClasses}>Uses</Link> – Tools, stack, and workflow</li>
                    <li><Link to="/diploma" className={linkClasses}>Diploma</Link> – Degree verification</li>
                </ul>
            </section>
        </div>
    );
}