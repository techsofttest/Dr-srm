import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/global/Header';
import ConditionDetailClient from '@/components/conditions/ConditionDetailClient';

export const dynamicParams = true;

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

// ── Static route generation ──────────────────────────────────────────────────
export async function generateStaticParams() {
    try {
        const res = await fetchWithTimeout(
            `${process.env.NEXT_PUBLIC_API_URL}/condition`,
            { next: { revalidate: 60 } },
            8000
        );

        if (!res.ok) {
            console.error(`API returned status ${res.status} for /condition`);
            return [];
        }

        const json = await res.json();

        // Ensure json.condition is an array before mapping
        if (!Array.isArray(json?.condition)) {
            console.error("API response for /condition did not return an array for 'condition':", json);
            return [];
        }

        return json.condition
            .filter((item: any) => typeof item?.slug === 'string' && item.slug.trim() !== '')
            .map((item: any) => ({ slug: item.slug }));
    } catch (error) {
        console.error("Failed to fetch static params for /conditions/[slug] during build:", error);
        // Returning [] allows the build to succeed and fall back to dynamic rendering on user requests
        return [];
    }
}

// ── Dynamic metadata per condition ────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    try {
        const res = await fetchWithTimeout(
            `${process.env.NEXT_PUBLIC_API_URL}/condition/${slug}`,
            { next: { revalidate: 60 } },
            5000
        );

        if (!res.ok) {
            return {
                title: "Condition Not Found",
            };
        }

        const { condition } = await res.json();

        return {
            title: condition?.meta_title || condition?.title || "Condition Detail",
            description: condition?.meta_desc || "",
            keywords: condition?.meta_keywords || "",
            openGraph: {
                title: condition?.meta_title || condition?.title || "Condition Detail",
                description: condition?.meta_desc || "",
                images: condition?.image ? [condition.image] : [],
            },
        };
    } catch (error) {
        console.error(`Failed to fetch metadata for slug '${slug}':`, error);
        return {
            title: "Condition Detail",
        };
    }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ConditionDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <>
            <Header />
            <ConditionDetailClient />
        </>
    );
}