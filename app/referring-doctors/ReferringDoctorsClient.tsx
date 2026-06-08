'use client';

import React from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import CollaborationHotline from '@/components/referring-doctors/CollaborationHotline';
import ReferralScope from '@/components/referring-doctors/ReferralScope';

export default function ReferringDoctorsClient() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <InnerPageHero
                title="For Referring Doctors"
                category="Physician Referrals"
            />
            <CollaborationHotline />
            <ReferralScope />
        </main>
    );
}
