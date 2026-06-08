'use client';

import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

const evaluationCriteria = [
    {
        label: "Size & Anatomy",
        desc: "Careful mapping of aneurysm dimensions, width of the neck, and relationship with parent arteries."
    },
    {
        label: "Location Details",
        desc: "Specific location within the cerebral circulation tells us the rupture risk and helps choose treatment."
    },
    {
        label: "Patient Symptoms & Risk Factors",
        desc: "Reviewing family medical history, smoking status, hypertension control, and whether the aneurysm causes headaches or visual pressure."
    }
];

export default function AneurysmOverview() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />
            <div className="absolute bottom-20 right-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Title panel */}
                    <div className="lg:col-span-5">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-tealAccent"></span>
                            Clinical Understanding
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-serif text-deepNavy leading-tight mb-6">
                            Understanding Brain Aneurysms
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                            A brain (cerebral) aneurysm is a localized bulging or dilatation of an arterial wall in the brain, often occurring at branching points of major arteries. Over time, constant hemodynamics can weaken the vessel wall, leading to a risk of leakage or sudden rupture.
                        </p>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            Rupture causes a subarachnoid haemorrhage (bleeding in the space around the brain), which is a critical medical emergency. Modern endovascular techniques allow specialist interventional neuroradiologists to treat both unruptured and ruptured aneurysms using catheters accessed through blood vessels.
                        </p>
                    </div>

                    {/* Visual info block styled as a light-gradient card */}
                    <div className="lg:col-span-7 bg-gradient-to-br from-zinc-50 to-zinc-100/50 border border-zinc-200 p-8 rounded-2xl shadow-none">
                        <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 flex items-center gap-2.5 pb-4 border-b border-zinc-200">
                            <Shield className="w-5 h-5 text-tealAccent" />
                            Key Evaluation Criteria
                        </h4>
                        <ul className="space-y-5">
                            {evaluationCriteria.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-slate-600 text-sm sm:text-base font-light">
                                    <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-deepNavy font-semibold block mb-0.5">{item.label}</strong>
                                        <span>{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
