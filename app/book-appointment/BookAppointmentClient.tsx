'use client';

import React, { useState } from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import Button from '@/components/global/Button';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Stethoscope } from 'lucide-react';

export default function BookAppointmentClient() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this to your API endpoint
        setIsSubmitted(true);
    };

    return (
        <div className="flex-1 flex flex-col bg-zinc-50">
            <InnerPageHero
                title="Book an Appointment"
                category="Consultation"
                description={
                    <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
                        Schedule a clinic visit or online consultation for expert neurovascular evaluation and treatment planning.
                    </p>
                }
            />

            <section className="relative w-full py-16 md:py-24 px-5 md:px-[80px]">
                <div className="relative z-10 max-w-4xl mx-auto bg-white border border-zinc-200 rounded-3xl p-6 md:p-12 shadow-sm">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-deepNavy mb-4">
                                Request Received
                            </h3>
                            <p className="text-slate-600 mb-8 max-w-md mx-auto">
                                Thank you for requesting an appointment. Our clinical coordinator will contact you shortly to confirm your date and schedule.
                            </p>
                            <div className="flex justify-center">
                                <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                                    Book Another Appointment
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-10 text-center">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-deepNavy mb-3">
                                    Appointment Details
                                </h2>
                                <p className="text-slate-500 font-light">
                                    Please fill in your details and preferred schedule using the calendar below.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Full Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Phone Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="tel" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    {/* Consultation Type */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Consultation Type *</label>
                                        <div className="relative">
                                            <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <select
                                                required
                                                defaultValue=""
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm text-slate-700 appearance-none"
                                            >
                                                <option value="" disabled>Select Consultation Type</option>
                                                <option value="Direct Appointment Booking">Direct Appointment Booking</option>
                                                <option value="Second Opinion Consultation">Second Opinion Consultation</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Preferred Date */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Preferred Date *</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input type="date" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm text-slate-700" />
                                        </div>
                                    </div>
                                    {/* Preferred Time */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Preferred Time *</label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <select
                                                required
                                                defaultValue=""
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm text-slate-700 appearance-none"
                                            >
                                                <option value="" disabled>Select Time Slot</option>
                                                <option value="Morning">Morning (9:00 AM - 12:00 PM)</option>
                                                <option value="Afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                                                <option value="Evening">Evening (4:00 PM - 7:00 PM)</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Condition / Notes */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Message / Reason for Visit *</label>
                                        <div className="relative">
                                            <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                                            <textarea required rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm resize-none" placeholder="Please describe your symptoms or reason for consultation..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Button variant="primary" type="submit" className="w-full md:w-auto px-8">Submit Appointment Request</Button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}