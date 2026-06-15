'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
    Brain, ShieldAlert, HeartPulse, Activity, Zap, HelpCircle, ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

interface ServiceCategory {
    id: number;
    slug: string;
    listingTitle: string;
    listingSubtitle: string;
    listingDescription: string; // Used in place of 'items'
    image: string;
    listingActionText: string;
}


export default function ConditionsGrid() {
      const [condition, setCategories] = useState<ServiceCategory[]>([]);
    
        useEffect(() => {
            async function fetchServices() {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/condition`);
                    const data = await res.json();
                    if (data.condition && Array.isArray(data.condition)) {
                        setCategories(data.condition);
                    }
                } catch (err) {
                    console.error("Error fetching condition:", err);
                }
            }
            fetchServices();
        }, []);
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-tealAccent/12 blur-[130px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-deepNavy/8 blur-[120px] pointer-events-none z-0" />

            {/* Outline spheres for clinical aesthetics */}
            <div className="absolute top-20 left-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0 animate-pulse" />
            <div className="absolute bottom-16 right-20 w-80 h-80 rounded-full border border-deepNavy/5 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {condition.map((cond) => {
                       
                        return (
                            <div
                                key={cond.slug}
                                id={cond.slug}
                                className="bg-gradient-to-br from-white to-zinc-50/80 border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-tealAccent/45 transition-colors duration-300 shadow-none group"
                            >
                                <div>
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-zinc-200">
                                        <img
                                            src={cond.image}
                                            alt={cond.listingTitle}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060f22]/20 to-transparent" />

                                      
                                    </div>

                                    {/* Content container */}
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center justify-between mb-3">
                                            <h5 className="text-xs font-semibold text-tealAccent uppercase tracking-wider">
                                                {cond.listingSubtitle}
                                            </h5>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                                Therapy Area
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-serif font-bold text-deepNavy mb-3 group-hover:text-tealAccent transition-colors">
                                            {cond.listingTitle}
                                        </h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                                            {cond.listingDescription}
                                        </p>
                                    </div>
                                </div>

                                {/* Action link */}
                                <div className="px-6 md:px-8 pb-8">
                                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-deepNavy">
                                        <Link
                                            href={`/conditions/${cond.slug}`}
                                            className="hover:text-tealAccent transition-colors flex items-center gap-1.5"
                                        >
                                            <span>{cond.listingActionText}</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
