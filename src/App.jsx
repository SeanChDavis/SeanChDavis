import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import './styles.css';
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Uses from "./pages/Uses.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NetherlandsJourney from "./pages/NetherlandsJourney.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
    const baseHeadingClasses = "text-gray-900 dark:text-gray-200";
    const headingClasses = `text-[17px] md:text-lg font-bold ${baseHeadingClasses}`;
    const linkClasses = "text-[#0080a3] dark:text-cyan-500 underline hover:no-underline cursor-pointer";
    const listClasses = "list-disc pl-4 md:pl-0 md:list-inside space-y-2 md:space-y-0";

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {[
                        { path: "", Component: Home },
                        { path: "about", Component: About },
                        { path: "uses", Component: Uses },
                        { path: "projects", Component: Projects },
                        { path: "contact", Component: Contact },
                        { path: "netherlands-journey", Component: NetherlandsJourney },
                    ].map(({ path, Component }) => (
                        <Route
                            key={path || "home"}
                            path={path}
                            element={
                                <Component
                                    linkClasses={linkClasses}
                                    headingClasses={headingClasses}
                                    listClasses={listClasses}
                                />
                            }
                            {...(path === "" ? { index: true } : {})}
                        />
                    ))}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    );
}
