import { Link } from "react-router-dom";
import React from "react";
import siteData from "../data/siteData.json";
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function About({ linkClasses, unorderedListClasses }) {

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <PageHeadline text="A Bit More About Me" />
            <p>Thanks for taking the time to read more. I won't keep you long.</p>

            <p>I'm from St. Louis, Missouri, born and raised. I left in 2003 to join the U.S. Army — at 18, after an uncomfortable semester at the University of Missouri-Columbia (Mizzou). I enlisted for four years, but ended up serving for nine.</p>

            <p>My time in service included three combat tours to Iraq and a tour in South Korea. I was honorably discharged in early 2012 and moved into web development shortly after.</p>

            <p>For the next nine years I worked remotely as a developer, moving around a fair amount.</p>

            <ul className={unorderedListClasses}>
                <li><span className={"font-medium text-gray-950 dark:text-white"}>Austin, Texas</span> - 2012&ndash;2015</li>
                <li><span className={"font-medium text-gray-950 dark:text-white"}>San Diego, California</span> - 2015&ndash;2019</li>
                <li><span className={"font-medium text-gray-950 dark:text-white"}>Chicago, Illinois</span> - 2019&ndash;2021</li>
            </ul>

            <p>Late 2021, after selling a company with my partners at Sandhills Development LLC, I returned to <span className={"font-medium text-gray-950 dark:text-white"}>St. Louis</span> after nearly 19 years away.</p>

            <p>With some room to breathe for the first time in a while, I went back to school — this time at the University of Missouri-St. Louis (UMSL). I graduated with honors with a <span className={"font-medium text-gray-950 dark:text-white"}>Bachelor of Science in Information Systems & Technology</span>.</p>

            <p>During my time at UMSL I studied abroad in Bremen, Germany. That trip also took me to the Netherlands — and I knew pretty quickly it was where I wanted to be. I started planning the move in July 2024 and have been <Link to="/netherlands-journey" className={linkClasses}>documenting the journey</Link> since. I moved to Rotterdam, Netherlands in September 2025. As of January 2026, I have a Dutch residence permit in hand. 🎉</p>

            <p>If you made it this far, I appreciate you. Feel free to <Link to="/contact" className={linkClasses}>reach out</Link>.</p>

            <img src="/images/sean-davis-headshot.png" alt="Sean's Headshot" className="w-28 h-28 rounded-full mt-8" />

            <p className="text-md mt-4">
                <strong className="dark:text-gray-200">{siteData.siteNameShort}</strong>, <br />
                {siteData.siteTagline}
            </p>
        </div>
    );
}
