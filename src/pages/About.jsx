import { Link, NavLink } from "react-router-dom";
import React from "react";

const About = () => {
    return (
        <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6 text-gray-700">
            <h1 className="text-2xl font-extrabold text-gray-900">About Sean</h1>

            <p>Thanks for taking the time to read a little more. I won't keep you long.</p>

            <p>I am from St. Louis, Missouri, born and raised. I left St. Louis in 2003 to join the U.S. Army after an uncomfortable semester at the University of Missouri - Columbia (Mizzou). I enlisted for four years, but continued serving for nine.</p>

            <p>My time in service includes three combat tours to Iraq and a tour in South Korea. I was discharged honorably in early 2012, which is when I transitioned to web development.</p>

            <p>From 2012 to 2021, I worked from home as a web developer. I spent anywhere from 2-4 years in various cities during this period - Austin, Texas; San Diego, California; and Chicago, Illinois. In late 2021 after selling a company with my partners at Sandhills Development LLC, I returned to St. Louis after nearly 19 years away.</p>

            <p>Shortly thereafter, now with the lifestyle freedom to plan the next phase of my career, I returned to school - right back into the University of Missouri system, actually - pursuing a Bachelor of Science in Information Systems and Technology. I will graduate from the University of Missouri - St. Louis (UMSL) in May 2025.</p>

            <p>During my time at UMSL I studied abroad in Bremen, Germany. It was an awesome experience. I also spent time in the Netherlands and decided that would be my next move. Planning began in July 2024 and the move will be executed in September 2025 using the <a href="https://www.cardon.nl/blog/the-dutch-daft-visa-for-american-immigrants-in-5-steps" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-semibold underline hover:no-underline">DAFT visa</a>. 🎉</p>

            <p>If you made it this far, I appreciate you. Feel free to <Link to="/contact" className="text-cyan-600 font-semibold underline hover:no-underline">reach out</Link>.</p>
        </main>
    );
}

export default About;