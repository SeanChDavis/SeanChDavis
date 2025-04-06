import React, { useState } from "react";
import { motion } from "framer-motion";
import journey from "../data/journeyData.json";
import {FaCircle} from "react-icons/fa";

const journeyData = journey;

export default function NetherlandsJourney() {
    const [expanded, setExpanded] = useState(null);

    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline cursor-pointer";
    const headingClasses = "text-lg font-bold text-gray-900 dark:text-gray-200";

    return (
        <main className="md:w-3xl max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">My Journey to the Netherlands</h1>
            <p>This is a living documentation of my journey from the U.S. to the Netherlands. At the time of this writing, I am not physically there yet. Mentally, the move started in June of 2024. Follow along.</p>

            <div className="space-y-10 border-l border-gray-300 dark:border-gray-700 ml-2">
                {journeyData.map((entry, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                        className="relative"
                    >
                        <div key={index} className="relative">
                            <FaCircle className="absolute left-[-7.2px] top-[-1px] text-[14px] text-cyan-600" />
                            <div className="ml-7">
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-4 mb-1.5">{entry.date}</p>
                                <h2 className={headingClasses}>{entry.title}</h2>
                                <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
                                    {expanded === index ? (
                                        <>
                                            {entry.description}
                                            {entry.links && entry.links.length > 0 && (
                                                <div className="text-sm text-gray-700 dark:text-gray-300 font-semibold mt-2 mb-2">
                                                    {entry.links.map((link, linkIndex) => (
                                                        <span key={linkIndex}><a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{link.text}</a>{linkIndex < entry.links.length - 1 && " | "}</span>
                                                    ))}
                                                </div>
                                            )}
                                            <button onClick={() => setExpanded(null)} className={`${linkClasses} ${!entry.links || entry.links.length === 0 ? 'ml-2' : ''}`}>Show less</button>
                                        </>
                                    ) : (
                                        <>
                                            {entry.description.length > 220 ? (
                                                <>
                                                    {entry.description.substring(0, 220)}...
                                                    <button onClick={() => setExpanded(index)} className={`${linkClasses} ml-2`}>Read more</button>
                                                </>
                                            ) : (
                                                entry.description
                                            )}
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200">Not Done Yet</h2>
                <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
                    This page will be updated as my journey progresses. If you have any questions or want to connect about the process, feel free to <a href="/contact" className={linkClasses}>reach out</a>.
                </p>
            </div>
        </main>
    );
}