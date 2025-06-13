import ThemeToggle from "./ThemeToggle.jsx";
import TextSizeToggle from "./TextSizeToggle.jsx";
import React from "react";

export default function SettingsPanel() {

    return (
        <div className={"inline-block bg-gray-100 dark:bg-gray-950 rounded-full py-2 px-3 absolute right-[16px] top-[16px] mb-0"}>
            <div className={"flex gap-x-1.5 items-center justify-center"}>
                <ThemeToggle /><TextSizeToggle />
            </div>
        </div>
    );
}