import ContactForm from "../components/ui/ContactForm.jsx";
import React from "react";

export default function Contact() {
    return (
        <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6 text-gray-700">
            <h1 className="text-2xl font-extrabold text-gray-900">Send me an email</h1>
            <p className="max-w-xl">Use the form below to send me a message. I’ll get back to you as soon as I can. You may also contact me on <a href="https://www.linkedin.com/in/SeanChDavis" target="_blank" rel="noopener noreferrer" className="text-cyan-700 font-semibold underline hover:no-underline">LinkedIn</a>.</p>
            <ContactForm />
        </main>
    );
}