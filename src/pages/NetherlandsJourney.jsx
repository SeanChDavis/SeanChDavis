import React, {useState} from "react";
import {motion} from "framer-motion";
import journey from "../data/journeyData.json";
import {FaCircle} from "react-icons/fa";
import PageHeadline from "../components/ui/pageHeadline.jsx";

const journeyData = [...journey].reverse();

export default function NetherlandsJourney({ linkClasses, headingClasses }) {
    const [expanded, setExpanded] = useState(null);

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <PageHeadline text="My Journey to the Netherlands" icon="NL" />
            <p className="mb-10">A record of my move from the U.S. to the Netherlands, documented milestone by milestone starting in June 2024. Each entry is written at the time of the milestone — so earlier ones may reference things that have since happened.</p>

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
                            <FaCircle className="absolute left-[-7.2px] top-[-1px] text-[14px] text-[#0080a3]" />
                            <div className="ml-7">
                                <p className="text-sm leading-4 mb-1.5">
                                    {entry.date}{index === 0 && " - latest update"}
                                </p>
                                <h2 className={headingClasses}>{entry.title}</h2>
                                <div className="text-md mt-1">
                                    {expanded === index ? (
                                        <>
                                            {entry.description.map((paragraph, pIndex) => (
                                                <p key={pIndex} className={pIndex > 0 ? "mt-3" : ""}>{paragraph}</p>
                                            ))}
                                            {entry.links && entry.links.length > 0 && (
                                                <p className="text-sm text-gray-700 dark:text-gray-300 font-bold mt-3 mb-2">
                                                    {entry.links.map((link, linkIndex) => (
                                                        <span key={linkIndex}><a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{link.text}</a>{linkIndex < entry.links.length - 1 && " | "}</span>
                                                    ))}
                                                </p>
                                            )}
                                            <button onClick={() => setExpanded(null)} className={`block ${linkClasses} capitalize font-semibold text-sm mt-3`}>read less</button>
                                        </>
                                    ) : (
                                        <>
                                            <p>{entry.description[0]}</p>
                                            {entry.description.length > 1 && (
                                                <button onClick={() => setExpanded(index)} className={`block ${linkClasses} capitalize font-semibold text-sm mt-3`}>read more</button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12">
                <p className="text-md mt-1">
                    If you have any questions or want to connect about the process, feel free to <a href="/contact" className={linkClasses}>reach out</a>.
                </p>
            </div>
        </div>
    );
}