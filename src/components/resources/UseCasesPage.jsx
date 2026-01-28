"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, RotateCcw, Calendar, ArrowRight } from 'lucide-react';

const UseCasesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const [orderBy, setOrderBy] = useState('latest');

    const useCases = [
        {
            date: '26 Jun 2025',
            title: 'Sintech Boosts Innovation and 5-Axis Machining Efficiency with ENCY CAM Software',
            image: 'https://encycam.com/wp-content/uploads/2025/06/Sintech-5-axis-machining-640x360.jpg',
            category: 'manufacturing'
        },
        {
            date: '17 Jun 2025',
            title: 'Flexball Italiana simplifies CNC programming with ENCY CAM software',
            image: 'https://encycam.com/wp-content/uploads/2025/06/Flexball-Italiana-CNC-programming-640x360.jpg',
            category: 'manufacturing'
        }
    ];

    const UseCaseCard = ({ date, title, image }) => {
        return (
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Calendar size={16} className="flex-shrink-0" />
                        <span>{date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                        {title}
                    </h3>
                    <div className="mt-auto">
                        <button className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                            Read more
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const resetFilters = () => {
        setSearchTerm('');
        setCategory('all');
        setOrderBy('latest');
    };

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
                            TRIOVIBE Use cases
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-300">
                            Discover real-world examples of ENCY in action—helping companies streamline operations,
                            cut costs, and achieve breakthroughs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Breadcrumb and Filters Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                        <span className="hover:text-teal-600 cursor-pointer transition-colors">Home</span>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Use cases</span>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Category Dropdown */}
                        <div className="relative">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Category
                                <ChevronDown size={16} />
                            </button>
                        </div>

                        {/* Order By Dropdown */}
                        <div className="relative">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Order By
                                <ChevronDown size={16} />
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                        </div>

                        {/* Reset Filter Button */}
                        <button
                            onClick={resetFilters}
                            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <RotateCcw size={16} />
                            Reset filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Use Cases Grid Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <UseCaseCard key={index} {...useCase} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">E</span>
                                </div>
                                <span className="text-xl font-bold">ency</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">ENCY SOFTWARE LTD</p>
                            <div className="space-y-1 text-sm text-gray-400">
                                <p>info@encycam.com</p>
                                <p>+357 25 054745</p>
                                <p>9, Alolou and Panagiot Diomidous 3020, Limassol Cyprus</p>
                            </div>
                        </div>

                        {/* ENCY Links */}
                        <div>
                            <h3 className="font-semibold mb-4">ENCY</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Why ENCY?</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Get a quote</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Find dealer</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Download Trial</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                            </ul>
                        </div>

                        {/* Platform Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Our platform</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">ENCY</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">ENCY Robot</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">ENCY Tuner</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">ENCY Clouds</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">MachineMaker</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">ENCY Hyper</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-800">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UseCasesPage;
