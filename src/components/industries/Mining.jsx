"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Mountain, Truck, Pickaxe, Drill } from 'lucide-react';

const Mining = ({ setCurrentPage }) => {
    const pageData = {
        title: "Heavy Equipment & Mining",
        subtitle: "Built for the toughest environments.",
        heroImage: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1920&q=80",
        description: {
            title: "Unyielding Strength",
            text: "Supporting the manufacturing of massive mining and earthmoving machinery with robust TRIOVIBE CAM solutions for large-scale fabrication."
        },
        galleryTitle: "TRIOVIBE Core Components and Technologies",
        gallerySubtitle: "This industry is characterized by the production of robust and durable parts designed to withstand extreme conditions. Key components include excavators, draglines, drills, and gigantic earth-moving vehicles. Advancements in metallurgy and engineering have birthed more resilient materials and parts. Additionally, the integration of IoT devices, real-time tracking systems, and automated machinery is propelling the sector to new technological heights.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Heavy-Equipment-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Heavy-Equipment-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Heavy-Equipment-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Heavy Equipment & Mining Industry",
            content: "For over 20 years, TRIOVIBE software has been employed by hundreds of enterprises for the manufacturing and repair of bulldozer assemblies, excavators, various construction machinery components, and mining equipment. The die kit for mining has a complex design that necessitates a powerful 4- and 5-axis milling functionality in the TRIOVIBE CAM system, a feature available in TRIOVIBE. Additionally, the software's additive manufacturing capabilities enable the restoration of broken excavator bucket teeth.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Heavy-Equipment-Mining-480x347.png",
            points: [
                "20+ years serving heavy equipment manufacturers",
                "Powerful 4- and 5-axis milling functionality",
                "Complex die kit design support",
                "Additive manufacturing for part restoration"
            ]
        },
        sections: [
            {
                icon: <Truck className="w-8 h-8" />,
                title: "Large Scale Machining",
                content: "Handling the production of truck frames, buckets, and massive mechanical components."
            },
            {
                icon: <Drill className="w-8 h-8" />,
                title: "Wear Part Production",
                content: "Optimized toolpaths for milling hard-facing materials and wear-resistant liners."
            },
            {
                icon: <Pickaxe className="w-8 h-8" />,
                title: "Maintenance & Repair",
                content: "On-site robotic welding and rapid part replacement solutions for mining operations."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "Additive and Hybrid", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-and-hybrid-240x240.png" },
                { title: "Mill-Turn", image: "https://encycam.com/wp-content/uploads/2024/08/Mill-turn-240x240.png" },
                { title: "Multiaxis", image: "https://encycam.com/wp-content/uploads/2024/08/Multiaxis-240x240.png" },
                { title: "Rotary", image: "https://encycam.com/wp-content/uploads/2024/08/Rotary-240x240.png" }
            ]
        },
        advantages: {
            title: "Heavy Equipment Excellence",
            items: [
                {
                    title: "Mining Core",
                    points: ["Large work envelope support", "Tough alloy processing", "Robotic welding integration", "Downtime reduction strategies"]
                },
                {
                    title: "Advanced Manufacturing",
                    points: ["4- and 5-axis milling capabilities", "Additive manufacturing support", "Complex die kit design", "Part restoration technology"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Mining;
