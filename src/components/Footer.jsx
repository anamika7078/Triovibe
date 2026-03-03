"use client";
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
    return (
        <footer className="bg-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Logo and Contact */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <span className="text-3xl font-bold flex items-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">TRIOVIBE</span>
                            </span>
                            <p className="text-xs text-gray-600 mt-1">TRIOVIBE SOLUTION PVT LTD.</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>
                                <span className="bg-teal-100 px-2 py-1 rounded text-gray-700">info@triovibesolutions.com</span>
                            </p>
                            <p>+91 9930181825</p>
                            <p className="text-xs leading-relaxed">
                                F-411, Siddharth Magnum Plus, Tarsali<br />
                                Vadodara - 390009, Gujarat, INDIA
                            </p>
                            <p className="text-xs">
                                <a href="https://www.triovibesolutions.com" className="hover:text-teal-600 transition-colors">
                                    www.triovibesolutions.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: TRIOVIBE Links */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">TRIOVIBE</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><button onClick={() => setCurrentPage('about')} className="hover:text-teal-600 transition-colors text-left">About Us</button></li>
                            <li><button onClick={() => setCurrentPage('why-triovibe')} className="hover:text-teal-600 transition-colors text-left">Why ENCY?</button></li>
                            <li><button onClick={() => setCurrentPage('news')} className="hover:text-teal-600 transition-colors text-left">News</button></li>
                            <li><button onClick={() => setCurrentPage('articles')} className="hover:text-teal-600 transition-colors text-left">Articles</button></li>
                        </ul>
                    </div>

                    {/* Column 3: Our platform */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><button onClick={() => setCurrentPage('triovibex')} className="hover:text-teal-600 transition-colors text-left">ENCY X</button></li>
                            <li><button onClick={() => setCurrentPage('triovibe')} className="hover:text-teal-600 transition-colors text-left">ENCY</button></li>
                            <li><button onClick={() => setCurrentPage('triovibe-robot')} className="hover:text-teal-600 transition-colors text-left">ENCY Robot</button></li>
                            <li><button onClick={() => setCurrentPage('triovibe-tuner')} className="hover:text-teal-600 transition-colors text-left">ENCY Tuner</button></li>
                            <li><button onClick={() => setCurrentPage('triovibe-clouds')} className="hover:text-teal-600 transition-colors text-left">ENCY Clouds</button></li>
                            <li><button onClick={() => setCurrentPage('triovibe-machinemaker')} className="hover:text-teal-600 transition-colors text-left">Machine Maker</button></li>
                            <li><button onClick={() => setCurrentPage('triovibe-hyper')} className="hover:text-teal-600 transition-colors text-left">ENCY Hyper</button></li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 text-sm">Follow us:</h4>
                        <div className="flex space-x-3">
                            <a href="https://www.linkedin.com/in/triovibe-solutions-4110bb3a1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="LinkedIn">
                                <Linkedin size={18} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                            <span className="text-white text-xs font-bold">N</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            ©2026 TRIOVIBE SOLUTION PVT LTD. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
