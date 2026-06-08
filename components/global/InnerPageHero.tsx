'use client';

import React from 'react';

interface InnerPageHeroProps {
    title: string;
    category?: string;
    description?: React.ReactNode;
    imageOpacityClass?: string; // e.g., "opacity-30", "opacity-25", "opacity-20"
    isRadial?: boolean; // If true, uses radial gradient and higher padding
    radialGradientOverride?: string; // Optional custom radial gradient
    showSpear?: boolean;
    bottomCut?: boolean;
    bgImage?: string; // Optional custom background image
}

export default function InnerPageHero({
    title,
    category,
    description,
    imageOpacityClass = '',
    isRadial = false,
    radialGradientOverride,
    showSpear = false,
    bottomCut = false,
    bgImage = '/banner-images/happy_patient_recovery.png',
}: InnerPageHeroProps) {
    // Determine overlay and padding classes based on isRadial
    const paddingClasses = isRadial ? 'pt-48 pb-32' : 'pt-44 pb-28';

    // Choose gradient overlay
    const gradientOverlay = isRadial
        ? (radialGradientOverride || 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deepNavy via-[#071124]/95 to-tealAccent/20')
        : 'bg-gradient-to-r from-[#071124] via-[#071124]/90 to-[#071124]/40';

    return (
        <section className={`relative w-full ${paddingClasses} bg-deepNavy text-white px-5 md:px-[80px] overflow-hidden`}>
            {/* Background image & overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={`${title} banner representation`}
                    className={`w-full h-full object-cover object-top ${imageOpacityClass}`}
                />
                <div className={`absolute inset-0 ${gradientOverlay}`} />
            </div>

            {/* Translucent CSS Spear shape background accent */}
            {showSpear && (
                <div
                    className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-96 pointer-events-none opacity-[0.08] bg-tealAccent hidden lg:block"
                    style={{ clipPath: 'polygon(50% 0%, 100% 30%, 65% 30%, 65% 100%, 35% 100%, 35% 30%, 0% 30%)' }}
                />
            )}

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className={isRadial ? 'max-w-4xl' : 'max-w-3xl'}>
                    {category && (
                        <span className="text-[10px] font-bold tracking-widest uppercase text-tealAccent bg-tealAccent/20 px-2.5 py-1 rounded-md mb-4 inline-block">
                            {category}
                        </span>
                    )}
                    <h1 className={`${isRadial ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'} font-serif leading-tight`}>
                        {title}
                    </h1>
                    {description && (
                        <div className="mt-4">
                            {description}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom white cut shape */}
            {bottomCut && (
                <div
                    className="absolute bottom-0 translate-y-[1px] inset-x-0 h-10 bg-white z-10"
                    style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }}
                />
            )}
        </section>
    );
}
