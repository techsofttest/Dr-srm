'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, BrainCircuit, HeartPulse, Stethoscope, Syringe } from 'lucide-react';

const specialisations = [
    {
        title: "Acute Ischemic Stroke",
        description: "Rapid intervention and mechanical thrombectomy protocols to restore blood flow.",
        icon: BrainCircuit,
    },
    {
        title: "Intracranial Aneurysms",
        description: "Minimally invasive neuro-endovascular treatment utilizing precision coiling.",
        icon: Activity,
    },
    {
        title: "Vascular Malformations",
        description: "Targeted embolisation strategies for complex AVMs and dAVFs.",
        icon: HeartPulse,
    },
    {
        title: "Intracranial Stenting",
        description: "Endovascular stenting procedures to treat severe vascular stenosis.",
        icon: Stethoscope,
    },
    {
        title: "Spinal Interventions",
        description: "High-precision, image-guided therapeutic spinal interventions and biopsies.",
        icon: Syringe,
    }
];

export default function Specialisation() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 4000, stopOnInteraction: true })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    /* Flush, flat white section - no radius, no chunky shadows */
    return (
        <section id="specialisation" className="relative z-30 w-full bg-white pt-32 pb-32 transition-all duration-500 overflow-hidden">

            {/* Cinematic Glassmorphic Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Base Image: Clean, high-tech medical environment */}
                <Image
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
                    alt="Clinical Background"
                    fill
                    className="object-cover opacity-50 grayscale mix-blend-luminosity"
                />

                {/* Frosted Glass Overlay: Keeps text completely readable while adding depth */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[12px]" />

                {/* Top & Bottom Gradients to blend seamlessly into adjacent sections */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/50" />

                {/* Subtle warmth injection */}
                <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-drCyan/10 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute -bottom-48 -left-24 w-[40rem] h-[40rem] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
                <div className="max-w-2xl">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-drSlate uppercase mb-4 opacity-60 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-drSlate"></span>
                        Clinical Focus
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-drBlack leading-[1.1]">
                        Areas of Specialisation
                    </h3>
                </div>

                {/* Minimalist Carousel Controls */}
                <div className="flex items-center gap-4 hidden md:flex">
                    <button
                        onClick={scrollPrev}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-drSlate/20 text-drBlack hover:bg-drBlack hover:text-white transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-drSlate/20 text-drBlack hover:bg-drBlack hover:text-white transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

            {/* 4-Up Carousel Grid Layout */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-full px-5 md:px-20 max-w-[1600px] mx-auto"
            >
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-6 touch-pan-y">
                        {specialisations.map((spec, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-6"
                            >
                                <div className="h-full relative flex flex-col bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group p-8">
                                    {/* Icon Container */}
                                    <div className="mb-6 w-14 h-14 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-drBlack group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                        <spec.icon className="w-7 h-7" />
                                    </div>

                                    {/* Tighter, strictly left-aligned text area */}
                                    <div className="flex flex-col flex-grow bg-transparent">
                                        <h4 className="text-lg font-bold text-drBlack mb-2 leading-tight">
                                            {spec.title}
                                        </h4>
                                        <p className="text-sm text-drSlate leading-relaxed opacity-80">
                                            {spec.description}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-drBlack group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}