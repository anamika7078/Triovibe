"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/products/Products';
import CTA from '@/components/products/CTA';
import TriovibeX from '@/components/products/TriovibeX';
import Triovibe from '@/components/products/Triovibe';
import TriovibeRobot from '@/components/products/TriovibeRobot';
import TriovibeTuner from '@/components/products/TriovibeTuner';
import TriovibeClouds from '@/components/products/TriovibeClouds';
import TriovibeMachineMaker from '@/components/products/TriovibeMachineMaker';
import TriovibeHyper from '@/components/products/TriovibeHyper';
import News from '@/components/News';
import Events from '@/components/Events';
import PoweredByTriovibe from '@/components/products/PoweredByTriovibe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Industry Imports
import Aerospace from '@/components/industries/Aerospace';
import Architecture from '@/components/industries/Architecture';
import Arts from '@/components/industries/Arts';
import Automotive from '@/components/industries/Automotive';
import Automotosport from '@/components/industries/Automotosport';
import BridgeStructures from '@/components/industries/BridgeStructures';
import ConsumerProducts from '@/components/industries/ConsumerProducts';
import DieMold from '@/components/industries/DieMold';
import Education from '@/components/industries/Education';
import Electronics from '@/components/industries/Electronics';
import Energy from '@/components/industries/Energy';
import FilmProduction from '@/components/industries/FilmProduction';
import Mining from '@/components/industries/Mining';
import IndustrialMachinery from '@/components/industries/IndustrialMachinery';
import JobShop from '@/components/industries/JobShop';
import MachineTool from '@/components/industries/MachineTool';
import Medical from '@/components/industries/Medical';
import Shipbuilding from '@/components/industries/Shipbuilding';
import WatchJewelry from '@/components/industries/WatchJewelry';
import Woodworking from '@/components/industries/Woodworking';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-teal-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'triovibex' ? (
        <TriovibeX setCurrentPage={setCurrentPage} />
      ) : currentPage === 'triovibe' ? (
        <Triovibe setCurrentPage={setCurrentPage} />
      ) : currentPage === 'triovibe-robot' ? (
        <TriovibeRobot setCurrentPage={setCurrentPage} />
      ) : currentPage === 'triovibe-tuner' ? (
        <TriovibeTuner setCurrentPage={setCurrentPage} />
      ) : currentPage === 'triovibe-clouds' ? (
        <TriovibeClouds setCurrentPage={setCurrentPage} />
      ) : currentPage === 'triovibe-machinemaker' ? (
        <TriovibeMachineMaker setCurrentPage={setCurrentPage} />
      ) : currentPage === 'triovibe-hyper' ? (
        <TriovibeHyper setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-aerospace' ? (
        <Aerospace setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-architecture' ? (
        <Architecture setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-arts' ? (
        <Arts setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-automotive' ? (
        <Automotive setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-automotosport' ? (
        <Automotosport setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-bridge' ? (
        <BridgeStructures setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-consumer' ? (
        <ConsumerProducts setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-diemold' ? (
        <DieMold setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-education' ? (
        <Education setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-electronics' ? (
        <Electronics setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-energy' ? (
        <Energy setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-film' ? (
        <FilmProduction setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-mining' ? (
        <Mining setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-machinery' ? (
        <IndustrialMachinery setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-jobshop' ? (
        <JobShop setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-machinetool' ? (
        <MachineTool setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-medical' ? (
        <Medical setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-shipbuilding' ? (
        <Shipbuilding setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-watchjewelry' ? (
        <WatchJewelry setCurrentPage={setCurrentPage} />
      ) : currentPage === 'industry-woodworking' ? (
        <Woodworking setCurrentPage={setCurrentPage} />
      ) : currentPage === 'contact' ? (
        <>
          <Contact />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <Features />
          <Products setCurrentPage={setCurrentPage} />
          <News />
          <Events />
          <PoweredByTriovibe />
          {/* <Contact /> */}
          <Footer />
        </>
      )}
    </main>
  );
}
