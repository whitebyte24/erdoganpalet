export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'euro' | 'standart' | 'cp' | 'ihracat' | 'ozel' | 'agir-yuk';
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
  { id: 'ihracat', name: 'İhracat Paleti' },
  { id: 'ozel', name: 'Özel Ölçü Palet' },
  { id: 'agir-yuk', name: 'Ağır Yük Paleti' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'epal-1',
    slug: 'epal-1-euro-palet',
    name: 'EPAL 1 Euro Palet (800x1200 mm)',
    category: 'euro',
    categoryName: 'Euro Palet',
    badge: 'En Çok Tercih Edilen',
    imageUrl: '/images/epal_euro_pallet.jpg',
    shortDescription: 'Avrupa standartlarında EPAL sertifikalı, yüksek dayanımlı ve uluslararası taşımacılığa tam uygun standart euro palet.',
    fullDescription: 'ERDOĞAN PALET güvencesiyle üretilen EPAL 1 Euro Palet, Avrupa Palet Birliği (EPAL) standartlarına %100 uygun olarak birinci sınıf çam ve göknar kerestelerinden imal edilir. İhracat ve yurt içi lojistik operasyonlarında en yüksek güvenlik ve taşıma kapasitesini sunar. Otomatik depolama sistemleri ve konveyör hatlarıyla tam uyumludur.',
    dimensions: '800 x 1200 x 144 mm',
    weight: 'Yaklaşık 25 kg',
    staticCapacity: '4.000 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'Birinci Sınıf Çam / Göknar Kereste',
    standards: ['EPAL Sertifikalı', 'ISPM-15 Isıl İşlemli', 'UIC 435-2 Standardı', 'IPPC Damgalı'],
    features: [
      'Lisanslı EPAL çivileri ile ekstra mukavemet',
      'Kurutulmuş fırınlanmış ahşap kullanımı (Nem oranı <%22)',
      'Dört yönlü forklift ve transpalet girişi',
      'Konveyör ve otomatik depolama robotlarına %100 uyum',
      'ISPM-15 standardına uygun olarak phytosanitary ısıl işlem'
    ],
    useCases: [
      'Avrupa ülkelerine yapılan ihracat yüklemeleri',
      'Gıda, ilaç ve hızlı tüketim mamulleri lojistiği',
      'Otomatik yüksek raf depolama sistemleri',
      'Perakende ve süpermarket tedarik zinciri'
    ],
    isPopular: true
  },
  {
    id: 'epal-2',
    slug: 'epal-2-euro-palet',
    name: 'EPAL 2 Euro Palet (1200x1000 mm)',
    category: 'euro',
    categoryName: 'Euro Palet',
    badge: 'Geniş Yüzeyli',
    imageUrl: '/images/epal_euro_pallet.jpg',
    shortDescription: '1200x1000 mm geniş taban ölçüsüyle ağır sanayi ve dökme yükler için tasarlanmış EPAL lisanslı palet.',
    fullDescription: 'EPAL 2 Euro paletler, özellikle kimya, dökme malzeme ve ağır sanayi ürünlerinin taşınmasında geniş taban avantajı sunar. Alt çerçevesi tam çevrelenmiş olup yüksek mukavemet sağlar. Tüm uluslararası sevkiyat standartlarına uygundur.',
    dimensions: '1200 x 1000 x 162 mm',
    weight: 'Yaklaşık 33 kg',
    staticCapacity: '4.500 kg',
    dynamicCapacity: '1.750 kg',
    rackCapacity: '1.250 kg',
    material: 'Sert Ağaç / Çam Kereste',
    standards: ['EPAL Sertifikalı', 'ISPM-15 Standartlı', 'IPPC Damgalı'],
    features: [
      'Geniş yük dağılım yüzeyi',
      'Çevre çerçeveli alt alt taban tasarımı',
      'Yüksek seviyeli istiflemeye uygun',
      'Zorlu iklim şartlarına dayanıklı emprenye seçeneği'
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
    fullDescription: 'ERDOĞAN PALET Standart Ahşap Palet serisi, kurumsal firmaların yurt içi dağıtım ağlarında en çok tercih ettiği ekonomik ve sağlam çözümdür. İsteğe bağlı olarak ısıl işlem uygulanabilir ve nem seviyesi ayarlanabilir.',
    dimensions: '800 x 1200 x 135 mm',
    weight: 'Yaklaşık 20 kg',
    staticCapacity: '3.000 kg',
    dynamicCapacity: '1.200 kg',
    rackCapacity: '800 kg',
    material: 'Endüstriyel Çam & Kavak Kombinasyonu',
    standards: ['TSE Standartlarına Uygun', 'İsteğe Bağlı ISPM-15'],
    features: [
      'Yüksek fiyat/performans oranı',
      'Esnek tahta kalınlığı seçenekleri',
      'Transpalet dostu pahlı takoz yapısı',
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
    fullDescription: 'CP1 paletler, özellikle kimya ve hammadde endüstrisindeki torbalı ürünler, karton kutular ve varillerin güvenle taşınması için geliştirilmiştir. Alt taban tasarımı yükü homojen dağıtarak devrilme riskini minimuma indirir.',
    dimensions: '1000 x 1200 x 138 mm',
    weight: 'Yaklaşık 23 kg',
    staticCapacity: '3.500 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'Kurutulmuş Çam Kereste',
    standards: ['APME / VCI Standartı', 'ISPM-15 Onaylı', 'IPPC Damgalı'],
    features: [
      'Torbalı yüklerde yırtılmayı önleyen pürüzsüz pahlı kenarlar',
      'Özel dizilmiş üst tahta aralıkları',
      'Kimyasal maddelere karşı dirençli emprenyeleme seçeneği',
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
    shortDescription: '1140x1140 mm kare ölçüsüyle 20 ve 40 feet deniz konteyner yüklemeleri için ideal CP palet.',
    fullDescription: 'CP-3 paletler deniz aşırı konteyner taşımacılığında sıfır alan kaybı sağlamak amacıyla 1140 mm kare ölçüde üretilir. Variller, IBC tanklar ve büyük boy dökme yükler için benzersiz bir sabitleme imkanı verir.',
    dimensions: '1140 x 1140 x 138 mm',
    weight: 'Yaklaşık 26 kg',
    staticCapacity: '4.000 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'I. Sınıf İğne Yapraklı Ahşap',
    standards: ['APME Standartlı', 'ISPM-15 Phytosanitary'],
    features: [
      'Deniz konteyneri tabanına milimetrik oturma',
      'IBC tank ve octabin yüklerine tam uyum',
      'Sağlam takoz blokları ile maksimum burulma direnci'
    ],
    useCases: [
      'Deniz yolu ihracat konteyner yüklemeleri',
      'Sıvı ve dökme kimyasal depoları',
      'IBC dökme konteyner taşımacılığı'
    ],
    isPopular: false
  },
  {
    id: 'ihracat-ispm15',
    slug: 'ihracat-ispm15-ahsap-palet',
    name: 'ISPM-15 İhracat Paleti (Özel Sertifikalı)',
    category: 'ihracat',
    categoryName: 'İhracat Paleti',
    badge: 'Gümrük Garantili',
    imageUrl: '/images/ispm15_heat_treatment.jpg',
    shortDescription: 'Tüm dünya gümrüklerinde sorunsuz geçiş sağlayan, %100 fırınlanmış ve ISPM-15 ısıl işlem damgalı ihracat paletleri.',
    fullDescription: 'ERDOĞAN PALET İhracat Serisi, uluslararası karantina ve bitki sağlığı (FAO ISPM-15) kurallarına %100 uyumludur. Özel fırınlarımızda ahşabın çekirdek sıcaklığı minimum 56°C sıcaklıkta 30 dakika boyunca tutularak zararlılardan tamamen arındırılır ve uluslararası sertifikasıyla teslim edilir.',
    dimensions: 'İsteğe Bağlı (80x120 / 100x120 / 110x130 cm)',
    weight: 'Ölçüye Bağlı (18 - 28 kg)',
    staticCapacity: '3.500 kg',
    dynamicCapacity: '1.500 kg',
    rackCapacity: '1.000 kg',
    material: 'Fırınlanmış İthal/Yerli Çam',
    standards: ['FAO ISPM-15 Sertifikalı', 'IPPC Resmi Damgalı', 'Nem Oranı <%18'],
    features: [
      'Tüm gümrük kapılarında sıfır takılma riski',
      'Mantar, böcek ve küfe karşı korumalı fırınlama',
      'Nem ölçüm raporu ile teslimat',
      'Şirketinize özel logo ve damga basım imkanı'
    ],
    useCases: [
      'Amerika, Asya ve Avrupa deniz/hava ihracatları',
      'Hassas elektronik ve makine ihracatı',
      'Gıda ve kozmetik ürün dış ticareti'
    ],
    isPopular: true
  },
  {
    id: 'ozel-olcu-palet',
    slug: 'ozel-olcu-ahsap-palet-uretimi',
    name: 'Müşteriye Özel Ölçü Ahşap Palet',
    category: 'ozel',
    categoryName: 'Özel Ölçü Palet',
    badge: 'Terzi Usulü Mühendislik',
    imageUrl: '/images/heavy_duty_pallet.jpg',
    shortDescription: 'Ürününüzün en, boy, yükseklik ve ağırlığına göre CAD ortamında tasarlanan özel imalat ahşap paletler.',
    fullDescription: 'Standart ölçülere sığmayan tonajlı makineler, uzun borular veya hassas ekipmanlar için ERDOĞAN PALET mühendisleri tarafından milimetrik hassasiyette özel paletler tasarlanır ve imal edilir. Statik ve dinamik dayanım hesapları yapılarak üretilmektedir.',
    dimensions: 'Projeye Özel (Örn: 150x200 cm, 80x240 cm vb.)',
    weight: 'Tasarıma Göre Değişken',
    staticCapacity: '10.000 kg+ Kadar',
    dynamicCapacity: '5.000 kg+ Kadar',
    rackCapacity: '2.500 kg+ Kadar',
    material: 'Gürgen, Meşe, Çam Kombinasyonu',
    standards: ['Müşteri Şartnamesine Uygun', 'ISPM-15 Opsiyonel'],
    features: [
      '3D CAD çizimi ve yük analiz desteği',
      'Ağır sanayi parçaları için cıvatalı ve destekli yapı',
      'Vinç ve özel kaldırma ekipmanlarına uygun bağlantı noktaları',
      'Prototip üretimi ve saha test imkanı'
    ],
    useCases: [
      'Jeneratör, trafo ve ağır makine imalatçıları',
      'Alüminyum ve çelik profil üreticileri',
      'Havacılık ve savunma sanayi parçaları'
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
    shortDescription: 'Maksimum tonajlı sanayi yükleri, metal ve taş bloklar için 5 tona kadar taşıma kapasiteli özel palet.',
    fullDescription: 'Endüstriyel tesisler ve ağır sanayi için tasarlanan Ağır Yük Paleti, kalınlaştırılmış üst tahtalar, masif ahşap takozlar ve çelik destek rodları ile takviye edilmiştir. Ağır yüklerin altında sehim (sarkma) yapmaz.',
    dimensions: '1000 x 1200 x 165 mm',
    weight: 'Yaklaşık 38 kg',
    staticCapacity: '6.000 kg',
    dynamicCapacity: '2.500 kg',
    rackCapacity: '1.800 kg',
    material: 'Ekstra Kalınlaştırılmış Sert Ahşap (Gürgen/Sert Çam)',
    standards: ['Ağır Sanayi Tolerans Standartları', 'ISPM-15'],
    features: [
      '35mm+ kalınlığında masif taşıyıcı ızgaralar',
      'Çelik destek vidaları ve takviye kuşakları',
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

