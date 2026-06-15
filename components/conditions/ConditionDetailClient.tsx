'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
    HeartPulse, Activity, ShieldAlert, HelpCircle, ArrowRight, ChevronRight, CheckCircle2, Shield
} from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import InnerPageHero from '@/components/global/InnerPageHero';
import EmergencyStrokeBanner from '@/components/global/EmergencyStrokeBanner';
import Button from '@/components/global/Button';

const iconMap: Record<string, React.ElementType> = {
    HeartPulse, Activity, ShieldAlert, HelpCircle, Shield
};
interface More{
    title :string,
    slug:string,
    image:string,
    icon?: string;
}
interface RelatedLink {
    label: string;
    href: string;
}
interface Point{
    head:string;
    sub:string;
}
interface SectionData {
    type: string;
    title: string;
    heading: string;
    quote: string;
    content: string;
    related?: RelatedLink[];
    points?: Point[];
}
interface Treatment {
    title: string;
    heading: string;
    content: string;
}
interface ConditionFetchData {
    slug: string;
    heroTitle: string;
    heroCategory: string;
    content: string;
    image: string;
    videoUrl?: string;
    icon:string;
    descriptionSection?: SectionData;
    endovasculartreatment?: SectionData;
    keycriteria?: SectionData;
    aneurysmfaq?: SectionData;
    box?: SectionData;
    ctaSection?: SectionData;
    emergencySection?: SectionData;

    technicalApproaches: string[];
     treatment?: Treatment;
}


function getIcon(name: string): React.ElementType {
    return iconMap[name] ?? ShieldAlert;
}

