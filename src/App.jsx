import React, { useState } from 'react';
import './styles.css';

function App() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="mx-auto max-w-2xl pt-11 pb-24 md:px-7">
            <header className="mb-12 md:flex md:items-center">
                <div className="mb-4 md:mr-14 md:mb-0">
                    <img className="w-24 md:max-w-20 rounded-full" src="/sean-davis-headshot.png" alt="Sean Christopher Davis" />
                </div>
                <div>
                    <h1 className={`text-white text-2xl md:text-3xl font-extrabold mb-0`}>Sean Christopher Davis</h1>
                    <span className={`text-primary text-md font-semibold`} style={{ fontSize: '1rem' }}>Veteran. Developer. Technologist. Student of Systems.</span>
                </div>
            </header>

            <section className="text-lg text-primary-text">
                <p>Welcome. There are many Sean Davises online, including a few web developers. I am the one from St. Louis, Missouri. I am a web/software developer and student at University of Missouri - St. Louis, studying Information Systems & Technology. I served nine years active duty U.S. Army.</p>
                <p>If you are a web or software developer, collaborate with me on <a href="https://seandavis.io/" target="_blank" rel="noopener noreferrer">GitHub</a>. If you simply stumbled upon my site, let's connect on <a href="https://www.linkedin.com/in/SeanChDavis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>

                {!showMore && (
                    <button
                        className="cursor-pointer border-0 text-sm mt-6 opacity-50 transition duration-200 ease-in-out hover:opacity-100"
                        onClick={() => setShowMore(true)}
                    >
                        Read more about Sean
                    </button>
                )}

                {showMore && (
                    <div className="mt-12 pt-4 border-t-2 border-dotted" style={{ borderColor: 'rgba(0,0,0,.2)' }}>
                        <p>Thanks for taking the time to read a little more. I won't keep you long.</p>
                        <p>As mentioned, I am from St. Louis, Missouri, born and raised. I left St. Louis in 2003 to join the U.S. Army after an uncomfortable semester at the University of Missouri - Columbia (Mizzou). I enlisted for four years, but continued serving for nine.</p>
                        <p>My time in service includes three combat tours to Iraq and a tour in South Korea. I was discharged honorably in early 2012, which is when I transitioned to web development.</p>
                        <p>From 2012 to 2021, I worked from home as a web developer. I spent anywhere from 2-4 years in various cities during this period - Austin, Texas; San Diego, California; and Chicago, Illinois. In late 2021 after selling a company with my Partners at Sandhills Development LLC, I returned to St. Louis after nearly 19 years away.</p>
                        <p>Shortly thereafter, now with the lifestyle freedom to plan the next phase of my career, I returned to school - right back into the University of Missouri system, actually - pursuing a Bachelor of Science in Information Systems and Technology. I will graduate from the University of Missouri - St. Louis (UMSL) in May 2025.</p>
                        <p>Until then, education is my number one priority. While I still write code and consider myself to be an active technologist, homework comes first.</p>
                        <p>If you made it this far, I appreciate you. Feel free to reach out on <a href="https://www.linkedin.com/in/SeanChDavis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Or shoot me an email.</p>
                        <div
                            className="bg-form-bg text-white p-8 rounded-lg mx-auto mt-16 mb-8 shadow-xl"
                        >
                            <form action="https://formspree.io/f/xqkralev" method="POST">
                                <label
                                    htmlFor="email"
                                    className="block font-bold text-sm tracking-wider mb-2"
                                >
                                    Email address:
                                </label>
                                <input
                                    id="email"
                                    className="w-full p-3 mb-6 text-sm border-0 rounded-sm outline-1 outline-field-bg text-white transition duration-300 ease-in-out font-fam bg-field-bg focus:outline-primary"
                                    name="email"
                                    type="email"
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="block font-bold text-sm tracking-wider mb-2"
                                >
                                    Your message:
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 mb-6 text-sm border-0 rounded-sm outline-1 outline-field-bg text-white transition duration-300 ease-in-out font-fam bg-field-bg focus:outline-primary"
                                    name="message"
                                    rows="5"
                                    minLength="10"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-button-bg text-sm text-button-text font-extrabold tracking-wide border-0 rounded-sm py-2.5 px-5 cursor-pointer uppercase transition duration-300 ease-in-out hover:translate-y-[-2px] active:translate-y-[0]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default App;
