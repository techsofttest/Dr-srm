import { Metadata } from 'next';
import Header from '@/components/global/Header';
import PatientEducationClient from './PatientEducationClient';

export async function generateMetadata(): Promise<Metadata> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/patienteducation`,
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

export default function PatientEducationPage() {
    return (
        <>
            <Header />
            <PatientEducationClient />
        </>
    );
}