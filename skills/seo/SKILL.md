---
name: seo
description: Teknik SEO, şema (JSON-LD) entegrasyonu, site haritası ve arama motoru optimizasyonu standartlarını içerir.
---

# 🔍 SEO Optimizasyon Yönergesi

## 🏷️ Meta & Başlık Yapısı
```tsx
// Next.js App Router Metadata Örneği
export const metadata: Metadata = {
  title: 'Profesyonel AI Agent Çalışma Alanı',
  description: 'Gelişmiş AI destekli yazılım, araştırma ve içerik üretim ortamı.',
  alternates: {
    canonical: 'https://example.com',
  },
  openGraph: {
    title: 'Profesyonel AI Agent Çalışma Alanı',
    description: 'Gelişmiş AI destekli çalışma ortamı',
    url: 'https://example.com',
    siteName: 'AI Workspace',
    images: [{ url: 'https://example.com/og.png', width: 1200, height: 630 }],
    locale: 'tr_TR',
    type: 'website',
  },
};
```

## 🏗 Schema (JSON-LD) Örneği
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI Agent Workspace",
  "operatingSystem": "Windows, Linux, macOS",
  "applicationCategory": "DeveloperApplication"
}
```

## ⚡ Core Web Vitals Checklist
- [ ] Görseller WebP/AVIF formatında ve `next/image` ile sunulmalı.
- [ ] Render-blocking CSS ve JS minimize edilmeli.
- [ ] Layout Shift (CLS) önlemek için boyut tanımları sabitlenmeli.
