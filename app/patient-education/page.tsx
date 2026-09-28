import { Metadata } from 'next';
import Header from '@/components/global/Header';
import InnerPageHero from '@/components/global/InnerPageHero';
import ResourceGrid from '@/components/patient-education/ResourceGrid';
import FAQSection from '@/components/patient-education/FAQSection';
interface TopicData{
    type:string,
    title:string,
    content:string,
    href:string,
}
interface faqData{
    question:string;
    answer:string;
}

interface Data {
    faqs: faqData[];
    patient: TopicData[];
   patientedu:{
    span:string,
    title:string,
    discription:string,
    linkedin:string,
}
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}
async function getReferringData(): Promise<Data | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/patienteducation`,
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

export default async function PatientEducationPage() {
        const data = await getReferringData();
    return (
        <>
             <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Patient Education Centre"
                category="Educational Hub"
            />
            <ResourceGrid patient={data?.patient ??[]} patientedu={data?.patientedu} />
            <FAQSection  faqs={data?.faqs??[]}/>
        </main>
        </>
    );
}