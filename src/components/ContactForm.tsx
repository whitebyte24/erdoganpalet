'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    _honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Mesaj iletilirken bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    } catch (error) {
      setErrorMessage('Bağlantı hatası oluştu. Lütfen telefon numaralarımızdan doğrudan iletişime geçiniz.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Sol Taraf: İletişim Detayları ve Harita */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-[#0F3D2E] text-white p-8 rounded-3xl wood-pattern space-y-6 shadow-xl">
          <div className="inline-block bg-[#D9A441] text-[#0F3D2E] text-xs font-black px-3 py-1 rounded-full uppercase">
            Fabrika & Merkez
          </div>

          <h3 className="text-2xl font-black text-white">
            Bize Ulaşın
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            Satış temsilcilerimiz ve fabrika personelimiz sorularınızı yanıtlamak için hazırdır.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#1F6B52]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1F6B52] flex items-center justify-center text-[#D9A441] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase">Fabrika Adresi</h4>
                <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1F6B52] flex items-center justify-center text-[#D9A441] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase">Telefon</h4>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-[#D9A441] hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1F6B52] flex items-center justify-center text-[#D9A441] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase">WhatsApp Destek Hattı</h4>
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-400 hover:underline">
                  {COMPANY_INFO.whatsapp}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1F6B52] flex items-center justify-center text-[#D9A441] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase">E-posta</h4>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-white hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1F6B52] flex items-center justify-center text-[#D9A441] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase">Çalışma Saatleri</h4>
                <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Harita Temsili Kartı */}
        <div className="bg-gray-100 rounded-3xl p-6 border border-gray-200 text-center space-y-3">
          <div className="w-full h-48 bg-[#0F3D2E]/5 rounded-2xl border border-dashed border-[#0F3D2E]/30 flex flex-col items-center justify-center p-4">
            <MapPin className="w-10 h-10 text-[#0F3D2E] mb-2 animate-bounce" />
            <span className="font-extrabold text-[#0F3D2E] text-sm">Darıca / Kocaeli Tesisimiz</span>
            <span className="text-xs text-gray-500">Ahşap Palet İmalat & Depolama Sahamız</span>
          </div>
        </div>
      </div>

      {/* Sağ Taraf: İletişim Formu */}
      <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
        <h3 className="text-2xl font-black text-[#0F3D2E] mb-2">
          Bize Mesaj Gönderin
        </h3>
        <p className="text-gray-600 text-sm mb-8">
          Sorularınız, iş birliği talepleriniz veya bilgi alma istekleriniz için aşağıdaki formu kullanabilirsiniz.
        </p>

        {submitted ? (
          <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#1F6B52] mx-auto" />
            <h4 className="text-xl font-bold text-[#0F3D2E]">Mesajınız Alındı!</h4>
            <p className="text-gray-700 text-sm">
              Sayın {formData.name}, mesajınız tarafımıza ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '', _honeypot: '' });
              }}
              className="bg-[#0F3D2E] text-white px-6 py-2.5 rounded-xl font-bold text-xs"
            >
              Yeni Mesaj Gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#0F3D2E] uppercase mb-2">
                  Adınız Soyadınız <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ad Soyad"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F3D2E] uppercase mb-2">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0 (5XX) XXX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] text-sm outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#0F3D2E] uppercase mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F3D2E] uppercase mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  placeholder="Örn: Sipariş Bilgisi / Fiyat Talebi"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3D2E] uppercase mb-2">
                Mesajınız
              </label>
              <textarea
                rows={5}
                required
                placeholder="Mesajınızı detaylarıyla buraya yazabilirsiniz..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] text-sm outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0F3D2E] text-white py-4 rounded-xl font-bold text-base hover:bg-[#1F6B52] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5 text-[#D9A441]" />
              <span>{loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
