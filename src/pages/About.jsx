import { Link } from "react-router-dom";
import React from "react";
import siteData from "../data/siteData.json";
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function About({ linkClasses, unorderedListClasses }) {

    return (
        <div className="max-w-[700px] mx-auto space-y-6">
            <PageHeadline text="A Bit More About Me" />
            <p>Thanks for taking the time to read more. I won't keep you long.</p>

            <p>I am from St. Louis, Missouri, born and raised. I left St. Louis in 2003 to join the U.S. Army after an uncomfortable semester at the University of Missouri-Columbia (Mizzou). I enlisted for four years, but continued serving for nine.</p>

            <p>My time in service includes three combat tours to Iraq and a tour in South Korea. I was discharged honorably in early 2012, which is when I transitioned to web development.</p>

            <p>From 2012 to 2021, I worked from home as a web developer. I spent anywhere from 2-4 years in various cities during this period.</p>

            <ul className={unorderedListClasses}>
                <li>Austin, Texas: 2012 - 2015</li>
                <li>San Diego, California: 2015 - 2019</li>
                <li>Chicago, Illinois: 2019 - 2021</li>
            </ul>

            <p>In late 2021 after selling a company with my partners at Sandhills Development LLC, I returned to St. Louis after nearly 19 years away.</p>

            <p>Shortly thereafter, now with the lifestyle freedom to plan the next phase of my development, I returned to the University of Missouri system. I've since graduated with honors from the University of Missouri-St. Louis (UMSL) with a <span className={"font-medium text-gray-950 dark:text-white"}>Bachelor of Science in Information Systems & Technology</span>.</p>

            <p>During my time at UMSL I studied abroad in Bremen, Germany. It was an awesome experience. I also spent time in the Netherlands and decided that would be my next move. <Link to="/netherlands-journey" className={linkClasses}>Planning began in July 2024</Link> and the move will be executed in September 2025 using the DAFT visa. 🎉</p>

            <p>If you made it this far, I appreciate you. Feel free to <Link to="/contact" className={linkClasses}>reach out</Link>.</p>

            <img src="/images/sean-davis-headshot.png" alt="Sean's Headshot" className="w-28 h-28 rounded-full mt-8" />

            <p className="text-md mt-4">
                <strong className="dark:text-gray-200">{siteData.siteNameShort}</strong>, <br />
                {siteData.siteTagline}
            </p>
        </div>
    );
}