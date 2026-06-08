'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall } from 'lucide-react';

export default function BookingCTA() {
    return (
        <section className="relative w-full py-12 lg:py-16 bg-drBlack overflow-hidden group border-t border-white/5">

            {/* Right Side Gradient Image */}
            <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 opacity-40 lg:opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                {/* Gradient mask to blend the image into the dark background */}
                <div className="absolute inset-0 bg-gradient-to-r from-drBlack via-drBlack/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-drBlack via-transparent to-transparent z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600"
                    alt="Abstract Medical Gradient"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Dynamic Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-drCyan/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Banner Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-[80px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl flex flex-col items-start text-left"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-drSilver uppercase mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-drSilver/50"></span>
                        Take the Next Step
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6">
                        Schedule your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-drSilver">Neurovascular</span> Evaluation.
                    </h3>
                    <p className="text-drSteel text-lg leading-relaxed max-w-xl mb-8">
                        Whether you are seeking a primary consultation, a second opinion on a complex diagnosis, or follow-up care, our dedicated scheduling team will ensure you are seen promptly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <Link
                            href="/book-appointment"
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-drBlack font-bold tracking-widest text-sm hover:scale-105 transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>BOOK APPOINTMENT</span>
                        </Link>

                        <Link
                            href="tel:+919629997812"
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent text-white border border-white/20 font-bold tracking-widest text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>EMERGENCY LINE</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}