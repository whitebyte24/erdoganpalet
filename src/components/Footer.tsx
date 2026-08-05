'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-[#0F3D2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Sütun 1: Şirket Özeti & Sertifikalar */}
          <div className="lg:col-span-2 space-y-6">
            <Link 
              href="/" 
              className="inline-flex items-center shrink-0 transition-opacity hover:opacity-95"
              aria-label="Erdoğan Palet Anasayfa"
            >
              <Image
                src="/images/brand/logo.png"
                alt="Erdoğan Palet - Ahşap Palet Sanayi Logo"
                width={330}
                height={150}
                className="h-11 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Türkiye'nin güvenilir üreticisi olarak 11 yılı aşkın tecrübemizle ahşap palet, CP palet, ikinci el palet alım satımı ve özel ebatlı ahşap çözümleri sunuyoruz.
            </p>

            {/* Sertifika Rozetleri */}
            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_INFO.certificates.map((cert, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1.5 bg-[#0F3D2E]/60 text-[#D9A441] border border-[#1F6B52] px-2.5 py-1 rounded-md text-xs font-semibold"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {cert.title}
                </span>
              ))}
            </div>
          </div>

          {/* Sütun 2: Hızlı Bağlantılar */}
          <div className="space-y-4">
            <h3 className="text-[#D9A441] font-bold text-sm uppercase tracking-wider">
              Kurumsal
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#D9A441] transition-colors flex items-center gap-1">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-[#D9A441] transition-colors flex items-center gap-1">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-[#D9A441] transition-colors flex items-center gap-1">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-[#D9A441] transition-colors flex items-center gap-1">
                  Üretim Galerisi
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-[#D9A441] transition-colors flex items-center gap-1">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/teklif-al" className="text-[#D9A441] font-bold hover:underline flex items-center gap-1">
                  Teklif Al <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Ürün Kategorileri */}
          <div className="space-y-4">
            <h3 className="text-[#D9A441] font-bold text-sm uppercase tracking-wider">
              Ürün Grupları
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/urunler?kategori=euro" className="hover:text-[#D9A441] transition-colors">
                  Euro Paletler
                </Link>
              </li>
              <li>
                <Link href="/urunler?kategori=standart" className="hover:text-[#D9A441] transition-colors">
                  Standart Ahşap Paletler
                </Link>
              </li>
              <li>
                <Link href="/urunler?kategori=cp" className="hover:text-[#D9A441] transition-colors">
                  CP Kimya Paletleri
                </Link>
              </li>
              <li>
                <Link href="/urunler?kategori=ikinci-el" className="hover:text-[#D9A441] transition-colors">
                  İkinci El Palet Alım Satımı
                </Link>
              </li>
              <li>
                <Link href="/urunler?kategori=ozel" className="hover:text-[#D9A441] transition-colors">
                  Özel Ölçü Palet İmalatı
                </Link>
              </li>
              <li>
                <Link href="/urunler?kategori=agir-yuk" className="hover:text-[#D9A441] transition-colors">
                  Endüstriyel Ağır Yük Paleti
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 4: İletişim Detayları */}
          <div className="space-y-4">
            <h3 className="text-[#D9A441] font-bold text-sm uppercase tracking-wider">
              İletişim & Merkez
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#D9A441]">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#D9A441]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs text-gray-400">{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Telif ve Yasal Metin */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} ERDOĞAN PALET A.Ş. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <span>Gizlilik Politikası</span>
            <span>KVKK Aydınlatma Metni</span>
            <span>Kalite Politikamız</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
