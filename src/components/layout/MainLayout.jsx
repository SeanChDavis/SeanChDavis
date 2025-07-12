import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";
import {Outlet} from "react-router-dom";
import SettingsPanel from "../ui/SettingsPanel.jsx";

export default function MainLayout() {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className={"flex-grow relative"}>
                <main className="max-w-3xl mx-auto px-4 md:px-8 py-10 md:py-12 lg:pt-12 space-y-6 md:mb-8">
                    <SettingsPanel />
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}