import { Metadata } from 'next';
import Header from '@/components/global/Header';
import AboutHero from '@/components/about/AboutHero';
import EducationAndTraining from '@/components/about/EducationAndTraining';
import ProfessionalAffiliations from '@/components/about/ProfessionalAffiliations';
import PracticeLocation from '@/components/about/PracticeLocation';

export async function generateMetadata(): Promise<Metadata> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/about`,
            {
                next: { revalidate: 3600 },
            }
        );

        const data = await res.json();

        return {
            title: data?.seo?.title || 'Patient Education Centre',
            description: data?.seo?.description || '',
            keywords: data?.seo?.keywords || '',
        };
    } catch (error) {
        return {
            title: 'Patient Education Centre',
            description: '',
        };
    }
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen flex flex-col bg-white">
                <AboutHero />
                <EducationAndTraining />
                <ProfessionalAffiliations />
                <PracticeLocation />
            </main>
        </>
    );
}
