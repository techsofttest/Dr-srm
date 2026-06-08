'use client';

import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from '@/components/global/WhatsAppIcon';


export default function StickyContactButtons() {
    const [hovered, setHovered] = useState<'wa' | 'phone' | null>(null);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
            
            {/* Phone FAB */}
            <div className="flex items-center gap-3">
                <AnimatePresence>
                    {hovered === 'phone' && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-deepNavy/80 backdrop-blur-md border border-tealAccent/35 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full"
                        >
                            24/7 Helpline
                        </motion.div>
                    )}
                </AnimatePresence>
                <a
                    href="tel:+919629997812"
                    className="w-12 h-12 md:w-14 h-14 rounded-full flex items-center justify-center bg-deepNavy/70 backdrop-blur-md border border-tealAccent/45 text-white hover:bg-tealAccent hover:border-tealAccent hover:scale-110 transition-all duration-300 group"
                    aria-label="Call Emergency Helpline"
                    onMouseEnter={() => setHovered('phone')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Phone className="w-5 h-5 md:w-6 h-6" />
                </a>
            </div>

            {/* WhatsApp FAB */}
            <div className="flex items-center gap-3">
                <AnimatePresence>
                    {hovered === 'wa' && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-deepNavy/80 backdrop-blur-md border border-emerald-500/35 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full"
                        >
                            Chat Online
                        </motion.div>
                    )}
                </AnimatePresence>
                <a
                    href="https://wa.me/919629997812"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 md:w-14 h-14 rounded-full flex items-center justify-center bg-deepNavy/70 backdrop-blur-md border border-emerald-500/45 text-white hover:bg-emerald-500 hover:border-emerald-500 hover:scale-110 transition-all duration-300 group"
                    aria-label="Chat on WhatsApp"
                    onMouseEnter={() => setHovered('wa')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <WhatsAppIcon className="w-5 h-5 md:w-6 h-6" />
                </a>
            </div>

        </div>
    );
}
