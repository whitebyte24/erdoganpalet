import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Award, Target, Eye, Leaf, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, PROCESS_STEPS } from '@/data/company';
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Hakkımızda | ERDOĞAN PALET A.Ş.",
  description: "20 yılı aşkın tecrübemiz, 10.000 m² kapalı üretim tesisimiz ve ISPM-15 sertifikalı ısıl işlem fırınlarımız ile Türkiye'nin lider ahşap palet üreticisi.",
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
              20 Yılı Aşkın Ahşap Sanayii Deneyimi
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Türkiye'nin ve dünyanın önde gelen sanayi kuruluşlarına EPAL standartlarında, sürdürülebilir ve yüksek mukavemetli ahşap ambalaj ve palet çözümleri sunuyoruz.
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
              Ormandan Gümrük Kapısına Güvenli Lojistik
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              2004 yılında kurulan <strong>ERDOĞAN PALET A.Ş.</strong>, küçük bir ahşap atölyesinden bugün 10.000 m² kapalı alana sahip modern, robotik otomasyonlu bir üretim tesisine dönüşmüştür. 
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              EPAL (Avrupa Palet Birliği) resmi lisansına ve Tarım ve Orman Bakanlığı ISPM-15 ısıl işlem yetki belgesine sahip olan tesisimiz, yıllık 1.500.000 adet palet üretim kapasitesiyle Türkiye'nin 81 iline ve yurt dışı pazarlarına kesintisiz hizmet vermektedir.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <span className="text-2xl font-black text-[#0F3D2E]">10.000 m²</span>
                <span className="block text-xs text-gray-500 font-semibold mt-0.5">Kapalı Tesis Alanı</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <span className="text-2xl font-black text-[#D9A441]">1.5 Mn+</span>
                <span className="block text-xs text-gray-500 font-semibold mt-0.5">Yıllık Üretim Kapasitesi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0F3D2E] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <Factory className="w-16 h-16 text-[#D9A441]/30 absolute top-4 right-4" />
              <h3 className="text-xl font-bold text-[#D9A441]">Tesis Teknolojimiz</h3>
              <ul className="space-y-3 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Tam Otomatik Robotik Çakım Hatları</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Endüstriyel Bilgisayarlı Fırınlı Kurutma Tesisleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Milimetrik Lazerli Kereste Dilme Sistemleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Özmal Lojistik Tır ve Kamyon Filosu</span>
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
              Müşterilerimizin yük ve depolama süreçlerini en güvenli, en dayanıklı ve uluslararası standartlara en uygun ahşap paletler ile desteklemek; sıfır hata ve zamanında teslimat ilkesiyle sanayimize güç katmaktır.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1F6B52] text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F3D2E]">Vizyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sürdürülebilir orman kaynaklarını en verimli teknolojiyle işleyerek, Doğu Avrupa ve Orta Doğu coğrafyasında ahşap ambalaj ve palet sektörünün en güvenilir ve yenilikçi marka lideri olmaktır.
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
              Tüm ürünlerimizde ISO 9001:2015 Kalite Yönetim Sistemi uygulanmaktadır. Kereste seçiminden fırınlama nem seviyelerine, çivi çakım mukavemetinden paketlemeye kadar her palet bağımsız kalite denetçilerimiz tarafından test edilerek sertifikalandırılır.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-[#0F3D2E]">Sürdürülebilirlik & Çevre</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kullandığımız tüm hammaddeler sertifikalı endüstriyel orman alanlarından (FSC / PEFC) temin edilmektedir. Doğal ekosisteme zarar vermeyen, %100 geri dönüştürülebilir ve karbon ayak izini minimize eden üretim süreçlerini benimsiyoruz.
            </p>
          </div>
        </div>

      </div>

      <CtaSection />
    </main>
  );
}

