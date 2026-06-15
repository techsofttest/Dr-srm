'use client';

import React, { useEffect, useState } from 'react';
import { Award, GraduationCap } from 'lucide-react';

export default function LeadershipFaculty() {
    const [academicData, setAcademicData] = useState<any>(null);

    useEffect(() => {
        async function fetchAcademic() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/accademic`
                );

                const data = await res.json();

                setAcademicData(data);
            } catch (err) {
                console.error('Error fetching academic data:', err);
            }
        }

        fetchAcademic();
    }, []);

    const academicProfile = academicData?.academicProfile;
    const education = academicData?.education;

    return (
        <section className="relative w-full py-24 md:py-32 bg-white px-5 md:px-[80px] border-b border-zinc-200 overflow-hidden">

            <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-deepNavy/5 blur-[110px] pointer-events-none z-0" />
            <div className="absolute bottom-12 right-12 w-64 h-64 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto">

                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Leadership & Faculty
                    </h2>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight">
                        Conference Faculty & Academic Leadership
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Faculty */}
                    <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/60 border border-zinc-200 p-8 rounded-2xl hover:border-tealAccent/45 transition-colors duration-300">

                        <div className="p-3 bg-white border border-zinc-200 text-tealAccent rounded-xl w-fit mb-6">
                            <Award className="w-6 h-6" />
                        </div>

                        <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                            {academicProfile?.title || 'Invited Faculty'}
                        </h4>

                        <div
                            className="text-slate-600 text-sm sm:text-base font-light leading-relaxed prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: academicProfile?.content || '',
                            }}
                        />
                    </div>

                    {/* Leadership */}
                    <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/60 border border-zinc-200 p-8 rounded-2xl hover:border-tealAccent/45 transition-colors duration-300">

                        <div className="p-3 bg-white border border-zinc-200 text-tealAccent rounded-xl w-fit mb-6">
                            <GraduationCap className="w-6 h-6" />
                        </div>

                        <h4 className="text-xl font-serif font-bold text-deepNavy mb-3">
                            {education?.title || 'Academic Leadership'}
                        </h4>

                        <div
                            className="text-slate-600 text-sm sm:text-base font-light leading-relaxed prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: education?.content || '',
                            }}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}