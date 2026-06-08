'use client';

import React from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import LeadershipFaculty from '@/components/academic-profile/LeadershipFaculty';
import ResearchPublications from '@/components/academic-profile/ResearchPublications';

export default function AcademicProfileClient() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Academic Profile"
                category="Contributions & Publications"
            />
            <LeadershipFaculty />
            <ResearchPublications />
        </main>
    );
}

