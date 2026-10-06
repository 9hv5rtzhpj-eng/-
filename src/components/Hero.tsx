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
  ArrowUpRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schematic' | 'telemetry'>('schematic');

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
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-technical-grid aerospace-glow steel-ambient-glow overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: FMI Authority Headline & Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* FMI-style Kicker Tag */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-[#232b30]/80 border border-[#37607e]/60 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#e9874f] animate-ping" />
              <span className="font-mono text-[#c1d5df] text-[11px] uppercase tracking-wider font-semibold">
                SYSTEMS ARCHITECTURE & PRODUCTION AGENTS
              </span>
            </div>

            {/* FMI Hero Title */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono text-[#8ca8ba] tracking-widest uppercase">
                QUALITY PROVEN IN HIGH-CONCURRENCY ENVIRONMENTS
              </div>
              <div className="flex flex-wrap items-baseline gap-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans uppercase">
                  {personal.name}
                </h1>
                <span className="text-2xl sm:text-3xl text-[#8ca8ba] font-mono font-normal">
                  / {personal.englishName}
                </span>
              </div>
              {/* FMI Signature Orange Accent Rule */}
              <div className="h-0.5 w-20 bg-[#e9874f]" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#c1d5df] tracking-tight font-sans">
                {personal.headline}
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-[#f1f5f5] max-w-2xl leading-relaxed font-sans font-light">
              {personal.valueProposition}
            </p>
            <p className="text-sm text-[#8ca8ba] max-w-2xl leading-relaxed font-sans">
              {personal.shortBio}
            </p>

            {/* FMI CTA Buttons & Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-[#37607e] hover:bg-[#e9874f] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.98]"
              >
                <span>EXPLORE PROJECTS</span>
                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-[#232b30] hover:bg-white text-white hover:text-[#161817] font-semibold text-xs tracking-wider uppercase border border-[#37607e]/60 hover:border-white transition-all active:scale-[0.98]"
              >
                <span>CONTACT ME</span>
                <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-sm bg-[#232b30]/60 hover:bg-[#232b30] text-[#8ca8ba] hover:text-white text-xs font-mono border border-[#37607e]/40 hover:border-[#e9874f] transition-colors"
                title="點擊複製 Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#e9874f]" />
                    <span className="text-[#e9874f] font-sans">EMAIL COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Links */}
            <div className="pt-2 flex items-center gap-4 text-[#8ca8ba]">
              <span className="text-xs font-mono text-[#8ca8ba]/70 uppercase tracking-widest">
                VERIFIED PROFILES:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-[#232b30] hover:bg-[#37607e] border border-[#37607e]/50 text-[#c1d5df] hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-[#232b30] hover:bg-[#37607e] border border-[#37607e]/50 text-[#c1d5df] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-[#232b30] hover:bg-[#37607e] border border-[#37607e]/50 text-[#c1d5df] hover:text-white transition-colors"
                  aria-label="X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2 rounded-sm bg-[#232b30] hover:bg-[#37607e] border border-[#37607e]/50 text-[#c1d5df] hover:text-white transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FMI Industrial Telemetry & Architectural Schematic (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-sm border border-[#37607e]/60 bg-[#232b30] shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#37607e]/40 bg-[#161817]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e9874f]" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                    SYSTEMS_TELEMETRY.SPEC
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('schematic')}
                    className={`px-3 py-1 text-[11px] font-mono rounded-sm transition-colors ${
                      activeTab === 'schematic'
                        ? 'bg-[#37607e] text-white font-semibold'
                        : 'text-[#8ca8ba] hover:text-white'
                    }`}
                  >
                    SCHEMATIC
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-3 py-1 text-[11px] font-mono rounded-sm transition-colors ${
                      activeTab === 'telemetry'
                        ? 'bg-[#37607e] text-white font-semibold'
                        : 'text-[#8ca8ba] hover:text-white'
                    }`}
                  >
                    DIAGNOSTICS
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs text-[#c1d5df]">
                {activeTab === 'schematic' ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-[#8ca8ba] pb-2 border-b border-[#37607e]/30">
                      <span>CORE ARCHITECTURE MATRIX</span>
                      <span className="text-[#e9874f] font-semibold flex items-center gap-1 font-mono">
                        <Zap className="w-3.5 h-3.5" /> PROVEN_PRODUCTION
                      </span>
                    </div>

                    {/* Layer 1: Client Experience */}
                    <div className="p-3.5 rounded-sm bg-[#161817] border border-[#37607e]/40 hover:border-[#e9874f] transition-colors flex items-start gap-3">
                      <div className="p-2 rounded-sm bg-[#37607e]/30 text-[#e9874f] shrink-0 border border-[#37607e]/60">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-semibold flex items-center gap-2">
                          <span>TIER 01 / CLIENT SYSTEMS</span>
                        </div>
                        <p className="text-[11px] text-[#8ca8ba] font-sans">
                          React 19, TypeScript, Next.js, zero-latency CRDT 協同與極致響應式體驗。
                        </p>
                      </div>
                    </div>

                    {/* Layer 2: Core Gateway & Service */}
                    <div className="p-3.5 rounded-sm bg-[#161817] border border-[#37607e]/40 hover:border-[#e9874f] transition-colors flex items-start gap-3">
                      <div className="p-2 rounded-sm bg-[#37607e]/30 text-[#e9874f] shrink-0 border border-[#37607e]/60">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-semibold flex items-center gap-2">
                          <span>TIER 02 / DISTRIBUTED CORE</span>
                        </div>
                        <p className="text-[11px] text-[#8ca8ba] font-sans">
                          Go, Node.js, Kafka, ClickHouse, gRPC, 事件驅動排程與高併發串流。
                        </p>
                      </div>
                    </div>

                    {/* Layer 3: AI Agents & Vector DB */}
                    <div className="p-3.5 rounded-sm bg-[#161817] border border-[#37607e]/40 hover:border-[#e9874f] transition-colors flex items-start gap-3">
                      <div className="p-2 rounded-sm bg-[#37607e]/30 text-[#e9874f] shrink-0 border border-[#37607e]/60">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-semibold flex items-center gap-2">
                          <span>TIER 03 / AGENTIC INTELLIGENCE</span>
                        </div>
                        <p className="text-[11px] text-[#8ca8ba] font-sans">
                          Gemini API, pgvector, 自主 DAG 決策排程, 狀態快照與多模態混合檢索。
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-[#c1d5df] leading-relaxed bg-[#161817] p-4 rounded-sm border border-[#37607e]/30">
                    <p className="text-[#8ca8ba]"># FMI TECHNICAL PROFILE: SAM LIN</p>
                    <p className="text-[#e9874f] font-semibold">$ sam --inspect-readiness</p>
                    <div className="pl-3 border-l-2 border-[#e9874f] space-y-1 text-[11px]">
                      <p className="text-white">OPERATOR: 林詠晟 (Sam Lin)</p>
                      <p className="text-white">SPECIALIZATION: High-Concurrency & AI Orchestration</p>
                      <p className="text-white">BASE: Taipei, Taiwan (UTC+8) / Global Remote</p>
                      <p className="text-[#e9874f]">STATUS: 100% OPERATIONAL FOR ARCHITECTURE & LEAD ROLES</p>
                    </div>
                    <p className="text-[#e9874f] font-semibold pt-2">$ sam --verify-cluster</p>
                    <p className="text-[#8ca8ba] text-[11px]">
                      [PASS] Distributed Consensus Verified (2ms)
                      <br />
                      [PASS] RAG Hybrid Vector Recall: 94.6%
                      <br />
                      [PASS] Production Reliability: 99.95% SLA Target Met
                    </p>
                  </div>
                )}

                {/* Footer Status line */}
                <div className="mt-4 pt-3.5 border-t border-[#37607e]/40 flex items-center justify-between text-[11px] text-[#8ca8ba]">
                  <span className="flex items-center gap-1.5 text-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#e9874f]" />
                    QUALIFIED FOR EXTREME ENVIRONMENTS
                  </span>
                  <span className="text-[#8ca8ba] font-mono">SPEC_REV: 2026.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FMI Technical Specification Strip */}
        <div className="mt-16 pt-8 border-t border-[#37607e]/40 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5 border-l-2 border-[#37607e] pl-4">
              <div className="text-xs font-mono text-[#8ca8ba] uppercase tracking-wider">
                SPEC 0{idx + 1}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#c1d5df] font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
