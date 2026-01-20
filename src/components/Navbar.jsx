"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, MessageSquare, Download, Star, Check } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('TRIOVIBE');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why TRIOVIBE?', href: '#' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Industries', href: '#', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
  ];

  const products = [
    { id: 'TRIOVIBE', name: 'TRIOVIBE', description: 'CAD/CAM for a new generation' },
    { id: 'TRIOVIBE Robot', name: 'TRIOVIBE Robot', description: 'Advanced robotic programming' },
    { id: 'TRIOVIBE Tuner', name: 'TRIOVIBE Tuner', description: 'Precision optimization tool' },
    { id: 'TRIOVIBE Clouds', name: 'TRIOVIBE Clouds', description: 'Cloud-based collaboration' },
    { id: 'MachineMaker', name: 'MachineMaker', description: 'Machine configuration software' },
    { id: 'TRIOVIBE Hyper', name: 'TRIOVIBE Hyper', description: 'High-performance machining' },
  ];

  const TRIOVIBEApplications = [
    {
      title: '3x milling',
      features: [
        'Advanced 3-axis programming',
        'Optimized toolpaths',
        'Smart nesting',
        'High-speed machining',
        'Roughing and finishing strategies'
      ]
    },
    {
      title: 'Swiss',
      features: [
        'Swiss-type lathe support',
        'Synchronized machining',
        'Multi-spindle control',
        'Back working operations',
        'C-axis programming'
      ]
    },
    {
      title: '5x milling',
      features: [
        '5-axis simultaneous machining',
        'Collision detection',
        'Tool orientation control',
        'Multi-surface machining',
        'Indexing operations'
      ]
    },
    {
      title: 'Multiaxis cutting',
      features: [
        'Multi-axis indexing',
        'Complex surface machining',
        'Advanced simulation',
        'Toolpath optimization',
        'Material removal strategies'
      ]
    },
    {
      title: 'Mill-Turn',
      features: [
        'Combined milling and turning',
        'C-axis and Y-axis programming',
        'Live tooling support',
        'Sub-spindle operations',
        'Cross drilling and tapping'
      ]
    },
    {
      title: 'Additive',
      features: [
        'Hybrid manufacturing',
        'Additive machining strategies',
        'Laser deposition paths',
        'Material addition control',
        'Post-processing operations'
      ]
    }
  ];

  const industriesColumn1 = [
    { name: "Aerospace & Aviation", id: "industry-aerospace" },
    { name: "Architecture & Construction", id: "industry-architecture" },
    { name: "Arts", id: "industry-arts" },
    { name: "Automotive & Transportation", id: "industry-automotive" },
    { name: "Automotosport", id: "industry-automotosport" },
    { name: "Bridge Structures", id: "industry-bridge" },
    { name: "Consumer Products", id: "industry-consumer" },
    { name: "Die & Mold", id: "industry-diemold" },
    { name: "Education", id: "industry-education" },
    { name: "Electronics, Computers, Telecom", id: "industry-electronics" }
  ];

  const industriesColumn2 = [
    { name: "Energy, Oil & Gas, Power Generation", id: "industry-energy" },
    { name: "Film Production & Entertainment", id: "industry-film" },
    { name: "Heavy Equipment & Mining", id: "industry-mining" },
    { name: "Industrial Machinery & Equipment", id: "industry-machinery" },
    { name: "Job Shop", id: "industry-jobshop" },
    { name: "Machine Tool Industry", id: "industry-machinetool" },
    { name: "Medical & Dental", id: "industry-medical" },
    { name: "Shipbuilding", id: "industry-shipbuilding" },
    { name: "Watch & Jewelry", id: "industry-watchjewelry" },
    { name: "Woodworking", id: "industry-woodworking" }
  ];

  return (
    <nav className="h-20 bg-white border-b border-gray-100 flex items-center sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <span className="text-2xl font-bold tracking-tighter flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-700">TRIOVIBE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <button
                  onClick={() => {
                    if (link.name === 'Products') {
                      setIsProductsDropdownOpen(!isProductsDropdownOpen);
                      setIsIndustriesDropdownOpen(false);
                      setIsResourcesDropdownOpen(false);
                    } else if (link.name === 'Industries') {
                      setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                      setIsProductsDropdownOpen(false);
                      setIsResourcesDropdownOpen(false);
                    } else if (link.name === 'Resources') {
                      setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                      setIsProductsDropdownOpen(false);
                      setIsIndustriesDropdownOpen(false);
                    }
                  }}
                  className={`text-sm font-semibold flex items-center gap-1 transition-all px-3 py-1.5 rounded-lg ${((link.name === 'Products' && isProductsDropdownOpen) ||
                    (link.name === 'Industries' && isIndustriesDropdownOpen) ||
                    (link.name === 'Resources' && isResourcesDropdownOpen))
                    ? 'text-teal-600 bg-gray-100'
                    : 'text-gray-800 hover:text-teal-600 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${((link.name === 'Products' && isProductsDropdownOpen) || (link.name === 'Industries' && isIndustriesDropdownOpen) || (link.name === 'Resources' && isResourcesDropdownOpen)) ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-semibold text-gray-800 flex items-center gap-1 hover:text-teal-600 transition-colors px-3 py-1.5"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-teal-600">Sign in</a>
          <button
            onClick={() => setCurrentPage('contact')}
            className="text-sm font-semibold text-gray-800 hover:text-teal-600 transition-colors"
          >
            Contact sales
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg">
            Start for free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-bold text-gray-900">
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <a href="#" className="text-lg text-gray-800">Sign in</a>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg text-gray-800 text-left font-bold"
              >
                Contact sales
              </button>
              <button className="bg-gradient-to-r from-teal-600 to-blue-700 text-white px-6 py-3 rounded-full text-center font-bold">
                Start for free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Dropdown */}
      <AnimatePresence>
        {isProductsDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#0A192F] border-t border-gray-800 shadow-2xl z-50"
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Left Section */}
                <div className="col-span-3">
                  <div className="bg-white rounded-lg p-6">
                    <div className="mb-6">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">ECOSYSTEM</h3>
                      <ul className="space-y-2">
                        <li>
                          <button
                            onClick={() => {
                              setCurrentPage('TRIOVIBEx');
                              setIsProductsDropdownOpen(false);
                            }}
                            className="text-sm font-bold text-gray-900 hover:text-teal-600 transition-colors"
                          >
                            TRIOVIBE X
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">PRODUCTS</h3>
                      <ul className="space-y-2">
                        {products.map((product) => (
                          <li key={product.id}>
                            <button
                              onClick={() => setSelectedProduct(product.id)}
                              className={`text-sm font-bold transition-colors flex items-center justify-between w-full text-left ${selectedProduct === product.id
                                ? 'text-teal-600'
                                : 'text-gray-900 hover:text-teal-600'
                                }`}
                            >
                              {product.name}
                              {selectedProduct === product.id && (
                                <ChevronDown size={14} className="ml-1" />
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Middle Section - Product Details */}
                <div className="col-span-6 bg-[#0A192F] rounded-lg p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {products.find(p => p.id === selectedProduct)?.name}: {products.find(p => p.id === selectedProduct)?.description}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">The ultimate solution for advanced manufacturing.</p>
                    <button
                      onClick={() => {
                        if (selectedProduct === 'TRIOVIBE') {
                          setCurrentPage('TRIOVIBE');
                          setIsProductsDropdownOpen(false);
                        } else if (selectedProduct === 'TRIOVIBE Robot') {
                          setCurrentPage('TRIOVIBE-robot');
                          setIsProductsDropdownOpen(false);
                        } else if (selectedProduct === 'TRIOVIBE Tuner') {
                          setCurrentPage('TRIOVIBE-tuner');
                          setIsProductsDropdownOpen(false);
                        } else if (selectedProduct === 'TRIOVIBE Clouds') {
                          setCurrentPage('TRIOVIBE-clouds');
                          setIsProductsDropdownOpen(false);
                        } else if (selectedProduct === 'MachineMaker') {
                          setCurrentPage('TRIOVIBE-machinemaker');
                          setIsProductsDropdownOpen(false);
                        } else if (selectedProduct === 'TRIOVIBE Hyper') {
                          setCurrentPage('TRIOVIBE-hyper');
                          setIsProductsDropdownOpen(false);
                        }
                      }}
                      className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                    >
                      View product
                    </button>
                  </div>
                  <img
                    src="https://TRIOVIBEcam.com/wp-content/uploads/2025/02/TRIOVIBE-X-scheme.svg"
                    alt={`${selectedProduct} Product Interface`}
                    className="max-w-full h-auto mt-4"
                  />
                </div>

                {/* Right Section */}
                <div className="col-span-3">
                  <div className="bg-[#1A2B40] rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-white">Applications</h3>
                      <button
                        onClick={() => {
                          setPopupContent(TRIOVIBEApplications);
                          setIsPopupOpen(true);
                        }}
                        className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        View all
                      </button>
                    </div>

                    {selectedProduct === 'TRIOVIBE' && (
                      <div className="space-y-4">
                        <div className="border-b border-gray-600 pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">3x milling</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Advanced 3-axis programming</li>
                            <li>• Optimized toolpaths</li>
                            <li>• Smart nesting</li>
                          </ul>
                        </div>
                        <div className="border-b border-gray-600 pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Swiss</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Swiss-type lathe support</li>
                            <li>• Synchronized machining</li>
                            <li>• Multi-spindle control</li>
                          </ul>
                        </div>
                        <div className="border-b border-gray-600 pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">5x milling</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• 5-axis simultaneous machining</li>
                            <li>• Collision detection</li>
                            <li>• Tool orientation control</li>
                          </ul>
                        </div>
                        <div className="pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Multiaxis cutting</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Multi-axis indexing</li>
                            <li>• Complex surface machining</li>
                            <li>• Advanced simulation</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 'TRIOVIBE Robot' && (
                      <div className="space-y-4">
                        <div className="border-b border-gray-600 pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Robot Integration</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• 6-axis robot programming</li>
                            <li>• Path optimization</li>
                            <li>• Collision avoidance</li>
                          </ul>
                        </div>
                        <div className="border-b border-gray-600 pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Automation</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Automated workflows</li>
                            <li>• Machine tending</li>
                            <li>• Part handling</li>
                          </ul>
                        </div>
                        <div className="pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Collaborative Robots</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Cobot programming</li>
                            <li>• Safety features</li>
                            <li>• Human-robot interaction</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Default content for other products */}
                    {selectedProduct !== 'TRIOVIBE' && selectedProduct !== 'TRIOVIBE Robot' && (
                      <div className="space-y-4">
                        <div className="border-b border-gray-600 pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Advanced algorithms</li>
                            <li>• Real-time processing</li>
                            <li>• Cloud integration</li>
                          </ul>
                        </div>
                        <div className="pb-3">
                          <h4 className="text-sm font-semibold text-white mb-2">Benefits</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li>• Increased productivity</li>
                            <li>• Reduced setup time</li>
                            <li>• Enhanced accuracy</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industries Dropdown */}
      <AnimatePresence>
        {isIndustriesDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50 overflow-hidden"
            onMouseLeave={() => setIsIndustriesDropdownOpen(false)}
          >
            <div className="container mx-auto px-6 py-10">
              <div className="grid grid-cols-12 gap-8">
                {/* Industries Lists */}
                <div className="col-span-8 grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    {industriesColumn1.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentPage(item.id);
                          setIsIndustriesDropdownOpen(false);
                        }}
                        className="block text-[15px] font-medium text-gray-700 hover:text-teal-600 transition-colors text-left w-full"
                      >
                        {item.name}
                      </button>
                    ))}
                    <div className="pt-4">
                      <button
                        onClick={() => setIsIndustriesDropdownOpen(false)}
                        className="border border-gray-300 text-gray-500 rounded-full px-5 py-1.5 text-sm font-medium hover:border-teal-600 hover:text-teal-600 transition-all"
                      >
                        All industries
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {industriesColumn2.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentPage(item.id);
                          setIsIndustriesDropdownOpen(false);
                        }}
                        className="block text-[15px] font-medium text-gray-700 hover:text-teal-600 transition-colors text-left w-full"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Panel */}
                <div className="col-span-4 bg-gray-50 -my-10 p-10 border-l border-gray-100 flex flex-col gap-6">
                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-5">
                      <h4 className="text-[17px] font-bold text-teal-600 mb-4">What's new in TRIOVIBE 2.6</h4>
                      <ul className="space-y-2.5 mb-5">
                        {[
                          "Helical lines in Design",
                          "Extrude and Sweep Along the Trajectory",
                          "Workflow improvements",
                          "Stability & quality fixes"
                        ].map((text, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs font-medium text-gray-500">
                            <Check size={14} className="text-gray-400" />
                            {text}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-[#0BB5AD] rounded-lg aspect-video flex items-center justify-center p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <img
                          src="https://TRIOVIBEcam.com/wp-content/uploads/2025/02/TRIOVIBE-X-scheme.svg"
                          alt="New Features"
                          className="w-full h-full object-contain filter brightness-0 invert opacity-90"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        setCurrentPage('contact');
                        setIsIndustriesDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 text-gray-800 font-semibold hover:text-teal-600 transition-colors group text-left w-full"
                    >
                      <MessageSquare size={18} className="text-gray-400 group-hover:text-teal-600" />
                      Contact sales
                    </button>
                    <a href="#" onClick={() => setIsIndustriesDropdownOpen(false)} className="flex items-center gap-3 text-gray-800 font-semibold hover:text-teal-600 transition-colors group">
                      <Download size={18} className="text-gray-400 group-hover:text-teal-600" />
                      Start for free
                    </a>
                    <a href="#" onClick={() => setIsIndustriesDropdownOpen(false)} className="flex items-center gap-3 text-gray-800 font-semibold hover:text-teal-600 transition-colors group">
                      <Star size={18} className="text-gray-400 group-hover:text-teal-600" />
                      Why TRIOVIBE?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Applications Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">TRIOVIBE Applications</h2>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto">
                  {popupContent?.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{application.title}</h3>
                      <ul className="space-y-2">
                        {application.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-teal-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
