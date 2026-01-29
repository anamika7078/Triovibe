"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const EventCard = ({ dateRange, month, title, image }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer">
            <div className="p-8 pb-6">
                <div className="flex items-baseline gap-2 mb-3">
                    <h3 className="text-4xl font-bold text-gray-900">{dateRange}</h3>
                    <span className="text-sm text-gray-600">{month}</span>
                </div>
                <h4 className="text-base font-bold text-gray-900 leading-snug mb-4">
                    {title}
                </h4>
            </div>
            <div className="relative aspect-video bg-gray-100 overflow-hidden mt-auto">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Arrow Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <ArrowUpRight size={20} className="text-gray-900" />
                </div>
            </div>
        </div>
    );
};

const Events = ({ setCurrentPage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Detect screen size
    React.useEffect(() => {
        const checkMobile = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const events = [
        {
            dateRange: '15 - 18',
            month: 'June 2026',
            title: 'TRIOVIBE WORLD CONFERENCE 2026 – FORMULA CAD/CAM',
            image: 'https://encycam.com/wp-content/uploads/2025/12/TRIOVIBE-World-2026-2-640x329.jpg'
        },
        {
            dateRange: '21 - 25',
            month: 'January 2026',
            title: 'TRIOVIBE AT IMTEX 2026, INDIA',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
        },
        {
            dateRange: '10 - 13',
            month: 'March 2026',
            title: 'TRIOVIBE AT TECHNISHOW, NETHERLANDS',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80'
        }
    ];

    const totalPages = Math.ceil(events.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Reset to first page when items per page changes
    React.useEffect(() => {
        setCurrentIndex(0);
    }, [itemsPerPage]);

    const currentItems = events.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Events</h2>
                        <p className="text-gray-600 text-sm">Upcoming online and offline events</p>
                    </div>
                    <button
                        onClick={() => setCurrentPage('events')}
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
                                <EventCard key={`${currentIndex}-${i}`} {...item} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {totalPages > 1 && (
                        <>
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
                        </>
                    )}

                    {/* Pagination Dots */}
                    {totalPages > 1 && (
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default Events;
