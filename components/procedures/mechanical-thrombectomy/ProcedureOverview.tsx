'use client';

import React from 'react';
import { Video, Play } from 'lucide-react';

export default function ProcedureOverview() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />
            <div className="absolute bottom-20 right-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Clinical Overview */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Emergency Endovascular Treatment
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-serif text-deepNavy leading-tight mb-4">
                            Restoration of Cerebral Blood Flow
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            Mechanical thrombectomy is a state-of-the-art, minimally invasive procedure performed inside a catheterization laboratory (cath lab) to treat acute ischaemic strokes. During the procedure, the interventional neuroradiologist navigates a microcatheter from the groin or wrist artery directly to the blocked vessel in the brain using real-time X-ray guidance.
                        </p>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            Once positioned, a stent-retriever (a tiny wire mesh cage) or a large-bore aspiration catheter is deployed to trap and remove the blood clot. This immediately restores blood flow to the oxygen-starved brain tissue, maximizing the chances of complete recovery.
                        </p>

                        <div className="border-t border-zinc-200 pt-6 mt-8">
                            <h4 className="text-sm font-semibold text-deepNavy uppercase tracking-wider mb-4">
                                Technical Procedural Approaches
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Stent-Retriever Clot Capture",
                                    "Direct Aspiration (ADAPT technique)",
                                    "Combined Solumbra Method",
                                    "Microcatheter Arterial Reconstruction"
                                ].map((tech, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-tealAccent shrink-0" />
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Video Walkthrough Placeholder Card */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100/60 border border-zinc-200 rounded-2xl p-8 shadow-none hover:border-tealAccent/30 transition-colors">
                        <div className="flex items-center gap-2 text-tealAccent mb-6">
                            <Video className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">Educational Animation</span>
                        </div>
                        
                        {/* Visual Box representing video player */}
                        <div className="relative w-full aspect-video rounded-xl bg-deepNavy border border-[#1E2E4D] overflow-hidden flex flex-col items-center justify-center group/player cursor-pointer mb-6">
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-tr from-deepNavy to-tealAccent/30 opacity-80" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.4))]" />
                            </div>
                            
                            <div className="relative z-10 w-14 h-14 rounded-full bg-white text-deepNavy flex items-center justify-center group-hover/player:bg-tealAccent group-hover/player:text-white transition-all group-hover/player:scale-105 border border-zinc-200 shadow-none">
                                <Play className="w-6 h-6 fill-current translate-x-0.5" />
                            </div>
                            
                            <span className="relative z-10 text-[10px] font-bold text-white/70 uppercase tracking-widest mt-4">
                                Click to Play Walkthrough
                            </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-serif font-bold text-deepNavy mb-2">
                            Video Walkthrough: What is Mechanical Thrombectomy?
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-light">
                            Watch a patient-friendly 3D animation showing how endovascular catheters traverse the arteries to retrieve blood clots.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
