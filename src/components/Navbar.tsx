import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, Copy, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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
    { href: '#about', label: '關於經歷', id: 'about' },
    { href: '#projects', label: '精選專案', id: 'projects' },
    { href: '#skills', label: '技術架構', id: 'skills' },
    { href: '#contact', label: '聯絡洽談', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-[#66666E]/40 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-[#F4F4F6] hover:text-white transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-[#000000] border border-[#66666E] flex items-center justify-center font-mono font-bold text-sm text-[#F4F4F6] group-hover:border-[#E6E6E9] transition-colors">
            {PORTFOLIO_DATA.personal.avatarText}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight flex items-center gap-2 text-[#F4F4F6]">
              {PORTFOLIO_DATA.personal.name}
              <span className="text-xs font-mono text-[#9999A1]">({PORTFOLIO_DATA.personal.englishName})</span>
            </span>
            <span className="text-[11px] text-[#9999A1] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6E6E9] animate-pulse" />
              Available for projects
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#000000]/80 border border-[#66666E]/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                  isActive
                    ? 'text-[#000000] bg-[#F4F4F6] font-semibold shadow-xs'
                    : 'text-[#9999A1] hover:text-[#F4F4F6] hover:bg-[#66666E]/20'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Quick Copy Email & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            title="點擊複製 Email"
            className="group relative inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-lg bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#9999A1] text-[#E6E6E9] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#F4F4F6]" />
                <span className="text-[#F4F4F6] font-sans">已複製信箱！</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#9999A1] group-hover:text-[#F4F4F6] transition-colors" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] text-[#000000] font-semibold transition-all shadow-sm active:scale-[0.98]"
          >
            <span>預約諮詢</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-lg bg-[#000000] border border-[#66666E]/60 text-[#E6E6E9]"
            aria-label="Copy Email"
          >
            {copied ? <Check className="w-4 h-4 text-[#F4F4F6]" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#000000] border border-[#66666E]/60 text-[#E6E6E9] hover:text-[#F4F4F6]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#66666E]/40 bg-[#000000]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 transition-all">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-[#F4F4F6] text-[#000000] font-semibold'
                    : 'text-[#9999A1] hover:text-[#F4F4F6] hover:bg-[#66666E]/20'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#66666E]/40 flex flex-col gap-2">
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#000000] border border-[#66666E]/60 text-xs font-mono text-[#E6E6E9]"
            >
              {copied ? <Check className="w-4 h-4 text-[#F4F4F6]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '已複製信箱！' : PORTFOLIO_DATA.personal.email}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#F4F4F6] text-[#000000] font-semibold text-xs text-center"
            >
              聯絡洽談
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
