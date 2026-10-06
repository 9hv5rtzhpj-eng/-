import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#66666E]/40 relative bg-[#000000]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-medium text-[#9999A1] tracking-wider uppercase">
            01. Background & Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
            關於我：以工程確定性驅動業務價值
          </h2>
          <p className="text-[#9999A1] text-sm sm:text-base max-w-3xl">
            不盲從過度包裝的熱門名詞，專注於系統穩定性、精確的資料邊界與可衡量的真實商業影響力。
          </p>
        </div>

        {/* Narrative & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#E6E6E9] leading-relaxed text-sm sm:text-base">
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#E6E6E9]">
                {para}
              </p>
            ))}

            <div className="pt-4 p-5 rounded-xl bg-[#000000] border border-[#66666E]/60 space-y-3">
              <div className="text-xs font-mono font-semibold text-[#F4F4F6] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E6E6E9]" />
                當前技術研究重點（Current Technical Focus）
              </div>
              <ul className="text-xs sm:text-sm text-[#9999A1] space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-[#F4F4F6] font-mono">→</span>
                  <span><strong className="text-[#E6E6E9]">AI Agent 容錯與狀態持久化：</strong>以 DAG 拓撲圖為基礎的非同步任務恢復與 Token 預算控制。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4F4F6] font-mono">→</span>
                  <span><strong className="text-[#E6E6E9]">分散式即時系統：</strong>利用 Go、ClickHouse 與 WebSockets 建置次秒級遙測與高併發處理管線。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4F4F6] font-mono">→</span>
                  <span><strong className="text-[#E6E6E9]">端到端型別安全：</strong>跨前後端 TypeScript 邊界共享與 PostgreSQL 嚴格架構演進。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Profile Snapshot Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-[#66666E]/60 bg-[#000000] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#66666E]/40 pb-4">
                <span className="text-xs font-mono text-[#9999A1] uppercase">Engineer Profile</span>
                <span className="text-xs font-mono text-[#F4F4F6]">Available</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-[#66666E] uppercase text-[11px]">Primary Role</div>
                  <div className="text-[#F4F4F6] text-sm font-sans font-semibold mt-0.5">
                    {personal.headline}
                  </div>
                </div>

                <div>
                  <div className="text-[#66666E] uppercase text-[11px]">Base & Timezone</div>
                  <div className="text-[#E6E6E9] text-sm font-sans mt-0.5">
                    {personal.location}
                  </div>
                </div>

                <div>
                  <div className="text-[#66666E] uppercase text-[11px]">Core Philosophy</div>
                  <div className="text-[#9999A1] text-xs font-sans mt-0.5">
                    「好的架構讓複雜的問題變簡單，而非把簡單的問題變複雜。」
                  </div>
                </div>

                <div>
                  <div className="text-[#66666E] uppercase text-[11px]">Collaboration Mode</div>
                  <div className="text-[#9999A1] text-xs font-sans mt-0.5">
                    全端技術負責人 / 外部技術架構顧問 / 跨國遠端團隊核心開發
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Principles */}
        <div className="space-y-6 pt-6">
          <div className="text-xs font-mono font-medium text-[#9999A1] tracking-wider uppercase">
            Core Principles · 核心實踐守則
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.principles.map((principle, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-[#000000] hover:bg-[#66666E]/10 border border-[#66666E]/60 hover:border-[#E6E6E9] transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#F4F4F6] font-semibold">
                    0{idx + 1}.
                  </span>
                  <span className="text-[11px] font-mono text-[#9999A1] px-2 py-0.5 rounded bg-[#000000] border border-[#66666E]/60">
                    {principle.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#F4F4F6] group-hover:text-white transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9999A1] leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
