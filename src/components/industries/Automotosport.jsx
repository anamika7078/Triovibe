"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Flag, Gauge, Timer, Trophy, Zap, Wind } from 'lucide-react';

const Automotosport = ({ setCurrentPage }) => {
    const pageData = {
        title: "Automotosport",
        heroIcon: <Flag className="w-16 h-16" />,
        subtitle: "Where vehicular prowess meets high-speed competition. From the smooth tarmac of Formula 1 circuits to the rugged terrains of rally championships, this dynamic field continuously evolves.",
        introText: "The automotosport industry is where vehicular prowess meets high-speed competition. From the smooth tarmac of Formula 1 circuits to the rugged terrains of rally championships, this dynamic field continuously evolves. Cutting-edge advancements, such as hybrid powertrains and telemetry-based strategies, are emerging as the frontrunners. Additionally, the rise of electric racing series and sustainable fuels marks a transformative shift towards greener competitions.",
        heroImage: "/automotosport_hero_racing_1768567041673.png",
        description: {
            title: "The Speed of Innovation",
            text: "In the fast-paced world of motorsports, TRIOVIBE provides the agility and precision needed to design, simulate, and manufacture race-winning components in record time."
        },
        galleryTitle: "Gearing Up: Core Components of Performance",
        gallerySubtitle: "Central to the automotosport industry's appeal are the machines themselves, marvels of modern engineering. Turbocharged engines deliver raw power, while innovative aerodynamics ensure stability at high speeds. Lightweight but robust materials form the chassis, making agility a focal point. Multi-piston brake calipers, adaptive suspensions, and advanced tire technologies are among the myriad parts working in harmony, allowing drivers to push boundaries while ensuring safety and performance.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Automotosport-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Automotosport-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Automotosport-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Automotosport Industry",
            content: "The distinctive workflow and user-friendly interface of TRIOVIBE significantly reduces the production cycle time, which is crucial for manufacturing custom parts. The system offers a broad range of 3-axis and 5-axis milling strategies, providing limitless capabilities for machining components of any complexity. Moreover, TRIOVIBE incorporates additive manufacturing technology, which is becoming increasingly sought-after in the automotosport industry.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Automotosport-480x347.png",
            points: [
                "3-axis and 5-axis milling strategies",
                "Rapid production cycle times",
                "Additive manufacturing integration",
                "Custom component machining"
            ]
        },
        sections: [
            {
                icon: <Gauge className="w-8 h-8" />,
                title: "High-Performance Parts",
                content: "Specialized machining for titanium alloys and carbon fiber components used in top-tier racing."
            },
            {
                icon: <Timer className="w-8 h-8" />,
                title: "Rapid Prototyping",
                content: "Turn around new designs in hours, not days, with streamlined CAM workflows and additive manufacturing."
            },
            {
                icon: <Wind className="w-8 h-8" />,
                title: "Aerodynamic Milling",
                content: "Precision surface machining for wind-tunnel models and final aero-packages with complex geometries."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "Additive and hybrid", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-and-hybrid-240x240.png" },
                { title: "HSM and adaptive", image: "https://encycam.com/wp-content/uploads/2024/07/HSM-and-adaptive-240x245.png" },
                { title: "Multiaxis", image: "https://encycam.com/wp-content/uploads/2024/08/Multiaxis-240x240.png" }
            ]
        },
        advantages: {
            title: "Racing Towards Excellence",
            items: [
                {
                    title: "Peak Performance",
                    points: [
                        "Exotic material handling (titanium, carbon fiber)",
                        "Exceptional surface finishes",
                        "Rapid design iteration cycles",
                        "Rigorous part validation and testing"
                    ]
                },
                {
                    title: "Competitive Edge",
                    points: [
                        "Reduced production cycle times",
                        "Hybrid additive-subtractive workflows",
                        "Complex 5-axis surface machining",
                        "Telemetry-driven design optimization"
                    ]
                }
            ]
        }
    };

    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};

export default Automotosport;
