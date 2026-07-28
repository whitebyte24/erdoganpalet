import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ERDOĞAN PALET | Ahşap Palet Sanayi',
    short_name: 'Erdoğan Palet',
    description: 'Türkiye\'nin Lider EPAL & ISPM-15 Sertifikalı Ahşap Palet Üreticisi',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF8',
    theme_color: '#0F3D2E',
    icons: [
      {
        src: '/images/brand/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/brand/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
