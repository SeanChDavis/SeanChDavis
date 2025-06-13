import React, { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const form = new FormData(e.target);
        const response = await fetch('https://formspree.io/f/xqkralev', {
            method: 'POST',
            body: form,
            headers: {
                Accept: 'application/json'
            }
        });

        if (response.ok) {
            setStatus('success');
            e.target.reset();
        } else {
            setStatus('error');
        }
    };

    const inputClasses = "w-full mt-1 p-2 bg-gray-100 dark:bg-gray-800 border-1 border-gray-300 dark:border-gray-900 rounded-sm focus:ring-cyan-500 focus:border-cyan-500";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium">Name</label>
                    <input name="name" type="text" required className={inputClasses} />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                    <label className="block text-sm font-medium">Email</label>
                    <input name="email" type="email" required className={inputClasses} />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" rows="4" minLength="10" required className={inputClasses}></textarea>
            </div>

            <button type="submit" disabled={status === 'loading'} className="transition duration-200 ease-in-out font-bold px-4 py-2 border-0 cursor-pointer bg-cyan-700 text-white rounded hover:bg-cyan-900">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="text-[#006500] dark:text-[#7cce92] text-md">Thanks! I’ll be in touch soon.</p>}
            {status === 'error' && <p className="text-red-800 dark:text-[#ff7073] text-md">Something went wrong. Try again?</p>}
        </form>
    );
}