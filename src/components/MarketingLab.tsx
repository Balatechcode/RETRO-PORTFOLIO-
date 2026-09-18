import React, { useState } from 'react';
import { FlaskConical, ArrowDown, TrendingUp, Calculator, Check } from 'lucide-react';
import { playTactileClick, playTerminalKey } from '../utils/sound';

export const MarketingLab: React.FC = () => {
  // Interactive Funnel / ROI Estimator State
  const [traffic, setTraffic] = useState<number>(5000);
  const [conversionRate, setConversionRate] = useState<number>(3.5);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(85);

  const estimatedConversions = Math.round((traffic * conversionRate) / 100);
  const estimatedRevenue = Math.round(estimatedConversions * avgOrderValue);

  const funnelStages = [
    {
      stage: 'STAGE 01',
      title: 'DISCOVER',
      arrow: '↓',
      desc: 'Technical SEO, organic search indexing, high-intent social distribution & verified brand authority.',
      metric: 'CTR & Impressions',
    },
    {
      stage: 'STAGE 02',
      title: 'ENGAGE',
      arrow: '↓',
      desc: 'Sub-second first paint speeds, compelling headline hooks, intuitive visual hierarchies & zero bounce.',
      metric: 'Time on Page & Scroll Depth',
    },
    {
      stage: 'STAGE 03',
      title: 'CONVERT',
      arrow: '↓',
      desc: 'Frictionless checkout paths, one-click bundle upsells, clear CTAs & validated payment mechanics.',
      metric: 'Checkout & Inquiry Conversion',
    },
    {
      stage: 'STAGE 04',
      title: 'RETAIN',
      arrow: '✓',
      desc: 'Automated email re-engagement sequences, WhatsApp status updates & repeat customer lifetime value.',
      metric: 'LTV & Repeat Purchase Rate',
    },
  ];

  const specialtyTags = [
    'TECHNICAL SEO',
    'CONTENT FUNNELS',
    'SOCIAL ADVERTISING',
    'PPC TARGETING',
    'GA4 ANALYTICS',
    'CRO BENCHMARKING',
  ];

  return (
    <section className="retro-raised bg-[#ffebd4] p-5 sm:p-6 space-y-6 border border-[#727974]" id="marketing-lab">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center border-b border-[#c1c8c3] pb-3 gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 bg-[#2f4d41] text-[#e7e965]">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-space text-lg sm:text-xl font-bold text-[#18362b]">
              MARKETING.LAB — Growth &amp; Conversion Engine
            </h2>
            <p className="font-sans-body text-xs text-[#414845]">
              Unifying analytical performance marketing with engineering precision.
            </p>
          </div>
        </div>
        <span className="font-jetbrains text-xs bg-[#e7e965] text-[#18362b] px-3 py-1 font-bold border border-[#18362b]">
          STATUS: ANALYZING FUNNEL
        </span>
      </div>

      {/* Hero Quote */}
      <div className="bg-[#18362b] text-[#fff8f4] p-5 sm:p-6 retro-sunken-dark border border-[#2f4d41]">
        <p className="font-space text-base sm:text-lg text-[#e7e965] font-bold mb-2 leading-snug">
          "I combine development and digital marketing to create solutions that are not only visually strong, but also designed around business goals."
        </p>
        <p className="font-sans-body text-xs sm:text-sm text-[#adcebe] leading-relaxed">
          True digital effectiveness happens when page load speed matches customer psychological triggers, search engine crawler expectations, and actionable analytics pipelines.
        </p>
      </div>

      {/* 4-Stage Funnel Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {funnelStages.map((stage) => (
          <div
            key={stage.stage}
            onClick={() => playTactileClick()}
            className="retro-raised bg-[#fff1e4] p-4 text-center border border-[#c1c8c3] flex flex-col justify-between hover:bg-[#ffebd4] transition-colors"
          >
            <div>
              <span className="font-jetbrains text-[10px] text-[#616200] font-bold block mb-1">
                {stage.stage}
              </span>
              <h4 className="font-space text-base font-bold text-[#18362b]">
                {stage.title}
              </h4>
              <p className="font-sans-body text-xs text-[#414845] mt-2 leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-[#d8c2a8]">
              <span className="font-jetbrains text-[10px] text-[#2f4d41] font-bold block mb-1">
                KPI: {stage.metric}
              </span>
              <div className="text-[#616200] font-space text-lg font-bold">
                {stage.arrow}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Growth & ROI Conversion Simulator */}
      <div className="retro-sunken bg-[#fff1e4] p-5 border border-[#c1c8c3] space-y-4">
        <div className="flex items-center gap-2 border-b border-[#c1c8c3] pb-2">
          <Calculator className="w-4 h-4 text-[#2f4d41]" />
          <h4 className="font-space text-sm sm:text-base font-bold text-[#18362b]">
            INTERACTIVE CONVERSION &amp; ROI SIMULATOR
          </h4>
        </div>

        <p className="font-sans-body text-xs text-[#414845]">
          Adjust these variables to simulate how technical speed and conversion rate optimization (CRO) multiply monthly commercial outcomes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
          {/* Slider 1: Traffic */}
          <div className="space-y-1">
            <div className="flex justify-between font-jetbrains text-xs">
              <span className="font-bold text-[#18362b]">Monthly Visitors:</span>
              <span className="text-[#616200] font-bold">{traffic.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={traffic}
              onChange={(e) => {
                playTerminalKey();
                setTraffic(Number(e.target.value));
              }}
              className="w-full accent-[#2f4d41] cursor-pointer"
            />
          </div>

          {/* Slider 2: Conversion Rate */}
          <div className="space-y-1">
            <div className="flex justify-between font-jetbrains text-xs">
              <span className="font-bold text-[#18362b]">Conversion Rate (CRO):</span>
              <span className="text-[#616200] font-bold">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={conversionRate}
              onChange={(e) => {
                playTerminalKey();
                setConversionRate(Number(e.target.value));
              }}
              className="w-full accent-[#2f4d41] cursor-pointer"
            />
          </div>

          {/* Slider 3: Average Order / Lead Value */}
          <div className="space-y-1">
            <div className="flex justify-between font-jetbrains text-xs">
              <span className="font-bold text-[#18362b]">Avg Value per Conversion:</span>
              <span className="text-[#616200] font-bold">${avgOrderValue}</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={avgOrderValue}
              onChange={(e) => {
                playTerminalKey();
                setAvgOrderValue(Number(e.target.value));
              }}
              className="w-full accent-[#2f4d41] cursor-pointer"
            />
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="retro-raised bg-[#ffebd4] p-4 border border-[#727974] flex flex-wrap justify-around items-center gap-4 text-center">
          <div>
            <span className="font-jetbrains text-[10px] text-[#414845] uppercase block font-bold">
              ESTIMATED CONVERSIONS / LEADS
            </span>
            <span className="font-space text-2xl font-bold text-[#18362b]">
              {estimatedConversions.toLocaleString()} / mo
            </span>
          </div>

          <div className="h-8 w-px bg-[#c1c8c3] hidden sm:block"></div>

          <div>
            <span className="font-jetbrains text-[10px] text-[#414845] uppercase block font-bold">
              ESTIMATED MONTHLY PIPELINE REVENUE
            </span>
            <span className="font-space text-2xl font-bold text-[#616200]">
              ${estimatedRevenue.toLocaleString()}
            </span>
          </div>

          <div className="h-8 w-px bg-[#c1c8c3] hidden sm:block"></div>

          <div>
            <span className="font-jetbrains text-[10px] text-[#414845] uppercase block font-bold">
              SEARCH INDEXABILITY RATING
            </span>
            <span className="font-space text-2xl font-bold text-[#18362b] flex items-center justify-center gap-1">
              <span>98/100</span>
              <Check className="w-5 h-5 text-[#616200]" />
            </span>
          </div>
        </div>
      </div>

      {/* Floating Specialty Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
        {specialtyTags.map((tag) => (
          <div
            key={tag}
            onClick={() => playTactileClick()}
            className="retro-sunken bg-[#ffebd4] p-2.5 text-center font-jetbrains text-[11px] font-bold text-[#18362b] border border-[#c1c8c3] hover:bg-[#e7e965] transition-colors cursor-default"
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
};
