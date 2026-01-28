"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, RotateCcw, Calendar, ArrowRight } from 'lucide-react';

const ArticlesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const [orderBy, setOrderBy] = useState('latest');

    const articles = [
        {
            date: '19 Jan 2026',
            title: 'Swiss machining: technology, applications, and economics',
            image: 'https://encycam.com/wp-content/uploads/2026/01/Swiss-Machine-Typical-Parts-300x200.jpg'
        },
        {
            date: '16 Jan 2026',
            title: 'Swiss CNC Lathes: Types, Capabilities, and How to Choose the Right Machine',
            image: 'https://encycam.com/wp-content/uploads/2026/01/Swiss-Turning-Machine-1-300x200.jpg'
        },
        {
            date: '14 Jan 2026',
            title: 'CNC Swiss Turning: What It Is, How It Works, and When You Need It',
            image: 'https://encycam.com/wp-content/uploads/2026/01/CNC-Swiss-Turning-Machine-300x200.jpg'
        },
        {
            date: '12 Jan 2026',
            title: 'Programming Industrial Robots: Offline vs. Online',
            image: 'https://encycam.com/wp-content/uploads/2024/11/Pic_Title_Compressed-300x186.jpg'
        },
        {
            date: '09 Jan 2026',
            title: 'Evolution of CAD/CAM Systems: 1970 - 2025',
            image: 'https://encycam.com/wp-content/uploads/2024/12/Title7-300x225.png'
        },
        {
            date: '07 Jan 2026',
            title: 'Top 10 Applications of Industrial Robots',
            image: 'https://encycam.com/wp-content/uploads/2024/12/TOP10_TITLE-300x200.jpg'
        },
        {
            date: '05 Jan 2026',
            title: 'CAMSUPS, led by President Sano, finally gets underway! — ENCY Software\'s CAD/CAM lands in Japan',
            image: 'https://encycam.com/wp-content/uploads/2026/01/ENCY_Lands_in_Japan-1-300x169.png'
        },
        {
            date: '05 Jan 2026',
            title: 'Top Trends in CAD/CAM Development for 2025-2026',
            image: 'https://encycam.com/wp-content/uploads/2026/01/Top-Trends-In-CAD-CAM-Development-For-2025-2026-300x200.jpg'
        },
        {
            date: '14 Nov 2025',
            title: 'ENCY Hyper: Redefining How Robots Think, Move, and Collaborate',
            image: 'https://encycam.com/wp-content/uploads/2025/11/ASUS-1-300x169.jpg'
        },
        {
            date: '27 Oct 2025',
            title: 'CNC Mill-Turn Centers: Machine Tools Bridging Turning and Milling',
            image: 'https://encycam.com/wp-content/uploads/2025/10/Image-Oct-27-2025-11_31_31-AM-300x200.jpg'
        },
        {
            date: '16 Oct 2025',
            title: 'Lathe vs Mill: Differences, Use Cases, and CNC Machine Types',
            image: 'https://encycam.com/wp-content/uploads/2025/10/Image-Oct-27-2025-11_31_31-AM-300x200.jpg'
        },
        {
            date: '09 Oct 2025',
            title: 'What is a CNC Machine? Definition, Types, and Applications',
            image: 'https://encycam.com/wp-content/uploads/2025/07/CAD_CAM_1-300x200.jpg'
        },
        {
            date: '01 Sep 2025',
            title: 'Different Types of CNC Machines and How to Choose the Right CNC Machine Type',
            image: 'https://encycam.com/wp-content/uploads/2024/11/The_picture_split_on_2_parts__left_-_cnc_machine_i-1-300x225.jpg'
        },
        {
            date: '28 Aug 2025',
            title: 'How Much Does a CNC Machine Cost? A Practical 2025 Price Guide for CNC Programmers',
            image: 'https://encycam.com/wp-content/uploads/2024/11/tex…2CAD_CAM_CAE22_are_flying_from_laptop-300x225.jpg'
        },
        {
            date: '25 Aug 2025',
            title: 'How CAD/CAM Software Is Transforming the Woodworking Industry',
            image: 'https://encycam.com/wp-content/uploads/2024/12/An_…staying_and_thinking_near_CNC_machine-300x225.jpg'
        },
        {
            date: '18 Aug 2025',
            title: 'How Does a CNC Machine Work? Full Explanation with Examples',
            image: 'https://encycam.com/wp-content/uploads/2025/03/cro…espirator-and-2023-11-27-05-00-25-utc-300x200.jpg'
        },
        {
            date: '05 Aug 2025',
            title: 'How to Define the Tool Center Point (TCP) on a Robot',
            image: 'https://encycam.com/wp-content/uploads/2025/03/Additive_1-300x169.jpeg'
        },
        {
            date: '30 Jul 2025',
            title: 'What Is a SCARA Robot? Structural Features, Operational Capabilities, and Industrial Relevance',
            image: 'https://encycam.com/wp-content/uploads/2025/07/SCARA-Robot-640x360.jpg'
        },
        {
            date: '30 Apr 2025',
            title: 'Types of Robots and How They\'re Used: An Expert Perspective',
            image: 'https://encycam.com/wp-content/uploads/2025/04/Robot-Types-640x360.jpg'
        },
        {
            date: '24 Apr 2025',
            title: 'What is CAM Software: Complete Guide to Computer-Aided Manufacturing',
            image: 'https://encycam.com/wp-content/uploads/2025/04/CAM-Software-Guide-640x360.jpg'
        },
        {
            date: '11 Apr 2025',
            title: 'Why CAD/CAM Software Is Essential in Industrial 3D Printing and Additive Manufacturing',
            image: 'https://encycam.com/wp-content/uploads/2025/04/CAD-CAM-3D-Printing-640x360.jpg'
        }
    ];

    const ArticleCard = ({ date, title, image }) => {
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
                            TRIOVIBE Articles
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-300">
                            Product updates, tips, tutorials and community news
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
                        <span className="text-gray-900 font-medium">Articles</span>
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

                        {/* Choose Date Dropdown */}
                        <div className="relative">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Choose date
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

            {/* Articles Grid Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesPage;
