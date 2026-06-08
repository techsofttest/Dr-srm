'use client';

import React from 'react';
import { Siren, AlertTriangle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/global/Button';

interface EmergencyStrokeBannerProps {
    title: string;
    description?: string;
    symptoms?: string[];
    ctaText: string;
    ctaHref: string;
    isWarningIcon?: boolean; // If true, renders AlertTriangle. If false, renders Siren.
    paddingClass?: string; // Optional custom padding
}

export default function EmergencyStrokeBanner({
    title,
    description,
    symptoms,
    ctaText,
    ctaHref,
    isWarningIcon = false,
    paddingClass = 'py-16',
}: EmergencyStrokeBannerProps) {
    return (
        <section className={`relative w-full ${paddingClass} bg-white px-5 md:px-[80px] overflow-hidden`}>
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div
                    className="relative overflow-hidden bg-gradient-to-r from-red-950 via-[#a01818] to-red-900 text-white rounded-2xl p-8 md:p-12 border border-red-800"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                    {/* Diagonal stripe overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.05] pointer-events-none"
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

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="max-w-4xl flex items-start gap-4">
                            <div className="shrink-0 p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm mt-1">
                                {isWarningIcon ? (
                                    <AlertTriangle className="w-7 h-7 text-white" />
                                ) : (
                                    <motion.div
                                        animate={{
                                            rotate: [0, -12, 12, -10, 10, -6, 6, 0],
                                            scale: [1, 1.1, 1.1, 1.05, 1.05, 1, 1, 1],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: 'easeInOut',
                                            repeat: Infinity,
                                            repeatDelay: 2.5,
                                        }}
                                    >
                                        <Siren className="w-7 h-7 text-white" />
                                    </motion.div>
                                )}
                            </div>
                            <div>
                                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3 tracking-wide leading-tight">
                                    {title}
                                </h4>
                                
                                {symptoms && symptoms.length > 0 ? (
                                    <>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                                            {symptoms.map((symptom, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-red-100 text-sm sm:text-base font-light">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulse" />
                                                    <span>{symptom}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {description && (
                                            <div className="border-t border-white/15 pt-4 mt-4">
                                                <p className="text-xs sm:text-sm text-red-200 font-semibold uppercase tracking-wider">
                                                    {description}
                                                </p>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    description && (
                                        <p className="text-red-100 text-sm sm:text-base leading-relaxed font-light">
                                            {description}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="shrink-0 w-full lg:w-auto">
                            <Button
                                variant="danger-white"
                                href={ctaHref}
                                className="w-full lg:w-auto flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4 text-red-800" />
                                <span>{ctaText}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
