"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsCard = ({ date, title, image }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer">
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-4">
                    NEWS <span className="ml-2 text-gray-400 font-normal">{date}</span>
                </p>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {title}
                </h3>
            </div>
        </div>
    );
};

const News = ({ setCurrentPage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const newsItems = [
        {
            date: '23 Dec 2025',
            title: 'Happy Holidays — see you in 2026',
            image: 'https://encycam.com/wp-content/uploads/2025/12/Happy_Holidays_from_ENCY_-640x357.jpg'
        },
        {
            date: '09 Dec 2025',
            title: 'ENCY World Conference 2026: Find the Formula to Lead Your Industry',
            image: 'https://encycam.com/wp-content/uploads/2025/12/ENCY-World-2026-2-640x329.jpg'
        },
        {
            date: '05 Dec 2025',
            title: 'New in ENCY 2.6: refined Design tools and over 100 fixes',
            image: 'https://encycam.com/wp-content/uploads/2025/12/Extrude-and-Sweep-Along-Trajectory-640x359.png'
        },
        {
            date: '27 Nov 2025',
            title: 'Robot Calibration Helper app for ENCY Robot users',
            image: 'https://encycam.com/wp-content/uploads/2025/11/Robot-Calibration-Helper-app-640x360.jpg'
        },
        {
            date: '24 Nov 2025',
            title: 'ENCY 2.5 — What\'s New',
            image: 'https://encycam.com/wp-content/uploads/2025/11/Painting-simulation_2-640x359.png'
        },
        {
            date: '21 Nov 2025',
            title: 'ENCY Software India Hosts Seminar with Reliable Solution in Pune',
            image: 'https://encycam.com/wp-content/uploads/2025/10/ency-2.0-640x360.jpg'
        }
    ];

    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentItems = newsItems.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Latest News</h2>
                        <p className="text-gray-600 text-sm">Company and product news</p>
                    </div>
                    <button
                        onClick={() => setCurrentPage('news')}
                        className="text-sm font-semibold border border-gray-300 px-6 py-2 rounded-full hover:bg-white transition-colors text-gray-700"
                    >
                        View all
                    </button>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {currentItems.map((item, i) => (
                                <NewsCard key={`${currentIndex}-${i}`} {...item} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} className="text-gray-700" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                        aria-label="Next"
                    >
                        <ChevronRight size={20} className="text-gray-700" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-teal-500 w-6' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
