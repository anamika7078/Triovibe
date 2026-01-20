"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { TreePine, Hammer, Scissors, Layout } from 'lucide-react';

const Woodworking = ({ setCurrentPage }) => {
    const pageData = {
        title: "Woodworking",
        subtitle: "Modern technology for timeless craftsmanship.",
        heroImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1920&q=80",
        description: {
            title: "Digital Carpentry",
            text: "Powering the woodworking industry with specialized strategies for nesting, furniture production, and artistic wood carving."
        },
        galleryTitle: "Innovative Components and Cutting-Edge Technologies",
        gallerySubtitle: "Within the Woodworking industry, a tapestry of tools and technologies empowers artisans and manufacturers alike. TRIOVIBE machines bring unmatched precision to wood cutting, carving, and shaping. Laser cutting and engraving technologies add intricate detailing to wooden surfaces. CAD/CAM software facilitates precise design and efficient production planning. Wood drying and finishing technologies ensure the longevity and aesthetic appeal of wooden products. Sustainability-minded practices are on the rise, with wood recycling and efficient waste management solutions becoming increasingly integral. As the industry embraces these advancements, it continues to produce remarkable wooden creations that merge artistry with functionality.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Woodworking-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Woodworking-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Woodworking-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Woodworking Industry",
            content: "TRIOVIBE offers indispensable advantages for the Woodworking Industry. Its intuitive CAD/CAM capabilities empower artisans and manufacturers to create intricate and precise woodwork designs. The software's advanced simulations enhance visualization, reducing errors and material wastage. With support for various TRIOVIBE machines, including routers and milling machines, TRIOVIBE optimizes the production of wood components, ensuring efficiency and accuracy. Its comprehensive post-processor library guarantees compatibility with a range of machinery, enhancing workflow efficiency. Ultimately, TRIOVIBE elevates the art of woodworking, enabling professionals to craft exquisite wooden pieces with precision and speed.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Woodworking-480x347.png",
            points: [
                "Intuitive CAD/CAM for intricate designs",
                "Advanced simulations to reduce waste",
                "Support for TRIOVIBE routers and milling machines",
                "Comprehensive post-processor library"
            ]
        },
        sections: [
            {
                icon: <TreePine className="w-8 h-8" />,
                title: "Smart Nesting",
                content: "Optimized material usage for panel processing and furniture components."
            },
            {
                icon: <Scissors className="w-8 h-8" />,
                title: "Artistic Carving",
                content: "High-precision toolpaths for 3D wood sculpting and complex joinery."
            },
            {
                icon: <Layout className="w-8 h-8" />,
                title: "High-Speed Routing",
                content: "Specialized strategies for high-speed TRIOVIBE routers used in wood processing."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "2D Cutting", image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-240x240.png" },
                { title: "Engraving", image: "https://encycam.com/wp-content/uploads/2024/08/Engraving-240x240.png" },
                { title: "Robot Milling", image: "https://encycam.com/wp-content/uploads/2024/08/Robot-Milling-240x240.png" }
            ]
        },
        advantages: {
            title: "Woodworking Excellence",
            items: [
                {
                    title: "Digital Craftsmanship",
                    points: ["Intricate design support", "Simulated waste reduction", "High-speed carving", "Mass production efficiency"]
                },
                {
                    title: "Sustainable Production",
                    points: ["Optimized material usage", "Eco-friendly toolpaths", "Waste management integration", "Reclaimed wood processing"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Woodworking;
