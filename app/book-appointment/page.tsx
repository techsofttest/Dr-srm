import { Metadata } from 'next';
import Header from '@/components/global/Header';
import BookAppointmentClient from '@/components/global/BookAppointmentClient';

export const metadata: Metadata = {
    title: "Book an Appointment | Dr. Soumya Ranjan Malla",
    description: "Schedule a consultation with Dr. Soumya Ranjan Malla, Interventional Neuroradiologist in Kochi. Book a clinic visit or online review of your medical reports.",
};

export default function BookAppointmentPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen flex flex-col bg-white">
                <BookAppointmentClient />
            </main>
        </>
    );
}