import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/global/Header';
import ConditionDetailClient from '@/components/conditions/ConditionDetailClient';

// ── Static params — pre-render all condition slugs ────────────────────────────
export async function generateStaticParams() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/condition`,
        {
            next: { revalidate: 60 },
        }
    );

    const json = await res.json();

    // Ensure json.condition is an array before mapping
    if (!Array.isArray(json.condition)) {
        console.error("API response for /condition did not return an array for 'condition':", json);
        return []; // Return an empty array to prevent build errors
    }
    return json.condition
        .filter((item: any) => typeof item.slug === 'string' && item.slug.trim() !== '') // Filter out invalid slugs
        .map((item: any) => ({ slug: item.slug }));
}

// ── Dynamic metadata per condition ────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/condition/${slug}`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        return {
            title: "Condition Not Found",
        };
    }

    const { condition } = await res.json();

    return {
        title: condition.meta_title,
        description: condition.meta_desc,
        keywords: condition.meta_keywords,
        openGraph: {
            title: condition.meta_title,
            description: condition.meta_desc,
            images: condition.image ? [condition.image] : [],
        },
    };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ConditionDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    console.log("Slug:", slug);

    const url = `${process.env.NEXT_PUBLIC_API_URL}/condition/${slug}`;

    return (
        <>
            <Header />
            <ConditionDetailClient />
        </>
    );
}