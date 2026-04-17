"use client";
import React from 'react';
import { ArrowRight, Download, Check } from 'lucide-react';

const SoftwareProductsDownload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Download ENCY - Your CAD/CAM Workflow Starts Here
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get started with ENCY's powerful CAD/CAM solutions. Whether you're in manufacturing, 
              engineering, or design, our software products provide the tools you need to bring 
              your ideas to life. Download the latest versions and experience the future of 
              digital manufacturing.
            </p>
          </div>
        </div>
      </div>

      {/* Available Products Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Available Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ENCY */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white">ENCY</h3>
                <p className="text-teal-100 mt-2">CAD/CAM for a new generation</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">Advanced 3-axis programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">5-axis simultaneous machining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">Swiss-type lathe support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">Mill-Turn capabilities</span>
                  </li>
                </ul>

              </div>
            </div>

            {/* ENCY Robot */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
                <h3 className="text-2xl font-bold text-white">ENCY Robot</h3>
                <p className="text-purple-100 mt-2">Advanced robotic programming</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">6-axis robot programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Path optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Collision avoidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Cobot programming</span>
                  </li>
                </ul>

              </div>
            </div>

            {/* ENCY Tuner */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
                <h3 className="text-2xl font-bold text-white">ENCY Tuner</h3>
                <p className="text-orange-100 mt-2">Precision optimization tool</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">Quality improvement</span>
                  </li>
                </ul>

              </div>
            </div>

            {/* ENCY Hyper */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6">
                <h3 className="text-2xl font-bold text-white">ENCY Hyper</h3>
                <p className="text-green-100 mt-2">High-performance machining</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">High-speed machining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Advanced simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Multi-surface machining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Optimized toolpaths</span>
                  </li>
                </ul>

              </div>
            </div>

            {/* MachineMaker for Robots */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
                <h3 className="text-2xl font-bold text-white">MachineMaker</h3>
                <p className="text-blue-100 mt-2">Machine configuration software</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Robot configuration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Custom machine setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Integration tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Automation workflows</span>
                  </li>
                </ul>

              </div>
            </div>

            {/* ENCY Clouds */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white">ENCY Clouds</h3>
                <p className="text-indigo-100 mt-2">Cloud-based collaboration</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Cloud collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Version control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">Team workflows</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SoftwareProductsDownload;
