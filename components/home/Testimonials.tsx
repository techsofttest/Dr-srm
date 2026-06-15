'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/global/Button';

interface caseStudies{
    sub_title:string,
    title:string,
    description:string,
    patient:string,
}

const googleReviews = [
    {
        name: "Rajesh K.",
        stars: 5,
        time: "2 weeks ago",
        review: "Dr. Soumya Ranjan Malla is a life saver. The way he handled my father's emergency stroke thrombectomy was amazing. Highly professional and caring."
    },
    {
        name: "Dr. Anjana Mohan",
        stars: 5,
        time: "1 month ago",
        review: "As a doctor myself, I referred my patient to Dr. Malla for aneurysm flow diversion. The patient achieved outstanding recovery. Excellent clinical competence."
    },
    {
        name: "Mary Joseph",
        stars: 5,
        time: "2 months ago",
        review: "Very clear explanation of the procedure. Empathy and patient-first care. Highly recommend him for any complex brain and spinal vascular issue."
    },
    {
        name: "Karan Sharma",
        stars: 5,
        time: "3 weeks ago",
        review: "My mother underwent carotid stenting with Dr. Malla. Excellent doctor who clarified all our queries before the surgery and checked on us daily. Outstanding clinical care."
    },
    {
        name: "Suresh Pillai",
        stars: 5,
        time: "2 months ago",
        review: "Superb experience. Highly trained interventional specialist. My spinal dural AV fistula treatment was successful without any complications. Excellent post-op support."
    },
    {
        name: "Deepa Nair",
        stars: 5,
        time: "3 months ago",
        review: "A truly humble and empathetic specialist. Underwent middle meningeal artery embolisation. Highly competent treatment and excellent follow-up support by Dr. Soumya."
    },
    {
        name: "Dr. Arun Kumar",
        stars: 5,
        time: "1 month ago",
        review: "Extremely skilled neuroradiologist. His clinical decision-making during acute stroke cases is prompt and accurate. Kochi is fortunate to have a specialist of this caliber."
    },
    {
        name: "John Fernandes",
        stars: 5,
        time: "4 months ago",
        review: "Highly recommend Dr. Malla for brain aneurysm embolisation. Extremely professional, comforting bedside manner, and explains complex medical terms in simple language."
    }
];

export default function Testimonials() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(true);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollPrev(scrollLeft > 2);
            setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 2);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    React.useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);
    const [casestudy, setcaseStudies] = useState<caseStudies[]>([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`)
            .then(res => res.json())
            .then(data => {
                // Check if the data object has the 'casestudy' key
                if (data.casestudy) {
                    setcaseStudies(data.casestudy);
                } else {
                    console.error("The 'casestudy' key was not found in the API response.");
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="patient-outcomes" className="relative w-full py-24 bg-white px-5 md:px-[80px] border-b border-slate-200 overflow-hidden">
            
            {/* Background trust badge watermark */}
            <div className="absolute right-10 top-1/4 w-[320px] h-[320px] text-tealAccent/[0.02] pointer-events-none select-none z-0">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                    {/* Circle badge representing safety & verified checkmark */}
                    <circle cx="50" cy="50" r="42" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="36" />
                    <path d="M38 52 L46 60 L64 40" strokeWidth="3" />
                </svg>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto">
                
                {/* 1. Patient Stories Section */}
                <div className="mb-24">
                    {/* Header */}
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Patient Stories
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-4">
                            Clinical Case Reviews
                        </h3>
                        <p className="text-xs text-slate-500 italic flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-tealAccent" />
                            <span>(Published only with appropriate patient consent and privacy safeguards.)</span>
                        </p>
                    </div>

                    {/* Case Studies Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Trust Hero Image Card */}
                        <div className="relative rounded-3xl overflow-hidden min-h-[350px] border border-slate-300 flex flex-col justify-end p-8 group shadow-none">
                            <Image
                                src="/patient_doctor_consult.png"
                                alt="Dr. Soumya Rajan patient consultation"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/50 to-transparent z-10" />
                            <div className="relative z-20">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-tealAccent bg-tealAccent/20 px-2.5 py-1 rounded-md mb-3 inline-block">
                                    Trust &amp; Care
                                </span>
                                <h4 className="text-xl font-serif font-bold text-white leading-tight">
                                    Clinical Excellence &amp; Patient-First Care
                                </h4>
                            </div>
                        </div>

                        {casestudy.map((study, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-bgLight border border-slate-300 rounded-3xl p-8 hover:border-tealAccent/45 transition-all duration-300 flex flex-col justify-between shadow-none"
                            >
                                <div>
                                    <span className="inline-block bg-tealAccent/15 text-tealAccent text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase tracking-wider">
                                        {study.sub_title}
                                    </span>
                                    <h4 className="text-lg sm:text-xl font-serif font-bold text-deepNavy mb-1">
                                        {study.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">
                                        {study.patient}
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                                        {study.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Google Reviews Section */}
                <div className="pt-16 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
                        <div className="max-w-3xl">
                            <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-tealAccent"></span>
                                Google Reviews
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-2">
                                What Patients and Families Say
                            </h3>
                            <div className="flex items-center gap-2 text-tealAccent text-sm font-semibold tracking-wide">
                                <Star className="w-4 h-4 fill-tealAccent" />
                                <span>5.0 Verified Google Reviews</span>
                            </div>
                        </div>

                        {/* Controls & Read All Link */}
                        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => scroll('left')}
                                    disabled={!canScrollPrev}
                                    className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-all ${
                                        canScrollPrev 
                                            ? 'text-deepNavy hover:bg-slate-50 hover:border-slate-400 cursor-pointer' 
                                            : 'text-slate-300 border-slate-200 cursor-not-allowed'
                                    }`}
                                    aria-label="Previous reviews"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    disabled={!canScrollNext}
                                    className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-all ${
                                        canScrollNext 
                                            ? 'text-deepNavy hover:bg-slate-50 hover:border-slate-400 cursor-pointer' 
                                            : 'text-slate-300 border-slate-200 cursor-not-allowed'
                                    }`}
                                    aria-label="Next reviews"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Google Reviews Carousel */}
                    <div className="relative">
                        <div 
                            ref={containerRef}
                            onScroll={checkScroll}
                            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
                        >
                            {googleReviews.map((rev, idx) => (
                                <div 
                                    key={idx} 
                                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-bgLight border border-slate-300 rounded-2xl p-6 flex flex-col justify-between hover:border-tealAccent/45 transition-all duration-300 shadow-none"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-tealAccent/10 text-tealAccent font-bold flex items-center justify-center text-sm uppercase">
                                                    {rev.name[0]}
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-deepNavy text-sm sm:text-base leading-none mb-1">
                                                        {rev.name}
                                                    </h5>
                                                    <span className="text-[10px] text-slate-400 font-medium">
                                                        {rev.time}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 bg-tealAccent/10 text-tealAccent shrink-0 px-2 py-0.5 rounded-md text-xs font-bold">
                                                <Star className="w-3 h-3 fill-tealAccent" />
                                                <span>{rev.stars}.0</span>
                                            </div>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light italic">
                                            "{rev.review}"
                                        </p>
                                    </div>
                                    
                                    <div className="mt-4 pt-3 border-t border-slate-300 flex items-center gap-1.5 text-[10px] font-bold text-tealAccent uppercase tracking-wide">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        <span>Verified Patient Review</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex justify-center mt-12">
                        <Button 
                            variant="secondary"
                            href="https://maps.google.com/?q=Renai+Medicity+Kochi" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <span>Read All Reviews on Google</span>
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}