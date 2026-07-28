---
name: documentation
description: Teknik dokümanlar, API rehberleri, kurulum adımları, kullanıcı kılavuzları ve changelog oluşturur.
---

# 📚 Dokümantasyon Standartları

## 📝 Sürüm Notları (CHANGELOG.md) Şablonu
```markdown
# Changelog

## [1.1.0] - 2026-07-27
### 🚀 Eklenenler (Added)
- MCP sunucu yapılandırmaları (`mcp_config.json`) eklendi.
- 9 adet modüler skill yapısı oluşturuldu.

### 🐛 Düzeltilenler (Fixed)
- Tip tanımı çakışmaları giderildi.

### ⚠️ Değişenler (Changed)
- `AGENTS.md` genel AI çalışma kurallarına uygun olarak güncellendi.
```

## 🛠 Kurulum Rehberi (README.md) Standart Yapısı
1. **Gereksinimler (Prerequisites):** Node.js sürümü, veritabanı gereksinimleri vb.
2. **Kurulum Adımları:** `git clone`, `npm install`, `.env` yapılandırması.
3. **Çalıştırma Komutları:** `npm run dev`, `npm run build`, `npm start`.
