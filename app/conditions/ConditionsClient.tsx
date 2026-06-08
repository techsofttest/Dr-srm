'use client';

import React from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import ConditionsGrid from '@/components/conditions/ConditionsGrid';

export default function ConditionsClient() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="Conditions Treated"
                category="Conditions We Treat"
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                        Specialised minimally invasive endovascular care for complex neurovascular conditions. Access advanced clinical treatment options in Kochi.
                    </p>
                }
                isRadial={true}
                imageOpacityClass="opacity-30"
                showSpear={true}
                bottomCut={true}
            />
            <ConditionsGrid />
        </main>
    );
}

