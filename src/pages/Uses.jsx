export default function Uses() {
    return (
        <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6 text-gray-700">
            <h1 className="text-2xl font-extrabold text-gray-900">What I Use</h1>

            <p>This is a living list of tools I use regularly for development, productivity, and life in general.</p>

            <div className="space-y-6">
                <section className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-900">Development</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Code Editor: JetBrains IDEs, VS Code</li>
                        <li>Stack: React, Vite, Tailwind, Firebase, Git</li>
                        <li>Browser: Chrome (DevTools), Firefox</li>
                        <li>Tools: GitHub, <a href="https://www.netlify.com/" className="text-cyan-700 font-semibold underline hover:no-underline">Netlify</a></li>
                        <li>Design: Affinity Designer + Photo</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-900">Productivity</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Notes & Planning: <a href="https://obsidian.md/" className="text-cyan-700 font-semibold underline hover:no-underline">Obsidian</a>, OneDrive, pen + paper</li>
                        <li>Passwords: LastPass</li>
                        <li>Finances: MS Excel, manual tracking</li>
                        <li>Calendar: Google Calendar</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-900">Hardware</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Laptop: Dell XPS, 32GB, Windows 11</li>
                        <li>Phone: Samsung Galaxy 23 Ultra</li>
                        <li>Tablet: Galaxy Tab Ultra</li>
                        <li>Watch: Galaxy Watch 7</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-900">Lifestyle & Systems</h2>
                    <ul className="list-disc list-inside space-y-2 md:space-y-0 md:marker:text-gray-300">
                        <li>Cloud: <a href="https://obsidian.md/" className="text-cyan-700 font-semibold underline hover:no-underline">Obsidian</a>, OneDrive</li>
                        <li>Email: Gmail, Formspree</li>
                        <li>Domains: NameCheap</li>
                        <li>Planning: <a href="https://wise.com/invite/dic/seand823" className="text-cyan-700 font-semibold underline hover:no-underline">Wise</a>, EUR-based budgeting for Netherlands move</li>
                    </ul>
                </section>

            </div>
        </main>
    );
}