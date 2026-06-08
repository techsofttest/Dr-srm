import { Metadata } from 'next';
import Header from '@/components/global/Header';
import AboutHero from '@/components/about/AboutHero';
import EducationAndTraining from '@/components/about/EducationAndTraining';
import ProfessionalAffiliations from '@/components/about/ProfessionalAffiliations';
import PracticeLocation from '@/components/about/PracticeLocation';

export const metadata: Metadata = {
    title: "About Dr. Soumya Ranjan Malla | Interventional Neuroradiologist in Kochi",
    description: "Meet Dr. Soumya Ranjan Malla, Consultant Interventional Neuroradiologist trained at AIIMS New Delhi and NIMHANS Bengaluru, specialising in minimally invasive endovascular treatment for stroke, brain aneurysms, and vascular disorders in Kochi.",
};

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
