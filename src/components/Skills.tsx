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
        return <Layout className="w-5 h-5 text-[#F4F4F6]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#E6E6E9]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#F4F4F6]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#E6E6E9]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#F4F4F6]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#66666E]/40 relative bg-[#000000]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-medium text-[#9999A1] tracking-wider uppercase">
            03. Skills & System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
            技術能力維度與架構圖景
          </h2>
          <p className="text-[#9999A1] text-sm sm:text-base max-w-2xl">
            捨棄虛飾的「熟練度百分比」，以技術實體應用、邊界約束與工程落地經驗作為劃分標準。
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#000000] border border-[#66666E]/60 p-6 sm:p-7 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-[#66666E]/40">
                  <div className="p-2.5 rounded-xl bg-[#000000] border border-[#66666E]/60">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#9999A1] font-sans mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Modern Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-[#000000] border border-[#66666E] text-[#F4F4F6] hover:border-[#E6E6E9]'
                          : 'bg-[#000000] border border-[#66666E]/50 text-[#9999A1] hover:text-[#E6E6E9] hover:border-[#66666E]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E6E6E9]" />
                      )}
                      <span className="font-medium text-[#F4F4F6]">{skill.name}</span>
                      <span className="text-[11px] text-[#9999A1] group-hover:text-[#E6E6E9] font-sans">
                        / {skill.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="pt-4 border-t border-[#66666E]/40 flex items-center justify-between text-[11px] font-mono text-[#9999A1]">
                <span>Core Competency</span>
                <span className="text-[#F4F4F6] flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E6E6E9]" />
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture Blueprint (Visualized Process) */}
        <div className="rounded-2xl bg-[#000000] border border-[#66666E]/60 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#66666E]/40 pb-5">
            <div>
              <div className="text-xs font-mono text-[#9999A1] uppercase tracking-wider">
                System Design Process
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F6] tracking-tight mt-1">
                端到端架構演進思維 (Architecture Methodology)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#E6E6E9] bg-[#000000] px-3 py-1.5 rounded-lg border border-[#66666E]">
              Reliability · Determinism · Velocity
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
                  className={`p-5 rounded-xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-[#000000] border-[#E6E6E9] shadow-md shadow-white/5'
                      : 'bg-[#000000] border-[#66666E]/50 hover:border-[#9999A1]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F4F4F6]">
                      STEP {item.step}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#F4F4F6]" />
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-[#F4F4F6]">{item.phase}</h4>
                  <p className="text-xs text-[#9999A1] leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Architecture Guarantee Banner */}
          <div className="p-4 rounded-xl bg-[#000000] border border-[#66666E]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#E6E6E9]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F4F4F6] shrink-0" />
              <span>
                所有架構設計均遵循 <strong className="text-white">12-Factor App</strong>、<strong className="text-white">最小權限原則</strong> 與 <strong className="text-white">Zero-Trust 安全模型</strong>。
              </span>
            </div>
            <a
              href="#contact"
              className="text-[#F4F4F6] font-mono hover:underline inline-flex items-center gap-1 shrink-0 font-medium"
            >
              <span>探討架構需求</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
