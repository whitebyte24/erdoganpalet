# Güzel Hosting CloudLinux Node.js Application Deployment Rehberi

Bu doküman, **ERDOĞAN PALET** Next.js 16 projesinin Güzel Hosting cPanel üzerindeki **Setup Node.js App** (Phusion Passenger / CloudLinux NodeJS Selector) ortamında sorunsuz çalışması için hazırlanmıştır.

---

## ⚙️ cPanel Node.js App Konfigürasyon Parametreleri

Güzel Hosting cPanel paneline giriş yapıp **"Setup Node.js App"** menüsünden yeni bir uygulama oluştururken aşağıdaki değerleri giriniz:

| Konfigürasyon Alanı | Girilecek Değer | Açıklama |
| :--- | :--- | :--- |
| **Node.js version** | `20.x` *(veya `18.x`)* | En güncel ve kararlı Node.js LTS sürümü |
| **Application mode** | `Production` | Canlı çalışma modu |
| **Application root** | `erdoganpalet` | Proje dosyalarının cPanel üzerindeki klasör yolu |
| **Application URL** | `erdoganpalet.com.tr` | Sitenin yayınlanacağı alan adı |
| **Application startup file** | `server.js` | Phusion Passenger çalıştırma dosyası |

---

## 📦 Dağıtım Yöntemi (Önerilen: Yerelde Standalone Build & Sunucuya Yükleme)

CloudLinux LVE NPROC (süreç) ve RAM limitlerine takılmamak için derleme yerelde alınıp bağımsız paket sunucuya yüklenir:

1. **Yerelde Standalone Build Alma:**
   - Kendi bilgisayarınızdaki terminalde `npm run build` komutunu çalıştırın.
   - Bu komut `.next/standalone` klasörü içerisinde sunucuda doğrudan çalışmaya hazır bağımsız bir paket üretir.

2. **Gerekli Klasörleri Birleştirme:**
   - Bilgisayarınızdaki `.next/standalone` klasörünün içine girin.
   - Projenizdeki `public` klasörünü kopyalayıp `.next/standalone/public` içine yapıştırın.
   - Projenizdeki `.next/static` klasörünü kopyalayıp `.next/standalone/.next/static` içine yapıştırın.

3. **Sunucuya Yükleme:**
   - `.next/standalone` klasörünün içindeki tüm dosyaları bir `.zip` dosyası haline getirin.
   - cPanel **File Manager (Dosya Yöneticisi)** ile `Application Root` olarak belirlediğiniz klasöre (`/home/kullaniciadi/erdoganpalet`) yükleyin ve zipten çıkarın.

4. **cPanel Node.js App Başlatma:**
   - cPanel **Setup Node.js App** arayüzüne gelin.
   - **"Restart Application"** butonuna basarak sunucuyu aktif hale getirin.

---

## 🔑 Environment Variables (Ortam Değişkenleri)

cPanel Node.js App arayüzünde **"Environment variables"** bölümünden aşağıdaki değişkenleri ekleyiniz:

| Değişken Adı | Değer | Açıklama |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Üretim ortamı modu |
| `PORT` | `3000` *(cPanel otomatik yönetir)* | Çalışma portu |
| `NEXT_PUBLIC_APP_URL` | `https://www.erdoganpalet.com.tr` | Uygulama ana web adresi |
| `SMTP_HOST` | `mail.erdoganpalet.com.tr` | E-posta sunucu adresi |
| `SMTP_PORT` | `465` | E-posta portu |
| `SMTP_USER` | `info@erdoganpalet.com.tr` | E-posta kullanıcı adı |
| `SMTP_PASS` | `Sifreniz` | E-posta şifresi |

---

## 🧪 Post-Deployment Test Listesi

Dağıtım tamamlandıktan sonra sitenin tüm fonksiyonlarının sorunsuz çalıştığını doğrulamak için aşağıdaki test senaryolarını uygulayın:

- [ ] **Anasayfa Yüklenmesi:** `https://www.erdoganpalet.com.tr` adresine girildiğinde sayfanın hızlı ve hatasız açıldığını kontrol et.
- [ ] **İletişim & Teklif Formu:** Form doldurup göndererek e-postanın ulaştığını ve API yanıtının geldiğini kontrol et.
- [ ] **Görseller & Logo:** Tüm görsellerin sorunsuz geldiğini kontrol et.
- [ ] **Dinamik Ürün Detay Sayfaları:** `/urunler/epal-1-euro-palet` gibi detay sayfalarının sorunsuz render edildiğini test et.
