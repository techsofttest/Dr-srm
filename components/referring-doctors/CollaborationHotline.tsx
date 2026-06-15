'use client';

import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import Button from '@/components/global/Button';

interface DedicatedData {
    title: string;
    content: string;
}
interface referralData {
    title: string;
    content: string;
    quote:string;
}
export default function CollaborationHotline() {
    const [dedicated, setDedicated] = useState<DedicatedData | null>(null);
    const [referral, setReferral] = useState<referralData | null>(null);
     const [contact, setContact] = useState({ phone: ''});
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/reffering`)
            .then((res) => res.json())
            .then((data) => {
                setDedicated(data.dedicated);
                setReferral(data.referral);
                  setContact(data.contact);
            })
            .catch(console.error);
    }, []);

    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left */}
                    <div className="w-full lg:w-7/12">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Clinical Collaboration
                        </h2>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                            {referral?.title}
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                            {referral?.content}
                        </p>

                        <p className="text-slate-500 text-xs sm:text-sm font-light italic border-l-2 border-tealAccent pl-4">
                            {referral?.quote}
                        </p>
                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-5/12">
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/60 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between">
                            <div>
                                <div className="p-3 bg-white border border-zinc-200 text-tealAccent rounded-xl w-fit mb-6">
                                    <Phone className="w-6 h-6 animate-pulse" />
                                </div>

                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                    Direct Consultant Access
                                </h4>

                                <h5 className="text-xl font-serif font-bold text-deepNavy mb-4">
                                     {dedicated?.title}
                                </h5>

                                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8"> {dedicated?.title} </p>
                            </div>

                            <Button
                                variant="primary"
                                href={`tel:${contact.phone}`}
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