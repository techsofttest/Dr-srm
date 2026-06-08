'use client';

import React from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import CaseReviews from '@/components/patient-stories/CaseReviews';
import GoogleReviews from '@/components/patient-stories/GoogleReviews';

export default function PatientStoriesClient() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Patient Stories &amp; Clinical Outcomes"
                category="Clinical Outcomes"
                description={
                    <span className="text-xs sm:text-sm text-white/70 italic mt-3 block font-light">
                        (Published only with appropriate patient consent and privacy safeguards.)
                    </span>
                }
            />
            <CaseReviews />
            <GoogleReviews />
        </main>
    );
}
