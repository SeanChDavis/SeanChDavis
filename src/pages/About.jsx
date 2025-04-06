import { Link } from "react-router-dom";
import React from "react";
import siteData from "../data/siteData.json";

const About = () => {

    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";

    return (
        <main className="md:w-3xl max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">About Sean</h1>

            <p>Thanks for taking the time to read a little more. I won't keep you long.</p>

            <p>I am from St. Louis, Missouri, born and raised. I left St. Louis in 2003 to join the U.S. Army after an uncomfortable semester at the University of Missouri - Columbia (Mizzou). I enlisted for four years, but continued serving for nine.</p>

            <p>My time in service includes three combat tours to Iraq and a tour in South Korea. I was discharged honorably in early 2012, which is when I transitioned to web development.</p>

            <p>From 2012 to 2021, I worked from home as a web developer. I spent anywhere from 2-4 years in various cities during this period - Austin, Texas; San Diego, California; and Chicago, Illinois. In late 2021 after selling a company with my partners at Sandhills Development LLC, I returned to St. Louis after nearly 19 years away.</p>

            <p>Shortly thereafter, now with the lifestyle freedom to plan the next phase of my career, I returned to school - right back into the University of Missouri system, actually - pursuing a Bachelor of Science in Information Systems and Technology. I will graduate from the University of Missouri - St. Louis (UMSL) in May 2025.</p>

            <p>During my time at UMSL I studied abroad in Bremen, Germany. It was an awesome experience. I also spent time in the Netherlands and decided that would be my next move. <Link to="/netherlands-journey" className={linkClasses}>Planning began in July 2024</Link> and the move will be executed in September 2025 using the DAFT visa. 🎉</p>

            <p>If you made it this far, I appreciate you. Feel free to <Link to="/contact" className={linkClasses}>reach out</Link>.</p>

            <img src="/sean-davis-headshot.png" alt="Sean's Headshot" className="w-28 h-28 rounded-full mt-8" />

            <p className="text-md text-gray-700 dark:text-gray-400 mt-4">
                <strong className="dark:text-gray-200">{siteData.siteNameShort}</strong>, <br />
                {siteData.siteTagline}
            </p>

            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-md text-gray-700 dark:text-gray-400">
                    Curious what I'm focused on right now? <Link to="/now" className={linkClasses}>Check out the Now page.</Link>
                </p>
            </div>
        </main>
    );
}

export default About;