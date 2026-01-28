"use client";
import React from 'react';

const NewsPage = () => {
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

    const NewsCard = ({ date, title, image }) => {
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            News & Updates
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Stay up to date with the latest news, announcements, and developments from ENCY. 
                            From product updates to company milestones, discover what's happening in the world 
                            of CAD/CAM and robotics software.
                        </p>
                    </div>
                </div>
            </div>

            {/* News Grid Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <NewsCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
