# 🐛 Debugging Skill (Hata Ayıklama Yeteneği)

## 📌 Amaç
Yazılım ve sistem hatalarını metodik olarak tespit etmek, root cause (kök neden) analizini yapmak ve kalıcı çözümler üretmek.

## 🛠 Kapsam ve Görevler
1. **Log Analizi:** Konsol, sunucu ve sistem loglarını okuyup hata izlerini (stack trace) çözümleme.
2. **Kök Neden Tespiti:** Semptomları bastırmak yerine hatanın oluştuğu asıl kaynağı bulma.
3. **İzolasyon:** Hatayı üreten senaryoyu ve girdileri izole ederek minimal reproducible example oluşturma.
4. **Çözüm & Doğrulama:** Düzeltmeyi uygulayıp ardından test ile başarısını kanıtlama.

## 📋 Best Practices
- Hiçbir hatayı ampirik log delili olmadan teşhis etme.
- Asla hatayı gizleyen sessiz `try/catch` blokları ekleme.
