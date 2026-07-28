'use client';

import React from 'react';
import { TreePine, Ruler, Hammer, ShieldCheck, PackageCheck, Truck } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/company';

const ICON_MAP: Record<string, React.ReactNode> = {
  TreePine: <TreePine className="w-5 h-5 text-[#D9A441]" />,
  Ruler: <Ruler className="w-5 h-5 text-[#D9A441]" />,
  Hammer: <Hammer className="w-5 h-5 text-[#D9A441]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D9A441]" />,
  PackageCheck: <PackageCheck className="w-5 h-5 text-[#D9A441]" />,
  Truck: <Truck className="w-5 h-5 text-[#D9A441]" />,
};

export const Process: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F3D2E] text-white relative overflow-hidden wood-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-[#D9A441] uppercase bg-[#D9A441]/10 border border-[#D9A441]/30 px-3.5 py-1.5 rounded-full">
            Üretim & Kalite Standardı
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            6 Adımda Üretim Süreci
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Ormandan fabrikaya, fabrikadan gümrük kapısına kadar sıfır hata prensibiyle uyguladığımız üretim disiplinimiz.
          </p>
        </div>

        {/* 6 Adımlı Süreç Akışı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-card bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Adım Numarası */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-[#D9A441] opacity-60 group-hover:opacity-100 transition-opacity font-mono">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#1F6B52] flex items-center justify-center border border-[#D9A441]/30">
                  {ICON_MAP[step.icon]}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

