'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface faqData{
    question:string;
    answer:string;
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
       const [faqs, setPro] = useState<faqData[]>([]);
    
               useEffect(() => {
                   async function fetchFaq() {
                       try {
                           const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patienteducation`);
                           const data = await res.json();
                           // Extracting 'services' from the consolidated page data object
                           if (data.faqs && Array.isArray(data.faqs)) {
                               setPro(data.faqs);
                           }
                       } catch (err) {
                           console.error("Error fetching faqs:", err);
                       }
                   }
                   fetchFaq();
               }, []);

    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />
            <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

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

                {/* FAQ Accordion list */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border rounded-2xl transition-all duration-300 shadow-none ${isOpen ? 'bg-gradient-to-br from-zinc-50 to-zinc-100/80 border-tealAccent/60' : 'bg-gradient-to-br from-white to-zinc-50/50 border-zinc-200'}`}
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
                                            <div className="p-6 pt-0 border-t border-zinc-150 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
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
