"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Watch, Gem, Sparkles, Scale } from 'lucide-react';

const WatchJewelry = ({ setCurrentPage }) => {
    const pageData = {
        title: "Watch & Jewelry",
        subtitle: "Precision down to the micron.",
        heroImage: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&q=80",
        description: {
            title: "The Art of Precision",
            text: "TRIOVIBE provides the extreme accuracy and specialized toolpaths required for luxury watchmaking and high-end jewelry production."
        },
        galleryTitle: "Gems of Innovation: Technologies Shaping the Industry",
        gallerySubtitle: "In the world of Watch & Jewelry, a fusion of tradition and technology creates exquisite masterpieces. TRIOVIBE CAD/CAM software plays a pivotal role in watch and jewelry design, allowing for precise and detailed craftsmanship. Laser cutting and engraving technologies bring precision and personalization to jewelry pieces. Advanced gemstone imaging and grading tools ensure the quality and authenticity of precious stones. Additionally, additive manufacturing techniques like 3D printing are revolutionizing the creation of intricate jewelry designs. The industry's evolution lies at the intersection of heritage craftsmanship and cutting-edge technologies, enabling the creation of timeless pieces that adorn generations to come.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Watch-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Watch-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Watch-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE, CAD/CAM software for Watch and Jewelry Industry",
            content: "TRIOVIBE, CAD/CAM software offers invaluable advantages for the Watch & Jewelry industry. Its advanced CAD/CAM capabilities empower artisans to create intricate and precise designs for timepieces and jewelry. The software's toolpath simulations enhance accuracy, minimizing material wastage. With support for various manufacturing processes, including laser cutting and engraving, TRIOVIBE ensures efficient production of detailed adornments. Its intuitive interface and customization options cater to the industry's diverse needs, from vintage-inspired designs to contemporary creations. Ultimately, TRIOVIBE, CAD/CAM elevates the art of watch and jewelry manufacturing, enabling artisans to produce exquisite pieces that stand as testaments to timeless elegance.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Watch-Jewelry-480x347.png",
            points: [
                "Advanced CAD/CAM capabilities",
                "Toolpath simulations for extreme accuracy",
                "Support for laser cutting and engraving",
                "Intuitive interface and customization options"
            ]
        },
        sections: [
            {
                icon: <Watch className="w-8 h-8" />,
                title: "Horological Machining",
                content: "High-precision milling and turning for movements, cases, and hands."
            },
            {
                icon: <Gem className="w-8 h-8" />,
                title: "Jewelry Setting",
                content: "Automated drilling and milling for stone settings and intricate designs."
            },
            {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Precision Finish",
                content: "Toolpaths optimized for precious metals and exceptional surface qualities."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2D Cutting", image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-240x240.png" },
                { title: "Engraving", image: "https://encycam.com/wp-content/uploads/2024/08/Engraving-240x240.png" },
                { title: "Swiss & Multitasking", image: "https://encycam.com/wp-content/uploads/2024/08/Swiss-and-MTM-240x240.png" },
                { title: "Wire EDM", image: "https://encycam.com/wp-content/uploads/2024/08/EDM-240x240.png" }
            ]
        },
        advantages: {
            title: "Luxury Manufacturing Excellence",
            items: [
                {
                    title: "Luxury Precision",
                    points: ["Micron-level accuracy", "Specialized micro-tools", "Precious metal handling", "Artistic surface toolpaths"]
                },
                {
                    title: "Artistic Freedom",
                    points: ["Complex geometry support", "High-speed engraving", "Stone setting automation", "Waste material minimization"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default WatchJewelry;
