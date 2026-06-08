'use client';

import React from 'react';
import {
    HeartPulse, Activity, ShieldAlert, HelpCircle, ArrowRight, ChevronRight, CheckCircle2, Shield
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import InnerPageHero from '@/components/global/InnerPageHero';
import EmergencyStrokeBanner from '@/components/global/EmergencyStrokeBanner';
import Button from '@/components/global/Button';
import type { ConditionData } from '@/data/clinicalContent';
import { conditions } from '@/data/clinicalContent';

const iconMap: Record<string, React.ElementType> = {
    HeartPulse, Activity, ShieldAlert, HelpCircle, Shield
};

function getIcon(name: string): React.ElementType {
    return iconMap[name] ?? ShieldAlert;
}

interface Props {
    data: ConditionData;
}

export default function ConditionDetailClient({ data }: Props) {
    const CardIcon = getIcon(data.overviewCardIcon);

    // Get list of other conditions
    const otherConditions = conditions.filter(c => c.slug !== data.slug);

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
                bgImage={data.image}
            />

            {/* ── Editorial Content Area ─────────────────────────────────────── */}
            <section className="relative w-full py-16 md:py-24 bg-white px-5 md:px-[80px]">
                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">

                        {/* ── Main Article (Left) ── */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Overview Section */}
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

                            {/* Key Evaluation Criteria Card */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6 text-tealAccent">
                                    <CardIcon className="w-6 h-6" />
                                    <h3 className="text-xl font-serif font-bold text-deepNavy m-0">
                                        {data.overviewCardTitle}
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {data.evaluationCriteria.map((crit, idx) => (
                                        <div key={idx} className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                            <div>
                                                <h6 className="text-sm font-bold text-deepNavy mb-1">{crit.label}</h6>
                                                <p className="text-sm text-slate-600 leading-relaxed font-light">{crit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Treatments Section */}
                            <div className="space-y-6 pt-8 border-t border-zinc-200">
                                <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-tealAccent" />
                                    {data.treatmentSectionLabel}
                                </h2>
                                <h3 className="text-2xl sm:text-3xl font-serif text-deepNavy leading-tight mb-2">
                                    {data.treatmentHeading}
                                </h3>
                                <p className="text-slate-600 font-light mb-6 text-lg">
                                    {data.treatmentSubheading}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                    {data.treatments.map((treatment, idx) => (
                                        <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-tealAccent/40 transition-colors">
                                            <h4 className="text-base font-bold text-deepNavy mb-2 flex items-center gap-2 border-b border-zinc-100 pb-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-tealAccent shrink-0" />
                                                {treatment.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 font-light leading-relaxed">
                                                {treatment.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* YouTube Video Section */}
                            {videoId && (
                                <div className="space-y-6 pt-8 border-t border-zinc-200">
                                    <h3 className="text-2xl font-serif font-bold text-deepNavy flex items-center gap-3">
                                        <Activity className="w-6 h-6 text-tealAccent" />
                                        Related Video
                                    </h3>
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-slate-100">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title="YouTube video player"
                                            className="absolute top-0 left-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* ── Sidebar (Right) ── */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

                            {/* Other Conditions List */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 border-b border-zinc-200 pb-4">
                                    Other Conditions
                                </h4>
                                <div className="flex flex-col gap-2">
                                    {otherConditions.map((cond) => {
                                        const CondIcon = getIcon(cond.iconName);
                                        return (
                                            <Link
                                                key={cond.slug}
                                                href={`/conditions/${cond.slug}`}
                                                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-zinc-200 shrink-0">
                                                        <Image
                                                            src={cond.image}
                                                            alt={cond.heroTitle}
                                                            width={40}
                                                            height={40}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-700 group-hover:text-deepNavy transition-colors line-clamp-1">
                                                        {cond.heroTitle}
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

            {/* ── Emergency Banner ───────────────────────────────── */}
            {data.emergencyBanner && (
                <EmergencyStrokeBanner
                    title={data.emergencyBanner.title}
                    description={data.emergencyBanner.description}
                    ctaText={data.emergencyBanner.ctaText}
                    ctaHref={data.emergencyBanner.ctaHref}
                    isWarningIcon={data.emergencyBanner.isWarningIcon}
                />
            )}

            {/* ── CTA ────────────────────────────────────────────── */}
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