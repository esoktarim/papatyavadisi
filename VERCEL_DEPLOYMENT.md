# 🚀 Vercel'de Backend + Frontend Deployment

Vercel'de hem frontend hem backend'i aynı projede deploy edebilirsiniz!

## ✅ Hazırlanan Dosyalar

- ✅ `api/contact.js` - İletişim formu endpoint'i (Vercel Serverless Function)
- ✅ `api/health.js` - Health check endpoint'i
- ✅ `vercel.json` - Vercel yapılandırması
- ✅ `package.json` - `nodemailer` dependency eklendi

## 📋 Vercel'de Deploy Adımları

### 1. Vercel'e Giriş
1. [vercel.com](https://vercel.com) → GitHub ile giriş yapın
2. **Add New Project** → GitHub repo'nuzu seçin

### 2. Build Ayarları
Vercel otomatik olarak algılayacak, ama kontrol edin:
- **Framework Preset:** Vite
- **Root Directory:** `./` (root)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### 3. Environment Variables (ÖNEMLİ!)
Vercel Dashboard → Project Settings → Environment Variables:

```
EMAIL_USER=papatyavadisi80@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

**Not:** `EMAIL_PASS` Gmail App Password olmalı (16 karakter, boşluksuz)

### 4. Deploy
- **Deploy** butonuna tıklayın
- Vercel otomatik olarak:
  - Frontend'i build edecek
  - `api/` klasöründeki serverless functions'ları deploy edecek

## 🎯 API Endpoints

Deploy sonrası:
- **Frontend:** `https://your-project.vercel.app`
- **API Contact:** `https://your-project.vercel.app/api/contact`
- **API Health:** `https://your-project.vercel.app/api/health`

## ✅ Avantajlar

1. **Tek proje:** Frontend + Backend aynı yerde
2. **Ücretsiz:** Vercel'in ücretsiz planı yeterli
3. **Otomatik:** Her push'ta otomatik deploy
4. **Hızlı:** Serverless functions çok hızlı
5. **CORS yok:** Aynı domain'de, CORS sorunu yok

## 🔧 Frontend API URL

Frontend zaten `/api/contact` kullanıyor, bu yüzden **hiçbir değişiklik gerekmez!**

`src/lib/api.ts` dosyası:
- Development'ta: `localhost:3001` proxy kullanır
- Production'da: `/api/contact` kullanır (aynı domain)

## 🧪 Test

Deploy sonrası:
1. `https://your-project.vercel.app/api/health` → `{"status":"ok"}`
2. Sitede formu doldurup gönderin
3. Email gelmeli!

## ⚠️ Notlar

- Vercel Serverless Functions **10 saniye timeout** limiti var (yeterli)
- Email gönderimi için `EMAIL_PASS` mutlaka ayarlanmalı
- Production'da CORS ayarları `api/contact.js` içinde `*` olarak ayarlı (güvenlik için domain'e göre değiştirilebilir)

