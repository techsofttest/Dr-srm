'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-28 bg-white px-5 md:px-[80px] overflow-clip border-b border-slate-100">
            {/* Background decorative elements */}
            <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
                <Image
                    src="/clinic_care_bg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            {/* Glow blob */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-tealAccent/5 blur-3xl pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Premium Doctor Portrait */}
                    <div className="w-full lg:w-5/12 flex-shrink-0 lg:sticky lg:top-32 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="relative">
                                {/* Main image container */}
                                <div className="relative h-[450px] sm:h-[550px] md:h-[620px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 z-10">
                                    <Image
                                        src="/about-page/soumya1.png"
                                        alt="Dr. Soumya Ranjan Malla"
                                        fill
                                        className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                                        priority
                                    />

                                    {/* Subtle Gradient Shadow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/60 via-transparent to-transparent pointer-events-none" />

                                    {/* Name Tag */}
                                    <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3.5">
                                            <p className="text-white font-bold text-base">Dr. Soumya Ranjan Malla</p>
                                            <p className="text-white text-xs font-semibold mt-0.5">Consultant Interventional Neuroradiologist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Bio Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-tealAccent/10 border border-tealAccent/30 text-tealAccent font-bold text-xs uppercase tracking-wider mb-6">
                            <span>Dedicated Expertise</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-deepNavy leading-tight mb-8">
                            Dedicated Expertise in Neurovascular &amp; Endovascular Care
                        </h1>

                        <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            <p className="text-lg font-medium text-slate-800 leading-normal border-l-2 border-tealAccent pl-4">
                                Many neurological emergencies and vascular disorders that previously required major surgery can now be treated through minimally invasive catheter-based techniques.
                            </p>
                            <p>
                                Dr. Soumya Ranjan Malla is a Consultant Interventional Neuroradiologist specialising in the diagnosis and treatment of cerebrovascular and spinal vascular disorders. His practice focuses on acute stroke intervention, brain aneurysm treatment, carotid and intracranial revascularisation, embolisation of vascular malformations and advanced neurovascular imaging.
                            </p>
                            <p>
                                Trained at AIIMS, New Delhi and NIMHANS, Bengaluru, he combines expertise in advanced neuroimaging with contemporary endovascular therapies to deliver comprehensive, patient-centred neurovascular care.
                            </p>
                            <p>
                                In addition to clinical practice, he has actively contributed to the development of neurointerventional services through protocol-based stroke pathways, multidisciplinary neurovascular programmes, quality improvement initiatives and clinical governance frameworks.
                            </p>
                            <p>
                                His academic interests include cerebrovascular disease, advanced neuroimaging and AI-supported workflow optimisation in neurovascular care.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
