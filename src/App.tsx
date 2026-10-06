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
    <div className="min-h-screen bg-[#000000] text-[#F4F4F6] selection:bg-[#E6E6E9] selection:text-[#000000]">
      {/* 導航欄 (Sticky Header) */}
      <Navbar />

      {/* 主內容區塊 (Main Landmark) */}
      <main>
        {/* 1. Hero 首頁視覺與定位 (林詠晟 / Sam) */}
        <Hero />

        {/* 2. 關於我、經歷與工程哲學 */}
        <About />

        {/* 3. 精選架構專案 (含詳細架構彈窗與篩選) */}
        <Projects />

        {/* 4. 技術能力分群與系統設計方法論 */}
        <Skills />

        {/* 5. 聯絡我 (一鍵複製信箱與互動表單) */}
        <Contact />
      </main>

      {/* 頁尾 (Footer) */}
      <Footer />
    </div>
  );
}
