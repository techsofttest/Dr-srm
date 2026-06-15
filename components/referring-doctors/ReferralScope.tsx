'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, FileSearch, HelpCircle } from 'lucide-react';

interface ReferralSection {
    title: string;
    sub_title: string;
    description: string;
    points: string[];
}

export default function ReferralScope() {
    const [conditions, setConditions] = useState<ReferralSection | null>(null);
    const [support, setSupport] = useState<ReferralSection | null>(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/reffering`)
            .then((res) => res.json())
            .then((data) => {
                // Mapping the array indices to your state
                setConditions(data.referral_points[0]);
                setSupport(data.referral_points[1]);
            })
            .catch(console.error);
    }, []);

    // Guard clause to prevent rendering while data is loading
    if (!conditions || !support) return null;

    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] overflow-hidden">
            <div className="relative z-10 max-w-[1600px] mx-auto">
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
                    {/* Conditions Column */}
                    <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-10">
                        <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4">
                            <HelpCircle className="w-5 h-5 text-tealAccent" />
                            {conditions.title}
                        </h4>
                        <ul className="space-y-4">
                            {conditions.points.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-light">
                                    <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-10">
                        <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4">
                            <FileSearch className="w-5 h-5 text-tealAccent" />
                            {support.title}
                        </h4>
                        <ul className="space-y-4">
                            {support.points.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-light">
                                    <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}