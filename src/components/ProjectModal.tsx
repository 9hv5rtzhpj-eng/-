import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle, Cpu, ShieldCheck } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm bg-[#161817] border border-[#37607e] shadow-2xl z-10 text-white p-6 sm:p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#37607e]/40 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-sm bg-[#37607e]/40 text-[#e9874f] border border-[#37607e]/70 font-semibold">
                [ SPEC: {project.categoryLabel.toUpperCase()} ]
              </span>
              <span className="text-xs font-mono text-[#8ca8ba]">RELEASE {project.year}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans uppercase">
              {project.title}
            </h3>
            <p className="text-sm text-[#8ca8ba]">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-[#232b30] hover:bg-[#e9874f] hover:text-white border border-[#37607e]/60 text-[#8ca8ba] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Impact Quote Banner */}
        <div className="p-4.5 rounded-sm bg-[#232b30] border-l-4 border-[#e9874f] space-y-1">
          <div className="text-[11px] font-mono text-[#e9874f] uppercase tracking-widest font-bold">
            MEASURED PRODUCTION BENCHMARKS (量化指標突破)
          </div>
          <p className="text-sm text-[#f1f5f5] font-medium leading-relaxed font-sans">
            {project.impact}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-center">
              <div className="text-lg sm:text-xl font-bold font-mono text-white">{m.value}</div>
              <div className="text-[11px] text-[#8ca8ba] font-mono mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[#8ca8ba] uppercase tracking-widest">
            PROBLEM SPACE & ARCHITECTURAL SCOPE
          </h4>
          <p className="text-sm text-[#c1d5df] leading-relaxed font-sans font-light">
            {project.description}
          </p>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[#8ca8ba] uppercase tracking-widest flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#e9874f]" />
            DEEP ARCHITECTURE & TECHNICAL IMPLEMENTATION (架構深究)
          </h4>
          <div className="space-y-2.5">
            {project.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-sm bg-[#232b30] border border-[#37607e]/40 text-xs sm:text-sm text-[#c1d5df]"
              >
                <CheckCircle className="w-4 h-4 text-[#e9874f] shrink-0 mt-0.5" />
                <span className="font-sans">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[#8ca8ba] uppercase tracking-widest">
            TECHNOLOGY SPECIFICATIONS
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-sm bg-[#232b30] border border-[#37607e]/60 text-[#c1d5df]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#37607e]/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#e9874f] hover:bg-[#e35b0e] text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#232b30] hover:bg-white text-white hover:text-[#161817] border border-[#37607e]/60 text-xs font-medium tracking-wider uppercase transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs text-[#8ca8ba] hover:text-white px-3 py-2 rounded-sm hover:bg-[#232b30] transition-colors"
          >
            CLOSE SPECIFICATION
          </button>
        </div>
      </div>
    </div>
  );
};
