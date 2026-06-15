'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function Experience() {
    // Inside your Experience component
const [intro, setIntro] = useState<any>(null);
const [card, setCard] = useState<any>(null);

useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`)
        .then((res) => res.json())
        .then((data) => {
            setIntro(data.intro);
            setCard(data.card);
        })
        .catch((err) => console.error("Fetch Error:", err));
}, []);

    return (
        <section className="w-full py-24 bg-bgLight overflow-hidden border-b border-slate-200">
            <div className="max-w-[1600px] mx-auto px-5 md:px-[80px] flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* Left Section: Title & Content */}
                <div className="lg:w-[40%] flex flex-col justify-center">
                    <div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                           {intro?.role}
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                           {intro?.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed max-w-md font-light text-sm sm:text-base mb-8">
                           {intro?.description}
                        </p>
                        
                        <div className="flex flex-col gap-4 max-w-md">
                            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-300">
                                <div className="p-2.5 bg-tealAccent/10 text-tealAccent rounded-xl">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">{intro?.institution}</span>
                                    <span className="text-sm font-bold text-deepNavy">{intro?.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Premium Showcase Card */}
                <div className="lg:w-[60%] w-full flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-2xl relative group flex flex-col bg-deepNavy rounded-3xl overflow-hidden border border-white/20 h-[400px] md:h-[450px]"
                    >
                        {/* Background Image Container */}
                        <Image
                            src="/experience/Renai Medicity, Kochi.webp"
                            alt="Renai Medicity, Kochi"
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-45"
                            priority
                        />
                        {/* Gradient base */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deepNavy via-deepNavy/70 to-deepNavy/20 z-10" />

                        {/* Content Container (Pushed to bottom) */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-5 h-[1px] bg-tealAccent"></span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.18em] text-tealAccent uppercase">
                                    <Calendar className="w-3.5 h-3.5 text-tealAccent mr-1" />
                                   {card?.role}
                                </span>
                            </div>

                            <h4 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight font-bold">
                                 {card?.title}
                            </h4>

                            <h5 className="text-xs md:text-sm font-bold text-tealAccent mb-4 pb-4 border-b border-white/20 uppercase tracking-widest flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-tealAccent" />
                                {card?.duration}
                            </h5>

                            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light"> {card?.description}</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
