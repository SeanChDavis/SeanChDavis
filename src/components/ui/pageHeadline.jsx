import React from "react";

export default function PageHeadline({text}) {
    return (
        <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-gray-200 mb-5 flex items-center gap-4">
            {/*<div className="w-1 h-[20px] rounded-xs bg-cyan-600 dark:bg-[#0080a3]"></div>*/}
            {text}
        </h1>
    );
}