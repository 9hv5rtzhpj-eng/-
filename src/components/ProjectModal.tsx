import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm transition-all"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#000000] border border-[#66666E] shadow-2xl z-10 text-[#F4F4F6] p-6 sm:p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#66666E]/40 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#66666E]/20 text-[#F4F4F6] border border-[#66666E]/50">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-[#9999A1]">{project.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#F4F4F6] tracking-tight">{project.title}</h3>
            <p className="text-sm text-[#9999A1]">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E] text-[#9999A1] hover:text-[#F4F4F6] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Impact Quote Banner */}
        <div className="p-4 rounded-xl bg-[#000000] border border-[#66666E] space-y-1">
          <div className="text-[11px] font-mono text-[#E6E6E9] uppercase tracking-wider font-semibold">
            核心成果與指標突破 (Measured Impact)
          </div>
          <p className="text-sm text-[#F4F4F6] font-medium">{project.impact}</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#000000] border border-[#66666E]/60 text-center">
              <div className="text-lg font-bold font-mono text-[#F4F4F6]">{m.value}</div>
              <div className="text-[11px] text-[#9999A1] mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[#9999A1] uppercase tracking-wider">
            專案背景與痛點 (Problem & Context)
          </h4>
          <p className="text-sm text-[#E6E6E9] leading-relaxed">{project.description}</p>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[#9999A1] uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#F4F4F6]" />
            核心架構與技術實作細節 (Architecture Deep-Dive)
          </h4>
          <div className="space-y-2.5">
            {project.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#000000] border border-[#66666E]/50 text-xs sm:text-sm text-[#E6E6E9]"
              >
                <CheckCircle className="w-4 h-4 text-[#F4F4F6] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[#9999A1] uppercase tracking-wider">
            使用技術棧 (Tech Stack)
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#000000] border border-[#66666E]/60 text-[#E6E6E9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#66666E]/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] text-[#000000] font-semibold text-xs transition-colors"
              >
                <span>Live Demo 實機展示</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E] text-[#E6E6E9] text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs text-[#9999A1] hover:text-[#F4F4F6] px-3 py-2 rounded-lg hover:bg-[#66666E]/20"
          >
            關閉檢視
          </button>
        </div>
      </div>
    </div>
  );
};
