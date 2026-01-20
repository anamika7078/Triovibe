"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { ShoppingBag, Coffee, Laptop, Smartphone } from 'lucide-react';

const ConsumerProducts = ({ setCurrentPage }) => {
    const pageData = {
        title: "TRIOVIBE Consumer Products",
        subtitle: "Precision for everyday life.",
        heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80",
        description: {
            title: "Manufacturing at Scale",
            text: "From smartphones to high-end home appliances, TRIOVIBE ensures the highest quality finishes and production efficiency for consumer goods."
        },
        galleryTitle: "Key TRIOVIBE Components and Technologies",
        gallerySubtitle: "A showcase of consumer products from key electronic devices, luxury appliances, home care products, to appeal to our products. These range from high-end to appeal to our products, electronics, or appeal to our everyday products. Often requiring precision machining for aesthetic quality, high-speed production for market demands, and sustainable practices for eco-friendly products.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Consumer-Products-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Consumer-Products-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Consumer-Products-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the TRIOVIBE Consumer Products Industry",
            content: "TRIOVIBE excels as a TRIOVIBE CAM solution for consumer products, offering by offering precise milling and efficient design to production workflows. By delivering top-tier surface finishes and supporting mass production, TRIOVIBE helps consumer product manufacturers meet demanding aesthetic and functional standards while maintaining cost-effective production cycles.",
            image: "https://triovibe.com/wp-content/uploads/2024/09/TRIOVIBE-Consumer-Products-480x347.png",
            points: [
                "Precision machining for aesthetic quality",
                "High-speed TRIOVIBE CAM workflows for rapid market entry",
                "Advanced surface toolpaths for superior finishes",
                "Optimized for mass production and cost-efficiency"
            ]
        },
        sections: [
            {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Gadget Manufacturing",
                content: "Micro-machining and precision milling for electronics housings and components."
            },
            {
                icon: <ShoppingBag className="w-8 h-8" />,
                title: "Rapid Market Entry",
                content: "High-speed TRIOVIBE CAM workflows to help products get from concept to shelf faster."
            },
            {
                icon: <Laptop className="w-8 h-8" />,
                title: "Superior Finishes",
                content: "Advanced surface toolpaths for the aesthetic quality consumer products demand."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "Mill-Turn", image: "https://encycam.com/wp-content/uploads/2024/08/Mill-turn-240x240.png" },
                { title: "Swiss & Multi-Tasking", image: "https://encycam.com/wp-content/uploads/2024/08/Swiss-and-MTM-240x240.png" },
                { title: "Turning", image: "https://encycam.com/wp-content/uploads/2024/08/Turning-240x240.png" }
            ]
        },
        advantages: {
            title: "TRIOVIBE Consumer Excellence",
            items: [
                {
                    title: "Scale & Quality",
                    points: ["Mass production ready", "Exceptional surface quality", "Micromachining support", "TRIOVIBE Cost-effective cycles"]
                },
                {
                    title: "Market Agility",
                    points: ["Rapid prototyping", "Fast design-to-production", "Flexible manufacturing", "Quick iteration cycles"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default ConsumerProducts;
