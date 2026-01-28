"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PostCard = ({ image, category, date, title, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-[#1a1d24] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer group"
        >
            <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                    {category} <span className="ml-2 text-gray-600 font-normal">{date}</span>
                </p>
                <h3 className="text-base font-bold text-white leading-snug">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const PoweredByEncyPage = ({ setCurrentPage }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedApplication, setSelectedApplication] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const posts = [
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpzdugecgy-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '19 Jan 2026',
            title: 'Digital Sculpting and CNC Milling in Metal Art'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpp2df_t3a-480x640.jpg',
            category: 'POWERED BY ENCY',
            date: '17 Jan 2026',
            title: 'Wooden Bat Making Process by ENCY'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpd8u4cg8f-480x852.jpg',
            category: 'POWERED BY ENCY',
            date: '14 Jan 2026',
            title: 'Complex Part Manufacturing in a Job Shop Environment'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpmjulqfjq-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '12 Jan 2026',
            title: 'Multi-Axis Machining in Job Shop Environments'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpk9ckue_q.jpg',
            category: 'POWERED BY ENCY',
            date: '12 Jan 2026',
            title: 'Multi-Axis Robot Milling for Wooden Parts'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpg7d9m_9h.jpg',
            category: 'POWERED BY ENCY',
            date: '12 Jan 2026',
            title: 'Advanced CAM Workflow Implementation in Job Shop Setting'
        },

        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpnce88k7w-480x600.jpg',
            category: 'POWERED BY ENCY',
            date: '10 Jan 2026',
            title: 'Robotic Sanding of Wooden Products'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpovub2pg6.jpg',
            category: 'POWERED BY ENCY',
            date: '9 Jan 2026',
            title: 'Advanced Machining for Polymer Components in Film Production'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmplqr65as2-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex ENCY Robot Usage for Various Industries'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpungn9yt8-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'MIG Welding Automation with ENCY'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp2jxhj463.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Milling of Custom Parts in Job Shop Environment'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpbdq0khso.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Foam Machining for Sculpture Prototyping'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpt91f10mk-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Parts Programming in Job Shop Environment'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8uow0hqj.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Milling Achievements Highlighted in Job Shop Environment'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpji36pb45.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Milling for Custom Components in Job Shops'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpgaka01zh-480x854.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Efficient Workflow in Job Shop Machining'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmphkpjdtut-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Multi-Operation Workflow in Job Shop Machining'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8uzhswtl-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Efficient Toolpath Strategies for Job Shop Machining'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpr_05z0zs-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Machining in Job Shop Environments'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpth1_eebp-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Machining in Job Shop Environments'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpvqjp9t2f-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Robotic Additive Manufacturing in Architectural Panel Production'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpautno3r2-480x854.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Non-Planar Additive Processes for Complex Curves and Structures'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp5l2_ox01-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Multi-Axis Machining for Custom Parts in Job Shop Production'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpcmcdmmy0-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'High-Quality 3D Milling on Aluminum: Job Shop Insights'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmplfveyasb-1024x578.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Deburring and Inspection for Automotive Cylinder Heads'
            ,
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmplakjrym1.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Machining Multiple Part Types in a Flexible Job Shop'
            ,
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpr_oqyy5f-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Multi-Part Machining in the Job Shop Sector'
            ,
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpebaclqrb.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Chamfer Milling and Complex Pocketing in Aluminum Brackets'
            ,
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpzw04x0v9-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Multi-Axis Machining for Complex Aluminum Components'
            ,
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpovgtc4w9-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Multi-Axis Machining at Job Shops'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpi1u5fv0v.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Multi-Axis Machining of Metallic Components'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmptr5r58s1-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Multi-Axis Machining for Complex Cylindrical Components'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpdp56t8sf.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Adaptive Clearing Strategy for Stacked Plywood Milling'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmplpfip9cz.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: '2D Contouring and Helical Infeed Techniques in CNC Aluminum Machining'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpg73jdev9-480x640.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'CNC Programming Optimization Brings Consistent Results in Multi-Process Manufacturing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpg933hyr2-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling for Artistic Woodworking'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpy2hm436k-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Component Machining in a Job Shop Environment'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpef1f_6l8-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Ornamental Column Machining in Stone'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpieuti4y4-480x854.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Automated Mill-Turn Machining of Steel Shafts'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpctg8mpiz-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling of Composite Materials'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp22tmxm92-480x854.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling Techniques in Film Production'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpff8zj45f-480x854.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Machining with Multi-Axis CNC Centers'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpz3sh9rwn-480x600.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Hybrid Robot Programming for Automotive Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmppd86o608-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Collaborative Robots Automate Chair Frame Sanding in Woodworking'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpaah4d1dc-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced CNC Machining in Job Shop Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpg9y1aw_l.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Milling Techniques in Modern Woodworking and Sculpture'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpuj5voyn1-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Collaborative Robotics for Automation in Woodworking'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpj40cph4w-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Turning and Multiaxis Applications in Industrial Machinery'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpxszjbkml-480x727.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: '3D-Printed Concrete Planters for Architectural Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp4aus7taw-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Francis Rotor Machining Workflow on Multiaxis CNC'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpswpjbdrz-480x600.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: '5-Axis CNC Woodworking: Advanced Machining for Complex Profiles'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpk4pdcw9y-480x600.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling for Foam Mould Fabrication'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp6ikmoizc-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Helical Auger Machining on CNC Turning Centers'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp7uz6wnv7.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Process Reliability in Robotic Foam Milling for Medical Prototyping'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpffbh4ji8-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Milling of ENAW6082 Aluminum for Complex Components'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpmnhoqpfp.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Collaborative Robot Delivers Intricate Multiaxis Milling for Artistic Fabrication'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpf0ux47n4.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Robotic Milling for Film Prototypes'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpc2lnbmr0.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'High-Efficiency CNC Machining for Job Shops: HSM and Mill-Turn in Action'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpjtq7ubzz.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Milling Delivers Detailed Sculptures for Creative Industries'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpviami0ym.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'High-Complexity Robotic Welding in Aerospace Component Fabrication'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpa3jai_5v-240x536.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Multiaxis Machining for Complex Cylindrical Components'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpsi_jf5nd-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Automated Robotic Milling Cell Drives Efficiency Gains in Woodworking'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8e5hq0z5-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Cubing and Surface Mapping in CNC Aluminum Housing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpa82mb2i6.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Automated Robotic Milling for Complex Foam Prototypes'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp0vr_qfpe-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Industrial Robotics and CAD/CAM in Advanced Woodworking'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpze42bxpn-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Helical Foam Sculpting with Robotic Hot-Wire Cutting'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpp1_vs6f8-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Robotic 3D Printing in Artistic Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmporb6m1de-480x854.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Automated Robotics Solutions Accelerate Complex Manufacturing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpwfal3fb8-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Multiaxis Cutting for Die & Mold Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpy8u679dm-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Welcoming Technical Educators to Modern CNC Workshops'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpbwic4peq-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Polishing Cell Achieves Efficient Metal Surface Finishing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpq98we159-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Laser Cutting Demonstrated for Metalwork Efficiency'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpu1xirhbc.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Versatile Robot Automation for Electronics Manufacturing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpb26_cy5p.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Additive 3D Solutions for Advanced Manufacturing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpewsgl0ln-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling in Foam and Polymer Component Production'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmplcienzux-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Multiaxis Aluminum Housings for Electronics'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpujj4cgph.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Multi-Axis Machining of Helical Gears'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpvmotueuj-1024x577.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Robotic Milling for Contemporary Sculpture'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp0smc1mzi-480x640.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Hotwire Machining of Large Helical Auger'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp01hncz9m-500x500.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Scale Robotic Sculpture for Film Artistry'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpcrxbfx7e-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Automation Advances Metal Part Finishing and Inspection'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpxlkchw4x-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Multiaxis Milling of Aluminum Flange in Job Shop Production'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpbsohay34-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Milling Delivers Detailed Einstein Bust for Film and Arts'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpsk9mtbue-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Rock-Cat Sculpture: Robotic Milling and Additive Manufacturing in Action'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp57hgohay-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Automation in Welding and Milling for Energy Sector'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp2z4mt6fn-500x500.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic CNC Milling for Artistic Sculpture Creation'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp9i6xqupf-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Custom Tool Manufacturing: From Digital Design to Real-World Use'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp2xe3syby-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Multi-Axis Machining for Advanced Job Shop Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmppwczieet.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Efficient Aluminum Milling for Industrial Machinery'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpmdbd3mqt-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'High-Complexity Aluminum Housings Milled on 5-Axis CNC'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp7tfn3t43-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'KUKA Robot Enables Advanced Prosthesis Milling'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpdbzcjn7v-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex Connector Machining for Electronics Manufacturing'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpujp0c8kg-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Large-Format Robotic 3D Printing for Complex Thermoplastic Parts'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpggvovgtd-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Unique Surface Results Achieved with HSM Machining'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpzyd7spyv-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Aluminum Components Showcased with Complex Multi-Axis CNC Milling'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpubjaqidm.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Milling Delivers Detailed Sculpture in Foam and Metal'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpctsoqce8-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Milling Streamlines Art Sculpture and Cutting Processes'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp2mmp73u0-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotics Enhancements in Manufacturing'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp6q1ltrs2-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Sculpting in Shipbuilding'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpu1uiuce9-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'CNC Precision Milling for Unique Aluminum Projects'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp289j8x9t.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advancements in Mill-Turn Technology'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpjo9l7av3-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Enhancing Die & Mold Precision with Robotic Milling Solutions'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp1xky166j-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Automated Finishing for Precise Woodwork'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmppe0urwto-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Collaborative Robots Revolutionizing Industrial Painting'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpt5pij6av-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'High-Quality Machining in Woodworking'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpayhdvazg-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Efficient Thread Milling Techniques in CNC Machining'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpogikgib3-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Complex CNC Machining of Teflon Components'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmphxeflvz5-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Enhancing Efficiency in CAM Programming with ENCY'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmppcpg1o97-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Innovative Robotic Sanding in Woodworking'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmph7n2pqic-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Solutions for Complex Woodworking Tasks'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp_al9fqx1-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Innovative Robotic Solutions in Woodworking'

        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpjsegwets.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Testing the X-Axis Belt Modification'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp525it46g-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Accuracy in Surface Finishing'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmps7nnlipu.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robot Milling in Woodworking'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8i4ek_mz-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advancements in Robot Welding for the Machine Tool Industry'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpp5pgi71m.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Solutions in Industrial Machinery'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp21yx_ncm.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robot Milling with Precision'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp_4cs7c4p.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Automotive Artistry in Foam Sculpting'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpv331j4fo.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advancements in CNC Milling for Automotosport'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmppn217an8-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Crafting Versatile V Blocks for Precision Machining'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp7_wor_bs-480x640.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'CNC Crafting: Acrylic Machining in Modern Job Shops'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpyju5pihf-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advancements in Multiaxis CNC Machining'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpzvin1fps-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Perfection in Woodworking'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpwuragyrt-500x500.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Enhancing Multi-Axis Machining Control'

        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8e3smyfk.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling and Painting in Diverse Sectors'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8fz9iztv-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced CNC Milling Techniques in Job Shop Industry'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpgf9ydgtd-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robotic Laser Cutting Process Highlighted in New Video'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmph5keppgj.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling in Woodworking'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpm5jnqzan.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Robot-Assisted Wood Sculpting Breakthrough'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmpymspdfp4-1024x576.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Welding Techniques in Electronics'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp7mzded8j-480x640.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advancing Woodworking with Robotic Automation'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmppafz31sf-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Industrial Robotics in Sculpture and Coating Applications'
        }, {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp2jy3pjs_.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'CNC Machining Innovations at Machineering 2025'
        },
        {
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8h31noob-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling in Plastic'
        },{
            image: 'https://encycam.com/wp-content/uploads/pbe-rest-folder/tmp8h31noob-480x853.jpg',
            category: 'POWERED BY ENCY',
            date: '8 Jan 2026',
            title: 'Advanced Robotic Milling in Plastic'
        },
    ];


    const resetFilters = () => {
        setSelectedDate('');
        setSelectedProduct('');
        setSelectedIndustry('');
        setSelectedApplication('');
        setSearchQuery('');
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-teal-500/30">

            {/* Header Section */}
            <section className="py-20 bg-[#0a0b0e]">
                <div className="container mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Powered by ENCY</span>
                    </nav>

                    <div className="mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Powered by ENCY</h1>
                        <p className="text-gray-400 text-lg">Daily posts from ENCY users all over the world</p>
                    </div>

                    {/* Filter Section */}
                    <div className="bg-[#1a1d24] border border-gray-800 rounded-2xl p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Choose date</label>
                                <select
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="w-full bg-[#0a0b0e] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                                >
                                    <option value="">All dates</option>
                                    <option value="today">Today</option>
                                    <option value="week">This week</option>
                                    <option value="month">This month</option>
                                    <option value="year">This year</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Product</label>
                                <select
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                    className="w-full bg-[#0a0b0e] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                                >
                                    <option value="">All products</option>
                                    <option value="triovibe">TRIOVIBE</option>
                                    <option value="triovibex">TRIOVIBE X</option>
                                    <option value="triovibe-robot">TRIOVIBE Robot</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Industry focus</label>
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="w-full bg-[#0a0b0e] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                                >
                                    <option value="">All industries</option>
                                    <option value="aerospace">Aerospace</option>
                                    <option value="automotive">Automotive</option>
                                    <option value="medical">Medical</option>
                                    <option value="woodworking">Woodworking</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Applications</label>
                                <select
                                    value={selectedApplication}
                                    onChange={(e) => setSelectedApplication(e.target.value)}
                                    className="w-full bg-[#0a0b0e] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500"
                                >
                                    <option value="">All applications</option>
                                    <option value="cnc">CNC Machining</option>
                                    <option value="3d-printing">3D Printing</option>
                                    <option value="robotics">Robotics</option>
                                    <option value="cam">CAM Programming</option>
                                </select>
                            </div>

                            <div className="flex items-end space-x-2">
                                <button
                                    onClick={resetFilters}
                                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                                >
                                    Reset filter
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#0a0b0e] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500"
                            />
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <PostCard key={i} {...post} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer setCurrentPage={setCurrentPage} />
        </main>
    );
};

export default PoweredByEncyPage;
