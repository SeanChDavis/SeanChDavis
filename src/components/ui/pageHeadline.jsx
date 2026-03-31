import React from "react";
import ReactCountryFlag from "react-country-flag"

export default function PageHeadline({text, size, icon}) {
    const headlineSize = size === "jumbo" ? "text-xl md:text-2xl lg:text-4xl" : "text-xl md:text-2xl";
    const headlineClasses = `${headlineSize} font-bold text-gray-900 dark:text-gray-200 mb-5 flex flex-wrap items-baseline gap-3.5`;

    return (
        <h1 className={headlineClasses}>
            {text}
            {icon &&
                <ReactCountryFlag
                    countryCode={icon}
                    svg
                    style={{
                        width: '22px',
                        height: '15px',
                    }}
                    title={icon}
                    className="inline-block align-middle rounded-[2px]"
                />
            }
        </h1>
    );
}