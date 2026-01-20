"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Anchor, Ship, Waves, Compass } from 'lucide-react';

const Shipbuilding = ({ setCurrentPage }) => {
    const pageData = {
        title: "Shipbuilding",
        subtitle: "Navigating the future of maritime engineering.",
        heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80",
        description: {
            title: "Maritime Strength",
            text: "Supporting the shipbuilding industry with large-scale component machining, robotic welding, and advanced propeller manufacturing strategies."
        },
        galleryTitle: "Innovative Components and Technologies Afloat in Shipbuilding",
        gallerySubtitle: "Within the shipbuilding industry, a constellation of components and technologies drives maritime innovation. CAD software aids in the intricate design of vessels, ensuring optimal space utilization and structural integrity. Advanced materials, like lightweight composites and corrosion-resistant alloys, contribute to improved vessel performance and longevity. Automation systems streamline manufacturing processes, while precision CNC machining ensures accurate parts fabrication. Onboard navigation and communication systems, along with satellite connectivity, enhance safety and operational efficiency. As the industry forges ahead, the integration of sustainable practices and cutting-edge technologies continues to shape the course of shipbuilding.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Shipbuilding-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Shipbuilding-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Shipbuilding-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Shipbuilding Industry",
            content: "In the Shipbuilding industry, which encompasses intricate and unique tasks, vessel designs are becoming increasingly complex to accommodate innovative shapes and functionalities. With TRIOVIBE, you can harness welding robots for tailored projects, including the production of one-of-a-kind components. With TRIOVIBE, shipbuilders achieve higher precision, streamlined operations, and accelerated production, aligning with the industry's evolving demands.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Shipbuilding-480x347.png",
            points: [
                "Intricate and unique vessel designs",
                "Tailored robotic welding projects",
                "Production of one-of-a-kind components",
                "Accelerated production and precision"
            ]
        },
        sections: [
            {
                icon: <Ship className="w-8 h-8" />,
                title: "Large Scale Fabrication",
                content: "Detailed machining for massive hull sections and structural ship elements."
            },
            {
                icon: <Compass className="w-8 h-8" />,
                title: "Propeller Milling",
                content: "Specialized 5-axis strategies for high-precision maritime propulsion systems."
            },
            {
                icon: <Anchor className="w-8 h-8" />,
                title: "Automated Welding",
                content: "Robotic integration for large-scale maritime welding and assembly."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2D Cutting", image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-240x240.png" },
                { title: "Additive and hybrid", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-and-hybrid-240x240.png" },
                { title: "Paint/Spray Coating", image: "https://encycam.com/wp-content/uploads/2024/08/Paint-Spray-Coating-240x240.png" },
                { title: "Welding", image: "https://encycam.com/wp-content/uploads/2024/08/Welding-240x240.png" }
            ]
        },
        advantages: {
            title: "Maritime Excellence",
            items: [
                {
                    title: "Shipbuilder Focus",
                    points: ["Large envelope support", "Complex blade milling", "Certified post-processors", "Digital twin cell validation"]
                },
                {
                    title: "Advanced Ship Construction",
                    points: ["Innovative vessel design support", "Custom-built component handling", "Multi-robot synchronization", "Sustainable material processing"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Shipbuilding;
