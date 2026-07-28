<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Agent Çalışma Kuralları & Standartları (AGENTS.md)

Bu dosya, bu workspace içerisindeki tüm AI Agent oturumları için geçerli ana yönlendirme ve kural belgesidir. Tüm subagent'lar ve AI sistemleri aşağıdaki ilkelere istisnasız uymakla yükümlüdür.

---

## 🎯 Temel İlkeler ve Kurallar

1. **Dil Standardı:**
   - Tüm yanıtlar, dokümantasyon, raporlar ve kullanıcı iletişimleri **Türkçe** olacaktır.
   - Kod içi yorumlar ve commit mesajları açık, anlaşılır ve Türkçe/İngilizce standartlarına uygun olmalıdır.

2. **Teknik Doğruluk:**
   - Yanıtlar ve kodlar varsayımlara değil, doğrulanmış teknik kanıtlara ve loglara dayanmalıdır.
   - Kod blokları eksiksiz, çalışan ve tip güvenliği (TypeScript) gözetilerek yazılmalıdır.

3. **Production-Ready Kod Üretimi:**
   - Dummy/mock kodlar veya basite kaçılmış çözümler yerine canlı ortama (production) hazır, modüler, test edilebilir ve sürdürülebilir kod üretilir.
   - Hata yönetimi (Error handling), kenar durumlar (edge cases) ve girdi doğrulamaları (input validation) eksiksiz yapılandırılır.

4. **Kayıpsız Sadelik (KISS & DRY):**
   - Gereksiz karmaşıklıktan ve aşırı mühendislikten (over-engineering) kaçınılır.
   - Yalnızca ihtiyaç duyulan mimari desenler kullanılır.

5. **Modern En İyi Uygulamalar (Best Practices):**
   - Güncel framework, kütüphane ve standartlar (Next.js App Router, Tailwind CSS, TypeScript, ES6+) kullanılır.
   - Kod okunabilirliği ve düzeni üst seviyede tutulur.

6. **Güvenlik (Security First):**
   - Güvenlik asla ihmal edilmez. OWASP ilkeleri gözetilir.
   - Hassas veriler (API anahtarları, şifreler, env değişkenleri) kesinlikle koda hardcode edilmez, `.env` dosyalarında tutulur.
   - XSS, CSRF, SQL Injection vb. zafiyetlere karşı önlemler alınır.

7. **Performans ve Optimizasyon:**
   - Sayfa yükleme süreleri, bellek kullanımı, veritabanı/API sorguları ve paket boyutları optimize edilir.
   - Temel SEO ve Core Web Vitals metrikleri dikkate alınır.

8. **Net ve Kısa Açıklamalar:**
   - İletişim uzatılmadan, öz ve eyleme dönüştürülebilir ifadelerle gerçekleştirilir.
   - Yapılan değişiklikler ve alınan kararlar gerekçeleriyle özetlenir.

9. **Önce Planla, Sonra Uygula:**
   - Karmaşık görevlerde doğrudan koda başlanmaz. Önce strateji ve adımlar belirlenir, ardından uygulamaya geçilir.

10. **Büyük Görevleri Alt Görevlere Böl:**
    - Büyük projeler ve iş süreçleri yönetilebilir, küçük ve test edilebilir alt görevlere ayrılır.

11. **Risk Değerlendirmesi:**
    - Yapılacak değişikliklerin sistem geneline olası etkileri ve riskleri her zaman önceden değerlendirilir.

12. **Alternatif Çözüm Önerileri:**
    - Karşılaşılan problemlerde veya mimari kararlarda tek bir yola bağımlı kalınmaz; avantaj ve dezavantajlarıyla alternatif çözümler sunulur.

---

## 🛠 Uzmanlık Alanları (Skills)

Bu workspace aşağıdaki çalışma alanlarını kapsayan entegre skill sistemine sahiptir:

- 🔬 **Research (Araştırma):** Kaynak bulma, doğrulama, karşılaştırma, risk analizi.
- 📐 **Planning (Planlama):** Yol haritası, sprint planı, görev kırılımı, karar ağacı.
- 💻 **Coding (Yazılım Geliştirme):** Mimari, clean code, refactoring, test, performans.
- 🐛 **Debugging (Hata Ayıklama):** Log analizi, kök neden tespiti, izolasyon, çözüm.
- 🔍 **SEO (Arama Motoru Optimizasyonu):** Teknik SEO, iç SEO, yapısal veri, site haritası.
- ✍️ **Content (İçerik Üretimi):** Teknik yazı, pazarlama metni, blog, sosyal medya.
- 💼 **Business (İş Geliştirme):** Teklif hazırlama, maliyet analizi, rakip analizi, iş planı.
- 📚 **Documentation (Dokümantasyon):** Teknik dokümanlar, API rehberleri, kullanıcı kılavuzları.
- ⚙️ **Automation (Otomasyon):** CI/CD, scriptler, workflowlar, entegrasyonlar.
