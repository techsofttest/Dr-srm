'use client';

import React, { useEffect, useState } from 'react';
import {
    Brain, Clock, Cpu, HeartPulse, Activity, Monitor, ShieldAlert,
    HelpCircle, Sparkles, ArrowRight, Video, Play, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import InnerPageHero from '@/components/global/InnerPageHero';
import EmergencyStrokeBanner from '@/components/global/EmergencyStrokeBanner';
import Button from '@/components/global/Button';
import type { ProcedureData } from '@/data/clinicalContent';
import { procedures } from '@/data/clinicalContent';
import { useParams } from 'next/navigation';

// ── Icon lookup ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    brain: Brain,
    clock: Clock,
    cpu: Cpu,
    heartpulse: HeartPulse,
    activity: Activity,
    monitor: Monitor,
    shieldalert: ShieldAlert,
    helpcircle: HelpCircle,
};

function getIcon(name?: string): React.ElementType {
    return iconMap[name?.toLowerCase() ?? ''] ?? ShieldAlert;
}
interface More{
    title :string,
    slug:string,
    icon: string;
}
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

interface ProcedureFetchData {
    slug: string;
    heroTitle: string;
    heroCategory: string;
    heroDescription: string;
    image: string;

    descriptionSection?: SectionData;
    infoCardSection?: SectionData;
    indicationsSection?: SectionData;
    ctaSection?: SectionData;
    emergencySection?: SectionData;

    technicalApproaches: string[];
}

// ── Props ──────────────────────────────────────────────────────────────────────
interface Props {
    data: ProcedureData;
}

export default function ProcedureDetailClient({ data }: Props) {
    const params = useParams();
    const slug = params.slug as string | undefined;
    const [procedureData, setData] = useState<ProcedureFetchData | null>(null);
    const [otherProcedures, setMore] = useState<More[]>([]);
            
    const getYoutubeVideoId = (url?: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };
    // const videoId = getYoutubeVideoId(procedureData.videoUrl);
    useEffect(() => {
        if (!slug) {
            return;
        }

        async function fetchProcedure() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/procedure/${slug}`
                );
                const json = await res.json();
                const otherProcedures = json.otherProcedures;
                setMore(otherProcedures);
                const procedure = json.procedure;
                // const sections = procedure.overview || [];

                setData({
    slug: procedure.slug,
    heroTitle: procedure.title,
    heroCategory: 'Procedure',
    heroDescription: procedure.content ?? '',
    // heroDescription: procedure.meta_desc ?? '',
    image: procedure.image,

    descriptionSection: procedure.descriptionSection,
    infoCardSection: procedure.infoCardSection,
    indicationsSection: procedure.indicationsSection,
    ctaSection: procedure.ctaSection,
    emergencySection: procedure.emergencySection,

    technicalApproaches: procedure.technicalApproaches || [],
});
            } catch (error) {
                console.error(error);
            }
        }

        fetchProcedure(); 
    }, [slug]);

    if (!procedureData) {
        return (
            <div className="py-24 text-center">
                Loading...
            </div>
        );
    }


    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <InnerPageHero
                title={procedureData.heroTitle}
                category={procedureData.heroCategory}
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                        {procedureData.heroDescription}
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-20"
                showSpear={true}
                bgImage={procedureData.image}
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
                                    {procedureData.descriptionSection?.title}
                                </h2>

                                <div className="prose prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600 prose-headings:font-serif prose-headings:text-deepNavy">
                                    <div
                                        className="prose max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: procedureData.descriptionSection?.content || '',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Technical Approaches */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl font-serif font-bold text-deepNavy mb-6">
                                    Technical Procedural Approaches
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {procedureData.technicalApproaches.map((tech: string, idx: number) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm md:text-base font-light bg-white border border-zinc-200/60 px-4 py-3 rounded-xl shadow-sm">
                                            <span className="w-2 h-2 rounded-full bg-tealAccent shrink-0" />
                                            <span>{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Video Section */}
                            {/* {(videoId || procedureData.infoCardTitle) && (
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
                            )} */}

                            {/* Info Card / Time-critical content */}
                            {procedureData.infoCardSection && (
                                    <div className="border rounded-2xl p-6 md:p-8 bg-red-50/50 border-red-100">
                                        <div className="flex items-center gap-3 mb-4 text-red-600">
                                            <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase flex items-center gap-3">
                                            <span className="text-xs font-bold uppercase tracking-widest" />
                                            {procedureData.infoCardSection?.title}
                                        </h2>
                                        </div>
                                        
                                        <h4 className="text-2xl font-serif font-bold mb-4">
                                            {procedureData.infoCardSection?.heading}
                                        </h4>

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: procedureData.infoCardSection.content,
                                            }}
                                        />
                                    </div>
                                     
                                )}

                            {/* Clinical Indications */}
                            <div className="space-y-6 pt-8 border-t border-zinc-200">
                                <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-tealAccent" />
                                    {procedureData.indicationsSection?.title}
                                </h2>
                                <h3 className="text-2xl sm:text-3xl font-serif text-deepNavy leading-tight mb-4">
                                    {procedureData.indicationsSection?.heading}
                                </h3>
                                <div className="prose prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600">
                                <div
                                            dangerouslySetInnerHTML={{
                                                __html: procedureData.indicationsSection?.content || '',
                                            }}
                                        />

                                        {procedureData.indicationsSection?.related && procedureData.indicationsSection.related.length > 0 && (
                                            <div className="flex flex-wrap items-center gap-3 pt-6">
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Related Conditions:
                                                </span>

                                                {procedureData.indicationsSection.related.map((item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={item.href}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-zinc-50"
                                                    >
                                                        {item.label}
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>

                        {/* ── Sidebar (Right) ── */}
                        {/* ── Sidebar (Right) ── */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

                            {/* Other Procedures List */}
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
                                                    <div className="p-2 bg-zinc-100 text-slate-400 group-hover:text-tealAccent group-hover:bg-tealAccent/10 rounded-lg transition-colors">
                                                        <ProcIcon className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-700 group-hover:text-deepNavy transition-colors line-clamp-1">
                                                        {proc.title}
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
            {procedureData.emergencySection && (
                <EmergencyStrokeBanner
                    title={procedureData.emergencySection.title}
                    description={procedureData.emergencySection.content}
                    ctaText="Emergency Contact"
                    ctaHref="/contact"
                    isWarningIcon={true}
                />
            )}

            {/* ── CTA (optional) ────────────────────────────────────────────── */}
            {procedureData.ctaSection && (
                <section className="relative w-full py-16 bg-zinc-50 px-5 md:px-[80px] overflow-hidden border-t border-zinc-200">
                    <div className="relative z-10 max-w-[1400px] mx-auto">
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#071124] to-[#0d2142] border border-zinc-200 text-white rounded-2xl p-8 md:p-12">
                            <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-tealAccent/20 blur-[100px] pointer-events-none" />
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-2.5 text-tealAccent mb-4">
                                        <HelpCircle className="w-6 h-6 shrink-0" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{procedureData.ctaSection?.title}</span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                                        {<h3>{procedureData.ctaSection.heading}</h3>}
                                    </h4>
                                     <div
                                            dangerouslySetInnerHTML={{
                                                __html: procedureData.ctaSection.content,
                                            }}
                                        />
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
);}