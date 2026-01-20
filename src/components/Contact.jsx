"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, ChevronDown, Globe } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        enquiryType: 'Organization',
        organization: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: 'India (भारत)',
        industryFocus: 'CNC machines',
        message: '',
        acceptPrivacy: false,
        receiveUpdates: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.acceptPrivacy) {
            alert("Please accept the privacy policy to continue.");
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                // Reset form but keep defaults
                setFormData({
                    enquiryType: 'Organization',
                    organization: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    country: 'India (भारत)',
                    industryFocus: 'CNC machines',
                    message: '',
                    acceptPrivacy: false,
                    receiveUpdates: false
                });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section className="py-24 bg-slate-50 min-h-screen" id="contact">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Info Side */}
                    <div className="md:w-1/3 p-12 bg-slate-900 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-black mb-6 leading-tight">Contact <br /><span className="text-teal-400">Sales</span></h2>
                            <p className="text-slate-400 mb-12 leading-relaxed font-medium">
                                Choose the best way to connect with us. Our team is ready to help you optimize your manufacturing workflow.
                            </p>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest mb-2 font-mono">Email</p>
                                    <p className="text-white font-bold text-lg">info@ency.cam</p>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-teal-400 uppercase tracking-widest mb-2 font-mono">Support</p>
                                    <p className="text-white font-bold text-lg">support@ency.cam</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Global Support</p>
                                    <p className="text-sm font-bold">24/7 Assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-2/3 p-12 bg-white">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-20 h-20 bg-teal-50 flex items-center justify-center rounded-3xl mb-8">
                                    <CheckCircle size={48} className="text-teal-500" />
                                </div>
                                <h3 className="text-3xl font-black mb-4 text-slate-900">Message Sent!</h3>
                                <p className="text-slate-500 font-medium max-w-xs mx-auto mb-10">
                                    Thank you for reaching out. One of our experts will contact you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-3 bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Enquiry Option */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-4">Please select an enquiry option:</label>
                                    <div className="flex gap-8">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="enquiryType"
                                                value="Organization"
                                                checked={formData.enquiryType === 'Organization'}
                                                onChange={handleChange}
                                                className="hidden"
                                            />
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.enquiryType === 'Organization' ? 'border-teal-500' : 'border-slate-300'}`}>
                                                {formData.enquiryType === 'Organization' && <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />}
                                            </div>
                                            <span className={`font-bold transition-colors ${formData.enquiryType === 'Organization' ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>Organization</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="enquiryType"
                                                value="Individual"
                                                checked={formData.enquiryType === 'Individual'}
                                                onChange={handleChange}
                                                className="hidden"
                                            />
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.enquiryType === 'Individual' ? 'border-teal-500' : 'border-slate-300'}`}>
                                                {formData.enquiryType === 'Individual' && <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />}
                                            </div>
                                            <span className={`font-bold transition-colors ${formData.enquiryType === 'Individual' ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>Individual</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Organization Field - Conditional */}
                                {formData.enquiryType === 'Organization' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                    >
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Organization*</label>
                                        <input
                                            required={formData.enquiryType === 'Organization'}
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium"
                                            placeholder="Company Name"
                                        />
                                    </motion.div>
                                )}

                                {/* Name row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">First Name*</label>
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Last Name*</label>
                                        <input
                                            required
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Your Email*</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Your phone*</label>
                                        <div className="relative flex items-center">
                                            <div className="absolute left-4 flex items-center gap-2 pointer-events-none">
                                                <span className="text-xl">🇮🇳</span>
                                                <span className="text-slate-400 font-bold border-r border-slate-200 pr-2">+91</span>
                                            </div>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pl-24 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium"
                                                placeholder="00000 00000"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Country Selection */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Choose your country/region*</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                            <span className="text-xl">🇮🇳</span>
                                        </div>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pl-12 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all font-medium appearance-none"
                                        >
                                            <option value="India (भारत)">India (भारत)</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    </div>
                                </div>

                                {/* Industry Focus */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-4">Specify your industry focus</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['CNC machines', 'Industrial robots', 'Both', 'Other (specify in message)'].map((option) => (
                                            <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="industryFocus"
                                                    value={option}
                                                    checked={formData.industryFocus === option}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.industryFocus === option ? 'border-teal-500' : 'border-slate-300'}`}>
                                                    {formData.industryFocus === option && <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />}
                                                </div>
                                                <span className={`text-sm font-bold transition-colors ${formData.industryFocus === option ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all resize-none font-medium"
                                        placeholder="Enter your message here..."
                                    />
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="acceptPrivacy"
                                            checked={formData.acceptPrivacy}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.acceptPrivacy ? 'bg-teal-500 border-teal-500' : 'border-slate-300 bg-white'}`}>
                                            {formData.acceptPrivacy && <CheckCircle size={14} className="text-white" />}
                                        </div>
                                        <span className="text-sm font-bold text-slate-600">
                                            I accept <a href="#" className="text-teal-600 hover:text-teal-700">privacy policy*</a>
                                        </span>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="receiveUpdates"
                                            checked={formData.receiveUpdates}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.receiveUpdates ? 'bg-teal-500 border-teal-500' : 'border-slate-300 bg-white'}`}>
                                            {formData.receiveUpdates && <CheckCircle size={14} className="text-white" />}
                                        </div>
                                        <span className="text-sm font-bold text-slate-600">
                                            I would like to receive emails about TRIOVIBE product updates, events, and news
                                        </span>
                                    </label>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="w-full bg-slate-900 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl hover:shadow-teal-500/20 disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Processing...' : 'Submit Request'}
                                    <Send size={18} />
                                </button>
                                {status === 'error' && <p className="text-red-500 text-sm text-center font-bold">Failed to send message. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

