import {useEffect, useState} from "react";
import {MdFormatSize} from "react-icons/md";

export default function TextSizeToggle() {
    const [size, setSize] = useState("[17px]");

    useEffect(() => {
        const stored = localStorage.getItem("textSize") || "[17px]";
        setSize(stored);
        document.documentElement.classList.remove("text-[17px]", "text-[19px]");
        document.documentElement.classList.add(`text-${stored}`);
    }, []);

    const toggleTextSize = () => {
        const newSize = size === "[17px]" ? "[19px]" : "[17px]";
        setSize(newSize);
        localStorage.setItem("textSize", newSize);
        document.documentElement.classList.remove("text-[17px]", "text-[19px]");
        document.documentElement.classList.add(`text-${newSize}`);
    };

    return (
        <button onClick={toggleTextSize}>
            <MdFormatSize
                title={"Toggle Text Size"}
                className={`text-md md:text-lg text-[#0080a3] dark:text-violet-500 cursor-pointer`}
            />
        </button>
    );
}