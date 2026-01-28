"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, ChevronDown, Globe, ArrowRight, Handshake, Users, Target, Award, Clock, Shield } from 'lucide-react';

const BecomeADealer = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
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
            const res = await fetch('/api/become-dealer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                // Reset form but keep defaults
                setFormData({
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
        } catch (error) {
            setStatus('error');
        }
    };

    const sections = [
        { id: 'intro', title: 'Intro' },
        { id: 'who-can-become', title: 'Who Can Become a Partner?' },
        { id: 'who-looking-for', title: 'Who Are We Looking For?' },
        { id: 'why-choose', title: 'Why Choose ENCY Software?' },
        { id: 'how-to-become', title: 'How to Become a Partner?' },
        { id: 'commitment', title: 'Our Commitment and Values' }
    ];

    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Market Leadership",
            description: "Join a leading CAD/CAM software provider with a strong market presence"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Comprehensive Support",
            description: "Get full training, marketing support, and technical assistance"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Competitive Margins",
            description: "Enjoy attractive profit margins and flexible partnership models"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Quick Onboarding",
            description: "Fast and efficient partner onboarding process"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Brand Recognition",
            description: "Leverage the trusted ENCY brand and reputation"
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: "Long-term Partnership",
            description: "Build lasting business relationships with mutual growth"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                {/* Diagonal striped pattern background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            rgba(255,255,255,0.1) 10px,
                            rgba(255,255,255,0.1) 20px
                        )`
                    }}></div>
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Why TRIOVIBE Software: How to Become a Dealer and What Sets Us Apart from Other CAD/CAM Vendors?
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-300 mb-8">
                            Join our growing network of partners and discover the benefits of becoming an ENCY Software dealer
                        </p>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 mx-auto">
                            Become a Dealer
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap gap-6">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Video Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="https://encycam.com/wp-content/uploads/2025/05/Become_a_Dealer_Video_opt.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Intro Section */}
                    <section id="intro" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            ENCY Software is a leading provider of CAD/CAM solutions, serving industries worldwide with innovative technology and exceptional support. Our partnership program offers businesses the opportunity to represent cutting-edge software solutions while building profitable, long-term relationships with customers.
                        </p>
                    </section>

                    {/* Who Can Become a Partner Section */}
                    <section id="who-can-become" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Become a Partner?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-3">Established Businesses</h3>
                                <p className="text-gray-600">Companies with existing customer relationships in manufacturing, engineering, or technology sectors.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-3">Technical Expertise</h3>
                                <p className="text-gray-600">Partners with technical knowledge of CAD/CAM, CNC machining, or manufacturing processes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-3">Sales Infrastructure</h3>
                                <p className="text-gray-600">Organizations with established sales channels and customer service capabilities.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-3">Market Presence</h3>
                                <p className="text-gray-600">Partners with strong local market presence and industry connections.</p>
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section id="why-choose" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose ENCY Software?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="text-teal-600 mb-4">{benefit.icon}</div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* How to Become Section */}
                    <section id="how-to-become" className="scroll-mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Become a Partner?</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Submit Application</h3>
                                    <p className="text-gray-600">Fill out the partnership application form below with your business details.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Review Process</h3>
                                    <p className="text-gray-600">Our team will review your application and assess compatibility with our partnership program.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Onboarding</h3>
                                    <p className="text-gray-600">Once approved, you'll receive comprehensive training and access to partner resources.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Launch Partnership</h3>
                                    <p className="text-gray-600">Start selling ENCY Software solutions with full support from our team.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Application Form Section */}
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Become a Partner</h2>

                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                                    <p className="text-gray-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Organization/Individual *
                                            </label>
                                            <input
                                                type="text"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Industry Focus *
                                            </label>
                                            <select
                                                name="industryFocus"
                                                value={formData.industryFocus}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            >
                                                <option value="CNC machines">CNC machines</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Education">Education</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Country/Region *
                                        </label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        >
                                            <option value="India (भारत)">India (भारत)</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            placeholder="Tell us about your business and why you want to become an ENCY partner..."
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="flex items-start gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="acceptPrivacy"
                                                checked={formData.acceptPrivacy}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                            />
                                            <span className="text-sm text-gray-600">
                                                I accept the <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a> and agree to the processing of my personal data.
                                            </span>
                                        </label>

                                        <label className="flex items-start gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="receiveUpdates"
                                                checked={formData.receiveUpdates}
                                                onChange={handleChange}
                                                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                            />
                                            <span className="text-sm text-gray-600">
                                                I would like to receive updates and promotional materials from ENCY Software.
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Submit Application
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeADealer;
