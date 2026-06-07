'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/global/Button';
import {
    Brain, Heart, Activity, Layers, ActivitySquare,
    ShieldAlert, GraduationCap, MapPin, ArrowRight,
    CheckCircle2,
} from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
    { number: 100, suffix: '+', label: 'Mechanical Thrombectomy Procedures', icon: Brain },
    { number: 75, suffix: '+', label: 'Intracranial Aneurysm Treatments', icon: Heart },
    { number: 100, suffix: '+', label: 'Carotid & Intracranial Stenting', icon: Activity },
    { number: 35, suffix: '+', label: 'AVM & dAVF Embolisations', icon: Layers },
    { number: 750, suffix: '+', label: 'Diagnostic Cerebral Angiograms', icon: ActivitySquare },
    { number: 60, suffix: '+', label: 'Image-Guided Spine Interventions', icon: ShieldAlert },
];

const highlights = [
    'Minimally invasive catheter-based techniques',
    'Acute stroke intervention & thrombectomy',
    'Brain aneurysm coiling & flow diversion',
    'Carotid & intracranial revascularisation',
    'AVM / dAVF embolisation',
    'Advanced neurovascular imaging (MRA, CTA, DSA)',
];

// ── Animated counter (self-contained, owns its own ref) ─────────────────────

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, target, {
            duration: 2,
            ease: 'easeOut',
            onUpdate: (v) => setDisplay(Math.round(v)),
        });
        return controls.stop;
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-3xl font-bold font-serif text-white tracking-tight tabular-nums">
            {display}{suffix}
        </span>
    );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ stat, idx }: { stat: typeof stats[0]; idx: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const inView = useInView(cardRef, { once: true, margin: '-60px' });
    const Icon = stat.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative bg-white/5 border border-white/20 rounded-2xl p-6 overflow-hidden hover:bg-white/10 hover:border-tealAccent/30 transition-all duration-300"
        >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-tealAccent/5 to-transparent transition-opacity duration-500 pointer-events-none rounded-2xl" />

            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-tealAccent/15 text-tealAccent rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                </div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
            </div>
            <p className="text-xs font-semibold text-white/55 uppercase tracking-wide leading-tight">
                {stat.label}
            </p>
        </motion.div>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function AboutAndProcedures() {
    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

    return (
        <>
            {/* ════════════════════════════════════════════════════════════════
                PART 1 — DEDICATED EXPERTISE  (Light bg, image + bio)
            ════════════════════════════════════════════════════════════════ */}
            <section id="about" className="relative w-full py-24 bg-white px-5 md:px-[80px] overflow-hidden">
                {/* Background decorative image and glow */}
                <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
                    <Image
                        src="/clinic_care_bg.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Soft decorative blob */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-tealAccent/5 blur-3xl pointer-events-none z-0" />

                <div className="relative z-10 max-w-[1600px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* ── Left: Doctor Image ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="w-full lg:w-5/12 flex-shrink-0"
                        >
                            <div className="relative">
                                {/* Main image frame */}
                                <div className="relative h-[500px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/hero-sec/soumya-pr.jpg"
                                        alt="Dr. Soumya Ranjan Malla"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                    {/* Gradient footer on image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/70 via-transparent to-transparent" />

                                    {/* Name badge at bottom of image */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3">
                                            <p className="text-white font-bold text-sm">Dr. Soumya Ranjan Malla</p>
                                            <p className="text-tealAccent text-xs font-medium mt-0.5">Consultant Interventional Neuroradiologist</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating credential badge — top right */}
                                {/* <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    animate={{ y: [0, -6, 0] }}
                                    // @ts-ignore – framer-motion allows both whileInView + animate
                                    style={{ position: 'absolute', top: '1.5rem', right: '-1.5rem' }}
                                    className="bg-white shadow-xl border border-slate-100 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 z-10"
                                >
                                    <div className="p-2 bg-tealAccent/10 rounded-xl">
                                        <GraduationCap className="w-5 h-5 text-tealAccent" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Training</p>
                                        <p className="text-xs font-bold text-deepNavy leading-tight">AIIMS · NIMHANS</p>
                                    </div>
                                </motion.div> */}

                                {/* Floating location badge — bottom left */}
                                {/* <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    animate={{ y: [0, 6, 0] }}
                                    // @ts-ignore
                                    style={{ position: 'absolute', bottom: '5.5rem', left: '-1.5rem' }}
                                    className="bg-white shadow-xl border border-slate-100 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 z-10"
                                >
                                    <div className="p-2 bg-red-50 rounded-xl">
                                        <MapPin className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Based At</p>
                                        <p className="text-xs font-bold text-deepNavy leading-tight">Renai Medicity, Kochi</p>
                                    </div>
                                </motion.div> */}
                            </div>
                        </motion.div>

                        {/* ── Right: Bio Text ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="w-full lg:w-7/12"
                        >
                            <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-tealAccent" />
                                Dedicated Expertise
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-8">
                                Neurovascular &amp;<br className="hidden md:block" /> Endovascular Care
                            </h3>

                            <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-light mb-8">
                                <p className="text-lg font-medium text-slate-900 leading-normal">
                                    Many neurological emergencies and vascular disorders that previously required major surgery can now be treated through minimally invasive catheter-based techniques.
                                </p>
                                <p>
                                    Dr. Soumya Ranjan Malla is a Consultant Interventional Neuroradiologist specialising in the diagnosis and treatment of cerebrovascular and spinal vascular disorders. His practice focuses on acute stroke intervention, brain aneurysm treatment, carotid and intracranial revascularisation, embolisation of vascular malformations and advanced neurovascular imaging.
                                </p>
                                <p>
                                    Trained at AIIMS New Delhi and NIMHANS Bengaluru, he combines expertise in advanced neuroimaging with contemporary endovascular therapies to deliver comprehensive, patient-centred neurovascular care.
                                </p>
                            </div>

                            {/* Highlight Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                                {highlights.map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                                        className="flex items-center gap-2.5 text-sm text-slate-700"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-tealAccent flex-shrink-0" />
                                        <span>{h}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Button
                                variant="primary"
                                href="#contact"
                            >
                                Book a Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════
                PART 2 — PROCEDURAL EXPERIENCE  (Dark bg, animated counters)
            ════════════════════════════════════════════════════════════════ */}
            <section className="relative w-full py-24 bg-deepNavy px-5 md:px-[80px] overflow-hidden">

                {/* Background cath-lab image */}
                <div className="absolute inset-0 pointer-events-none">
                    <Image
                        src="/bg/cath-lab-bg.png"
                        alt=""
                        fill
                        className="object-cover opacity-15"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/80 via-deepNavy/40 to-deepNavy/90" />
                </div>

                <div ref={statsRef} className="relative z-10 max-w-[1600px] mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={statsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 inline-flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent" />
                            Practice Metrics
                            <span className="w-12 h-[1px] bg-tealAccent" />
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
                            Independent Procedural Experience
                        </h3>
                        <p className="mt-4 text-white/55 text-sm sm:text-base max-w-2xl mx-auto font-light">
                            A growing body of independently performed endovascular procedures across India's leading neurovascular centres.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} stat={stat} idx={idx} />
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}