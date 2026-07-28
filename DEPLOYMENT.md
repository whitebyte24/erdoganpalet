# Güzel Hosting cPanel Node.js Application Deployment Rehberi

Bu doküman, **ERDOĞAN PALET** Next.js 16 projesinin Güzel Hosting cPanel üzerindeki **Setup Node.js App** (Phusion Passenger) özelliği kullanılarak production ortamına canlıya alınması için hazırlanmıştır.

---

## ⚙️ cPanel Node.js App Konfigürasyon Parametreleri

Güzel Hosting cPanel paneline giriş yapıp **"Setup Node.js App"** menüsünden yeni bir uygulama oluştururken aşağıdaki değerleri giriniz:

| Konfigürasyon Alanı | Girilecek Değer | Açıklama |
| :--- | :--- | :--- |
| **Node.js version** | `20.x` *(veya `18.x`)* | En güncel ve kararlı Node.js LTS sürümü |
| **Application mode** | `Production` | Canlı çalışma modu |
| **Application root** | `erdoganpalet` *(veya `public_html/erdoganpalet`)* | Proje dosyalarının cPanel üzerindeki klasör yolu |
| **Application URL** | `erdoganpalet.com.tr` *(veya `www.erdoganpalet.com.tr`)* | Sitenin yayınlanacağı alan adı |
| **Application startup file** | `server.js` | Phusion Passenger çalıştırma dosyası |

---

## 🛠️ Derleme ve Çalıştırma Komutları

| Komut Türü | Komut | Açıklama |
| :--- | :--- | :--- |
| **Bağımlılık Kurulumu** | `npm install` | Gerekli paketlerin yüklenmesi |
| **Build Command** | `npm run build` | Next.js üretken derleme (Production Build) |
| **Start Command** | `npm start` *(veya `node server.js`)* | Canlı sunucuyu başlatma |

---

## 🔑 Environment Variables (Ortam Değişkenleri)

cPanel Node.js App arayüzünde **"Environment variables"** bölümünden aşağıdaki değişkenleri ekleyiniz:

| Değişken Adı | Değer | Açıklama |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Üretim ortamı modu |
| `PORT` | `3000` *(cPanel otomatik yönetir)* | Çalışma portu |
| `NEXT_PUBLIC_APP_URL` | `https://www.erdoganpalet.com.tr` | Uygulama ana web adresi |

---

## 📦 cPanel Dağıtım Adımları (Step-by-Step Deployment)

1. **Dosyaları Sunucuya Yükleme:**
   - Proje klasöründeki tüm dosyaları (`.next`, `node_modules` ve `out` HARIÇ) bir `.zip` dosyası haline getirin.
   - cPanel **File Manager (Dosya Yöneticisi)** ile `Application Root` olarak belirlediğiniz klasöre (`/home/kullaniciadi/erdoganpalet`) yükleyin ve zipten çıkarın.

2. **Node.js Uygulamasını Oluşturma:**
   - cPanel'de **Setup Node.js App** simgesine tıklayın.
   - **Create Application** butonuna basın.
   - Yukarıdaki tabloda yer alan ayarları (Node.js 20.x, Production, `server.js` vb.) eksiksiz doldurun ve **Create** butonuna tıklayın.

3. **Bağımlılıkları Yükleme & Build Alma:**
   - Uygulama detay sayfasında **"Run NPM Install"** butonuna tıklayın.
   - Alternatif olarak sayfanın üstünde verilen SSH/Virtualenv terminal komutunu kopyalayıp cPanel Terminal ekranında çalıştırın.
   - Terminalde `npm run build` komutunu çalıştırarak `.next` klasörünün oluşturulmasını sağlayın.

4. **Uygulamayı Yeniden Başlatma:**
   - cPanel Node.js App arayüzündeki **"Restart Application"** butonuna basarak sunucuyu aktif hale getirin.

---

## 🧪 Post-Deployment Test Listesi (Canlı Ortam Doğrulama)

Dağıtım tamamlandıktan sonra sitenin tüm fonksiyonlarının sorunsuz çalıştığını doğrulamak için aşağıdaki test senaryolarını uygulayın:

- [ ] **Anasayfa Yüklenmesi:** `https://www.erdoganpalet.com.tr` adresine girildiğinde sayfanın hızlı ve hatasız açıldığını kontrol et.
- [ ] **Logo ve Görseller:** Header ve Footer alanlarındaki marka logosunun ve ürün resimlerinin net ve şeffaf zeminli yüklendiğini doğrula.
- [ ] **Favicon Testi:** Tarayıcı sekmesinde ve mobil kısayolda marka ikonunun göründüğünü kontrol et.
- [ ] **SEO & Rotalar:**
  - `https://www.erdoganpalet.com.tr/sitemap.xml` adresinin XML formatında açıldığını doğrula.
  - `https://www.erdoganpalet.com.tr/robots.txt` dosyasının erişilebilir olduğunu doğrula.
  - `https://www.erdoganpalet.com.tr/manifest.webmanifest` dosyasının açıldığını doğrula.
- [ ] **Dinamik Ürün Detay Sayfaları:** `/urunler/epal-1-euro-palet` gibi detay sayfalarının sorunsuz render edildiğini test et.
- [ ] **404 Sayfası Testi:** Rastgele geçersiz bir URL (`/rastgele-sayfa`) girerek özel marka 404 sayfasının geldiğini doğrula.
- [ ] **Mobil Responsive Test:** Akıllı telefon ve tablet görünümünde navbar ve hamburger menünün sorunsuz çalıştığını kontrol et.
