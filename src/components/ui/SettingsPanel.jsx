import ThemeToggle from "./ThemeToggle.jsx";
import TextSizeToggle from "./TextSizeToggle.jsx";
import React from "react";

export default function SettingsPanel() {

    return (
        <div className={"inline-block absolute right-4 md:right-8 top-4 mb-0"}>
            <div className={"flex gap-x-1.5 items-center justify-center"}>
                <ThemeToggle /><TextSizeToggle />
            </div>
        </div>
    );
}