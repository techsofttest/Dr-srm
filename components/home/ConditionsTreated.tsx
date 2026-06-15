'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Interface matching the new API structure
interface ServiceCategory {
    title: string;
    subtitle: string;
    image: string;
    items: { name: string; description: string }[];
}

function ConditionCard({ cat, idx }: { cat: ServiceCategory; idx: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
            className="group flex flex-col bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-tealAccent/45 transition-all duration-300 relative"
        >
            <div className="relative w-full h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                {cat.image && (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${cat.image}`}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
            </div>

            <div className="p-8 flex flex-col gap-5 flex-grow">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-tealAccent mb-1.5">{cat.subtitle}</p>
                    <h4 className="text-xl font-bold font-serif text-deepNavy group-hover:text-tealAccent transition-colors">
                        {cat.title}
                    </h4>
                </div>

                <div className="space-y-4 flex-grow">
                    {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-tealAccent" />
                            <div>
                                <h6 className="text-sm font-bold text-deepNavy mb-0.5">{item.name}</h6>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-tealAccent group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
}

export default function ConditionsTreated() {
    const [services, setCategories] = useState<ServiceCategory[]>([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/api/pages`);
                const data = await res.json();
                // Extracting 'services' from the consolidated page data object
                if (data.services && Array.isArray(data.services)) {
                    setCategories(data.services);
                }
            } catch (err) {
                console.error("Error fetching services:", err);
            }
        }
        fetchServices();
    }, []);

    return (
        <section id="conditions" className="relative w-full py-24 bg-bgLight px-5 md:px-[80px] border-b border-slate-100 overflow-hidden">
            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent" /> Clinical Focus
                    </h2>
                    <h3 className="text-3xl font-serif text-deepNavy">Conditions Treated</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services?.map((cat, idx) => (
                        <ConditionCard key={idx} cat={cat} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}