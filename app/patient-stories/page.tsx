import { Metadata } from 'next';
import Header from '@/components/global/Header';
import PatientStoriesClient from './PatientStoriesClient';

export const metadata: Metadata = {
    title: "Patient Stories & Clinical Outcomes | Dr. Soumya Ranjan Malla",
    description: "Read verified case reviews and patient stories for Dr. Soumya Ranjan Malla, Interventional Neuroradiologist in Kochi. Clinical outcomes for stroke mechanical thrombectomy, complex aneurysm diversion, and subdural haematoma MMA embolisation.",
};

export default function PatientStoriesPage() {
    return (
        <>
            <Header />
            <PatientStoriesClient />
        </>
    );
}
