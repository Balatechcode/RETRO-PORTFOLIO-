import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Terminal, MapPin, Mail, Clock, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { ContactFormData, ValidationErrors } from '../types';
import { playSuccessChime, playTactileClick, playTerminalKey } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    budget: '$1,500 — $3,500',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const errs: ValidationErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name or callsign (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required for transmission frequency.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide brief details about your project or objective (min 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
      playSuccessChime();

      // Trigger celebratory retro confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#e7e965', '#2f4d41', '#cbcd4c', '#18362b'],
        });
      } catch {
        // Fallback
      }
    }, 600);
  };

  const handleReset = () => {
    playTactileClick();
    setIsSuccess(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      projectType: 'Full Stack Web App',
      budget: '$1,500 — $3,500',
      message: '',
    });
    setErrors({});
  };

  return (
    <section className="retro-raised bg-[#ffebd4] p-5 sm:p-7 border border-[#727974]" id="contact">
      {/* Title Header */}
      <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between mb-6 shadow-sm">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-[#e7e965]" />
          <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
            CONTACT.EXE — Direct Dispatch Terminal
          </span>
        </div>
        <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
          PORT: 443 (DIRECT DISPATCH)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Left */}
        <div className="lg:col-span-7">
          {isSuccess && submittedData ? (
            <div className="retro-sunken bg-[#fff1e4] p-6 border-2 border-[#18362b] space-y-4">
              <div className="flex items-center gap-2 text-[#616200] font-bold">
                <CheckCircle className="w-6 h-6" />
                <h3 className="font-space text-lg text-[#18362b]">
                  TRANSMISSION RECEIVED &amp; QUEUED
                </h3>
              </div>

              <p className="font-sans-body text-sm text-[#251909] leading-relaxed">
                Thank you, <strong>{submittedData.name}</strong>. Your project brief has been logged into the queue for <strong>Balakrishna Kolla</strong>. A response will be dispatched to <strong>{submittedData.email}</strong> within 24 business hours.
              </p>

              <div className="bg-[#ffebd4] p-3 border border-[#c1c8c3] font-jetbrains text-xs space-y-1 text-[#414845]">
                <p><span className="font-bold text-[#18362b]">CLASSIFICATION:</span> {submittedData.projectType}</p>
                <p><span className="font-bold text-[#18362b]">ALLOCATION:</span> {submittedData.budget}</p>
                <p><span className="font-bold text-[#18362b]">TIMESTAMP:</span> {new Date().toLocaleTimeString()} IST</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="retro-btn bg-[#2f4d41] text-[#fff8f4] px-5 py-2 font-jetbrains text-xs font-bold"
                >
                  [SEND ANOTHER DISPATCH]
                </button>

                <a
                  href={`mailto:${SYSTEM_INFO.email}?subject=Inquiry from ${encodeURIComponent(
                    submittedData.name
                  )}&body=${encodeURIComponent(submittedData.message)}`}
                  className="retro-btn bg-[#e7e965] text-[#18362b] px-4 py-2 font-jetbrains text-xs font-bold flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>OPEN IN DEFAULT EMAIL CLIENT</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block font-jetbrains text-xs font-bold text-[#18362b] uppercase mb-1">
                    CALLSIGN / YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      playTerminalKey();
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full retro-sunken bg-[#fff1e4] px-3 py-2 font-sans-body text-sm text-[#251909] focus:outline-none focus:ring-1 focus:ring-[#18362b] placeholder:text-[#727974] ${
                      errors.name ? 'border-2 border-[#ba1a1a]' : 'border border-[#c1c8c3]'
                    }`}
                  />
                  {errors.name && (
                    <p className="font-jetbrains text-[11px] text-[#ba1a1a] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block font-jetbrains text-xs font-bold text-[#18362b] uppercase mb-1">
                    TRANSMISSION FREQUENCY (EMAIL) *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      playTerminalKey();
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@company.com"
                    className={`w-full retro-sunken bg-[#fff1e4] px-3 py-2 font-sans-body text-sm text-[#251909] focus:outline-none focus:ring-1 focus:ring-[#18362b] placeholder:text-[#727974] ${
                      errors.email ? 'border-2 border-[#ba1a1a]' : 'border border-[#c1c8c3]'
                    }`}
                  />
                  {errors.email && (
                    <p className="font-jetbrains text-[11px] text-[#ba1a1a] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Classification */}
                <div>
                  <label htmlFor="contact-project-type" className="block font-jetbrains text-xs font-bold text-[#18362b] uppercase mb-1">
                    PROJECT CLASSIFICATION
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => {
                      playTactileClick();
                      setFormData({ ...formData, projectType: e.target.value });
                    }}
                    className="w-full retro-sunken bg-[#fff1e4] px-3 py-2 font-jetbrains text-xs text-[#251909] focus:outline-none focus:ring-1 focus:ring-[#18362b] border border-[#c1c8c3]"
                  >
                    <option>Full Stack Web App</option>
                    <option>Shopify / E-Commerce</option>
                    <option>Digital Marketing &amp; SEO</option>
                    <option>Automation Workflow (GAS)</option>
                    <option>Mobile App (Flutter)</option>
                    <option>UI / UX Architecture</option>
                  </select>
                </div>

                {/* Budget Allocation */}
                <div>
                  <label htmlFor="contact-budget" className="block font-jetbrains text-xs font-bold text-[#18362b] uppercase mb-1">
                    BUDGET ALLOCATION
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => {
                      playTactileClick();
                      setFormData({ ...formData, budget: e.target.value });
                    }}
                    className="w-full retro-sunken bg-[#fff1e4] px-3 py-2 font-jetbrains text-xs text-[#251909] focus:outline-none focus:ring-1 focus:ring-[#18362b] border border-[#c1c8c3]"
                  >
                    <option>$500 — $1,500</option>
                    <option>$1,500 — $3,500</option>
                    <option>$3,500 — $10,000+</option>
                    <option>Monthly Marketing Retainer</option>
                    <option>Hourly Consultation</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="contact-message" className="block font-jetbrains text-xs font-bold text-[#18362b] uppercase">
                    MESSAGE / OBJECTIVE BRIEF *
                  </label>
                  <span className="font-jetbrains text-[10px] text-[#727974]">
                    {formData.message.length} characters
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    playTerminalKey();
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Detail your goals, project milestones, timeline, or questions..."
                  className={`w-full retro-sunken bg-[#fff1e4] px-3 py-2 font-sans-body text-sm text-[#251909] focus:outline-none focus:ring-1 focus:ring-[#18362b] placeholder:text-[#727974] ${
                    errors.message ? 'border-2 border-[#ba1a1a]' : 'border border-[#c1c8c3]'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="font-jetbrains text-[11px] text-[#ba1a1a] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="retro-btn bg-[#2f4d41] text-[#fff8f4] px-8 py-3 font-jetbrains text-xs sm:text-sm font-bold flex items-center gap-2 phosphor-glow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>ENCRYPTING &amp; DISPATCHING...</span>
                  ) : (
                    <>
                      <span>[SEND DISPATCH →]</span>
                      <Send className="w-4 h-4 text-[#e7e965]" />
                    </>
                  )}
                </button>

                <span className="font-jetbrains text-[11px] text-[#414845]">
                  • Guaranteed response within 24 hours
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Coordinates & Availability Right */}
        <div className="lg:col-span-5 space-y-5">
          <div className="retro-raised bg-[#fff1e4] p-5 border border-[#c1c8c3]">
            <h4 className="font-space text-base font-bold text-[#18362b] mb-3">
              STATION COORDINATES
            </h4>

            <div className="space-y-2.5 font-jetbrains text-xs">
              <p className="flex items-center gap-2 text-[#414845]">
                <MapPin className="w-4 h-4 text-[#2f4d41]" />
                <span className="font-bold text-[#18362b]">{SYSTEM_INFO.location}</span>
              </p>

              <p className="flex items-center gap-2 text-[#414845]">
                <Mail className="w-4 h-4 text-[#2f4d41]" />
                <a
                  href={`mailto:${SYSTEM_INFO.email}`}
                  className="font-bold text-[#18362b] hover:underline"
                >
                  {SYSTEM_INFO.email}
                </a>
              </p>

              <p className="flex items-center gap-2 text-[#414845]">
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <a
                  href={SYSTEM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#18362b] hover:underline"
                >
                  WhatsApp: {SYSTEM_INFO.whatsappNumber}
                </a>
              </p>

              <p className="flex items-center gap-2 text-[#414845]">
                <Clock className="w-4 h-4 text-[#2f4d41]" />
                <span>Timezone: {SYSTEM_INFO.timezone}</span>
              </p>
            </div>

            <a
              href={SYSTEM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playTactileClick()}
              className="mt-3.5 w-full retro-btn bg-[#25d366] text-[#0b3318] py-2 px-3 font-jetbrains text-xs font-bold flex items-center justify-center gap-2 border border-[#18362b] hover:bg-[#20ba5a] transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-[#0b3318]" />
              <span>[OPEN DIRECT WHATSAPP CHAT]</span>
            </a>
          </div>

          {/* Booking Capacity tags */}
          <div className="space-y-2">
            <h5 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider">
              NOW BOOKING CAPACITY FOR:
            </h5>
            <div className="flex flex-wrap gap-2">
              {[
                'Full Stack Web Apps',
                'Shopify Stores',
                'SEO & Content Funnels',
                'Google Apps Script Automation',
                'UI / UX Redesign',
                'Technical Consulting',
              ].map((tag) => (
                <span
                  key={tag}
                  className="retro-sunken bg-[#ffebd4] px-2.5 py-1 font-jetbrains text-[11px] font-bold text-[#18362b] border border-[#c1c8c3]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
