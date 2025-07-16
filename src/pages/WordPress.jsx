import PageHeadline from "../components/ui/pageHeadline.jsx";
import React from "react";
import siteData from "../data/siteData.json";
import {FaWordpress} from "react-icons/fa";

export default function WordPress({linkClasses, headingClasses, subtleLinkClasses, unorderedListClasses, connectClasses, connectIconClasses}) {

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <section className="grid md:grid-cols-16 gap-10 md:gap-6 lg:gap-8">
                <div className="md:col-span-8 lg:col-span-9 space-y-2">
                    <PageHeadline text="My WordPress History" size="jumb" />
                    <p className="mb-4">My journey with WordPress began in 2008, about a year after I first started building websites. WordPress is what ushered from building static HTML/CSS (and sometimes JavaScript) websites to dynamic websites with more complex navigation, advanced functionality, and database integration.</p>
                    <p className="mb-4">Over the years I have contributed to the core WordPress project, built and helped develop several WordPress plugins, and built dozens of WordPress themes from scratch. Theme development has been my bread & butter, though I've dabbled throughout the entire WordPress ecosystem.</p>
                    <p className="mb-7">While WordPress is no longer my primary platform for web development, I am forever grateful for the growth I experienced within the ecosystem.</p>
                    <ul className="space-x-2 md:space-x-3.5 gap-y-2.5 md:gap-y-0 flex flex-wrap">
                        <li>
                            <a href={siteData.wpProfileUrl} target="_blank" rel="noopener noreferrer" className={connectClasses}>
                                <FaWordpress className={connectIconClasses} />
                                <span className="leading-0">View WordPress Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-8 lg:col-span-6 md:col-start-10 lg:col-start-11 md:space-y-2">
                    <div className="bg-gray-100 dark:bg-gray-950 rounded-lg p-4 md:px-6 md:py-4 md:mt-3">
                        <h3 className="text-md font-bold mb-2.5 dark:text-white">Contribution Highlights</h3>
                        <div className="text-sm">
                            <p className="mb-2.5">Most contributions are made to open-source, community-driven projects.</p>
                            <ul className={unorderedListClasses}>
                                {[
                                    {
                                        name: "Easy Digital Downloads",
                                        links: [
                                            { label: "Commits", url: "github.com/awesomemotive/easy-digital-downloads/commits/main?author=seanchdavis" },
                                            { label: "Articles", url: "easydigitaldownloads.com/blog/author/sean-davis/" }
                                        ]
                                    },
                                    {
                                        name: "Underscores",
                                        links: [
                                            { label: "Project", url: "underscores.me/" },
                                            { label: "Custom Fork", url: "github.com/SeanChDavis/full-width_s" }
                                        ]
                                    },
                                    {
                                        name: "WordPress Starter Theme",
                                        links: [
                                            { label: "Code", url: "github.com/SeanChDavis/wordpress-starter-theme" },
                                            { label: "Docs", url: "github.com/SeanChDavis/wordpress-starter-theme?tab=readme-ov-file#wordpress-starter-theme" }
                                        ]
                                    },
                                    {
                                        name: "Simple Course Creator",
                                        links: [
                                            { label: "Plugin", url: "wordpress.org/plugins/simple-course-creator/" },
                                            { label: "Code", url: "github.com/SeanChDavis/simple-course-creator" }
                                        ]
                                    },
                                    {
                                        name: "Sugar Calendar",
                                        links: [
                                            { label: "Site Design & Dev", url: "sugarcalendar.com/" }
                                        ]
                                    },
                                    {
                                        name: "Payouts Service",
                                        links: [
                                            { label: "Site Design & Dev", url: "payouts.sandhillsplugins.com/" }
                                        ]
                                    }
                                ].map((item, idx) => (
                                    <li key={item.name}>
                                        <span>{item.name}:</span>{" "}
                                        {item.links.map((link, linkIdx) => (
                                            <React.Fragment key={link.label}>
                                                <a href={`https://${link.url}`} target="_blank" rel="noopener noreferrer" className={subtleLinkClasses}>{link.label}</a>
                                                {linkIdx < item.links.length - 1 && " | "}
                                            </React.Fragment>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                            <p className="my-2.5">Unfortunately, many of my contributions are either retired, or are no longer accessible to the public. Time changes everything.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="h-px mb-8 mt-10 md:mt-8 bg-gray-200 border-0 dark:bg-gray-800" />
            <section className="space-y-2">
                <h2 className={`lg:text-xl lg:mb-4 ${headingClasses}`}>Development & Design Timeline</h2>
                <p className="max-w-2xl mb-6 lg:mb-10">Below are some of the WordPress projects I have worked on over the years. These include full website builds for clients, theme development projects, and more.</p>
                <div className="space-y-8">
                    <div className="bg-gray-100 dark:bg-gray-950 rounded-lg p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                            <div className="md:col-span-2">
                                <div className="block md:hidden">
                                    <span className="text-[13px] leading-5 font-bold">2013</span>
                                    <h3 className="text-[17px] md:text-2xl mb-4 font-bold text-gray-900 dark:text-gray-200">Volatyl Theme Framework</h3>
                                </div>
                                <img src="/images/wordpress/volatyl-home.png" alt="Volatyl Theme Framework - WordPress" className="shadow-lg rounded-md" />
                            </div>
                            <div className="md:col-span-3">
                                <div className="hidden md:block">
                                    <span className="text-[13px] leading-5 font-bold">2013</span>
                                    <h3 className="text-[17px] md:text-2xl mb-4 font-bold text-gray-900 dark:text-gray-200">Volatyl Theme Framework</h3>
                                </div>
                                <p className="mb-4">Volatyl was a theme framework I created for developers tasked with building multiple WordPress sites for their clients. Volatyl included per-page layout controls, exhaustive WordPress hooks, responsive design, and more.</p>
                                <p className="mb-4">I built Volatyl during an era dominated by the <a href="https://diythemes.com/thesis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>Thesis</a> and <a href="https://www.studiopress.com/themes/genesis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>Genesis</a> theme frameworks. I respected both frameworks, especially Thesis, which I had been using enthusiastically for years. The goal with Volatyl was to create a framework based on a specific list of needs I developed as a freelancer myself.</p>
                                <p className="mb-4">Volatyl was my first commercial product in the WordPress ecosystem. Total revenue never surpassed five figures. Instead, Volatyl marked my transition from hobbyist to professional in the WordPress ecosystem and led directly to my connection with Pippin Williamson and Easy Digital Downloads.</p>
                                <p className="mb-2"><a href="https://github.com/SeanChDavis/volatyl" target="_blank" rel="noopener noreferrer" className={linkClasses}>Volatyl GitHub repository (archived)</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}