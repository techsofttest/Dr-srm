import { Metadata } from 'next';
import Header from '@/components/global/Header';
import AboutHero from '@/components/about/AboutHero';
import EducationAndTraining from '@/components/about/EducationAndTraining';
import ProfessionalAffiliations from '@/components/about/ProfessionalAffiliations';
import PracticeLocation from '@/components/about/PracticeLocation';

interface EducationItem {
    level: string;
    degree: string;
    institution: string;
    description: string;
}

interface EducationData {
    cms_title: string;
    items: EducationItem[];
}

interface ObservershipItem {
    title: string;
    institution: string;
    description: string;
}

interface ObservershipData {
    cms_title: string;
    items: ObservershipItem[];
}
interface AffiliationItem {
    name: string;
    short: string;
}
interface Data {
    affiliation?: { 
    heading: string;
    international: AffiliationItem[];
    national: AffiliationItem[];
    };
    education?: EducationData;
    observerships?: ObservershipData;
    aboutHero: {
        cms_title: string;
        name: string;
        designation: string;
        quote: string;
        content: string;
        image: string;
    };
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}
async function getReferringData(): Promise<Data | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/about`,
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
export default async function AboutPage() {
    const data = await getReferringData();
    return (
        <>
            <main className="relative min-h-screen flex flex-col bg-white">
                {data?.aboutHero &&(
                <AboutHero aboutHero={data?.aboutHero} />)}
                {data?.education && data.observerships && (
                <EducationAndTraining education={data?.education} observerships={data?.observerships} />)}
                {data?.affiliation &&(
                <ProfessionalAffiliations affiliation={data?.affiliation} />)}
                <PracticeLocation />
            </main>
        </>
    );
}
