"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Film, Video, Camera, Clapperboard } from 'lucide-react';

const FilmProduction = ({ setCurrentPage }) => {
    const pageData = {
        title: "Film Production & Entertainment",
        subtitle: "Precision for the big screen.",
        heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
        description: {
            title: "TRIOVIBE Cinematic Engineering",
            text: "From intricate props to massive set pieces and motion control camera rigs, TRIOVIBE brings cinematic visions to life with speed and precision."
        },
        galleryTitle: "Technology's Spotlight in Film Production",
        gallerySubtitle: "Behind the mesmerizing scenes of cinema lies an array of technologies that shape the magic. High-definition cameras and advanced cinematography tools capture every nuance and detail of a scene. Editing software brings together shots, creating seamless sequences that evoke emotion. Special effects and TRIOVIBE CGI transport audiences to fantastical realms, while sound engineering and scoring immerse viewers in the narrative. As the industry navigates new avenues, artificial intelligence is also being harnessed for tasks like script analysis and predictive analytics to gauge audience preferences. With each technological leap, the film production industry not only refines its craft but also sparks new waves of cinematic innovation.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Film-Production-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Film-Production-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Film-Production-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Film Production Industry",
            content: "Hundreds of companies from the entertainment and film production industry, including those in Hollywood, employ TRIOVIBE Robot for the creation of large-scale set designs, movie props, and stage elements. TRIOVIBE Robot stands as a unique OLP software solution, offering an integrated interface for milling operations, machining simulations, and a diverse range of post-processors for various industrial robot brands. TRIOVIBE Robot supports advanced Hot-Wire cutting techniques used to carve foam and similar materials. TRIOVIBE Robot is the prime choice if you require robotic milling for movie props or stage construction.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Film-Production-Entertainment-480x347.png",
            points: [
                "Large-scale set designs and movie props creation",
                "Integrated OLP software for milling operations",
                "Advanced Hot-Wire cutting techniques",
                "Robotic milling for stage construction"
            ]
        },
        sections: [
            {
                icon: <Video className="w-8 h-8" />,
                title: "Prop Fabrication",
                content: "Robotic sculpting and multi-material machining for high-detail film props."
            },
            {
                icon: <Camera className="w-8 h-8" />,
                title: "Camera Rigging",
                content: "Precision machining for custom camera rigs and specialized motion control equipment."
            },
            {
                icon: <Clapperboard className="w-8 h-8" />,
                title: "Set Piece Design",
                content: "Large-scale fabrication of structural set elements using digital twin technology."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "3D Printing of Buildings/Structures", image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png" },
                { title: "Hot Wire", image: "https://encycam.com/wp-content/uploads/2024/08/3D-Printing-of-Buildings-240x255.png" },
                { title: "Robot Milling", image: "https://encycam.com/wp-content/uploads/2024/08/Robot-Milling-240x240.png" },
                { title: "Sculpture Machining", image: "https://encycam.com/wp-content/uploads/2024/08/Sculpture-Stone-240x240.png" }
            ]
        },
        advantages: {
            title: "Entertainment Excellence",
            items: [
                {
                    title: "Entertainment Focus",
                    points: ["Rapid prop turnaround", "Extreme detail handling", "TRIOVIBE Complex mechanism support", "Multi-material versatility"]
                },
                {
                    title: "TRIOVIBE Creative Production",
                    points: ["Hollywood-proven solutions", "Large-scale set fabrication", "Advanced robotic capabilities", "Precision prop manufacturing"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default FilmProduction;
