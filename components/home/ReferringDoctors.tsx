'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Phone, Users, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/global/Button';

interface reffData{
    title:string;
    description:string;
    refferal: string[];  
}

export default function ReferringDoctors() {
  const [reffering, setData] = useState<reffData[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`)
            .then(res => res.json())
            .then(json => setData(json.reffering || []))
            .catch(err => console.error(err));
    }, []);

    const getByTitle = (title: string) => reffering.find(item => item.title === title);

    const intro = getByTitle("For Referring Doctors");
    const commitment = getByTitle("Physician Communication Commitment");
    const conditions = getByTitle("Common Referral Conditions");
    const support = getByTitle("Referral Support");

    return (
        <section id="referring-doctors" className="relative w-full py-24 bg-deepNavy text-white px-5 md:px-[80px] overflow-hidden">
            {/* Background decorative image and circles */}
            <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
                <Image
                    src="/medical_referral_bg.png"
                    alt="Medical Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/5 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navyLight/50 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    
                    {/* Left Column: Referring Info & Direct Hotline */}
                    <div className="lg:col-span-1 flex flex-col justify-between gap-8">
                        <div>
                            <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-tealAccent"></span>
                                Medical Portal
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6">
                               {intro?.title}
                            </h3>
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 font-light">{intro?.description}</p>
                        </div>

                        {/* Dedicated Hotline Callout Card */}
                        <div className="bg-gradient-to-br from-red-950/40 to-red-900/10 border border-red-500/40 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300">
                            <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2 animate-pulse">
                                <ShieldAlert className="w-4 h-4 text-red-400" />
                                <span>Dedicated Referral Line</span>
                            </h4>
                            <h5 className="text-base sm:text-lg font-serif font-bold mb-4 text-white leading-snug">
                                Rapid Access Neurovascular Consultation
                            </h5>
                            <Button 
                                variant="primary"
                                href="tel:+919629997812"
                                className="w-full"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Direct Consultant Access</span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Columns: Commitment and Lists in a Bento Layout */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        
                        {/* Physician Communication Commitment Card */}
                        <div className="bg-white/[0.03] border border-white/15 backdrop-blur-sm rounded-3xl p-8 hover:border-tealAccent/45 transition-all duration-300">
                            <h4 className="text-xs font-bold text-tealAccent uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{commitment?.title}</span>
                            </h4>
                            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">{commitment?.description}</p>
                        </div>

                        {/* Split Grid for Conditions and Support */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Card: Common Referral Conditions */}
                            <div className="bg-white/[0.03] border border-white/15 backdrop-blur-sm rounded-3xl p-8 hover:border-tealAccent/45 transition-all duration-300">
                                <h4 className="text-xs font-bold text-tealAccent uppercase tracking-widest mb-4">
                                    Diagnostics & Indications
                                </h4>
                                <h5 className="text-lg font-serif font-bold mb-6 text-white pb-3 border-b border-white/20">{conditions?.title}</h5>
                                <ul className="space-y-3">
                                    {conditions?.refferal.map((cond, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                                            <CheckCircle className="w-4 h-4 text-tealAccent shrink-0 mt-0.5" />
                                            <span className="font-light">{cond}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card: Referral Support */}
                            <div className="bg-white/[0.03] border border-white/15 backdrop-blur-sm rounded-3xl p-8 hover:border-tealAccent/45 transition-all duration-300">
                                <h4 className="text-xs font-bold text-tealAccent uppercase tracking-widest mb-4">
                                    Services For Physicians
                                </h4>
                                <h5 className="text-lg font-serif font-bold mb-6 text-white pb-3 border-b border-white/20">{support?.title}</h5>
                                <ul className="space-y-3">
                                    {support?.refferal.map((sup, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                                            <ArrowRight className="w-4 h-4 text-tealAccent shrink-0 mt-0.5" />
                                            <span className="font-light">{sup}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
