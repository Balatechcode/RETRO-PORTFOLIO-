import React from 'react';
import { Cpu, Layers } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

export const TechStackMap: React.FC = () => {
  const satelliteNodes = [
    { name: 'React 19', role: 'UI Component Layer' },
    { name: 'Next.js', role: 'Full Stack & SSR' },
    { name: 'Node.js', role: 'Runtime Engine' },
    { name: 'Express.js', role: 'REST API Microservices' },
    { name: 'MongoDB', role: 'NoSQL Document Store' },
    { name: 'Shopify Liquid', role: 'E-Commerce Storefront' },
    { name: 'Flutter / Dart', role: 'Cross-Platform Mobile' },
    { name: 'Supabase', role: 'PostgreSQL & Realtime' },
    { name: 'Tailwind CSS', role: 'Atomic Styling Engine' },
    { name: 'Google Apps Script', role: 'Automation Pipelines' },
    { name: 'Technical SEO', role: 'Organic Growth Pipeline' },
    { name: 'Git & GitHub', role: 'Version Control CI' },
  ];

  return (
    <section className="retro-raised bg-[#ffebd4] p-6 text-center border border-[#727974]">
      <div className="max-w-md mx-auto mb-6">
        <span className="font-jetbrains text-[11px] text-[#616200] font-bold tracking-widest uppercase">
          CENTRAL ARCHITECTURE NETWORK
        </span>
        <h3 className="font-space text-xl sm:text-2xl text-[#18362b] font-bold mt-1">
          Interconnected System Stack
        </h3>
        <p className="font-sans-body text-xs sm:text-sm text-[#414845] mt-1">
          Every node links modular frontends, reliable database persistence, and conversion growth telemetry.
        </p>
      </div>

      <div className="relative py-4 max-w-4xl mx-auto">
        {/* Center CPU Node */}
        <div className="w-full flex justify-center mb-6">
          <div
            onClick={() => playTactileClick()}
            className="retro-raised bg-[#18362b] text-[#e7e965] p-5 border-2 border-[#e7e965] shadow-2xl max-w-xs w-full cursor-default hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-1">
              <Cpu className="w-8 h-8 text-[#e7e965] animate-pulse" />
            </div>
            <h4 className="font-space text-base font-bold text-[#fff8f4] tracking-wide">
              MY STACK CPU
            </h4>
            <p className="font-jetbrains text-xs text-[#adcebe] mt-0.5">
              HYBRID WEBSYSTEM KERNEL
            </p>
            <div className="mt-2 text-[10px] text-[#e7e965] font-jetbrains border-t border-[#2f4d41] pt-1">
              STATUS: ZERO SYSTEM BOTTLENECKS
            </div>
          </div>
        </div>

        {/* Satellite Nodes Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {satelliteNodes.map((node) => (
            <div
              key={node.name}
              onClick={() => playTactileClick()}
              className="retro-raised bg-[#fff1e4] px-4 py-2.5 font-jetbrains text-xs font-bold text-[#18362b] border border-[#c1c8c3] flex items-center gap-2 hover:bg-[#e7e965] hover:border-[#18362b] transition-all cursor-default group"
            >
              <span className="w-2 h-2 rounded-full bg-[#616200] group-hover:bg-[#18362b]"></span>
              <div className="text-left">
                <span className="block text-[#18362b] font-bold">{node.name}</span>
                <span className="block text-[10px] text-[#414845] font-normal group-hover:text-[#18362b]">
                  {node.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
