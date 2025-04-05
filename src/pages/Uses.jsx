import React from 'react';

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
                        <li>Code Editor: JetBrains IDEs, VS Code</li>
                        <li>Stack: React, Vite, Tailwind, Firebase, Git</li>
                        <li>Browser: Chrome (DevTools), Firefox</li>
                        <li>Tools: GitHub, <a href="https://www.netlify.com/" className={linkClasses}>Netlify</a></li>
                        <li>Design: Affinity Designer + Photo</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Productivity</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Notes & Planning: <a href="https://obsidian.md/" className={linkClasses}>Obsidian</a>, OneDrive, pen + paper</li>
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
                        <li>Tablet: Galaxy Tab Ultra</li>
                        <li>Watch: Galaxy Watch 7</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Lifestyle & Systems</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Cloud: <a href="https://obsidian.md/" className={linkClasses}>Obsidian</a>, OneDrive</li>
                        <li>Email: Gmail, Formspree</li>
                        <li>Domains: NameCheap</li>
                        <li>Planning: <a href="https://wise.com/invite/dic/seand823" className={linkClasses}>Wise</a>, EUR-based budgeting for Netherlands move</li>
                    </ul>
                </section>
            </div>
        </>
    );
}