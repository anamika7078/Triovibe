"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cloud,
    Globe,
    MessageSquare,
    Database,
    Smartphone,
    ArrowRight,
    ShieldCheck,
    Zap,
    Users,
    Settings,
    Monitor,
    CheckCircle2,
    XCircle,
    Clock,
    ExternalLink
} from 'lucide-react';
import Footer from '../Footer';

const TRIOVIBEClouds = ({ setCurrentPage }) => {
    const [selectedFeature, setSelectedFeature] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef(null);

    const features = [
        {
            id: 0,
            icon: Globe,
            label: "Web view",
            title: "Access your projects anywhere via web browser",
            description: "View CAD models and NC-code directly in your web browser without installing any software.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Web-view-1-1024x651.png"
        },
        {
            id: 1,
            icon: MessageSquare,
            label: "Online chat",
            title: "Real-time communication within the project",
            description: "Discuss technical details, share screenshots, and collaborate instantly with your team.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Online-chat-1-1024x585.png"
        },
        {
            id: 2,
            icon: Database,
            label: "Cloud storage",
            title: "Secure and centralized project management",
            description: "Keep all your NC-code and CAD files organized in a secure cloud environment.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Cloud-storage-1-1024x586.png"
        },
        {
            id: 3,
            icon: Smartphone,
            label: "Mobile app",
            title: "Monitor production on the go",
            description: "Stay connected to your workshop from your smartphone. Receive notifications and approve changes.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Mobile-app-1-1024x598.png"
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setSelectedFeature((prev) => (prev + 1) % features.length);
            }, 5000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isAutoPlaying]);

    const handleFeatureClick = (index) => {
        setSelectedFeature(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 15000);
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen text-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-[#1a1d24]">
                            TRIOVIBE Clouds: Cloud-based digital workspace for CAD/CAM programmers and machine operators
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Supercharge your CAD/CAM software with a cloud collaboration tool. Dramatically cut down on wasted time in workflow areas that involve external parties, such as NC-code fine-tuning, technical support, postprocessor customization, and collaboration with fellow CAD/CAM programmers.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-20">
                            <button className="px-10 py-4 bg-[#1a1d24] text-white font-bold rounded-full hover:bg-black transition-all shadow-xl">
                                Start for free
                            </button>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-10 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all shadow-md"
                            >
                                Talk to sales
                            </button>
                        </div>
                    </motion.div>

                    {/* Feature Tabs */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => handleFeatureClick(index)}
                                className={`flex flex-col items-center gap-4 group px-4 py-2 transition-all ${selectedFeature === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                                    }`}
                            >
                                <div className={`p-4 rounded-3xl transition-all duration-300 ${selectedFeature === index ? 'bg-white shadow-xl scale-110' : 'bg-transparent'
                                    }`}>
                                    <feature.icon size={32} className={selectedFeature === index ? 'text-blue-600' : 'text-gray-900'} />
                                </div>
                                <span className="text-sm font-bold tracking-wider uppercase">{feature.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Screenshot Display */}
                    <div className="relative max-w-5xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedFeature}
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white bg-white"
                            >
                                <img
                                    src={features[selectedFeature].image}
                                    alt={features[selectedFeature].title}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white/40 to-transparent flex flex-col items-start text-left">
                                    <h3 className="text-2xl font-bold text-[#1a1d24] mb-2">{features[selectedFeature].title}</h3>
                                    <p className="text-gray-600">{features[selectedFeature].description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 bg-white px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1d24]">Naturally integrated into CAD/CAM interface</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                TRIOVIBE Clouds focuses on making the user experience simple and efficient. We design our UI and UX to make things clear and minimize mouse clicks, so that users can achieve more with less effort.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                To ensure this level of simplicity, we've built an integrated ecosystem tailored to our users' needs. Instead of relying on third-party solutions, we've developed our own proprietary system to properly integrate into the CAD/CAM workflow, ensuring that we provide our users with the best possible experience.
                            </p>
                        </div>
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <img
                                    src="https://encycam.com/wp-content/uploads/2024/09/Project-480x267.jpg"
                                    alt="Integrated Ecosystem"
                                    className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] z-10"
                                />
                                <div className="w-full aspect-square bg-gradient-to-br from-teal-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scenarios Section */}
            <section className="py-24 px-6 bg-[#f8f9fa]">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">Scenarios</h2>
                    <p className="text-center text-xl text-gray-500 mb-20">Sharing project to someone</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Without TRIOVIBE Clouds */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-10 flex items-center gap-2">
                                    Without TRIOVIBE Clouds 🐢
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        { text: "save to the hard drive", icon: "😐" },
                                        { text: "drag and drop into cloud storage", icon: "😐" },
                                        { text: "get a download link", icon: "😫" },
                                        { text: "go to email app and create email:", icon: "😁" },
                                        { text: "paste download link", sub: true },
                                        { text: "paste address", sub: true },
                                        { text: "type email text", sub: true },
                                        { text: "send email", sub: true }
                                    ].map((item, i) => (
                                        <li key={i} className={`flex items-start gap-4 ${item.sub ? 'ml-12' : ''}`}>
                                            {!item.sub && <span className="text-xl">{item.icon}</span>}
                                            {item.sub && <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />}
                                            <span className="text-gray-600 font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <img src="https://encycam.com/wp-content/uploads/2024/06/sad.svg" alt="Sad person" className="h-48" />
                            </div>
                        </motion.div>

                        {/* With TRIOVIBE Clouds */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-blue-500/10 border-2 border-blue-500/20 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-10 flex items-center gap-2 text-blue-600">
                                    With TRIOVIBE Clouds 🚀
                                </h3>
                                <ul className="space-y-8">
                                    {[
                                        { text: 'click "share"', icon: "🥳" },
                                        { text: "send email right on the spot", icon: "🤩" },
                                        { text: "or copy share link → send it via messenger", sub: true }
                                    ].map((item, i) => (
                                        <li key={i} className={`flex items-start gap-4 ${item.sub ? 'ml-12' : ''}`}>
                                            {!item.sub && <span className="text-2xl">{item.icon}</span>}
                                            {item.sub && <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5" />}
                                            <span className={`text-lg font-bold ${item.sub ? 'text-gray-500 font-normal' : 'text-[#1a1d24]'}`}>
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <p className="text-blue-700 font-bold italic">"Awesome! That was fast."</p>
                                </div>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <img src="https://encycam.com/wp-content/uploads/2024/06/happy-240x240.png" alt="Happy person" className="h-48 object-contain" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-10 space-y-4">
                        {["Receive and preview project", "Sending project after changes had been done", "Sending a message within project discussion"].map((text, i) => (
                            <div key={i} className="text-2xl font-bold text-gray-300 hover:text-gray-400 cursor-pointer transition-colors px-4 py-3">
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">TRIOVIBE Clouds benefits for</h2>
                        <p className="text-xl text-gray-400">Beyond traditional CAD/CAM workflow</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "NC code fine tuning",
                                description: "Supercharge NC code fine tuning with TRIOVIBE X and dramatically reduce the preparation time for ready-to-run NC code.",
                                color: "bg-blue-600 shadow-blue-500/20",
                                icon: <div className="p-3 bg-white/20 rounded-lg"><Monitor className="text-white" /></div>
                            },
                            {
                                title: "CAD/CAM software implementation",
                                description: "Streamline CAD/CAM software implementation with TRIOVIBE X and significantly reduce the time for postprocessor customization and test program runs.",
                                color: "bg-teal-500 shadow-teal-400/20",
                                icon: <div className="p-3 bg-white/20 rounded-lg"><Clock className="text-white" /></div>
                            },
                            {
                                title: "Technical support",
                                description: "Enhanced technical support with TRIOVIBE X, allowing software engineers to join your collaboration session instantly, understand the context rapidly, and provide real-time assistance on the spot.",
                                color: "bg-[#1a1d24] shadow-black/20",
                                icon: <div className="p-3 bg-white/20 rounded-lg"><Users className="text-white" /></div>
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-10 rounded-[2.5rem] text-white ${benefit.color} hover:scale-[1.02] transition-transform cursor-pointer flex flex-col h-full`}
                            >
                                <div className="mb-10 w-fit">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-6">{benefit.title}</h3>
                                <p className="text-white/80 leading-relaxed mt-auto">{benefit.description}</p>
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
                                    src="https://encycam.com/wp-content/uploads/2024/07/Hardware-acceleration-1-1024x576.png"
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

export default TRIOVIBEClouds;
