import { Metadata } from 'next';
import Header from '@/components/global/Header';
import ReferringDoctorsClient from './ReferringDoctorsClient';

export const metadata: Metadata = {
    title: "For Referring Physicians | Dr. Soumya Ranjan Malla",
    description: "Refer patients to Dr. Soumya Ranjan Malla, Consultant Interventional Neuroradiologist in Kochi. 24/7 dedicated neurovascular referral line for stroke mechanical thrombectomy, brain aneurysms, carotid disease, and spinal vascular disorders.",
};

export default function ReferringDoctorsPage() {
    return (
        <>
            <Header />
            <ReferringDoctorsClient />
        </>
    );
}
