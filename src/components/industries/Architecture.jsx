"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Building2, Layout, Construction, Building, Crane } from 'lucide-react';

const Architecture = ({ setCurrentPage }) => {
    const pageData = {
        title: "Architecture & Construction",
        heroIcon: <Building className="w-16 h-16" />,
        subtitle: "The Architecture & Construction industry is the driving force behind urban landscapes and modern habitats. The sector is experiencing a transformative phase with trends like green architecture, smart buildings, and prefabricated construction leading the change. Sustainability, coupled with technological integration, is no longer a luxury but a standard expectation, pushing architects and builders to constantly innovate.",
        heroImage: "https://encycam.com/wp-content/uploads/2024/08/Architecture-Construction.png",
        description: {
            title: "Pivotal Parts and Prevailing Technologies",
            text: "At the heart of construction lie foundational elements like beams, columns, and slabs, dictating the durability and aesthetics of structures. Yet, the modern era sees technology as an equally critical component. Building Information Modeling (BIM) offers dynamic 3D models for better planning and collaboration. Similarly, technologies like augmented and virtual reality facilitate immersive design experiences, while 3D printing is reshaping how some structural components are produced. As the industry marches forward, these parts and technologies will be pivotal in sculpting tomorrow’s architectural marvels."
        },
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Architecture-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Architecture-2-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Architecture-3-300x206.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Architecture & Construction Industry",
            content: "The construction sector is witnessing a paradigm shift with 3D printing, and TRIOVIBE Robot software is at the forefront of this revolution. Catering to the architectural world, TRIOVIBE Robot facilitates the seamless 3D printing of entire buildings. Its advanced algorithms ensure precision and efficiency, translating digital models into tangible structures.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Architecture-Construction-480x347.png",
            points: [
                "Robotic arm movement management",
                "Optimal material layering",
                "Eco-friendly architectural endeavors",
                "Futuristic structural designs"
            ]
        },
        sections: [
            {
                icon: <Building2 className="w-8 h-8" />,
                title: "3D Concrete Printing",
                content: "Revolutionizing building construction with robotic 3D printing for entire structural envelopes and intricate designs."
            },
            {
                icon: <Layout className="w-8 h-8" />,
                title: "BIM Integration",
                content: "Seamlessly connect Building Information Modeling data with robotic fabrication for unmatched planning accuracy."
            },
            {
                icon: <Construction className="w-8 h-8" />,
                title: "Sustainable Fab",
                content: "Eco-friendly construction strategies through optimized material layering and zero-waste robotic manufacturing."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                {
                    title: "2D Cutting",
                    image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-240x240.png"
                },
                {
                    title: "3D Printing of Buildings/Structures",
                    image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png"
                },
                {
                    title: "Additive and hybrid",
                    image: "https://encycam.com/wp-content/uploads/2024/08/Additive-and-hybrid-240x240.png"
                },
                {
                    title: "Welding",
                    image: "https://encycam.com/wp-content/uploads/2024/08/Welding-240x240.png"
                }
            ]
        },
        advantages: {
            title: "Advancing Architectural Construction",
            items: [
                {
                    title: "Robotic Precision",
                    points: [
                        "Automated material layering",
                        "Complex geometry fabrication",
                        "High-accuracy structural assembly",
                        "Consistent quality control"
                    ]
                },
                {
                    title: "Eco-Efficiency",
                    points: [
                        "Minimal material waste",
                        "Sustainable construction methods",
                        "Optimized resource management",
                        "Support for green architecture"
                    ]
                },
                {
                    title: "Speed to Site",
                    points: [
                        "Rapid prefabricated production",
                        "Reduced on-site labor time",
                        "Streamlined BIM-to-Robot path",
                        "Reliable project timelines"
                    ]
                }
            ]
        }
    };

    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};

export default Architecture;
