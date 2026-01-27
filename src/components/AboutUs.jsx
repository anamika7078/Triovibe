"use client";
import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, FileText, Users, Target, Eye } from 'lucide-react';

const AboutUs = ({ setCurrentPage }) => {
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
                            <span className="text-white">About TRIOVIBE Software Ltd</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            About TRIOVIBE Software Ltd
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Pioneering the future of CAD/CAM and robotics software from Limassol, Cyprus.
                        </p>
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
                    <div className="w-full h-full bg-gradient-to-l from-teal-500 to-transparent"></div>
                </div>
            </div>

            {/* Company Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Story</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    TRIOVIBE Software is an independent CAD/CAM and robotics software developer based in Limassol, Cyprus.
                                </p>
                                <p>
                                    We started TRIOVIBE to rethink the journey from model to part. The idea behind 'Go beyond CAD/CAM' came from years on the shop floor. We saw how scattered tools and broken handoffs waste shifts and create errors, so we set out to stitch the process back together.
                                </p>
                                <p>
                                    From day one, we've focused on technological independence and bringing programmers, operators, and integrators into one shared workspace. That's why everything we build runs on TRIOVIBE X - a platform that unites classic and AI-driven CAD/CAM, offline and real-time robot programming, NC code verification, and digital twin simulation.
                                </p>
                                <p>
                                    In September 2024, we launched our global brand with TRIOVIBE X, bringing our vision of seamless manufacturing to the world. In 2025, we're introducing TRIOVIBE 2.0, our next-generation platform that pushes the boundaries of what's possible in manufacturing technology.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://encycam.com/wp-content/uploads/2025/10/ENCY-Software-team-1200x675.jpg"
                                alt="TRIOVIBE Software Team"
                                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-xl shadow-xl">
                                <p className="text-2xl font-bold">Founded 2024</p>
                                <p className="text-teal-100">Limassol, Cyprus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                                    <Target className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To redefine the possibilities of CAD/CAM for a better future.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Eye className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To create a seamless CAD/CAM workflow which results in transition from design to finished part in the shortest time in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://encycam.com/wp-content/uploads/2025/10/ENCY-Software-team-1200x675.jpg"
                                alt="TRIOVIBE Team"
                                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Team</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Our team is focused on enabling users to quickly and confidently transition from a model to a machine or robot run. We understand the challenges faced by manufacturers and are committed to providing solutions that deliver efficiency and predictable results.
                                </p>
                                <p>
                                    With decades of combined experience in CAD/CAM development, manufacturing, and robotics, our team brings together expertise from diverse backgrounds to create innovative solutions that address real-world manufacturing challenges.
                                </p>
                                <div className="flex items-center gap-3 mt-6">
                                    <Users className="text-teal-600" size={24} />
                                    <span className="text-lg font-semibold text-gray-900">Expert Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Information Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Company Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-teal-600 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Address</p>
                                        <p className="text-gray-600">9, Aiolou and Panagioti Diomidous, 3020, Limassol, Cyprus</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="text-teal-600 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <p className="text-gray-600">+357 95 9007793</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="text-teal-600 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-600">info@encycam.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Legal Information</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-gray-900">Registration No.</p>
                                    <p className="text-gray-600">HE 460544</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">VAT No.</p>
                                    <p className="text-gray-600">CY 60079628L</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Director</p>
                                    <p className="text-gray-600">Andrei Kharatsidi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificates Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certificates</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                'Certificate of incorporation',
                                'Registered Office Certificate',
                                'Certificate of registration No 019059016',
                                'Tax Residency Certificate',
                                'Company Management Certificate'
                            ].map((certificate, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors group"
                                >
                                    <FileText className="text-teal-600 group-hover:text-teal-700" size={20} />
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                        {certificate}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join the revolution in CAD/CAM technology and experience the future of manufacturing with TRIOVIBE.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                        >
                            Contact Sales
                            <ArrowRight size={20} />
                        </button>
                        <button className="border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
