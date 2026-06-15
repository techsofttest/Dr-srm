'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, AlertTriangle } from 'lucide-react';
import Button from '@/components/global/Button';
import WhatsAppIcon from '@/components/global/WhatsAppIcon';
interface ContactData {
    address: string;
    location: string;
    phone: string;
    email: string;
    whatsapp: string;
    orcid: string;
    linkedin: string;
    available: string;
}
export default function PracticeLocation() {
    const [contact, setContact] = useState<ContactData | null>(null);
    
        useEffect(() => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`) // Adjust endpoint if needed
                .then(res => res.json())
                .then(json => setContact(json.contact))
                .catch(err => console.error("Failed to fetch contact data", err));
        }, []);
    
        if (!contact) return null; // Or a loading skeleton
    return (
        <section className="relative w-full py-24 bg-bgLight px-5 md:px-[80px] overflow-hidden">
            {/* Background layout decoration */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <Image
                    src="/medical_referral_bg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent" />
                        Clinical Headquarters
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-4">
                        Practice Location
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                        Providing specialised neurovascular consultation, advanced cerebrovascular imaging and minimally invasive endovascular treatment for stroke, brain aneurysms and vascular disorders.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
                    {/* Renai Medicity details */}
                    <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-bgLight border border-slate-200 text-tealAccent rounded-lg shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h4 className="text-xs font-bold tracking-[0.15em] text-tealAccent uppercase">
                                    Primary Practice Location
                                </h4>
                            </div>
                                        <div 
                                            className="text-sm text-slate-600 font-light leading-relaxed mb-4 
                                            [&_strong]:text-2xl [&_strong]:font-serif [&_strong]:font-bold [&_strong]:text-deepNavy [&_strong]:block [&_strong]:mb-2"
                                            dangerouslySetInnerHTML={{ __html: contact?.address || '' }}
                                        />
                        </div>

                        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div className="flex items-center gap-2.5 text-slate-600">
                                <Clock className="w-4 h-4 text-tealAccent shrink-0" />
                                <span className="text-xs font-medium">
                                    <strong>Consultation Hours:</strong> {contact.available}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-tealAccent bg-bgLight border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-tealAccent" />
                                Available by Appointment
                            </div>
                        </div>
                    </div>

                    {/* Call To Actions */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-8">
                        <div>
                            <h4 className="text-xs font-bold tracking-[0.15em] text-tealAccent uppercase mb-2">
                                Scheduling &amp; Enquiries
                            </h4>
                            <p className="text-xs text-slate-500 font-light mb-6">
                                Connect with our clinic directly via the following options to schedule consultations, request references or locate the hospital.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {/* Booking - Primary Teal */}
                            <Button
                                variant="primary"
                                href={`tel:${contact.phone}`}
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Book an Appointment</span>
                            </Button>

                            {/* WhatsApp - Secondary Outline */}
                            <Button
                                variant="secondary"
                                href={contact.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                <span>WhatsApp Enquiry</span>
                            </Button>

                            {/* Maps Location - Secondary Outline */}
                            <Button
                                variant="secondary"
                                href={contact.location}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>View Hospital Location</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Emergency notice */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-red-50 border border-red-200 text-red-800">
                    <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                    <div>
                        <h6 className="text-sm font-bold mb-0.5">
                            24×7 Stroke &amp; Neurovascular Intervention Services
                        </h6>
                        <p className="text-xs text-red-700 font-light leading-relaxed">
                            For emergent cases including acute ischemic stroke and ruptured aneurysms, please contact the emergency team immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
