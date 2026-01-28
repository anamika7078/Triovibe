"use client";
import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const EventsPage = () => {
    const upcomingEvents = [
        {
            dateRange: '19 - 21 February 2026',
            title: 'ENCY 2.0 AT FORNITORE OFFRESI 2026, ITALY',
            location: 'Italy',
            image: 'https://encycam.com/wp-content/uploads/2025/02/Fornitore-Offresi-2026-640x360.jpg'
        },
        {
            dateRange: '10 - 13 March 2026',
            title: 'ENCY AT TECHNISHOW, NETHERLANDS',
            location: 'Netherlands',
            image: 'https://encycam.com/wp-content/uploads/2025/02/Technishow-2026-640x360.jpg'
        },
        {
            dateRange: '15 - 18 June 2026',
            title: 'ENCY WORLD CONFERENCE 2026 - FORMULA CAD/CAM',
            location: 'Conference',
            image: 'https://encycam.com/wp-content/uploads/2025/12/ENCY-World-2026-2-640x329.jpg'
        },
        {
            dateRange: '14 - 19 September 2026',
            title: 'ENCY SOFTWARE AT IMTS 2026, UNITED STATES',
            location: 'United States',
            image: 'https://encycam.com/wp-content/uploads/2025/10/IMTS-2026-640x360.jpg'
        }
    ];

    const pastEvents = [
        {
            dateRange: '21 - 25 January 2026',
            title: 'ENCY AT IMTEX 2026, INDIA',
            location: 'India',
            image: 'https://encycam.com/wp-content/uploads/2026/01/IMTEX-2026-640x360.jpg'
        },
        {
            dateRange: '9 - 10 December 2025',
            title: 'ENCY AT FANUC OPEN DAYS IN SLOVENIA',
            location: 'Slovenia',
            image: 'https://encycam.com/wp-content/uploads/2025/12/FANUC-Open-Days-640x360.jpg'
        },
        {
            dateRange: '18 - 19 November 2025',
            title: 'ENCY AT COMAC OPEN HOUSE, BRASIL',
            location: 'Brasil',
            image: 'https://encycam.com/wp-content/uploads/2025/11/COMAC-Open-House-640x360.jpg'
        },
        {
            dateRange: '13 November 2025',
            title: 'WEBINAR: DISCOVER ENCY HYPER – THE FUTURE OF HYBRID ROBOT PROGRAMMING',
            location: 'Online',
            image: 'https://encycam.com/wp-content/uploads/2025/11/ENCY-Hyper-Webinar-640x360.jpg'
        },
        {
            dateRange: '13 - 14 November 2025',
            title: 'ENCY AT IRONCAD 2025 TAIWAN USER CONFERENCE, TAIWAN',
            location: 'Taiwan',
            image: 'https://encycam.com/wp-content/uploads/2025/11/IronCAD-2025-640x360.jpg'
        },
        {
            dateRange: '12 November 2025',
            title: 'ENCY SEMINAR IN PUNE, INDIA',
            location: 'India',
            image: 'https://encycam.com/wp-content/uploads/2025/11/ENCY-Seminar-Pune-640x360.jpg'
        },
        {
            dateRange: '5 - 8 November 2025',
            title: 'ENCY AT ROBOWORLD 2025, KOREA',
            location: 'Korea',
            image: 'https://encycam.com/wp-content/uploads/2025/11/Roboworld-2025-640x360.jpg'
        },
        {
            dateRange: '5 - 6 November 2025',
            title: 'ENCY AT STAUBLI ROBOTICS TECHDAYS, NETHERLANDS',
            location: 'Netherlands',
            image: 'https://encycam.com/wp-content/uploads/2025/11/Staubli-Techdays-640x360.jpg'
        },
        {
            dateRange: '4 - 7 November 2025',
            title: 'ENCY AT VOLZ IN-HOUSE EXHIBITION 2025, GERMANY',
            location: 'Germany',
            image: 'https://encycam.com/wp-content/uploads/2025/11/Volz-In-House-640x360.jpg'
        }
    ];

    const EventCard = ({ dateRange, title, location, image, isPast = false }) => {
        return (
            <div className={`bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow ${isPast ? 'opacity-90' : ''}`}>
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Calendar size={16} className="flex-shrink-0" />
                        <span className="font-medium">{dateRange}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                        {title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin size={16} className="flex-shrink-0" />
                            <span>{location}</span>
                        </div>
                        <ArrowRight size={18} className="text-teal-600" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white">
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            TRIOVIBE Events
                        </h1>
                        <p className="text-xl leading-relaxed text-blue-100">
                            Join us at trade shows, conferences, and seminars around the world.
                            Discover our latest innovations and connect with the TRIOVIBE team.
                        </p>
                    </div>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
                                <p className="text-gray-600">Meet us at these upcoming events</p>
                            </div>
                            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
                                All events
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {upcomingEvents.map((event, index) => (
                                <EventCard key={`upcoming-${index}`} {...event} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Past Events Section */}
            <div className="bg-gray-50">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Past Events</h2>
                            <p className="text-gray-600">Events where we've participated recently</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastEvents.map((event, index) => (
                                <EventCard key={`past-${index}`} {...event} isPast={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
