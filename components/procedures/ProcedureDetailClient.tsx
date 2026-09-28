'use client';

import React from 'react';
import {
    Brain,
    Clock,
    Cpu,
    HeartPulse,
    Activity,
    Monitor,
    ShieldAlert,
    HelpCircle,
    ArrowRight,
    ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import InnerPageHero from '@/components/global/InnerPageHero';
import EmergencyStrokeBanner from '@/components/global/EmergencyStrokeBanner';
import Button from '@/components/global/Button';

// ── Icon lookup ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    brain: Brain,
    clock: Clock,
    cpu: Cpu,
    heartpulse: HeartPulse,
    activity: Activity,
    monitor: Monitor,
    shieldalert: ShieldAlert,
};

function getIcon(name?: string | null): React.ElementType {
    return iconMap[name?.toLowerCase() ?? ''] ?? ShieldAlert;
}

// ── Types ──────────────────────────────────────────────────────────────────────

interface RelatedLink {
    label: string;
    href: string;
}

interface SectionData {
    type: string;
    title: string;
    heading: string;
    quote: string;
    content: string;
    related?: RelatedLink[];
}

interface Procedure {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string | null;
    icon: string | null;
    meta_title: string | null;
    meta_desc: string | null;
    technicalApproaches: string[];

    descriptionSection?: SectionData;
    infoCardSection?: SectionData;
    indicationsSection?: SectionData;
    ctaSection?: SectionData;
    emergencySection?: SectionData;
}

interface OtherProcedure {
    title: string;
    slug: string;
    icon: string | null;
}

interface ProcedureDetailClientProps {
    data: Procedure;
    otherProcedures: OtherProcedure[];
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ProcedureDetailClient({
    data,
    otherProcedures,
}: ProcedureDetailClientProps) {

    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* Hero */}
            <InnerPageHero
                title={data.title}
                category="Procedure"
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                        {data.content}
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-20"
                showSpear={true}
                bgImage={data.image || ""}
            />

            {/* Editorial Content */}
            <section className="relative w-full py-16 md:py-24 bg-white px-5 md:px-[80px]">
                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">

                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Description */}
                            {data.descriptionSection && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                                        {data.descriptionSection.title}
                                    </h2>

                                    <div
                                        className="prose prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600"
                                        dangerouslySetInnerHTML={{
                                            __html: data.descriptionSection.content || '',
                                        }}
                                    />
                                </div>
                            )}

                            {/* Technical Approaches */}
                            {data.technicalApproaches?.length > 0 && (
                                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                    <h3 className="text-xl font-serif font-bold text-deepNavy mb-6">
                                        Technical Procedural Approaches
                                    </h3>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {data.technicalApproaches.map((tech, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3 text-slate-700 text-sm md:text-base font-light bg-white border border-zinc-200/60 px-4 py-3 rounded-xl shadow-sm"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-tealAccent shrink-0" />
                                                <span>{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Info Card */}
                            {data.infoCardSection && (
                                <div className="border rounded-2xl p-6 md:p-8 bg-red-50/50 border-red-100">
                                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-4">
                                        {data.infoCardSection.title}
                                    </h2>

                                    <h4 className="text-2xl font-serif font-bold mb-4">
                                        {data.infoCardSection.heading}
                                    </h4>

                                    <div
                                        className="prose prose-slate max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: data.infoCardSection.content,
                                        }}
                                    />
                                </div>
                            )}

                            {/* Clinical Indications */}
                            {data.indicationsSection && (
                                <div className="space-y-6 pt-8 border-t border-zinc-200">
                                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-tealAccent" />
                                        {data.indicationsSection.title}
                                    </h2>

                                    <h3 className="text-2xl sm:text-3xl font-serif text-deepNavy">
                                        {data.indicationsSection.heading}
                                    </h3>

                                    <div
                                        className="prose prose-slate max-w-none prose-p:font-light prose-p:text-slate-600"
                                        dangerouslySetInnerHTML={{
                                            __html: data.indicationsSection.content || '',
                                        }}
                                    />

                                    {data.indicationsSection.related &&
                                        data.indicationsSection.related.length > 0 && (
                                            <div className="flex flex-wrap items-center gap-3 pt-6">
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Related Conditions:
                                                </span>

                                                {data.indicationsSection.related.map(
                                                    (item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={item.href}
                                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-zinc-50"
                                                        >
                                                            {item.label}
                                                            <ArrowRight className="w-3.5 h-3.5" />
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 border-b border-zinc-200 pb-4">
                                    Other Procedures
                                </h4>

                                <div className="flex flex-col gap-2">
                                    {otherProcedures.map((proc) => {
                                        const ProcIcon = getIcon(proc.icon);

                                        return (
                                            <Link
                                                key={proc.slug}
                                                href={`/procedures/${proc.slug}`}
                                                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-zinc-100 text-slate-400 group-hover:text-tealAccent group-hover:bg-tealAccent/10 rounded-lg">
                                                        <ProcIcon className="w-4 h-4" />
                                                    </div>

                                                    <span className="text-sm font-medium text-slate-700 line-clamp-1">
                                                        {proc.title}
                                                    </span>
                                                </div>

                                                <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Consultation */}
                            <div className="bg-deepNavy rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                                <h4 className="text-lg font-serif font-bold mb-2">
                                    Need a Consultation?
                                </h4>

                                <p className="text-sm text-white/70 font-light mb-6">
                                    Schedule an appointment for expert neurovascular
                                    evaluation and treatment planning.
                                </p>

                                <Button
                                    variant="primary"
                                    href="/book-appointment"
                                    className="w-full"
                                >
                                    Book Appointment
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Section */}
            {data.emergencySection && (
                <EmergencyStrokeBanner
                    title={data.emergencySection.title}
                    description={data.emergencySection.content}
                    ctaText="Emergency Contact"
                    ctaHref="/contact"
                    isWarningIcon={true}
                />
            )}

            {/* CTA */}
            {data.ctaSection && (
                <section className="relative w-full py-16 bg-zinc-50 px-5 md:px-[80px] border-t border-zinc-200">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#071124] to-[#0d2142] text-white rounded-2xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-2 text-tealAccent mb-4">
                                        <HelpCircle className="w-6 h-6" />
                                        <span className="text-xs font-bold uppercase tracking-widest">
                                            {data.ctaSection.title}
                                        </span>
                                    </div>

                                    <h4 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                                        {data.ctaSection.heading}
                                    </h4>

                                    <div
                                        className="text-white/70"
                                        dangerouslySetInnerHTML={{
                                            __html: data.ctaSection.content,
                                        }}
                                    />
                                </div>

                                <Button
                                    variant="primary"
                                    href="/book-appointment"
                                    className="shrink-0"
                                >
                                    <span>Book Consultation</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}