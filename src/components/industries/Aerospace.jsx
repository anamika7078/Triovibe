"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import {
    Plane,
    Wind,
    Shield,
    Settings,
    Maximize,
    CheckCircle
} from 'lucide-react';

const Aerospace = ({ setCurrentPage }) => {
    const pageData = {
        title: "Aerospace & Aviation",
        subtitle: "CAD/CAM for Aerospace applications is a crucial option for manufacturers aiming to optimize their production processes and reduce lead time. Let's start with the basics of aerospace manufacturing strategies to optimize production time.",
        introText: "The Aerospace and Aviation industry epitomizes the merger of human ambition with cutting-edge technology, turning innovative ideas into reality. Encompassing commercial airliners, military jets, drones, and spacecraft, this industry continually evolves with strategic innovation, making it a dynamic shop for technological advancement in complex parts design. Current trends spotlight the advent of electric propulsion, an enhanced emphasis on eco-friendly designs, and the integration of robust AI-driven safety mechanisms within the aerospace industry, showcasing the reliability of new technologies and their support for sustainable strategies in every case.",
        heroImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=80",
        description: {
            title: "The Intricacies Behind the Flight",
            text: [
                "With TRIOVIBE, a leading manufacturing solutions provider of complex aerospace components, CAD/CAM for aerospace manufacturers can confidently tackle these challenges and produce the high-quality components required for safe and efficient flight, supporting their production needs in every case. Its advanced machining techniques and simulation capabilities make it an essential tool for modern aerospace manufacturing, helping to ensure that each component is produced with the utmost precision and accuracy, setting a new standard in the industry for exceptionally high quality. Whether creating complex turbine blades or lightweight structural components, TRIOVIBE is the go-to innovator for aerospace manufacturers looking to stay at the forefront in their industry.",
                "Behind every aircraft lies a labyrinth of meticulously designed parts, including various fasteners and engineered products that ensure reliability and performance in complex tube assemblies, highlighting the key importance of machine tool precision. Turbine blades, made from advanced titanium alloys, with their unique curves, ensure engines operate efficiently, showcasing the exceptionally high effectiveness of advanced metal removal techniques. The aircraft's skeletal framework, made of lightweight yet durable titanium materials, provides the necessary structure, while intricate cockpit instruments designed and manufactured for reliability support pilots through every flight phase, facing various operational challenges. These components, among many others, underline the vast complexity and precision inherent in consolidated manufacturing and engineering, especially in the supply of components."
            ]
        },
        sections: [
            {
                icon: <Plane className="w-8 h-8" />,
                title: "Complex Components",
                content: "Streamlines the process of continuous 5-axis milling for components like impellers and turbine blades, including cam systems and turning machined solutions."
            },
            {
                icon: <Wind className="w-8 h-8" />,
                title: "Digital Twin Tech",
                content: "Incorporates digital twin technology, allowing the machining process to be validated in various ways, including G-code machining simulation."
            },
            {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assessments",
                content: "Facilitates precision checks and quality assessments using built-in inspection cycles, ensuring optimal performance for key applications."
            }
        ],
        workflow: {
            title: "Aerospace Manufacturing Workflow",
            subtitle: "A comprehensive step-by-step approach to complex aerospace part production.",
            steps: [
                {
                    title: "Component Design",
                    description: "Initial modeling and importing of complex aerospace geometries like impellers and turbine blades."
                },
                {
                    title: "CAM Strategy",
                    description: "Selection of optimal milling strategies, specializing in continuous 5-axis milling paths."
                },
                {
                    title: "Digital Twin Sync",
                    description: "Synchronizing the machining environment with digital twin tech for real-time validation."
                },
                {
                    title: "G-Code Simulation",
                    description: "Full G-code based simulation to verify TRIOVIBE programs and prevent machine collisions."
                },
                {
                    title: "Quality Check",
                    description: "Final precision checks using built-in inspection cycles for aerospace-grade accuracy."
                }
            ]
        },
        advantages: {
            title: "Why Aerospace Leaders Choose TRIOVIBE",
            items: [
                {
                    title: "Precision Engineering",
                    points: [
                        "Advanced 5-axis continuous milling",
                        "TRIOVIBE program verification features",
                        "Complex turbine blade processing",
                        "Lightweight structural component optimization"
                    ]
                },
                {
                    title: "Production Strategy",
                    points: [
                        "Reduced lead times",
                        "Optimized production steps",
                        "Strategic innovation support",
                        "Cost-effective manufacturing"
                    ]
                },
                {
                    title: "Safety & Reliability",
                    points: [
                        "AI-driven safety mechanisms",
                        "Digital twin validation",
                        "G-code simulation",
                        "Rigorous inspection cycles"
                    ]
                }
            ]
        },
        capabilities: {
            title: "Aerospace Machining Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-150x150.png" },
                { title: "2D Cutting", image: "https://encycam.com/wp-content/uploads/2024/08/2D-cutting-150x150.png" },
                { title: "3D Printing of Buildings", image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png" },
                { title: "Additive", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-1-150x150.png" },
                { title: "Additive & Hybrid", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-and-hybrid-150x150.png" },
                { title: "Engraving", image: "https://encycam.com/wp-content/uploads/2024/08/Engraving-150x150.png" },
                { title: "HSM and Adaptive", image: "https://encycam.com/wp-content/uploads/2024/07/HSM-and-adaptive-240x245.png" },
                { title: "Mill-Turn", image: "https://encycam.com/wp-content/uploads/2024/08/Mill-turn-150x150.png" },
                { title: "Multiaxis", image: "https://encycam.com/wp-content/uploads/2024/08/Multiaxis-150x150.png" },
                { title: "Pick-and-Place", image: "https://encycam.com/wp-content/uploads/2024/08/Pick-and-Place-1-150x150.png" },
                { title: "Probing Cycles", image: "https://encycam.com/wp-content/uploads/2024/08/Probing-150x150.png" },
                { title: "Robot Milling", image: "https://encycam.com/wp-content/uploads/2024/08/Robot-Milling-150x150.png" },
                { title: "Rotary", image: "https://encycam.com/wp-content/uploads/2024/08/Rotary-150x150.png" },
                { title: "Sculpture Machining", image: "https://encycam.com/wp-content/uploads/2024/08/Sculpture-Stone-150x150.png" },
                { title: "Swiss & Multitasking", image: "https://encycam.com/wp-content/uploads/2024/08/Swiss-and-MTM-150x150.png" },
                { title: "Turning", image: "https://encycam.com/wp-content/uploads/2024/08/Turning-150x150.png" },
                { title: "Welding", image: "https://encycam.com/wp-content/uploads/2024/08/Welding-150x150.png" },
                { title: "Wire EDM", image: "https://encycam.com/wp-content/uploads/2024/08/EDM-150x150.png" }
            ]
        }
    };

    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};

export default Aerospace;
