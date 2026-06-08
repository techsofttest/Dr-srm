import { Metadata } from 'next';
import Header from '@/components/global/Header';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact & Appointments | Dr. Soumya Ranjan Malla",
    description: "Book an appointment or request an emergency neurovascular consultation with Dr. Soumya Ranjan Malla in Kochi. Accessible via phone, email, and WhatsApp.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <ContactClient />
        </>
    );
}
