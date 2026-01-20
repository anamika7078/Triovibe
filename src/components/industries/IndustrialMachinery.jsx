"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Cog, Factory, Settings, Tool } from 'lucide-react';

const IndustrialMachinery = ({ setCurrentPage }) => {
    const pageData = {
        title: "Industrial Machinery & Equipment",
        subtitle: "Powering the backbone of manufacturing.",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
        description: {
            title: "Reliable production",
            text: "TRIOVIBE provides the versatility needed to manufacture complex industrial machinery, from food processing equipment to automated assembly lines."
        },
        galleryTitle: "Innovative Components and Cutting-Edge Technologies",
        gallerySubtitle: "In this dynamic sector, an array of components and technologies play vital roles in shaping the landscape of industrial machinery and equipment. Robotics and automation systems drive precision and efficiency across manufacturing processes. CNC (Computer Numerical Control) machines enable accurate and intricate machining. Advanced sensors, along with IoT integration, allow for real-time monitoring and adjustment of equipment performance. 3D printing is transforming prototyping and customization, while AI-driven analytics optimize production flows and resource allocation. As the industry advances, these technologies continue to redefine how industrial machinery and equipment are designed, produced, and operated.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Industrial-Machinery-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Industrial-Machinery-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Industrial-Machinery-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Industrial Machinery & Equipment Industry",
            content: "TRIOVIBE includes the MachineMaker application, which enables the swift creation of digital twins for CNC machines and industrial robots. Furthermore, TRIOVIBE provides valuable data resources, such as online libraries containing digital twin models of CNC machines and robots. Our libraries feature a wide array of top brands, including ABB, Comau, DMG MORI, Doosan, Epson, Fanuc, Mazak, Hyundai, HAAS, Kawasaki, Kuka, Mitsubishi, Motoman, Nachi, Panasonic, Staubli, Toshiba, Universal Robots, and many more. We consistently update the Digital Twins library to ensure its relevance and accuracy.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Industrial-Machinery-Equipment-480x347.png",
            points: [
                "MachineMaker for swift digital twin creation",
                "Extensive online libraries of CNC machines and robots",
                "Support for top brands including ABB, DMG MORI, FANUC, and more",
                "Consistently updated Digital Twins library"
            ]
        },
        sections: [
            {
                icon: <Cog className="w-8 h-8" />,
                title: "Complex Assembly",
                content: "High-precision machining for gears, bearings, and complex mechanical assemblies."
            },
            {
                icon: <Factory className="w-8 h-8" />,
                title: "Component Production",
                content: "Optimized turning and milling for a wide range of industrial components."
            },
            {
                icon: <Settings className="w-8 h-8" />,
                title: "Productivity Focus",
                content: "Reduced programming time with automated feature recognition and macros."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "Engraving", image: "https://encycam.com/wp-content/uploads/2024/08/Engraving-240x240.png" },
                { title: "Mill-Turn", image: "https://encycam.com/wp-content/uploads/2024/08/Mill-turn-240x240.png" },
                { title: "Probing Cycles", image: "https://encycam.com/wp-content/uploads/2024/08/Probing-240x240.png" }
            ]
        },
        advantages: {
            title: "Industrial Excellence",
            items: [
                {
                    title: "Machinery Focus",
                    points: ["Versatile machining strategies", "Multi-brand machine support", "High-speed milling & turning", "Automated workflows"]
                },
                {
                    title: "Digital Innovation",
                    points: ["Digital twin technology", "MachineMaker application", "Extensive machine libraries", "Real-time simulation capabilities"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default IndustrialMachinery;
