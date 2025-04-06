import { useEffect, useState } from "react";
import {MdBrightnessMedium} from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("system");

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

    const themeToggleColor = theme === "dark"
        ? "text-gray-400"
        : theme === "light"
            ? "text-gray-500"
            : "text-gray-400"

    return (
        <button onClick={toggleTheme}>
            <MdBrightnessMedium
                title={"Toggle Dark Mode"}
                className={`text-lg mr-2 cursor-pointer ${themeToggleColor}`}
            />
        </button>
    );
}