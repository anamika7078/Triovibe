"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Layers, Box, Maximize, Cpu } from 'lucide-react';

const DieMold = ({ setCurrentPage }) => {
    const pageData = {
        title: "Die & Mold",
        subtitle: "The foundation of industrial production.",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
        description: {
            title: "Complexity Mastered",
            text: "TRIOVIBE is the preferred choice for die and mold manufacturers requiring exceptional surface finishes and precise 5-axis control for hardened steels."
        },
        galleryTitle: "Key Components & Technologies",
        gallerySubtitle: "Intricate cavities, cores, and ejection mechanisms are quintessential parts in mold-making, requiring impeccable accuracy. Advanced Computer Numerical Control (CNC) machining, Electrical Discharge Machining (EDM), and 3D printing have emerged as vital technologies. Their ability to achieve tight tolerances and incorporate complex geometries solidifies their significance in today's Die & Mold industry.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Die-Mold-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Die-Mold-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Die-Mold-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Die & Mold Industry",
            content: "TRIOVIBE stands as an indispensable tool in the Die & Mold industry, offering tailored solutions for complex mold production. Its powerful 3D modeling capabilities ensure precision in design and prototyping. Advanced machining strategies, inclusive of 2D and 3D operations, enable efficient mold creation, reducing lead times. The software's integrated simulation tools eliminate errors, ensuring accuracy and reducing the need for manual adjustments. With its user-friendly interface, TRIOVIBE streamlines workflow, optimizing productivity in die and mold manufacturing processes.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Die-Mold-480x347.png",
            points: [
                "Powerful 3D modeling for precision design",
                "Advanced 2D and 3D machining strategies",
                "Integrated simulation tools for error elimination",
                "User-friendly interface for optimized workflow"
            ]
        },
        sections: [
            {
                icon: <Layers className="w-8 h-8" />,
                title: "Hard Metal Machining",
                content: "Optimized toolpaths for milling hardened tool steels with extended tool life."
            },
            {
                icon: <Box className="w-8 h-8" />,
                title: "Complex Cavities",
                content: "High-precision 5-axis strategies for deep cavities and complex mold geometries."
            },
            {
                icon: <Maximize className="w-8 h-8" />,
                title: "Micro-finishing",
                content: "Achieving high-gloss surface finishes directly on the CNC machine."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "HSM and Adaptive", image: "https://encycam.com/wp-content/uploads/2024/07/HSM-and-adaptive-240x245.png" },
                { title: "Multiaxis", image: "https://encycam.com/wp-content/uploads/2024/08/Multiaxis-240x240.png" },
                { title: "Probing", image: "https://encycam.com/wp-content/uploads/2024/08/Probing-240x240.png" }
            ]
        },
        advantages: {
            title: "Die & Mold Excellence",
            items: [
                {
                    title: "Mold Excellence",
                    points: ["5-axis simultaneous milling", "Hardened steel support", "Automatic rest-material removal", "Superior surface quality"]
                },
                {
                    title: "Precision & Efficiency",
                    points: ["Complex cavity machining", "High-gloss surface finishes", "Reduced lead times", "Advanced simulation tools"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default DieMold;
