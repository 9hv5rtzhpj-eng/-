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
    { id: 'all', label: 'ALL SYSTEMS' },
    { id: 'ai', label: 'AI AGENTS & RAG' },
    { id: 'fullstack', label: 'REAL-TIME WORKSPACES' },
    { id: 'cloud', label: 'TELEMETRY & CLOUD' },
  ] as const;

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#37607e]/30 relative bg-[#161817]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono font-medium text-[#e9874f] tracking-widest uppercase flex items-center gap-2">
              <span>[ SECTION 02 ]</span>
              <span>FEATURED PRODUCTION SYSTEMS & PROVEN DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
              精選工程架構專案
            </h2>
            <div className="h-0.5 w-16 bg-[#e9874f]" />
            <p className="text-[#8ca8ba] text-sm sm:text-base max-w-2xl font-light">
              聚焦於解決高併發瓶頸、生產級 AI Agent 流程編排與低延遲分散式協同系統，所有指標均基於真實生產環境驗證。
            </p>
          </div>

          {/* FMI Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#232b30] border border-[#37607e]/50 rounded-sm overflow-x-auto self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#37607e] text-white font-bold border border-[#e9874f]/50'
                    : 'text-[#8ca8ba] hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-sm bg-[#232b30] border border-[#37607e]/50 hover:border-[#e9874f] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
            >
              <div className="space-y-5">
                {/* Card Header: Category & Spec Index */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#e9874f] font-bold tracking-wider uppercase">
                    [ SYSTEM // 0{idx + 1} ] · {project.categoryLabel}
                  </span>
                  <span className="text-[#8ca8ba]">PROD_{project.year}</span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e9874f] transition-colors font-sans uppercase">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8ca8ba] font-mono">
                    {project.subtitle}
                  </p>
                </div>

                {/* Impact Highlight Box (FMI industrial benchmark box) */}
                <div className="p-4 rounded-sm bg-[#161817] border-l-2 border-[#e9874f] space-y-1">
                  <div className="text-[10px] font-mono text-[#e9874f] uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#e9874f]" />
                    KEY MEASURED IMPACT (實測生產成果)
                  </div>
                  <p className="text-xs sm:text-sm text-[#f1f5f5] leading-snug font-sans">
                    {project.impact}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8ca8ba] leading-relaxed font-sans font-light">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="space-y-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-sm bg-[#161817] border border-[#37607e]/50 text-[#c1d5df]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links & FMI circular arrow button */}
              <div className="mt-8 pt-4 border-t border-[#37607e]/40 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#c1d5df] hover:text-[#e9874f] transition-colors cursor-pointer group/btn"
                >
                  <Info className="w-3.5 h-3.5 text-[#8ca8ba]" />
                  <span>VIEW SPECIFICATION</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform text-[#e9874f]">→</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-[#161817] hover:bg-[#37607e] border border-[#37607e]/50 text-[#c1d5df] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/demo inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#37607e] hover:bg-[#e9874f] text-white text-xs font-mono font-bold transition-all shadow-xs"
                      title="Live System"
                    >
                      <span>DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/demo:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hairline accent on bottom */}
              <div className="h-0.5 w-0 group-hover:w-full bg-[#e9874f] transition-all duration-500 absolute bottom-0 left-0" />
            </div>
          ))}
        </div>

        {/* Note on Real Projects placeholder */}
        <div className="p-4 rounded-sm bg-[#232b30] border border-[#37607e]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#8ca8ba]">
          <span>
            💡 所有架構規格與成果資料均於 <code>src/data/portfolioData.ts</code> 模組化定義，可無縫置換為真實專案數據。
          </span>
          <a
            href="https://github.com/sam-lin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e9874f] hover:underline font-mono inline-flex items-center gap-1 shrink-0 font-bold"
          >
            <span>VIEW ALL REPOSITORIES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
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
