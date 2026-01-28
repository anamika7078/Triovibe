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

const PoweredByEncy = ({ setCurrentPage }) => {
    const posts = [
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpzdugecgy-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '17 Dec 2025',
            title: 'Digital Sculpting and CNC Milling in Metal Art'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpp2df_t3a-480x640.jpg',
            category: 'POWERED BY ENCY',
            date: '17 Dec 2025',
            title: 'Wooden Bat Making Process by ENCY'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpd8u4cg8f-480x852.jpg',
            category: 'POWERED BY ENCY',
            date: '17 Dec 2025',
            title: 'Complex Part Manufacturing in a Job Shop Environment'
        }
    ];

    return (
        <section className="py-20 bg-[#0a0b0e]">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-800">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Powered by ENCY</h2>
                        <p className="text-gray-400 text-sm">Daily posts from ENCY users all over the world</p>
                    </div>
                    <button
                        onClick={() => setCurrentPage('powered-by-ency')}
                        className="text-sm font-semibold border border-gray-700 px-6 py-2 rounded-full hover:bg-gray-900 transition-colors text-gray-300"
                    >
                        View all
                    </button>
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
