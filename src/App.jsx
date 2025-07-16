import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import './styles.css';
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Diploma from "./pages/Diploma.jsx";
import Uses from "./pages/Uses.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NetherlandsJourney from "./pages/NetherlandsJourney.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import WordPress from "./pages/WordPress.jsx";
import globalStyles from "./globalStyles.js";

export default function App() {

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {[
                        { path: "", Component: Home },
                        { path: "about", Component: About },
                        { path: "diploma", Component: Diploma },
                        { path: "uses", Component: Uses },
                        { path: "projects", Component: Projects },
                        { path: "contact", Component: Contact },
                        { path: "netherlands-journey", Component: NetherlandsJourney },
                        // { path: "wordpress", Component: WordPress },
                    ].map(({ path, Component }) => (
                        <Route
                            key={path || "home"}
                            path={path}
                            element={
                                <Component
                                    linkClasses={globalStyles.linkClasses}
                                    subtleLinkClasses={globalStyles.subtleLinkClasses}
                                    headingClasses={globalStyles.headingClasses}
                                    unorderedListClasses={globalStyles.unorderedListClasses}
                                    orderedListClasses={globalStyles.orderedListClasses}
                                    connectClasses={globalStyles.connectClasses}
                                    connectIconClasses={globalStyles.connectIconClasses}
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
