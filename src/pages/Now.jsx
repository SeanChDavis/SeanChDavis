import React from 'react';

export default function Now() {
    return (
        <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6 text-gray-700">
            <h1 className="text-2xl font-extrabold text-gray-900">What I'm Doing Now</h1>

            <p>This is a snapshot of where my focus is right now — last updated April 2025.</p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Finishing my degree</h2>
                    <p>Wrapping up a BS in Information Systems & Technology at UMSL. I graduate Spring 2025.</p>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-900">Preparing for the Netherlands</h2>
                    <p>My DAFT visa application is in motion. I’m targeting a September 2025 relocation to Rotterdam.</p>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-900">Living light</h2>
                    <p>I’m reducing digital and real-world clutter. Every domain, email, tool, and habit I keep has a clear purpose.</p>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-900">Building SeanChDavis.com</h2>
                    <p>This site is my long-term digital home. I’m slowly expanding it into something bigger than a portfolio.</p>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-900">Personal system design</h2>
                    <p>I’m refining how I manage time, money, energy, and focus — no bloat, just rhythm.</p>
                </div>
            </div>
        </main>
    );
}