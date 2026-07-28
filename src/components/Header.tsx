'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Ürünler', href: '/urunler' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <>
      {/* Üst Bilgi Çubuğu (Top Bar) */}
      <div className="bg-[#0F3D2E] text-white text-xs py-2 px-4 border-b border-[#1F6B52]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#D9A441] font-medium">
              <ShieldCheck className="w-4 h-4" /> EPAL & ISPM-15 Lisanslı Üretici
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">
              Türkiye Geneli 81 İle Hızlı Teslimat Filosu
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-gray-200 hover:text-[#D9A441] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">{COMPANY_INFO.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Ana Navigasyon (Glassmorphism Sticky Header) */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-header shadow-lg shadow-[#0F3D2E]/5 border-b border-[#0F3D2E]/10 py-2.5' 
            : 'bg-[#FAFAF8] py-3.5 border-b border-gray-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center shrink-0 transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] focus:ring-offset-2 rounded-lg p-0.5"
            aria-label="Erdoğan Palet Anasayfa"
          >
            <Image
              src="/images/brand/logo.png"
              alt="Erdoğan Palet - Ahşap Palet Sanayi Logo"
              width={330}
              height={150}
              priority
              className="h-10 sm:h-12 md:h-[54px] lg:h-[62px] w-auto object-contain"
            />
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive 
                      ? 'text-[#0F3D2E]' 
                      : 'text-gray-700 hover:text-[#0F3D2E]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D9A441] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sağ CTA Butonu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/teklif-al"
              className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1F6B52] hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-[#D9A441]/30"
            >
              <span>Teklif Al</span>
              <ArrowRight className="w-4 h-4 text-[#D9A441]" />
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/teklif-al"
              className="bg-[#0F3D2E] text-[#D9A441] p-2 rounded-lg text-xs font-bold"
            >
              Teklif Al
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F3D2E] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobil Menü Açılır Alanı */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-header border-t border-gray-200 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm ${
                      isActive 
                        ? 'bg-[#0F3D2E] text-white' 
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#D9A441]' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-gray-200/80 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 bg-gray-100 text-[#0F3D2E] py-3 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#D9A441]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <Link
                href="/teklif-al"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#0F3D2E] text-white py-3 rounded-xl font-bold text-sm"
              >
                <span>Anında Teklif İsteyin</span>
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

