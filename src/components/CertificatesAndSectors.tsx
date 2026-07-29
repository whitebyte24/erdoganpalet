'use client';

import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Truck, Factory, PackageCheck, Globe, Scale } from 'lucide-react';

const CERTIFICATES = [
  {
    code: 'EPAL',
    title: 'EPAL Lisanslı İmalat',
    desc: 'Avrupa Palet Birliği tescilli UIC 435-2 standartlarında sertifikalı üretim.',
    icon: Award,
    badge: 'Uluslararası Lisans'
  },
  {
    code: 'ISPM-15',
    title: 'ISPM-15 Isıl İşlem',
    desc: 'Tarım ve Orman Bakanlığı onaylı 56°C HT zararlı önleme ve gümrük garantisi.',
    icon: ShieldCheck,
    badge: 'IPPC Resmi Damga'
  },
  {
    code: 'ISO 9001',
    title: 'ISO 9001:2015 Kalite',
    desc: 'Uluslararası standartlarda kalite yönetim ve sürekli iyileştirme prensipleri.',
    icon: CheckCircle2,
    badge: 'Kalite Güvencesi'
  },
  {
    code: 'APME / CP',
    title: 'CP Kimya Standartları',
    desc: 'Avrupa Kimya Endüstrisi APME normlarına uygun CP1 - CP9 serisi imalat.',
    icon: PackageCheck,
    badge: 'Kimya Sanayi Uyumlu'
  }
];

const SECTORS = [
  {
    title: 'Lojistik & Depolama',
    desc: 'Otomatik yüksek raflı depolama ve konveyör hatlarına %100 uyumlu paletler.',
    icon: Truck
  },
  {
    title: 'Kimya & Plastik Sanayii',
    desc: 'Torbalı hammaddeler ve kimyasal variller için özel dizayn edilmiş CP serisi.',
    icon: Factory
  },
  {
    title: 'Gıda & FMCG Lojistiği',
    desc: 'Fırınlanmış nem kontrollü, hijyenik ve küf önleyici ahşap palet üretimi.',
    icon: PackageCheck
  },
  {
    title: 'Ağır Sanayi & Otomotiv',
    desc: '5 tona kadar tonajlı makineler ve aksamlar için ultra güçlendirilmiş karkaslar.',
    icon: Scale
  },
  {
    title: 'Deniz Aşırı İhracat',
    desc: 'Dünya geneli gümrük kapılarında sıfır takılma riski sağlanan ISPM-15 damgalı paletler.',
    icon: Globe
  }
];

export const CertificatesAndSectors: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAF8] via-white to-[#FAFAF8] relative border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sertifikalar Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black tracking-widest text-[#8B5E3C] uppercase bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full">
            Kurumsal Güvence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Sertifika ve Kalite Standartlarımız
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Üretimimizin her aşaması uluslararası kabul görmüş kalite lisansları ve resmi denetimlerle belgelenmiştir.
          </p>
        </div>

        {/* Sertifikalar Kart Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CERTIFICATES.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center group-hover:bg-[#0F3D2E] group-hover:text-[#D9A441] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#8B5E3C] bg-[#8B5E3C]/10 px-2.5 py-1 rounded-md">
                    {cert.code}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-[#0F3D2E] text-lg group-hover:text-[#1F6B52] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#1F6B52]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>{cert.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hizmet Verilen Sektörler Alanı */}
        <div className="bg-[#0F3D2E] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#D9A441] uppercase tracking-widest block mb-2">
                Sektörel Çözümler
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Hangi Sektörlere Hizmet Veriyoruz?
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Her sektörün taşıma, depolama ve standart gereksinimlerine özel olarak geliştirilmiş ahşap palet çözümleri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {SECTORS.map((sec, idx) => {
                const SecIcon = sec.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-[#165642]/40 border border-[#1F6B52]/50 backdrop-blur-sm p-5 rounded-2xl space-y-2 hover:bg-[#165642]/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#D9A441]/20 text-[#D9A441] flex items-center justify-center shrink-0">
                        <SecIcon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-white text-base">{sec.title}</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed pl-12">
                      {sec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
