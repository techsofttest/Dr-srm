'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function GoogleReviews() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

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

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-tealAccent/15 blur-[100px] pointer-events-none z-0" />
            <div className="absolute top-10 right-10 w-[350px] h-[350px] rounded-full bg-deepNavy/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-2/3 w-72 h-72 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-3xl">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Google Reviews
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-2">
                            What Patients and Families Say
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                            <span className="text-tealAccent text-lg tracking-wider font-semibold">★★★★★</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Verified Google Reviews</span>
                        </div>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mt-4">
                            Patient and family feedback reflecting experiences with stroke intervention, aneurysm treatment and neurovascular care.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollPrev}
                            className={`w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center transition-all ${canScrollPrev
                                    ? 'text-deepNavy hover:bg-white hover:border-zinc-400 cursor-pointer'
                                    : 'text-zinc-300 border-zinc-200 cursor-not-allowed'
                                }`}
                            aria-label="Previous reviews"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollNext}
                            className={`w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center transition-all ${canScrollNext
                                    ? 'text-deepNavy hover:bg-white hover:border-zinc-400 cursor-pointer'
                                    : 'text-zinc-300 border-zinc-200 cursor-not-allowed'
                                }`}
                            aria-label="Next reviews"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div
                        ref={containerRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
                    >
                        {googleReviews.map((rev, idx) => (
                            <div
                                key={idx}
                                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between hover:border-tealAccent/45 transition-all duration-300 shadow-none"
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
                                            <span className="text-tealAccent">★</span>
                                            <span>{rev.stars}.0</span>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light italic">
                                        "{rev.review}"
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-zinc-150 flex items-center gap-1.5 text-[10px] font-bold text-tealAccent uppercase tracking-wide">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>Verified Patient Review</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
