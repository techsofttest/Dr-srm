import { Metadata } from 'next';
import Header from '@/components/global/Header';
import AcademicProfileClient from './AcademicProfileClient';

export const metadata: Metadata = {
    title: "Academic Profile & Publications | Dr. Soumya Ranjan Malla",
    description: "Explore the academic profile, invited lectures, conference faculty leadership, and peer-reviewed research publications of Dr. Soumya Ranjan Malla, Interventional Neuroradiologist in Kochi.",
};

export default function AcademicProfilePage() {
    return (
        <>
            <Header />
            <AcademicProfileClient />
        </>
    );
}
