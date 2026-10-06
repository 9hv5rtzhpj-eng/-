import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, Copy, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const navLinks = [
    { href: '#about', index: '01', label: 'ABOUT', id: 'about' },
    { href: '#projects', index: '02', label: 'PROJECTS', id: 'projects' },
    { href: '#skills', index: '03', label: 'ARCHITECTURE', id: 'skills' },
    { href: '#contact', index: '04', label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#161817]/95 backdrop-blur-md border-b border-[#37607e]/30 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* FMI-style Technical Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-3.5 text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-sm bg-[#232b30] border border-[#37607e]/60 flex items-center justify-center font-mono font-bold text-sm text-[#e9874f] group-hover:border-[#e9874f] transition-colors shadow-xs">
            {PORTFOLIO_DATA.personal.avatarText}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-white uppercase font-sans">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs font-mono text-[#8ca8ba]">
                / {PORTFOLIO_DATA.personal.englishName}
              </span>
            </div>
            <span className="text-[10px] text-[#8ca8ba] font-mono tracking-wider flex items-center gap-1.5 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e9874f] animate-pulse" />
              SYSTEMS ENGINEERING
            </span>
          </div>
        </a>

        {/* FMI-style Desktop Navigation with Monospace Indexing */}
        <nav className="hidden md:flex items-center gap-1 border border-[#37607e]/30 bg-[#232b30]/50 rounded-full px-5 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 font-medium ${
                  isActive
                    ? 'text-white bg-[#37607e] font-semibold shadow-xs'
                    : 'text-[#8ca8ba] hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">[{link.index}]</span>
                <span className="tracking-wide">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions: Direct Email Copy & Inquire CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            title="點擊複製 Email"
            className="group relative inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-sm bg-[#232b30] hover:bg-[#37607e]/40 border border-[#37607e]/50 hover:border-[#e9874f] text-[#c1d5df] hover:text-white transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#e9874f]" />
                <span className="text-[#e9874f] font-sans font-medium">COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8ca8ba] group-hover:text-white transition-colors" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-sm bg-white hover:bg-[#e9874f] text-[#161817] hover:text-white transition-all shadow-xs active:scale-[0.98]"
          >
            <span className="tracking-wider uppercase">INQUIRE</span>
            <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-[#c1d5df]"
            aria-label="Copy Email"
          >
            {copied ? <Check className="w-4 h-4 text-[#e9874f]" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-[#c1d5df] hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#37607e]/40 bg-[#161817]/98 backdrop-blur-xl px-5 pt-4 pb-6 space-y-3 mt-2">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-3 rounded-sm text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-[#37607e]/40 text-white font-semibold border-l-2 border-[#e9874f]'
                    : 'text-[#8ca8ba] hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs opacity-60">[{link.index}]</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#37607e]/30 flex flex-col gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-[#232b30] border border-[#37607e]/50 text-xs font-mono text-[#c1d5df]"
            >
              {copied ? <Check className="w-4 h-4 text-[#e9874f]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'EMAIL COPIED' : PORTFOLIO_DATA.personal.email}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#e9874f] text-white font-bold text-xs tracking-wider uppercase text-center"
            >
              START INQUIRY
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
