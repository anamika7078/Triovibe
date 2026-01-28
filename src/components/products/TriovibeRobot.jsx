"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Layers, Monitor, Settings, Box, Play, ChevronLeft, ChevronRight, Activity, Command, ShieldCheck, Cpu as RobotIcon } from 'lucide-react';
import Footer from '../Footer';

const TRIOVIBERobot = ({ setCurrentPage }) => {
    const [selectedFeature, setSelectedFeature] = useState(3); // State-of-art UI (index 3) as default
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef(null);

    const features = [
        {
            icon: Zap,
            title: "Complex Toolpath calculation",
            description: "Advanced toolpath strategies for complex geometries and intricate robot movements",
            image: "https://encycam.com/wp-content/uploads/2024/07/Complex-Toolpath-calculation-robot-1024x576.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/Complex-Toolpath-calculation-click.svg"
        },
        {
            icon: Activity,
            title: "Simple toolpath calculation",
            description: "Intuitive and fast toolpath creation for standard industrial robot applications",
            image: "https://encycam.com/wp-content/uploads/2024/07/Simple-toolpath-calculation-1024x574.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/Simple-toolpath-calculation-click.svg"
        },
        {
            icon: RobotIcon,
            title: "Robot kinematics management",
            description: "Precise control of robot joints, limits, and movement constraints",
            image: "https://encycam.com/wp-content/uploads/2024/07/Robot-kinematics-management-1024x576.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/Robot-kinematics-management.svg"
        },
        {
            icon: Monitor,
            title: "State-of-art UI",
            description: "Modern intuitive interface designed specifically for efficient robot programming",
            image: "https://encycam.com/wp-content/uploads/2024/07/State-of-art-UI-robot-1024x575.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/State-of-art-UI.svgg"
        },
        {
            icon: Command,
            title: "External axes support",
            description: "Seamless integration with rotaries, linear rails, and additional robot axes",
            image: "https://encycam.com/wp-content/uploads/2024/07/External-axes-support-1024x576.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/External-axes-support.svg"
        },
        {
            icon: Box,
            title: "Full robotic cell simulation",
            description: "Complete digital twin simulation of the entire robotic workcell environment",
            image: "https://encycam.com/wp-content/uploads/2024/07/Full-robotic-cell-simulation-1024x576.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/Full-robotic-cell-simulation.svg"
        },
        {
            icon: Play,
            title: "Technology simulation",
            description: "Validation and verification of process-specific parameters like welding or cutting",
            image: "https://encycam.com/wp-content/uploads/2024/07/Tec…al-removal-additive-painting-welding-1024x574.jpg",
            svg: "https://encycam.com/wp-content/uploads/2024/08/Technology-simulation.svg"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setSelectedFeature((prev) => (prev + 1) % features.length);
            }, 3000);
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
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <div className="bg-[#050505] min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-[#8E2DE2] via-[#4A00E0] to-[#F64f59] flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-10">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
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
                <div className="relative z-10 max-w-5xl mx-auto text-center flex-1 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                            ENCY Robot: A complete offline <br /> robot programming solution
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            The ultimate toolpath calculation, kinematics management, and simulation software for robots
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <button className="px-8 py-4 bg-gray-900/80 backdrop-blur-md text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 text-lg flex items-center gap-2 group">
                            Start for free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 text-lg"
                        >
                            Talk to sales
                        </button>
                    </motion.div>
                </div>

                {/* Feature Icons */}
                <div className="relative z-10 w-full mb-10 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex justify-center gap-4 sm:gap-8 min-w-max px-6">
                        {features.map((feature, index) => {
                            const isHeroSelected = index === selectedFeature;

                            return (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => handleManualChange(index)}
                                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 min-w-[120px] ${isHeroSelected
                                        ? 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl'
                                        : 'hover:bg-white/10'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl transition-colors duration-300 ${isHeroSelected ? 'bg-white text-purple-600' : 'bg-white/10 text-white'
                                        }`}>
                                        <feature.icon className={`w-7 h-7`} />
                                    </div>
                                    <span className={`text-xs font-bold leading-tight max-w-[100px] text-center ${isHeroSelected ? 'text-white' : 'text-white/60'
                                        }`}>
                                        {feature.title}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Software Screenshot Section */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-8">
                    <motion.div
                        key={selectedFeature}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                    >
                        <div className="absolute top-0 left-0 right-0 h-10 bg-[#1a1d24] flex items-center px-4 gap-2 z-20">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-[10px] text-gray-500 font-medium bg-[#0f1115] px-4 py-1 rounded-full border border-gray-800">
                                    ENCY Robot - {features[selectedFeature].title}
                                </span>
                            </div>
                        </div>
                        <div className="aspect-video bg-[#0f1115] pt-10">
                            <img
                                src={features[selectedFeature].image}
                                alt={features[selectedFeature].title}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.src = `https://picsum.photos/seed/robot-${index}/1200/675.jpg`;
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section Overlay */}
            <div className="bg-white text-gray-900 border-t border-gray-100">
                {/* Robot Programming Workflow Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Robot programming workflow</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Build Your Robotic Cell <br />Digital Twin</h3>
                                    <p className="text-lg text-gray-600 mb-8">
                                        With our dedicated app, MachineMaker, you can easily build your own robotic cell digital twin.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Components library</h4>
                                        <p className="text-gray-600">MachineMaker offers a comprehensive library of components, including robots from all major brands and various elements essential for constructing robotic cells.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Unlimited Customization</h4>
                                        <p className="text-gray-600">Create your own components without limitations, designing specialized tools and unique parts tailored to your specific needs.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Ease of Use</h4>
                                        <p className="text-gray-600">MachineMaker features an interactive user interface and is rich in features, allowing you to build your robotic cell quickly and without any coding.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {['Digital twin', 'Robotic cell', 'Effective workflow'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 bg-white border border-purple-200 text-purple-600 rounded-lg text-sm font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-orange-500/10 rounded-3xl blur-2xl" />
                                <div className="relative bg-[#1a1d24] p-2 rounded-2xl shadow-2xl">
                                    <div className="flex gap-1.5 mb-2 px-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                    </div>
                                    <img
                                        src="https://encycam.com/wp-content/uploads/2024/07/Build-Your-Robotic-Cell-Digital-Twin-1024x593.jpg"
                                        alt="Robot Programming Workflow"
                                        className="rounded-xl w-full"
                                        onError={(e) => { e.target.src = "https://picsum.photos/seed/workflow/800/500" }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* MachineMaker Zero Code Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center"
                        >
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-4xl font-bold leading-tight">
                                    MachineMaker: <br />zero code digital twin builder
                                </h2>
                                <p className="text-gray-600 text-lg">Create accurate digital twins of your production equipment:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Design full robotic cells with all components",
                                        "Simulate robot functions in detail",
                                        "Generate error-free code with certified post processors",
                                        "Access the Robot Components library with major brands",
                                        "Build custom kinematic models quickly"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2.5" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-500 text-sm leading-relaxed pt-4">
                                    MachineMaker helps manufacturers and integrators replicate real-world setups virtually. While extensive Robot Components library includes a wide selection of industrial robot brands and various components to build virtual robotic cells. The high-quality simulations and detailed digital twins ensure precise planning and testing before implementation.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src="https://encycam.com/wp-content/uploads/2024/08/Zero-code-digital-twin-builder.jpg"
                                    alt="MachineMaker Interface"
                                    className="rounded-2xl shadow-xl bg-white p-2"
                                    onError={(e) => { e.target.src = "https://picsum.photos/seed/mm/700/500" }}
                                />
                            </div>
                        </motion.div>
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
                            className="relative h-[500px] rounded-[3rem] overflow-hidden group"
                        >
                            <img
                                src="/bike.jpg"
                                alt="Motorcycle background"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2000" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 flex flex-col items-center justify-center text-center p-8">
                                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Discover TRIOVIBE 2.0</h2>
                                <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
                                    Simply Packed with innovation, beauty, and power – now enhanced with AI-driven performance, advanced automation, and smarter control of CNC and robot kinematics.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <button className="px-10 py-4 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-teal-500/20 transition-all">
                                        Learn more
                                    </button>
                                    <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                                        Find a dealer
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold">Highlights</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                            {/* Kinematics-aware */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 z-10">Kinematics-aware <br />toolpath calculation</h3>
                                <img src="https://encycam.com/wp-content/uploads/2024/08/Kinematics-aware-toolpath-calculation-480x247.png 480w" alt="" className="absolute -bottom-4 -right-4 w-3/4 opacity-80 group-hover:scale-105 transition-transform" />
                            </div>

                            {/* Interactive */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 z-10">Interactive</h3>
                                <div className="absolute inset-0 flex items-center justify-center mt-8">
                                    <img src="https://encycam.com/wp-content/uploads/2024/07/Interactivity.png" alt="" className="w-4/5 group-hover:scale-110 transition-transform" />
                                </div>
                            </div>

                            {/* State-of-art (Tall) */}
                            <div className="md:row-span-2 bg-gray-50 rounded-2xl p-6 flex flex-col group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">State-of-art interface</h3>
                                <div className="flex-1 relative">
                                    <img src="https://encycam.com/wp-content/uploads/2024/08/State-of-art-interface-robot.png" alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                                </div>
                            </div>

                            {/* Parametric CAD */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 z-10">Parametric CAD</h3>
                                <img src="https://encycam.com/wp-content/uploads/2024/07/G-code-simulation.svg" alt="" className="absolute bottom-4 right-4 w-3/4 group-hover:translate-x-2 transition-transform" />
                            </div>

                            {/* NC-code simulation */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 z-10">NC-code simulation <br />and verification</h3>
                                <div className="absolute bottom-6 right-6 text-right">
                                    <div className="text-teal-600 font-mono text-sm uppercase mb-1">%001</div>
                                    <div className="text-teal-600 font-mono text-sm uppercase mb-1">→ 1 G0</div>
                                    <div className="text-teal-600 font-mono text-sm uppercase">N2 T2</div>
                                </div>
                            </div>

                            {/* Crisp at 4K */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 z-10">Crisp at 4K screens</h3>
                                <img src="	https://encycam.com/wp-content/uploads/2024/08/Crisp-and-crystal-clear-interface-robot-240x122.png" alt="" className="absolute bottom-0 left-0 w-full group-hover:scale-105 transition-transform" />
                            </div>

                            {/* Open API */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 z-10">Open API</h3>
                                <div className="absolute inset-0 flex items-center justify-center mt-8">
                                    <img src="https://encycam.com/wp-content/uploads/2024/07/Open-API.png" alt="" className="w-2/3 group-hover:rotate-12 transition-transform" />
                                </div>
                            </div>

                            {/* Tech Independence */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col group overflow-hidden relative border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Technological independence</h3>
                                <img src="https://encycam.com/wp-content/uploads/2024/07/Technological-independence.jpg" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform opacity-60" />
                            </div>

                            {/* Wide sections */}
                            <div className="md:col-span-2 bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group overflow-hidden relative border border-gray-100 hover:bg-gray-100/50 transition-colors">
                                <div className="z-10 flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive toolset for robot kinematic management</h3>
                                    <p className="text-sm text-gray-500">Fine-tune every aspect of robot movement from single joints to complex coordinated paths.</p>
                                </div>
                                <div className="flex-1">
                                    <img src="https://encycam.com/wp-content/uploads/2024/08/Comprehensive-toolset-for-robot-kinematic-management-480x210.png" alt="" className="rounded-lg shadow-lg group-hover:-translate-y-2 transition-transform" />
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col group overflow-hidden relative border border-gray-100 hover:bg-gray-200/20 transition-colors">
                                <div className="z-10 relative">
                                    <h3 className="text-xl font-bold text-gray-800">Full robotic cell simulation</h3>
                                </div>
                                <img src="https://encycam.com/wp-content/uploads/2024/08/Full-robotic-cell-simulation-480x211.png" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform opacity-40" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold">Applications</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Robot milling", desc: "3—5D milling with redundant axes support", img: "https://encycam.com/wp-content/uploads/2024/08/Milling-240x240.png" },
                                { title: "Robot cutting", desc: "Multiaxis cutting with precise tool vector control", img: "https://encycam.com/wp-content/uploads/2024/08/Cutting-240x240.png" },
                                { title: "Additive", desc: "3—5D cladding with advanced layer thickness control", img: "https://encycam.com/wp-content/uploads/2024/08/Additive-1-240x240.png" },
                                { title: "Robot welding", desc: "Simple easy-to-use solution for welding programming", img: "https://encycam.com/wp-content/uploads/2024/08/Welding-240x240.png" },
                                { title: "Sculpture/Stone", desc: "Stone roughing, disk tool, advanced 5D finishing for mesh models", img: "https://encycam.com/wp-content/uploads/2024/08/Sculpture-Stone-240x240.png" },
                                { title: "Pick and place", desc: "Collision-free automatic pick-and-place", img: "https://encycam.com/wp-content/uploads/2024/08/Pick-and-Place-1-240x240.png" },
                                { title: "Spray painting", desc: "Simulate and test your painting on your PC", img: "https://encycam.com/wp-content/uploads/2024/08/Paint-Spray-Coating-240x240.png" },
                                { title: "Polishing", desc: "Tool-to-part and part-to-tool supported", img: "https://encycam.com/wp-content/uploads/2024/08/Polishing-240x240.png" }
                            ].map((app, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                                >
                                    <div className="w-full aspect-video mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                                        <img src={app.img} alt={app.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => { e.target.src = `https://picsum.photos/seed/${app.title}/400/300` }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
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
            </div>

            <Footer />
        </div>
    );
};

export default TRIOVIBERobot;
