export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'ERDOĞAN PALET ürünleri ISPM-15 ısıl işlem sertifikasına sahip midir?',
    answer: 'Evet. Ürettiğimiz tüm ahşap paletler, Tarım ve Orman Bakanlığı tarafından yetkilendirilmiş modern fırınlarımızda ISPM-15 (International Standards for Phytosanitary Measures No. 15) standartlarına uygun olarak ısıl işleme tabi tutulur. Ahşabın çekirdek sıcaklığı en az 30 dakika boyunca 56°C üzerinde tutularak zararlılardan tamamen arındırılır ve resmi IPPC damgası basılarak sertifikalandırılır.',
    category: 'Sertifika & İhracat'
  },
  {
    id: 'faq-2',
    question: 'EPAL Euro Palet ile standart ahşap palet arasındaki fark nedir?',
    answer: 'EPAL (Avrupa Palet Birliği) paletleri, milimetrik standartlara, lisanslı özel çivilere ve sıkı kalite kontrol süreçlerine tabi olan uluslararası tescilli paletlerdir. Standart ahşap paletler ise firmaların özel taleplerine veya yurt içi taşıma gereksinimlerine göre farklı tahta kalınlıkları ve ölçülerde üretilen daha ekonomik çözümlerdir.',
    category: 'Ürün Standartları'
  },
  {
    id: 'faq-3',
    question: 'Minimum sipariş miktarı (MOQ) nedir?',
    answer: 'Standart ürün gruplarımızda (EPAL 1, Standart 80x120 vb.) stoktan teslimat yaptığımız için minimum sipariş sınırımız oldukça esnektir. Özel ölçü üretimlerde ise üretim bandı verimliliği açısından projeye özel minimum adetler belirlenir. Detaylı bilgi için müşteri temsilcimizle iletişime geçebilirsiniz.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-4',
    question: 'Özel ölçü ahşap palet üretimi yapıyor musunuz?',
    answer: 'Kesinlikle! Firmamızın en güçlü uzmanlık alanlarından biri terzi usulü özel ölçü palet üretimidir. Mühendislerimiz ürününüzün ağırlığı, boyutları ve taşıma şekline göre 3D CAD çizimleri hazırlayarak statik/dinamik mukavemet hesaplarını yapar ve ürününüze özel paleti imal eder.',
    category: 'Üretim & Tasarım'
  },
  {
    id: 'faq-5',
    question: 'Ahşap paletlerin nem oranı nasıl kontrol edilmektedir?',
    answer: 'Ahşap paletlerimizde nem oranı fırınlı kurutma tesislerimizde %18 - %22 seviyelerinin altına düşürülmektedir. Düşük nem oranı, küflenmeyi, mantar oluşumunu ve paletin zamanla esneyip deforme olmasını engeller.',
    category: 'Kalite & Dayanıklılık'
  },
  {
    id: 'faq-6',
    question: 'Sipariş teslimat süreleri ne kadardır?',
    answer: 'Stokta bulunan standart EPAL ve 80x120 paletlerimiz aynı gün veya 24 saat içinde sevk edilebilir. Özel ölçü veya yüksek montajlı siparişlerinizde ise üretim planlamasına göre 3 ila 7 iş günü içerisinde teslimat gerçekleştirilir.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-7',
    question: 'ERDOĞAN PALET olarak 81 ile sevkiyat imkanınız var mı?',
    answer: 'Evet. Geniş lojistik filomuz ve anlaşmalı nakliye ağımız sayesinde Türkiye\'nin 81 ilindeki fabrika, depo ve liman tesislerine doğrudan adrese teslimat gerçekleştiriyoruz. Ayrıca sınır ötesi ihracat yüklemelerine uygun ambalajlama yapmaktayız.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-8',
    question: 'Teklif alma süreci nasıl işlemektedir?',
    answer: 'Sitemizde yer alan "Teklif Al" butonları veya teklif formu üzerinden ihtiyaç duyduğunuz palet tipini, ölçüleri ve tahmini adedi belirttiğinizde, satış mühendislerimiz en geç 2 saat içerisinde size özel fiyat teklif dosyasını hazırlar.',
    category: 'Sipariş & Teslimat'
  },
  {
    id: 'faq-9',
    question: 'Paletlerde kullanılan ahşap türleri nelerdir?',
    answer: 'Üretimimizde dayanıklılığı kanıtlanmış I. Sınıf Çam, Göknar, Meşe ve Gürgen keresteleri kullanılmaktadır. Yük taşıma kapasitesi ihtiyacına göre sert ağaç veya iğne yapraklı yumuşak ağaç kombinasyonları tercih edilir.',
    category: 'Üretim & Tasarım'
  },
  {
    id: 'faq-10',
    question: 'CP (Chemical Pallet) paletlerin kullanım alanları nelerdir?',
    answer: 'CP paletler (CP1, CP2, CP3... CP9), Avrupa Kimya Endüstrisi Birlikleri tarafından standartlaştırılmış paletlerdir. Özellikle varil, plastik hammadde torbası, IBC tank ve dökme kimyasal ürünlerin ambalajlanması ve konteyner içi taşınması için tasarlanmıştır.',
    category: 'Ürün Standartları'
  },
  {
    id: 'faq-11',
    question: 'Sürdürülebilirlik ve çevre politikanız nedir?',
    answer: 'ERDOĞAN PALET olarak kullandığımız tüm ahşap hammaddeleri endüstriyel ve sertifikalı sürdürülebilir orman yönetimlerinden (FSC/PEFC) temin edilmektedir. Doğaya saygılı, %100 geri dönüştürülebilir üretim prensiplerini benimsiyoruz.',
    category: 'Kalite & Dayanıklılık'
  }
];

