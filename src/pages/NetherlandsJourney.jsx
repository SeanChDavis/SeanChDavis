import React, { useState } from "react";
import journey from "../data/journeyData.json";

const journeyData = journey;

export default function NetherlandsJourney() {
    const [expanded, setExpanded] = useState(null);

    return (
        <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-8 text-gray-700">
            <h1 className="text-2xl font-extrabold text-gray-900">My Journey to the Netherlands</h1>
            <p>This is a living documentation of my journey from the U.S. to the Netherlands. At the time of this writing, I am not physically there yet. Mentally, the move started in June of 2024. Follow along.</p>

            <div className="space-y-10 border-l border-gray-300 ml-2">
                {journeyData.map((entry, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full border-2 border-white"></div>
                        <div className="ml-7">
                            <p className="text-sm text-gray-500 leading-4 mb-1.5">{entry.date}</p>
                            <h2 className="text-lg font-bold text-gray-900">{entry.title}</h2>
                            <p className="text-md text-gray-600 mt-1">
                                {expanded === index ? (
                                    <>
                                        {entry.description}
                                        {entry.links && entry.links.length > 0 && (
                                            <div className="text-sm text-gray-700 font-semibold mt-2">
                                                {entry.links.map((link, linkIndex) => (
                                                    <span key={linkIndex}><a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{link.text}</a>{linkIndex < entry.links.length - 1 && " | "}</span>
                                                ))}
                                            </div>
                                        )}
                                        <button onClick={() => setExpanded(null)} className={`text-cyan-600 font-semibold underline hover:no-underline cursor-pointer ${!entry.links || entry.links.length === 0 ? 'ml-2' : ''}`}>Show less</button>
                                    </>
                                ) : (
                                    <>
                                        {entry.description.length > 220 ? (
                                            <>
                                                {entry.description.substring(0, 220)}...
                                                <button onClick={() => setExpanded(index)} className="text-cyan-600 font-semibold underline hover:no-underline cursor-pointer ml-2">Read more</button>
                                            </>
                                        ) : (
                                            entry.description
                                        )}
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-900">Not Done Yet</h2>
                <p className="text-md text-gray-600 mt-1">
                    This page will be updated as my journey progresses. If you have any questions or want to connect about the process, feel free to <a href="/contact" className="text-cyan-600 font-semibold underline hover:no-underline">reach out</a>.
                </p>
            </div>
        </main>
    );
}