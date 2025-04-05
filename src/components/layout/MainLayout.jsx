import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
            <Header />
            <main className="flex-grow w-3xl mx-auto px-4 md:px-8 py-12 space-y-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;