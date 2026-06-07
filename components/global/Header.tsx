'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Menu,
    X,
    Phone,
    MessageCircle,
    Calendar,
    AlertCircle,
    Siren,
    ChevronDown,
    MapPin,
    Mail,
    GraduationCap,
    BookOpen,
    Stethoscope,
    Users,
    HeartPulse,
    Activity,
    UserRound,
    Home,
} from 'lucide-react';
import Button from '@/components/global/Button';

// ── Navigation Data ───────────────────────────────────────────────────────────

const layer2Nav = [
    { name: 'Home',    href: '#home',    icon: Home },
    { name: 'About',   href: '#about',   icon: UserRound },
    {
        name: 'Conditions',
        href: '#conditions',
        icon: HeartPulse,
        children: [
            { name: 'Stroke & Cerebrovascular',  href: '#conditions' },
            { name: 'Epilepsy & Seizures',        href: '#conditions' },
            { name: 'Headache Disorders',         href: '#conditions' },
            { name: 'Movement Disorders',         href: '#conditions' },
            { name: 'Neurodegenerative Diseases', href: '#conditions' },
            { name: 'Neuro-infections',           href: '#conditions' },
        ],
    },
    {
        name: 'Procedures',
        href: '#procedures',
        icon: Activity,
        children: [
            { name: 'IV Thrombolysis (tPA)',        href: '#procedures' },
            { name: 'Carotid Doppler Evaluation',   href: '#procedures' },
            { name: 'Botox Therapy',                href: '#procedures' },
            { name: 'Lumbar Puncture',              href: '#procedures' },
            { name: 'EEG & Epilepsy Monitoring',    href: '#procedures' },
        ],
    },
];

