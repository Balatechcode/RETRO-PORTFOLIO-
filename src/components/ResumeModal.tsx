import React from 'react';
import { FileText, Download, Printer, Send, X, Award, CheckCircle2 } from 'lucide-react';
import { SYSTEM_INFO, EXPERIENCE_LIST, SKILL_CATEGORIES } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playTactileClick();
    window.print();
  };

  const handleDownloadText = () => {
    playTactileClick();
    const resumeText = `
BALAKRISHNA KOLLA — CURRICULUM VITAE
Digital Marketer & Full Stack Web Developer
Email: ${SYSTEM_INFO.email}
Location: ${SYSTEM_INFO.location}
Education: Bachelor of Computer Applications (BCA — Graduated 2025)

PROFESSIONAL SUMMARY
Digital Marketer and Full Stack Web Developer bridging high-performance web engineering with conversion-focused growth systems. Experienced across React, Next.js, Node.js, Shopify Liquid, and technical SEO.

EXPERIENCE
1. PETROTECH CHEMICAL — Web Developer & Digital Marketing Specialist (2024 — Present | Vapi, Gujarat)
   - Lead corporate web platform architecture and inbound lead routing.
   - Designed technical SEO strategy achieving top rankings for industrial B2B terms.
   - Built automated quote routing via WhatsApp and email integrations.

2. INSTAPRICE — Lead Full Stack Engineer (2024)
   - Real-time polymer spot rate updates, price history charting & automated alert webhooks.

3. FESTYLO — Shopify Developer & Growth Lead (2024)
   - Custom celebration kit store with custom Liquid bundles and high-speed checkout (+27% AOV).

4. WEBCRAFTY SOLUTION — Full Stack Consultant (2023 — 2024)
   - Built SMB client portals and automated lead triage linking web forms to Google Sheets.

CORE TECHNICAL SKILLS
- Frontend: React.js, Next.js, TypeScript, Tailwind CSS, JavaScript ES6+, HTML5/CSS3
- Backend: Node.js, Express.js, MongoDB, RESTful APIs, PHP, PostgreSQL
- E-Commerce: Shopify Liquid, WooCommerce, Payment Gateways
- Mobile: Flutter (Dart), Riverpod, Supabase
- Growth & SEO: Technical SEO, Google Analytics 4, Meta Ads, Conversion Rate Optimization (CRO)
- Automation: Google Apps Script, Google Sheets Headless DB, Webhooks
`.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Balakrishna_Kolla_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-[#3c2e1c]/75 backdrop-blur-xs z-[85] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="retro-raised bg-[#ffebd4] max-w-3xl w-full p-4 sm:p-6 border-2 border-[#18362b] shadow-2xl my-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Title Bar */}
        <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between mb-4 shadow-sm">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#e7e965]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
              VIEWER.EXE — BALAKRISHNA_KOLLA_CV.PDF
            </span>
          </div>
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="w-5 h-5 bg-[#e7e965] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center hover:bg-[#cbcd4c]"
          >
            ✕
          </button>
        </div>

        {/* Printable Resume Canvas */}
        <div className="retro-sunken bg-[#fff8f4] p-6 sm:p-8 border border-[#c1c8c3] max-h-[75vh] overflow-y-auto font-sans-body text-[#251909] space-y-6">
          {/* Header */}
          <div className="border-b-2 border-[#18362b] pb-4">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <h1 className="font-space text-2xl sm:text-3xl font-bold text-[#18362b]">
                  Balakrishna Kolla
                </h1>
                <p className="font-jetbrains text-sm font-bold text-[#616200] mt-1">
                  Digital Marketer + Full Stack Web Developer
                </p>
              </div>

              <div className="font-jetbrains text-xs text-[#414845] space-y-0.5 sm:text-right">
                <p>{SYSTEM_INFO.location}</p>
                <p>{SYSTEM_INFO.email}</p>
                <p className="text-[#616200] font-bold">BCA Graduate (2025)</p>
              </div>
            </div>
          </div>

          {/* Profile Overview */}
          <div>
            <h2 className="font-space text-sm font-bold text-[#18362b] uppercase tracking-wider border-b border-[#c1c8c3] pb-1 mb-2">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#414845]">
              Full Stack Web Developer and Digital Marketing Specialist experienced in engineering high-speed React/Next.js platforms, customized Shopify stores, and data-driven SEO acquisition funnels. Strong foundation in software architecture and commercial economics with a focus on measurable conversion and uptime reliability.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="font-space text-sm font-bold text-[#18362b] uppercase tracking-wider border-b border-[#c1c8c3] pb-1 mb-3">
              Experience &amp; Key Engagements
            </h2>

            <div className="space-y-4">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <span className="font-bold text-[#18362b]">{exp.company}</span>
                    <span className="font-jetbrains text-xs text-[#616200] font-bold">{exp.period}</span>
                  </div>
                  <div className="font-jetbrains text-xs text-[#2f4d41] font-medium">
                    {exp.role} • {exp.location}
                  </div>
                  <p className="text-xs text-[#414845] leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="text-xs text-[#414845] list-disc list-inside space-y-0.5 pt-1">
                    {exp.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical & Marketing Skills */}
          <div>
            <h2 className="font-space text-sm font-bold text-[#18362b] uppercase tracking-wider border-b border-[#c1c8c3] pb-1 mb-2">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-jetbrains">
              <div>
                <span className="font-bold text-[#18362b]">Web &amp; APIs:</span>{' '}
                <span className="text-[#414845]">React, Next.js, Node.js, Express, TypeScript, REST APIs</span>
              </div>
              <div>
                <span className="font-bold text-[#18362b]">Databases &amp; Mobile:</span>{' '}
                <span className="text-[#414845]">MongoDB, PostgreSQL, Supabase, Flutter (Dart)</span>
              </div>
              <div>
                <span className="font-bold text-[#18362b]">E-Commerce:</span>{' '}
                <span className="text-[#414845]">Shopify Liquid, WooCommerce, Razorpay/Stripe, CRO</span>
              </div>
              <div>
                <span className="font-bold text-[#18362b]">Growth &amp; Pipeline:</span>{' '}
                <span className="text-[#414845]">Technical SEO, GA4, Google Apps Script, Automation</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-space text-sm font-bold text-[#18362b] uppercase tracking-wider border-b border-[#c1c8c3] pb-1 mb-2">
              Education &amp; Credentials
            </h2>
            <div className="flex justify-between items-center text-xs">
              <div>
                <span className="font-bold text-[#18362b]">Bachelor of Computer Applications (BCA)</span>
                <p className="text-[#414845]">Veer Narmad South Gujarat University</p>
              </div>
              <span className="font-jetbrains font-bold text-[#616200]">2025</span>
            </div>
          </div>
        </div>

        {/* Modal Controls */}
        <div className="flex flex-wrap justify-between items-center gap-3 mt-4 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="retro-btn bg-[#fff1e4] px-4 py-2 font-jetbrains text-xs font-bold text-[#18362b] flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT CV</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="retro-btn bg-[#e7e965] px-4 py-2 font-jetbrains text-xs font-bold text-[#18362b] flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD .TXT</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playTactileClick();
                onClose();
              }}
              className="retro-btn bg-[#fff1e4] px-4 py-2 font-jetbrains text-xs font-bold text-[#18362b]"
            >
              [CLOSE]
            </button>

            <button
              onClick={() => {
                playTactileClick();
                onClose();
                onOpenContact();
              }}
              className="retro-btn bg-[#2f4d41] text-[#fff8f4] px-4 py-2 font-jetbrains text-xs font-bold flex items-center gap-1.5 phosphor-glow"
            >
              <Send className="w-3.5 h-3.5 text-[#e7e965]" />
              <span>CONTACT CANDIDATE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
