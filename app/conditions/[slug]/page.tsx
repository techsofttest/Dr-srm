import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/global/Header';
import ConditionDetailClient from '@/components/conditions/ConditionDetailClient';
import { conditions, getConditionBySlug } from '@/data/clinicalContent';

// ── Static params — pre-render all condition slugs ────────────────────────────
export async function generateStaticParams() {
    return conditions.map((c) => ({ slug: c.slug }));
}

// ── Dynamic metadata per condition ────────────────────────────────────────────
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const data = getConditionBySlug(slug);
    if (!data) return { title: 'Not Found' };
    return {
        title: data.metaTitle,
        description: data.metaDescription,
    };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ConditionDetailPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const data = getConditionBySlug(slug);
    if (!data) notFound();

    return (
        <>
            <Header />
            <ConditionDetailClient data={data} />
        </>
    );
}
