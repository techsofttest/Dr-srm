'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Award, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Education() {
const [education, setEducation] = useState({
    cms_title: '',
    image:'',
    heading: '',
    items: [],
});
const [observerships, setObserverships] = useState<any[]>([]);
const [affiliations, setAffiliations] = useState({
    heading: '',
    international: [],
    national: [],
});
    const timelineRef = React.useRef<HTMLDivElement>(null);

    // Line height is driven by scroll position through the timeline
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start 0.8', 'end 0.2'],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`)
        .then((res) => res.json())
        .then((data) => {
           setEducation(data.education || {
    cms_title: '',
     heading: '',
    items: [],
});
            setObserverships(data.observerships || []);
            setAffiliations(
                data.affiliations || {
                    heading: '',
                    international: [],
                    national: [],
                }
            );
        })
        .catch(console.error);
}, []);
    return (
        <section id="academic-profile" className="relative w-full py-24 bg-white px-5 md:px-[80px] border-b border-slate-100 overflow-hidden">
            {/* Background decorative image */}
            <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
                <Image
                    src="/patient_recovery_bg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    
                    {/* Left Column (Timeline & Observerships) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        
                        {/* Cell A: Header + Timeline */}
                        <div className="border border-slate-200 rounded-2xl p-8 md:p-10 bg-white flex flex-col">
                            <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-tealAccent" />
                               {education.cms_title}
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-12">
                               {education.heading}
                            </h3>

                            {/* Timeline */}
                            <div ref={timelineRef} className="relative pl-8 space-y-10">
                                {/* Track */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
                                {/* Scroll-driven teal line */}
                                <motion.div
                                    className="absolute left-0 top-0 w-px bg-tealAccent"
                                    style={{ height: lineHeight }}
                                />
                                {education.items.map((edu: any, idx: number) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white border-4 border-tealAccent z-10" />
                                        <div className="text-xs font-bold text-tealAccent tracking-wider mb-1">{edu.years}</div>
                                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy mb-1">{edu.degree}</h4>
                                        <p className="text-sm text-slate-500 font-medium mb-2">{edu.institution}</p>
                                        <span className="inline-block bg-tealAccent/10 text-tealAccent text-xs font-bold px-3 py-1 rounded-md">{edu.note}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Observerships Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {observerships.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-slate-200 rounded-2xl p-6 flex gap-4 items-start bg-white hover:border-tealAccent transition-all duration-300"
                                >
                                    <div className="p-2.5 bg-bgLight rounded-xl text-tealAccent h-fit flex-shrink-0">
                                        <Award className="w-5 h-5" />
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold tracking-[0.15em] text-tealAccent uppercase mb-2">
                                            {item.category}
                                        </h4>

                                        <h5 className="font-bold text-deepNavy text-sm sm:text-base leading-tight mb-1">
                                            {item.title}
                                        </h5>

                                        <p className="text-xs text-slate-500">
                                            {item.institution}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Right Column (Affiliations & Portrait) */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        
                        {/* Cell B: Professional Affiliations */}
                        <div className="border border-slate-200 rounded-2xl overflow-hidden flex-shrink-0">
                            <div className="bg-deepNavy text-white p-8 md:p-10 relative overflow-hidden">
                                <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                                <h4 className="text-xs font-bold tracking-widest text-tealAccent uppercase mb-2">Credentials</h4>
                                <h5 className="text-2xl font-serif font-bold mb-8">{affiliations.heading}</h5>
                                <div className="space-y-8">
                                    <div>
                                        <h6 className="text-xs font-bold tracking-widest text-tealAccent uppercase mb-3">International</h6>
                                        <ul className="space-y-3">
                                          {affiliations.international?.map((aff: any, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                                                    <span className="text-tealAccent mt-1 font-bold">&bull;</span>
                                                    <span>{aff.name} <strong className="text-tealAccent">({aff.short})</strong></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="text-xs font-bold tracking-widest text-tealAccent uppercase mb-3">National</h6>
                                        <ul className="space-y-3">
                                           {affiliations.national?.map((aff: any, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                                                    <span className="text-tealAccent mt-1 font-bold">&bull;</span>
                                                    <span>{aff.name} <strong className="text-tealAccent">({aff.short})</strong></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cell C: Portrait */}
                        <div className="border border-slate-200 rounded-2xl overflow-hidden relative flex-1 min-h-[350px] w-full">
                            {education.image && (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${education.image}`}
                                    alt="Dr. Soumya Ranjan Malla"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover object-top"
                                    priority
                                />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
