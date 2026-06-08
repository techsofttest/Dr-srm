import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ProcedureDetailClient from '@/components/procedures/ProcedureDetailClient';
import { procedures, getProcedureBySlug } from '@/data/clinicalContent';

// ── Static params — pre-render all procedure slugs ────────────────────────────
export async function generateStaticParams() {
    return procedures.map((p) => ({ slug: p.slug }));
}

// ── Dynamic metadata per procedure ───────────────────────────────────────────
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const data = getProcedureBySlug(slug);
    if (!data) return { title: 'Not Found' };
    return {
        title: data.metaTitle,
        description: data.metaDescription,
    };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProcedureDetailPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const data = getProcedureBySlug(slug);
    if (!data) notFound();

    return (
        <>
            <Header />
            <ProcedureDetailClient data={data} />
            <Footer />
        </>
    );
}
