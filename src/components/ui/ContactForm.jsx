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

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Name</label>
                <input name="name" type="text" required className="w-full mt-1 p-2 bg-gray-100 dark:bg-gray-800 border-1 border-gray-300 dark:border-gray-900 rounded-sm focus:ring-cyan-500 focus:border-cyan-500" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
                <input name="email" type="email" required className="w-full mt-1 p-2 bg-gray-100 dark:bg-gray-800 border-1 border-gray-300 dark:border-gray-900 rounded-sm focus:ring-cyan-500 focus:border-cyan-500" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Message</label>
                <textarea name="message" rows="4" minLength="10" required className="w-full mt-1 p-2 bg-gray-100 dark:bg-gray-800 border-1 border-gray-300 dark:border-gray-900 rounded-sm focus:ring-cyan-500 focus:border-cyan-500"></textarea>
            </div>

            <button type="submit" disabled={status === 'loading'} className="transition duration-200 ease-in-out font-bold px-4 py-2 border-0 cursor-pointer bg-cyan-700 text-white rounded hover:bg-cyan-900">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="text-green-600 text-md">Thanks! I’ll be in touch soon.</p>}
            {status === 'error' && <p className="text-red-600 text-md">Something went wrong. Try again?</p>}
        </form>
    );
}