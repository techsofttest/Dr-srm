'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import Button from '@/components/global/Button';
import WhatsAppIcon from '@/components/global/WhatsAppIcon';

export default function ContactInfo() {
    return (
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-zinc-50 to-zinc-100/60 border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-none">
            <div className="space-y-8">
                <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-tealAccent"></span>
                        Specialist Care
                    </h4>
                    <h5 className="text-2xl font-serif font-bold text-deepNavy">
                        Dr. Soumya Ranjan Malla
                    </h5>
                    <p className="text-xs font-bold text-tealAccent uppercase tracking-widest mt-1">
                        Interventional Neuroradiologist
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                        Stroke &amp; Neurovascular Specialist
                    </p>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 text-tealAccent rounded-xl shrink-0">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold text-deepNavy uppercase tracking-wider">
                            Primary Hospital Location
                        </h5>
                        <p className="text-sm text-slate-600 font-light leading-relaxed mt-1.5">
                            Renai Medicity, Kochi, Kerala, India
                        </p>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                            Department of Neurology &amp; Behavioural Sciences
                        </p>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 text-tealAccent rounded-xl shrink-0">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold text-deepNavy uppercase tracking-wider">
                            Consultation Hours
                        </h5>
                        <p className="text-sm text-slate-600 font-light leading-relaxed mt-1.5">
                            Monday – Saturday (By Appointment)
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-200 pt-8 mt-8 space-y-3.5">
                <h6 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Quick Communication Channels
                </h6>
                
                <Button
                    variant="primary"
                    href="tel:+919629997812"
                    className="w-full flex items-center justify-center gap-2"
                >
                    <Phone className="w-4 h-4" />
                    <span>Call for Appointment</span>
                </Button>

                <Button
                    variant="secondary"
                    href="https://wa.me/919629997812"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2"
                >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                </Button>

                <Button
                    variant="secondary"
                    href="https://maps.google.com/?q=Renai+Medicity+Kochi"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2"
                >
                    <MapPin className="w-4 h-4" />
                    <span>Google Maps Location</span>
                </Button>
            </div>
        </div>
    );
}
