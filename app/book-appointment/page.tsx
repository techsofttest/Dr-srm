import { Metadata } from 'next';
import Header from '@/components/global/Header';
import BookAppointmentClient from '@/components/global/BookAppointmentClient';

export async function generateMetadata(): Promise<Metadata> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/book-appointment`,
            {
                next: { revalidate: 3600 },
            }
        );

        const data = await res.json();

        return {
            title: data?.seo?.title || 'Book Appointment',
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