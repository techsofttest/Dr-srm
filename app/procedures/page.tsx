import { Metadata } from 'next';
import Header from '@/components/global/Header';
import ProceduresClient from './ProceduresClient';

export const metadata: Metadata = {
    title: "Specialised Procedures | Dr. Soumya Ranjan Malla",
    description: "Advanced endovascular interventions including mechanical thrombectomy, brain aneurysm coiling, flow diversion, carotid stenting, and diagnostic angiography in Kochi.",
};

export default function ProceduresPage() {
    return (
        <>
            <Header />
            <ProceduresClient />
        </>
    );
}
