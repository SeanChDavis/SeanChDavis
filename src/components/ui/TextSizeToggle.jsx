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
        <button onClick={toggleTextSize}>
            <MdFormatSize
                title={"Toggle Text Size"}
                className={`text-lg text-cyan-600 dark:text-violet-500 cursor-pointer`}
            />
        </button>
    );
}