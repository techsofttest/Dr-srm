'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface TopicData{
    type:string,
    title:string,
    content:string,
    href:string,
}
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

export default function PatientEducation() {
    const [topics, setTopics] = useState<TopicData[]>([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`)
            .then(res => res.json())
            .then(data => {
                // Check if the data object has the 'casestudy' key
                if (data.topics) {
                    setTopics(data.topics);
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
        <section id="patient-education" className="relative w-full py-24 bg-bgLight px-5 md:px-[80px] border-b border-slate-200">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Panel: Introduction & LinkedIn CTA */}
                    <div className="w-full lg:w-4/12 lg:sticky lg:top-36 self-start">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Information Hub
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                            Patient Education Centre
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
                            Short videos, patient guides, educational articles, and infographics designed to help patients and families understand complex neurovascular conditions and interventional treatment options.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/soumyaranjanmalla"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-deepNavy border border-navyLight/50 hover:bg-navyLight hover:border-tealAccent text-white font-bold text-xs tracking-wider transition-all uppercase w-full sm:w-auto"
                        >
                            <LinkedinIcon className="w-5 h-5 text-tealAccent fill-tealAccent" />
                            <span>Follow for Educational Content</span>
                            <ArrowUpRight className="w-4 h-4 text-white/50" />
                        </a>
                    </div>

                    {/* Right Panel: Education Cards Grid */}
                    <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {topics.map((topic, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    href={topic.href}
                                    className="bg-white border border-slate-300 rounded-2xl p-6 hover:border-tealAccent transition-all flex flex-col justify-between group"
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

                                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-deepNavy group-hover:text-tealAccent transition-colors">
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
