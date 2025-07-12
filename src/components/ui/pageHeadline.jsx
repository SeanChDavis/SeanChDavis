import React from "react";
import ReactCountryFlag from "react-country-flag"

export default function PageHeadline({text, icon}) {
    return (
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 mb-5 flex flex-wrap items-baseline gap-3.5">
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