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
    <footer className="border-t border-[#37607e]/40 bg-[#161817] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#8ca8ba]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Technical Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-bold font-sans uppercase">
            <span>{personal.name}</span>
            <span className="text-[#37607e]">/</span>
            <span className="font-mono text-[#e9874f]">{personal.englishName}</span>
          </div>
          <span className="hidden sm:inline text-[#37607e]">|</span>
          <span className="text-[#8ca8ba] font-mono">
            © {currentYear} ALL RIGHTS RESERVED. ARCHITECTURE CERTIFIED FOR HIGH-RELIABILITY ENVIRONMENTS.
          </span>
        </div>

        {/* Center / Right: Socials & Back To Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-[#8ca8ba] hover:text-white hover:border-[#e9874f] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-[#8ca8ba] hover:text-white hover:border-[#e9874f] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-[#8ca8ba] hover:text-white hover:border-[#e9874f] transition-colors"
              aria-label="X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-[#8ca8ba] hover:text-white hover:border-[#e9874f] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="h-5 w-[1px] bg-[#37607e]/40" />

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#232b30] hover:bg-[#e9874f] border border-[#37607e]/50 hover:border-[#e9874f] text-[#c1d5df] hover:text-white transition-all cursor-pointer font-mono font-semibold"
            title="回到頂部"
          >
            <span className="text-[11px]">TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
