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

            {/* <Footer /> */}
        </div>
    );
};

export default UseCasesPage;
