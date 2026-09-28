import { Metadata } from 'next';
import Header from '@/components/global/Header';
import InnerPageHero from '@/components/global/InnerPageHero';
import ProceduresList from '@/components/procedures/ProceduresList';
interface ProceduresList {
    id: number;
    slug: string;
    listingTitle: string;
    listingDescription: string; // Used in place of 'items'
    listingDetails:string[];
    image: string;
    listingActionText: string;
    icon:string
}

interface Data {
    procedure: ProceduresList[];
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}
async function getReferringData(): Promise<Data | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/procedure`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch referring doctors data");
        }

        return await res.json();
    } catch (error) {
        console.error("Referring doctors API error:", error);
        return null;
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const data = await getReferringData();

    return {
        title: data?.seo?.title || "Patient Education Centre",
        description: data?.seo?.description || "",
        keywords: data?.seo?.keywords || "",
    };
}
export default async function ProceduresPage() {
     const data = await getReferringData();
    return (
        <>
            <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Specialised Procedures"
                category="What We Do"
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                        Advanced endovascular therapies and high-resolution neurointerventional imaging options to treat stroke, aneurysms, and vascular stenoses.
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-20"
                radialGradientOverride="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tealAccent/30 via-deepNavy/95 to-deepNavy"
                showSpear={true}
                bottomCut={true}
            />
            {data?.procedure &&(
            <ProceduresList proceduresList={data?.procedure} />)}
        </main>
        </>
    );
}
