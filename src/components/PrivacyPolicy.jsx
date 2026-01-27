"use client";
import React from 'react';
import { ArrowRight, Shield, Database, Users, FileText, Clock, CheckCircle } from 'lucide-react';

const PrivacyPolicy = ({ setCurrentPage }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-6 py-24 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
                            <button
                                onClick={() => setCurrentPage('home')}
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </button>
                            <span>/</span>
                            <span className="text-white">Privacy Policy</span>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <Shield className="text-teal-400" size={48} />
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                PRIVACY POLICY
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                        </p>
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
                    <div className="w-full h-full bg-gradient-to-l from-teal-500 to-transparent"></div>
                </div>
            </div>

            {/* Last Updated */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>Last updated December 02, 2024</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Introduction */}
                    <section className="mb-16">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This Privacy Notice for <strong>ENCY SOFTWARE LTD.</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                            </p>
                            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-teal-600 mt-1" size={16} />
                                    <span>Visit our website at <a href="https://encycam.com" className="text-teal-600 hover:text-teal-700">https://encycam.com</a>, or any website of ours that links to this Privacy Notice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-teal-600 mt-1" size={16} />
                                    <span>Download and use our mobile application (ENCY Clouds), our Facebook application (ENCY), or any other application of ours that links to this Privacy Notice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-teal-600 mt-1" size={16} />
                                    <span>Engage with us in other related ways, including any sales, marketing, or events</span>
                                </li>
                            </ul>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                                <p className="text-gray-700">
                                    <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@encycam.com" className="text-teal-600 hover:text-teal-700">info@encycam.com</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Summary Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <FileText className="text-teal-600" size={32} />
                            SUMMARY OF KEY POINTS
                        </h2>
                        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Database className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Data Collection</h3>
                                        <p className="text-gray-700">We collect personal information you provide directly and information collected automatically when you use our services.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Data Usage</h3>
                                        <p className="text-gray-700">Your information is used to provide, improve, and personalize our services, as well as for communication purposes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Personal Information Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">WHAT PERSONAL INFORMATION DO WE PROCESS?</h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Name, email address, phone number, and contact details</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Company information and job title</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Payment and billing information</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Communication preferences and support requests</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Collected Automatically</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>IP address and device information</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Browser type and operating system</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Usage data and interaction patterns</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Cookies and similar tracking technologies</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Third Party Information Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">WHAT PERSONAL INFORMATION DO WE COLLECT FROM THIRD PARTIES?</h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>We may receive personal information about you from third-party sources, including:</p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Business Partners:</strong> When you engage with our partners or resellers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Public Sources:</strong> Professional networking sites and public business directories</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Payment Processors:</strong> Financial transaction data from payment providers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Analytics Providers:</strong> Aggregated usage and demographic data</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Process Information Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">HOW DO WE PROCESS YOUR PERSONAL INFORMATION?</h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Basis for Processing</h3>
                                    <p className="text-gray-700 mb-4">We process your personal information based on the following legal grounds:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span><strong>Contractual Necessity:</strong> To fulfill our obligations under contracts with you</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span><strong>Legitimate Interest:</strong> For business purposes that are not overridden by your privacy rights</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span><strong>Consent:</strong> When you have given explicit consent for specific processing activities</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Activities</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Providing and maintaining our CAD/CAM software services</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Customer support and technical assistance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Billing, payment processing, and financial administration</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Marketing communications (with your consent)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Security monitoring and fraud prevention</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Analytics and service improvement</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">CONTACT US</h2>
                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Privacy Questions</h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                                    </p>
                                    <div className="space-y-2">
                                        <p className="text-gray-700">
                                            <strong>Email:</strong> <a href="mailto:info@encycam.com" className="text-teal-600 hover:text-teal-700">info@encycam.com</a>
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Phone:</strong> +357 25 054746
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Address:</strong><br />
                                            9, Aiolou and Panagioti Diomidous<br />
                                            3020, Limassol, Cyprus
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Your Rights</h3>
                                    <p className="text-gray-700 mb-4">
                                        You have the right to:
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Access your personal information</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Correct inaccurate information</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Request deletion of your data</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Object to processing</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Data portability</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center py-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Need More Information?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our privacy team is here to help with any questions about your data and privacy rights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                            >
                                Contact Privacy Team
                                <ArrowRight size={20} />
                            </button>
                            <a
                                href="mailto:info@encycam.com"
                                className="border border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-full font-semibold transition-all"
                            >
                                Email Us Directly
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
