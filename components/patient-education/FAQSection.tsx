'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How soon should stroke treatment be started?",
        answer: "Stroke treatment must be initiated immediately. In acute ischaemic stroke, 'time is brain'—every minute of delay results in the loss of nearly two million brain cells. Restoring blood flow through mechanical thrombectomy should ideally be started within minutes of presentation, up to 24 hours for selected large vessel occlusions based on perfusion imaging."
    },
    {
        question: "Can all strokes be treated with thrombectomy?",
        answer: "No. Mechanical thrombectomy is specifically indicated for acute ischaemic strokes caused by a Large Vessel Occlusion (LVO) in the anterior or posterior circulation. It is not used for hemorrhagic strokes (bleeding in the brain) or strokes caused by small vessel blockage, which are managed medically."
    },
    {
        question: "Is aneurysm coiling safer than surgery?",
        answer: "Endovascular coiling is a minimally invasive treatment that accesses the brain aneurysm via blood vessels, avoiding the need to open the skull (craniotomy). For many patients, it offers a lower risk of early complications, shorter hospital stays, and faster recovery compared to open surgical clipping. The choice depends on the aneurysm's anatomy, size, location, and patient health."
    },
    {
        question: "What is a flow diverter?",
        answer: "A flow diverter is a high-density mesh endovascular stent placed in the parent blood vessel across the neck of an aneurysm. It redirects blood flow away from the aneurysm sac, promoting progressive thrombosis and healing of the vessel wall, thereby reconstructing the parent artery without entering the aneurysm itself."
    },
    {
        question: "Do all aneurysms require treatment?",
        answer: "No. Small, unruptured brain aneurysms with low risk features may not require immediate intervention. They are often monitored regularly with non-invasive imaging (MRA or CTA). Treatment decisions are highly individualized, balancing rupture risk factors (size, location, growth, family history) against the risks of the procedure."
    },
    {
        question: "What causes pulsatile tinnitus?",
        answer: "Pulsatile tinnitus is a rhythmic sound matching the patient's heartbeat, often caused by vascular anomalies. Common causes include dural arteriovenous fistulas (dAVFs), carotid artery stenosis, idiopathic intracranial hypertension (IIH), high jugular bulbs, or hypervascular skull base tumors. It requires detailed neurovascular angiography review."
    },
    {
        question: "Is cerebral angiography painful?",
        answer: "Cerebral angiography is generally not painful. It is performed under local anesthesia at the catheter insertion site (usually the groin or wrist) with optional mild sedation. You do not feel the catheter moving through the blood vessels. You may feel a brief warm sensation or 'flush' in the head during contrast injection."
    },
    {
        question: "What is MMA embolisation?",
        answer: "Middle Meningeal Artery (MMA) embolisation is a contemporary, minimally invasive procedure to treat chronic subdural haematomas (CSDH). By blocking the branches of the MMA that feed the vascular outer membrane of the haematoma, the procedure stops micro-bleeding, allowing the fluid collection to be resorbed naturally and drastically reducing the recurrence rate."
    },
    {
        question: "Can carotid artery disease be treated without surgery?",
        answer: "Yes. In addition to medical management (antiplatelets, statins, blood pressure control), moderate-to-severe carotid artery stenosis can be treated using minimally invasive Carotid Stenting (CAS). During CAS, a stent is deployed to widen the narrow segment and a filter is used to capture any emboli, avoiding open surgical carotid endarterectomy."
    },
    {
        question: "When should complex imaging and treatment options be reviewed?",
        answer: "A comprehensive review by an interventional neuroradiologist is recommended when diagnostic imaging (MRI, CT, or DSA) suggests a cerebrovascular abnormality, when seeking a second opinion on a brain aneurysm or vascular malformation, or when evaluating unexplained intracranial hemorrhage, pulsatile tinnitus, or progressive spinal vascular issues."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] overflow-hidden">
            {/* Background Saturated Radial Gradients & Spheres */}
            <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />
            <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center justify-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        FAQ
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Frequently Asked Questions
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                        Clear clinical answers to common questions regarding neurovascular diagnostics and minimally invasive treatments.
                    </p>
                </div>

                {/* FAQ Accordion list */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border rounded-2xl transition-all duration-300 shadow-none ${isOpen ? 'bg-gradient-to-br from-zinc-50 to-zinc-100/80 border-tealAccent/60' : 'bg-gradient-to-br from-white to-zinc-50/50 border-zinc-200'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                                >
                                    <span className="font-serif font-bold text-deepNavy text-base sm:text-lg hover:text-tealAccent transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className={`p-1.5 rounded-lg bg-tealAccent/10 text-tealAccent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </span>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-zinc-150 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
