import ContactForm from "../components/ui/ContactForm.jsx";
import React from "react";
import siteData from "../data/siteData.json";
import PageHeadline from "../components/ui/pageHeadline.jsx";

export default function Contact( { linkClasses } ) {

    return (
        <div className="max-w-[700px] mx-auto space-y-6">
            <PageHeadline text="Reach Out" />
            <p className="max-w-xl">Use the form below to send me a message. I’ll get back to you as soon as I can. You may also connect with me on <a href={siteData.linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClasses}>LinkedIn</a> and <a href={siteData.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClasses}>GitHub</a>.</p>
            <ContactForm />
        </div>
    );
}