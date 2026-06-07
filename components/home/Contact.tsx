'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Mail, MapPin, Clock, AlertCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-24 bg-white px-5 md:px-[80px] border-b border-slate-200 overflow-hidden">
            {/* Background decorative image */}
            <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
                <Image
                    src="/clinic_care_bg.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Left Column: Booking & Details */}
                    <div className="w-full lg:w-6/12 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-tealAccent"></span>
                                Appointments
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepNavy leading-tight mb-6">
                                Book a Consultation
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10 font-light">
                                Whether you require evaluation for stroke, aneurysm, vascular malformation, carotid disease, pulsatile tinnitus or review of imaging and treatment options, specialised neurovascular care is available.
                            </p>
                        </div>

                        {/* Hospital Practice Details Card */}
                        <div className="bg-bgLight/50 border border-slate-300 rounded-2xl p-8 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white border border-slate-300 text-tealAccent rounded-xl shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-tealAccent uppercase tracking-widest mb-1">
                                        Primary Practice Location
                                    </h4>
                                    <h5 className="text-xl font-serif font-bold text-deepNavy mb-2">
                                        Renai Medicity, Kochi
                                    </h5>
                                    <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                                        Department of Neurology & Behavioural Sciences, Palarivattom, Kochi, Kerala, India
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-xs font-bold text-tealAccent">
                                        <a 
                                            href="https://maps.google.com/?q=Renai+Medicity+Kochi" 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                                        >
                                            <span>View Google Maps Location</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 24x7 Banner inside contact */}
                        <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-800 w-full">
                            <AlertCircle className="w-6 h-6 text-red-700 shrink-0" />
                            <div>
                                <h6 className="text-sm font-bold leading-none mb-1">
                                    24×7 Stroke & Neurovascular Intervention Services
                                </h6>
                                <p className="text-xs text-red-700 font-light">
                                    For medical emergencies, please coordinate transfer immediately via the emergency helpline.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interaction Channels */}
                    <div className="w-full lg:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-6 self-stretch">
                        
                        {/* Direct Line */}
                        <a 
                            href="tel:+919629997812"
                            className="bg-bgLight/50 border border-slate-300 hover:border-tealAccent/40 hover:bg-bgLight rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 animate-none"
                        >
                            <div className="p-3 bg-white border border-slate-300 text-tealAccent rounded-xl w-fit mb-8 group-hover:scale-105 transition-transform duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    Appointment Hotline
                                </h4>
                                <h5 className="text-lg font-bold text-deepNavy group-hover:text-tealAccent transition-colors mb-2 flex items-center gap-1.5">
                                    <span>Call Now</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </h5>
                                <p className="text-sm font-semibold text-deepNavy font-mono leading-none">
                                    +91 9629997812
                                </p>
                            </div>
                        </a>

                        {/* WhatsApp Enquiry */}
                        <a 
                            href="https://wa.me/919629997812"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-bgLight/50 border border-slate-300 hover:border-tealAccent/40 hover:bg-bgLight rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 animate-none"
                        >
                            <div className="p-3 bg-white border border-slate-300 text-tealAccent rounded-xl w-fit mb-8 group-hover:scale-105 transition-transform duration-300">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    WhatsApp Consultation
                                </h4>
                                <h5 className="text-lg font-bold text-deepNavy group-hover:text-tealAccent transition-colors mb-2 flex items-center gap-1.5">
                                    <span>Chat Online</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </h5>
                                <p className="text-xs text-slate-500 font-light">
                                    Send reports and schedule follow-ups
                                </p>
                            </div>
                        </a>

                        {/* Email Enquiry */}
                        <a 
                            href="mailto:drsoumyaranjanrd@gmail.com"
                            className="bg-bgLight/50 border border-slate-300 hover:border-tealAccent/40 hover:bg-bgLight rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 animate-none"
                        >
                            <div className="p-3 bg-white border border-slate-300 text-tealAccent rounded-xl w-fit mb-8 group-hover:scale-105 transition-transform duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    Consultant Email
                                </h4>
                                <h5 className="text-lg font-bold text-deepNavy group-hover:text-tealAccent transition-colors mb-2 flex items-center gap-1.5">
                                    <span>Email Us</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </h5>
                                <p className="text-xs text-slate-500 break-all font-light">
                                    drsoumyaranjanrd@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* Hospital Timings */}
                        <div className="bg-bgLight/50 border border-slate-300 rounded-2xl p-8 flex flex-col justify-between">
                            <div className="p-3 bg-white border border-slate-300 text-tealAccent rounded-xl w-fit mb-8">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    Consultation Timings
                                </h4>
                                <h5 className="text-lg font-bold text-deepNavy mb-2">
                                    Available by Appointment
                                </h5>
                                <p className="text-xs text-slate-500 font-light">
                                    Monday &bull; Saturday (Renai Medicity)
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
