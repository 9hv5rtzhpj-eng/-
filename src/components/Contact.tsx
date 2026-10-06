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
      setErrorMessage('請填寫姓名、電子郵件與訊息內容。');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Form submitted successfully:', formState);
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#66666E]/40 relative bg-[#000000]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-medium text-[#9999A1] tracking-wider uppercase">
            04. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
            啟動技術對話 · 聯絡洽談
          </h2>
          <p className="text-[#9999A1] text-sm sm:text-base max-w-2xl">
            無論是大型全端系統重構、生產級 AI Agent 落地、高併發後端架構諮詢，或全職技術團隊招募，歡迎隨時來信。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info, Direct Email Copy & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-2xl bg-[#000000] border border-[#66666E]/60 space-y-4">
              <span className="text-xs font-mono text-[#9999A1] uppercase tracking-wider">
                Direct Email (點擊一鍵複製)
              </span>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#000000] border border-[#66666E]">
                <span className="text-sm font-mono text-[#F4F4F6] select-all">
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] text-[#000000] font-semibold text-xs font-mono transition-colors cursor-pointer"
                  title="複製 Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>已複製！</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>複製</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#9999A1] font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E6E6E9]" />
                  回覆時間：24 小時內
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9999A1]" />
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Social Connect Networks */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#9999A1] uppercase tracking-wider block">
                社群與程式碼庫 (Online Networks)
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] flex items-center justify-between text-xs text-[#E6E6E9] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#9999A1] group-hover:text-white transition-colors" />
                    <span className="font-medium">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66666E] group-hover:text-[#F4F4F6] transition-colors" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] flex items-center justify-between text-xs text-[#E6E6E9] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#9999A1] group-hover:text-white transition-colors" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66666E] group-hover:text-[#F4F4F6] transition-colors" />
                </a>

                <a
                  href={personal.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] flex items-center justify-between text-xs text-[#E6E6E9] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Twitter className="w-4 h-4 text-[#9999A1] group-hover:text-white transition-colors" />
                    <span className="font-medium">X (Twitter)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66666E] group-hover:text-[#F4F4F6] transition-colors" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-3.5 rounded-xl bg-[#000000] hover:bg-[#66666E]/20 border border-[#66666E]/60 hover:border-[#E6E6E9] flex items-center justify-between text-xs text-[#E6E6E9] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#9999A1] group-hover:text-white transition-colors" />
                    <span className="font-medium">Direct Mail</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66666E] group-hover:text-[#F4F4F6] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#000000] border border-[#66666E]/60 p-6 sm:p-8">
              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6E6E9]/15 border border-[#66666E] text-[#F4F4F6] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#F4F4F6]">訊息已就緒！</h3>
                    <p className="text-xs sm:text-sm text-[#9999A1] max-w-md mx-auto">
                      感謝您的來信，{formState.name}。我已記錄您的需求，您也可以點擊下方以本地郵件用戶端直接傳送確認信。
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(
                        `[技術洽談] ${formState.topic} - ${formState.name}`
                      )}&body=${encodeURIComponent(formState.message)}`}
                      className="px-4 py-2 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] text-[#000000] font-semibold text-xs inline-flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>以郵件客戶端送出</span>
                    </a>
                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2 rounded-lg bg-[#000000] border border-[#66666E] text-[#E6E6E9] hover:text-[#F4F4F6] hover:border-[#E6E6E9] text-xs cursor-pointer"
                    >
                      撰寫另一則訊息
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#F4F4F6]">寄送合作或技術諮詢</h3>
                    <p className="text-xs text-[#9999A1]">
                      填寫以下表單，我將以最快速度透過 Email 與您聯繫。
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/40 text-xs text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#E6E6E9]">
                        您的姓名 / 稱謂 <span className="text-[#F4F4F6]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="例如：Alex Chen"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#66666E] text-[#F4F4F6] text-sm focus:outline-none focus:border-[#E6E6E9] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#E6E6E9]">
                        電子郵件 (Email) <span className="text-[#F4F4F6]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#66666E] text-[#F4F4F6] text-sm focus:outline-none focus:border-[#E6E6E9] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#E6E6E9]">
                      洽談項目領域
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#66666E] text-[#F4F4F6] text-sm focus:outline-none focus:border-[#E6E6E9] transition-colors"
                    >
                      <option value="全端系統架構或開發">全端系統架構或開發 (Full-Stack Engineering)</option>
                      <option value="AI Agent 系統與工作流整合">AI Agent 系統與工作流整合 (Agentic Systems)</option>
                      <option value="分散式後端與高併發調優">分散式後端與高併發調優 (Distributed Backend)</option>
                      <option value="團隊全職職缺邀約">全職工程主管 / 核心工程師招募 (Full-Time Role)</option>
                      <option value="技術顧問與其他合作">技術顧問與其他合作 (Advisory & Consulting)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#E6E6E9]">
                      訊息內容與專案簡述 <span className="text-[#F4F4F6]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="請簡述您的專案背景、預期目標或時程規劃..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#66666E] text-[#F4F4F6] text-sm focus:outline-none focus:border-[#E6E6E9] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg bg-[#F4F4F6] hover:bg-[#E6E6E9] disabled:opacity-50 text-[#000000] font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>處理中...</span>
                    ) : (
                      <>
                        <span>發送合作訊息</span>
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
