"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PostCard = ({ image, category, date, title, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-[#1a1d24] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer group"
        >
            <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                    {category} <span className="ml-2 text-gray-600 font-normal">{date}</span>
                </p>
                <h3 className="text-base font-bold text-white leading-snug">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const PoweredByEncy = () => {
    const posts = [
        {
            image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
            category: 'POWERED BY TRIOVIBE',
            date: '17 Dec 2025',
            title: 'Large-Scale Robotic Additive Manufacturing in Architectural Panel Production'
        },
        {
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
            category: 'POWERED BY TRIOVIBE',
            date: '17 Dec 2025',
            title: 'Robotic Non-Planar Additive Processes for Complex Curves and Structures'
        },
        {
            image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80',
            category: 'POWERED BY TRIOVIBE',
            date: '17 Dec 2025',
            title: 'Multi-Axis Machining for Custom Parts in Job Shop Production'
        }
    ];

    return (
        <section className="py-20 bg-[#0a0b0e]">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-800">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Powered by TRIOVIBE</h2>
                        <p className="text-gray-400 text-sm">Daily posts from TRIOVIBE users all over the world</p>
                    </div>
                    <a
                        href="/powered-by-ency"
                        className="text-sm font-semibold border border-gray-700 px-6 py-2 rounded-full hover:bg-gray-900 transition-colors text-gray-300"
                    >
                        View all
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <PostCard key={i} {...post} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PoweredByEncy;
