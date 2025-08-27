import React from 'react';
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function Projects({ linkClasses, headingClasses, unorderedListClasses }) {

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <PageHeadline text="Projects & Experiments" />
            <p>This is a <em>selective</em> list of things I’ve built, helped grow, or explored professionally and personally.</p>
            <div className="space-y-6">

                <section className="space-y-2">
                    <h2 className={headingClasses}>Crispy Div <span className={"text-xs"}>(2023 – Present)</span></h2>
                    <p><a href="https://crispydiv.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Crispy Div</a> is my web development and design home. I work with various technologies, including React, Astro, NextJS, PageMotor, WordPress and Tailwind CSS, to create accessible, user-friendly web applications. Crispy Div aims to maintain expertise in modern web development while also exploring new technologies and methodologies.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Loopdash <span className={"text-xs"}>(2022 - Present)</span></h2>
                    <p>I've worked with <a href="https://loopdash.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Loopdash</a> on multiple client projects, helping build high-quality websites tailored to organizational needs. Sites I've developed (not designed) are <a href="https://drummajorsforchange.org/" target="_blank" rel="noopener noreferrer" className={linkClasses}>Drum Majors for Change</a>, <a href="https://crimlawny.com/" target="_blank" rel="noopener noreferrer" className={linkClasses}>The Law Offices of Scott J. Limmer</a>, <a href="https://forwardtogetherwi.org/" target="_blank" rel="noopener noreferrer" className={linkClasses}>Forward Together WI</a> and several more.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Sandhills Development <span className={"text-xs"}>(2014 - 2021)</span></h2>
                    <p>I was a Partner and Director of Design at <a href="https://sandhillsdev.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Sandhills Development</a>, a software company best known for Easy Digital Downloads, AffiliateWP, and other tools in the WordPress ecosystem. I exited after the company was sold in late 2021.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Client & Freelance Work <span className={"text-xs"}>(2012 – Present)</span></h2>
                    <p>I worked with dozens of clients — agencies, small businesses, and entrepreneurs — designing, developing, and maintaining WordPress-based sites and solutions. Many projects are no longer live, but the experience sharpened my approach to frontend development and user-centered design.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Cordial <span className={"text-xs"}>(2022 - 2024)</span></h2>
                    <p>I helped maintain <a href="https://cordial.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Cordial.com</a> through various site development tasks alongside their sites brand creative. Also, during a critical 3-month stretch when their primary web developer was on leave, I remained on call for any site issues or feature requests.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>STL|Hack <span className={"text-xs"}>(2024 - 2025)</span></h2>
                    <p>I volunteered as a software architect at <a href="https://stlhack.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>STL|Hack</a>, helping design and build core Angular-based features for their platform. STL|HACK is a 501(c)(3) Non-Profit Organization that aims to cultivate a vibrant and inclusive learning environment in the tech community in St. Louis.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Experiments</h2>
                    <ul className={unorderedListClasses}>
                        <li>This site: A personal platform, built in React + Vite. It’ll continue to evolve over time.</li>
                        <li>LitePage Studio: A retired experiment focused on ultra-fast HTML/CSS pages.</li>
                        <li>Top One Code: My freelance identity, phased out to simplify and consolidate.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}