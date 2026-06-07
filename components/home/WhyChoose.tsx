'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, Eye, Activity, Globe, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
    {
        title: "AIIMS & NIMHANS trained Specialist",
        description: "Advanced training in neuroradiology and neurointervention from India's premier medical institutions.",
        icon: Award,
        iconAnim: {
            animate: { y: [0, -5, 0] },
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const },
        },
    },
    {
        title: "Dedicated Neurovascular Practice",
        description: "Focused exclusively on stroke, brain aneurysms, vascular malformations, carotid disease and cerebrovascular disorders.",
        icon: ShieldCheck,
        iconAnim: {
            animate: { scale: [1, 1.15, 1] },
            transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.3 },
        },
    },
    {
        title: "Imaging + Intervention Expertise",
        description: "Comprehensive diagnosis, treatment planning and intervention through advanced neuroimaging and contemporary endovascular therapies.",
        icon: Eye,
        iconAnim: {
            animate: { x: [0, 4, -4, 0] },
            transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 },
        },
    },
    {
        title: "Extensive Neurovascular Experience",
        description: "Significant experience in mechanical thrombectomy, aneurysm treatment, carotid interventions and diagnostic neurovascular angiography.",
        icon: Activity,
        iconAnim: {
            animate: { scaleX: [1, 1.2, 0.9, 1.15, 1] },
            transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.2 },
        },
    },
    {
        title: "International Exposure",
        description: "Training exposure at National University Hospital, Singapore with emphasis on stroke systems of care, workflow optimisation and quality assurance.",
        icon: Globe,
        iconAnim: {
            animate: { rotate: [0, 360] },
            transition: { duration: 8, repeat: Infinity, ease: 'linear' as const, delay: 0 },
        },
    },
    {
        title: "Protocol-Driven Care",
        description: "Evidence-based treatment pathways prioritising safety, efficiency and clinical outcomes.",
        icon: HeartPulse,
        iconAnim: {
            animate: { scale: [1, 1.2, 1, 1.15, 1] },
            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.4 },
        },
    },
];

export default function WhyChoose() {
    return (
        <section className="relative w-full pt-24 pb-32 bg-bgLight px-5 md:px-[80px] border-b border-slate-200 overflow-hidden">
            {/* Background decorative image */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <Image
                    src="/patient_recovery_bg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {/* Background decorative shapes (Trust-creating items) */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[350px] h-[350px] text-tealAccent/[0.04] pointer-events-none select-none z-0">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                    {/* Shield outline representing trust and safety */}
                    <path d="M50 5 L85 15 V45 C85 70 50 95 50 95 C50 95 15 70 15 45 V15 L50 5 Z" strokeDasharray="3 3" />
                    {/* Medical Cross inside */}
                    <path d="M50 25 V65 M30 45 H70" strokeWidth="2.5" />
                </svg>
            </div>
            
            {/* Heartbeat pulse wave in background */}
            <div className="absolute left-10 bottom-10 w-2/3 h-32 text-tealAccent/[0.03] pointer-events-none select-none z-0">
                <svg viewBox="0 0 300 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M0 50 H100 L110 20 L120 80 L130 40 L140 60 L150 50 H300" strokeDasharray="6 6" />
                </svg>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Why Choose
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Excellence in Neurointerventional Care
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                        A clinical methodology anchored in India's top medical institutes, global standard protocols, and extensive procedural experience.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => {
                        const IconComponent = pillar.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group flex flex-col bg-white/90 backdrop-blur-sm border border-slate-300 rounded-2xl p-8 hover:border-tealAccent/45 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-tealAccent group-hover:w-full transition-all duration-500" />

                                {/* Animated Icon */}
                                <div className="mb-6 w-12 h-12 rounded-xl bg-tealAccent/10 text-tealAccent flex items-center justify-center group-hover:bg-tealAccent/20 transition-colors duration-300">
                                    <motion.div
                                        animate={pillar.iconAnim.animate}
                                        transition={pillar.iconAnim.transition}
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </motion.div>
                                </div>

                                <h4 className="text-lg sm:text-xl font-bold font-serif text-deepNavy mb-3 group-hover:text-tealAccent transition-colors">
                                    {pillar.title}
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-light">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Animated Wave Divider at the bottom of Why Choose */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px] h-[40px] sm:h-[60px] md:h-[80px] pointer-events-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
                    {/* Wave 3 */}
                    <motion.path
                        d="M0,40 C300,80 900,0 1200,40 C1500,80 2100,0 2400,40 L2400,120 L0,120 Z"
                        fill="#0B1B3D"
                        className="opacity-[0.2]"
                        animate={{ x: [0, -1200] }}
                        transition={{ ease: "linear", duration: 32, repeat: Infinity }}
                    />
                    {/* Wave 2 */}
                    <motion.path
                        d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 C1350,90 1550,30 1800,60 C2050,90 2250,30 2400,60 L2400,120 L0,120 Z"
                        fill="#0B1B3D"
                        className="opacity-[0.4]"
                        animate={{ x: [0, -1200] }}
                        transition={{ ease: "linear", duration: 22, repeat: Infinity }}
                    />
                    {/* Wave 1 */}
                    <motion.path
                        d="M0,80 C200,50 400,110 600,80 C800,50 1000,110 1200,80 C1400,50 1600,110 1800,80 C2000,50 2200,110 2400,80 L2400,120 L0,120 Z"
                        fill="#0B1B3D"
                        className="opacity-[0.9]"
                        animate={{ x: [0, -1200] }}
                        transition={{ ease: "linear", duration: 14, repeat: Infinity }}
                    />
                </svg>
            </div>
        </section>
    );
}
