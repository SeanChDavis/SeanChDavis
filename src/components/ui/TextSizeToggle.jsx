import { useEffect, useState } from "react";
import { MdFormatSize } from "react-icons/md";

export default function TextSizeToggle() {
    const [size, setSize] = useState("base");

    useEffect(() => {
        const stored = localStorage.getItem("textSize") || "base";
        setSize(stored);
        document.documentElement.classList.remove("text-base", "text-lg");
        document.documentElement.classList.add(`text-${stored}`);
    }, []);

    const toggleTextSize = () => {
        const newSize = size === "base" ? "lg" : "base";
        setSize(newSize);
        localStorage.setItem("textSize", newSize);
        document.documentElement.classList.remove("text-base", "text-lg");
        document.documentElement.classList.add(`text-${newSize}`);
    };

    return (
        <button
            onClick={toggleTextSize}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            title="Toggle Text Size"
        >
            <MdFormatSize className={`text-lg text-gray-600 cursor-pointer mr-1`} />
        </button>
    );
}