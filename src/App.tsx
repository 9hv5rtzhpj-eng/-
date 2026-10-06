/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#161817] text-white selection:bg-[#e9874f] selection:text-white antialiased">
      {/* FMI-Style Sticky Engineering Header */}
      <Navbar />

      {/* Main Landmark */}
      <main>
        {/* 1. Hero: Quality Proven in Extreme Environments (林詠晟 / Sam) */}
        <Hero />

        {/* 2. Operational Capabilities & Engineering Philosophy */}
        <About />

        {/* 3. Featured Production Systems & Deliverables */}
        <Projects />

        {/* 4. Core Disciplines & Architecture Methodologies */}
        <Skills />

        {/* 5. Direct Inquiries & Collaboration Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
