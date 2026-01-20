"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { HeartPulse, Stethoscope, Microscope, Activity } from 'lucide-react';

const Medical = ({ setCurrentPage }) => {
    const pageData = {
        title: "Medical & Dental",
        subtitle: "Precision for the human body.",
        heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80",
        description: {
            title: "Life-Saving Precision",
            text: "Powering the manufacturing of orthopedic implants, surgical instruments, and dental prosthetics with sub-micron accuracy and certified processes."
        },
        galleryTitle: "Innovative Components and Cutting-Edge Technologies",
        gallerySubtitle: "The Medical & Dental industry thrives on a range of technologies that elevate patient care and treatment outcomes. Imaging systems like MRI and CT scanners aid in accurate diagnostics. Robotic surgical systems offer precision and minimal invasiveness during procedures. Prosthetics, orthotics, and dental implants are meticulously crafted using advanced materials and 3D printing technology for optimal fit and comfort. Telehealth platforms enable remote consultations and monitoring, while data analytics and AI-driven diagnostics enhance clinical decision-making. These innovations collectively ensure that the Medical & Dental industry evolves to meet the evolving needs of patients and practitioners alike.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Medical-Dental-1-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Medical-Dental-2-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Medical-Dental-3-300x206.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Medical & Dental Industry",
            content: "In the Medical & Dental sector, TRIOVIBE offers invaluable advantages. Its comprehensive CAD/CAM capabilities streamline the production of medical devices and prosthetics, ensuring precision and accuracy. Advanced toolpath simulations visualize complex machining processes, reducing errors and material waste. With support for various CNC machines and robotic systems, TRIOVIBE adapts to diverse manufacturing needs. The software's extensive post-processor library guarantees compatibility with a range of machinery, enhancing workflow efficiency. Ultimately, TRIOVIBE empowers the Medical & Dental Industry to create patient-specific solutions with higher precision, faster turnaround times, and superior quality.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Medical-Dental-480x347.png",
            points: [
                "Comprehensive CAD/CAM for medical devices",
                "Advanced toolpath simulations",
                "Support for complex machining processes",
                "Patient-specific solutions with high precision"
            ]
        },
        sections: [
            {
                icon: <Microscope className="w-8 h-8" />,
                title: "Micro-machining",
                content: "Ultra-precise toolpaths for miniature medical components and intricate dental parts."
            },
            {
                icon: <HeartPulse className="w-8 h-8" />,
                title: "Implant Fabrication",
                content: "Optimized strategies for machining biocompatible materials like titanium and cobalt-chrome."
            },
            {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Surgical Instruments",
                content: "High-quality precision milling and turning for stainless steel surgical tools."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "Additive and hybrid", image: "https://encycam.com/wp-content/uploads/2024/08/Additive-and-hybrid-240x240.png" },
                { title: "Multiaxis", image: "https://encycam.com/wp-content/uploads/2024/08/Multiaxis-240x240.png" },
                { title: "Rotary", image: "https://encycam.com/wp-content/uploads/2024/08/Rotary-240x240.png" },
                { title: "Swiss & Multitasking", image: "https://encycam.com/wp-content/uploads/2024/08/Swiss-and-MTM-240x240.png" }
            ]
        },
        advantages: {
            title: "Precision in Healthcare",
            items: [
                {
                    title: "Medical Excellence",
                    points: ["Biocompatible material support", "High-precision micro-milling", "Process validation", "Complex surface finishing"]
                },
                {
                    title: "Patient-Specific Care",
                    points: ["Custom implants & prosthetics", "Micromachining accuracy", "Bio-compatible material support", "Certified medical workflows"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Medical;
