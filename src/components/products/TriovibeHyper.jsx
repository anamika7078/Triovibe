"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Cpu,
    Zap,
    Layers,
    Monitor,
    Box,
    Play,
    ShieldCheck,
    Activity,
    Command,
    Smartphone,
    Globe,
    CheckCircle2,
    ChevronRight,
    Search,
    Download,
    MessageSquare,
    Video
} from 'lucide-react';
import Footer from '../Footer';

const TRIOVIBEHyper = ({ setCurrentPage }) => {
    const [selectedFeature, setSelectedFeature] = useState(0);
    const [activeWorkflowMode, setActiveWorkflowMode] = useState(1); // Default to Parts Mode
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const featureIntervalRef = useRef(null);

    const features = [
        {
            icon: Cpu,
            title: "Multi-brand support",
            image: "https://encycam.com/wp-content/uploads/2025/11/Support-for-robots-from-various-manufacturers-1-1024x577.jpg",
            description: "Built-in support for robots from all major manufacturers, providing a unified programming interface."
        },
        {
            icon: Activity,
            title: "Real-time control",
            image: "https://encycam.com/wp-content/uploads/2025/11/Real-time-robot-control-1024x576.jpg",
            description: "Direct connection to the robot controller for instantaneous feedback and fine-tuning."
        },
        {
            icon: Command,
            title: "Block-based programming",
            image: "https://encycam.com/wp-content/uploads/2025/11/Block-based-programming-that-requires-no-special-expertise-1024x576.jpg",
            description: "Intuitive visual programming that empowers every shop-floor operator without requiring coding expertise."
        },
        {
            icon: ShieldCheck,
            title: "Collision avoidance",
            image: "https://encycam.com/wp-content/uploads/2025/11/Built-in-collision-avoidance-system-1024x576.jpg",
            description: "Advanced safety algorithms that predict and prevent collisions in both virtual and real environments."
        },
        {
            icon: Zap,
            title: "Trajectory calculation",
            image: "https://encycam.com/wp-content/uploads/2025/11/Touchscreen-optimized-interface-1024x576.jpg",
            description: "High-performance trajectory generation for smooth and precise robot movements."
        },
        {
            icon: Smartphone,
            title: "Cross-platform solution",
            image: "https://encycam.com/wp-content/uploads/2025/11/Cross-platform-solution-1-1024x576.jpg",
            description: "Work seamlessly across PCs, tablets, and touchscreen-optimized industrial consoles."
        }
    ];

    const workflowModes = [
        {
            id: 0,
            title: "Cell Mode",
            description: "Configure your robotic cell environment, including machines, safety barriers, and peripheral equipment.",
            image: "https://encycam.com/wp-content/uploads/2024/08/Zero-code-digital-twin-builder.jpg"
        },
        {
            id: 1,
            title: "Parts Mode",
            description: "In this mode, you define the parts. You can import a CAD model or build a parametric one directly. Then you set the gripping points and arrange the parts in the workspace — for example, on pallets or tables.",
            image: "https://encycam.com/wp-content/uploads/2025/11/Block-based-programming-that-requires-no-special-expertise-1024x576.jpg"
        },
        {
            id: 2,
            title: "Programming Mode",
            description: "Link actions and movements using the block-based interface to create complex automated tasks quickly.",
            image: "https://encycam.com/wp-content/uploads/2025/11/Touchscreen-optimized-interface-1024x576.jpg"
        },
        {
            id: 3,
            title: "Run Mode",
            description: "Execute and monitor your program on the real robot with real-time digital twin synchronization.",
            image: "https://encycam.com/wp-content/uploads/2025/11/Real-time-robot-control-1024x576.jpg"
        }
    ];

    const advantages = [
        {
            category: "Traditional online methods",
            points: ["Zero downtime", "Real-time digital twin feedback", "Multi-brand compatibility", "Smart auto-calibration", "Fast changeovers"]
        },
        {
            category: "Pure offline systems",
            points: ["Real-world synchronization", "Minimal post-calibration", "Bi-directional workflow", "Lightweight deployment", "Adaptive learning"]
        },
        {
            category: "AI-only tools",
            points: ["Human-supervised intelligence", "Deterministic results", "Full process context", "Industrial reliability", "Collaborative hybrid mode"]
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            featureIntervalRef.current = setInterval(() => {
                setSelectedFeature((prev) => (prev + 1) % features.length);
            }, 4000);
        }
        return () => clearInterval(featureIntervalRef.current);
    }, [isAutoPlaying]);

    const handleFeatureClick = (index) => {
        setSelectedFeature(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="bg-[#050505] min-h-screen font-sans selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#2DD4BF] overflow-hidden pt-24 flex flex-col items-center">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-[-15deg] translate-x-1/4 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center flex-1 justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            TRIOVIBE Hyper: hybrid programming <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white drop-shadow-lg">
                                of industrial robots
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-medium mb-12 leading-relaxed">
                            Empowers every shop-floor operator with the capabilities of a professional robot platform.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 mb-20"
                    >
                        <button className="px-12 py-5 bg-gray-900/90 text-white font-bold rounded-2xl hover:bg-black transition-all duration-300 shadow-2xl text-lg flex items-center gap-3">
                            Start for free <ArrowRight className="w-5 h-5 text-teal-400" />
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-12 py-5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl text-lg"
                        >
                            Talk to sales
                        </button>
                    </motion.div>

                    {/* Hero Feature Icons */}
                    <div className="w-full max-w-7xl overflow-x-auto pb-10 scrollbar-hide">
                        <div className="flex justify-center gap-4 md:gap-8 min-w-max px-6">
                            {features.map((feat, idx) => (
                                <motion.button
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                                    onClick={() => handleFeatureClick(idx)}
                                    className={`flex flex-col items-center group transition-all duration-300 p-4 rounded-3xl ${selectedFeature === idx ? 'bg-white/20 backdrop-blur-xl scale-110 shadow-2xl' : 'hover:bg-white/10'}`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${selectedFeature === idx ? 'bg-white text-blue-600' : 'bg-white/10 text-white'}`}>
                                        <feat.icon className="w-8 h-8" />
                                    </div>
                                    <span className={`mt-4 text-xs font-bold w-24 leading-tight transition-colors ${selectedFeature === idx ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                        {feat.title}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Showcase Screen */}
                <div className="container mx-auto px-6 relative z-10 -mb-32 md:-mb-64">
                    <motion.div
                        key={selectedFeature}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-8 border-white/20 backdrop-blur-md"
                    >
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900/90 flex items-center px-6 gap-3 z-20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-xs text-teal-400 font-mono tracking-widest uppercase">
                                    TRIOVIBE HYPER - {features[selectedFeature].title}
                                </span>
                            </div>
                        </div>
                        <div className="aspect-video bg-[#0f1115] pt-12">
                            <img
                                src={features[selectedFeature].image}
                                alt={features[selectedFeature].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Spacer */}
            <div className="h-40 md:h-80 bg-white" />

            {/* Workflow Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
                        >
                            An incredibly simple workflow
                        </motion.h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-8">
                            {workflowModes.map((mode) => (
                                <motion.div
                                    key={mode.id}
                                    onMouseEnter={() => setActiveWorkflowMode(mode.id)}
                                    className={`relative pl-12 cursor-pointer group transition-all duration-500`}
                                >
                                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 rounded-full ${activeWorkflowMode === mode.id ? 'bg-blue-600 h-full shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-gray-100 h-8 group-hover:h-full'}`} />

                                    <h3 className={`text-3xl font-bold mb-4 transition-all duration-300 ${activeWorkflowMode === mode.id ? 'text-gray-900' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                        {mode.title}
                                    </h3>

                                    <AnimatePresence mode="wait">
                                        {activeWorkflowMode === mode.id && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-gray-600 text-lg leading-relaxed overflow-hidden"
                                            >
                                                {mode.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:col-span-7 relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeWorkflowMode}
                                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative rounded-[3rem] p-4 bg-gradient-to-br from-blue-600/10 to-teal-400/10 border border-gray-100 shadow-3xl overflow-hidden group"
                                >
                                    <img
                                        src={workflowModes[activeWorkflowMode].image}
                                        alt={workflowModes[activeWorkflowMode].title}
                                        className="w-full h-auto rounded-[2.5rem] shadow-2xl transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </motion.div>
                            </AnimatePresence>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-[100px] -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-100/50 rounded-full blur-[100px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Find out more in this 10-minute video</h2>
                        <p className="text-xl text-gray-500">Discover how hybrid programming revolutionizes shop-floor operations.</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative max-w-6xl mx-auto rounded-[4rem] overflow-hidden shadow-4xl group aspect-video bg-black flex items-center justify-center cursor-pointer"
                        onClick={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video.paused) video.play();
                            else video.pause();
                        }}
                    >
                        <video
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            poster="https://encycam.com/wp-content/uploads/2025/11/Touchscreen-optimized-interface-1024x576.jpg"
                            src="https://encycam.com/wp-content/uploads/2025/11/%21What%20Is%20Ency%20Hyper%20Upd_opt.mp4"
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:bg-white group-hover:text-blue-600 transition-all">
                                <Play className="w-10 h-10 fill-current ml-2" />
                            </div>
                            <span className="mt-6 px-4 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">Watch Now</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-[#0A0D12] text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Advantages of hybrid programming <br />
                            <span className="text-blue-500">compared to</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        {advantages.map((adv, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all group"
                            >
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-full" />
                                    {adv.category}
                                </h3>
                                <ul className="space-y-6">
                                    {adv.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-200 transition-colors">
                                            <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0" />
                                            <span className="font-medium text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Banner Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-teal-400/20 via-blue-600/20 to-purple-600/20 border border-white/10 rounded-[3rem] p-12 md:p-16 text-center shadow-3xl overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full" />
                        <p className="text-xl md:text-3xl text-white/90 font-medium leading-[1.6] relative z-10 max-w-5xl mx-auto italic">
                            "TRIOVIBE Hyper keeps the user in the loop with the real robot — allowing the program to be executed and refined simultaneously. Platform connects to the robot controller online, enabling the engineer to test and adjust robot motions directly on the real robot while observing the results both in the virtual model and in the physical cell."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Configurations & Applications */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Configurations and applications</h2>
                        <p className="text-xl text-gray-500">Choosing the right setup for your production needs.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* TRIOVIBE Hyper Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group bg-[#1E293B] rounded-[4rem] overflow-hidden p-10 md:p-16 relative flex flex-col justify-between min-h-[600px] shadow-4xl shadow-blue-900/10"
                        >
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black text-white mb-6">TRIOVIBE Hyper</h3>
                                <p className="text-blue-300 text-xl mb-12 font-medium leading-relaxed">
                                    TRIOVIBE Hyper can run completely independently — and this makes it perfect for everyday automation.
                                </p>
                                <ul className="grid grid-cols-2 gap-6">
                                    {['pick-and-place', 'machine tending', 'palletizing', 'packaging', 'assembly', 'nailing'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-white/60 font-bold uppercase tracking-wider text-sm">
                                            <div className="w-2 h-2 rounded-full bg-teal-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative mt-12 group-hover:scale-105 transition-transform duration-[2s]">
                                <img
                                    src="https://encycam.com/wp-content/uploads/2025/11/Touchscreen-optimized-interface-1024x576.jpg"
                                    className="rounded-3xl shadow-2xl border border-white/10"
                                    alt="TRIOVIBE Hyper UI"
                                />
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 blur-[80px] rounded-full" />
                        </motion.div>

                        {/* TRIOVIBE Hyper Max Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group bg-[#0F172A] rounded-[4rem] overflow-hidden p-10 md:p-16 relative flex flex-col justify-between min-h-[600px] shadow-4xl shadow-indigo-900/10"
                        >
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black text-white mb-6">TRIOVIBE Hyper <span className="text-blue-500 font-black">Max</span></h3>
                                <p className="text-indigo-300 text-xl mb-12 font-medium leading-relaxed">
                                    TRIOVIBE Hyper acts as the operator interface, while TRIOVIBE Robot works in the background, handling heavy calculations and trajectory generation.
                                </p>
                                <ul className="grid grid-cols-2 gap-6">
                                    {['milling', 'welding', 'polishing', 'coating', 'additive'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-white/60 font-bold uppercase tracking-wider text-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative mt-12 group-hover:scale-105 transition-transform duration-[2s]">
                                <img
                                    src="https://encycam.com/wp-content/uploads/2025/11/Real-time-robot-control-1024x576.jpg"
                                    className="rounded-3xl shadow-2xl border border-white/10"
                                    alt="TRIOVIBE Hyper Max UI"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MachineMaker Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 shadow-2xl border border-gray-100"
                    >
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                MachineMaker:<br />
                                <span className="text-blue-600">zero code digital twin builder</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-xl text-gray-600 font-bold">Create accurate digital twins of your production equipment:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Design full robotic cells with all components",
                                        "Simulate robot functions in detail",
                                        "Generate error-free code with certified post processors",
                                        "Access the Robot Components library with major brands",
                                        "Build custom kinematic models quickly"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-700">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                            <span className="text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-500 leading-relaxed pt-4 border-t border-gray-100">
                                    MachineMaker helps manufacturers and integrators replicate real-world setups virtually. While extensive Robot Components library includes a wide selection of industrial robot brands and various components to build virtual robotic cells. The high-quality simulations and detailed digital twins ensure precise planning and testing before implementation.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-3xl overflow-hidden shadow-3xl bg-white p-4 border border-gray-200"
                            >
                                <img
                                    src="https://encycam.com/wp-content/uploads/2024/08/Zero-code-digital-twin-builder.jpg"
                                    alt="MachineMaker interface"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who Benefits Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
                        >
                            Who benefits from TRIOVIBE Hyper
                        </motion.h2>
                        <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                title: "For robot integrators",
                                points: [
                                    "A ready-to-use solution compatible with multiple robot brands",
                                    "No need to develop or maintain custom software anymore",
                                    "The integrator can prepare a project for the customer, and the customer can later adapt it easily without returning to the integrator",
                                    "The customer doesn't need to learn complex CAM software",
                                    "Complete robot cells can be designed using components from a large online library, with process simulation and demonstration capabilities"
                                ],
                                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1024&q=80",
                                reverse: false
                            },
                            {
                                title: "For robot manufacturers",
                                points: [
                                    "Can be bundled with robots to provide customers a modern, flexible, and user-friendly programming solution — a strong value add",
                                    "There's no need to develop or maintain custom software anymore",
                                    "A cross-platform application that can be installed on most industrial PCs, tablets, or even hand-held computers"
                                ],
                                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1024&q=80",
                                reverse: true
                            },
                            {
                                title: "For robot operators",
                                points: [
                                    "Offers a visual programming approach appreciated by operators and automation engineers",
                                    "Eliminates complex teach pendant routines — complete workflows can be designed with simple drag-and-drop logic",
                                    "Ensures safety through full cell simulation and automatic collision avoidance"
                                ],
                                image: "https://images.unsplash.com/photo-1581092335397-9583492e1b2c?w=1024&q=80",
                                reverse: false
                            },
                            {
                                title: "For TRIOVIBE Robot users",
                                points: [
                                    "Serves as the perfect companion for users of TRIOVIBE Robot software",
                                    "Enables fine-tuning, testing, and execution of projects directly next to the real robot — without loss of data or time",
                                    "Supports integration with computer vision and real-time feedback from sensors and external devices"
                                ],
                                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1024&q=80",
                                reverse: true
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                            >
                                <div className="lg:w-1/2 space-y-8">
                                    <h3 className="text-4xl font-black text-gray-900">{item.title}</h3>
                                    <ul className="space-y-6">
                                        {item.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                                <p className="text-xl text-gray-600 font-medium leading-relaxed">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 relative group">
                                    <div className="relative rounded-[3rem] overflow-hidden shadow-4xl group-hover:scale-[1.02] transition-transform duration-700">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[500px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay" />
                                    </div>
                                    <div className={`absolute -z-10 w-full h-full border-4 border-blue-100 rounded-[3rem] ${item.reverse ? '-top-6 -left-6' : '-bottom-6 -right-6'}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discover TRIOVIBE 2.0 Banner */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[4rem] overflow-hidden group shadow-4xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1558981403-c5f97cbba6c1?w=1920&q=80"
                            alt="TRIOVIBE 2.0"
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter"
                            >
                                Discover TRIOVIBE 2.0
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-white/70 max-w-3xl font-medium leading-relaxed mb-12"
                            >
                                Simply Packed with innovation, beauty, and power — now enhanced with AI-driven performance, advanced automation, and smarter control of CNC and robot kinematics.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-6"
                            >
                                <button className="px-10 py-4 bg-teal-500 text-white font-bold rounded-2xl hover:bg-teal-400 transition-all text-lg shadow-xl shadow-teal-500/20">
                                    Learn more
                                </button>
                                <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-lg">
                                    Find a dealer
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">Get started with TRIOVIBE</h2>
                            <p className="text-xl text-gray-500">Transform your robotic manufacturing today.</p>
                        </div>
                        <div className="h-0.5 flex-1 bg-gray-200 hidden md:block mx-12 mb-6" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Download Trial Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 relative bg-gradient-to-br from-[#1E3A8A] to-[#10B981] rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between group shadow-3xl shadow-blue-500/20"
                        >
                            <div className="relative z-10 max-w-sm">
                                <h3 className="text-5xl font-black text-white mb-6">Download Trial</h3>
                                <p className="text-white/90 text-2xl mb-12 leading-relaxed font-medium">
                                    Free 30-day version with online onboarding
                                </p>
                                <button className="px-12 py-5 bg-white text-blue-900 font-bold rounded-2xl flex items-center gap-3 hover:bg-gray-100 transition-all shadow-2xl group/btn">
                                    Start Download <Download className="w-6 h-6 group-hover/btn:translate-y-1 transition-transform" />
                                </button>
                            </div>
                            <div className="relative mt-12 md:mt-0 md:ml-12 w-full md:w-[480px]">
                                <motion.div
                                    whileHover={{ rotate: -2, scale: 1.05 }}
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-4xl"
                                >
                                    <img
                                        src="https://encycam.com/wp-content/uploads/2024/07/Hardware-acceleration-1-1024x576.png"
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
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[60px] pointer-events-none" />

                            <div>
                                <h3 className="text-4xl font-black text-white mb-6">Get a Quote</h3>
                                <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                                    Find a local dealer and request pricing
                                </p>
                            </div>

                            <div className="space-y-8">
                                <ul className="space-y-4">
                                    {['Expert consultation', 'Custom pricing', 'Regional support'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/50 text-sm font-bold uppercase tracking-widest leading-none">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setCurrentPage('contact')}
                                    className="w-full px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-blue-900 transition-all duration-500 group/quote"
                                >
                                    Request Pricing <MessageSquare className="w-5 h-5 group-hover/quote:rotate-12 transition-transform" />
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

export default TRIOVIBEHyper;
