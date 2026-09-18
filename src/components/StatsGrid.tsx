import React from 'react';
import { Code, TrendingUp, ShoppingBag, Bot, CheckCircle2 } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      id: '01',
      title: 'WEB DEVELOPMENT',
      icon: Code,
      desc: 'Full Stack Apps, Next.js, React, Node.js & high performance web services.',
      stack: 'TS / NODE / NEXT',
      status: 'READY',
    },
    {
      id: '02',
      title: 'DIGITAL MARKETING',
      icon: TrendingUp,
      desc: 'Data-driven SEO, content funnels, conversion audits & multi-channel ROI.',
      stack: 'LEAD → SALE FUNNEL',
      status: 'ACTIVE',
    },
    {
      id: '03',
      title: 'E-COMMERCE',
      icon: ShoppingBag,
      desc: 'Custom Shopify stores, checkout optimization, catalog architecture & scale.',
      stack: 'SHOPIFY / CUSTOM',
      status: 'SCALED',
    },
    {
      id: '04',
      title: 'AI + AUTOMATION',
      icon: Bot,
      desc: 'Apps Script, automated workflows, custom LLM wrappers & webhooks.',
      stack: 'APPS_SCRIPT / API',
      status: 'SYNCED',
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            onClick={() => playTactileClick()}
            className="retro-raised bg-[#ffebd4] p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-150 border border-[#727974] flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="font-space text-2xl font-bold text-[#616200] group-hover:text-[#18362b] transition-colors">
                  {stat.id}
                </span>
                <div className="p-2 bg-[#2f4d41] text-[#e7e965] retro-sunken-dark">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-space text-base font-bold text-[#18362b] mb-1 tracking-tight">
                {stat.title}
              </h3>

              <p className="font-sans-body text-xs text-[#414845] leading-relaxed">
                {stat.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#c1c8c3] flex items-center justify-between font-jetbrains text-[10px] text-[#18362b] font-bold">
              <span>STACK: {stat.stack}</span>
              <span className="flex items-center gap-1 text-[#616200]">
                <CheckCircle2 className="w-3 h-3" />
                <span>{stat.status}</span>
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};
