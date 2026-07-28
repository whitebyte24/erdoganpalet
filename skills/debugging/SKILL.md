---
name: debugging
description: Hata tespiti, log inceleme, kök neden analizi ve hata giderme metodolojisini kapsar.
---

# 🐛 Hata Ayıklama & Teşhis Yönergesi

## 🔍 Hata Çözüm Adımları

1. **Log Toplama ve İnceleme:**
   - Tam stack trace ve hata kodunu incele.
   - Hataya neden olan girdi parametrelerini doğrula.

2. **Kök Neden Analizi (5 Why Tekniği):**
   - *Problem:* Uygulama çöktü.
   - *Neden 1:* `null` referansı dereference edildi.
   - *Neden 2:* API yanıtı boş döndü.
   - *Neden 3:* Istek zaman aşımına uğradı.
   - *Neden 4:* Ağ bağlantı limiti aşıldı.
   - *Neden 5 (Kök Neden):* Bağlantı havuzu (connection pool) düzgün kapatılmadı.

3. **İzolasyon & Test:**
   - Hatayı tetikleyen ortamı izole et.
   - Hatayı doğrulayan başarısız bir test yaz.

4. **Kalıcı Onarım & Doğrulama:**
   - Hatanın kök nedenini düzelt.
   - Yazılan testin başarıyla geçtiğini doğrula.
