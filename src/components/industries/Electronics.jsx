"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Cpu, Smartphone, Monitor, Database } from 'lucide-react';

const Electronics = ({ setCurrentPage }) => {
    const pageData = {
        title: "Electronics, Computers, Telecom",
        subtitle: "Precision for the connected world.",
        heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
        description: {
            title: "High-Tech Manufacturing",
            text: "From PCB profiling to complex telecom hardware housings, TRIOVIBE provides the precision required for the high-tech electronics industry."
        },
        galleryTitle: "Driving Forces and Core Technologies",
        gallerySubtitle: "Within this industry, a multitude of components and technologies synergize to create the modern world. Microprocessors and GPUs drive computing power, while memory chips store data. Displays, both liquid crystal and OLED, visualize interfaces. Communication relies on components like RF modules and optic fibers. Advanced manufacturing techniques like nanolithography enable the production of smaller, more efficient chips. These technologies, combined with a robust supply chain and efficient distribution, power the continuous cycle of innovation and improvement that defines this dynamic sector.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Electronics-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Electronics-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Electronics-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Electronics, Computers, Telecom Industry",
            content: "When dealing with electronic components, precision and machining quality take the forefront. TRIOVIBE automates a wide range of production operations and ensures error-free G-code generation from the first attempt, thanks to its Machine-Aware Programming technology.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Electronics-Computers-Telecom-480x347.png",
            points: [
                "Machine-Aware Programming for error-free G-code",
                "Automated production operations",
                "Precision machining for electronic components",
                "High-quality manufacturing from first attempt"
            ]
        },
        sections: [
            {
                icon: <Cpu className="w-8 h-8" />,
                title: "Micro-machining",
                content: "Ultra-precise toolpaths for miniature components and high-density electronics."
            },
            {
                icon: <Monitor className="w-8 h-8" />,
                title: "Enclosure Production",
                content: "High-speed milling for aluminum and composite housings used in various tech devices."
            },
            {
                icon: <Database className="w-8 h-8" />,
                title: "Telecom Hardware",
                content: "Reliable manufacturing for 5G infrastructure and satellite communication components."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "2D Cutting", image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-240x240.png" },
                { title: "HSM and Adaptive", image: "https://encycam.com/wp-content/uploads/2024/07/HSM-and-adaptive-240x245.png" },
                { title: "Pick-and-Place", image: "https://encycam.com/wp-content/uploads/2024/08/Pick-and-Place-1-240x240.png" }
            ]
        },
        advantages: {
            title: "Electronics Excellence",
            items: [
                {
                    title: "Tech Precision",
                    points: ["Sub-micron accuracy", "Multi-axis micro-milling", "High-speed cycle optimization", "Advanced material support"]
                },
                {
                    title: "Smart Manufacturing",
                    points: ["Machine-Aware Programming", "Automated workflows", "Error-free G-code generation", "Rapid prototyping capabilities"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Electronics;
