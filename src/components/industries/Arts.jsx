"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Palette, Scissors, Drafts, Brush, Sparkles, Mic2 } from 'lucide-react';

const Arts = ({ setCurrentPage }) => {
    const pageData = {
        title: "Arts & Sculpture",
        heroIcon: <Palette className="w-16 h-16" />,
        subtitle: "Where creativity meets machine precision. Transforming artistic vision into digital and physical masterpieces.",
        introText: "The arts industry, traditionally rooted in manual craftsmanship and personal expression, has been undergoing a significant metamorphosis. TRIOVIBE contemporary artists are increasingly embracing robots, digital tools such as TRIOVIBE CAD CAM software and technologies to enhance their work, leading to a blend of traditional and modern methods. Trends such as digital art installations, virtual reality experiences, and interactive exhibitions are pushing the boundaries of what’s possible in the arts, redefining the relationship between the artist, the artwork, and the audience.",
        heroImage: "/art_industry_hero_machining_1768566371032.png", // This is the local path for the generated image
        description: {
            title: "Artistic TRIOVIBE CAD/CAM software",
            text: "Empowering artists with advanced robotic machining capabilities. Our software bridges the gap between digital sculpture and physical form, allowing for unprecedented detail and scale in artistic production."
        },
        galleryTitle: "Key Components in Modern Art",
        gallerySubtitle: "Within this evolving landscape, some elements remain constant. Sculptures, paintings, and installations continue to be central to the arts. However, these are now often accompanied by or integrated with digital projections, soundscapes, or augmented reality elements. Moreover, the materials used have expanded beyond canvas and clay to include LEDs, sensors, and even recycled electronic components. These advancements have not only expanded the artist's toolkit but have also enhanced the immersive experience for the audience, making art more accessible and engaging than ever before.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Art-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Art-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Art-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Arts Industry",
            content: "TRIOVIBE's milling capabilities include an engraving strategy perfect for crafting detailed items such as medals, badges, coins, and various art pieces. With the help of TRIOVIBE Robot software for robot offline programming, hundreds of artistic installations have been completed, including columns, sculptures, and ornaments for some of Europe’s most renowned cathedrals.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Arts-480x347.png",
            points: [
                "Engraving strategy for medals & coins",
                "Robot offline programming for large displays",
                "Renowned cathedral restoration projects",
                "Ornate architectural elements"
            ]
        },
        sections: [
            {
                icon: <Scissors className="w-8 h-8" />,
                title: "Precision Carving",
                content: "High-fidelity reproduction of digital sculptures into physical form with micron-level accuracy."
            },
            {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Artistic Textures",
                content: "Specialized toolpaths for creating natural textures in wood, stone, and synthetic materials."
            },
            {
                icon: <Mic2 className="w-8 h-8" />,
                title: "Interactive Art",
                content: "Integration of sensors and interactive elements within machined structural components."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "3D Printing of Buildings/Structures", image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png" },
                { title: "Additive", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-1-240x240.png" },
                { title: "Engraving", image: "https://encycam.com/wp-content/uploads/2024/08/Engraving-240x240.png" },
                { title: "Hot Wire", image: "https://encycam.com/wp-content/uploads/2024/08/Hot-Wire-240x240.png" },
                { title: "Sculpture Machining", image: "https://encycam.com/wp-content/uploads/2024/08/Sculpture-Stone-240x240.png" }
            ]
        },
        advantages: {
            title: "Elevating Artistic Expression",
            items: [
                {
                    title: "Creative Liberty",
                    points: [
                        "Complex 5-axis surface carving",
                        "Seamless digital-to-physical workflow",
                        "Support for large-scale installations",
                        "Diverse material compatibility"
                    ]
                },
                {
                    title: "Technical Excellence",
                    points: [
                        "Robot-agnostic programming",
                        "Collision-free toolpaths",
                        "High-quality surface finishing",
                        "G-code verification for safe machining"
                    ]
                }
            ]
        }
    };

    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};

export default Arts;
