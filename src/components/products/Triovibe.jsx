"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Layers, Monitor, Settings, Box, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../Footer';

const TRIOVIBE = ({ setCurrentPage }) => {
    const [selectedFeature, setSelectedFeature] = useState(3); // Mill-Turn (index 3) as default
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [showAllPosts, setShowAllPosts] = useState(false);
    const intervalRef = useRef(null);

    const features = [
        { icon: Zap, title: "3-axis-toolpath", description: "High-speed machining optimization", image: "TRIOVIBE2024/07/3-axis-1536x863.jpg", svg: "TRIOVIBE2024/08/3-axis.svg" },
        { icon: Zap, title: "HSM", description: "High-speed machining optimization", image: "TRIOVIBE2024/07/HSM-1440x810.jpg", svg: "TRIOVIBE2024/08/HSM.svg" },
        { icon: Layers, title: "Multiaxis", description: "Complex multi-axis operations", image: "TRIOVIBE2024/07/Multiaxis-1024x575.jpg", svg: "TRIOVIBE2024/08/Multiaxis.svg" },
        { icon: Monitor, title: "State-of-art UI", description: "Modern intuitive interface", image: "TRIOVIBE2024/07/State-of-art-UI-1024x576.jpg", svg: "TRIOVIBE2024/08/State-of-art-UI.svg" },
        { icon: Settings, title: "Mill-Turn", description: "Combined milling and turning", image: "TRIOVIBE2024/07/Mill-Turn-1024x576.jpg", svg: "TRIOVIBE2024/08/Mill-Turn.svg" },
        { icon: Box, title: "Additive", description: "Hybrid manufacturing solutions", image: "TRIOVIBE2024/07/Additive-1024x576.jpg", svg: "TRIOVIBE2024/08/Additive.svg" },
        { icon: Play, title: "Machine simulation", description: "Advanced simulation technology", image: "TRIOVIBE2024/07/Machine-simulation-1024x576.jpg", svg: "TRIOVIBE2024/08/Machine-simulation.svg" },
        { icon: Cpu, title: "Material removal simulation", description: "Simulate material removal processes", image: "TRIOVIBE2024/07/Material-removal-simulation-1024x576.jpg", svg: "TRIOVIBE2024/08/Material-removal-simulation.svg" }
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setSelectedFeature((prev) => (prev + 1) % features.length);
            }, 3000); // Change every 3 seconds
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying, features.length]);

    const handleManualChange = (index) => {
        setSelectedFeature(index);
        // Pause auto-play when user manually changes
        setIsAutoPlaying(false);
        // Resume auto-play after 5 seconds
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-blue-700 flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-10">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute top-1/3 left-1/4 w-1 h-32 bg-white/20"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        className="absolute bottom-1/3 right-1/4 w-1 h-24 bg-white/20"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center flex-1 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
                            TRIOVIBE: CAD/CAM <br />for a new generation
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Delivering sophisticated CAM technology with an intuitive user interface and natural workflow
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
                    >
                        <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200 text-lg flex items-center gap-2 group">
                            Start for free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 text-lg"
                        >
                            Talk to sales
                        </button>
                    </motion.div>
                </div>

                {/* Feature Icons */}
                <div className="relative z-10 w-full">
                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => {
                            const isActive = index === selectedFeature;
                            const isHighlighted = feature.title === "Mill-Turn";
                            const isHeroSelected = index === selectedFeature;

                            return (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => handleManualChange(index)}
                                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200 ${isHeroSelected
                                        ? 'bg-blue-400 border-2 border-white'
                                        : 'hover:bg-white/20'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${isHeroSelected ? 'bg-blue-400' : 'bg-white/20'
                                        }`}>
                                        <img
                                            src={feature.svg}
                                            alt={feature.title}
                                            className={`w-8 h-8 ${isHeroSelected ? 'opacity-100' : 'opacity-80'
                                                }`}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <feature.icon className={`w-6 h-6 ${isHeroSelected ? 'text-blue-600' : 'text-white'
                                            }`} style={{ display: 'none' }} />
                                    </div>
                                    <span className={`text-xs font-medium ${isHeroSelected ? 'text-white' : 'text-white/80'
                                        }`}>
                                        {feature.title}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        key={selectedFeature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >

                        {/* Large Image Container */}
                        <div className="relative mx-auto max-w-5xl mt-10">
                            <div className="aspect-video bg-transparent rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={features[selectedFeature].image}
                                    alt={features[selectedFeature].title}
                                    className="w-full h-full object-contain p-8"
                                    onError={(e) => {
                                        e.target.src = `https://picsum.photos/seed/${features[selectedFeature].title}/1200/675.jpg`;
                                    }}
                                />
                            </div>



                        </div>
                    </motion.div>
                </div >
            </section>




            {/* Machine-Aware Toolpath Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        key="machine-aware"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Machine-Aware Toolpath Calculation
                        </h3>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Text Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="order-2 lg:order-1 px-4 sm:px-6"
                        >
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                High-speed machining optimization with intelligent toolpath calculation
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <p className="text-gray-600">Advanced 3-axis machining capabilities</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <p className="text-gray-600">Optimized cutting parameters</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <p className="text-gray-600">Real-time toolpath adjustment</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="order-1 lg:order-2 px-4 sm:px-6"
                        >
                            <div className="relative">
                                <div className="aspect-video bg-transparent rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="TRIOVIBE2024/07/Machine-aware-toolpath-calculation-1200x695.jpg"
                                        alt="Machine-Aware Toolpath Calculation"
                                        className="w-full h-full object-contain p-8"
                                        onError={(e) => {
                                            e.target.src = `https://picsum.photos/seed/Machine-aware-toolpath-calculation/1200/695.jpg`;
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Discover TRIOVIBE 2.0 Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[2rem] overflow-hidden flex items-center justify-center text-center px-6"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/bike.jpg"
                                alt="Motorcycle Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-3xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8"
                            >
                                Discover TRIOVIBE 2.0
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed"
                            >
                                Simply Packed with innovation, beauty, and power – now enhanced with AI-driven performance, advanced automation, and smarter control of CNC and robot kinematics.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <button className="px-10 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                                    Learn more
                                </button>
                                <button className="px-10 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 backdrop-blur-md transition-all duration-300">
                                    Find a dealer
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Highlights Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Highlights</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                        {/* 1. A wide range of machining */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800 leading-tight max-w-[200px]">
                                    A wide range of machining strategies from 2D to 5D
                                </h3>
                            </div>
                            <img
                                src="TRIOVIBE2025/01/A-wide-range-of-machining.png"
                                alt="Machining strategies"
                                className="absolute bottom-0 right-0 w-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* 2. Interactive */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800">Interactive</h3>
                            </div>
                            <img
                                src="TRIOVIBE2024/07/Interactivity.png"
                                alt="Interaction"
                                className="absolute bottom-0 right-0 w-full h-3/4 object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* 3. State-of-art interface (Tall) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:row-span-2 bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800">State-of-art interface</h3>
                            </div>
                            <img
                                src="TRIOVIBE2024/07/State-of-art-interface.png"
                                alt="Modern interface"
                                className="absolute bottom-0 right-0 w-full h-[85%] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* 4. Parametric CAD */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800">Parametric CAD</h3>
                            </div>
                            <img
                                src="TRIOVIBE2024/07/Parametric-CAD-300x169.png"
                                alt="Parametric CAD"
                                className="absolute bottom-0 right-0 w-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.src = "https://picsum.photos/400/300?grayscale" }}
                            />
                        </motion.div>

                        {/* 5. NC-code simulation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                                    NC-code simulation and verification
                                </h3>
                            </div>
                            <img
                                src="TRIOVIBE2024/07/G-code-simulation.svg"
                                alt="NC Simulation"
                                className="absolute bottom-4 right-4 w-1/2 object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* 6. Crisp at 4K screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800">Crisp at 4K screens</h3>
                            </div>
                            <img
                                src="TRIOVIBE2024/07/Crisp-and-crystal-clear-interface.png"
                                alt="4K Display"
                                className="absolute bottom-0 right-0 w-full h-[60%] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* 7. Open API */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800">Open API</h3>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pt-8">
                                <img
                                    src="TRIOVIBE2024/07/Open-API.png"
                                    alt="API"
                                    className="w-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* 8. Technological independence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden relative group p-8"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-gray-800">Technological independence</h3>
                            </div>
                            <img
                                src="TRIOVIBE2024/07/Technological-independence.jpg"
                                alt="Tech Independence"
                                className="absolute bottom-0 right-0 w-full h-[70%] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Applications Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Applications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "2.5x and 3x mill",
                                desc: "Production of molds & dies and any other parts on a 3-axis milling machine",
                                img: "TRIOVIBE2024/08/2.5x-and-3x-Milling-480x480.png"
                            },
                            {
                                title: "Rotary",
                                desc: "Production of screws, blades, gear wheels, balusters",
                                img: "TRIOVIBE2024/08/Rotary-480x480.png"
                            },
                            {
                                title: "Lathe",
                                desc: "Turning and boring, threading, trimming, drilling, reaming",
                                img: "TRIOVIBE2024/07/Lathe-480x490.png"
                            },
                            {
                                title: "Mill-turn",
                                desc: "Turning and milling combined in one setup",
                                img: "TRIOVIBE2024/08/Mill-turn-480x480.png"
                            },
                            {
                                title: "Multiaxis",
                                desc: "Index (3+2) and simultaneous 5 axis milling. For turbine wheels, blades, ports",
                                img: "TRIOVIBE2024/08/Multiaxis-480x480.png"
                            },
                            {
                                title: "HSM and adaptive",
                                desc: "High speed and adaptive toolpaths for quick material removal with extended tool life",
                                img: "TRIOVIBE2024/07/HSM-and-adaptive-480x490.png"
                            },
                            {
                                title: "Swiss and MTM",
                                desc: "Swiss-type machines and MTM (multi-channel machining) with synchronization",
                                img: "TRIOVIBE2024/07/Swiss-and-MTM-480x490.png"
                            },
                            {
                                title: "5-6D cutting",
                                desc: "CNC programming of cutting, trimming, 6D knife cutting. Mill, laser, water, plasma, knife",
                                img: "TRIOVIBE2024/08/5-6D-cutting-480x480.png"
                            },
                            {
                                title: "Additive",
                                desc: "3—5D cladding with advanced layer thickness control",
                                img: "TRIOVIBE2024/08/Additive-1-480x480.png"
                            },
                            {
                                title: "EDM",
                                desc: "2 – 4 axis strategies for wire EDM machining",
                                img: "TRIOVIBE2024/08/EDM-480x480.png"
                            },
                            {
                                title: "2D cutting",
                                desc: "Programming of laser, waterjet, plasma, oxy-fuel cutting and knife cutting",
                                img: "TRIOVIBE2024/07/2D-cutting-480x490.png"
                            },
                            {
                                title: "G-code based simulation",
                                desc: "G-code verification in TRIOVIBE CAM",
                                img: "TRIOVIBE2024/08/G-code-based-simulation-480x480.png"
                            },
                            {
                                title: "Probing cycles",
                                desc: "Probing cycles for Milling and Lathe Machines",
                                img: "TRIOVIBE2024/08/Probing-480x480.png"
                            }
                        ].map((app, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-gray-50 rounded-xl p-8 transition-all hover:bg-gray-100 flex items-center justify-between min-h-[180px] group"
                            >
                                <div className="flex-1 pr-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                                    <p className="text-sm text-gray-600 leading-snug">
                                        {app.desc}
                                    </p>
                                </div>
                                <div className="w-[120px] h-[120px] flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={app.img}
                                        alt={app.title}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = `https://picsum.photos/seed/${app.title}/200/200`;
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Powered by TRIOVIBE Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Powered by TRIOVIBE</h2>
                            <p className="text-gray-400 text-lg">Daily posts from TRIOVIBE users all over the world</p>
                        </div>
                        <button
                            onClick={() => setShowAllPosts(!showAllPosts)}
                            className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all text-sm font-medium whitespace-nowrap"
                        >
                            {showAllPosts ? "Show less" : "View all"}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Complex Part Manufacturing in a Job Shop Environment",
                                date: "14 Jan 2026",
                                image: "TRIOVIBEtmpnslu91ua-480x640.jpg"
                            },
                            {
                                title: "Multi-Axis Machining in Job Shop Environments",
                                date: "12 Jan 2026",
                                image: "TRIOVIBEtmp8uow0hqj.jpg"
                            },
                            {
                                title: "Multi-Axis Robot Milling for Wooden Parts",
                                date: "12 Jan 2026",
                                image: "TRIOVIBEtmpji36pb45.jpg"
                            },
                            {
                                title: "Advanced CAM Workflow Implementation in Job Shop Setting",
                                date: "12 Jan 2026",
                                image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Robotic Sanding of Wooden Products",
                                date: "12 Jan 2026",
                                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Advanced Machining for Polymer Components in Film Production",
                                date: "12 Jan 2026",
                                image: "https://images.unsplash.com/photo-1558901357-ca41e027244a?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Complex TRIOVIBE Robot Usage for Various Industries",
                                date: "12 Jan 2026",
                                image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "MIG Welding Automation with TRIOVIBE",
                                date: "26 Dec 2025",
                                image: "https://images.unsplash.com/photo-1504917595217-d4dc5f9c4739?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Complex Milling of Custom Parts in Job Shop Environment",
                                date: "25 Dec 2025",
                                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Large-Scale Foam Machining for Sculpture Prototyping",
                                date: "23 Dec 2025",
                                image: "https://images.unsplash.com/photo-1565514434942-5fd962f28f4b?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Complex Parts Programming in Job Shop Environment",
                                date: "23 Dec 2025",
                                image: "https://images.unsplash.com/photo-1581092162384-8987c1794714?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Complex Milling Achievements Highlighted in Job Shop Environment",
                                date: "22 Dec 2025",
                                image: "https://images.unsplash.com/photo-1590674000184-d2619f906561?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Advanced Milling for Custom Components in Job Shops",
                                date: "22 Dec 2025",
                                image: "https://images.unsplash.com/photo-1618335829634-75685dfcf3b5?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Efficient Workflow in Job Shop Machining",
                                date: "19 Dec 2025",
                                image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Multi-Operation Workflow in Job Shop Machining",
                                date: "18 Dec 2025",
                                image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Efficient Toolpath Strategies for Job Shop Machining",
                                date: "18 Dec 2025",
                                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Large-Scale Robotic Additive Manufacturing in Architectural Panel Production",
                                date: "17 Dec 2025",
                                image: "https://images.unsplash.com/photo-1504917595217-d4dc5f9c4739?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Robotic Non-Planar Additive Processes for Complex Curves and Structures",
                                date: "17 Dec 2025",
                                image: "https://images.unsplash.com/photo-1558901357-ca41e027244a?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Multi-Axis Machining for Custom Parts in Job Shop Production",
                                date: "17 Dec 2025",
                                image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "High-Quality 3D Milling on Aluminum: Job Shop Insights",
                                date: "16 Dec 2025",
                                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Robotic Deburring and Inspection for Automotive Cylinder Heads",
                                date: "16 Dec 2025",
                                image: "https://images.unsplash.com/photo-1565514434942-5fd962f28f4b?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Advanced Multi-Axis Machining for Complex Aluminum Components",
                                date: "10 Dec 2025",
                                image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Multi-Axis Machining at Job Shops",
                                date: "08 Dec 2025",
                                image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1000"
                            },
                            {
                                title: "Complex Multi-Axis Machining of Metallic Components",
                                date: "07 Dec 2025",
                                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                            }
                        ].slice(0, showAllPosts ? 24 : 3).map((post, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-800 relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="space-y-3 px-2">
                                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                                        <span>Powered by TRIOVIBE</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learn TRIOVIBE Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[480px] rounded-[2rem] overflow-hidden flex items-center p-8 md:p-16"
                    >
                        {/* Background Image with Gradient Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                                alt="Learning Center"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <div className="max-w-xl">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                                >
                                    Learn TRIOVIBE <br />like a PRO!
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-lg md:text-xl text-white/80 leading-relaxed"
                                >
                                    TRIOVIBE online learning center is the original online training
                                    solution for TRIOVIBE. These online tutorials will shorten your
                                    learning curve dramatically. Join today!
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <button className="px-10 py-4 bg-[#00c58e] hover:bg-[#00b07f] text-white font-semibold rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/20 group">
                                    Explore courses
                                    <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">Get started with TRIOVIBE</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Download Trial Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 relative bg-gradient-to-r from-[#00c58e] to-[#2b89ff] rounded-[2rem] overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group"
                        >
                            <div className="relative z-10 max-w-sm">
                                <h3 className="text-4xl font-bold text-white mb-4">Download Trial</h3>
                                <p className="text-white/90 text-xl mb-10 leading-relaxed">
                                    Free 30-day version with online onboarding
                                </p>
                                <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all">
                                    Download <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="relative mt-8 md:mt-0 md:ml-8 w-full md:w-[450px]">
                                <img
                                    src="TRIOVIBE2024/07/Hardware-acceleration-1-1024x576.png"
                                    alt="Software Interface"
                                    className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* Get a Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-[#1e2229] p-8 md:p-12 flex flex-col justify-center min-h-[400px]"
                            style={{
                                borderRadius: '2rem',
                                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                            }}
                        >
                            <h3 className="text-4xl font-bold text-white mb-4">Get a Quote</h3>
                            <p className="text-white/70 text-lg mb-10 leading-relaxed">
                                Find a local dealer and request pricing
                            </p>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="w-fit px-10 py-4 bg-gradient-to-r from-[#00c58e] to-[#2b89ff] text-white font-bold rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-[#00c58e]/20 transition-all"
                            >
                                Request <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </>

    );
};

export default TRIOVIBE;
