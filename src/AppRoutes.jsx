import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Now from "./pages/Now.jsx";
import Uses from "./pages/Uses.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="now" element={<Now />} />
                <Route path="uses" element={<Uses />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;