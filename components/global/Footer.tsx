'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Conditions Treated', href: '/conditions' },
    { name: 'Procedures', href: '/#procedures' },
    { name: 'Patient Education', href: '/patient-education' },
    { name: 'For Referring Doctors', href: '/referring-doctors' },
    { name: 'Academic Profile', href: '/academic-profile' },
    { name: 'Contact', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-deepNavy text-white px-5 md:px-[80px] pt-20 pb-10 overflow-hidden border-t border-navyLight">
            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Areas of Focus Utility Ribbon */}
                <div className="w-full py-4 border-b border-white/10 mb-12 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-medium text-white/70">
                    <span className="text-tealAccent font-bold uppercase tracking-wider">Areas of Focus:</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {[
                            'Stroke Intervention',
                            'Brain Aneurysms',
                            'AVMs',
                            'dAVFs',
                            'Carotid Disease',
                            'Cerebral Angiography',
                            'Spinal Vascular Disorders',
                            'Neurovascular Imaging Review'
                        ].map((focus, idx) => (
                            <span key={idx} className="flex items-center gap-2">
                                {idx > 0 && <span className="text-white/20">•</span>}
                                <span>{focus}</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Branding Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="#home" className="inline-block w-fit">
                            <Image
                                src="/logo/logo.png"
                                alt="Dr. Soumya Ranjan Malla Logo"
                                width={260}
                                height={80}
                                className="h-14 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Providing advanced minimally invasive endovascular treatment for stroke, brain aneurysms, and complex neurovascular conditions.
                        </p>

                        {/* Emergency Services Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 font-bold text-xs uppercase tracking-wider w-fit animate-pulse">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <span>24×7 Emergency Stroke & Neurovascular Services</span>
                        </div>
                    </div>

                    {/* Quick Navigation links */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest text-tealAccent uppercase mb-6">
                            Quick Links
                        </h4>
                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {footerNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-white/70 hover:text-tealAccent transition-colors w-fit"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Primary Hospital Location */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest text-tealAccent uppercase mb-6">
                            Practice Location
                        </h4>
                        <div className="flex flex-col gap-4 text-sm text-white/70">
                            <div className="leading-relaxed flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-tealAccent shrink-0 mt-1" />
                                <span>
                                    <strong className="text-white block font-medium">Renai Medicity</strong>
                                    Department of Neurology & Behavioural Sciences, Palarivattom, Kochi, Kerala, India
                                </span>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Renai+Medicity+Kochi"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-tealAccent uppercase hover:underline underline-offset-4 mt-1"
                            >
                                View Hospital Location &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Contact details */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest text-tealAccent uppercase mb-6">
                            Contact Info
                        </h4>
                        <div className="flex flex-col gap-4 text-sm">
                            <a href="tel:+919629997812" className="flex items-center gap-2.5 text-white hover:text-tealAccent transition-colors">
                                <Phone className="w-4 h-4 text-tealAccent shrink-0" />
                                <span>+91 9629997812</span>
                            </a>
                            <a href="mailto:drsoumyaranjanrd@gmail.com" className="flex items-center gap-2.5 text-white hover:text-tealAccent transition-colors break-all">
                                <Mail className="w-4 h-4 text-tealAccent shrink-0" />
                                <span>drsoumyaranjanrd@gmail.com</span>
                            </a>
                            <div className="flex gap-4 mt-2">
                                <a
                                    href="https://www.linkedin.com/in/soumyaranjanmalla"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs font-bold tracking-wider text-white/60 hover:text-white uppercase transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <span className="text-white/20">|</span>
                                <a
                                    href="https://orcid.org/0000-0002-5541-1582"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs font-bold tracking-wider text-white/60 hover:text-white uppercase transition-colors"
                                >
                                    ORCID
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Disclaimer & Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                        <p className="text-[11px] text-white/40 leading-relaxed text-justify">
                            <strong className="text-white/60">Medical Disclaimer:</strong> The information provided on this website is for educational and informational purposes only and does not constitute medical advice. Use of this website does not establish a doctor-patient relationship. For medical emergencies, immediately call your local emergency services or visit the nearest hospital. All procedures carry inherent risks which should be discussed directly with a qualified medical professional.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shrink-0 text-xs text-white/50">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Use
                        </Link>
                        <p>
                            &copy; {new Date().getFullYear()} Dr. Soumya Ranjan Malla. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}