"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Features = ({ setCurrentPage }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0f1115] rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-8 overflow-hidden relative shadow-2xl"
                >
                    {/* Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Go beyond CAD/CAM</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-xs md:text-sm">
                            <p>
                                TRIOVIBE combines powerful manufacturing technology with a clean, intuitive interface
                                that makes learning quick and daily work enjoyable.
                            </p>
                            <p>
                                Through the TRIOVIBE X ecosystem, teams collaborate in real time, share projects,
                                files, and messages via the built-in chat or mobile app, and access fast,
                                convenient technical support.
                            </p>
                            <p>
                                The result — the fastest CAD-to-part workflow in the industry, driven by
                                innovation and teamwork.
                            </p>
                        </div>
                        <button onClick={() => setCurrentPage('why-triovibe')} className="inline-flex items-center gap-2 text-white font-bold mt-6 text-sm group">
                            Learn more
                            <span className="group-hover:translate-x-1 transition-transform text-teal-400">→</span>
                        </button>
                    </div>

                    {/* Video Section */}
                    <div className="lg:w-1/2 relative w-full">
                        <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl ring-1 ring-white/10">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster="https://encycam.com/wp-content/uploads/2025/10/Ency-X-Poster.jpg"
                            >
                                <source src="https://encycam.com/wp-content/uploads/2025/10/Ency_X_Main_Video_Sub_Fullhd.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Subtle decorative glow */}
                        <div className="absolute -inset-4 bg-teal-500/5 blur-3xl rounded-full -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
