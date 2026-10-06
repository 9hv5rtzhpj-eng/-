import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Server,
  Layers,
  Cpu,
  Check,
  Copy,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'terminal'>('architecture');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern ambient-glow overflow-hidden"
    >
      {/* Background subtle luminous glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#E6E6E9]/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Positioning & Call to Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#000000] border border-[#66666E]/60 text-xs text-[#E6E6E9]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6E6E9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4F4F6]"></span>
              </span>
              <span className="font-mono text-[#E6E6E9] text-[11px] tracking-wide font-medium">
                {personal.status}
              </span>
            </div>

            {/* Main Headline & Identity: 林詠晟 / Sam */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F4F6] font-sans">
                  {personal.name}
                </h1>
                <span className="text-xl sm:text-2xl text-[#9999A1] font-mono font-normal">
                  / {personal.englishName}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#E6E6E9] tracking-tight font-sans">
                {personal.headline}
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-[#E6E6E9] max-w-2xl leading-relaxed">
              {personal.valueProposition}
            </p>
            <p className="text-sm text-[#9999A1] max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] text-[#000000] font-semibold text-sm transition-all shadow-md active:scale-[0.98]"
              >
                <span>查看精選專案</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 text-[#F4F4F6] font-medium text-sm border border-[#66666E] hover:border-[#E6E6E9] transition-all active:scale-[0.98]"
              >
                <span>聯絡我</span>
                <Mail className="w-4 h-4 text-[#9999A1]" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 text-[#9999A1] hover:text-[#F4F4F6] text-xs font-mono border border-[#66666E]/60 hover:border-[#9999A1] transition-colors"
                title="點擊複製 Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#F4F4F6]" />
                    <span className="text-[#F4F4F6]">已複製信箱！</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-4 text-[#9999A1]">
              <span className="text-xs font-mono text-[#66666E] uppercase tracking-wider">Socials:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] text-[#E6E6E9] hover:text-[#F4F4F6] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] text-[#E6E6E9] hover:text-[#F4F4F6] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] text-[#E6E6E9] hover:text-[#F4F4F6] transition-colors"
                  aria-label="X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] text-[#E6E6E9] hover:text-[#F4F4F6] transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Preview & Metric Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-[#66666E]/50 bg-[#000000] shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#66666E]/40 bg-[#000000]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66666E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9999A1]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E6E6E9]" />
                  <span className="ml-2 font-mono text-xs text-[#9999A1]">system-stack.ts</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-[#F4F4F6] text-[#000000] font-semibold'
                        : 'text-[#9999A1] hover:text-[#F4F4F6]'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-[#F4F4F6] text-[#000000] font-semibold'
                        : 'text-[#9999A1] hover:text-[#F4F4F6]'
                    }`}
                  >
                    Console
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs text-[#E6E6E9]">
                {activeTab === 'architecture' ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-[#9999A1] pb-2 border-b border-[#66666E]/30">
                      <span>CORE STACK TOPOLOGY</span>
                      <span className="text-[#F4F4F6] font-semibold flex items-center gap-1">
                        <Zap className="w-3 h-3 text-[#E6E6E9]" /> Production-Ready
                      </span>
                    </div>

                    {/* Layer 1: Client Experience */}
                    <div className="p-3 rounded-lg bg-[#000000] border border-[#66666E]/50 hover:border-[#9999A1] transition-colors flex items-start gap-3">
                      <div className="p-1.5 rounded bg-[#66666E]/20 text-[#F4F4F6] shrink-0 border border-[#66666E]/40">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[#F4F4F6] font-semibold flex items-center gap-2">
                          <span>Client Tier</span>
                          <span className="text-[10px] text-[#9999A1]">React 19 · Next.js · Tailwind</span>
                        </div>
                        <p className="text-[11px] text-[#9999A1] font-sans">
                          極致響應式體驗、樂觀更新（Optimistic UI）與無衝突多人即時協作。
                        </p>
                      </div>
                    </div>

                    {/* Layer 2: Core Gateway & Service */}
                    <div className="p-3 rounded-lg bg-[#000000] border border-[#66666E]/50 hover:border-[#9999A1] transition-colors flex items-start gap-3">
                      <div className="p-1.5 rounded bg-[#66666E]/20 text-[#F4F4F6] shrink-0 border border-[#66666E]/40">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[#F4F4F6] font-semibold flex items-center gap-2">
                          <span>Backend Engine</span>
                          <span className="text-[10px] text-[#9999A1]">Go · Node.js · gRPC · Kafka</span>
                        </div>
                        <p className="text-[11px] text-[#9999A1] font-sans">
                          事件驅動非同步任務佇列、低延遲分散式快取與多維度指標追蹤。
                        </p>
                      </div>
                    </div>

                    {/* Layer 3: AI Agents & Vector DB */}
                    <div className="p-3 rounded-lg bg-[#000000] border border-[#66666E]/50 hover:border-[#9999A1] transition-colors flex items-start gap-3">
                      <div className="p-1.5 rounded bg-[#66666E]/20 text-[#F4F4F6] shrink-0 border border-[#66666E]/40">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[#F4F4F6] font-semibold flex items-center gap-2">
                          <span>AI Agent Layer</span>
                          <span className="text-[10px] text-[#9999A1]">Gemini · pgvector · RAG</span>
                        </div>
                        <p className="text-[11px] text-[#9999A1] font-sans">
                          結構化輸出約束、多步驟自主決策排程與高精準度混合向量檢索。
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-[#E6E6E9] leading-relaxed">
                    <p className="text-[#66666E]"># Sam Lin Engineering System Terminal</p>
                    <p className="text-[#F4F4F6]">$ sam --status</p>
                    <div className="pl-3 border-l border-[#66666E] space-y-1 text-[11px]">
                      <p className="text-[#E6E6E9]">Name: 林詠晟 (Sam)</p>
                      <p className="text-[#E6E6E9]">Role: Full-Stack Developer & AI Systems Engineer</p>
                      <p className="text-[#E6E6E9]">Location: Taipei (UTC+8) | Remote Available</p>
                      <p className="text-[#E6E6E9]">Primary Languages: TypeScript, Go, Python, SQL</p>
                      <p className="text-[#F4F4F6] font-semibold">Current Focus: Multi-Agent Workflows & Hybrid RAG</p>
                    </div>
                    <p className="text-[#F4F4F6] pt-2">$ sam --ping-infra</p>
                    <p className="text-[#9999A1] text-[11px]">
                      [OK] PostgreSQL HNSW cluster active (12ms)
                      <br />
                      [OK] Redis cluster quorum reached (2ms)
                      <br />
                      [OK] SLA target: 99.95% verified
                    </p>
                  </div>
                )}

                {/* Footer Status line */}
                <div className="mt-4 pt-3 border-t border-[#66666E]/30 flex items-center justify-between text-[11px] text-[#9999A1]">
                  <span className="flex items-center gap-1.5 text-[#E6E6E9]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F4F4F6]" />
                    Production Verified
                  </span>
                  <span className="text-[#66666E]">TypeScript 5.8 · Node 22</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Engineering Stats Strip */}
        <div className="mt-16 pt-8 border-t border-[#66666E]/40 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F4F4F6] font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#9999A1] font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
