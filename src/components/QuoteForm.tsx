'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, Calculator, ShieldCheck, AlertCircle } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export const QuoteForm: React.FC = () => {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get('urun') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productType: preselectedProduct || 'Euro Palet (800x1200 mm)',
    customDimensions: '800x1200 mm (Standart)',
    quantity: '500',
    secondHandOption: false,
    message: '',
    _honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, productType: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.companyName) {
      setErrorMsg('Lütfen ad soyad, firma adı ve telefon alanlarını doldurunuz.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          companyName: formData.companyName,
          phone: formData.phone,
          email: formData.email,
          productType: formData.productType,
          quantity: `${formData.quantity} Adet ${formData.secondHandOption ? '(İkinci El Palet İhtiyacı)' : ''}`,
          dimensions: formData.customDimensions,
          notes: formData.message,
          _honeypot: formData._honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Teklif talebi gönderilirken hata oluştu.');
      }
    } catch (err) {
      setErrorMsg('Sunucu bağlantı hatası oluştu. Lütfen doğrudan iletişime geçiniz.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Form Üst Başlığı */}
      <div className="bg-[#0F3D2E] text-white p-8 sm:p-10 wood-pattern">
        <div className="flex items-center gap-3 text-[#D9A441] text-xs font-black uppercase tracking-wider mb-2">
          <Calculator className="w-4 h-4" />
          <span>Hızlı Teklif Değerlendirme Sistemi</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Fiyat Teklif Talebi Oluşturun
        </h3>
        <p className="text-gray-300 text-sm mt-2">
          Aşağıdaki bilgileri eksiksiz doldurarak satış ekibimizden en uygun teklifi 2 saat içinde alın.
        </p>
      </div>

      {/* Başarılı Gönderim Durumu */}
      {isSubmitted ? (
        <div className="p-10 sm:p-16 text-center space-y-6">
          <div className="w-20 h-20 bg-[#1F6B52]/10 text-[#1F6B52] rounded-full flex items-center justify-center mx-auto border-2 border-[#1F6B52]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-extrabold text-[#0F3D2E]">
              Teklif Talebiniz Başarıyla Alındı!
            </h4>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Sayın <strong className="text-[#0F3D2E]">{formData.fullName}</strong>, <strong className="text-[#0F3D2E]">{formData.companyName}</strong> firması adına oluşturduğunuz teklif talebi satış ekibimize iletilmiştir.
            </p>
          </div>

          <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-200 text-left text-xs space-y-2 max-w-md mx-auto">
            <div className="font-bold text-[#0F3D2E] border-b border-gray-200 pb-2">Talep Özeti:</div>
            <div className="flex justify-between"><span>Ürün Türü:</span> <strong className="text-gray-800">{formData.productType}</strong></div>
            <div className="flex justify-between"><span>Ölçü:</span> <strong className="text-gray-800">{formData.customDimensions}</strong></div>
            <div className="flex justify-between"><span>Adet:</span> <strong className="text-[#0F3D2E] font-extrabold">{formData.quantity} Adet</strong></div>
            <div className="flex justify-between"><span>İkinci El Palet Talebi:</span> <strong className="text-[#1F6B52]">{formData.secondHandOption ? 'Evet' : 'Hayır'}</strong></div>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1F6B52] transition-colors"
          >
            <span>Yeni Teklif Formu Doldur</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
          {/* Honeypot Spam Protection (Hidden Field) */}
          <input
            type="text"
            name="_honeypot"
            value={formData._honeypot}
            onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          
          {errorMsg && (
            <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* İletişim Bilgileri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Ahmet Yılmaz"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                Firma Adı <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Lojistik Sanayi A.Ş."
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                Telefon Numarası <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="0 (5XX) XXX XX XX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                E-posta Adresi
              </label>
              <input
                type="email"
                placeholder="ahmet@firma.com.tr"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Ürün & Teknik Özellik Seçimi */}
          <div className="pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                Ürün Türü
              </label>
              <select
                value={formData.productType}
                onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none bg-white transition-all font-medium text-gray-800"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Diğer / Özel Ölçü Palet">Diğer / Özel Ölçü Palet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                Palet Ölçüleri
              </label>
              <input
                type="text"
                placeholder="Örn: 80x120 cm, 100x120 cm veya özel ebat"
                value={formData.customDimensions}
                onChange={(e) => setFormData({ ...formData, customDimensions: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
                Tahmini Sipariş Adedi
              </label>
              <input
                type="number"
                min="10"
                placeholder="Örn: 500"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all font-bold text-[#0F3D2E]"
              />
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-3 p-3 bg-[#FAFAF8] rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.secondHandOption}
                  onChange={(e) => setFormData({ ...formData, secondHandOption: e.target.checked })}
                  className="w-5 h-5 accent-[#0F3D2E] rounded cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-[#0F3D2E] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" /> İkinci El Palet Alım Satımı
                  </span>
                  <span className="text-[11px] text-gray-500 block">Kullanılmış palet ihtiyacı veya satışı için</span>
                </div>
              </label>
            </div>
          </div>

          {/* Özel Mesaj & Notlar */}
          <div>
            <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
              Özel Notlar veya Yük Taşıma Detayları
            </label>
            <textarea
              rows={4}
              placeholder="Ürününüzün ağırlığı, istifleme şekli, transpalet/forklift gereksinimi veya teslimat adresi hakkında eklemek istedikleriniz..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] focus:ring-2 focus:ring-[#0F3D2E]/20 text-sm outline-none transition-all"
            />
          </div>

          {/* Gönder Butonu */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F3D2E] text-white py-4 rounded-xl font-black text-base hover:bg-[#1F6B52] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 border border-[#D9A441]/40 disabled:opacity-50"
          >
            <Send className="w-5 h-5 text-[#D9A441]" />
            <span>{loading ? 'Teklif Talebi Gönderiliyor...' : 'Fiyat Teklif Talebini Gönder'}</span>
          </button>

          <p className="text-[11px] text-gray-500 text-center">
            * Gönderdiğiniz bilgiler KVKK kapsamında yalnızca teklif hazırlama amacıyla saklanacaktır.
          </p>

        </form>
      )}

    </div>
  );
};
