'use client';

import React from 'react';
import { Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ClinicalIndications() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] overflow-hidden border-t border-b border-zinc-200">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute bottom-12 right-12 w-80 h-80 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Time is Brain Indicator (Light-gradient card) */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 p-8 rounded-2xl shadow-none">
                        <div className="flex items-center gap-3 text-red-500 mb-6">
                            <Clock className="w-6 h-6 animate-pulse" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Time-Critical Intervention</span>
                        </div>
                        
                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-deepNavy mb-4">
                            Stroke: Every Minute Matters
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                            During an acute stroke, approximately <strong>1.9 million brain cells</strong> die every minute blood flow is blocked. Restoring perfusion immediately saves brain tissues and prevents long-term disability.
                        </p>
                        <div className="p-4 bg-tealAccent/10 text-tealAccent rounded-xl border border-tealAccent/15 flex items-start gap-3">
                            <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold leading-relaxed">
                                Mechanical thrombectomy is recommended up to 24 hours from stroke onset in selected patients with Large Vessel Occlusion.
                            </span>
                        </div>
                    </div>

                    {/* Stroke indication description */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Clinical Indications
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-serif text-deepNavy leading-tight mb-4">
                            When is Mechanical Thrombectomy Used?
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            The procedure is primarily indicated for patients diagnosed with an **Acute Ischaemic Stroke** secondary to a **Large Vessel Occlusion (LVO)** in the anterior or posterior cerebral circulation. 
                        </p>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            Candidates undergo emergency brain imaging (CT Perfusion or MR Perfusion) to identify salvageable brain tissues (ischemic penumbra) prior to immediate catheterization. It can be performed alongside or after intravenous thrombolysis (tPA clot buster).
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-200">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Related Conditions:</span>
                            <Link 
                                href="/conditions#stroke" 
                                className="text-xs font-bold text-tealAccent hover:underline"
                            >
                                Acute Ischaemic Stroke &rarr;
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
