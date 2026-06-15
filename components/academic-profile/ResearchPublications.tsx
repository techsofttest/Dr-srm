'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';



export default function ResearchPublications() {
    const [academicData, setAcademicData] = useState<any>(null);

useEffect(() => {
    async function fetchAcademic() {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/accademic`
            );

            const data = await res.json();

            setAcademicData(data);
        } catch (err) {
            console.error(err);
        }
    }

    fetchAcademic();
}, []);
const observerships = academicData?.observerships;
const contact = academicData?.contact;
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute top-10 right-10 w-80 h-80 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto">
                
                <div className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 p-8 md:p-12 rounded-2xl shadow-none">
                    <div className="p-3 bg-zinc-50 border border-zinc-200 text-tealAccent rounded-xl w-fit mb-6">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-deepNavy mb-3">
                       { observerships?.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6">
                        {observerships?.description || 'Peer-reviewed publications in:'}
                    </p>

                    {/* Publications Categories list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {observerships?.list?.map(
                                (item: string, idx: number) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-light"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-tealAccent shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                )
                            )}
                        </ul>

                    {/* Database profiles / Academic Links */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8 border-t border-zinc-150">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Research Profiles:</span>
                        <div className="flex flex-wrap items-center gap-3">
                             {contact?.research && (
                                    <a
                                        href={contact.research}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 bg-white text-xs font-semibold"
                                    >
                                        <span>ResearchGate</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                )}

                                {contact?.orcid && (
                                    <a
                                        href={contact.orcid}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 bg-white text-xs font-semibold"
                                    >
                                        <span>ORCID</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                )}
                                 {contact?.googleScholar && (
                            <a 
                                href={contact.googleScholar} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 bg-white text-xs font-semibold text-slate-600 hover:border-tealAccent hover:text-tealAccent hover:bg-tealAccent/[0.02] transition-colors"
                            >
                                <span>Google Scholar</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                                 )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
