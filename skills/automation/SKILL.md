---
name: automation
description: CI/CD, otomasyon betikleri, zamanlanmış görevler ve iş akışı optimizasyonunu kapsar.
---

# ⚙️ Otomasyon & CI/CD Rehberi

## 🤖 GitHub Actions CI Workflow Örneği (`.github/workflows/ci.yml`)
```yaml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run Linter
        run: npm run lint

      - name: Build
        run: npm run build
```

## ⏱️ Zamanlanmış Görevler (Cron Task)
- Günlük log temizleme, rapor alma veya site haritası güncelleme işlemleri için `schedule` aracı veya cron yapılandırması kullanılır.
