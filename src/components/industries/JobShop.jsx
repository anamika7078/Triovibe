"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Briefcase, Layers, Zap, Clock } from 'lucide-react';

const JobShop = ({ setCurrentPage }) => {
    const pageData = {
        title: "Job Shop",
        subtitle: "Agility and versatility for every contract.",
        heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
        description: {
            title: "One Platform, Many Projects",
            text: "TRIOVIBE empowers Job Shops to stay competitive by providing the flexibility to handle diverse projects, from simple 2D parts to complex 5-axis components."
        },
        galleryTitle: "Innovative Components and Technologies that Drive the Industry",
        gallerySubtitle: "In the dynamic world of job shops, an array of components and technologies underpins the precision and adaptability that defines the industry. CNC machining centers are the backbone of manufacturing, providing the capability to produce intricate and accurate parts. 3D printing is revolutionizing prototyping and short-run production by rapidly creating complex designs. CAD/CAM software streamlines design and programming, enabling efficient production and minimizing errors. Additionally, collaborative robots, or cobots, are becoming more prevalent in job shops, working alongside human operators to optimize tasks and improve production efficiency. The amalgamation of these technologies enables job shops to maintain their versatility, delivering tailored solutions to meet the unique needs of their clients.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Job-Shop-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Job-Shop-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Job-Shop-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Job Shop Industry",
            content: "TRIOVIBE offers a host of advantages tailored for the job shop industry. Its intuitive CAD/CAM platform streamlines the entire production process, from design to machining. With comprehensive toolpath simulations, job shops can visualize and optimize machining operations, reducing errors and material waste. The software's flexibility supports a wide range of CNC machines and robotic systems, enabling job shops to tackle diverse projects with ease. Additionally, TRIOVIBE's post-processor library ensures compatibility with various machine brands, enhancing workflow efficiency. These features collectively empower job shops to achieve higher precision, faster turnaround times, and elevated operational excellence.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Job-Shop-480x347.png",
            points: [
                "Intuitive CAD/CAM platform for streamlined production",
                "Comprehensive toolpath simulations to reduce errors",
                "Wide range of CNC machines and robotic systems support",
                "Post-processor library for various machine brands"
            ]
        },
        sections: [
            {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Setup",
                content: "Industry-leading setup times for a wide range of machines and materials."
            },
            {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Turnaround",
                content: "Streamlined programming that allows you to take on and deliver jobs faster."
            },
            {
                icon: <Layers className="w-8 h-8" />,
                title: "Project Flexibility",
                content: "Easily switch between different machine configurations and material types."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://triobive.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "HSM and Adaptive", image: "https://triobive.com/wp-content/uploads/2024/07/HSM-and-adaptive-240x245.png" },
                { title: "Mill-Turn", image: "https://triobive.com/wp-content/uploads/2024/08/Mill-turn-240x240.png" },
                { title: "Multiaxis", image: "https://triobive.com/wp-content/uploads/2024/08/Multiaxis-240x240.png" }
            ]
        },
        advantages: {
            title: "Job Shop Excellence",
            items: [
                {
                    title: "Job Shop Edge",
                    points: ["Versatile toolpath library", "Easy-to-use interface", "Support for all CNC machines", "Competitive pricing"]
                },
                {
                    title: "Operational Excellence",
                    points: ["Higher precision machining", "Faster turnaround times", "Reduced material waste", "Enhanced workflow efficiency"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default JobShop;
