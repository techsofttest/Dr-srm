'use client';

import React from 'react';

const treatments = [
    {
        title: "Simple Coiling",
        description: "Packing the aneurysm sac with detachable platinum microcoils via endovascular access to induce clotting and prevent rupture, leaving the parent artery fully open."
    },
    {
        title: "Balloon-Assisted Coiling",
        description: "Temporary deployment of a microballoon catheter across the aneurysm neck to safely support microcoil delivery inside wide-necked aneurysms, protecting the parent vessel."
    },
    {
        title: "Stent-Assisted Coiling",
        description: "Deployment of a permanent intracranial microstent across the aneurysm neck. The stent serves as a scaffold to keep coils securely packed inside complex wide-necked aneurysms."
    },
    {
        title: "Flow Diversion",
        description: "Deployment of a high-density mesh stent (flow diverter) across the parent vessel neck. The flow diverter redirects blood flow, facilitating progressive thrombosis and reconstructing the parent arterial wall."
    },
    {
        title: "Parent Vessel Reconstruction",
        description: "Custom endovascular remodeling of the parent vascular lumen in large or giant dysplastic aneurysms, ensuring critical side branches remain fully patent."
    },
    {
        title: "Complex Aneurysm Treatment",
        description: "Multidisciplinary planning and customized combination therapy (coiling, stenting, and flow diversion) for challenging giant or fusiform cerebrovascular aneurysms."
    }
];

export default function AneurysmTreatments() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-zinc-50 px-5 md:px-[80px] overflow-hidden border-t border-b border-zinc-200">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-tealAccent/15 blur-[130px] pointer-events-none z-0" />
            <div className="absolute bottom-12 right-12 w-80 h-80 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Endovascular Treatment
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Minimally Invasive Interventions
                    </h3>
                    <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                        Dr. Soumya Ranjan Malla provides advanced endovascular treatments to secure ruptured and unruptured aneurysms without opening the skull.
                    </p>
                </div>

                {/* Treatments grid using light-gradient cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treat, idx) => (
                        <div 
                            key={idx}
                            className="bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 shadow-none hover:border-tealAccent/45 transition-colors duration-300"
                        >
                            <span className="inline-block bg-tealAccent/10 text-tealAccent text-[10px] font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                                Option {idx + 1}
                            </span>
                            <h4 className="text-lg sm:text-xl font-serif font-bold text-deepNavy mb-3">
                                {treat.title}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                {treat.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
