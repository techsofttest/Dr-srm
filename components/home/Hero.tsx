'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, AlertCircle, UserPlus, ArrowRight } from 'lucide-react';
import Button from '@/components/global/Button';

interface Banner {
title:string;
name:string;
qualifications:string;
headline:string;
subtext:string;
image:string;
}
export default function Hero() {
const [banner, setBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    async function fetchBanner() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/api/pages`);
            const data = await res.json();
            if (data.banner) { 
                setBanner(data.banner); 
            }
        } catch (error) {
            console.error("Failed to fetch banner:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchBanner();
}, []);

  if (loading) return <div>Loading...</div>;
  if (!banner) return null;
    return (
        <section id="home" className="relative w-full min-h-screen pt-32 pb-20 flex items-center bg-white overflow-hidden">
            {/* Background Portrait Image with Gradients */}
            <div className="absolute inset-0 z-0">
              <div
    className="absolute inset-0 bg-cover bg-center md:bg-right bg-no-repeat opacity-50 md:opacity-85"
    style={{ 
        backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL_BASE || ''}/${banner.image}'), url('/hero-sec/soumya7.png')` 
    }}
/>
                {/* Responsive gradient masks for text readability */}
                {/* Mobile: Full white overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/70 md:hidden" />
                {/* Desktop: Fade from left white to right transparent */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20 hidden md:block" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-[80px]">
                <div className="max-w-4xl flex flex-col items-start animate-in fade-in slide-in-from-left-8 duration-1000">

                    {/* Specialty Subtitle */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-tealAccent/10 border border-tealAccent/40 text-tealAccent font-bold text-xs uppercase tracking-wider mb-6">
                        <span>{banner.title}</span>
                    </div>

                    {/* Dr. Malla Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-deepNavy tracking-tight leading-[1.05] mb-4">
                       {banner.name}
                    </h1>

                    {/* Qualifications Block */}
                    <p className="text-xs sm:text-sm md:text-base text-tealAccent font-semibold tracking-wide border-l-2 border-tealAccent pl-3 mb-6 max-w-3xl leading-relaxed">
                        {banner.qualifications}
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-serif text-deepNavy tracking-tight leading-snug mb-4 max-w-3xl">
                       {banner.headline}
                    </h2>

                    {/* Detailed Subtext */}
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-10 font-light">
                       {banner.subtext}
                    </p>

                    {/* Three-Button CTA Layout — Boxed, Full-Width, Animated */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-0 overflow-hidden rounded-xl border border-slate-300 mt-2">
                        {/* Button 1 — Book Consultation */}
                        <Button
                            variant="primary"
                            layout="box"
                            href="/book-appointment"
                            className="py-5"
                        >
                            <Calendar className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                            <span className="text-white font-bold text-[11px] tracking-[0.12em] uppercase text-center leading-tight">Book Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                        </Button>

                        {/* Button 2 — Emergency Stroke Referral */}
                        <Button
                            variant="danger"
                            layout="box"
                            href="#emergency-stroke"
                            className="py-5 border-y sm:border-y-0 sm:border-x border-slate-300"
                        >
                            <AlertCircle className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                            <span className="text-white font-bold text-[11px] tracking-[0.12em] uppercase text-center leading-tight">Emergency Stroke Referral</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                        </Button>

                        {/* Button 3 — Refer a Patient */}
                        <Button
                            variant="secondary"
                            layout="box"
                            href="#referring-doctors"
                            className="py-5 bg-white text-deepNavy border-0 hover:bg-tealAccent/5"
                        >
                            <UserPlus className="w-5 h-5 text-tealAccent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                            <span className="text-deepNavy font-bold text-[11px] tracking-[0.12em] uppercase text-center leading-tight">Refer a Patient</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-tealAccent" />
                        </Button>
                    </div>

                </div>
            </div>


        </section>
    );
}