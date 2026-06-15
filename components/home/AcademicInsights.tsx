'use client';

import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Award, ArrowUpRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/global/Button';

export default function AcademicInsights() {
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
            console.error("Error fetching academic data:", err);
        }
    }

    fetchAcademic();
}, []);
const education = academicData?.education;
const observerships = academicData?.observerships;
const contact = academicData?.contact;
    return (
        <section id="academic-profile" className="relative w-full py-24 bg-white px-5 md:px-[80px] overflow-hidden border-b border-slate-200">
            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Academic Contributions
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Academic Profile
                    </h3>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Invited Faculty & Academic Leadership (Stacked Cards) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Invited Faculty Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-bgLight border border-slate-300 p-8 rounded-3xl flex flex-col justify-between flex-grow"
                        >
                            <div>
                                <div className="p-3 bg-tealAccent/10 text-tealAccent rounded-2xl w-fit mb-6">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                        {education?.title}
                                    </h4>

                                    <div
                                        className="text-slate-600 text-sm sm:text-base font-light leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: education?.content || '',
                                        }}
                                    />
                            </div>
                        </motion.div>

                        {/* Academic Leadership Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-bgLight border border-slate-300 p-8 rounded-3xl flex flex-col justify-between flex-grow"
                        >
                            <div>
                                <div className="p-3 bg-tealAccent/10 text-tealAccent rounded-2xl w-fit mb-6">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                    {observerships?.title}
                                </h4>

                                <div
                                    className="text-slate-600 text-sm sm:text-base font-light leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: observerships?.description || '',
                                    }}
                                />
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Research & Publications (Larger Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-7 bg-bgLight border border-slate-300 p-8 md:p-10 rounded-3xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="p-3 bg-tealAccent/10 text-tealAccent rounded-2xl w-fit mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                           <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                    {observerships?.title}
                                </h4>

                                <div
                                    className="text-slate-600 text-sm sm:text-base font-light leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: observerships?.description || '',
                                    }}
                                />

                            {/* Publication Categories list */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {observerships?.list?.map(
                                    (item: string, idx: number) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 text-sm text-slate-700 font-light"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-tealAccent shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    )
                                )}
                            </ul>

                            {/* Database profiles / Academic Links */}
                            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-300 mb-8">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Research Profiles:</span>
                                <a
                                    href={contact?.research}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-600 hover:border-tealAccent hover:text-tealAccent hover:bg-tealAccent/[0.02] transition-colors"
                                >
                                    <span>ResearchGate</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href={contact?.orcid}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-600 hover:border-tealAccent hover:text-tealAccent hover:bg-tealAccent/[0.02] transition-colors"
                                >
                                    <span>ORCID</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href={contact?.googleScholar}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-600 hover:border-tealAccent hover:text-tealAccent hover:bg-tealAccent/[0.02] transition-colors"
                                >
                                    <span>Google Scholar</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* CTA and Disclaimer */}
                        <div className="pt-6 border-t border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <Button
                                variant="primary"
                                href="/academic-profile"
                                className="px-6 py-3 text-xs tracking-wider"
                            >
                                <span>Read Full Academic Profile</span>
                            </Button>

                            <p className="text-[11px] text-slate-400 italic max-w-xs font-light">
                                (Detailed publication list and conference activities reside on a separate Academic Profile page.)
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}