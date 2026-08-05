# Erdoğan Palet - cPanel + CloudLinux + GitHub Production Deployment Rehberi

Bu doküman, **ERDOĞAN PALET** Next.js (Node.js) projesinin cPanel 136 + CloudLinux Phusion Passenger ortamında **özel (Private) GitHub Deposu (Git Deployment)** kullanılarak canlıya alınması ve güncellenmesi için hazırlanmıştır.

---

## 📋 Değişiklik ve Uyumluluk Özet Bilgisi

1. **Webpack Kullanımı**: Next.js 16 varsayılan olarak Turbopack kullanabilir. CloudLinux symlink ve UTF-8 path kısıtlamalarını önlemek için `package.json` script'inde `"build": "next build --webpack"` tanımlanmış ve Webpack kullanımı zorunlu kılınmıştır.
2. **Phusion Passenger Uyumluluğu**: `server.js` dosyası `next({ dev: false, dir: __dirname })` ve socket/port dinleyici hatalarını ele alacak şekilde Phusion Passenger standartlarına tam uyumlu hale getirilmiştir.
3. **In-Situ Git Deployment**: `next.config.ts` içerisindeki `output: "standalone"` ayarı kaldırılmış, CloudLinux bağımlılık symlink çakışmaları engellenmiştir. Sunucu üzerinde `git pull` -> `npm install` -> `npm run build` akışı garanti edilmiştir.
4. **Resim Optimizasyonu**: CloudLinux LVE kaynak limitlerini (CPU/RAM) korumak amacıyla `images.unoptimized: true` olarak yapılandırılmıştır.

---

## 🛠️ 1. Yerel Bilgisayarda Git Deposu Hazırlığı (Local Git Setup)

Projenizi özel (private) GitHub reposuna ilk kez göndermek için aşağıdaki komutları sırasıyla çalıştırın:

```bash
# Git deposunu başlatın (eğer henüz başlatılmadıysa)
git init

# Tüm kaynak dosyaları sahneye ekleyin
git add .

# İlk production-ready commit'i oluşturun
git commit -m "feat: prepare project for cPanel CloudLinux Phusion Passenger deployment"

# Uzak GitHub private reposunu ekleyin (örnek URL)
git remote add origin https://github.com/whitebyte24/erdoganpalet.git

# Ana dala push edin
git push -u origin main
```

---

## ⚙️ 2. cPanel "Setup Node.js App" Konfigürasyonu

cPanel paneline giriş yapın ve **Setup Node.js App** (veya Node.js Selector) arayüzüne gelerek **Create Application** butonuna tıklayın.

### Uygulama Ayarları:

| Parametre | Değer | Açıklama |
| :--- | :--- | :--- |
| **Node.js Version** | `20.x` (veya `20.18.x` / Kararlı LTS) | En güncel Node.js LTS sürümü |
| **Application Mode** | `Production` | Üretim ortamı çalışma modu |
| **Application Root** | `erdoganpalet` | Sunucudaki proje kök dizini (`/home/kullanici/erdoganpalet`) |
| **Application URL** | `erdoganpalet.com.tr` (veya `www.erdoganpalet.com.tr`) | Sitenin yayınlanacağı alan adı |
| **Application Startup File** | `server.js` | Phusion Passenger ana giriş dosyası |

---

## 🔑 3. cPanel Environment Variables (Ortam Değişkenleri)

cPanel Node.js App ekranındaki **Environment Variables** bölümünden aşağıdaki değişkenleri tanımlayın:

| Değişken Adı | Örnek Değer | Açıklama |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Üretim modu |
| `PORT` | `3000` | (cPanel Passenger otomatik yönetir) |
| `NEXT_PUBLIC_APP_URL` | `https://www.erdoganpalet.com.tr` | Uygulama URL adresi |
| `SMTP_HOST` | `mail.erdoganpalet.com.tr` | cPanel SMTP Sunucu adresi |
| `SMTP_PORT` | `465` | SSL SMTP portu |
| `SMTP_USER` | `info@erdoganpalet.com.tr` | SMTP e-posta adresi |
| `SMTP_PASS` | `GuvenliSifreniz123!` | SMTP e-posta şifresi |
| `SMTP_FROM` | `info@erdoganpalet.com.tr` | Gönderen e-posta adresi |
| `CONTACT_RECEIVER_EMAIL` | `info@erdoganpalet.com.tr` | Form bildirimlerinin düşeceği adres |

---

## 🚀 4. Sunucuda İlk Dağıtım (First Time Deployment via SSH / Terminal)

cPanel **Terminal** arayüzüne veya SSH ile sunucuya bağlanarak aşağıdaki adımları uygulayın:

```bash
# 1. Ana dizininize gidin
cd ~

# 2. Private GitHub reposunu klonlayın (Personal Access Token veya Deploy Key kullanarak)
git clone https://github.com/whitebyte24/erdoganpalet.git erdoganpalet

# 3. Proje dizinine girin
cd erdoganpalet

# 4. cPanel Node.js sanal ortamını (virtualenv) aktif edin
# (Bu komut cPanel Setup Node.js App ekranının en üstünde size özel verilir)
source /home/KULLANICI_ADI/nodevenv/erdoganpalet/20/bin/activate && cd /home/KULLANICI_ADI/erdoganpalet

# 5. Bağımlılıkları yükleyin
npm install

# 6. Webpack ile derlemeyi alın (Turbopack kullanılmaz)
npm run build
```

cPanel **Setup Node.js App** arayüzüne dönün ve **Restart Application** butonuna basarak uygulamayı başlatın.

---

## 🔄 5. Gelecekteki Güncellemeler (Future Update Workflow)

Yerel ortamda kod değişikliği yapıp GitHub'a push ettikten sonra, sunucudaki güncellemeyi tek satırlık komutlarla tamamlayabilirsiniz:

```bash
# 1. cPanel sanal ortamına girin ve proje dizinine geçin
source /home/KULLANICI_ADI/nodevenv/erdoganpalet/20/bin/activate && cd /home/KULLANICI_ADI/erdoganpalet

# 2. Değişiklikleri GitHub'dan çekin
git pull

# 3. Yeni bir kütüphane eklendiyse yükleyin (ihtiyaç halinde)
npm install

# 4. Webpack ile yeniden derleyin
npm run build
```

cPanel arayüzünden **Restart Application** butonuna basarak (veya `tmp/restart.txt` dosyasına `touch tmp/restart.txt` yaparak) yeni sürümü yayına alın.

---

## 🧪 6. Dağıtım Sonrası Doğrulama Listesi (Post-Deployment Checklist)

- [ ] **HTTP 200 OK**: Anasayfa (`https://www.erdoganpalet.com.tr`) sorunsuz açılıyor.
- [ ] **Node.js Process**: `server.js` Phusion Passenger altında aktif çalışıyor.
- [ ] **İletişim & Teklif Formu**: `/iletisim` ve `/teklif-al` sayfalarında form gönderimi ve SMTP e-posta ulaşıyor.
- [ ] **Dinamik Rotalar**: `/urunler/epal-1-euro-palet` ve `/urunler` sayfaları hatasız render oluyor.
- [ ] **SEO Assets**: `/sitemap.xml` ve `/robots.txt` erişilebilir durumda.
- [ ] **Güvenlik**: `.env` dosyası repoda yer almıyor, hassas veriler yalnızca cPanel Environment Variables alanında tanımlı.
