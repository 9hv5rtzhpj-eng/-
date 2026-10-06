import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  // FMI-style key capabilities breakdown
  const capabilities = [
    {
      title: '高併發分散式後端與微服務',
      sub: 'Distributed Backends & High Concurrency (Go, Kafka, ClickHouse)',
      metric: '50K+ Events/sec',
    },
    {
      title: '自主 AI Agent 與非同步工作流編排',
      sub: 'Agentic DAG Scheduling & Deterministic LLM Runtimes',
      metric: '99.2% Auto-Recovery',
    },
    {
      title: '即時多人協同與現代客戶端系統',
      sub: 'CRDT Zero-Conflict Collaboration & Next-Gen Web Performance',
      metric: '< 45ms P99 Sync',
    },
    {
      title: '混合向量檢索與企業級知識庫（RAG）',
      sub: 'Hybrid Dense/Sparse Vector Search & Grounding Pipeline',
      metric: '1.8% Hallucination',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#37607e]/30 relative bg-[#161817]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-medium text-[#e9874f] tracking-widest uppercase flex items-center gap-2">
            <span>[ SECTION 01 ]</span>
            <span>ENGINEERING PHILOSOPHY & OPERATIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            關於我：以確定性架構應對極限場景
          </h2>
          <div className="h-0.5 w-16 bg-[#e9874f]" />
          <p className="text-[#8ca8ba] text-sm sm:text-base max-w-3xl font-light">
            正如航太複合材料經受超音速熱障考驗，優秀的系統架構必須在流量洪峰與非確定性 AI 環境中展現強悍韌性。
          </p>
        </div>

        {/* Narrative & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#f1f5f5] leading-relaxed text-sm sm:text-base font-light">
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#f1f5f5]">
                {para}
              </p>
            ))}

            <div className="pt-4 p-6 rounded-sm bg-[#232b30] border border-[#37607e]/60 space-y-4">
              <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e9874f]" />
                CURRENT TECHNICAL FOCUS & DEPLOYMENT BENCHMARKS
              </div>
              <ul className="text-xs sm:text-sm text-[#8ca8ba] space-y-2.5 list-none font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e9874f] font-mono font-bold">▶</span>
                  <span><strong className="text-white">AI Agent 容錯與狀態持久化：</strong>以 DAG 拓撲圖為基礎的非同步任務恢復與 Token 預算控制。</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e9874f] font-mono font-bold">▶</span>
                  <span><strong className="text-white">分散式即時系統：</strong>利用 Go、ClickHouse 與 WebSockets 建置次秒級遙測與高併發處理管線。</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#e9874f] font-mono font-bold">▶</span>
                  <span><strong className="text-white">端到端型別安全：</strong>跨前後端 TypeScript 邊界共享與 PostgreSQL 嚴格架構演進。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-sm border border-[#37607e]/60 bg-[#232b30] p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#37607e]/40 pb-4">
                <span className="text-xs font-mono text-[#8ca8ba] uppercase tracking-wider">ENGINEER SPECIFICATION</span>
                <span className="text-xs font-mono text-[#e9874f] flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#e9874f] animate-pulse" />
                  OPERATIONAL
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-[#8ca8ba] uppercase text-[10px] tracking-wider">PRIMARY DISCIPLINE</div>
                  <div className="text-white text-sm font-sans font-semibold mt-1">
                    {personal.headline}
                  </div>
                </div>

                <div>
                  <div className="text-[#8ca8ba] uppercase text-[10px] tracking-wider">LOCATION & TIMEZONE</div>
                  <div className="text-[#c1d5df] text-sm font-sans mt-1">
                    {personal.location}
                  </div>
                </div>

                <div>
                  <div className="text-[#8ca8ba] uppercase text-[10px] tracking-wider">ENGINEERING MANDATE</div>
                  <div className="text-[#f1f5f5] text-xs font-sans mt-1 leading-relaxed">
                    「好的架構讓複雜的問題變簡單，而非把簡單的問題變複雜。追求極致可靠與可觀測性。」
                  </div>
                </div>

                <div>
                  <div className="text-[#8ca8ba] uppercase text-[10px] tracking-wider">COLLABORATION SCOPE</div>
                  <div className="text-[#c1d5df] text-xs font-sans mt-1">
                    全端技術主導 / 分散式系統架構顧問 / 跨國團隊關鍵戰力
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FMI-style Signature Interactive Capability Rows */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#37607e]/40 pb-3">
            <span className="text-xs font-mono text-[#8ca8ba] uppercase tracking-widest">
              PROVEN TECHNICAL DISCIPLINES (點擊探索)
            </span>
            <span className="text-xs font-mono text-[#e9874f]">FMI-SPEC // ARCHITECTURE</span>
          </div>

          <div className="divide-y divide-[#37607e]/30 border-t border-[#37607e]/30">
            {capabilities.map((cap, idx) => (
              <a
                key={idx}
                href="#projects"
                className="group/row relative flex items-center justify-between gap-5 py-5 transition-all duration-300 hover:bg-[#232b30]/30 px-3 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-[#e9874f] font-bold">0{idx + 1}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover/row:text-[#e9874f] transition-colors font-sans">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#8ca8ba] font-mono mt-0.5">{cap.sub}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-block font-mono text-xs text-[#c1d5df] bg-[#232b30] px-2.5 py-1 rounded-sm border border-[#37607e]/50">
                    {cap.metric}
                  </span>
                  <div className="size-8 shrink-0 flex items-center justify-center rounded-full border border-white/40 text-white group-hover/row:border-[#e9874f] group-hover/row:bg-[#e9874f] group-hover/row:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* FMI Expanding orange bottom border on hover */}
                <span className="pointer-events-none absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-[#e9874f] transition-transform duration-500 ease-out group-hover/row:scale-x-100" />
              </a>
            ))}
          </div>
        </div>

        {/* 3 Core Engineering Principles (FMI-style Architectural Pillars) */}
        <div className="space-y-6 pt-6">
          <div className="text-xs font-mono text-[#8ca8ba] tracking-widest uppercase">
            ARCHITECTURAL PILLARS · 核心設計守則
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.principles.map((principle, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-sm bg-[#232b30] hover:bg-[#232b30]/90 border border-[#37607e]/50 hover:border-[#e9874f] transition-all space-y-3.5 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#e9874f] font-bold">
                    PILLAR // 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-[#c1d5df] px-2 py-0.5 rounded-sm bg-[#161817] border border-[#37607e]/60">
                    {principle.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#e9874f] transition-colors font-sans">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8ca8ba] leading-relaxed font-sans font-light">
                  {principle.description}
                </p>
                <div className="h-0.5 w-10 bg-[#37607e] group-hover:w-full group-hover:bg-[#e9874f] transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
