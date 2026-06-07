'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const categories = [
    {
        title: 'Stroke Intervention',
        subtitle: 'Stroke Intervention in Kochi',
        image: '/conditions/stroke.png',
        items: [
            { name: 'Acute Ischaemic Stroke', description: 'Emergency restoration of cerebral blood flow through mechanical thrombectomy and advanced endovascular therapies.' },
        ],
    },
    {
        title: 'Aneurysm Specialist',
        subtitle: 'Brain Aneurysm Specialist in Kochi',
        image: '/conditions/aneurysm.png',
        items: [
            { name: 'Brain Aneurysms', description: 'Comprehensive evaluation and minimally invasive treatment of ruptured and unruptured aneurysms.' },
        ],
    },
    {
        title: 'AVM & dAVF Treatment',
        subtitle: 'Vascular Malformations',
        image: '/conditions/avm.png',
        items: [
            { name: 'Arteriovenous Malformations (AVMs)',   description: 'Advanced embolisation strategies for cerebral and spinal AVMs.' },
            { name: 'Dural Arteriovenous Fistulas (dAVFs)', description: 'Diagnosis and treatment of cranial and spinal vascular fistulas.' },
            { name: 'Carotid-Cavernous Fistulas',           description: 'Endovascular treatment of traumatic and spontaneous fistulas.' },
        ],
    },
    {
        title: 'Carotid & Intracranial Disease',
        subtitle: 'Carotid Artery Stenting in Kochi',
        image: '/conditions/carotid.png',
        items: [
            { name: 'Carotid Artery Disease',              description: 'Stroke prevention through carotid artery stenting and cerebrovascular revascularisation.' },
            { name: 'Intracranial Atherosclerotic Disease', description: 'Endovascular management of symptomatic intracranial stenosis.' },
        ],
    },
    {
        title: 'Spinal & General Neurovascular',
        subtitle: 'Advanced Spine & Skull Base',
        image: '/conditions/spinal.png',
        items: [
            { name: 'Spinal Vascular Disorders',     description: 'Treatment of spinal dAVFs, spinal AVMs and other vascular pathologies affecting the spinal cord.' },
            { name: 'Pulsatile Tinnitus',            description: 'Comprehensive neurovascular evaluation for vascular causes of tinnitus.' },
            { name: 'Unexplained Brain Haemorrhage', description: 'Advanced angiographic assessment for occult cerebrovascular pathology.' },
        ],
    },
    {
        title: 'Functional & Venous Disorders',
        subtitle: 'Complex Intracranial Evaluation',
        image: '/conditions/venous.png',
        items: [
            { name: 'Idiopathic Intracranial Hypertension', description: 'Evaluation and venous sinus intervention when indicated.' },
            { name: 'Spontaneous Intracranial Hypotension',  description: 'Diagnosis and image-guided treatment strategies.' },
            { name: 'Chronic Subdural Haematoma',            description: 'MMA embolisation and multidisciplinary management.' },
        ],
    },
];

function ConditionCard({ cat, idx }: { cat: typeof categories[0]; idx: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
            className="group flex flex-col bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-tealAccent/45 transition-all duration-300 relative"
        >
            {/* Category Image */}
            <div className="relative w-full h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-8 flex flex-col gap-5 flex-grow">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-tealAccent mb-1.5">
                        {cat.subtitle}
                    </p>
                    <h4 className="text-xl font-bold font-serif text-deepNavy group-hover:text-tealAccent transition-colors">
                        {cat.title}
                    </h4>
                </div>

                {/* Items list */}
                <div className="space-y-4 flex-grow">
                    {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-tealAccent" />
                            <div>
                                <h6 className="text-sm font-bold text-deepNavy mb-0.5">{item.name}</h6>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-tealAccent group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
}

export default function ConditionsTreated() {
    return (
        <section id="conditions" className="relative w-full py-24 bg-bgLight px-5 md:px-[80px] border-b border-slate-100 overflow-hidden">
            {/* Subtle radial glow behind header */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-tealAccent/4 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent" />
                        Clinical Focus
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Conditions Treated
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                        Specialized clinical review and endovascular care across a comprehensive spectrum of cerebrovascular and spinal vascular disorders.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <ConditionCard key={idx} cat={cat} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
