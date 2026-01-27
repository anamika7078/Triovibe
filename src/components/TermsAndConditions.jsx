"use client";
import React from 'react';
import { ArrowRight, FileText, Shield, Users, AlertCircle, CheckCircle, BookOpen } from 'lucide-react';

const TermsAndConditions = ({ setCurrentPage }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        scrollToTop();
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            <span className="text-white">Terms and Conditions</span>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <FileText className="text-teal-400" size={48} />
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                TERMS AND CONDITIONS
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Please read these terms and conditions carefully before using our services.
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
                        <AlertCircle size={16} />
                        <span>Last updated December 02, 2024</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Agreement Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <Shield className="text-teal-600" size={32} />
                            AGREEMENT TO OUR LEGAL TERMS
                        </h2>
                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl border border-gray-200">
                            <div className="space-y-6 text-gray-700">
                                <div>
                                    <p className="mb-4">
                                        We are <strong>ENCY SOFTWARE LTD.</strong> ("Company," "we," "us," "our"). Our VAT number is <strong>CY 60079628L</strong>.
                                    </p>
                                    <p className="mb-4">
                                        We operate the website <a href="https://www.triovibesolutions.com" className="text-teal-600 hover:text-teal-700">https://www.triovibesolutions.com</a> (the "Site"), the mobile application <strong>ENCY Clouds</strong> (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                                    </p>
                                    <p className="mb-4">
                                        You can contact us by phone at <strong>+91 9930181825</strong>, email at <a href="mailto:info@triovibesolutions.com" className="text-teal-600 hover:text-teal-700">info@triovibesolutions.com</a>, or by mail to <strong>F-411, Siddharth Magnum Plus, Tarsali, Vadodara - 390009, Gujarat, INDIA</strong>.
                                    </p>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                                    <p className="mb-4">
                                        These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and ENCY SOFTWARE LTD., concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                                    </p>
                                    <p className="mb-4">
                                        Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                                    </p>
                                    <p className="mb-4">
                                        The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                                    </p>
                                    <p>
                                        We recommend that you print a copy of these Legal Terms for your records.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Table of Contents */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <BookOpen className="text-teal-600" size={32} />
                            TABLE OF CONTENTS
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-3">
                                {[
                                    { id: 'services', title: '1. OUR SERVICES', description: 'Overview of the CAD/CAM and robotics software services we provide' },
                                    { id: 'intellectual-property', title: '2. INTELLECTUAL PROPERTY RIGHTS', description: 'Ownership and usage rights of our intellectual property' },
                                    { id: 'user-representations', title: '3. USER REPRESENTATIONS', description: 'Your warranties and representations when using our services' },
                                    { id: 'user-registration', title: '4. USER REGISTRATION', description: 'Account creation and registration requirements' },
                                    { id: 'prohibited-activities', title: '5. PROHIBITED ACTIVITIES', description: 'Actions and behaviors that are not permitted on our platform' },
                                    { id: 'user-contributions', title: '6. USER GENERATED CONTRIBUTIONS', description: 'User-generated content and contribution guidelines' }
                                ].map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="w-full text-left p-4 rounded-lg hover:bg-teal-50 transition-colors group border border-gray-100 hover:border-teal-200"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                            </div>
                                            <ArrowRight className="text-gray-400 group-hover:text-teal-600 transition-colors mt-1" size={20} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 1: Our Services */}
                    <section id="services" className="mb-16 scroll-mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                            OUR SERVICES
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    ENCY SOFTWARE LTD. provides advanced CAD/CAM and robotics software solutions including but not limited to:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-600 mt-1" size={16} />
                                        <span>TRIOVIBE X - Advanced CAD/CAM platform</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-600 mt-1" size={16} />
                                        <span>TRIOVIBE Robot - Robotic programming software</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-600 mt-1" size={16} />
                                        <span>TRIOVIBE Tuner - Precision optimization tools</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-600 mt-1" size={16} />
                                        <span>TRIOVIBE Clouds - Cloud-based collaboration platform</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-600 mt-1" size={16} />
                                        <span>MachineMaker - Machine configuration software</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-600 mt-1" size={16} />
                                        <span>TRIOVIBE Hyper - High-performance machining solutions</span>
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Intellectual Property Rights */}
                    <section id="intellectual-property" className="mb-16 scroll-mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                            INTELLECTUAL PROPERTY RIGHTS
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                                </p>
                                <p>
                                    You may not use, reproduce, distribute, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You may store files that are automatically cached by your Web browser for display enhancement purposes.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: User Representations */}
                    <section id="user-representations" className="mb-16 scroll-mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                            USER REPRESENTATIONS
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    By using the Site, you represent and warrant that:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You have the legal capacity and you agree to comply with these Terms and Conditions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You are not a minor in the jurisdiction in which you reside</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You will not use the Site for any illegal or unauthorized purpose</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Your use of the Site will not violate any applicable law or regulation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: User Registration */}
                    <section id="user-registration" className="mb-16 scroll-mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                            USER REGISTRATION
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    To access certain features of our Site, you may be required to register for an account. When you register for an account, you agree to:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Provide accurate, current, and complete information as prompted by our registration form</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Maintain and promptly update your account information to keep it accurate, current, and complete</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Maintain the security and confidentiality of your password</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Accept responsibility for all activities that occur under your account</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Notify us immediately of any unauthorized use of your account</span>
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    We reserve the right to suspend or terminate your account at any time for any reason, including violation of these Terms and Conditions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Prohibited Activities */}
                    <section id="prohibited-activities" className="mb-16 scroll-mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                            PROHIBITED ACTIVITIES
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                                </p>
                                <p>
                                    As a user of the Site, you agree not to:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Attempt to impersonate another user or person or use the username of another user</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Use any information obtained from the Site in order to harass, abuse, or harm another person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Decompile, reverse engineer, or disassemble any software or other products or processes accessible through the Site</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: User Generated Contributions */}
                    <section id="user-contributions" className="mb-16 scroll-mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                            USER GENERATED CONTRIBUTIONS
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    The Site may invite you to chat, contribute, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information ("User Contributions").
                                </p>
                                <p>
                                    By submitting User Contributions, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, transferable, and sublicensable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Contributions in connection with the Site and our business.
                                </p>
                                <p>
                                    You represent and warrant that:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>You own or control all rights in and to the User Contributions and have the right to grant the license granted above to us</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Your User Contributions do not violate any applicable law, regulation, or the rights of any third party</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Your User Contributions are not false, misleading, or deceptive</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">CONTACT US</h2>
                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-2xl border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Legal Questions</h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about these Terms and Conditions, please contact us:
                                    </p>
                                    <div className="space-y-2">
                                        <p className="text-gray-700">
                                            <strong>Email:</strong> <a href="mailto:info@triovibesolutions.com" className="text-teal-600 hover:text-teal-700">info@triovibesolutions.com</a>
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Phone:</strong> +91 9930181825
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Address:</strong><br />
                                            F-411, Siddharth Magnum Plus, Tarsali<br />
                                            Vadodara - 390009, Gujarat<br />
                                            INDIA
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Company Details</h3>
                                    <div className="space-y-2 text-gray-700">
                                        <p><strong>Company:</strong> ENCY SOFTWARE LTD.</p>
                                        <p><strong>Website:</strong> <a href="https://www.triovibesolutions.com" className="text-teal-600 hover:text-teal-700">www.triovibesolutions.com</a></p>
                                        <p><strong>Mobile App:</strong> ENCY Clouds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center py-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Legal Assistance?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our legal team is here to help with any questions about these Terms and Conditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                            >
                                Contact Legal Team
                                <ArrowRight size={20} />
                            </button>
                            <a
                                href="mailto:info@triovibesolutions.com"
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

export default TermsAndConditions;