export default function ConditionDetailClient() {
    const params = useParams();
   

    // Helper to get video ID from youtube URL
    // const getYoutubeVideoId = (url?: string) => {
    //     if (!url) return null;
    //     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    //     const match = url.match(regExp);
    //     return (match && match[2].length === 11) ? match[2] : null;
    // };

    const slug = params.slug as string | undefined;
    const [conditionData, setConditionData] = useState<ConditionFetchData | null>(null);
    const [more, setMore] = useState<More[]>([]);
 const CardIcon = getIcon(conditionData?.icon || "ShieldAlert");
    // const videoId = getYoutubeVideoId(conditionData?.videoUrl || data.videoUrl);

    useEffect(() => {
        if (!slug) return;
        
        async function fetchCondition() {
            try {
                
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/condition/${slug}`);
                const json = await res.json();
                const more = json.more;
                setMore(more);
                const cond = json.condition;

                setConditionData({
                    slug: cond.slug,
                    heroTitle: cond.title,
                    heroCategory: 'Condition',
                    content: cond.content ?? '',
                    image: cond.image,
                    // videoUrl: cond.videoUrl,
                    descriptionSection: cond.descriptionSection,
                    treatment:cond.treatment,
                     icon: cond.icon,
                    endovasculartreatment: cond.endovasculartreatment,
                    keycriteria: cond.keycriteria,
                    aneurysmfaq: cond.aneurysmfaq,
                    box: cond.box,
                    ctaSection: cond.ctaSection,
                    emergencySection: cond.emergencySection,
                    technicalApproaches: cond.technicalApproaches || [],
                });
            } catch (error) {
                console.error("Error fetching condition detail:", error);
            }
        }
        fetchCondition();
    }, [slug]);

    if (!conditionData) {
        return <div className="py-24 text-center">Loading...</div>;
    }

    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <InnerPageHero
                title={conditionData.heroTitle}
                category={conditionData.heroCategory}
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                        {conditionData.content}
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-20"
                showSpear={true}
                bgImage={conditionData.image}
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
                                    {conditionData.descriptionSection?.title}
                                </h2>

                                <div className="prose prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-600 prose-headings:font-serif prose-headings:text-deepNavy">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: conditionData.descriptionSection?.content || '',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Key Evaluation Criteria Card */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6 text-tealAccent">
                                    <CardIcon className="w-6 h-6" />
                                    <h3 className="text-xl font-serif font-bold text-deepNavy m-0">
                                        {conditionData.keycriteria?.title}
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                     <div className="space-y-4">
                                    {conditionData.keycriteria?.points && conditionData.keycriteria?.points.map((crit, idx) => (
                                        <div key={idx} className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                                            <div>
                                                <h6 className="text-sm font-bold text-deepNavy mb-1">{crit.head}</h6>
                                                <p className="text-sm text-slate-600 leading-relaxed font-light">{crit.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>

                            {/* Technical Approaches */}
                            {conditionData.technicalApproaches && conditionData.technicalApproaches.length > 0 && (
                                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                    <h3 className="text-xl font-serif font-bold text-deepNavy mb-6">
                                        Technical Procedural Approaches
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {conditionData.technicalApproaches.map((tech, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm md:text-base font-light bg-white border border-zinc-200/60 px-4 py-3 rounded-xl shadow-sm">
                                                <span className="w-2 h-2 rounded-full bg-tealAccent shrink-0" />
                                                <span>{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Treatments Section */}
                              {conditionData.endovasculartreatment && (
                              <div className="space-y-6 pt-8 border-t border-zinc-200">
                                <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-tealAccent" />
                                    {conditionData.endovasculartreatment.title}
                                </h2>
                                <h3 className="text-2xl sm:text-3xl font-serif text-deepNavy leading-tight mb-2">
                                    {conditionData.endovasculartreatment.heading}
                                </h3>
                                 <div className="text-slate-600 font-light mb-6 text-lg"
                                        dangerouslySetInnerHTML={{
                                            __html: conditionData.endovasculartreatment.content || '',
                                        }}
                                    />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                    {conditionData.endovasculartreatment.points?.map((treatment, idx) => (
                                        <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm hover:border-tealAccent/40 transition-colors">
                                            <h4 className="text-base font-bold text-deepNavy mb-2 flex items-center gap-2 border-b border-zinc-100 pb-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-tealAccent shrink-0" />
                                                {treatment.head}
                                            </h4>
                                            <p className="text-sm text-slate-600 font-light leading-relaxed">
                                                {treatment.sub}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                              )}
                          

                                
                            

                            {/* Info Box Section (Dynamic Callout) */}
                            {conditionData.box && (
                                <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-6 md:p-8">
                                    <h4 className="text-xl font-serif font-bold text-teal-950 mb-4">
                                        {conditionData.box.title}
                                    </h4>
                                    {conditionData.box.heading && (
                                        <h5 className="text-lg font-serif text-teal-800 mb-3 italic">
                                            {conditionData.box.heading}
                                        </h5>
                                    )}
                                    <div
                                        className="prose prose-slate max-w-none prose-p:text-teal-900/80 prose-p:font-light"
                                        dangerouslySetInnerHTML={{ __html: conditionData.box.content }}
                                    />
                                </div>
                            )}
                          

                            {/* YouTube Video Section */}
                            {/* {videoId && (
                                <div className="space-y-6 pt-8 border-t border-zinc-200">
                                    <h3 className="text-2xl font-serif font-bold text-deepNavy flex items-center gap-3">
                                        <Video className="w-6 h-6 text-tealAccent" />
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
                            )} */}

                        </div>

                        {/* ── Sidebar (Right) ── */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

                            {/* Other Conditions List */}
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8">
                                <h4 className="text-lg font-serif font-bold text-deepNavy mb-6 border-b border-zinc-200 pb-4">
                                    Other Conditions
                                </h4>
                                <div className="flex flex-col gap-2">
                                    {more.map((cond) => {
                                        // const CondIcon = getIcon(cond.icon);
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
                                                            alt={cond.title}
                                                            width={40}
                                                            height={40}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-700 group-hover:text-deepNavy transition-colors line-clamp-1">
                                                        {cond.title}
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
            {conditionData.emergencySection && (
                <EmergencyStrokeBanner
                    title={conditionData.emergencySection.title}
                    description={conditionData.emergencySection.content.replace(/<[^>]*>/g, '')}
                    ctaText="Emergency Care"
                    ctaHref="/emergency"
                    isWarningIcon={true}
                />
            )}

            {/* ── CTA ────────────────────────────────────────────── */}
            {(conditionData.aneurysmfaq ) && (
                <section className="relative w-full py-16 bg-zinc-50 px-5 md:px-[80px] overflow-hidden border-t border-zinc-200">
                    <div className="relative z-10 max-w-[1400px] mx-auto">
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#071124] to-[#0d2142] border border-zinc-200 text-white rounded-2xl p-8 md:p-12">
                            <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-tealAccent/20 blur-[100px] pointer-events-none" />
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-2.5 text-tealAccent mb-4">
                                        <HelpCircle className="w-6 h-6 shrink-0" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{conditionData.aneurysmfaq?.title}</span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                                        {conditionData.aneurysmfaq?.heading }
                                    </h4>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                                        {conditionData.aneurysmfaq?.content.replace(/<[^>]*>/g, '')}
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