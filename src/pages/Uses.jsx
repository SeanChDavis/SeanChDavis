import React from 'react';
import {Link} from "react-router-dom";

export default function Uses() {
    
    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";
    const headingClasses = "text-lg font-bold text-gray-900 dark:text-gray-200";
    
    return (
        <>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">What I Use</h1>

            <p>This is a living list of tools I use regularly for development, productivity, and life in general.</p>

            <div className="space-y-6">
                <section className="space-y-2">
                    <h2 className={headingClasses}>Development</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Code Editor: <a href={"https://www.jetbrains.com/"} className={linkClasses} target={"_blank"}>JetBrains IDEs</a>, VS Code (for quick edits)</li>
                        <li>Stack: React + Vite, Angular, Tailwindcss, Firebase, Git</li>
                        <li>Browser: Chrome (DevTools), Firefox</li>
                        <li>Tools: GitHub, <a href="https://www.netlify.com/" className={linkClasses} target={"_blank"}>Netlify</a></li>
                        <li>Design: Affinity Designer + Photo</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Productivity</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Notes & Planning: <a href="https://obsidian.md/" className={linkClasses} target={"_blank"}>Obsidian</a>, OneDrive, pen + paper</li>
                        <li>Passwords: LastPass</li>
                        <li>Finances: MS Excel, manual tracking</li>
                        <li>Calendar: Google Calendar</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Hardware</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Laptop: Dell XPS, 32GB, Windows 11</li>
                        <li>Phone: Samsung Galaxy 23 Ultra</li>
                        <li>Tablet: Samsung Galaxy Tab Ultra</li>
                        <li>Watch: Samsung Galaxy Watch 7</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Lifestyle & Systems</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Cloud: Obsidian, OneDrive</li>
                        <li>Email: Gmail, <a href={"https://formspree.io/"} className={linkClasses} target={"_blank"}>Formspree</a></li>
                        <li>Domains: NameCheap</li>
                        <li>Planning: <a href="https://wise.com/invite/dic/seand823" className={linkClasses} target={"_blank"}>Wise</a>, EUR-based budgeting for <Link to="/netherlands-journey" className={linkClasses}>Netherlands move</Link></li>
                    </ul>
                </section>
            </div>
        </>
    );
}