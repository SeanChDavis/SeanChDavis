import {Link} from "react-router-dom";
import siteData from "../data/siteData.json";
import React from "react";
import PageHeadline from "../components/ui/pageHeadline.jsx";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaXTwitter  } from "react-icons/fa6";

export default function Home({linkClasses, headingClasses, unorderedListClasses, connectClasses, connectIconClasses}) {

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <section className="space-y-6 mb-8">
                <PageHeadline text={siteData.siteTagline} />
                <div className="grid md:grid-cols-[11fr_2.2fr] gap-x-8">
                    <div>
                        <p>I'm Sean — military veteran, web developer, and since September 2025, living in Rotterdam, Netherlands. This site is a place to share who I am and document the journey.</p>
                    </div>
                    <div className="hidden md:block">
                        <img src="/images/sean-davis-headshot.png" alt="Sean's Headshot" className="w-24 h-24 rounded-full" />
                    </div>
                </div>
                <ul className="space-x-2 md:space-x-3.5 gap-y-2.5 md:gap-y-0 flex flex-wrap">
                    <li>
                        <a href={siteData.xUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>
                            <FaXTwitter className={connectIconClasses} />
                            <span className="leading-0"><span className="hidden md:inline">Follow on </span>X</span>
                        </a>
                    </li>
                    <li>
                        <a href={siteData.linkedinUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>
                            <FaLinkedin className={connectIconClasses} />
                            <span className="leading-0"><span className="hidden md:inline">Connect on </span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href={siteData.githubUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>
                            <FaGithub className={connectIconClasses} />
                            <span className="leading-0"><span className="hidden md:inline">Follow on </span>Github</span>
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
                <h2 className={headingClasses}>Background</h2>
                <p>I grew up in St. Louis, joined the U.S. Army at 18, and served for nine years — including time in Iraq and South Korea. After leaving the service in 2012, I got into web development. I spent years freelancing and was a partner at a software company called <a href="https://sandhillsdev.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Sandhills Development</a> until it was sold in 2021.</p>
                <p>After that, I went back to school at the University of Missouri&ndash;St. Louis (UMSL). A study abroad program took me to Germany, I visited the Netherlands while I was there, and I decided that's where I wanted to be next. As of January 2026, I have a Dutch residence permit.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>What I Do</h2>
                <p>I build websites and software through my company, <a href="https://crispydiv.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Crispy Div</a>, which focuses on custom WordPress development. My broader toolkit covers React, Astro, Next.js, Tailwind CSS, AI-assisted development, and more — I've been doing this kind of work since 2008 and the stack just depends on what the project needs.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Right Now</h2>
                <ul className={unorderedListClasses}>
                    <li>Working as an independent contractor in the Netherlands</li>
                    <li>Learning Dutch — been at it since 2024 (<Link to="/netherlands-journey" className={linkClasses}>read the journey</Link>)</li>
                    <li>Settling in and figuring out what the next chapter looks like</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Explore</h2>
                <ul className={unorderedListClasses}>
                    <li><Link to="/about" className={linkClasses}>About</Link> — the longer version</li>
                    <li><Link to="/netherlands-journey" className={linkClasses}>Netherlands Journey</Link> — how the move actually happened</li>
                    <li><Link to="/projects" className={linkClasses}>Projects</Link> — things I've built</li>
                    <li><Link to="/uses" className={linkClasses}>Uses</Link> — tools and setup</li>
                    <li><Link to="/diploma" className={linkClasses}>Diploma</Link> — degree verification</li>
                </ul>
            </section>
        </div>
    );
}
