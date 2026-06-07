'use client';

import React from 'react';
import { ShieldAlert, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/global/Button';

export default function EmergencyBanner() {
    return (
        <section
            id="emergency-stroke"
            className="relative w-full z-20 text-white py-6 md:py-8 overflow-hidden"
        >
            {/* ── Background: deep red gradient + subtle noise texture ── */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-[#a01818] to-red-900" />

            {/* Diagonal stripe pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -55deg,
                        #fff 0px,
                        #fff 1px,
                        transparent 1px,
                        transparent 18px
                    )`,
                }}
            />

            {/* Radial glow at centre-left */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/20 blur-[100px] pointer-events-none" />

            {/* ── Content ── */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-[80px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                >
                    {/* Left — Icon + Text */}
                    <div className="max-w-4xl flex items-start gap-4">
                        {/* Animated ShieldAlert */}
                        <div className="shrink-0 mt-1 p-2 bg-white/10 rounded-xl border border-white/30 backdrop-blur-sm">
                            <motion.div
                                animate={{
                                    rotate: [0, -12, 12, -10, 10, -6, 6, 0],
                                    scale:  [1, 1.1, 1.1, 1.05, 1.05, 1, 1, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: 'easeInOut' as const,
                                    repeat: Infinity,
                                    repeatDelay: 2.5,
                                }}
                            >
                                <ShieldAlert className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,80,80,0.9)]" />
                            </motion.div>
                        </div>

                        <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold font-serif tracking-wide mb-2 uppercase leading-snug">
                                Emergency Stroke Alert: Stroke is a Medical Emergency
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-light">
                                Sudden weakness of the face, arm, or leg, speech difficulty, vision loss, facial droop, or imbalance may indicate an acute stroke.{' '}
                                <strong className="font-bold text-white">
                                    Early treatment can save brain tissue, minimize disability, and significantly improve recovery.
                                </strong>
                            </p>
                        </div>
                    </div>

                    {/* Right — CTA Button (no emoji) */}
                    <div className="shrink-0 w-full lg:w-auto">
                        <Button
                            variant="danger-white"
                            href="tel:+919629997812"
                            className="w-full lg:w-auto"
                        >
                            <PhoneCall className="w-4 h-4" />
                            <span>24×7 Emergency Helpline</span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
