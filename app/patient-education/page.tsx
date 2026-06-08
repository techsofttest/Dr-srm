import { Metadata } from 'next';
import Header from '@/components/global/Header';
import PatientEducationClient from './PatientEducationClient';

export const metadata: Metadata = {
    title: "Patient Education Centre | Dr. Soumya Ranjan Malla",
    description: "Learn about stroke warning signs, mechanical thrombectomy, brain aneurysms, AVMs, and dAVFs. Access clinical guides, videos, and articles by Dr. Soumya Ranjan Malla, Interventional Neuroradiologist in Kochi.",
};

export default function PatientEducationPage() {
    return (
        <>
            <Header />
            <PatientEducationClient />
        </>
    );
}
