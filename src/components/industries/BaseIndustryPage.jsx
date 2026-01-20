"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Download,
    MessageSquare,
    Cpu,
    Zap,
    ShieldCheck,
    Activity
} from 'lucide-react';
import Footer from '../Footer';

const BaseIndustryPage = ({
    title,
    subtitle,
    description,
    heroImage,
    sections,
    advantages,
    configurations,
    workflow,
    capabilities,
    introText,
    gallery,
    gallerySubtitle,
    galleryTitle,
    featured,
    heroIcon,
    setCurrentPage
}) => {
    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        viewport: { once: true }
    };

    const itemVariant = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-teal-500/30">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="initial"
                        animate="whileInView"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        {heroIcon && (
                            <motion.div variants={itemVariant} className="text-teal-400 mb-6 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                                {heroIcon}
                            </motion.div>
                        )}
                        <motion.h1
                            variants={itemVariant}
                            className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1] bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
                        >
                            {title}
                        </motion.h1>
                        {subtitle && (
                            <motion.p
                                variants={itemVariant}
                                className="text-lg md:text-xl text-gray-300 font-medium mb-12 leading-relaxed max-w-3xl opacity-90"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                        {introText && (
                            <motion.p
                                variants={itemVariant}
                                className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl border-l-2 border-teal-500/50 pl-6"
                            >
                                {introText}
                            </motion.p>
                        )}
                        <motion.div variants={itemVariant} className="flex flex-wrap gap-6">
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="px-10 py-4 bg-teal-500 text-white font-bold rounded-2xl hover:bg-teal-400 transition-all shadow-xl shadow-teal-500/20 flex items-center gap-3 hover:translate-y-[-2px] active:scale-95"
                            >
                                Talk to sales <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all hover:translate-y-[-2px] active:scale-95">
                                Download Trial
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-32 bg-white text-gray-900 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeIn}
                        className="max-w-6xl mx-auto mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight text-center tracking-tight">
                            {description.title}
                        </h2>
                        {Array.isArray(description.text) ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                {description.text.map((t, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-lg text-gray-600 leading-relaxed"
                                    >
                                        {t}
                                    </motion.p>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="max-w-4xl mx-auto text-center"
                            >
                                <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                                    {description.text}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {gallery && (
                        <div className="mb-32">
                            {(galleryTitle || gallerySubtitle) && (
                                <div className="text-center mb-16 max-w-4xl mx-auto">
                                    {galleryTitle && (
                                        <motion.h3
                                            {...fadeIn}
                                            className="text-3xl md:text-5xl font-black mb-8"
                                        >
                                            {galleryTitle}
                                        </motion.h3>
                                    )}
                                    {gallerySubtitle && (
                                        <motion.p
                                            {...fadeIn}
                                            transition={{ delay: 0.2 }}
                                            className="text-xl text-gray-600 leading-relaxed font-medium"
                                        >
                                            {gallerySubtitle}
                                        </motion.p>
                                    )}
                                </div>
                            )}
                            <motion.div
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {gallery.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariant}
                                        whileHover={{ y: -10 }}
                                        className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group relative"
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx}`}
                                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    )}

                    {sections && (
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariant}
                                    whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                                    className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 transition-all group"
                                >
                                    <div className="w-20 h-20 bg-teal-500 text-white rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-teal-500/20">
                                        {section.icon || <Cpu className="w-10 h-10" />}
                                    </div>
                                    <h3 className="text-2xl font-black mb-6">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {section.content}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Featured Section */}
            {featured && (
                <section className="py-32 bg-[#0A0D12] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#12161D] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-16 lg:p-24 flex flex-col justify-center">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tight"
                                    >
                                        {featured.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="text-xl text-gray-400 leading-relaxed mb-10"
                                    >
                                        {featured.content}
                                    </motion.p>
                                    {featured.points && (
                                        <motion.ul
                                            initial="initial"
                                            whileInView="whileInView"
                                            variants={staggerContainer}
                                            viewport={{ once: true }}
                                            className="space-y-6"
                                        >
                                            {featured.points.map((p, i) => (
                                                <motion.li
                                                    key={i}
                                                    variants={itemVariant}
                                                    className="flex items-center gap-4 text-gray-200 font-semibold text-lg"
                                                >
                                                    <div className="w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.6)]" />
                                                    {p}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="relative min-h-[500px] lg:h-auto bg-gradient-to-br from-teal-500/10 to-transparent"
                                >
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="absolute inset-0 w-full h-full object-contain p-12 lg:p-20 scale-105 hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-[#12161D]/50 to-transparent pointer-events-none" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Workflow Section */}
            {workflow && (
                <section className="py-32 bg-[#080B10] overflow-hidden text-white relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.08),transparent_50%)]" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <motion.h2
                                {...fadeIn}
                                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
                            >
                                {workflow.title || "The Workflow"}
                            </motion.h2>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-400 max-w-3xl mx-auto font-medium"
                            >
                                {workflow.subtitle}
                            </motion.p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative"
                        >
                            {/* Connection Line (Desktop) */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent -z-0"
                            />

                            {workflow.steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariant}
                                    whileHover={{ y: -15 }}
                                    className="relative z-10 bg-white/[0.03] backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-3xl hover:bg-white/[0.07] hover:border-teal-500/40 transition-all duration-500 group"
                                >
                                    <div className="w-14 h-14 bg-teal-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-teal-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-6 group-hover:text-teal-400 transition-colors">{step.title}</h4>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Advantages Section */}
            {advantages && (
                <section className="py-32 bg-[#050608] text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <motion.h2
                                {...fadeIn}
                                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
                            >
                                {advantages.title || "Key Advantages"}
                            </motion.h2>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        >
                            {advantages.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariant}
                                    className="bg-white/[0.02] p-10 rounded-[3rem] border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.04] transition-all group"
                                >
                                    <h4 className="text-2xl font-black mb-10 flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center">
                                            <CheckCircle2 className="text-teal-400 w-6 h-6" />
                                        </div>
                                        {item.title}
                                    </h4>
                                    <ul className="space-y-5">
                                        {item.points.map((point, pIdx) => (
                                            <motion.li
                                                key={pIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (pIdx * 0.1) }}
                                                className="text-gray-400 flex items-start gap-4 text-lg"
                                            >
                                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Capabilities Section */}
            {capabilities && (
                <section className="py-32 bg-white text-gray-900 border-t border-gray-100 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <motion.h2
                                {...fadeIn}
                                className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
                            >
                                {capabilities.title || "Related Products & Solutions"}
                            </motion.h2>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        >
                            {capabilities.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariant}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-teal-50/50 hover:border-teal-200 transition-all duration-500"
                                >
                                    <div className="w-full aspect-square bg-white rounded-2xl mb-6 overflow-hidden border border-gray-100 group-hover:border-teal-200 shadow-sm group-hover:shadow-xl transition-all">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-teal-500">
                                                <Zap className="w-12 h-12" />
                                            </div>
                                        )}
                                    </div>
                                    <h5 className="font-black text-lg md:text-xl group-hover:text-teal-600 transition-colors px-2">
                                        {item.title}
                                    </h5>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-32 bg-teal-500 relative overflow-hidden group">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1.2, opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-15deg] pointer-events-none"
                />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        {...fadeIn}
                        className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tight leading-none"
                    >
                        Ready to optimize <br className="hidden md:block" /> your production?
                    </motion.h2>
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        <button className="px-16 py-6 bg-gray-900 text-white font-black text-xl rounded-2xl hover:bg-black transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] active:scale-95">
                            Get Started
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="px-16 py-6 bg-white text-teal-600 font-black text-xl rounded-2xl hover:bg-gray-100 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:translate-y-[-4px] active:scale-95"
                        >
                            Contact Sales
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BaseIndustryPage;
