'use client';

import React, { useEffect, useState } from 'react';

interface CaseStudy {
    sub_title: string;
    title: string;
    description: string;
    patient: string; // Ensure your API includes this field if needed
}

export default function CaseReviews() {
    const [story, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimony`)
            .then((res) => res.json())
            .then((data) => {
                if (data.story) {
                    setCaseStudies(data.story);
                } else {
                    console.error("The 'story' key was not found in the API response.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null; // Or a skeleton loader

    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            {/* Background elements remain the same */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-deepNavy/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute top-12 left-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />
            <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full border border-deepNavy/5 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Case Studies
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Clinical Case Reviews
                    </h3>
                </div>

                {/* Dynamic Case Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {story.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-none hover:border-tealAccent/45 transition-colors duration-300"
                        >
                            <div>
                                <span className="inline-block bg-tealAccent/10 text-tealAccent text-xs font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                                    {item.sub_title || 'Case Review'}
                                </span>
                                <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}