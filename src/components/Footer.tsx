import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#66666E]/40 bg-[#000000] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#9999A1]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#E6E6E9] font-medium">
            <span>{personal.name}</span>
            <span className="text-[#66666E]">/</span>
            <span className="font-mono text-[#F4F4F6]">{personal.englishName}</span>
          </div>
          <span className="hidden sm:inline text-[#66666E]">|</span>
          <span className="text-[#9999A1]">
            © {currentYear} All rights reserved. Built with React & Tailwind CSS.
          </span>
        </div>

        {/* Center / Right: Socials & Back To Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:text-[#F4F4F6] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:text-[#F4F4F6] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:text-[#F4F4F6] transition-colors"
              aria-label="X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-1.5 rounded hover:text-[#F4F4F6] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#66666E]/40" />

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E] hover:border-[#E6E6E9] text-[#E6E6E9] hover:text-[#F4F4F6] transition-colors cursor-pointer"
            title="回到頂部"
          >
            <span className="text-[11px] font-mono">TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
