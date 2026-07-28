import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.erdoganpalet.com.tr'),
  title: {
    default: "ERDOĞAN PALET | Türkiye'nin Güvenilir Ahşap Palet Üreticisi",
    template: "%s | ERDOĞAN PALET A.Ş."
  },
  description: "EPAL euro palet, CP palet, ISPM-15 ısıl işlemli ihracat paletleri ve özel ebatlı ahşap karkas üretimi. Türkiye genelinde 81 ile hızlı teslimat garantisi.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/brand/favicon.png', type: 'image/png' },
    ],
    shortcut: '/images/brand/favicon.png',
    apple: [
      { url: '/images/brand/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: [
    "euro palet",
    "epal palet",
    "ahşap palet üreticisi",
    "ispm15 palet",
    "cp palet",
    "ihracat paleti",
    "özel ölçü palet",
    "palet imalatı istanbul"
  ],
  authors: [{ name: "ERDOĞAN PALET A.Ş." }],
  creator: "ERDOĞAN PALET",
  publisher: "ERDOĞAN PALET",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.erdoganpalet.com.tr",
    title: "ERDOĞAN PALET | Türkiye'nin Güvenilir Ahşap Palet Üreticisi",
    description: "Lojistik, depolama ve ihracat süreçleriniz için yüksek kaliteli EPAL & ISPM-15 sertifikalı ahşap palet çözümleri.",
    siteName: "ERDOĞAN PALET",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERDOĞAN PALET | Ahşap Palet Sanayi",
    description: "Türkiye'nin lider EPAL & ISPM-15 sertifikalı ahşap palet üreticisi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-[#FAFAF8] text-[#111827]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

