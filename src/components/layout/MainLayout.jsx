import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";
import {Outlet} from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import TextSizeToggle from "../ui/TextSizeToggle";

const MainLayout = () => {

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
            <Header />
            <div className={"flex-grow relative"}>
                <div className={"w-full absolute right-5 top-5"}>
                    <div className="ml-auto text-right">
                        <ThemeToggle /><TextSizeToggle />
                    </div>
                </div>
                <main className="md:w-3xl max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;