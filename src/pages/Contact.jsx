import ContactForm from "../components/ui/ContactForm.jsx";
import React from "react";

export default function Contact() {

    const linkClasses = "text-cyan-600 dark:text-cyan-500 font-semibold underline hover:no-underline";

    return (
        <>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">Reach Out</h1>
            <p className="max-w-xl">Use the form below to send me a message. I’ll get back to you as soon as I can. You may also contact me on <a href="https://www.linkedin.com/in/SeanChDavis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>LinkedIn</a>.</p>
            <ContactForm />
        </>
    );
}