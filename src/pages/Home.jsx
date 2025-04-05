import {Link} from "react-router-dom";
import siteData from "../data/siteData.json";

export default function Home() {

    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";
    const headingClasses = "text-lg font-bold text-gray-900 dark:text-gray-200";

    return (
        <>
            <section className="space-y-6">
                <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">{siteData.siteTagline}</h1>
                <p>
                    I’m Sean — a former U.S. Army service member turned web developer and information systems professional. Since 2008, I’ve been building websites and navigating various systems — military, tech, academic, and personal. I enjoy mapping things out and operating within strategically set boundaries. Welcome to my platform on the web, where I document my journey, share my projects, and explore the intersections of technology, systems, and life.
                </p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Currently</h2>
                <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                    <li>Finishing my BS in Information Systems & Technology at <abbr className="no-underline" title="University of Missouri - St. Louis">UMSL</abbr> (Spring 2025)</li>
                    <li><Link to="/netherlands-journey" className={linkClasses}>Preparing for relocation to the Netherlands</Link> using the DAFT visa</li>
                    <li>Centered around focus, ambition, and long-term strategy</li>
                    <li>Building this site as my all-encompassing digital platform</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Highlights</h2>
                <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                    <li><span className="font-bold">2003</span> – Joined the U.S. Army (92A, Iraq x 3 + S. Korea)</li>
                    <li><span className="font-bold">2012</span> – Transitioned to full-time web development</li>
                    <li><span className="font-bold">2021</span> – Sold company (w/ partners) and reset professional direction</li>
                    <li><span className="font-bold">2023</span> – Returned to university to complete Information Systems degree</li>
                    <li><span className="font-bold">2024</span> – Began planning move to Rotterdam, Netherlands</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>More About Sean</h2>
                <p>For more information about my journey up to this point, <Link to="/about" className={linkClasses}>check out the About page</Link>. I share a few more details there, including my academic background, places I've lived, and where I'm headed next.</p>
            </section>

            <section className="space-y-2">
                <h2 className={headingClasses}>Explore More</h2>
                <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                    <li><Link to="/now" className={linkClasses}>Now</Link> – What I’m focused on right now</li>
                    <li><Link to="/uses" className={linkClasses}>Uses</Link> – My tools, stack, and workflow</li>
                    <li><Link to="/projects" className={linkClasses}>Projects</Link> – Experiments and things I’ve built</li>
                    <li><Link to="/contact" className={linkClasses}>Contact</Link> – Reach out to me</li>
                </ul>
            </section>
        </>
    );
}