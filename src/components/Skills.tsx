import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Layout,
  Server,
  Cpu,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories, architectureWorkflow } = PORTFOLIO_DATA;
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#e9874f]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#8ca8ba]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#e9874f]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#8ca8ba]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#e9874f]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#37607e]/30 relative bg-[#161817]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-medium text-[#e9874f] tracking-widest uppercase flex items-center gap-2">
            <span>[ SECTION 03 ]</span>
            <span>CORE DISCIPLINES & SYSTEM METHODOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            技術核心維度與架構規範
          </h2>
          <div className="h-0.5 w-16 bg-[#e9874f]" />
          <p className="text-[#8ca8ba] text-sm sm:text-base max-w-2xl font-light">
            遵循嚴格工程規約，捨棄無效的百分比打分，依領域邊界、協定標準與生產落地驗證建立技術矩陣。
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.id}
              className="rounded-sm bg-[#232b30] border border-[#37607e]/50 hover:border-[#37607e] p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#37607e]/40">
                  <div className="p-2.5 rounded-sm bg-[#161817] border border-[#37607e]/60">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#e9874f] uppercase tracking-wider">
                      DISCIPLINE 0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight font-sans uppercase">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#8ca8ba] font-sans mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Modern Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-[#161817] border border-[#37607e] text-white hover:border-[#e9874f]'
                          : 'bg-[#161817]/70 border border-[#37607e]/40 text-[#8ca8ba] hover:text-[#c1d5df]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e9874f]" />
                      )}
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-[11px] text-[#8ca8ba] font-sans">
                        / {skill.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="pt-4 border-t border-[#37607e]/30 flex items-center justify-between text-[11px] font-mono text-[#8ca8ba]">
                <span>BENCHMARK: 100% PRODUCTION READY</span>
                <span className="text-white flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e9874f]" />
                  QUALIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FMI-style Methodology (Sequential Process) */}
        <div className="rounded-sm bg-[#232b30] border border-[#37607e]/50 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#37607e]/40 pb-5">
            <div>
              <div className="text-xs font-mono text-[#e9874f] uppercase tracking-widest font-bold">
                SYSTEMS LIFECYCLE & EXECUTION FLOW
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 font-sans uppercase">
                端到端高可用架構方法論 (Execution Methodology)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#c1d5df] bg-[#161817] px-3.5 py-2 rounded-sm border border-[#37607e]/60">
              RELIABILITY · FAULT TOLERANCE · SCALE
            </span>
          </div>

          {/* Interactive Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architectureWorkflow.map((item, idx) => {
              const isSelected = selectedWorkflowStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedWorkflowStep(idx)}
                  className={`p-5 rounded-sm border transition-all cursor-pointer space-y-2 relative ${
                    isSelected
                      ? 'bg-[#161817] border-[#e9874f] shadow-lg'
                      : 'bg-[#161817]/60 border-[#37607e]/40 hover:border-[#8ca8ba]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#e9874f]">
                      PHASE 0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#e9874f]" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white font-sans">{item.phase}</h4>
                  <p className="text-xs text-[#8ca8ba] leading-relaxed font-sans font-light">
                    {item.detail}
                  </p>
                  {isSelected && (
                    <div className="h-0.5 w-full bg-[#e9874f] absolute bottom-0 left-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Quality Guarantee Banner */}
          <div className="p-4 rounded-sm bg-[#161817] border border-[#37607e]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#c1d5df]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#e9874f] shrink-0" />
              <span>
                系統均導入 <strong>12-Factor App</strong>、<strong>最小授權模型</strong> 與 <strong>Zero-Trust 邊界防禦</strong>。
              </span>
            </div>
            <a
              href="#contact"
              className="text-[#e9874f] font-mono hover:underline inline-flex items-center gap-1 shrink-0 font-bold"
            >
              <span>DISCUSS ARCHITECTURE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
