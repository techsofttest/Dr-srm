'use client';

import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/global/Button';

export default function AneurysmCTA() {
    return (
        <section className="relative w-full py-24 bg-white px-5 md:px-[80px] overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto">
                
                {/* CTA Box with saturated gradient, sharp clip path cut and no shadow */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#071124] to-[#0d2142] border border-zinc-200 text-white rounded-2xl p-8 md:p-12">
                    {/* Saturated radial spotlight */}
                    <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-tealAccent/20 blur-[100px] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2.5 text-tealAccent mb-4">
                                <HelpCircle className="w-6 h-6 shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-widest">Aneurysm Evaluation FAQ</span>
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                                Do all brain aneurysms require immediate treatment?
                            </h4>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                                No. Small, unruptured aneurysms with low rupture risk parameters are often monitored safely with regular clinical imaging (MRA / CTA). A specialized consultation with an interventional neuroradiologist determines whether monitoring or intervention is the safest course of action.
                            </p>
                        </div>

                        <div className="shrink-0 w-full md:w-auto">
                            <Button
                                variant="primary"
                                href="/contact"
                                className="w-full md:w-auto flex items-center justify-center gap-2"
                            >
                                <span>Book Consultation</span>
                                <ArrowRight className="w-4 h-4 text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
