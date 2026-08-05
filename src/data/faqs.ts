export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'İkinci el palet alım ve satımı yapıyor musunuz?',
    answer: 'Evet. Kullanılmış ahşap palet alım ve satımı yapıyoruz. İhtiyaca uygun ikinci el palet çözümleri sunuyoruz. Kontrol edilmiş, sağlamlaştırılmış paletlerimizle bütçenize uygun seçenekler sağlıyoruz.',
    category: 'Hizmetlerimiz'
  },
  {
    id: 'faq-2',
    question: 'Euro Palet ile standart ahşap palet arasındaki fark nedir?',
    answer: 'Euro paletler standart 80x120 cm ve 120x100 cm ölçülerde üretilen, depo ve lojistik sistemlerine tam uyumlu paletlerdir. Standart ahşap paletler ise firmaların özel taleplerine göre farklı tahta kalınlıkları ve ölçülerde üretilen ekonomik çözümlerdir.',
    category: 'Ürün Standartları'
  },
  {
    id: 'faq-3',
    question: 'Minimum sipariş miktarı (MOQ) nedir?',
    answer: 'Standart ürün gruplarımızda (Euro Palet, Standart 80x120 vb.) stoktan teslimat yaptığımız için minimum sipariş sınırımız oldukça esnektir. Özel ölçü üretimlerde ise üretim planlamasına göre projeye özel minimum adetler belirlenir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-4',
    question: 'Özel ölçü ahşap palet üretimi yapıyor musunuz?',
    answer: 'Kesinlikle! Firmamızın en güçlü uzmanlık alanlarından biri özel ölçü palet üretimidir. Ekibimiz ürününüzün ağırlığı, boyutları ve taşıma şekline göre mukavemet hesaplarını yapar ve ürününüze özel paleti imal eder.',
    category: 'Üretim & Tasarım'
  },
  {
    id: 'faq-5',
    question: 'Ahşap paletlerin dayanıklılığı nasıl sağlanmaktadır?',
    answer: 'Ahşap paletlerimizde birinci sınıf çam ve göknar keresteleri kullanılmaktadır. Kaliteli ahşap malzeme ve sağlam çivileme yapısı sayesinde paletlerin deforme olması engellenir.',
    category: 'Kalite & Dayanıklılık'
  },
  {
    id: 'faq-6',
    question: 'Sipariş teslimat süreleri ne kadardır?',
    answer: 'Stokta bulunan standart Euro ve 80x120 paletlerimiz aynı gün veya 24 saat içinde sevk edilebilir. Özel ölçü veya yüksek adetli siparişlerinizde ise üretim planlamasına göre 3 ila 7 iş günü içerisinde teslimat gerçekleştirilir.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-7',
    question: 'ERDOĞAN PALET olarak 81 ile sevkiyat imkanınız var mı?',
    answer: 'Evet. Geniş lojistik ağımız ve anlaşmalı nakliye filomuz sayesinde Türkiye\'nin 81 ilindeki fabrika, depo ve sanayi tesislerine doğrudan adrese teslimat gerçekleştiriyoruz.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-8',
    question: 'Teklif alma süreci nasıl işlemektedir?',
    answer: 'Sitemizde yer alan "Teklif Al" butonları veya teklif formu üzerinden ihtiyaç duyduğunuz palet tipini, ölçüleri ve tahmini adedi belirttiğinizde, satış ekibimiz en kısa sürede size özel fiyat teklifini hazırlar.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-9',
    question: 'Paletlerde kullanılan ahşap türleri nelerdir?',
    answer: 'Üretimimizde dayanıklılığı kanıtlanmış I. Sınıf Çam, Göknar, Meşe ve Gürgen keresteleri kullanılmaktadır. Yük taşıma kapasitesi ihtiyacına göre sert ağaç veya yumuşak ağaç kombinasyonları tercih edilir.',
    category: 'Üretim & Tasarım'
  },
  {
    id: 'faq-10',
    question: 'CP (Chemical Pallet) paletlerin kullanım alanları nelerdir?',
    answer: 'CP paletler, özellikle varil, plastik hammadde torbası, IBC tank ve dökme kimyasal ürünlerin ambalajlanması ve taşınması için tasarlanmış standart paletlerdir.',
    category: 'Ürün Standartları'
  },
  {
    id: 'faq-11',
    question: 'Sürdürülebilirlik ve çevre politikanız nedir?',
    answer: 'ERDOĞAN PALET olarak kullandığımız ahşap hammaddeleri sürdürülebilir orman yönetimlerinden temin edilmektedir. İkinci el palet alım satımı ile de geri dönüşümü ve çevre korumasını destekliyoruz.',
    category: 'Kalite & Dayanıklılık'
  }
];
