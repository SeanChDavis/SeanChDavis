import React from "react";
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function Diploma({ linkClasses, headingClasses, unorderedListClasses, orderedListClasses }) {

    return (
        <>
            <PageHeadline text="Bachelor of Science in Information Systems & Technology" />
            <p className="mb-3">I graduated Magna Cum Laude from the University of Missouri-St. Louis (UMSL) with a Bachelor of Science in Information Systems & Technology. Primary skills include:</p>
            <ul className={unorderedListClasses}>
                <li>Software & Web Development</li>
                <li>Database Management & Security</li>
                <li>Information Systems Analysis & Design</li>
            </ul>

            <div className="space-y-6">
                <section className="space-y-2">
                    <h2 className={headingClasses}>Credential Validation</h2>
                    <p>
                        To confirm the authenticity of my diploma, you can validate it using the steps below. This process is managed by UMSL's official diploma validation service.
                    </p>
                    <ol className={orderedListClasses}>
                        <li>Copy this unique validation code to your clipboard: <code className="text-sm bg-amber-100 dark:bg-[rgba(255,255,255,.2)] dark:text-white rounded-md px-1.5 py-0.5">25294Y39SRSY</code></li>
                        <li>Visit the <a href="https://apps.umsl.edu/webapps/ITS/diplomaservice/validation.cfm" target="_blank" rel="noopener noreferrer" className={linkClasses}>UMSL Credential Validation</a> page.</li>
                        <li>Paste the validation code into the provided field and click the "Validate" button.</li>
                    </ol>
                </section>

                <img src="/Sean-Davis-BS-Information-Systems-Technology-Diploma.png" alt="Sean Davis - BS in Information Systems & Technology - Diploma" className="rounded-lg mt-8 shadow-xl" />
            </div>
        </>
    );
}