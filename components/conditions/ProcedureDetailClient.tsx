'use client';

import React from 'react';
import {
    Clock, Cpu, HeartPulse, Activity, Monitor, ShieldAlert,
    HelpCircle, Sparkles, ArrowRight, Video, Play, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import InnerPageHero from '@/components/global/InnerPageHero';
import EmergencyStrokeBanner from '@/components/global/EmergencyStrokeBanner';
import Button from '@/components/global/Button';
import type { ProcedureData } from '@/data/clinicalContent';
import { procedures } from '@/data/clinicalContent';

// ── Icon lookup ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    Clock, Cpu, HeartPulse, Activity, Monitor, ShieldAlert, HelpCircle,
};

function getIcon(name: string): React.ElementType {
    return iconMap[name]; // Return undefined if icon name is not found
}

// ── Props ──────────────────────────────────────────────────────────────────────
interface Props {
    data: ProcedureData;
}

export default function ProcedureDetailClient({ data }: Props) {
    const InfoIcon = getIcon(data.infoCardIcon);
    const isRedAccent = data.infoCardAccentColor === 'red';

    const otherProcedures = procedures.filter(p => p.slug !== data.slug);

    // Helper to get video ID from youtube URL
    const getYoutubeVideoId = (url?: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYoutubeVideoId(data.videoUrl);

    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <InnerPageHero
                title={data.heroTitle}
                category={data.heroCategory}
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                        {data.heroDescription}
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-20"
                showSpear={true}
                bottomCut={true}
                bgImage={data.image}
            />

            {/* ── Editorial Content Area ─────────────────────────────────────── */}
            <section className="relative w-full py-16 md:py-24 bg-white px-5 md:px-[80px]">
                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">

                        {/* ── Main Article (Left) ── */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Article Image / Overview */}
                            <div className="space-y-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                                    {data.overviewHeading}
                                </h2>

                                <div className="prose prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600 prose-headings:font-serif prose-headings:text-deepNavy">
                                    {data.overviewBody.map((para, i) => (
                                        <p key={i} className="text-base md:text-lg mb-4">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Approaches */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl font-serif font-bold text-deepNavy mb-6">
                                    Technical Procedural Approaches
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {data.technicalApproaches.map((tech, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm md:text-base font-light bg-white border border-zinc-200/60 px-4 py-3 rounded-xl shadow-sm">
                                            <span className="w-2 h-2 rounded-full bg-tealAccent shrink-0" />
                                            <span>{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Video Section */}
                            {(videoId || data.infoCardTitle) && (
                                <div className="space-y-6">
                                    {videoId && (
                                        <h3 className="text-2xl font-serif font-bold text-deepNavy flex items-center gap-3">
                                            <Video className="w-6 h-6 text-tealAccent" />
                                            Video Walkthrough
                                        </h3>
                                    )}

                                    {videoId && (
                                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-slate-100">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${videoId}`}
                                                title="YouTube video player"
                                                className="absolute top-0 left-0 w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Info Card / Time-critical content */}
                            <div className={`border rounded-2xl p-6 md:p-8 ${isRedAccent ? 'bg-red-50/50 border-red-100' : 'bg-teal-50/50 border-teal-100'}`}>
                                <div className={`flex items-center gap-3 mb-4 ${isRedAccent ? 'text-red-600' : 'text-teal-600'}`}>
                                    <InfoIcon className={`w-7 h-7 ${isRedAccent ? 'animate-pulse' : ''}`} />
                                    <span className="text-xs font-bold uppercase tracking-widest">
                                        {data.infoCardLabel}
                                    </span>
                                </div>
                                <h4 className={`text-xl sm:text-2xl font-serif font-bold mb-4 ${isRedAccent ? 'text-red-950' : 'text-teal-950'}`}>
                                    {data.infoCardTitle}
                                </h4>
                                <p className={`text-sm md:text-base leading-relaxed font-light mb-6 ${isRedAccent ? 'text-red-900/80' : 'text-teal-900/80'}`}>
                                    {data.infoCardBody}
                                </p>
                                <div className={`p-4 rounded-xl border flex items-start gap-3 ${isRedAccent ? 'bg-red-100/50 border-red-200 text-red-900' : 'bg-teal-100/50 border-teal-200 text-teal-900'}`}>
                                    <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium leading-relaxed">
                                        {data.infoCardHighlight}
                                    </span>
                                </div>
                            </div>

                            {/* Clinical Indications */}
                            <div className="space-y-6 pt-8 border-t border-zinc-200">
                                <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-tealAccent" />
                                    {data.indicationsSectionLabel}
                                </h2>
                                <h3 className="text-2xl sm:text-3xl font-serif text-deepNavy leading-tight mb-4">
                                    {data.indicationsHeading}
                                </h3>
                                <div className="prose prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600">
                                    {data.indicationsBody.map((para, i) => (
                                        <p key={i} className="text-base md:text-lg mb-4">
                                            {para}
                                        </p>
                                    ))}
                                </div>

                                {/* Related links */}
                                {data.relatedLinks && data.relatedLinks.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-3 pt-6">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            Related Conditions:
                                        </span>
                                        {data.relatedLinks.map((rl) => (
                                            <Link
                                                key={rl.href}
                                                href={rl.href}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-zinc-50 text-xs font-semibold text-slate-600 hover:border-tealAccent hover:text-tealAccent hover:bg-tealAccent/5 transition-colors"
                                            >
                                                <span>{rl.label}</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* ── Sidebar (Right) ── */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

                            {/* Other Procedures List */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 border-b border-zinc-200 pb-4">
                                    Other Procedures
                                </h4>
                                <div className="flex flex-col gap-2">
                                    {otherProcedures.map((proc) => {
                                        const ProcIcon = getIcon(proc.iconName);
                                        return (
                                            <Link
                                                key={proc.slug}
                                                href={`/procedures/${proc.slug}`}
                                                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {ProcIcon && ( // Conditionally render the icon if it's found
                                                        <div className="p-2 bg-zinc-100 text-slate-400 group-hover:text-tealAccent group-hover:bg-tealAccent/10 rounded-lg transition-colors">
                                                            <ProcIcon className="w-4 h-4" />
                                                        </div>
                                                    )}
                                                    <span className="text-sm font-medium text-slate-700 group-hover:text-deepNavy transition-colors line-clamp-1">
                                                        {proc.heroTitle}
                                                    </span>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-tealAccent transition-colors shrink-0" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Quick Contact Widget */}
                            <div className="bg-deepNavy rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-tealAccent/20 blur-[50px] rounded-full" />
                                <h4 className="text-lg font-serif font-bold mb-2 relative z-10">Need a Consultation?</h4>
                                <p className="text-sm text-white/70 font-light mb-6 relative z-10">
                                    Schedule an appointment for expert neurovascular evaluation and treatment planning.
                                </p>
                                <Button
                                    variant="primary"
                                    href="/book-appointment"
                                    className="w-full relative z-10"
                                >
                                    Book Appointment
                                </Button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ── Emergency Banner (optional) ───────────────────────────────── */}
            {data.emergencyBanner && (
                <EmergencyStrokeBanner
                    title={data.emergencyBanner.title}
                    description={data.emergencyBanner.description}
                    ctaText={data.emergencyBanner.ctaText}
                    ctaHref={data.emergencyBanner.ctaHref}
                    isWarningIcon={data.emergencyBanner.isWarningIcon}
                />
            )}

            {/* ── CTA (optional) ────────────────────────────────────────────── */}
            {data.ctaQuestion && (
                <section className="relative w-full py-16 bg-zinc-50 px-5 md:px-[80px] overflow-hidden border-t border-zinc-200">
                    <div className="relative z-10 max-w-[1400px] mx-auto">
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#071124] to-[#0d2142] border border-zinc-200 text-white rounded-2xl p-8 md:p-12">
                            <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-tealAccent/20 blur-[100px] pointer-events-none" />
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-2.5 text-tealAccent mb-4">
                                        <HelpCircle className="w-6 h-6 shrink-0" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{data.ctaLabel}</span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                                        {data.ctaQuestion}
                                    </h4>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                                        {data.ctaAnswer}
                                    </p>
                                </div>
                                <div className="shrink-0 w-full md:w-auto">
                                    <Button
                                        variant="primary"
                                        href="/book-appointment"
                                        className="w-full md:w-auto flex items-center justify-center gap-2"
                                    >
                                        <span>Book Consultation</span>
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

        </main>
    );
}
