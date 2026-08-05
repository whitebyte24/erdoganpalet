'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/company';

export const JsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.tagline,
    url: 'https://www.erdoganpalet.com.tr',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Darıca / Kocaeli',
      addressCountry: 'TR'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:30',
      closes: '18:30'
    },
    priceRange: '$$',
    knowsAbout: [
      'Euro Palet',
      'İkinci El Palet Alım Satımı',
      'Ahşap Palet',
      'CP Palet',
      'Özel Ölçü Palet İmalatı',
      'Ağır Yük Paleti'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
