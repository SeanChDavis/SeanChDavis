import React from 'react';
import {Link} from "react-router-dom";

export default function Now() {

    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";
    const headingClasses = "text-lg font-bold text-gray-900 dark:text-gray-200";

    return (
        <main className="md:w-3xl max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">What I'm Doing Now</h1>

            <p>This is a snapshot of where my focus is right now — last updated May 2025.</p>

            <div className="space-y-6">
                <div>
                    <h2 className={headingClasses}>BS in Information Systems & Technology — Completed</h2>
                    <p>I recently completed a bachelor's degree at <abbr className="cursor-help no-underline" title="University of Missouri-St. Louis">UMSL</abbr>. No plans for graduate school — I'm focused on getting back to applying what I know.</p>
                </div>

                <div>
                    <h2 className={headingClasses}>Preparing for the Netherlands</h2>
                    <p>My plan for moving to the Netherlands is in motion. I’m targeting a September 2025 <Link to="/netherlands-journey" className={linkClasses}>relocation to Rotterdam, NL</Link> using the <abbr className="cursor-help no-underline" title="Dutch American Friendship Treaty">DAFT</abbr> visa.</p>
                </div>

                <div>
                    <h2 className={headingClasses}>Living light, staying agile</h2>
                    <p>I’ve reduced digital and real-world clutter with a goal of operating efficiently and with the ability to adjust when needed. I am always on the move in one way or another. Join, but do not impede.</p>
                </div>

                <div>
                    <h2 className={headingClasses}>Evolving SeanChDavis.com</h2>
                    <p>After nearly two decades of juggling multiple domain names, email addresses, and web platforms, I've decided to build a single platform tailored to my needs. You are here. More to come.</p>
                </div>

                <div>
                    <h2 className={headingClasses}>Personal system design</h2>
                    <p>We have all created and lived by some sort of life management system. It's how we do things. It's how we survive. I am intentionally designing mine with expectations of specific output.</p>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-md text-gray-700 dark:text-gray-400">
                        I use a number of tools and resources to manage and keep track of my goals and projects. If you're curious about my setup <Link to="/uses" className={linkClasses}>check out the Uses page</Link>.
                    </p>
                </div>
            </div>
        </main>
    );
}