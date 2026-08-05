import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Award, Target, Eye, Leaf, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, PROCESS_STEPS } from '@/data/company';
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Hakkımızda | ERDOĞAN PALET A.Ş.",
  description: "11 yılı aşkın tecrübemiz ve kaliteli ahşap üretimimiz ile Türkiye'nin güvenilir ahşap palet üreticisi ve ikinci el palet sağlayıcısı.",
  openGraph: {
    title: "Hakkımızda | ERDOĞAN PALET A.Ş.",
    description: "ERDOĞAN PALET kurumsal şirket hikayesi, kalite politikası, vizyon ve misyonu.",
    locale: "tr_TR",
    type: "article",
  }
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Banner */}
        <div className="bg-[#0F3D2E] text-white p-8 sm:p-16 rounded-3xl wood-pattern mb-16 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-black tracking-widest text-[#D9A441] uppercase bg-[#D9A441]/10 border border-[#D9A441]/30 px-3.5 py-1 rounded-full">
              Kurumsal Profil
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              11 Yılı Aşkın Ahşap Sanayii Deneyimi
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Türkiye'nin önde gelen sanayi kuruluşlarına yüksek standartlarda, sürdürülebilir ve yüksek mukavemetli ahşap ambalaj, palet ve ikinci el palet çözümleri sunuyoruz.
            </p>
          </div>
        </div>

        {/* Şirket Hikayesi ve Tesis Bilgileri */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-[#8B5E3C] uppercase tracking-wider bg-[#8B5E3C]/10 px-3 py-1 rounded-full">
              Hikayemiz
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F3D2E]">
              Ormandan Teslimat Noktasına Güvenli Lojistik
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              11 yılı aşkın üretim ve sektör tecrübesine sahip <strong>ERDOĞAN PALET A.Ş.</strong>, ahşap palet imalatı ve ikinci el palet alım satımında güvenilir çözümler sunmaktadır.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Yıllık 630.000+ adet palet üretim kapasitesiyle Türkiye'nin 81 ilindeki sanayi kuruluşlarına kesintisiz hizmet vermektedir.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <span className="text-2xl font-black text-[#0F3D2E]">11+</span>
                <span className="block text-xs text-gray-500 font-semibold mt-0.5">Yıllık Deneyim</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <span className="text-2xl font-black text-[#D9A441]">630.000+</span>
                <span className="block text-xs text-gray-500 font-semibold mt-0.5">Yıllık Üretim Kapasitesi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0F3D2E] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <Factory className="w-16 h-16 text-[#D9A441]/30 absolute top-4 right-4" />
              <h3 className="text-xl font-bold text-[#D9A441]">Üretim Gücümüz</h3>
              <ul className="space-y-3 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Yüksek Kapasiteli Ahşap Çakım Hatları</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Milimetrik Kereste Dilme Sistemleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>İkinci El Palet Alım Satım ve Bakım Merkezi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Özmal Lojistik Filosu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Misyon & Vizyon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0F3D2E] text-[#D9A441] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F3D2E]">Misyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Müşterilerimizin yük ve depolama süreçlerini en güvenli, en dayanıklı ahşap paletler ve bütçe dostu ikinci el çözümler ile desteklemek; zamanında teslimat ilkesiyle sanayimize güç katmaktır.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1F6B52] text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F3D2E]">Vizyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sürdürülebilir orman kaynaklarını en verimli şekilde işleyerek, ahşap ambalaj ve palet sektörünün en güvenilir ve yenilikçi markası olmaktır.
            </p>
          </div>
        </div>

        {/* Kalite Politikası & Sürdürülebilirlik */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-[#D9A441]" />
              <h3 className="text-xl font-bold text-[#0F3D2E]">Kalite Politikamız</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kaliteli ahşap malzeme ve sağlam işçilik anlayışıyla uzun ömürlü paletler üretiyoruz. Kereste seçiminden çivi çakım mukavemetine kadar her palet kontrol edilerek teslim edilir.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-[#0F3D2E]">Sürdürülebilirlik & Çevre</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kullandığımız ahşap hammaddeleri sürdürülebilir orman kaynaklarından temin edilmektedir. İkinci el palet alım satımı ile ahşap kaynakların yeniden kullanımını teşvik ediyor, çevre dostu üretim anlayışını benimsiyoruz.
            </p>
          </div>
        </div>

      </div>

      <CtaSection />
    </main>
  );
}
