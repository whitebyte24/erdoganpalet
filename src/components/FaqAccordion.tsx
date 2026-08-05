'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS, FaqItem } from '@/data/faqs';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#FAFAF8] relative border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-[#0F3D2E] uppercase bg-[#0F3D2E]/10 px-3.5 py-1.5 rounded-full">
            Merak Edilenler
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Sıkça Sorulan Sorular (SSS)
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Palet standartları, ikinci el palet alım satımı, sipariş ve teslimat süreçleri hakkında merak ettiğiniz yanıtlar.
          </p>
        </div>

        {/* Akordeon Listesi */}
        <div className="space-y-4">
          {FAQS.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0F3D2E] hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D9A441] shrink-0" />
                    <span className="text-base sm:text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1F6B52] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-[#FAFAF8]/50 animate-fadeIn">
                    <div className="inline-block bg-[#0F3D2E]/10 text-[#0F3D2E] text-[11px] font-bold px-2.5 py-0.5 rounded mb-3">
                      {faq.category}
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
