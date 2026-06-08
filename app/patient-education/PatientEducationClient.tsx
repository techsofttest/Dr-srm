'use client';

import React from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import ResourceGrid from '@/components/patient-education/ResourceGrid';
import FAQSection from '@/components/patient-education/FAQSection';

export default function PatientEducationClient() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Patient Education Centre"
                category="Educational Hub"
            />
            <ResourceGrid />
            <FAQSection />
        </main>
    );
}