const layer3Nav = [
    { name: 'Patient Education', href: '#patient-education', icon: BookOpen },
    { name: 'Referring Doctors',  href: '#referring-doctors', icon: Stethoscope },
    { name: 'Academic Profile',   href: '#academic-profile',  icon: GraduationCap },
    { name: 'Testimonials',       href: '#testimonials',      icon: Users },
    { name: 'Contact',            href: '#contact',           icon: MapPin },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header() {
    const [isScrolled, setIsScrolled]       = useState(false);
    const [mobileOpen, setMobileOpen]       = useState(false);
    const [openDropdown, setOpenDropdown]   = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const close = () => setOpenDropdown(null);
        window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, []);

    const toggleDropdown = (e: React.MouseEvent, name: string) => {
        e.stopPropagation();
        setOpenDropdown(prev => (prev === name ? null : name));
    };

    return (
        <header className="fixed top-0 w-full z-50">

            {/* ── LAYER 1 · Utility Bar ───────────────────────────────────── */}
            <div className="hidden lg:block w-full bg-[#060f22] border-b border-white/5">
                <div className="max-w-[1600px] mx-auto px-5 md:px-[80px] flex items-center justify-between py-2 text-[11px] font-medium text-white/70">
                    {/* Left — contact */}
                    <div className="flex items-center gap-5">
                        <a
                            href="tel:+919629997812"
                            className="flex items-center gap-1.5 hover:text-tealAccent transition-colors"
                        >
                            <Phone className="w-3 h-3 text-tealAccent" />
                            <span>+91 96299 97812</span>
                        </a>

                        <span className="text-white/15">|</span>

                        <a
                            href="mailto:drsoumyaranjanrd@gmail.com"
                            className="flex items-center gap-1.5 hover:text-tealAccent transition-colors"
                        >
                            <Mail className="w-3 h-3 text-tealAccent" />
                            <span>drsoumyaranjanrd@gmail.com</span>
                        </a>

                        <span className="text-white/15">|</span>

                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-tealAccent" />
                            <span>Renai Medicity, Kochi</span>
                        </span>
                    </div>

                    {/* Right — actions */}
                    <div className="flex items-center gap-5">
                        <a
                            href="https://wa.me/919629997812"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 hover:text-tealAccent transition-colors"
                        >
                            <MessageCircle className="w-3 h-3 text-green-400" />
                            <span>WhatsApp</span>
                        </a>

                        <span className="text-white/15">|</span>

                        <Link
                            href="#contact"
                            className="flex items-center gap-1.5 hover:text-tealAccent transition-colors"
                        >
                            <Calendar className="w-3 h-3 text-tealAccent" />
                            <span>Book Appointment</span>
                        </Link>

                        <span className="text-white/15">|</span>

                        <Link
                            href="#emergency-stroke"
                            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold transition-colors"
                        >
                            <Siren className="w-3 h-3 animate-pulse" />
                            <span>Emergency Stroke Referral</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── LAYER 2 · Logo + Primary Nav ────────────────────────────── */}
            <div
                className={`relative z-10 w-full transition-all duration-300 border-b border-white/10 ${
                    isScrolled
                        ? 'bg-deepNavy/97 backdrop-blur-md shadow-xl py-2'
                        : 'bg-deepNavy/90 backdrop-blur-sm py-3'
                }`}
            >
                <div className="max-w-[1600px] mx-auto px-5 md:px-[80px] flex items-center justify-between gap-6">
                    {/* Logo */}
                    <Link href="#home" className="shrink-0 z-10">
                        <Image
                            src="/logo/logo.png"
                            alt="Dr. Soumya Ranjan Malla"
                            width={260}
                            height={72}
                            className="w-auto h-12 md:h-[60px] object-contain brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Layer-2 Nav */}
                    <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-white/85">
                        {layer2Nav.map((item) => {
                            const hasChildren = !!item.children;
                            return (
                                <div key={item.name} className="relative">
                                    {hasChildren ? (
                                        <button
                                            onClick={(e) => toggleDropdown(e, item.name)}
                                            className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-white/5 hover:text-tealAccent transition-colors"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`w-3 h-3 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-white/5 hover:text-tealAccent transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    )}

                                    {/* Dropdown */}
                                    {hasChildren && openDropdown === item.name && (
                                        <div
                                            className="absolute top-full left-0 mt-1 w-52 bg-[#0a1628] border border-white/10 rounded-xl shadow-2xl py-2 z-50"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {item.children!.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="block px-4 py-2 text-[12px] text-white/70 hover:text-tealAccent hover:bg-white/5 transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="primary"
                            href="#contact"
                            className="hidden xl:inline-flex px-5 py-2.5 text-[11px] tracking-wider shrink-0"
                        >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Consultation</span>
                        </Button>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="xl:hidden p-2 text-white hover:text-tealAccent transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── LAYER 3 · Secondary Nav Bar (Desktop only) ──────────────── */}
            <div className="relative z-0 hidden xl:block w-full bg-[#08132B]/95 backdrop-blur-md border-b border-white/5">
                <div className="max-w-[1600px] mx-auto px-5 md:px-[80px] flex items-center justify-between py-1.5">
                    <nav className="flex items-center gap-1 text-[12px] font-medium text-white/65">
                        {layer3Nav.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-3 py-1.5 rounded-md hover:bg-white/5 hover:text-tealAccent transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side tag line */}
                    <div className="flex items-center gap-2 text-[11px] text-white/40 italic">
                        <AlertCircle className="w-3 h-3 text-amber-400/60" />
                        <span>Interventional Neuroradiologist · Renai Medicity, Kochi</span>
                    </div>
                </div>
            </div>

            {/* ── MOBILE DRAWER ────────────────────────────────────────────── */}
            <div
                className={`fixed inset-x-0 top-0 bottom-0 bg-deepNavy z-40 transition-transform duration-300 xl:hidden ${
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                } overflow-y-auto`}
                style={{ paddingTop: '72px' }}
            >
                <div className="flex flex-col h-full px-6 py-6">
                    {/* All nav items combined for mobile */}
                    <nav className="flex flex-col gap-1 text-base font-medium text-white/90 mb-6">
                        {[...layer2Nav, ...layer3Nav].map((item) => {
                            const hasChildren = 'children' in item && item.children;
                            return (
                                <div key={item.name}>
                                    {hasChildren ? (
                                        <>
                                            <button
                                                onClick={(e) => toggleDropdown(e, item.name + '_mob')}
                                                className="w-full flex items-center justify-between gap-2 py-3 border-b border-white/5 hover:text-tealAccent transition-colors"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${openDropdown === item.name + '_mob' ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {openDropdown === item.name + '_mob' && (
                                                <div className="pl-6 flex flex-col gap-1 py-2">
                                                    {(item as typeof layer2Nav[2]).children!.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                                                            className="py-2 text-sm text-white/60 hover:text-tealAccent transition-colors border-b border-white/5"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-3 border-b border-white/5 hover:text-tealAccent transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Mobile quick actions */}
                    <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/10">
                        <a
                            href="tel:+919629997812"
                            className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors border border-white/10"
                        >
                            <Phone className="w-4 h-4 text-tealAccent" />
                            Call: +91 96299 97812
                        </a>
                        <a
                            href="https://wa.me/919629997812"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors border border-white/10"
                        >
                            <MessageCircle className="w-4 h-4 text-green-400" />
                            WhatsApp Enquiry
                        </a>
                        <Button
                            variant="primary"
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="w-full"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Consultation</span>
                        </Button>
                        <Button
                            variant="danger"
                            href="#emergency-stroke"
                            onClick={() => setMobileOpen(false)}
                            className="w-full"
                        >
                            <Siren className="w-4 h-4 animate-pulse" />
                            <span>Emergency Stroke Referral</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}