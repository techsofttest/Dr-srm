'use client';

import React from 'react';

export default function CaseReviews() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-deepNavy/10 blur-[120px] pointer-events-none z-0" />
            
            {/* Outline spheres to look scientific/clinical */}
            <div className="absolute top-12 left-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />
            <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full border border-deepNavy/5 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">

                {/* Section Header */}
                <div className="max-w-3xl mb-12">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Case Studies
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Clinical Case Reviews
                    </h3>
                </div>

                {/* Case Grid (3-column layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Case 1 */}
                    <div className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-none hover:border-tealAccent/45 transition-colors duration-300">
                        <div>
                            <span className="inline-block bg-tealAccent/10 text-tealAccent text-xs font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                                Case Review
                            </span>
                            <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                Acute Stroke Thrombectomy
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                A 68-year-old gentleman presented with sudden right-sided weakness and speech difficulty. Advanced imaging identified a large vessel occlusion. Emergency mechanical thrombectomy restored blood flow, resulting in meaningful neurological improvement and functional recovery.
                            </p>
                        </div>
                    </div>

                    {/* Case 2 */}
                    <div className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-none hover:border-tealAccent/45 transition-colors duration-300">
                        <div>
                            <span className="inline-block bg-tealAccent/10 text-tealAccent text-xs font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                                Case Review
                            </span>
                            <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                Complex Brain Aneurysm
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                A middle-aged woman with an incidentally detected complex aneurysm underwent endovascular flow diversion, avoiding open cranial surgery and achieving successful aneurysm reconstruction.
                            </p>
                        </div>
                    </div>

                    {/* Case 3 */}
                    <div className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-none hover:border-tealAccent/45 transition-colors duration-300">
                        <div>
                            <span className="inline-block bg-tealAccent/10 text-tealAccent text-xs font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                                Case Review
                            </span>
                            <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                                Recurrent Chronic Subdural Haematoma
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                An elderly patient with recurrent chronic subdural haematoma despite prior surgery underwent MMA embolisation as part of multidisciplinary care, reducing recurrence risk and avoiding repeated operations.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
