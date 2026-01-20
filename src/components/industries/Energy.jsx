"use client";
import React from 'react';
import BaseIndustryPage from './BaseIndustryPage';
import { Droplet, Wind, Zap, Sun } from 'lucide-react';

const Energy = ({ setCurrentPage }) => {
    const pageData = {
        title: "Energy, Oil & Gas, Power Generation",
        subtitle: "Fueling the energy transition.",
        heroImage: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?w=1920&q=80",
        description: {
            title: "Powers of Production",
            text: "Supporting both traditional oil & gas and renewable energy sectors with heavy-duty machining and advanced robotic inspection."
        },
        galleryTitle: "Essential Components and Cutting-Edge Technologies",
        gallerySubtitle: "In this intricate landscape, a host of components and technologies synergize to ensure energy production and distribution. Drilling equipment and pipelines serve as the lifeblood of oil and gas extraction. Power plants rely on turbines, generators, and boiler systems for electricity generation. Renewable energy sources demand photovoltaic cells, wind turbines, and battery storage systems. Furthermore, the industry relies on smart grids, real-time monitoring, and predictive maintenance to ensure operational efficiency. Innovation remains a steadfast companion, illuminating the path towards a dynamic, sustainable energy future.",
        gallery: [
            "https://encycam.com/wp-content/uploads/2024/08/Energy-1-300x206.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Energy-2-300x205.jpg",
            "https://encycam.com/wp-content/uploads/2024/08/Energy-3-300x205.jpg"
        ],
        featured: {
            title: "TRIOVIBE for the Energy, Oil & Gas, Power Generation Industry",
            content: "TRIOVIBE establishes the benchmark for CNC programming, offering versatile operations tailored to the energy manufacturing sector. Our comprehensive solution supports a wide array of machines, from lathes to mill-turn centers, and across a spectrum of materials, adhering to stringent quality and precision standards. With TRIOVIBE, the journey to digital transformation and optimized production becomes straightforward. Our advanced process IQ shall work to seamlessly align with the precision requirements of your workshop, from design and planning to manufacturing. Embrace the efficiency and reliability that TRIOVIBE operations, with its deep-rooted in-sport, in every stage.",
            image: "https://encycam.com/wp-content/uploads/2024/09/Energy-Oil-Gas-Power-Generation-480x347.png",
            points: [
                "Versatile operations for energy manufacturing",
                "Support for lathes to mill-turn centers",
                "Stringent quality and precision standards",
                "Digital transformation and optimized production"
            ]
        },
        sections: [
            {
                icon: <Wind className="w-8 h-8" />,
                title: "Renewable Energy",
                content: "Milling for wind turbine hubs and precision components for solar tracking systems."
            },
            {
                icon: <Droplet className="w-8 h-8" />,
                title: "Oil & Gas Equipment",
                content: "Heavy-duty turning and milling for valves, pumps, and downhole tools."
            },
            {
                icon: <Zap className="w-8 h-8" />,
                title: "Power Gen Parts",
                content: "Precision machining for generator shafts and nuclear power plant components."
            }
        ],
        capabilities: {
            title: "Related Products and Solutions",
            items: [
                { title: "2.5x and 3x Milling", image: "https://encycam.com/wp-content/uploads/2024/08/2.5x-and-3x-Milling-240x240.png" },
                { title: "Mill-Turn", image: "https://encycam.com/wp-content/uploads/2024/08/Mill-turn-240x240.png" },
                { title: "Turning", image: "https://encycam.com/wp-content/uploads/2024/08/Turning-240x240.png" },
                { title: "Wire EDM", image: "https://encycam.com/wp-content/uploads/2024/08/EDM-240x240.png" }
            ]
        },
        advantages: {
            title: "Energy Excellence",
            items: [
                {
                    title: "Energy Reliability",
                    points: ["Heavy part handling", "Tough alloy support", "Remote robotic inspection", "Certified post-processors"]
                },
                {
                    title: "Advanced Manufacturing",
                    points: ["Digital transformation ready", "Multi-machine support", "Precision quality standards", "Optimized production workflows"]
                }
            ]
        }
    };
    return <BaseIndustryPage {...pageData} setCurrentPage={setCurrentPage} />;
};
export default Energy;
