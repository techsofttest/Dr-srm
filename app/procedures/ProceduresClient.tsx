'use client';

import React from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import ProceduresList from '@/components/procedures/ProceduresList';

export default function ProceduresClient() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Specialised Procedures"
                category="What We Do"
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                        Advanced endovascular therapies and high-resolution neurointerventional imaging options to treat stroke, aneurysms, and vascular stenoses.
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-20"
                radialGradientOverride="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tealAccent/30 via-deepNavy/95 to-deepNavy"
                showSpear={true}
                bottomCut={true}
            />
            <ProceduresList />
        </main>
    );
}
