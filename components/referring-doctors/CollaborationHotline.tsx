'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import Button from '@/components/global/Button';

export default function CollaborationHotline() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left Column: Commitment text */}
                    <div className="w-full lg:w-7/12">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Clinical Collaboration
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                            Rapid Access Neurovascular Consultation
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                            Referring physicians receive timely communication regarding imaging findings, treatment decisions, procedural outcomes and follow-up recommendations to ensure continuity of patient care.
                        </p>
                        <p className="text-slate-500 text-xs sm:text-sm font-light italic border-l-2 border-tealAccent pl-4">
                            Our multidisciplinary stroke and endovascular teams coordinate with emergency physicians and medical centers 24/7.
                        </p>
                    </div>

                    {/* Right Column: Direct Hotline Card */}
                    <div className="w-full lg:w-5/12">
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/60 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-none">
                            <div>
                                <div className="p-3 bg-white border border-zinc-200 text-tealAccent rounded-xl w-fit mb-6">
                                    <Phone className="w-6 h-6 animate-pulse" />
                                </div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                    Direct Consultant Access
                                </h4>
                                <h5 className="text-xl font-serif font-bold text-deepNavy mb-4">
                                    Dedicated Neurovascular Referral Line
                                </h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                                    Physicians can contact Dr. Soumya Ranjan Malla directly for acute stroke referrals, imaging reviews, and emergency endovascular consults.
                                </p>
                            </div>
                            <Button 
                                variant="primary"
                                href="tel:+919629997812"
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Referral Hotline</span>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
