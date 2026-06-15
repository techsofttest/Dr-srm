'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface faqData{
    question:string;
    answer:string;
}
export default function FAQ() {
    const [faq, setPro] = useState<faqData[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
             };
           useEffect(() => {
               async function fetchFaq() {
                   try {
                       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/api/pages`);
                       const data = await res.json();
                       // Extracting 'services' from the consolidated page data object
                       if (data.faq && Array.isArray(data.faq)) {
                           setPro(data.faq);
                       }
                   } catch (err) {
                       console.error("Error fetching faq:", err);
                   }
               }
               fetchFaq();
           }, []);

    return (
        <section id="faq" className="relative w-full py-24 bg-white px-5 md:px-[80px] border-b border-slate-200 overflow-hidden">
            {/* Background decorative image */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <Image
                    src="/patient_recovery_bg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative z-10 max-w-[1200px] mx-auto">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center justify-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        FAQ
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Frequently Asked Questions
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                        Clear clinical answers to common questions regarding neurovascular diagnostics and minimally invasive treatments.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {faq.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-bgLight border-tealAccent/60' : 'bg-white border-slate-300'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                                >
                                    <span className="font-serif font-bold text-deepNavy text-base sm:text-lg hover:text-tealAccent transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className={`p-1.5 rounded-lg bg-tealAccent/10 text-tealAccent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </span>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-slate-200 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
