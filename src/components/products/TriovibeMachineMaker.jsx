"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Settings,
    Box,
    Monitor,
    Cpu,
    Layers,
    Database,
    Workflow,
    Share2,
    ChevronRight,
    Trophy,
    Target,
    Zap,
    Maximize2
} from 'lucide-react';
import Footer from '../Footer';

const TRIOVIBEMachineMaker = ({ setCurrentPage }) => {
    const [selectedSlider, setSelectedSlider] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sliderIntervalRef = useRef(null);

    const sliderData = [
        {
            title: "Build virtual CNC machines",
            image: "https://encycam.com/wp-content/uploads/2024/08/Build-virtual-CNC-machines-768x431.jpg",
            icon: Settings
        },
        {
            title: "Interactive UI",
            image: "https://encycam.com/wp-content/uploads/2024/08/Interactive-UI-MachineMaker-768x432.jpg",
            icon: Monitor
        },
        {
            title: "Tailor made for CAD/CAM",
            image: "https://encycam.com/wp-content/uploads/2024/08/Tailor-made-for-CADCAM-768x431.jpg",
            icon: Target
        },
        {
            title: "Build virtual robotic cells",
            image: "https://encycam.com/wp-content/uploads/2024/08/Build-virtual-robotic-cells-768x431.jpg",
            icon: Cpu
        },
        {
            title: "Use components library",
            image: "https://encycam.com/wp-content/uploads/2024/08/Use-components-library-768x432.jpg",
            icon: Database
        },
        {
            title: "Build your own components",
            image: "https://encycam.com/wp-content/uploads/2024/08/Build-your-own-components-768x432.jpg",
            icon: Layers
        },
        {
            title: "TRIOVIBE Collaboration",
            image: "https://encycam.com/wp-content/uploads/2024/09/TRIOVIBE-Collaboration-768x444.jpg",
            icon: Share2
        },
        {
            title: "Natively compatible",
            image: "https://encycam.com/wp-content/uploads/2024/09/TRIOVIBE-Collaboration-768x444.jpg", // Reusing collaboration image as proxy
            icon: Zap
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            sliderIntervalRef.current = setInterval(() => {
                setSelectedSlider((prev) => (prev + 1) % sliderData.length);
            }, 5000);
        }
        return () => clearInterval(sliderIntervalRef.current);
    }, [isAutoPlaying]);

    const digitalTwinFeatures = [
        {
            id: "simplify",
            title: "Simplify 3d models",
            description: "Import and simplify 3D models of equipment to remove unwanted elements, minimize memory consumption, and ensure smooth operation.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Simplify-3d-models-640x371.jpg"
        },
        {
            id: "kinematics",
            title: "Define kinematics",
            description: "Easily set up complex machine kinematics with intuitive controls and real-time feedback.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Interactive-UI-MachineMaker-768x432.jpg" // Placeholder for actual kinematic UI
        },
        {
            id: "assemblies",
            title: "Create assemblies",
            description: "Organize your machine components into logical assemblies for easier management and simulation.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Build-your-own-components-768x432.jpg"
        },
        {
            id: "cadcam",
            title: "Specify settings for CAD/CAM",
            description: "Configure post-processor settings and machine parameters tailored for your specific CNC/Robot environment.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Tailor-made-for-CADCAM-768x431.jpg"
        }
    ];

    const [activeTwinFeature, setActiveTwinFeature] = useState(digitalTwinFeatures[0]);

    return (
        <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-orange-500 selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] bg-gradient-to-br from-[#FF9D00] via-[#FFB700] to-[#FF8000] overflow-hidden flex flex-col pt-24">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tight"
                    >
                        MachineMaker: <br />
                        <span className="text-white drop-shadow-sm">Zero-code digital twin builder</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-900/80 max-w-3xl font-medium mb-12"
                    >
                        Advanced and interactive builder for virtual CNC machines and robotic cells
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 mb-20"
                    >
                        <button className="px-12 py-5 bg-[#1F2937] text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-gray-900/20 text-lg">
                            Start for free
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-white/20 text-lg"
                        >
                            Talk to sales
                        </button>
                    </motion.div>

                    {/* Feature Quick Select Icons */}
                    <div className="w-full max-w-6xl overflow-x-auto pb-8 scrollbar-hide">
                        <div className="flex justify-center gap-4 md:gap-8 min-w-max px-4">
                            {sliderData.slice(0, 4).map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                                    className="flex flex-col items-center group cursor-pointer"
                                    onClick={() => {
                                        setSelectedSlider(idx);
                                        setIsAutoPlaying(false);
                                    }}
                                >
                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300 shadow-lg ${selectedSlider === idx ? 'bg-white text-orange-600 scale-110' : 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30'}`}>
                                        <feature.icon className="w-10 h-10" />
                                    </div>
                                    <span className={`mt-4 text-sm font-bold max-w-[120px] transition-colors ${selectedSlider === idx ? 'text-gray-900' : 'text-gray-900/60 group-hover:text-gray-900'}`}>
                                        {feature.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Showcase Image (Part of Hero Area) */}
                <div className="container mx-auto px-6 relative z-10 -mb-20 md:-mb-40">
                    <motion.div
                        key={selectedSlider}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-white/30 backdrop-blur-sm"
                    >
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900/90 flex items-center px-6 gap-3 z-20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">
                                    TRIOVIBE MachineMaker - {sliderData[selectedSlider].title}
                                </span>
                            </div>
                        </div>
                        <div className="aspect-video bg-[#0f1115] pt-12">
                            <img
                                src={sliderData[selectedSlider].image}
                                alt={sliderData[selectedSlider].title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Build Digital Twins Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Build digital twins with no coding</h2>
                        <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            {digitalTwinFeatures.map((feat) => (
                                <motion.div
                                    key={feat.id}
                                    onMouseEnter={() => setActiveTwinFeature(feat)}
                                    className={`relative pl-12 cursor-pointer group transition-all duration-500`}
                                >
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 rounded-full ${activeTwinFeature.id === feat.id ? 'bg-orange-500 h-full' : 'bg-gray-200 h-8 group-hover:h-full'}`} />

                                    <h3 className={`text-3xl font-bold mb-4 transition-all duration-300 ${activeTwinFeature.id === feat.id ? 'text-gray-900' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                        {feat.title}
                                    </h3>

                                    <AnimatePresence>
                                        {activeTwinFeature.id === feat.id && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-gray-600 text-lg leading-relaxed overflow-hidden"
                                            >
                                                {feat.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative">
                            <motion.div
                                key={activeTwinFeature.id}
                                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10 p-3 bg-white rounded-[2.5rem] shadow-3xl border border-gray-100 overflow-hidden"
                            >
                                <img
                                    src={activeTwinFeature.image}
                                    alt={activeTwinFeature.title}
                                    className="w-full h-auto rounded-[2rem] shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
                            </motion.div>
                            {/* Decorative blur elements */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-200/50 rounded-full blur-[100px] z-0" />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-[100px] z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section - Dark Card */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0F172A] rounded-[4rem] p-10 md:p-20 relative overflow-hidden group shadow-3xl"
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 text-orange-500 font-bold text-sm uppercase tracking-widest mb-8">
                                    <Zap className="w-4 h-4 fill-orange-500" /> Key Features
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                    Key features:  Interactivity, ease of use and <span className="text-orange-500">valuable content</span>
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                                    One of the most innovative digital tools for accurately moving your production equipment from the real world to the virtual world.
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                                            <Workflow className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white">Seamless Workflow</h4>
                                        <p className="text-gray-500 text-sm">Convert CAD models to active kinematic units in minutes.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                                            < Database className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white">Rich Library</h4>
                                        <p className="text-gray-500 text-sm">Access thousands of pre-built robot and machine models.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative rounded-3xl overflow-hidden border border-white/10 shadow-4xl"
                                >
                                    <img
                                        src="https://encycam.com/wp-content/uploads/2024/08/Key-features-480x356.jpg"
                                        alt="Key Features Showcase"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
                                </motion.div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[240px]">
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                                        <Trophy className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-gray-900 leading-none">100%</div>
                                        <div className="text-xs text-gray-500 font-bold uppercase mt-1">Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Learn TRIOVIBE Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative min-h-[500px] rounded-[3rem] overflow-hidden flex items-center p-8 md:p-16 group"
                    >
                        {/* Background Image with Gradient Overlay */}
                        <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[3s]">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                                alt="Learning Center"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-12">
                            <div className="max-w-xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                                        Learn TRIOVIBE <br />
                                        <span className="text-orange-500">like a PRO!</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
                                        TRIOVIBE online learning center is the original online training
                                        solution for TRIOVIBE. These online tutorials will shorten your
                                        learning curve dramatically. Join today!
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <button className="px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl flex items-center gap-3 transition-all duration-500 shadow-2xl shadow-orange-500/40 group overflow-hidden relative">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explore courses
                                        <Share2 className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fb]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">Get started with TRIOVIBE</h2>
                            <p className="text-xl text-gray-500">Choose your path to excellence.</p>
                        </div>
                        <div className="h-0.5 flex-1 bg-gray-200 hidden md:block mx-12 mb-6" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Download Trial Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 relative bg-gradient-to-br from-[#FF9D00] to-[#FF4500] rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between group shadow-3xl shadow-orange-500/20"
                        >
                            <div className="relative z-10 max-w-sm">
                                <h3 className="text-5xl font-black text-white mb-6">Download Trial</h3>
                                <p className="text-white/90 text-2xl mb-12 leading-relaxed font-medium">
                                    Free 30-day version with online onboarding
                                </p>
                                <button className="px-12 py-5 bg-[#1F2937] text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-gray-800 transition-all shadow-2xl group/btn">
                                    Get Started Free
                                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                            <div className="relative mt-12 md:mt-0 md:ml-12 w-full md:w-[480px]">
                                <motion.div
                                    whileHover={{ rotate: -2, scale: 1.05 }}
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-4xl"
                                >
                                    <img
                                        src="https://encycam.com/wp-content/uploads/2025/08/State-of-art-UI-medium-480x270.png"
                                        alt="Software Interface"
                                        className="rounded-2xl shadow-2xl"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Get a Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-[#0F172A] p-8 md:p-14 flex flex-col justify-between group shadow-3xl overflow-hidden"
                            style={{
                                borderRadius: '3rem',
                                clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)'
                            }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] pointer-events-none" />

                            <div>
                                <h3 className="text-4xl font-black text-white mb-6">Get a Quote</h3>
                                <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                                    Find a local dealer and request pricing
                                </p>
                            </div>

                            <div className="space-y-8">
                                <ul className="space-y-4">
                                    {['Expert consultation', 'Custom pricing', 'Flexible licensing'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/60 text-sm font-bold uppercase tracking-widest">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setCurrentPage('contact')}
                                    className="w-full px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all duration-500 group/quote"
                                >
                                    Request Pricing
                                    <Maximize2 className="w-5 h-5 group-hover/quote:scale-125 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TRIOVIBEMachineMaker;
