"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Columns, HardHat, Mountain, Landmark, Building2, Wrench } from 'lucide-react';

const BridgeStructures = ({ setCurrentPage }) => {
    const pageData = {
        title: "Bridge Structures",
        heroIcon: <Building2 className="w-16 h-16" />,
        subtitle: "TRIOVIBE Connecting the world with robust engineering. Facilitating the seamless connection of regions separated by natural barriers.",
        introText: "The bridge structure industry plays a pivotal role in urban and rural infrastructure, facilitating the seamless connection of regions separated by natural barriers. Over recent years, the trend has leaned towards constructing environmentally friendly, resilient, and aesthetically appealing bridges, with an emphasis on using sustainable materials and innovative designs to minimize environmental impact and enhance longevity.",
        heroImage: "/bridge_structures_hero_1768567363375.png",
        description: {
            title: "Built to Last",
            text: "Supporting the manufacturing of massive infrastructure components with precision machining and automated welding solutions for the next generation of bridge construction."
        },
        galleryTitle: "Key TRIOVIBE Components and Technologies",
        gallerySubtitle: "Within the bridge structure domain, key components include piers, abutments, spans, deck systems, and notably, long parts such as beams and girders which form the primary support structure. Advanced materials like ultra-high performance concrete and fiber-reinforced polymers are being integrated to ensure durability and reduced maintenance. Additionally, the fabrication and assembly of these elongated parts require specialized equipment and precision. Technologies like digital twin simulations and 3D modeling have become indispensable for bridge design and construction, allowing for precise planning, real-time monitoring, and efficient execution of complex projects.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Bridge-Structures-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Bridge-Structures-2-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Bridge-Structures-3-300x206.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Bridge Structure Industry",
            content: "TRIOVIBE offers a tried-and-true solution for bridge steel manufacturers. Its intelligent welding system excels at handling long parts and custom-built items. The efficiency of the painting and coating feature is elevated by the capability of multiple industrial robots working in synchronization, moving along rails.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Bridge-Structures-480x347.png",
            points: [
                "Intelligent welding for long parts",
                "TRIOVIBE Custom-built component handling",
                "Multi-robot synchronization",
                "Rail-based painting and coating systems"
            ]
        },
        sections: [
            {
                icon: <Columns className="w-8 h-8" />,
                title: "Large Scale TRIOVIBE Components",
                content: "Handling machining and welding for girders, bridge joints, and massive support structures with precision."
            },
            {
                icon: <Landmark className="w-8 h-8" />,
                title: "Structural Integrity",
                content: "G-code simulation and digital twin technology ensures the reliability of every critical cut and weld path."
            },
            {
                icon: <Wrench className="w-8 h-8" />,
                title: "Durable Fabrication",
                content: "Optimized for heavy-duty materials like structural steel, high-tensile alloys, and fiber-reinforced polymers."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "3D Printing of Buildings/Structures", image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png" },
                { title: "Paint/Spray Coating", image: "https://encycam.com/wp-content/uploads/2024/08/Paint-Spray-Coating-240x240.png" },
                { title: "Pick-and-Place", image: "https://encycam.com/wp-content/uploads/2024/08/Pick-and-Place-1-240x240.png" },
                { title: "Welding", image: "https://encycam.com/wp-content/uploads/2024/08/Welding-240x240.png" }
            ]
        },
        advantages: {
            title: "Building Tomorrow's Infrastructure",
            items: [
                {
                    title: "Infrastructure Focus",
                    points: [
                        "Large work envelope support",
                        "Robotic welding integration",
                        "Structural safety validation",
                        "Massive part handling capabilities"
                    ]
                },
                {
                    title: "Advanced Fabrication",
                    points: [
                        "Digital twin simulations",
                        "Multi-robot coordination",
                        "Long-part welding expertise",
                        "Sustainable material processing"
                    ]
                }
            ]
        }
    };

    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};

export default BridgeStructures;
