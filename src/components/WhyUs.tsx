'use client';

import React from 'react';
import { Award, Cpu, Zap, Wrench, Globe, TrendingUp } from 'lucide-react';
import { WHY_US_FEATURES } from '@/data/company';

const ICON_MAP: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-[#D9A441]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#D9A441]" />,
  Zap: <Zap className="w-6 h-6 text-[#D9A441]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#D9A441]" />,
  Globe: <Globe className="w-6 h-6 text-[#D9A441]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#D9A441]" />,
};

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-[#0F3D2E] uppercase bg-[#0F3D2E]/10 px-3.5 py-1.5 rounded-full">
            Kurumsal Avantajlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Neden ERDOĞAN PALET?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Sektördeki 20 yılı aşkın tecrübemiz ve teknolojik altyapımızla kurumsal satın alma süreçlerinize değer katıyoruz.
          </p>
        </div>

        {/* 6 Kartlık Izgara */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FAFAF8] p-8 rounded-2xl border border-gray-200/80 hover:border-[#0F3D2E]/30 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F3D2E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                {ICON_MAP[feature.icon]}
              </div>

              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3 group-hover:text-[#1F6B52] transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

