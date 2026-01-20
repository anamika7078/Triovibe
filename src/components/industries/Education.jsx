"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { GraduationCap, Book, Lightbulb, Users } from 'lucide-react';

const Education = ({ setCurrentPage }) => {
    const pageData = {
        title: "Education",
        subtitle: "Empowering the next generation of engineers.",
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
        description: {
            title: "Learning by Doing",
            text: "TRIOVIBE provides educational institutions with modern, user-friendly CAM software that bridges the gap between classroom theory and real-world production."
        },
        galleryTitle: "Pioneering Technologies Enriching Education: Robotic Precision and CNC Insights",
        gallerySubtitle: "In the realm of Education, innovative technologies are revolutionizing learning experiences. Learning management systems streamline course administration and content delivery. Online collaboration tools facilitate seamless communication between educators and students. Virtual classrooms and interactive simulations, guided by robotic precision, create immersive learning environments. Adaptive learning systems use AI algorithms to tailor content to individual student needs. Moreover, EdTech tools such as e-books, educational apps, and digital assessment tools are transforming traditional classrooms into digital hubs of engagement. The integration of these technologies, alongside CNC machines, promises to reshape the future of education, providing learners with adaptable and dynamic educational experiences.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2025/07/520520532_1905267493595063_8288682696877427877_n-300x225.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Education-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Education-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Education",
            content: "TRIOVIBE is committed to advancing Manufacturing Education. Our foremost goal is to ensure educators have access to top-tier teaching tools, CAD/CAM software, and comprehensive support, encompassing materials, training, curriculum, and practical solutions. Catering to middle schools, high schools, technical institutions, colleges, and universities, we provide innovative solutions that address the growing classroom requirements for STEM education and manufacturing expertise.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Education-480x347.png",
            points: [
                "Top-tier teaching tools and CAD/CAM software",
                "Comprehensive support and training materials",
                "Curriculum and practical solutions for all levels",
                "STEM education and manufacturing expertise"
            ]
        },
        sections: [
            {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Student Version",
                content: "Simplified yet powerful versions for students to learn the fundamentals of CAM and CNC."
            },
            {
                icon: <Book className="w-8 h-8" />,
                title: "Curriculum Integration",
                content: "Ready-to-use resources and digital twins for a modern manufacturing curriculum."
            },
            {
                icon: <Users className="w-8 h-8" />,
                title: "Industry Readiness",
                content: "Equipping students with skills on software used by world-leading manufacturers."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "3D Printing of Buildings/Structures", image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png" },
                { title: "Robot Milling", image: "https://encycam.com/wp-content/uploads/2024/08/Robot-Milling-240x240.png" },
                { title: "Turning", image: "https://encycam.com/wp-content/uploads/2024/08/Turning-240x240.png" }
            ]
        },
        advantages: {
            title: "Educational Excellence",
            items: [
                {
                    title: "For Educators",
                    points: ["Easy-to-teach interface", "Virtual simulation labs", "Industry-standard tools", "Comprehensive support"]
                },
                {
                    title: "For Students",
                    points: ["Hands-on learning experience", "Real-world manufacturing skills", "Industry-ready expertise", "Future career preparation"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Education;
