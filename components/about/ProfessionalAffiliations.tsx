'use client';

import React from 'react';
import { Globe, Shield } from 'lucide-react';

export default function ProfessionalAffiliations() {
    return (
        <section className="relative w-full py-24 bg-white px-5 md:px-[80px] overflow-hidden border-b border-slate-100">
            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center justify-center lg:justify-start gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent" />
                        Global &amp; National Memberships
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Professional Affiliations
                    </h3>
                </div>

                {/* Affiliations Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* International Card (Spans 1 Column on desktop) */}
                    <div className="lg:col-span-1 bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-tealAccent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="p-3 bg-bgLight border border-slate-200 text-tealAccent rounded-xl w-fit mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                International Member
                            </h4>
                            <h5 className="text-lg font-serif font-bold text-deepNavy mb-3">
                                ESMINT
                            </h5>
                            <p className="text-xs text-slate-500 leading-relaxed font-light">
                                European Society of Minimally Invasive Neurological Therapy
                            </p>
                        </div>
                    </div>

                    {/* National Cards (Spans 3 Columns on desktop, holding 3 separate cards) */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* National 1 */}
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-tealAccent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="p-3 bg-bgLight border border-slate-200 text-tealAccent rounded-xl w-fit mb-6">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    National Member
                                </h4>
                                <h5 className="text-lg font-serif font-bold text-deepNavy mb-3">
                                    ISNR
                                </h5>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">
                                    Indian Society of Neuroradiology
                                </p>
                            </div>
                        </div>

                        {/* National 2 */}
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-tealAccent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="p-3 bg-bgLight border border-slate-200 text-tealAccent rounded-xl w-fit mb-6">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    National Member
                                </h4>
                                <h5 className="text-lg font-serif font-bold text-deepNavy mb-3">
                                    ISVIR
                                </h5>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">
                                    Indian Society of Vascular &amp; Interventional Radiology
                                </p>
                            </div>
                        </div>

                        {/* National 3 */}
                        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-tealAccent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="p-3 bg-bgLight border border-slate-200 text-tealAccent rounded-xl w-fit mb-6">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    National Member
                                </h4>
                                <h5 className="text-lg font-serif font-bold text-deepNavy mb-3">
                                    STNI
                                </h5>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">
                                    Society of Therapeutic Neurointerventions
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
