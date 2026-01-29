"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronRight, ArrowRight, CheckCircle, Zap, Shield, Globe, Users, Cpu } from 'lucide-react';

const WhyTriovibe = ({ setCurrentPage }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [currentVideo, setCurrentVideo] = useState('main');

    const videos = {
        main: 'https://encycam.com/wp-content/uploads/2025/03/Whyency%202025_Q36.mp4',
        seamless: 'https://encycam.com/wp-content/uploads/2025/03/Whyency%202025_'
    };

    const features = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Lightning Fast Performance",
            description: "Experience blazing-fast processing speeds with our optimized algorithms and cutting-edge technology."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Enterprise-Grade Security",
            description: "Bank-level security protocols ensure your data is protected with the highest industry standards."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Scalability",
            description: "Scale seamlessly across regions with our distributed infrastructure and CDN network."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Team Collaboration",
            description: "Work together in real-time with powerful collaboration tools and shared workspaces."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI-Powered Intelligence",
            description: "Leverage machine learning algorithms to automate workflows and gain actionable insights."
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "99.9% Uptime Guarantee",
            description: "Reliable service with comprehensive monitoring and instant failover capabilities."
        }
    ];

    const togglePlay = () => {
        const video = document.getElementById('main-video');
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        const video = document.getElementById('main-video');
        if (video) {
            video.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        const video = document.getElementById('main-video');
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-teal-600 via-blue-600 to-purple-700 text-white relative overflow-hidden">
                {/* Diagonal striped pattern background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            rgba(255,255,255,0.1) 10px,
                            rgba(255,255,255,0.1) 20px
                        )`
                    }}></div>
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Why TRIOVIBE
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-300 mb-8">
                            Discover the power of unified digital solutions that transform how businesses operate and grow
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Video Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="relative aspect-video">
                            <video
                                id="main-video"
                                autoPlay
                                muted={isMuted}
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                src={currentVideo === 'main' ? videos.main : videos.seamless}
                            />

                            {/* Video Controls Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={togglePlay}
                                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                        >
                                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                        >
                                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <button
                                        onClick={toggleFullscreen}
                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                    >
                                        <Maximize className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Video Selection Buttons */}
                        <div className="p-6 bg-gray-50 border-t border-gray-200">
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button
                                    onClick={() => setCurrentVideo('main')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${currentVideo === 'main'
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    Why TRIOVIBE
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setCurrentVideo('seamless')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${currentVideo === 'seamless'
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    One Seamless Solution
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Built for Modern Business
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            TRIOVIBE combines cutting-edge technology with intuitive design to deliver solutions that drive real business value
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="text-teal-600 mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of companies already using TRIOVIBE to streamline operations and accelerate growth
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button onClick={() => setCurrentPage('contact')} className="bg-white text-teal-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Get Started Free
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button onClick={() => setCurrentPage('contact')} className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyTriovibe;
