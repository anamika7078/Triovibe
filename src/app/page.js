"use client";
import { useState, useEffect } from 'react';
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
import News from '@/components/resources/News';
import Events from '@/components/Events';
import PoweredByTriovibe from '@/components/products/PoweredByTriovibe';
import PoweredByEncyPage from '@/components/products/PoweredByEncyPage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsAndConditions from '@/components/TermsAndConditions';
import CookiePolicy from '@/components/CookiePolicy';
import SoftwareProductsDownload from '@/components/resources/SoftwareProductsDownload';
import NewsPage from '@/components/resources/NewsPage';
import EventsPage from '@/components/resources/EventsPage';
import UseCasesPage from '@/components/resources/UseCasesPage';
import ArticlesPage from '@/components/resources/ArticlesPage';
import BecomeADealer from '@/components/resources/BecomeADealer';
import WhyTriovibe from '@/components/WhyTriovibe';
import AllIndustries from '@/components/AllIndustries';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    // Set initial page from URL on mount
    const path = window.location.hash.slice(1) || 'home';
    setCurrentPage(path);

    // Handle browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.hash.slice(1) || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, null, `#${page}`);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-teal-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={navigateToPage} />
      {currentPage === 'triovibex' ? (
        <TriovibeX setCurrentPage={navigateToPage} />
      ) : currentPage === 'triovibe' ? (
        <Triovibe setCurrentPage={navigateToPage} />
      ) : currentPage === 'triovibe-robot' ? (
        <TriovibeRobot setCurrentPage={navigateToPage} />
      ) : currentPage === 'triovibe-tuner' ? (
        <TriovibeTuner setCurrentPage={navigateToPage} />
      ) : currentPage === 'triovibe-clouds' ? (
        <TriovibeClouds setCurrentPage={navigateToPage} />
      ) : currentPage === 'triovibe-machinemaker' ? (
        <TriovibeMachineMaker setCurrentPage={navigateToPage} />
      ) : currentPage === 'triovibe-hyper' ? (
        <TriovibeHyper setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-aerospace' ? (
        <Aerospace setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-architecture' ? (
        <Architecture setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-arts' ? (
        <Arts setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-automotive' ? (
        <Automotive setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-automotosport' ? (
        <Automotosport setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-bridge' ? (
        <BridgeStructures setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-consumer' ? (
        <ConsumerProducts setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-diemold' ? (
        <DieMold setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-education' ? (
        <Education setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-electronics' ? (
        <Electronics setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-energy' ? (
        <Energy setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-film' ? (
        <FilmProduction setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-mining' ? (
        <Mining setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-machinery' ? (
        <IndustrialMachinery setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-jobshop' ? (
        <JobShop setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-machinetool' ? (
        <MachineTool setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-medical' ? (
        <Medical setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-shipbuilding' ? (
        <Shipbuilding setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-watchjewelry' ? (
        <WatchJewelry setCurrentPage={navigateToPage} />
      ) : currentPage === 'industry-woodworking' ? (
        <Woodworking setCurrentPage={navigateToPage} />
      ) : currentPage === 'contact' ? (
        <>
          <Contact setCurrentPage={navigateToPage} />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'about' ? (
        <>
          <AboutUs setCurrentPage={navigateToPage} />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'privacy-policy' ? (
        <>
          <PrivacyPolicy setCurrentPage={navigateToPage} />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'terms-and-conditions' ? (
        <>
          <TermsAndConditions setCurrentPage={navigateToPage} />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'cookie-policy' ? (
        <>
          <CookiePolicy setCurrentPage={navigateToPage} />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'software-products-download' ? (
        <>
          <SoftwareProductsDownload />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'news' ? (
        <>
          <NewsPage />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'events' ? (
        <>
          <EventsPage />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'use-cases' ? (
        <>
          <UseCasesPage />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'articles' ? (
        <>
          <ArticlesPage />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'become-dealer' ? (
        <>
          <BecomeADealer />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'why-triovibe' ? (
        <>
          <WhyTriovibe setCurrentPage={navigateToPage} />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'all-industries' ? (
        <>
          <AllIndustries />
          <Footer setCurrentPage={navigateToPage} />
        </>
      ) : currentPage === 'powered-by-ency' ? (
        <>
          <PoweredByEncyPage setCurrentPage={navigateToPage} />
        </>
      ) : (
        <>
          <Hero setCurrentPage={navigateToPage} />
          <Features setCurrentPage={navigateToPage} />
          <Products setCurrentPage={navigateToPage} />
          <News setCurrentPage={navigateToPage} />
          <Events setCurrentPage={navigateToPage} />
          <PoweredByTriovibe setCurrentPage={navigateToPage} />
          {/* <Contact /> */}
          <Footer setCurrentPage={navigateToPage} />
        </>
      )}
    </main>
  );
}
