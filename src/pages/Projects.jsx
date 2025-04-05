import React from 'react';

export default function Projects() {

    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";
    const headingClasses = "text-lg font-bold text-gray-900 dark:text-gray-200";

    return (
        <>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">Projects & Experiments</h1>

            <p>This is a selective list of things I’ve built, helped grow, or explored — professionally and personally.</p>

            <div className="space-y-6">

                <section className="space-y-2">
                    <h2 className={headingClasses}>Sandhills Development</h2>
                    <p>I was a partner at <a href="https://sandhillsdev.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Sandhills Development</a>, a software company best known for Easy Digital Downloads, AffiliateWP, and other tools in the WordPress ecosystem. I exited after the company was sold in late 2021.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Client & Freelance Work (2012–2021)</h2>
                    <p>I worked with dozens of clients — agencies, small businesses, and entrepreneurs — designing, developing, and maintaining WordPress-based sites and solutions. Many projects are no longer live, but the experience sharpened my approach to frontend development and user-centered design.</p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Loopdash</h2>
                    <p>
                        I've worked with <a href="https://loopdash.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Loopdash</a> on multiple client projects, helping build high-quality websites tailored to organizational needs. Sites I've built from start to finish are <a href="https://forwardtogetherwi.org/" target="_blank" rel="noopener noreferrer" className={linkClasses}>Forward Together WI</a>, <a href="https://crimlawny.com/" target="_blank" rel="noopener noreferrer" className={linkClasses}>The Law Offices of Scott J. Limmer</a>, <a href="https://designitforus.org/" target="_blank" rel="noopener noreferrer" className={linkClasses}>Design It For Us</a>, and several more.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Cordial</h2>
                    <p>
                        I helped maintain <a href="https://cordial.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>Cordial.com</a> through various site development tasks alongside their sites brand creative. Also, during a critical 3-month stretch when their primary web developer was on leave, I remained on call for any site issues or feature requests.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>STL|Hack</h2>
                    <p>
                        I volunteered as a software architect at <a href="https://stlhack.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>STL|Hack</a>, helping design and build core Angular-based features for their platform. STL|HACK is a 501(c)(3) Non-Profit Organization that aims to cultivate a vibrant and inclusive learning environment in the tech community in St. Louis.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Experiments</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>LitePage Studio: A now-retired microsite experiment focused on ultra-fast HTML/CSS pages.</li>
                        <li>Top One Code: My freelance identity for a short time, phased out to simplify and consolidate.</li>
                        <li>This site: A personal platform, built in React + Vite. It’ll continue to evolve over time.</li>
                    </ul>
                </section>
            </div>
        </>
    );
}