import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import {
  Github,
  ArrowUpRight,
  Zap,
  Info,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'fullstack' | 'cloud'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: '全部專案 (All)' },
    { id: 'ai', label: 'AI Agent & 向量檢索' },
    { id: 'fullstack', label: '全端即時協同' },
    { id: 'cloud', label: '高吞吐可觀測性' },
  ] as const;

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#66666E]/40 relative bg-[#000000]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono font-medium text-[#9999A1] tracking-wider uppercase">
              02. Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
              精選架構專案與實戰成果
            </h2>
            <p className="text-[#9999A1] text-sm sm:text-base max-w-2xl">
              聚焦於解決高併發瓶頸、生產級 AI Agent 流程編排與低延遲分散式協同系統，所有指標均基於真實生產環境驗證。
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#000000] border border-[#66666E]/50 rounded-xl overflow-x-auto self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#F4F4F6] text-[#000000] font-semibold'
                    : 'text-[#9999A1] hover:text-[#F4F4F6] hover:bg-[#66666E]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#000000] border border-[#66666E]/60 hover:border-[#E6E6E9] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/70 hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Card Header: Category & Year */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E6E6E9] font-semibold tracking-wide">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[#66666E]">{project.year}</span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F6] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9999A1] font-sans">
                    {project.subtitle}
                  </p>
                </div>

                {/* Impact Highlight Box (Concrete metrics) */}
                <div className="p-3.5 rounded-xl bg-[#000000] border border-[#66666E]/60 space-y-1">
                  <div className="text-[11px] font-mono text-[#E6E6E9] uppercase tracking-wider font-medium flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#F4F4F6]" />
                    核心成果與實測指標
                  </div>
                  <p className="text-xs sm:text-sm text-[#F4F4F6] leading-snug">
                    {project.impact}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9999A1] leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="space-y-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#000000] border border-[#66666E]/50 text-[#E6E6E9]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links & Architecture Deep Dive */}
              <div className="mt-7 pt-4 border-t border-[#66666E]/40 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E6E6E9] hover:text-[#F4F4F6] transition-colors cursor-pointer group/btn"
                >
                  <Info className="w-3.5 h-3.5 text-[#9999A1]" />
                  <span>查看架構細節</span>
                  <span className="group-hover/btn:translate-x-0.5 transition-transform text-[#F4F4F6]">→</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E] text-[#E6E6E9] hover:text-white transition-colors"
                      title="查看 GitHub 原始碼"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] text-[#000000] font-semibold text-xs transition-colors"
                      title="打開 Live Demo"
                    >
                      <span>Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Real Projects placeholder */}
        <div className="p-4 rounded-xl bg-[#000000] border border-[#66666E]/50 flex items-center justify-between text-xs text-[#9999A1]">
          <span>
            💡 提示：以上專案資料均於 <code>src/data/portfolioData.ts</code> 中定義，可隨時替換為您的實體 GitHub 倉庫與 Demo 連結。
          </span>
          <a
            href="https://github.com/sam-lin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F4F4F6] hover:underline font-mono inline-flex items-center gap-1 shrink-0 ml-4"
          >
            <span>GitHub 全部倉庫</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Modal for detailed architecture analysis */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
