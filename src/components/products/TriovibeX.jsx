"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer';

const TRIOVIBEX = ({ setCurrentPage }) => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.2, y: 0 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        className="absolute bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 0.1, y: 0 }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                        className="absolute bottom-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
                            ENCY X: CAD/CAM ecosystem <br /> built to transform the way you work
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            The concept behind ENCY X is straightforward. We evaluate the broader context in which a CAD/CAM programmer operates, automating workflow elements beyond the software's direct use. We discovered that, aside from NC-code creation, communication and data exchange are the most time-consuming tasks. To address this, we developed ENCY Clouds, a cloud-based collaboration tool combining an online chat and a project library, seamlessly integrated into our software. This reduces clicks and ensures a smooth workflow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg">
                            Start for free
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-200 text-lg"
                        >
                            Talk to sales
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* What is ENCY X Section */}
            <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
                    >
                        What is ENCY X?
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-1/2 text-gray-700"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                A new CNC machines and robots programming experience
                            </h3>
                            <p className="text-lg font-semibold text-gray-800 mb-8">
                                ENCY Software CEO explains:
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 text-blue-600 text-2xl mt-1">↗</span>
                                    <p className="text-base leading-relaxed">
                                        The concept behind ENCY X is straightforward. We evaluate the broader
                                        context in which a CAD/CAM programmer operates, automating
                                        workflow elements beyond the software's direct use.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 text-blue-600 text-2xl mt-1">💬</span>
                                    <p className="text-base leading-relaxed">
                                        We discovered that, aside from NC-code creation, communication and
                                        data exchange are the most time-consuming tasks. To address this, we
                                        developed ENCY Clouds, a cloud-based collaboration tool combining an
                                        online chat and a project library, seamlessly integrated into our software.
                                        This reduces clicks and ensures a smooth workflow.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 text-blue-600 text-2xl mt-1">📦</span>
                                    <p className="text-base leading-relaxed">
                                        All our CAD/CAM products—ENCY, ENCY Robot, and ENCY Tuner—are
                                        now connected through ENCY Clouds, forming the ENCY X platform. This
                                        creates a transparent environment for programmers, operators, experts,
                                        and engineers, providing ultra-fast communication and data exchange. As
                                        a cherry on top, we've injected an AI assistant into the collaboration chat
                                        to enhance productivity.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 text-blue-600 text-2xl mt-1">✉️</span>
                                    <p className="text-base leading-relaxed">
                                        No more emails, cloud drives, bloated hard drives, paper, or manually
                                        sending photos and videos to analyze issues.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="flex-shrink-0 text-blue-600 text-2xl mt-1">✨</span>
                                    <p className="text-base leading-relaxed">
                                        We are excited to welcome CAD/CAM programmers to new CNC
                                        machines and robots programming experience.
                                    </p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Right Column - Video */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-1/2"
                        >
                            <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                                <div className="relative aspect-video">
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                    >
                                        <source src="https://encycam.com/wp-content/uploads/2024/09/ENCY_X.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="p-6 bg-white">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Andrei Kharatsidi</h4>
                                    <p className="text-gray-600">CEO at ENCY Software</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ENCY CAD/CAM Section */}
            <section className="relative bg-[#1a1a2e] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800 to-transparent opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-gray-900 to-transparent opacity-20"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
                    >
                        {/* Left Column - Text Content */}
                        <div className="lg:w-1/2 text-white">
                            <h3 className="text-4xl font-bold mb-4">ENCY</h3>
                            <p className="text-xl font-semibold mb-6">CAD/CAM for a new generation</p>
                            <div className="w-24 h-1 bg-white mb-8"></div>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Modern interface with a dark theme
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Extensive technological capabilities
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Powerful Multiaxis Milling, Mill-Turn & Swiss Turning
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Additive & Hybrid manufacturing
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Machine-Aware Technology: toolpath calculation considering the digital twin of the machine
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Direct toolpath editing
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    State-of-the-art simulation
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Postprocessor generator
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Image */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://encycam.com/wp-content/uploads/2024/08/State-of-art-UI.jpg"
                                    alt="ENCY CAD/CAM Software Interface"
                                    className="w-full h-auto rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ENCY Robot Section */}
            <section className="relative bg-[#1a1a2e] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800 to-transparent opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-gray-900 to-transparent opacity-20"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-orange-400 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
                    >
                        {/* Left Column - Text Content */}
                        <div className="lg:w-1/2 text-white">
                            <h3 className="text-4xl font-bold mb-4">ENCY Robot</h3>
                            <p className="text-xl font-semibold mb-6">A complete offline robot programming solution</p>
                            <div className="w-24 h-1 bg-white mb-8"></div>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    A true all-in-one package: design, technology setup, toolpath calculation and simulation
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Support for robots with any kinematics
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Robot kinematics optimization for singularity avoidance and collision free movements
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Zero-code digital twin builder for robotic cells
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Virtual Setup and Tool Management
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Pre-defined postprocessors and high-quality 3D models of robots from top brands
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Image */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://encycam.com/wp-content/uploads/2024/08/State-of-art-UI-robot.jpg"
                                    alt="ENCY Robot Software Interface"
                                    className="w-full h-auto rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ENCY Hyper Section */}
            <section className="relative bg-[#1a1a2e] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800 to-transparent opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-gray-900 to-transparent opacity-20"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
                    >
                        {/* Left Column - Text Content */}
                        <div className="lg:w-1/2 text-white">
                            <h3 className="text-4xl font-bold mb-4">ENCY Hyper</h3>
                            <p className="text-xl font-semibold mb-6">Advanced process optimization</p>
                            <div className="w-24 h-1 bg-white mb-8"></div>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Advanced toolpath optimization algorithms
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Real-time machining parameter adjustment
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Intelligent feed rate optimization
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Surface quality prediction and improvement
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Integration with CAD/CAM workflow
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Image */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://encycam.com/wp-content/uploads/2024/08/ENCY-Hyper.jpg"
                                    alt="ENCY Hyper Software Interface"
                                    className="w-full h-auto rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ENCY AI and ENCY Clouds Section */}
            <section className="relative bg-[#1a1a2e] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800 to-transparent opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-gray-900 to-transparent opacity-20"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-[#2a2a3e] rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-start justify-between gap-8"
                    >
                        {/* ENCY AI Column */}
                        <div className="lg:w-1/2 text-white p-6 border-r border-gray-700 lg:pr-12">
                            <h3 className="text-4xl font-bold mb-4">ENCY AI</h3>
                            <p className="text-xl font-semibold mb-6">The magic of artificial intelligence for real manufacturing</p>
                            <div className="w-24 h-1 bg-white mb-8"></div>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    An industry-leading support AI integrated into the ENCY software suite. Unlike other systems, ENCY AI does not need text prompts or queries – it analyses the 3D model and provides appropriate workflow recommendations, along with predictions of progress and outcomes of the machining project
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    ENCY AI is targeted at supporting all skill levels, ranging from explanation of commands and canned cycles through to offering advanced optimization suggestions for experienced users
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Automagic generation of usable NC code from user text descriptions of the desired operations
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Write code in Python to create .dxf or .stl files
                                </li>
                            </ul>
                        </div>

                        {/* ENCY Clouds Column */}
                        <div className="lg:w-1/2 text-white p-6 lg:pl-12">
                            <h3 className="text-4xl font-bold mb-4">ENCY Clouds</h3>
                            <p className="text-xl font-semibold mb-6">Cloud-based collaboration platform</p>
                            <div className="w-24 h-1 bg-white mb-8"></div>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    A cloud-based collaboration tool combining an online chat and a project library, seamlessly integrated into our software
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Reduces clicks and ensures a smooth workflow
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    All our CAD/CAM products—ENCY, ENCY Robot, and ENCY Tuner—are now connected through ENCY Clouds, forming the ENCY X platform
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    Creates a transparent environment for programmers, operators, experts, and engineers, providing ultra-fast communication and data exchange
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    AI assistant injected into the collaboration chat to enhance productivity
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white text-2xl">•</span>
                                    No more emails, cloud drives, bloated hard drives, paper, or manually sending photos and videos to analyze issues
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Benefits Section */}
            <section className="relative bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-gray-900 mb-16">Benefits</h2>

                    {/* Top Row of Benefit Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Card 1: Gain in time */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="bg-[#00D17A] rounded-3xl p-8 shadow-xl text-white text-left flex flex-col items-start"
                        >
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Gain in time</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Up to 70% faster programming</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Reduced setup time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Automated workflows</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Card 2: Easy-to-use */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="bg-[#0066FF] rounded-3xl p-8 shadow-xl text-white text-left flex flex-col items-start"
                        >
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Easy-to-use</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Intuitive interface</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Minimal learning curve</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Context-sensitive help</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Card 3: Painless switching */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="bg-[#2A2A3E] rounded-3xl p-8 shadow-xl text-white text-left flex flex-col items-start"
                        >
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M7 12h10m-5-5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Painless switching from other CAD/CAM systems</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Import existing files</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Familiar workflows</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Migration assistance</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Bottom Row - Single Wide Card */}
                    <div className="grid grid-cols-1 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="bg-[#2A2A3E] rounded-3xl p-8 shadow-xl text-white text-left flex flex-col lg:flex-row items-center justify-between gap-8"
                        >
                            <div className="flex items-center gap-6 lg:w-1/2">
                                <div className="flex-shrink-0">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">Streamlined programming and executing NC code</h3>
                            </div>
                            <ul className="space-y-2 text-sm lg:w-1/2">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Ecosystem for operating machines and robots</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Programmers and operators collaborate in a connected environment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Fast, user-friendly cloud collaboration tools to minimize time lost in NC-code fine-tuning</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl font-extrabold text-gray-900 mb-12"
                    >
                        Get started with ENCY
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
                        {/* Download Trial Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="relative flex-1 bg-gradient-to-br from-green-400 to-blue-500 shadow-xl text-white flex flex-col justify-between items-start overflow-hidden lg:max-w-3xl"
                            style={{
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 95% 100%, 0% 100%)',
                            }}
                        >
                            <div className="relative z-10 p-8">
                                <h3 className="text-4xl font-bold mb-4">Download Trial</h3>
                                <p className="text-lg mb-8">Free 30-day version with online onboarding</p>
                                <button className="bg-white text-green-600 px-6 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:bg-gray-100">
                                    <span>Download</span>
                                    <span>→</span>
                                </button>
                            </div>
                            <img
                                src="https://encycam.com/wp-content/uploads/2025/08/State-of-art-UI-medium-480x270.png"
                                alt="ENCY Software Interface"
                                className="absolute bottom-0 right-0 opacity-80 rounded-lg"
                                style={{
                                    transform: 'translateY(15%) translateX(10%)',
                                    width: '80%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.div>

                        {/* Get a Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="flex-1 bg-[#2A2A3E] rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between items-start lg:max-w-md"
                        >
                            <h3 className="text-4xl font-bold mb-4">Get a Quote</h3>
                            <p className="text-lg mb-8">Find a local dealer and request pricing</p>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:opacity-90"
                            >
                                <span>Request</span>
                                <span>→</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
};

export default TRIOVIBEX;
