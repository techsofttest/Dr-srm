import { Metadata } from 'next';
import Header from '@/components/global/Header';
import ConditionsClient from './ConditionsClient';

export const metadata: Metadata = {
    title: "Conditions Treated | Dr. Soumya Ranjan Malla",
    description: "Expert endovascular evaluation and treatment for stroke, brain aneurysms, vascular malformations (AVMs, dAVFs), carotid stenosis, and spinal vascular disorders in Kochi, Kerala.",
};

export default function ConditionsPage() {
    return (
        <>
            <Header />
            <ConditionsClient />
        </>
    );
}
