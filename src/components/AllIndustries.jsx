"use client";
import React from 'react';

const AllIndustries = () => {
    const industries = [
        {
            name: 'Woodworking',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Woodworking.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Woodworking-1-240x165.jpg'
        },
        {
            name: 'Education',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Education.svg',
            image: 'https://encycam.com/wp-content/uploads/2025/07/520520532_1905267493595063_8288682696877427877_n-240x180.jpg'
        },
        {
            name: 'Watch & Jewelry',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Watch.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Watch-1-240x165.jpg'
        },
        {
            name: 'Shipbuilding',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Shipbuilding.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Shipbuilding-1-240x165.jpg'
        },
        {
            name: 'Medical & Dental',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Medical.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Medical-Dental-1-240x164.jpg'
        },
        {
            name: 'Machine Tool Industry',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Machine-Tool.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Machine-Tool-Industry-1-240x165.jpg'
        },
        {
            name: 'Job Shop',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Job-Shop.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Job-Shop-1-240x165.jpg'
        },
        {
            name: 'Industrial Machinery',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Industrial-Machinery.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Industrial-Machinery-1-240x165.jpg'
        },
        {
            name: 'Film Production',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Film-Production.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Consumer-Products-1-240x164.jpg'
        },
        {
            name: 'Heavy Equipment',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Heavy-Equipment.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Heavy-Equipment-1-240x164.jpg'
        },
        {
            name: 'Automotive & Transportation',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Automotive-Transportation.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Automotive-1-240x164.jpg'
        },
        {
            name: 'Bridge Structures',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Bridge-Structures.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Bridge-Structures-1-240x165.jpg'
        },
        {
            name: 'Arts',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Arts.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Art-1-240x164.jpg'
        },
        {
            name: 'Architecture & Construction',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Architecture-Construction.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Architecture-1-240x165.jpg'
        },
        {
            name: 'Automotosport',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Automotosport.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/Automotosport-1-240x164.jpg'
        },
        {
            name: 'Aviation',
            icon: 'https://encycam.com/wp-content/uploads/2024/08/Aviation-icon.svg',
            image: 'https://encycam.com/wp-content/uploads/2024/08/metalworking-cnc-milling-machine-2021-08-26-22-59-26-utc-240x159.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(0,0,0,0.1) 10px,
                        rgba(0,0,0,0.1) 20px
                    )`
                }}></div>
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        All Industries
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        TRIOVIBE serves diverse industries with specialized CAD/CAM solutions tailored to your specific needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer">
                            <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter blur-sm"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src={industry.icon}
                                        alt={industry.name}
                                        className="w-16 h-16 object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 text-center">
                                    {industry.name}
                                </h3>
                                <p className="text-gray-600 text-sm text-center mt-2">
                                    Specialized CAD/CAM solutions for {industry.name.toLowerCase()} industry
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllIndustries;
