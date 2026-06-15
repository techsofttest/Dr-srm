'use client';
import React, { useEffect, useState } from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import EmergencyStrokeBanner from '@/components/global/EmergencyStrokeBanner';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactClient() {
    const [emergency, setEmergency] = useState({
    title: '',
    heading: '',
    symptoms: [],
    description: '',
});
const [contact, setContact] = useState({ phone: ''});

useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`)
        .then(res => res.json())
        .then(data => {
            setEmergency(data.emergency);
            setContact(data.contact);
        });
}, []);
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
           <InnerPageHero
            title="Contact & Appointments"
            category="Get In Touch"
        />

        <EmergencyStrokeBanner
            title={emergency.title}
            symptoms={emergency.symptoms}
            description={emergency.description}
            ctaText="24×7 Emergency Helpline"
            ctaHref={`tel:${contact.phone}`}
            isWarningIcon={true}
            paddingClass="pt-20 pb-10"
        />

            <section className="relative w-full pt-10 pb-24 md:pb-32 bg-white px-5 md:px-[80px] overflow-hidden">
                {/* Background Saturated Radial Gradients & Spheres */}
                <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] rounded-full bg-tealAccent/12 blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-deepNavy/5 blur-[125px] pointer-events-none z-0" />
                <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-tealAccent/10 pointer-events-none z-0" />

                <div className="relative z-10 max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
