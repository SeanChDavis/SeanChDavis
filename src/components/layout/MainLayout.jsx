import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;