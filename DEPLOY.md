# GitHub Pages Deployment Guide

## الخطوات:

### 1. تفعيل GitHub Pages
- اذهب إلى: Settings → Pages
- اختر Branch: `main`
- اختر Folder: `/` (root) أو `/ out` (إذا استخدمت export)

### 2. بناء وتصدير
```bash
npm run build
```

### 3. الملفات المُنتجة
ستكون في مجلد: `out/`

### 4. رابط الموقع
https://T7Tjjjjjjao.github.io/sola-ai-/

## البدائل:

### الخيار الأول: Deploy التلقائي باستخدام GitHub Actions

أنشئ ملف: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### الخيار الثاني: Manual Deploy

```bash
# 1. بناء
npm run build

# 2. تشغيل محلياً للتأكد
cd out
python -m http.server 3000

# 3. رفع الملفات يدويًا عبر GitHub UI
```
