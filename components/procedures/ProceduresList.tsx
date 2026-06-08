'use client';

import React from 'react';
import {
    ArrowUpRight, ShieldAlert, Cpu, HeartPulse, HelpCircle, Activity, Monitor,
} from 'lucide-react';
import Link from 'next/link';
import { procedures } from '@/data/clinicalContent';

const iconMap: Record<string, React.ElementType> = {
    ShieldAlert, Cpu, HeartPulse, HelpCircle, Activity, Monitor,
};

export default function ProceduresList() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-deepNavy/8 blur-[120px] pointer-events-none z-0" />

            {/* Outline spheres for clinical aesthetics */}
            <div className="absolute top-20 left-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />
            <div className="absolute bottom-16 right-20 w-80 h-80 rounded-full border border-deepNavy/5 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {procedures.map((proc) => {
                        const IconComp = iconMap[proc.iconName] ?? ShieldAlert;
                        return (
                            <div
                                key={proc.slug}
                                id={proc.slug}
                                className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between hover:border-tealAccent/45 transition-colors duration-300 shadow-none group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy group-hover:text-tealAccent transition-colors">
                                            {proc.listingTitle}
                                        </h4>
                                        <div className="p-2.5 bg-zinc-50 border border-zinc-200 text-tealAccent rounded-xl shrink-0">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                                        {proc.listingDescription}
                                    </p>

                                    {/* Technical sub-details list with borders */}
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {proc.listingDetails.map((detail, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-xs text-slate-600 font-light bg-white border border-zinc-200/60 px-3 py-2 rounded-xl"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-tealAccent shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                                    <Link
                                        href={`/procedures/${proc.slug}`}
                                        className="text-xs font-bold text-deepNavy hover:text-tealAccent transition-colors flex items-center gap-1.5"
                                    >
                                        <span>{proc.listingActionText}</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
