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
                <main className="px-4 py-10 md:px-8 md:py-12 md:mb-8 lg:pt-12">
                    <SettingsPanel />
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}