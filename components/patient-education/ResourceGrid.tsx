'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);
interface TopicData{
    type:string,
    title:string,
    content:string,
    href:string,
}
interface patientPage{
    title:string,
    content:string,
    image:string,
}
export default function ResourceGrid() {
    const [patient, setTopics] = useState<TopicData[]>([]);
    const [patientpage, setpatient] = useState<patientPage | null>(null);
    const [contact, setContact] = useState({ linkedin: ''});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/patienteducation`)
                .then(res => res.json())
                .then(data => {
                      setpatient(data.patientpage);
                       setContact(data.contact);
                    if (data.patient) {
                        setTopics(data.patient);
                    } else {
                        console.error("The 'casestudy' key was not found in the API response.");
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch:", err);
                    setLoading(false);
                });
        }, []);
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] border-b border-zinc-200 overflow-clip">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-tealAccent/15 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-deepNavy/10 blur-[110px] pointer-events-none z-0" />
            <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Info Panel */}
                    <div className="w-full lg:w-4/12 lg:sticky lg:top-36 self-start">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Information Hub
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                            {patientpage?.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-light">{patientpage?.content}</p>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-deepNavy border border-[#1E2E4D] hover:bg-[#1E2E4D] hover:border-tealAccent text-white font-bold text-xs tracking-wider transition-all uppercase w-full"
                        >
                            <LinkedinIcon className="w-5 h-5 text-tealAccent fill-tealAccent" />
                            <span>Follow for Educational Content</span>
                            <ArrowUpRight className="w-4 h-4 text-white/50" />
                        </a>
                    </div>

                    {/* Right Resource Grid */}
                    <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {patient.map((topic, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    href={topic.href}
                                    className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-6 hover:border-tealAccent/45 transition-all flex flex-col justify-between group shadow-none"
                                >
                                    <div>
                                        <div className="mb-4">
                                            <span className="inline-block text-[10px] font-bold text-tealAccent tracking-widest uppercase bg-tealAccent/10 px-2.5 py-1 rounded-md">
                                                {topic.type}
                                            </span>
                                        </div>
                                        <h4 className="text-base sm:text-lg font-serif font-bold text-deepNavy mb-2">
                                            {topic.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                                            {topic.content}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-zinc-150 flex items-center gap-1.5 text-xs font-bold text-deepNavy group-hover:text-tealAccent transition-colors">
                                        <span>Access Material</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
