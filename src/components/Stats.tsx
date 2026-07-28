'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/company';

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#0F3D2E] text-white py-16 border-y border-[#1F6B52]/40 relative overflow-hidden wood-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card bg-white/5 border border-white/10 p-6 rounded-2xl text-center transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#D9A441] tracking-tight font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-white tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-gray-300 mt-1 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

