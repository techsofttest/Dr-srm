'use client';

import React, { useState } from 'react';
import InnerPageHero from '@/components/global/InnerPageHero';
import Button from '@/components/global/Button';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Stethoscope } from 'lucide-react';
interface TimeSlot {
    date: string;
    start_time: string;
    end_time: string;
}
interface Data {
contact: {   
    phone: string;
    email: string;
    time_slots: TimeSlot[];
}| undefined;
}
const DEFAULT_TIME_SLOTS = [
    {
        value: "Morning",
        label: "Morning (9:00 AM - 12:00 PM)",
    },
    {
        value: "Afternoon",
        label: "Afternoon (1:00 PM - 4:00 PM)",
    },
    {
        value: "Evening",
        label: "Evening (4:00 PM - 7:00 PM)",
    },
];
export default function BookAppointmentClient({contact}:Data) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

const [selectedDate, setSelectedDate] = useState("");
const [selectedTime, setSelectedTime] = useState("");

const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

const rawTimeSlots = contact?.time_slots || [];
const validTimeSlots = rawTimeSlots.filter((slot) => !slot.date || slot.date >= today);

const selectedDay = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).getDay()
    : null;

const customSlotsForDate = validTimeSlots.filter(
    (slot) => slot.date === selectedDate
);

const isSunday = selectedDay === 0;

// Helper to check if a time string falls within an hour range
const isWithinRange = (timeStr: string, startHour: number, endHour: number) => {
    if (!timeStr) return false;
    const hour = parseInt(timeStr.split(":")[0], 10);
    return hour >= startHour && hour < endHour;
};

// Generate slots dynamically based on the doctor's custom start/end time for that day
const getAvailableSlotsForDate = () => {
    if (customSlotsForDate.length === 0) return DEFAULT_TIME_SLOTS;

    const generatedSlots: { value: string; label: string }[] = [];

    customSlotsForDate.forEach((slot) => {
        const startH = parseInt(slot.start_time.split(":")[0], 10);
        const endH = parseInt(slot.end_time.split(":")[0], 10);

        // Define standard split windows
        const windows = [
            { name: "Morning", labelStart: "9:00 AM", labelEnd: "12:00 PM", min: 9, max: 12 },
            { name: "Afternoon", labelStart: "1:00 PM", labelEnd: "4:00 PM", min: 13, max: 16 },
            { name: "Evening", labelStart: "4:00 PM", labelEnd: "7:00 PM", min: 16, max: 19 },
        ];

        windows.forEach((win) => {
            // Check if the doctor's availability overlaps with this window
            if (startH < win.max && endH > win.min) {
                generatedSlots.push({
                    value: `${win.name} (${slot.start_time}-${slot.end_time})`,
                    label: `${win.name} (${win.labelStart} - ${win.labelEnd})`,
                });
            }
        });
    });

    return generatedSlots;
};

const availableSlots = isSunday
    ? []
    : customSlotsForDate.length > 0
        ? getAvailableSlotsForDate()
        : []; 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        const form = e.currentTarget;
        const fData = new FormData(form);
        const payload = {
            name: fData.get('name'),
            email: fData.get('email'),
            phone: fData.get('phone'),
            type: fData.get('type'),
            date: fData.get('date'),
            time: fData.get('time'),
            message: fData.get('message'),
        };

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
            const response = await fetch(`${baseUrl}/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || data.message || 'Something went wrong. Please try again.');
            }

            setIsSubmitted(true);
            form.reset();
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || 'Failed to submit form');
        } finally {
            setIsSubmitting(false);
        }
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
                            {errorMessage && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                                    {errorMessage}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Full Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="text" name="name" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Phone Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="tel" name="phone" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="email" name="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    {/* Consultation Type */}
                                    <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Consultation Type *</label>
                                        <div className="relative">
                                            <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <select
                                                required name="type"
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
                                        <label className="block text-sm font-bold text-deepNavy mb-2">
                                            Preferred Date *
                                        </label>

                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />

                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                value={selectedDate}
                                                min={new Date().toISOString().split("T")[0]}
                                                onChange={(e) => {
                                                    setSelectedDate(e.target.value);
                                                    setSelectedTime("");
                                                }}
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm text-slate-700"
                                            />
                                        </div>
                                    </div>
                                    {/* Preferred Time */}
                                  <div>
                                        <label className="block text-sm font-bold text-deepNavy mb-2">
                                            Preferred Time *
                                        </label>

                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />

                                            <select
                                                required
                                                name="time"
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                disabled={!selectedDate || availableSlots.length === 0}
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm text-slate-700 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <option value="" disabled>
                                                    {!selectedDate
                                                        ? "Select Time Slot"
                                                        : availableSlots.length === 0
                                                            ? "Doctor Unavailable"
                                                            : "Select Time Slot"}
                                                </option>

                                                {availableSlots.map((slot, index) => (
                                                    <option
                                                        key={index}
                                                        value={slot.value}
                                                    >
                                                        {slot.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    {/* Condition / Notes */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-deepNavy mb-2">Message / Reason for Visit *</label>
                                        <div className="relative">
                                            <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                                            <textarea required name="message" rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-tealAccent focus:ring-1 focus:ring-tealAccent transition-all text-sm resize-none" placeholder="Please describe your symptoms or reason for consultation..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Button variant="primary" type="submit" className="w-full md:w-auto px-8" >
                                        {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}