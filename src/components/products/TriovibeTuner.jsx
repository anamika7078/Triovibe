"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Monitor,
    FileCode,
    Layers,
    Settings,
    Edit,
    RefreshCw,
    Users,
    Wrench,
    ChevronRight,
    PlayCircle,
    Shield,
    Zap
} from 'lucide-react';
import Footer from '../Footer';

const TRIOVIBETuner = ({ setCurrentPage }) => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef(null);

    const heroFeatures = [
        {
            id: 0,
            icon: Monitor,
            title: "Full machine simulation",
            description: "Complete digital twin simulation of your CNC machines.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Full-machine-simulation-1024x571.jpg"
        },
        {
            id: 1,
            icon: FileCode,
            title: "NC-code preview",
            description: "Quickly preview and validate G-code files before production.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-quick-preview-1024x593.jpg"
        },
        {
            id: 2,
            icon: Layers,
            title: "Material removal simulation",
            description: "Visualize the machining process and material removal in real-time.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Material-removal-simulation-1024x576.jpg"
        },
        {
            id: 3,
            icon: Wrench,
            title: "Machine setup definition",
            description: "Define tools, fixtures, and machine configurations with ease.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-simulation-1024x575.jpg"
        },
        {
            id: 4,
            icon: Edit,
            title: "NC-code editing",
            description: "Advanced editor for professional NC program modification.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-editing-240x135.jpg"
        },
        {
            id: 5,
            icon: RefreshCw,
            title: "NC-code reengineering",
            description: "Transform legacy G-code into modern, optimized programs.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-reengineering-1024x576.jpg"
        },
        {
            id: 6,
            icon: Users,
            title: "Collaboration",
            description: "Share and collaborate on projects with your team seamlessly.",
            image: "https://encycam.com/wp-content/uploads/2024/09/TRIOVIBE-Collaboration-1024x592.jpg"
        }
    ];

    const sideFeatures = [
        {
            title: "NC-code quick preview",
            description: "Experience zero-friction NC-code previews for rapid file identification and evaluation. This feature allows you to quickly preview NC-code before running it on a real machine. Additionally, you can edit NC-code directly from the preview, enhancing your workflow efficiency.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-quick-preview-1024x593.jpg"
        },
        {
            title: "NC-code editing",
            description: "Professional NC-code editing tools with syntax highlighting, search and replace, and advanced formatting options to ensure your programs are perfect.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-editing-240x135.jpg"
        },
        {
            title: "Simulation",
            description: "Realistic 3D simulation of the machining process including tool motion, material removal, and collision detection for safer production.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-simulation-1024x575.jpg"
        },
        {
            title: "Machine setup",
            description: "Define your machine environment, including parts, fixtures, and tools, to ensure an accurate simulation and collision-free operations.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-quick-preview-1024x593.jpg"
        },
        {
            title: "Machining result control",
            description: "Compare the simulated part with the design model to detect deviations and ensure the highest quality of the finished product.",
            image: "https://encycam.com/wp-content/uploads/2024/08/NC-code-files-compare-1024x571.jpg"
        }
    ];

    const [selectedSideFeature, setSelectedSideFeature] = useState(0);

    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
            }, 5000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isAutoPlaying]);

    const handleManualSelect = (index) => {
        setActiveFeature(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-b from-[#0052D4] via-[#4364F7] to-[#6FB1FC] flex flex-col items-center justify-start overflow-hidden pt-24">
                {/* Animated Orbs */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        ENCY Tuner: Shop-floor <br /> NC-code simulation software
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto font-medium"
                    >
                        NC-code simulation, fine-tuning, and re-engineering for CNC machines and industrial robots
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-16"
                    >
                        <button className="px-10 py-4 bg-slate-900/90 backdrop-blur-md text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-2xl">
                            Start for free
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-10 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl"
                        >
                            Talk to sales
                        </button>
                    </motion.div>
                </div>

                {/* Hero Features Icons Overlay */}
                <div className="relative z-20 w-full mt-auto pb-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {heroFeatures.map((feature, idx) => (
                                <button
                                    key={feature.id}
                                    onClick={() => handleManualSelect(idx)}
                                    className={`flex flex-col items-center gap-3 group transition-all duration-300 p-4 rounded-2xl ${activeFeature === idx
                                        ? 'bg-white/20 backdrop-blur-md scale-110 shadow-lg border border-white/30'
                                        : 'hover:bg-white/10'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl transition-colors ${activeFeature === idx ? 'bg-white text-blue-600' : 'bg-white/10 text-white'
                                        }`}>
                                        <feature.icon size={24} strokeWidth={2.5} />
                                    </div>
                                    <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider text-center max-w-[80px] leading-tight ${activeFeature === idx ? 'text-white' : 'text-white/70'
                                        }`}>
                                        {feature.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Image Display Case */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 -mb-64">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="relative group h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
                        >
                            <img
                                src={heroFeatures[activeFeature].image}
                                className="w-full h-full object-cover"
                                alt={heroFeatures[activeFeature].title}
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <h3 className="text-2xl font-bold mb-2">{heroFeatures[activeFeature].title}</h3>
                                <p className="text-gray-300">{heroFeatures[activeFeature].description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Spacer for the overlapping hero image */}
            <div className="h-80 bg-[#050505]"></div>

            {/* Feature Navigation Section (Side Sidebar style) */}
            <section className="py-32 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ultimate shop-floor NC-code <br />fine tuning software</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4 space-y-4">
                            {sideFeatures.map((feature, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedSideFeature(idx)}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex flex-col gap-2 ${selectedSideFeature === idx
                                        ? 'bg-blue-600/10 border-l-4 border-blue-600'
                                        : 'hover:bg-white/5 border-l-4 border-transparent'
                                        }`}
                                >
                                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${selectedSideFeature === idx ? 'text-white' : 'text-white/40'
                                        }`}>
                                        {feature.title}
                                    </h3>
                                    {selectedSideFeature === idx && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-gray-400 text-sm leading-relaxed mt-2"
                                        >
                                            {feature.description}
                                        </motion.p>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Display Content */}
                        <div className="lg:col-span-8 relative">
                            <div className="bg-blue-600/5 rounded-3xl p-4 md:p-8 border border-blue-500/10">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={selectedSideFeature}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="rounded-2xl overflow-hidden shadow-2xl relative"
                                    >
                                        {/* Window Controls Mockup */}
                                        <div className="bg-[#1a1d24] h-10 px-4 flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <div className="ml-4 text-[10px] text-gray-500 font-mono tracking-tight uppercase">
                                                {sideFeatures[selectedSideFeature].title}
                                            </div>
                                        </div>
                                        <img
                                            src={sideFeatures[selectedSideFeature].image}
                                            className="w-full h-auto aspect-video object-cover"
                                            alt={sideFeatures[selectedSideFeature].title}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[120px] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discover TRIOVIBE 2.0 Banner */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl"
                    >
                        <img
                            src="https://encycam.com/wp-content/uploads/2024/09/TRIOVIBE-Collaboration-1024x592.jpg"
                            alt="Motorcycle background"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-end text-center p-8 pb-20">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-bold text-white mb-8"
                            >
                                Discover TRIOVIBE 2.0
                            </motion.h2>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/90 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
                            >
                                Simply Packed with innovation, beauty, and power – now enhanced with AI-driven performance, advanced automation, and smarter control of CNC and robot kinematics.
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-6"
                            >
                                <button className="px-10 py-4 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-teal-500/40 transition-all">
                                    Learn more
                                </button>
                                <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                                    Find a dealer
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Legacy G-code Section */}
            <section className="py-32 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                Bringing flexibility <br /> to legacy g-code library
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                This is a solution for users who have extensive legacy G-code libraries accumulated over years of using other CAD/CAM software.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Old, outdated CAD/CAM software no longer meets the demands of modern production. However, transitioning to new software poses challenges due to the vast legacy library that requires maintenance. Starting from scratch to create all these NC programs is not feasible. This is where g-code re-engineering becomes essential.
                            </p>
                            <div className="flex items-start gap-4 p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                                <div className="bg-blue-600 p-3 rounded-xl text-white">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1 text-white">Effortless Import</h4>
                                    <p className="text-gray-400">Simply import legacy g-code into TRIOVIBE Tuner, simulate, and verify. If necessary, eliminate unwanted segments and replace them with TRIOVIBE native operations.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-2 bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://encycam.com/wp-content/uploads/2024/08/Bringing-flexibility-to-legacy-g-code-library.jpg"
                                className="w-full h-auto rounded-3xl"
                                alt="Legacy G-code Library"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>
                        </motion.div>
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
                                    src="https://encycam.com/wp-content/uploads/2025/08/State-of-art-UI-medium-480x270.png"
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
        </div>
    );
};

export default TRIOVIBETuner;

