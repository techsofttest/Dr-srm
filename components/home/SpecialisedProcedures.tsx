'use client';

import React from 'react';
import { Brain, Heart, Layers, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ── Animated neural network background ───────────────────────────────────────

// Nodes: [x%, y%] positions in the SVG viewBox (0–100 × 0–100)
const NODES: [number, number][] = [
    [8, 8], [25, 4], [44, 7], [62, 3], [80, 10], [94, 6],
    [5, 30], [22, 25], [40, 22], [57, 28], [74, 20], [92, 30],
    [10, 50], [28, 48], [50, 45], [66, 52], [85, 48],
    [15, 70], [38, 65], [55, 72], [76, 68], [93, 72],
    [22, 88], [50, 90], [72, 88], [90, 92],
];

// Edges: pairs of node indices
const EDGES: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
    [6, 12], [7, 13], [8, 14], [9, 15], [10, 16],
    [12, 13], [13, 14], [14, 15], [15, 16],
    [12, 17], [13, 18], [14, 19], [15, 20], [16, 21],
    [17, 18], [18, 19], [19, 20], [20, 21],
    [17, 22], [18, 23], [19, 24], [20, 25], [21, 25],
    [22, 23], [23, 24], [24, 25],
    [7, 2], [9, 4], [13, 8], [15, 10], [18, 14], [20, 16],
];

function NeuralNetworkBg() {
    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.09 }}
            aria-hidden="true"
        >
            {/* ── Edges ── */}
            {EDGES.map(([a, b], i) => {
                const [x1, y1] = NODES[a];
                const [x2, y2] = NODES[b];
                const pathD = `M${x1},${y1} L${x2},${y2}`;
                const len = Math.hypot(x2 - x1, y2 - y1);
                const dur = 2.5 + (i % 5) * 0.8; // 2.5s – 6.5s
                const delay = (i % 9) * 0.6;        // 0s – 4.8s

                return (
                    <g key={`e-${i}`}>
                        {/* Static line */}
                        <line
                            x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke="#0d9488"
                            strokeWidth="0.18"
                            strokeOpacity="0.5"
                        />
                        {/* Traveling signal pulse */}
                        <circle r="0.55" fill="#0d9488" fillOpacity="0.9">
                            <animateMotion
                                dur={`${dur}s`}
                                begin={`${delay}s`}
                                repeatCount="indefinite"
                                path={pathD}
                                keyTimes="0;1"
                                keyPoints="0;1"
                                calcMode="linear"
                            />
                            <animate
                                attributeName="fill-opacity"
                                values="0;0.9;0"
                                dur={`${dur}s`}
                                begin={`${delay}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>
                );
            })}

            {/* ── Nodes ── */}
            {NODES.map(([x, y], i) => {
                const pulseDur = 2 + (i % 5) * 0.4;
                const delay = (i % 7) * 0.35;
                return (
                    <g key={`n-${i}`}>
                        {/* Glow ring */}
                        <circle
                            cx={x} cy={y} r="1.4"
                            fill="none"
                            stroke="#0d9488"
                            strokeWidth="0.3"
                            strokeOpacity="0.25"
                        >
                            <animate
                                attributeName="r"
                                values="1.2;2.2;1.2"
                                dur={`${pulseDur}s`}
                                begin={`${delay}s`}
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="stroke-opacity"
                                values="0.25;0;0.25"
                                dur={`${pulseDur}s`}
                                begin={`${delay}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                        {/* Core dot */}
                        <circle cx={x} cy={y} r="0.6" fill="#0d9488" fillOpacity="0.7">
                            <animate
                                attributeName="fill-opacity"
                                values="0.5;1;0.5"
                                dur={`${pulseDur}s`}
                                begin={`${delay}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>
                );
            })}
        </svg>
    );
}


const procedures = [
    {
        title: "Mechanical Thrombectomy",
        icon: Brain,
        description: "Rapid clot retrieval for acute ischaemic stroke using aspiration and stent-retriever techniques.",
        techniques: [
            "Aspiration Thrombectomy (ADAPT technique)",
            "Stent-Retriever Clot Extraction",
            "Combined Solumbra Protocol",
            "Emergency Revascularisation"
        ]
    },
    {
        title: "Brain Aneurysm Treatment",
        icon: Heart,
        description: "Minimally invasive reconstruction and occlusion of ruptured and unruptured intracranial aneurysms.",
        techniques: [
            "Simple Coiling",
            "Balloon-Assisted Coiling",
            "Stent-Assisted Coiling",
            "Flow Diversion",
            "Parent Vessel Reconstruction",
            "Complex Aneurysm Treatment"
        ]
    },
    {
        title: "AVM & dAVF Embolisation",
        icon: Layers,
        description: "Targeted catheter-guided embolisation of vascular malformations of the brain and spine.",
        techniques: [
            "Cerebral AVM Embolisation",
            "Cranial dAVF Embolisation",
            "Carotid-Cavernous Fistula Embolisation",
            "Spinal dAVF Embolisation",
            "Head & Neck Vascular Malformation Embolisation",
            "Pre-operative Embolisation"
        ]
    },
    {
        title: "Cerebrovascular Revascularisation",
        icon: ShieldCheck,
        description: "Endovascular stenting and angioplasty to prevent stroke and restore cerebral blood flow.",
        techniques: [
            "Carotid Artery Stenting",
            "Intracranial Angioplasty",
            "Intracranial Stenting",
            "Cerebral Perfusion Assessment",
            "Stroke Prevention Consultation"
        ]
    },
    {
        title: "Diagnostic Neurovascular Imaging",
        icon: Microscope,
        description: "Advanced diagnostic assessments utilizing state-of-the-art angiography and neuroimaging protocols.",
        techniques: [
            "Cerebral Angiography",
            "Spinal Angiography",
            "CT Angiography",
            "MR Angiography",
            "Vessel Wall Imaging",
            "Perfusion Imaging",
            "Advanced MRI Interpretation"
        ]
    }
];

export default function SpecialisedProcedures() {
    return (
        <section id="procedures" className="relative w-full py-24 bg-deepNavy text-white px-5 md:px-[80px] overflow-hidden">
            {/* Animated neural network */}
            <NeuralNetworkBg />

            {/* Radial glow depth layers */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-tealAccent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-navyLight/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Interventional Techniques
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
                        Specialised Procedures
                    </h3>
                    <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
                        Offering contemporary endovascular therapies and high-resolution neuroimaging diagnostics.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {procedures.map((proc, idx) => {
                        const Icon = proc.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-[#12224A] border border-white/20 rounded-3xl p-8 hover:border-tealAccent/45 transition-colors"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 text-tealAccent rounded-2xl">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-tight">
                                        {proc.title}
                                    </h4>
                                </div>

                                <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                                    {proc.description}
                                </p>

                                <h5 className="text-xs font-bold text-tealAccent uppercase tracking-widest mb-3">
                                    Clinical Techniques
                                </h5>

                                <ul className="space-y-2.5">
                                    {proc.techniques.map((tech, techIdx) => (
                                        <li key={techIdx} className="flex items-start gap-2 text-sm text-white/90">
                                            <ArrowRight className="w-3.5 h-3.5 text-tealAccent shrink-0 mt-1" />
                                            <span className="font-light">{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
