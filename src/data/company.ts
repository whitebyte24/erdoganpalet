export const COMPANY_INFO = {
  name: 'ERDOĞAN PALET',
  title: 'Türkiye\'nin Güvenilir Ahşap Palet Üreticisi',
  tagline: 'Lojistik, depolama ve ihracat süreçleriniz için yüksek kaliteli ahşap palet çözümleri.',
  phone: '+90 (212) 555 01 99',
  whatsapp: '+90 532 555 01 99',
  email: 'info@erdoganpalet.com.tr',
  salesEmail: 'teklif@erdoganpalet.com.tr',
  address: 'Organize Sanayi Bölgesi, 4. Cadde No: 18, İkitelli / İstanbul',
  workingHours: 'Pazartesi - Cumartesi: 08:30 - 18:30',
  googleMapsUrl: 'https://maps.google.com',
  stats: [
    { value: '5.000+', label: 'Tamamlanan Sipariş', subtext: 'Zamanında teslimat oranı %99.4' },
    { value: '20+', label: 'Yıllık Deneyim', subtext: 'Sektör lideri üretim tecrübesi' },
    { value: '100+', label: 'Kurumsal Müşteri', subtext: 'Türkiye\'nin dev sanayi kuruluşları' },
    { value: '81', label: 'İle Teslimat', subtext: 'Kesintisiz lojistik ağ ve adrese teslim' },
  ],
  certificates: [
    { title: 'EPAL Lisansı', code: 'TR-482' },
    { title: 'ISPM-15 Sertifikası', code: 'TR-34-892' },
    { title: 'ISO 9001:2015', code: 'Kalite Yönetim Sistemi' },
    { title: 'ISO 14001:2015', code: 'Çevre Yönetim Sistemi' },
    { title: 'FSC Sertifikası', code: 'Sürdürülebilir Orman Yönetimi' }
  ]
};

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Hammadde Seçimi',
    description: 'FSC sertifikalı, yüksek mukavemetli sürdürülebilir çam ve gürgen keresteler titizlikle seçilir.',
    icon: 'TreePine'
  },
  {
    number: '02',
    title: 'Hassas Kesim',
    description: 'Son teknoloji tam otomatik hızarlı makinelerde milimetrik ölçü toleranslarıyla kesim gerçekleştirilir.',
    icon: 'Ruler'
  },
  {
    number: '03',
    title: 'Otomatik Montaj',
    description: 'Pnomatik otomatik çakım hatlarında lisanslı burulmuş çivilerle maksimum bağlantı sağlamlığı verilir.',
    icon: 'Hammer'
  },
  {
    number: '04',
    title: 'ISPM-15 Kalite Kontrol',
    description: 'Fırınlama tesisimizde ahşabın öz sıcaklığı 56°C üzerinde tutularak bitki sağlığı kontrolleri yapılır.',
    icon: 'ShieldCheck'
  },
  {
    number: '05',
    title: 'Paketleme & İstifleme',
    description: 'Nem ölçümü onaylanan paletler standart çemberli paketler halinde sevkıyata hazırlanır.',
    icon: 'PackageCheck'
  },
  {
    number: '06',
    title: 'Güvenli Sevkiyat',
    description: 'Özmal lojistik filomuz veya anlaşmalı tedarikçilerimiz ile adrese teslimat sağlanır.',
    icon: 'Truck'
  }
];

export const WHY_US_FEATURES = [
  {
    id: 'kalite',
    title: 'Kaliteli Hammadde',
    description: 'Birinci sınıf budaksız fırınlanmış çam ve göknar kereste ile yüksek taşıma direnci.',
    icon: 'Award'
  },
  {
    id: 'otomasyon',
    title: 'Modern Üretim',
    description: 'Tam otomatik çakım hatları ve robotik istifleme makineleri ile milimetrik standart.',
    icon: 'Cpu'
  },
  {
    id: 'teslimat',
    title: 'Hızlı Teslimat',
    description: 'Stoklu çalışma kapasitemiz sayesinde acil palet ihtiyaçlarınıza 24 saatte çözüm.',
    icon: 'Zap'
  },
  {
    id: 'ozel-uretim',
    title: 'Özel Üretim',
    description: 'Projenize özel 3D CAD tasarımı, yük mukavemet analizleri ve özel ölçü imalatı.',
    icon: 'Wrench'
  },
  {
    id: 'ihracat',
    title: 'İhracata Uygunluk',
    description: '%100 ISPM-15 fırınlanmış, IPPC damgalı gümrük garantili ihracat paletleri.',
    icon: 'Globe'
  },
  {
    id: 'fiyat',
    title: 'Rekabetçi Fiyatlar',
    description: 'Doğrudan imalatçıdan satın alma avantajı ile en uygun maliyet optimizasyonu.',
    icon: 'TrendingUp'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Mehmet Yılmaz',
    role: 'Satın Alma Müdürü',
    company: 'Anadolu Lojistik A.Ş.',
    comment: 'ERDOĞAN PALET ile 4 yıldır çalışıyoruz. EPAL paletlerdeki standart kaliteleri ve acil siparişlerimizdeki hızlı teslimatları sayesinde tedarik zincirimizde hiç aksama yaşamadık.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ayşe Karaca',
    role: 'Tedarik Zinciri Direktörü',
    company: 'Global Kimya Sanayi',
    comment: 'İhracat yüklemelerimiz için CP-1 ve ISPM-15 paletleri temin ediyoruz. Gümrüklerde sertifika konusunda tek bir pürüz dahi yaşamadık. Kesinlikle tavsiye ederim.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Selim Öztürk',
    role: 'Fabrika Müdürü',
    company: 'Ege Seramik A.Ş.',
    comment: 'Ağır yük paleti taleplerimizde ürünlerimize özel çizim yapıp ürettiler. 4 tona yakın yüklerde bile hiç sehim yapmıyor. Profesyonellikleri taktire şayan.',
    rating: 5
  }
];

