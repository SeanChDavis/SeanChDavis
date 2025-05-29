import React from 'react';
import {Link} from "react-router-dom";

export default function Uses() {
    
    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";
    const headingClasses = "text-lg font-bold text-gray-900 dark:text-gray-200";
    
    return (
        <main className="md:w-3xl max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">What I Use</h1>

            <p>This is a living list of tools I use regularly for development, productivity, and life in general.</p>

            <div className="space-y-6">
                <section className="space-y-2">
                    <h2 className={headingClasses}>Development</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Code Editor: <a href={"https://www.jetbrains.com/"} className={linkClasses} target={"_blank"} rel="noopener noreferrer">JetBrains IDEs</a>, VS Code (for quick edits)</li>
                        <li>Stack: React + Vite, Angular, Tailwind CSS, Firebase, Git</li>
                        <li>Browser: Chrome (DevTools), Firefox</li>
                        <li>Tools: GitHub, <a href="https://www.netlify.com/" className={linkClasses} target={"_blank"} rel="noopener noreferrer">Netlify</a></li>
                        <li>Design: Affinity Designer + Photo</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Productivity</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Notes & Planning: <a href="https://obsidian.md/" className={linkClasses} target={"_blank"} rel="noopener noreferrer">Obsidian</a>, OneDrive, pen + paper</li>
                        <li>Passwords & Security: 1Password</li>
                        <li>Finances: MS Excel, manual tracking</li>
                        <li>Time-Management: Google Calendar</li>
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
                        <li>Email: Gmail, <a href={"https://formspree.io/"} className={linkClasses} target={"_blank"} rel="noopener noreferrer">Formspree</a></li>
                        <li>Domains & Hosting: NameCheap, Netlify</li>
                        <li>Planning: <a href="https://wise.com/invite/dic/seand823" className={linkClasses} target={"_blank"} rel="noopener noreferrer">Wise</a>, EUR-based budgeting for <Link to="/netherlands-journey" className={linkClasses}>Netherlands move</Link></li>
                    </ul>
                </section>

                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-md text-gray-700 dark:text-gray-400">
                        This list is updated as my setup evolves. Sometimes I like to role my own, but I'm not afraid to use a quality solution. To see my output when using these tools, <Link to="/projects" className={linkClasses}>check out the Projects page</Link>.
                    </p>
                </div>
            </div>
        </main>
    );
}