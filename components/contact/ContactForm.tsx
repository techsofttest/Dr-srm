'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    "Stroke / TIA Evaluation",
    "Brain Aneurysm Second Opinion",
    "AVM / dAVF Treatment Planning",
    "Carotid Stenosis Review",
    "Pulsatile Tinnitus Investigation",
    "Imaging Studies Review",
    "Other Neurovascular Query"
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
        if (!formData.category) newErrors.category = "Please select a query category";
        if (!formData.message.trim()) newErrors.message = "Message details are required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
            const response = await fetch(`${baseUrl}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                category: '',
                message: ''
            });
        } catch (error: any) {
            setErrors({ submit: error.message || 'Failed to send enquiry' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="lg:col-span-7 bg-gradient-to-br from-white to-zinc-50/70 border border-zinc-200 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-none">
            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <h4 className="text-xs font-bold tracking-[0.2em] text-tealAccent uppercase mb-3 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-tealAccent"></span>
                                Email Enquiry
                            </h4>
                            <h5 className="text-2xl font-serif font-bold text-deepNavy mb-3">
                                Send an Online Inquiry
                            </h5>
                            <p className="text-sm text-slate-500 font-light leading-relaxed">
                                Submit your clinical questions, case details, or requests for imaging scans review. Dr. Malla's team will evaluate your message and respond via email.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className={`w-full border ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-zinc-200 focus:border-tealAccent'} rounded-xl px-4 py-3 bg-white text-slate-800 text-sm focus:outline-none transition-colors font-light`}
                                />
                                {errors.name && <p className="text-[11px] text-red-500 font-medium">{errors.name}</p>}
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                    className={`w-full border ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-zinc-200 focus:border-tealAccent'} rounded-xl px-4 py-3 bg-white text-slate-800 text-sm focus:outline-none transition-colors font-light`}
                                />
                                {errors.phone && <p className="text-[11px] text-red-500 font-medium">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Email Address */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    className={`w-full border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-zinc-200 focus:border-tealAccent'} rounded-xl px-4 py-3 bg-white text-slate-800 text-sm focus:outline-none transition-colors font-light`}
                                />
                                {errors.email && <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>}
                            </div>

                            {/* Enquiry Category */}
                            <div className="space-y-2">
                                <label htmlFor="category" className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                                    Clinical Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className={`w-full border ${errors.category ? 'border-red-400 focus:border-red-500' : 'border-zinc-200 focus:border-tealAccent'} rounded-xl px-4 py-3 bg-white text-slate-800 text-sm focus:outline-none transition-colors font-light appearance-none`}
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 16px center',
                                        backgroundSize: '16px'
                                    }}
                                >
                                    <option value="" disabled>Select Clinical Query</option>
                                    {categories.map((cat, idx) => (
                                        <option key={idx} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                {errors.category && <p className="text-[11px] text-red-500 font-medium">{errors.category}</p>}
                            </div>
                        </div>

                        {/* Message details */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                                Query Details / Case History <span className="text-red-500">*</span>
                            </label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Please describe your symptoms, relevant diagnosis, or medical imaging inquiries in detail."
                                className={`w-full border ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-zinc-200 focus:border-tealAccent'} rounded-xl px-4 py-3 bg-white text-slate-800 text-sm focus:outline-none transition-colors font-light resize-none`}
                            />
                            {errors.message && <p className="text-[11px] text-red-500 font-medium">{errors.message}</p>}
                        </div>

                        {errors.submit && (
                            <p className="text-sm text-red-500 text-center font-medium bg-red-50 py-2 rounded-lg">{errors.submit}</p>
                        )}

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-deepNavy border border-[#1E2E4D] hover:bg-[#1E2E4D] hover:border-tealAccent text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 py-4 rounded-xl flex items-center justify-center gap-2 select-none overflow-hidden active:scale-97 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4 text-tealAccent" />
                                <span>{isSubmitting ? "Sending Enquiry..." : "Send Email Enquiry"}</span>
                            </button>
                        </div>
                    </motion.form>
                ) : (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-16 px-4 space-y-6"
                    >
                        <div className="p-4 bg-tealAccent/10 text-tealAccent rounded-full border border-tealAccent/25">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-serif font-bold text-deepNavy mb-3">
                                Enquiry Sent Successfully
                            </h4>
                            <p className="text-slate-600 text-sm font-light leading-relaxed max-w-md mx-auto">
                                Thank you for reaching out. Your medical query has been submitted to Dr. Soumya Ranjan Malla's neurovascular clinic. A response will be directed to your email address shortly.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="px-6 py-2.5 rounded-xl border border-zinc-200 hover:border-tealAccent hover:text-tealAccent text-xs font-semibold text-slate-600 transition-colors"
                        >
                            Submit Another Inquiry
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
