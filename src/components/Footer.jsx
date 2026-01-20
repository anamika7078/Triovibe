"use client";
import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Column 1: Logo and Contact */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <span className="text-3xl font-bold flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">ency</span>
                            </span>
                            <p className="text-xs text-gray-600 mt-1">ENCY SOFTWARE LTD</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>info@encycam.com</p>
                            <p>+357 25 054746</p>
                            <p className="text-xs leading-relaxed">
                                9, Aiolou and Panagioti Diomidous 3020, Limassol, Cyprus
                            </p>
                        </div>
                    </div>

                    {/* Column 2: ENCY */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">ENCY</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-teal-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">Why ENCY?</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">News</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">Articles</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-teal-600 transition-colors">Get a quote</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">Find dealer</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">Download Trial</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Our platform */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">Our platform</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-teal-600 transition-colors">ENCY</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">ENCY Robot</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">ENCY Tuner</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">ENCY Clouds</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">MachineMaker</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors">ENCY Hyper</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Social Media */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">Follow us:</h4>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <Facebook size={18} className="text-gray-600" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <Instagram size={18} className="text-gray-600" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <Youtube size={18} className="text-gray-600" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <Linkedin size={18} className="text-gray-600" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                            <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-teal-600 transition-colors">Terms and Conditions</a>
                            <a href="#" className="hover:text-teal-600 transition-colors">Cookie Policy</a>
                        </div>
                        <p className="text-sm text-gray-600">
                            © 2024 - 2026 ENCY Software Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
