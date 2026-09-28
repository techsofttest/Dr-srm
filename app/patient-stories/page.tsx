import { Metadata } from 'next';
import Header from '@/components/global/Header';
import InnerPageHero from '@/components/global/InnerPageHero';
import CaseReviews from '@/components/patient-stories/CaseReviews';
import GoogleReviews from '@/components/patient-stories/GoogleReviews'
interface CaseStudy {
   story:{ sub_title: string;
    title: string;
    description: string;
    patient: string; }[];
     seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}

async function getReferringData(): Promise<CaseStudy | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/testimony`,
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
export default async function PatientStoriesPage() {
    const data = await getReferringData();
    return (
        <>
             <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Patient Stories &amp; Clinical Outcomes"
                category="Clinical Outcomes"
                description={
                    <span className="text-xs sm:text-sm text-white/70 italic mt-3 block font-light">
                        (Published only with appropriate patient consent and privacy safeguards.)
                    </span>
                }
            />
            <CaseReviews story={data?.story ?? []}/>
            <GoogleReviews />
        </main>
        </>
    );
}
