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
                        <p>I'm Sean — a U.S. Army veteran, web developer, and since September 2025, a resident of Rotterdam, Netherlands. I built a career in software, lived across four U.S. cities, earned a degree, and eventually packed everything into one bag and crossed the Atlantic. This site is where I keep the record straight.</p>
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
                <h2 className={headingClasses}>The Short Version</h2>
                <p>I enlisted in the U.S. Army at 19, served nine years, and completed three combat tours in Iraq. After an honorable discharge in 2012, I transitioned into web development. Over the next decade I freelanced, became a partner at <a href="https://sandhillsdev.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Sandhills Development</a>, and exited when the company was sold in 2021. I went back to school at the University of Missouri&ndash;St. Louis, graduated with honors with a BS in Information Systems &amp; Technology, studied abroad in Germany, and decided Rotterdam was next. As of January 2026, I hold a Dutch residence permit.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>What I Do</h2>
                <p>I work as an independent contractor building websites and software under <a href="https://crispydiv.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Crispy Div</a>. My stack leans toward React, Astro, Next.js, and Tailwind CSS. I've been doing this since 2008 — it's not a pivot, it's a career.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Right Now</h2>
                <ul className={unorderedListClasses}>
                    <li>Establishing myself as an independent developer in the Netherlands</li>
                    <li>Learning Dutch — seriously, not just Duolingo (<Link to="/netherlands-journey" className={linkClasses}>read the journey</Link>)</li>
                    <li>Building toward long-term residency and integration</li>
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
