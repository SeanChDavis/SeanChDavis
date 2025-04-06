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
                <div className={"w-full absolute text-right right-[16px] top-[16px]"}>
                    <ThemeToggle /><TextSizeToggle />
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;