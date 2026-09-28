import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/global/Header';
import ProcedureDetailClient from '@/components/procedures/ProcedureDetailClient';

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

interface ProcedureApiResponse {
    procedure: Procedure;
    otherProcedures: OtherProcedure[];
}

async function getProcedureBySlug(
    slug: string
): Promise<ProcedureApiResponse | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/procedure/${slug}`,
            {
                next: { revalidate: 60},
            }
        );

        if (!res.ok) {
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error("Procedure API error:", error);
        return null;
    }
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;

    const data = await getProcedureBySlug(slug);

    if (!data?.procedure) {
        return {
            title: "Procedure Not Found",
        };
    }

    return {
        title: data.procedure.meta_title || data.procedure.title,
        description: data.procedure.meta_desc || data.procedure.content,
    };
}

export default async function ProcedureDetailPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    const data = await getProcedureBySlug(slug);

    if (!data?.procedure) {
        notFound();
    }

    return (
        <>

            <ProcedureDetailClient
                data={data.procedure}
                otherProcedures={data.otherProcedures}
            />
        </>
    );
}