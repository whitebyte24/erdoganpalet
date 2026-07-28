---
name: coding
description: Kod mimarisi, strict TypeScript geliştirmesi, refactoring, test yazımı ve kod optimizasyonu kurallarını içerir.
---

# 💻 Yazılım Geliştirme Standartları

## 📐 Mimari & Kod Düzeni

1. **Klasör Yapısı:**
   - `/src/app`: Sayfa ve rota bileşenleri (Next.js App Router)
   - `/src/components`: Tekrar kullanılabilir UI bileşenleri
   - `/src/lib`: Yardımcı fonksiyonlar, istemci/veritabanı bağlantıları
   - `/src/types`: Global TypeScript tip tanımlamaları

2. **TypeScript ve Tip Güvenliği:**
   - `any` tipi kesinlikle yasaktır; `unknown` veya tanımlı `interface/type` kullanılmalıdır.
   - Tüm props ve API yanıtları açıkça tiplendirilmelidir.

3. **Hata Yönetimi (Error Handling):**
   ```typescript
   try {
     const result = await processData(input);
     return { success: true, data: result };
   } catch (error) {
     console.error('[ProcessData Error]:', error);
     return { success: false, error: error instanceof Error ? error.message : 'Bilinmeyen hata' };
   }
   ```

4. **Refactoring İlkeleri:**
   - Karmaşık fonksiyonları 20 satırı geçmeyecek şekilde alt fonksiyonlara ayır.
   - Sert kodlanmış (hardcoded) değerleri konfigürasyon veya env sabitlerine taşı.
