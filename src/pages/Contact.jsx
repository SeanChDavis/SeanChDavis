import ContactForm from "../components/ui/ContactForm.jsx";
import React from "react";

export default function Contact( { linkClasses, mainHeadingClasses } ) {

    return (
        <>
            <h1 className={mainHeadingClasses}>Reach Out</h1>
            <p className="max-w-xl">Use the form below to send me a message. I’ll get back to you as soon as I can. You may also connect with me on <a href="https://www.linkedin.com/in/SeanChDavis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>LinkedIn</a> and <a href="https://github.com/SeanChDavis/" target="_blank" rel="noopener noreferrer" className={linkClasses}>GitHub</a>.</p>
            <ContactForm />
        </>
    );
}