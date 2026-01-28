"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, description, detailedDescription, borderColor, bgImage, index, setCurrentPage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => {
                if (title === 'Ency Robot') setCurrentPage('ency-robot');
                else if (title === 'Ency') setCurrentPage('ency');
                else if (title === 'Ency X') setCurrentPage('encyx');
                else if (title === 'Ency Tuner') setCurrentPage('ency-tuner');
                else if (title === 'Ency Clouds') setCurrentPage('ency-clouds');
                else if (title === 'MachineMaker') setCurrentPage('ency-machinemaker');
                else if (title === 'Ency Hyper') setCurrentPage('ency-hyper');
            }}
        >
            {/* Colored Border */}
            <div className={`absolute inset-0 rounded-3xl p-[3px] ${borderColor}`}>
                <div className="w-full h-full bg-[#1a1d24] rounded-3xl overflow-hidden relative">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            filter: 'brightness(0.7)'
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

                    {/* Window Controls */}
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        {/* Title and Description - Always at Bottom */}
                        <div className="transform transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                            <p className="text-gray-300 text-sm font-medium">{description}</p>
                        </div>

                        {/* Detailed Description - Slides Up on Hover */}
                        <div className="mt-4 max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-12 h-[2px] bg-white/40 mb-3" />
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {detailedDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Products = ({ setCurrentPage }) => {
    const products = [
        {
            title: 'Ency',
            description: 'CAD/CAM for a new generation',
            detailedDescription: 'Delivering sophisticated CAM technology in a lightweight user interface and natural workflow',
            borderColor: 'bg-gradient-to-br from-teal-400 to-blue-500',
            bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
        },
        {
            title: 'Ency Robot',
            description: 'A complete offline robot programming solution',
            detailedDescription: 'Advanced robotic programming with intuitive controls and real-time simulation capabilities',
            borderColor: 'bg-gradient-to-br from-orange-400 to-pink-500',
            bgImage: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80'
        },
        {
            title: 'Ency Tuner',
            description: 'Shop-floor NC-code simulation software',
            detailedDescription: 'Real-time NC-code verification and optimization for maximum machining efficiency',
            borderColor: 'bg-gradient-to-br from-blue-400 to-indigo-600',
            bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
        },
        {
            title: 'Ency X',
            description: 'Advanced manufacturing ecosystem',
            detailedDescription: 'The next generation foundation for all Triovibe products, featuring enhanced security and API.',
            borderColor: 'bg-gradient-to-br from-purple-400 to-indigo-600',
            bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
        },
        {
            title: 'Ency Clouds',
            description: 'Cloud-based collaboration',
            detailedDescription: 'Real-time project sharing and communication for CAD/CAM programmers.',
            borderColor: 'bg-gradient-to-br from-blue-300 to-teal-400',
            bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
        },
        {
            title: 'MachineMaker',
            description: 'Zero-code digital twin builder',
            detailedDescription: 'Build virtual CNC machines and robotic cells with an interactive, zero-code interface.',
            borderColor: 'bg-gradient-to-br from-orange-400 to-yellow-500',
            bgImage: 'https://triovibe.com/wp-content/uploads/2024/08/Build-virtual-CNC-machines-768x431.jpg'
        },
        {
            title: 'Ency Hyper',
            description: 'A hybrid programming system for industrial robots',
            detailedDescription: 'Combining online and offline programming for flexible industrial automation solutions',
            borderColor: 'bg-gradient-to-br from-blue-400 to-teal-500',
            bgImage: 'https://triovibe.com/wp-content/uploads/2025/11/Touchscreen-optimized-interface-1024x576.jpg'
        }
    ];

    return (
        <section className="py-20 bg-[#0a0b0e] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Products</h2>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-gray-400 leading-relaxed text-sm">
                            All our software products are built on a proprietary, technologically independent foundation,
                            delivering unmatched CAD/CAM performance, security, rich digital manufacturing content, and powerful API.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p, i) => (
                        <ProductCard key={p.title} {...p} index={i} setCurrentPage={setCurrentPage} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
