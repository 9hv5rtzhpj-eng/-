import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Clock,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: '全端系統架構或開發',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('請填寫姓名、電子郵件與需求內容。');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormState({
      name: '',
      email: '',
      topic: '全端系統架構或開發',
      message: '',
    });
    setIsSuccess(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#37607e]/30 relative bg-[#161817]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-medium text-[#e9874f] tracking-widest uppercase flex items-center gap-2">
            <span>[ SECTION 04 ]</span>
            <span>DIRECT INQUIRIES & TECHNICAL COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            啟動技術對話 · 聯絡洽談
          </h2>
          <div className="h-0.5 w-16 bg-[#e9874f]" />
          <p className="text-[#8ca8ba] text-sm sm:text-base max-w-2xl font-light">
            無論是大型全端系統重構、生產級 AI Agent 落地、高併發後端架構諮詢，或全職技術團隊招募，歡迎隨時來信。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info, Direct Email Copy & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Email Copy Card */}
            <div className="p-6 sm:p-7 rounded-sm bg-[#232b30] border border-[#37607e]/50 space-y-5">
              <span className="text-xs font-mono text-[#8ca8ba] uppercase tracking-wider block">
                DIRECT EMAIL SPECIFICATION
              </span>
              <div className="flex items-center justify-between gap-3 p-4 rounded-sm bg-[#161817] border border-[#37607e]/60">
                <span className="text-sm font-mono text-white select-all">
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#37607e] hover:bg-[#e9874f] text-white font-mono text-xs font-semibold transition-colors cursor-pointer"
                  title="複製 Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8ca8ba] font-mono">
                <span className="flex items-center gap-1.5 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#e9874f]" />
                  RESPONSE TIME: &lt; 24 HOURS
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8ca8ba]" />
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Social Connect Networks */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#8ca8ba] uppercase tracking-wider block">
                VERIFIED PROFILES & NETWORKS
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#232b30] hover:bg-[#161817] border border-[#37607e]/50 hover:border-[#e9874f] flex items-center justify-between text-xs text-[#c1d5df] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#8ca8ba] group-hover:text-white transition-colors" />
                    <span className="font-semibold uppercase tracking-wider font-mono">GitHub</span>
                  </div>
                  <div className="size-6 rounded-full border border-white/20 flex items-center justify-center text-[#8ca8ba] group-hover:border-[#e9874f] group-hover:bg-[#e9874f] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#232b30] hover:bg-[#161817] border border-[#37607e]/50 hover:border-[#e9874f] flex items-center justify-between text-xs text-[#c1d5df] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#8ca8ba] group-hover:text-white transition-colors" />
                    <span className="font-semibold uppercase tracking-wider font-mono">LinkedIn</span>
                  </div>
                  <div className="size-6 rounded-full border border-white/20 flex items-center justify-center text-[#8ca8ba] group-hover:border-[#e9874f] group-hover:bg-[#e9874f] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href={personal.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#232b30] hover:bg-[#161817] border border-[#37607e]/50 hover:border-[#e9874f] flex items-center justify-between text-xs text-[#c1d5df] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Twitter className="w-4 h-4 text-[#8ca8ba] group-hover:text-white transition-colors" />
                    <span className="font-semibold uppercase tracking-wider font-mono">X (Twitter)</span>
                  </div>
                  <div className="size-6 rounded-full border border-white/20 flex items-center justify-center text-[#8ca8ba] group-hover:border-[#e9874f] group-hover:bg-[#e9874f] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-4 rounded-sm bg-[#232b30] hover:bg-[#161817] border border-[#37607e]/50 hover:border-[#e9874f] flex items-center justify-between text-xs text-[#c1d5df] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#8ca8ba] group-hover:text-white transition-colors" />
                    <span className="font-semibold uppercase tracking-wider font-mono">Email</span>
                  </div>
                  <div className="size-6 rounded-full border border-white/20 flex items-center justify-center text-[#8ca8ba] group-hover:border-[#e9874f] group-hover:bg-[#e9874f] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Technical Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-[#232b30] border border-[#37607e]/50 p-6 sm:p-8">
              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#37607e]/30 border border-[#e9874f] text-[#e9874f] mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white font-sans uppercase">
                      INQUIRY RECORDED // 需求已登記
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8ca8ba] max-w-md mx-auto font-light">
                      感謝您的來信，{formState.name}。我已記錄您的需求，您亦可點擊下方直接透過本地郵件客戶端送出確認信件。
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(
                        `[FMI-INQUIRY] ${formState.topic} - ${formState.name}`
                      )}&body=${encodeURIComponent(formState.message)}`}
                      className="px-5 py-2.5 rounded-sm bg-[#e9874f] hover:bg-[#e35b0e] text-white font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>OPEN EMAIL CLIENT</span>
                    </a>
                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 rounded-sm bg-[#161817] border border-[#37607e]/60 text-[#c1d5df] hover:text-white text-xs font-mono uppercase cursor-pointer"
                    >
                      RESET FORM
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white font-sans uppercase">
                      TECHNICAL CONSULTATION & INQUIRY
                    </h3>
                    <p className="text-xs text-[#8ca8ba] font-light">
                      填寫以下規格表單，我將於 24 小時內親自透過 Email 與您聯繫。
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-sm bg-red-950/40 border border-red-500/50 text-xs text-red-200 font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#c1d5df] uppercase">
                        NAME / TITLE <span className="text-[#e9874f]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="例如：Alex Chen"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#161817] border border-[#37607e]/60 text-white text-sm focus:outline-none focus:border-[#e9874f] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#c1d5df] uppercase">
                        BUSINESS EMAIL <span className="text-[#e9874f]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#161817] border border-[#37607e]/60 text-white text-sm focus:outline-none focus:border-[#e9874f] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#c1d5df] uppercase">
                      PRIMARY COLLABORATION SCOPE
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#161817] border border-[#37607e]/60 text-white text-sm focus:outline-none focus:border-[#e9874f] transition-colors"
                    >
                      <option value="全端系統架構或開發">全端系統架構或開發 (Full-Stack Engineering)</option>
                      <option value="AI Agent 系統與工作流整合">AI Agent 系統與工作流整合 (Agentic Systems)</option>
                      <option value="分散式後端與高併發調優">分散式後端與高併發調優 (Distributed Backend)</option>
                      <option value="團隊全職職缺邀約">全職工程主管 / 核心工程師招募 (Full-Time Role)</option>
                      <option value="技術顧問與其他合作">技術顧問與其他合作 (Advisory & Consulting)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#c1d5df] uppercase">
                      MESSAGE & PROJECT CONTEXT <span className="text-[#e9874f]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="請簡述您的專案背景、預期目標或時程規劃..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#161817] border border-[#37607e]/60 text-white text-sm focus:outline-none focus:border-[#e9874f] transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-sm bg-[#37607e] hover:bg-[#e9874f] disabled:opacity-50 text-white font-bold text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
