'use client';

import React from 'react';
import { CheckCircle2, FileSearch, HelpCircle } from 'lucide-react';

const commonConditions = [
    "Large Vessel Occlusion Stroke",
    "Brain Aneurysms",
    "AVMs & dAVFs",
    "Carotid Stenosis",
    "Intracranial Stenosis",
    "Pulsatile Tinnitus",
    "Cryptogenic Intracranial Haemorrhage",
    "Spinal Vascular Disorders",
    "Chronic SDH for MMA Embolisation"
];

const supportServices = [
    "Neurovascular Image Review",
    "Complex Neurovascular Consultation",
    "Urgent Transfer Coordination",
    "Multidisciplinary Case Discussions",
    "Treatment Planning Assistance"
];

export default function ReferralScope() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute bottom-12 right-12 w-80 h-80 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Referral Pathways
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Referral Scope &amp; Support Services
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Column 1: Conditions */}
                    <div className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-none">
                        <h4 className="text-lg sm:text-xl font-serif font-bold text-deepNavy mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4">
                            <HelpCircle className="w-5 h-5 text-tealAccent" />
                            Common Referral Conditions
                        </h4>
                        <ul className="space-y-4">
                            {commonConditions.map((condition, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base font-light">
                                    <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                    <span>{condition}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Support Services */}
                    <div className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-none">
                        <h4 className="text-lg sm:text-xl font-serif font-bold text-deepNavy mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4">
                            <FileSearch className="w-5 h-5 text-tealAccent" />
                            Referral Support
                        </h4>
                        <ul className="space-y-4">
                            {supportServices.map((service, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base font-light">
                                    <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
