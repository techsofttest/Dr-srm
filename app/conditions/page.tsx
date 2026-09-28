import { Metadata } from 'next';
import Header from '@/components/global/Header';
import InnerPageHero from '@/components/global/InnerPageHero';
import ConditionsGrid from '@/components/conditions/ConditionsGrid';
interface ServiceCategory {
    id: number;
    slug: string;
    listingTitle: string;
    listingSubtitle: string;
    listingDescription: string; // Used in place of 'items'
    image: string;
    listingActionText: string;
}

interface Data {
    condition: ServiceCategory[];
    contact: {phone: string;};
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}
async function getReferringData(): Promise<Data | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/condition`,
            {
                next: { revalidate: 3600 },
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
export default async function ConditionsPage() {
  const data = await getReferringData();

    return (
        <>
                   <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Conditions Treated"
                category="Conditions We Treat"
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                        Specialised minimally invasive endovascular care for complex neurovascular conditions. Access advanced clinical treatment options in Kochi.
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-30"
                showSpear={true}
                bottomCut={true}
            />
            {data?.condition&&(
            <ConditionsGrid condition={data?.condition ?? []} />
                )}
            </main>
        </>
    );
}
