'use client';

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EducationAndTraining() {
    const timelineRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start 0.8', 'end 0.2'],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

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
                        Education &amp; Training
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

                                {/* Degree 1 */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white border-4 border-tealAccent z-10" />
                                    <span className="inline-block bg-tealAccent/10 text-tealAccent text-[10px] font-bold px-2.5 py-0.5 rounded-md mb-2">Post-Doctoral Degree</span>
                                    <h5 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy mb-1">
                                        DM Neuroimaging &amp; Interventional Neuroradiology
                                    </h5>
                                    <p className="text-sm font-medium text-slate-700 mb-1">
                                        National Institute of Mental Health &amp; Neurosciences (NIMHANS), Bengaluru
                                    </p>
                                    <p className="text-xs text-slate-400">Specialised residency in advanced endovascular brain &amp; spinal interventions.</p>
                                </div>

                                {/* Degree 2 */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white border-4 border-tealAccent z-10" />
                                    <span className="inline-block bg-tealAccent/10 text-tealAccent text-[10px] font-bold px-2.5 py-0.5 rounded-md mb-2">Post-Graduate Degree</span>
                                    <h5 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy mb-1">
                                        MD Radiodiagnosis
                                    </h5>
                                    <p className="text-sm font-medium text-slate-700 mb-1">
                                        All India Institute of Medical Sciences (AIIMS), New Delhi
                                    </p>
                                    <p className="text-xs text-slate-400">Specialised training in clinical radiology, diagnostic imaging, and vascular diagnostics.</p>
                                </div>

                                {/* Degree 3 */}
                                <div className="relative">
                                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white border-4 border-tealAccent z-10" />
                                    <span className="inline-block bg-tealAccent/10 text-tealAccent text-[10px] font-bold px-2.5 py-0.5 rounded-md mb-2">Undergraduate Degree</span>
                                    <h5 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy mb-1">
                                        MBBS (Gold Medallist)
                                    </h5>
                                    <p className="text-sm font-medium text-slate-700 mb-1">
                                        Thanjavur Medical College
                                    </p>
                                    <p className="text-xs text-slate-400">Distinction and Gold Medal in academic performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Observerships (Right Column) */}
                    <div className="lg:col-span-1 h-full">
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 h-full flex flex-col">
                            <h4 className="text-xs font-bold tracking-[0.15em] text-tealAccent uppercase mb-6 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Specialized Observerships
                            </h4>

                            <div className="flex-1 flex flex-col gap-6">
                                {/* Observership 1 */}
                                <div className="p-6 bg-bgLight rounded-xl border border-slate-200 hover:border-tealAccent/45 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center">
                                    <h5 className="font-bold text-deepNavy text-base mb-1">
                                        Interventional Radiology Observership
                                    </h5>
                                    <p className="text-xs font-semibold text-slate-700 mb-2">
                                        Christian Medical College (CMC), Vellore
                                    </p>
                                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                                        Focused on diagnostic and therapeutic vascular interventions, body imaging, and non-neuro vascular therapies.
                                    </p>
                                </div>

                                {/* Observership 2 */}
                                <div className="p-6 bg-bgLight rounded-xl border border-slate-200 hover:border-tealAccent/45 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center">
                                    <h5 className="font-bold text-deepNavy text-base mb-1">
                                        Neurointerventional Observership
                                    </h5>
                                    <p className="text-xs font-semibold text-slate-700 mb-2">
                                        National University Hospital (NUH), Singapore
                                    </p>
                                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                                        Focused on contemporary stroke management, advanced neurovascular imaging, and endovascular aneurysm treatment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
