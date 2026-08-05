export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'euro' | 'standart' | 'cp' | 'ikinci-el' | 'ozel' | 'agir-yuk';
  categoryName: string;
  badge?: string;
  imageUrl?: string;
  shortDescription: string;
  fullDescription: string;
  dimensions: string;
  weight: string;
  staticCapacity: string;
  dynamicCapacity: string;
  rackCapacity: string;
  material: string;
  standards: string[];
  features: string[];
  useCases: string[];
  isPopular?: boolean;
}

export const CATEGORIES = [
  { id: 'hepsi', name: 'Tüm Ürünler' },
  { id: 'euro', name: 'Euro Palet' },
  { id: 'standart', name: 'Standart Palet' },
  { id: 'cp', name: 'CP Palet' },
  { id: 'ikinci-el', name: 'İkinci El Palet' },
  { id: 'ozel', name: 'Özel Ölçü Palet' },
  { id: 'agir-yuk', name: 'Ağır Yük Paleti' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'epal-1',
    slug: 'euro-palet-80-120',
    name: 'Euro Palet (800x1200 mm)',
    category: 'euro',
    categoryName: 'Euro Palet',
    badge: 'En Çok Tercih Edilen',
    imageUrl: '/images/epal_euro_pallet.jpg',
    shortDescription: 'Avrupa standartlarında yüksek dayanımlı ve taşımacılığa tam uygun standart euro palet.',
    fullDescription: 'ERDOĞAN PALET güvencesiyle üretilen Euro Palet, birinci sınıf çam ve göknar kerestelerinden imal edilir. Lojistik ve depolama operasyonlarında yüksek güvenlik ve taşıma kapasitesi sunar. Depolama sistemleriyle tam uyumludur.',
    dimensions: '800 x 1200 x 144 mm',
    weight: 'Yaklaşık 25 kg',
    staticCapacity: '4.000 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'Birinci Sınıf Çam / Göknar Kereste',
    standards: ['TSE Standartlarına Uygun', 'Yüksek Taşıma Kapasitesi', '4 Yönlü Giriş'],
    features: [
      'Dayanıklı çivileme ile ekstra mukavemet',
      'Kurutulmuş ahşap kullanımı (Nem oranı <%22)',
      'Dört yönlü forklift ve transpalet girişi',
      'Raf ve depolama sistemlerine tam uyum'
    ],
    useCases: [
      'Yurt içi lojistik ve sevkiyat yüklemeleri',
      'Gıda, ilaç ve hızlı tüketim mamulleri lojistiği',
      'Depolama ve raf sistemleri',
      'Perakende ve süpermarket tedarik zinciri'
    ],
    isPopular: true
  },
  {
    id: 'epal-2',
    slug: 'euro-palet-120-100',
    name: 'Euro Palet (1200x1000 mm)',
    category: 'euro',
    categoryName: 'Euro Palet',
    badge: 'Geniş Yüzeyli',
    imageUrl: '/images/epal_euro_pallet.jpg',
    shortDescription: '1200x1000 mm geniş taban ölçüsüyle ağır sanayi ve dökme yükler için tasarlanmış dayanıklı palet.',
    fullDescription: '1200x1000 mm Euro paletler, özellikle kimya, dökme malzeme ve ağır sanayi ürünlerinin taşınmasında geniş taban avantajı sunar. Alt çerçevesi tam çevrelenmiş olup yüksek mukavemet sağlar.',
    dimensions: '1200 x 1000 x 162 mm',
    weight: 'Yaklaşık 33 kg',
    staticCapacity: '4.500 kg',
    dynamicCapacity: '1.750 kg',
    rackCapacity: '1.250 kg',
    material: 'Sert Ağaç / Çam Kereste',
    standards: ['TSE Standartlarına Uygun', 'Geniş Taban Standardı'],
    features: [
      'Geniş yük dağılım yüzeyi',
      'Çevre çerçeveli alt taban tasarımı',
      'Yüksek seviyeli istiflemeye uygun',
      'Zorlu saha şartlarına dayanıklı yapı'
    ],
    useCases: [
      'Kimya ve hammadde torbalı yük taşımacılığı',
      'Otomotiv yan sanayi aksamları',
      'Ağır makine parçaları sevkiyatı'
    ],
    isPopular: false
  },
  {
    id: 'standart-80-120',
    slug: 'standart-ahsap-palet-80-120',
    name: 'Standart Ahşap Palet (80x120 cm)',
    category: 'standart',
    categoryName: 'Standart Palet',
    badge: 'Ekonomik & Dayanıklı',
    imageUrl: '/images/epal_euro_pallet.jpg',
    shortDescription: 'Yurt içi lojistik ve depolama süreçleri için maliyet avantajı sağlayan yüksek kaliteli standart palet.',
    fullDescription: 'ERDOĞAN PALET Standart Ahşap Palet serisi, kurumsal firmaların yurt içi dağıtım ağlarında en çok tercih ettiği ekonomik ve sağlam çözümdür.',
    dimensions: '800 x 1200 x 135 mm',
    weight: 'Yaklaşık 20 kg',
    staticCapacity: '3.000 kg',
    dynamicCapacity: '1.200 kg',
    rackCapacity: '800 kg',
    material: 'Endüstriyel Çam & Kavak Kombinasyonu',
    standards: ['TSE Standartlarına Uygun', 'Ekonomik Sınıf'],
    features: [
      'Yüksek fiyat/performans oranı',
      'Esnek tahta kalınlığı seçenekleri',
      'Transpalet dostu takoz yapısı',
      'Stoktan hızlı teslimat garantisi'
    ],
    useCases: [
      'Yurt içi zincir mağaza ve depo dağıtımı',
      'İnşaat malzemeleri ve seramik sevkiyatı',
      'Hafif ve orta tonajlı endüstriyel ambalajlar'
    ],
    isPopular: true
  },
  {
    id: 'cp-1',
    slug: 'cp-1-kimya-paleti',
    name: 'CP-1 Kimya Paleti (1000x1200 mm)',
    category: 'cp',
    categoryName: 'CP Palet',
    badge: 'Kimya Sektörü Standartı',
    imageUrl: '/images/cp_chemical_pallet.jpg',
    shortDescription: 'Avrupa Kimya Endüstrisi (APME) standartlarına uygun olarak tasarlanmış torbalı ve varilli yük paleti.',
    fullDescription: 'CP1 paletler, özellikle kimya ve hammadde endüstrisindeki torbalı ürünler, karton kutular ve varillerin güvenle taşınması için geliştirilmiştir. Alt taban tasarımı yükü homojen dağıtır.',
    dimensions: '1000 x 1200 x 138 mm',
    weight: 'Yaklaşık 23 kg',
    staticCapacity: '3.500 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'Kurutulmuş Çam Kereste',
    standards: ['APME / VCI Standartı', 'Kimya Sektörü Uyumlu'],
    features: [
      'Torbalı yüklerde yırtılmayı önleyen pürüzsüz kenarlar',
      'Özel dizilmiş üst tahta aralıkları',
      'Kimyasal maddelere karşı dirençli ahşap yapısı',
      'Konteyner içi optimum alan kullanımı'
    ],
    useCases: [
      'Plastik hammaddeleri ve polimer torbaları',
      'Boya ve kimyasal madde varilleri',
      'Gübre ve tarımsal kimyasal sevkiyatı'
    ],
    isPopular: true
  },
  {
    id: 'cp-3',
    slug: 'cp-3-kimya-paleti',
    name: 'CP-3 Kimya Paleti (1140x1140 mm)',
    category: 'cp',
    categoryName: 'CP Palet',
    badge: 'Konteyner Uyumlu',
    imageUrl: '/images/cp_chemical_pallet.jpg',
    shortDescription: '1140x1140 mm kare ölçüsüyle konteyner yüklemeleri için ideal CP palet.',
    fullDescription: 'CP-3 paletler konteyner taşımacılığında sıfır alan kaybı sağlamak amacıyla 1140 mm kare ölçüde üretilir. Variller, IBC tanklar ve dökme yükler için güvenli sabitleme imkanı verir.',
    dimensions: '1140 x 1140 x 138 mm',
    weight: 'Yaklaşık 26 kg',
    staticCapacity: '4.000 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'I. Sınıf İğne Yapraklı Ahşap',
    standards: ['APME Standartlı', 'Konteyner Uyumlu'],
    features: [
      'Konteyneri tabanına tam oturma',
      'IBC tank ve octabin yüklerine tam uyum',
      'Sağlam takoz blokları ile maksimum direnç'
    ],
    useCases: [
      'Lojistik konteyner yüklemeleri',
      'Sıvı ve dökme kimyasal depoları',
      'IBC dökme konteyner taşımacılığı'
    ],
    isPopular: false
  },
  {
    id: 'ikinci-el-palet',
    slug: 'ikinci-el-ahsap-palet',
    name: 'İkinci El Ahşap Palet',
    category: 'ikinci-el',
    categoryName: 'İkinci El Palet',
    badge: 'Ekonomik & Doğa Dostu',
    imageUrl: '/images/epal_euro_pallet.jpg',
    shortDescription: 'Kullanılmış ahşap palet alım ve satımı yapıyoruz. İhtiyaca uygun ikinci el palet çözümleri sunuyoruz.',
    fullDescription: 'ERDOĞAN PALET olarak kontrol edilmiş, sağlamlaştırılmış ve kullanıma hazır ikinci el ahşap palet alım satımı gerçekleştirmekteyiz. Bütçe dostu ve doğa dostu çözümlerimizle işletmenizin palet ihtiyacını karşılıyoruz.',
    dimensions: '80x120 / 100x120 cm Çeşitleri',
    weight: 'Ölçüye Bağlı (18 - 25 kg)',
    staticCapacity: '3.500 kg',
    dynamicCapacity: '1.200 kg',
    rackCapacity: '800 kg',
    material: 'Kontrol Edilmiş Ahşap Palet',
    standards: ['Kalite Kontrolü Yapılmış', 'Ekonomik Fiyat', 'Stoktan Teslim'],
    features: [
      'Hasarları onarılmış sağlam yapı',
      'Yüksek fiyat/performans avantajı',
      'Farklı ölçü ve tip seçenekleri',
      'Çevre ve bütçe dostu kullanım'
    ],
    useCases: [
      'Yurt içi nakliye ve depolama',
      'Tek kullanımlık veya sürekli yüklemeler',
      'Maliyet odaklı lojistik projeleri'
    ],
    isPopular: true
  },
  {
    id: 'ozel-olcu-palet',
    slug: 'ozel-olcu-ahsap-palet-uretimi',
    name: 'Müşteriye Özel Ölçü Ahşap Palet',
    category: 'ozel',
    categoryName: 'Özel Ölçü Palet',
    badge: 'Özel İmalat',
    imageUrl: '/images/heavy_duty_pallet.jpg',
    shortDescription: 'Ürününüzün en, boy, yükseklik ve ağırlığına göre tasarlanan özel imalat ahşap paletler.',
    fullDescription: 'Standart ölçülere sığmayan tonajlı makineler, uzun borular veya hassas ekipmanlar için ERDOĞAN PALET tarafından özel paletler tasarlanır ve imal edilir. Dayanım hesapları yapılarak üretilmektedir.',
    dimensions: 'Projeye Özel (Örn: 150x200 cm, 80x240 cm vb.)',
    weight: 'Tasarıma Göre Değişken',
    staticCapacity: '10.000 kg+ Kadar',
    dynamicCapacity: '5.000 kg+ Kadar',
    rackCapacity: '2.500 kg+ Kadar',
    material: 'Gürgen, Meşe, Çam Kombinasyonu',
    standards: ['Müşteri Şartnamesine Uygun', 'Özel Proje İmalatı'],
    features: [
      'İhtiyaca özel ölçü ve tasarım desteği',
      'Ağır sanayi parçaları için cıvatalı ve destekli yapı',
      'Vinç ve özel kaldırma ekipmanlarına uygun bağlantı noktaları',
      'Prototip üretimi ve saha test imkanı'
    ],
    useCases: [
      'Jeneratör, trafo ve ağır makine imalatçıları',
      'Alüminyum ve çelik profil üreticileri',
      'Endüstriyel yedek parça üreticileri'
    ],
    isPopular: true
  },
  {
    id: 'agir-yuk-paleti',
    slug: 'agir-yuk-endustriyel-ahsap-palet',
    name: 'Ağır Yük Endüstriyel Palet (Ultra Dayanıklı)',
    category: 'agir-yuk',
    categoryName: 'Ağır Yük Paleti',
    badge: 'Ultra Güçlendirilmiş',
    imageUrl: '/images/heavy_duty_pallet.jpg',
    shortDescription: 'Maksimum tonajlı sanayi yükleri, metal ve taş bloklar için yüksek taşıma kapasiteli özel palet.',
    fullDescription: 'Endüstriyel tesisler ve ağır sanayi için tasarlanan Ağır Yük Paleti, kalınlaştırılmış üst tahtalar ve masif ahşap takozlar ile takviye edilmiştir. Ağır yüklerin altında sehim (sarkma) yapmaz.',
    dimensions: '1000 x 1200 x 165 mm',
    weight: 'Yaklaşık 38 kg',
    staticCapacity: '6.000 kg',
    dynamicCapacity: '2.500 kg',
    rackCapacity: '1.800 kg',
    material: 'Ekstra Kalınlaştırılmış Sert Ahşap (Gürgen/Sert Çam)',
    standards: ['Ağır Sanayi Tolerans Standartları', 'Ultra Dayanıklı'],
    features: [
      'Kalınlaştırılmış masif taşıyıcı ızgaralar',
      'Destek vidaları ve takviye kuşakları',
      'Maksimum darbe emilimi ve devrilmezlik',
      'Zorlu şantiye ve açık saha şartlarına tam direnç'
    ],
    useCases: [
      'Mermer, doğal taş ve seramik paletlemesi',
      'Döküm ve çelik sanayi ürünleri',
      'Ağır motor ve endüstriyel redüktörler'
    ],
    isPopular: false
  }
];
