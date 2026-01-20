"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[calc(100vh-80px)] w-full flex flex-col justify-center overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="https://encycam.com/wp-content/uploads/2025/10/New-Intro.mp4" type="video/mp4" />
                </video>
                {/* Subtle Overlay Gradient for readability - Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-left flex flex-col items-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                    <span className="bg-white text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">New</span>
                    <p className="text-[12px] font-bold text-white tracking-tight">Version 2.0 released! <span className="text-white/60 hover:text-white cursor-pointer ml-1 transition-colors">See What's new →</span></p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white max-w-4xl leading-[1.05]"
                >
                    All-in-one CAD/CAM software <br />
                    for CNC machines and robots
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm md:text-base text-gray-200 mb-10 max-w-3xl leading-relaxed font-medium"
                >
                    Full spectrum of manufacturing applications: multi-axis milling, turning, mill-turn, Swiss-type
                    machining, wire EDM; robotic milling, welding, trimming, polishing, and deburring; additive
                    and hybrid manufacturing, a suite of CAD tools, built-in AI, and complete machine simulation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="group relative px-8 py-3.5 bg-transparent border-2 border-teal-400 text-white rounded-full overflow-hidden hover:bg-teal-400 hover:text-black transition-all shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                        <span className="relative z-10 font-bold text-sm tracking-wide">Why TRIOVIBE?</span>
                    </button>
                    <button className="px-8 py-3.5 text-white/80 hover:text-white font-bold text-sm tracking-wide transition-colors">
                        Watch Demo
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            >
                <div className="w-[1px] h-8 bg-gradient-to-b from-teal-500 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
};

export default Hero;
