import { Metadata } from 'next';
import Header from '@/components/global/Header';
import InnerPageHero from '@/components/global/InnerPageHero';
import LeadershipFaculty from '@/components/academic-profile/LeadershipFaculty';
import ResearchPublications from '@/components/academic-profile/ResearchPublications';

interface Data {
   education:{ 
    title: string;
    content: string;
 };
  academicProfile:{ 
    title: string;
    content: string;
 };
    contact:{ 
    orcid: string;
    research: string;
    googleScholar: string;
 };
  observerships:{ 
    title: string;
    description: string;
    list: string[];
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
            `${process.env.NEXT_PUBLIC_API_URL}/accademic`,
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
export default async function AcademicProfilePage() {
    const data = await getReferringData();
    return (
        <>
            <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Academic Profile"
                category="Contributions & Publications"
            />
            {data?.education && data.academicProfile &&(
            <LeadershipFaculty education={data?.education} academicProfile={data?.academicProfile} />)}
            {data?.observerships && data.contact &&(
            <ResearchPublications observerships={data?.observerships} contact={data?.contact} />)}
        </main>
        </>
    );
}
