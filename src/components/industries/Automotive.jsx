"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Car, Battery, Zap, Cpu, Settings, ShieldCheck } from 'lucide-react';

const Automotive = ({ setCurrentPage }) => {
    const pageData = {
        title: "Automotive & Transportation",
        heroIcon: <Car className="w-16 h-16" />,
        subtitle: "Accelerating the future of mobility with advanced CAD/CAM solutions for the next generation of transport.",
        introText: "The Automotive & Transportation industry has always been at the forefront of technological evolution. Over recent years, there's been a marked shift towards electric and autonomous vehicles, with a growing emphasis on sustainable and smart transportation solutions. Integration of AI, IoT, and connected vehicle technologies are setting new standards, reshaping the future of mobility and transforming the industry's landscape.",
        heroImage: "/automotive_industry_hero_machining_1768566511243.png",
        description: {
            title: "Precision in Motion",
            text: "Powering the automotive industry with high-speed toolpaths, robotic integration, and advanced manufacturing solutions for EV and traditional vehicles. From intricate engine components to larger chassis structures, our technology ensures unmatched precision."
        },
        galleryTitle: "Innovations and Key Components",
        gallerySubtitle: "This sector is characterized by its vast array of parts – from intricate engine components to larger chassis structures. Advanced materials, like lightweight composites, are increasingly used to enhance fuel efficiency. Technologies like TRIOVIBE machining, additive manufacturing, and advanced robotics play pivotal roles in producing these components with precision and efficiency, meeting the ever-growing demands of the modern automotive world.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Automotive-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Automotive-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Automotive-3-300x205.jpg"
        ],
        featured: {
            title: "Triovibe CAD CAM in Automotive & Transportation",
            content: "Triovibe offers extensive capabilities for constructing 2D geometry, 3D models, and subsequent mechanical machining. The system's unique advantages include support for digital twins of CNC machines and industrial robots, a unified platform for various types of manufacturing technologies, and a contemporary user-friendly interface tailored for the new generation of engineers.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Automotive-Transportation-480x347.png",
            points: [
                "Proprietary high-speed machining technology",
                "Cycle time reduction by up to 70%",
                "Tool lifespan extension by up to 500%",
                "Digital twin support for TRIOVIBE and Robots"
            ]
        },
        sections: [
            {
                icon: <Settings className="w-8 h-8" />,
                title: "Powertrain Machining",
                content: "High-precision milling and turning for engine blocks, transmission components, and axles with optimized toolpaths."
            },
            {
                icon: <Battery className="w-8 h-8" />,
                title: "EV Components",
                content: "Specialized manufacturing for battery enclosures and lightweight electric drive units using advanced materials."
            },
            {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Safety Systems",
                content: "Precision engineering for critical safety components, ensuring reliability in every thousandth of an inch."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "Mill-Turn", image: "https://encycam.com/wp-content/uploads/2024/08/Mill-turn-240x240.png" },
                { title: "Multiaxis", image: "https://encycam.com/wp-content/uploads/2024/08/Multiaxis-240x240.png" },
                { title: "Probing cycles", image: "https://encycam.com/wp-content/uploads/2024/08/Probing-240x240.png" }
            ]
        },
        advantages: {
            title: "Driving Automotive Excellence",
            items: [
                {
                    title: "Operational Efficiency",
                    points: [
                        "High-speed machining strategies",
                        "Automated production cell support",
                        "Optimized chip removal",
                        "Reduced machine idle time"
                    ]
                },
                {
                    title: "Future-Ready Tech",
                    points: [
                        "Lightweight composite machining",
                        "Cloud-based project management",
                        "IoT integration for real-time monitoring",
                        "Advanced robot-assisted production"
                    ]
                }
            ]
        }
    };

    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};

export default Automotive;
