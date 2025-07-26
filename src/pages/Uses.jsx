import React from 'react';
import {Link} from "react-router-dom";
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function Uses({ linkClasses, headingClasses, unorderedListClasses }) {
    
    return (
        <div className="max-w-[700px] mx-auto space-y-6">
            <PageHeadline text="What I Use" />
            <p>This is a living list of tools I use regularly for development, productivity, and life in general.</p>
            <div className="space-y-6">
                <section className="space-y-2">
                    <h2 className={headingClasses}>Development</h2>
                    <ul className={unorderedListClasses}>
                        <li>Code Editor: <a href={"https://www.jetbrains.com/"} className={linkClasses} target={"_blank"} rel="noopener noreferrer">JetBrains IDEs</a>, VS Code (for quick edits)</li>
                        <li>Stack: React, Astro, NextJS, Angular, Tailwind CSS, Firebase, Git</li>
                        <li>Browser: Chrome (DevTools), Firefox</li>
                        <li>Tools: Git</li>
                        <li>Design: Affinity Designer + Photo</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Productivity</h2>
                    <ul className={unorderedListClasses}>
                        <li>Notes & Planning: <a href="https://obsidian.md/" className={linkClasses} target={"_blank"} rel="noopener noreferrer">Obsidian</a>, OneDrive, pen + paper</li>
                        <li>Passwords & Security: 1Password</li>
                        <li>Finances: MS Excel, manual tracking</li>
                        <li>Time-Management: Google Calendar</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Hardware</h2>
                    <ul className={unorderedListClasses}>
                        <li>Laptop: Dell XPS, 32GB, Windows 11</li>
                        <li>Phone: Samsung Galaxy 23 Ultra</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className={headingClasses}>Lifestyle & Systems</h2>
                    <ul className={unorderedListClasses}>
                        <li>Personal AI: ChatGPT, Claude</li>
                        <li>Cloud: Obsidian, OneDrive</li>
                        <li>Email: Gmail, <a href={"https://formspree.io/"} className={linkClasses} target={"_blank"} rel="noopener noreferrer">Formspree</a></li>
                        <li>Domains & Hosting: NameCheap, Cloudways, Netlify</li>
                        <li>Planning: <a href="https://wise.com/invite/dic/seand823" className={linkClasses} target={"_blank"} rel="noopener noreferrer">Wise</a>, EUR-based budgeting for <Link to="/netherlands-journey" className={linkClasses}>Netherlands move</Link></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}