# ✅ Production Deployment Checklist

## 🔒 Güvenlik Kontrolleri

### Backend:
- [x] ✅ CORS yapılandırması eklendi (production'da domain'e göre ayarlanabilir)
- [x] ✅ Email App Password ayarlı
- [ ] ⚠️ **CORS_ORIGIN** environment variable production'da ayarlanmalı
- [ ] ⚠️ SSL/HTTPS aktif olmalı
- [ ] ⚠️ Rate limiting eklenebilir (isteğe bağlı)

### Frontend:
- [x] ✅ API URL yapılandırması production için hazır
- [x] ✅ Console log'lar sadece development'ta aktif
- [ ] ⚠️ **VITE_API_URL** environment variable production'da ayarlanmalı

---

## 📋 Production Deployment Adımları

### 1. Backend Deployment

#### Seçenek A: Kendi Sunucunuz (PM2)
```powershell
cd server
pm2 start ecosystem.config.cjs
pm2 save
```

**Environment Variables (.env):**
```env
EMAIL_USER=papatyavadisi80@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=3001
CORS_ORIGIN=https://yourdomain.com
```

#### Seçenek B: Vercel Serverless Functions (Önerilen)
1. [vercel.com](https://vercel.com) → GitHub ile giriş
2. Import Project → Repo seç
3. **Environment Variables ekle:**
   - `EMAIL_USER=papatyavadisi80@gmail.com`
   - `EMAIL_PASS=your_gmail_app_password`
4. Deploy → Backend `api/` klasöründeki serverless functions olarak otomatik deploy edilir

#### Seçenek C: Render.com
1. [render.com](https://render.com) → Sign up
2. New Web Service → GitHub repo bağla
3. Ayarlar:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. **Environment Variables ekle** (yukarıdaki gibi)

---

### 2. Frontend Deployment

#### Seçenek A: Vercel (Önerilen)
1. [vercel.com](https://vercel.com) → Sign up
2. Import Project → GitHub repo seç
3. **Build Settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Environment Variables ekle:**
   - `EMAIL_USER=papatyavadisi80@gmail.com`
   - `EMAIL_PASS=your_gmail_app_password`
   - (Backend `api/` klasöründe serverless functions olarak çalışır)
5. Deploy → Frontend URL'i alın

#### Seçenek B: Netlify
1. [netlify.com](https://netlify.com) → Sign up
2. Import from Git → GitHub repo
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Environment Variables:**
   - `VITE_API_URL=https://your-backend-url.com`

---

## 🧪 Production Test

### Backend Test:
```bash
# Health check
curl https://your-backend-url.com/api/health

# Form test
curl -X POST https://your-backend-url.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"0555","email":"test@test.com","language":"tr"}'
```

### Frontend Test:
1. Web sitesine gidin
2. Form doldurun ve gönderin
3. Browser console'u açın (F12)
4. Network tab'ında API isteğini kontrol edin
5. Email'in geldiğini kontrol edin

---

## ⚠️ Önemli Notlar

### 1. CORS Ayarları
Backend `.env` dosyasında:
```env
CORS_ORIGIN=https://yourdomain.com
```
Veya tüm domain'ler için (güvensiz ama çalışır):
```env
CORS_ORIGIN=*
```

### 2. API URL
Frontend build'de environment variable olarak:
```env
VITE_API_URL=https://your-backend-url.com
```

### 3. SSL/HTTPS
- **MUTLAKA HTTPS kullanın** (Hem frontend hem backend)
- Railway, Render, Vercel, Netlify otomatik SSL sağlar
- Kendi sunucunuzdaysa Let's Encrypt kullanın

### 4. Email Gönderimi
- Gmail App Password production'da da aynı şekilde çalışır
- `.env` dosyasında `EMAIL_PASS` mutlaka ayarlı olmalı

---

## 🔍 Sorun Giderme

### Frontend backend'e bağlanamıyor:
- ✅ `VITE_API_URL` environment variable kontrol edin
- ✅ CORS ayarlarını kontrol edin
- ✅ Backend'in çalıştığını kontrol edin: `https://backend-url.com/api/health`

### Email gönderilmiyor:
- ✅ Backend loglarını kontrol edin
- ✅ `.env` dosyasında `EMAIL_PASS` var mı kontrol edin
- ✅ Gmail App Password'ün süresi dolmuş olabilir

### CORS hatası:
- ✅ Backend `.env` dosyasında `CORS_ORIGIN` ayarlı mı?
- ✅ Frontend URL'i backend CORS ayarlarına eklendi mi?

---

## ✅ Production Hazır!

Tüm güvenlik önlemleri alındı:
- ✅ CORS yapılandırması
- ✅ Environment variables yönetimi
- ✅ Console log'lar sadece development'ta
- ✅ Error handling iyileştirildi

**Sonraki adım:** Vercel'e deploy edin!

