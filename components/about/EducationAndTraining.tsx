'use client';

import React, { useEffect, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EducationAndTraining() {
    const [education, setEducation] = useState({
    cms_title: '',
    items: [],
});

const [observerships, setObserverships] = useState({
    cms_title: '',
    items: [],
});
    const timelineRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start 0.8', 'end 0.2'],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
        useEffect(() => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`)
                .then((res) => res.json())
                .then((data) => {
                    setEducation(data.education || {
                        cms_title: '',
                        items: [],
                    });

                    setObserverships(data.observerships || {
                        cms_title: '',
                        items: [],
                    });
                })
                .catch(console.error);
        }, []);
    return (
        <section className="relative w-full py-24 bg-bgLight px-5 md:px-[80px] overflow-hidden border-b border-slate-200">
            {/* Subtle visual break glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-slate-100 blur-3xl pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent" />
                        Academic Pedigree
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        {education.cms_title}
                    </h3>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Degrees Timeline (Left Column - Span 2) */}
                    <div className="lg:col-span-2 h-full">
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 md:p-10 h-full">
                            <h4 className="text-xs font-bold tracking-[0.15em] text-tealAccent uppercase mb-8 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" />
                                Formal Medical Qualifications
                            </h4>

                            <div ref={timelineRef} className="relative pl-8 space-y-10">
                                {/* Timeline track line */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
                                {/* Scroll-driven teal line */}
                                <motion.div
                                    className="absolute left-0 top-0 w-px bg-tealAccent"
                                    style={{ height: lineHeight }}
                                />

                                    {education.items?.map((item: any, idx: number) => (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white border-4 border-tealAccent z-10" />

                                            <span className="inline-block bg-tealAccent/10 text-tealAccent text-[10px] font-bold px-2.5 py-0.5 rounded-md mb-2">
                                                {item.level}
                                            </span>

                                            <h5 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy mb-1">
                                                {item.degree}
                                            </h5>

                                            <p className="text-sm font-medium text-slate-700 mb-1">
                                                {item.institution}
                                            </p>

                                            <p className="text-xs text-slate-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Observerships (Right Column) */}
                    <div className="lg:col-span-1 h-full">
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 h-full flex flex-col">
                            <h4 className="text-xs font-bold tracking-[0.15em] text-tealAccent uppercase mb-6 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            {observerships.cms_title}
                        </h4>

                            <div className="flex-1 flex flex-col gap-6">
                                {/* Observership 1 */}
                               {observerships.items?.map((item: any, idx: number) => (
                                        <div
                                            key={idx}
                                            className="p-6 bg-bgLight rounded-xl border border-slate-200 hover:border-tealAccent/45 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center"
                                        >
                                            <h5 className="font-bold text-deepNavy text-base mb-1">
                                                {item.title}
                                            </h5>

                                            <p className="text-xs font-semibold text-slate-700 mb-2">
                                                {item.institution}
                                            </p>

                                            <p className="text-xs text-slate-400 leading-relaxed font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
