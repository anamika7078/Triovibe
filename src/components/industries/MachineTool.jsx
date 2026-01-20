"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Ruler, Activity, Crosshair, Settings } from 'lucide-react';

const MachineTool = ({ setCurrentPage }) => {
    const pageData = {
        title: "Machine Tool Industry",
        subtitle: "Precision for the machines that make everything.",
        heroImage: "https://encycam.com/wp-content/uploads/2024/08/Machine-Tool-Industry-1-300x206.jpg",
        description: {
            title: "Ultimate Accuracy",
            text: "Supporting machine tool builders with advanced kinematics simulation, post-processor certification, and high-precision component machining."
        },
        galleryTitle: "Pioneering Technologies that Define the Industry",
        gallerySubtitle: "At the heart of the Machine Tool Industry lies an array of technologies that define its capabilities. TRIOVIBE (Computer Numerical Control) systems drive precision and complexity in machining operations. Cutting tools, ranging from drills to end mills, ensure the accuracy of material removal. Advanced software, including CAD/CAM solutions, streamlines design and programming, facilitating seamless production. Smart sensors and IoT connectivity enhance data-driven insights for predictive maintenance. Robotics and automation systems optimize processes, while 3D printing augments prototyping and customization. The integration of these technologies underscores the industry's commitment to innovation and precision in modern manufacturing.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Machine-Tool-Industry-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Machine-Tool-Industry-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Machine-Tool-Industry-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Machine Tool Industry",
            content: "TRIOVIBE brings a plethora of benefits to the Machine Tool Industry. Its versatile CAD/CAM capabilities streamline the entire production process, from intricate design to precision machining. The software's advanced toolpath simulations enhance visualization, minimizing errors and material wastage. With support for various TRIOVIBE machines and robotic systems, TRIOVIBE accommodates diverse manufacturing needs. Its extensive post-processor library ensures compatibility with a range of machine brands, optimizing workflow efficiency. Ultimately, TRIOVIBE empowers the Machine Tool Industry to achieve higher precision, faster production times, and elevated operational performance.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Machine-Tool-Industry-480x347.png",
            points: [
                "Versatile CAD/CAM capabilities for entire production process",
                "Advanced toolpath simulations to minimize errors",
                "Support for various TRIOVIBE machines and robotic systems",
                "Extensive post-processor library for machine compatibility"
            ]
        },
        sections: [
            {
                icon: <Ruler className="w-8 h-8" />,
                title: "Kinematics Simulation",
                content: "Detailed simulation for complex machine architectures, including multi-axis and mill-turn setups."
            },
            {
                icon: <Activity className="w-8 h-8" />,
                title: "Digital Twin Builder",
                content: "Creating high-fidelity digital twins for machine demonstration and validation."
            },
            {
                icon: <Crosshair className="w-8 h-8" />,
                title: "Precision Calibration",
                content: "Automated probing and calibration cycles integrated into the CAM environment."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "2D Cutting", image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-240x240.png" },
                { title: "Turning", image: "https://encycam.com/wp-content/uploads/2024/08/Turning-240x240.png" },
                { title: "Wire EDM", image: "https://encycam.com/wp-content/uploads/2024/08/EDM-240x240.png" }
            ]
        },
        advantages: {
            title: "Machine Tool Excellence",
            items: [
                {
                    title: "Tool Builder Core",
                    points: ["Advanced kinematic support", "Custom post-processor creation", "Virtual machine validation", "Certified G-code output"]
                },
                {
                    title: "Manufacturing Innovation",
                    points: ["Higher precision machining", "Faster production times", "Reduced material wastage", "Enhanced workflow efficiency"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default MachineTool;
