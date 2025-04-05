import { useEffect, useState } from "react";
import {MdBrightnessMedium, MdOutlineWbIncandescent, MdOutlineWbSunny, MdOutlineWbTwilight} from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("system");

    const themeToggleColor = theme === "dark"
        ? "text-gray-600"
        : theme === "light"
            ? "text-yellow-500"
            : "text-yellow-500"

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light") {
            setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
        >
            <MdBrightnessMedium title={"Toggle Dark Mode"} className={`text-lg cursor-pointer ${themeToggleColor}`} />
        </button>
    );
}