# 📧 Mail Gönderme Sorunu - Çözüm Rehberi

## 🔍 Tespit Edilen Sorunlar

1. ✅ **API URL düzeltildi** - Production için hazır
2. ❌ **Backend server çalışmıyor** - Başlatılması gerekiyor
3. ⚠️ **EMAIL_PASS kontrol edilmeli** - .env dosyasında ayarlı olmalı

## 🚀 Hızlı Çözüm

### 1. Backend Server'ı Başlat

**Yeni Terminal Açın ve:**

```powershell
cd server
npm run dev
```

**VEYA PowerShell script ile:**

```powershell
.\server\start-backend.ps1
```

### 2. Email Yapılandırmasını Kontrol Et

`server/.env` dosyasını kontrol edin:

```env
EMAIL_USER=papatyavadisi80@gmail.com
EMAIL_PASS=your_16_character_gmail_app_password
PORT=3001
```

**EMAIL_PASS nasıl alınır:**
1. [Google Hesap Ayarları](https://myaccount.google.com/) → Güvenlik
2. 2 Adımlı Doğrulama'yı etkinleştir
3. Uygulama şifreleri → Mail için yeni şifre oluştur
4. 16 haneli şifreyi kopyalayıp `.env` dosyasına yapıştırın

### 3. Test Et

Backend başladıktan sonra:

```powershell
# Health check
Invoke-WebRequest -Uri "http://localhost:3001/api/health"

# Form test
.\test-api.ps1
```

## 🌐 Production İçin

### Backend (Railway/Render):
1. Backend'i deploy edin
2. Environment Variables:
   - `EMAIL_USER=papatyavadisi80@gmail.com`
   - `EMAIL_PASS=your_gmail_app_password`
   - `PORT=3001`
   - `CORS_ORIGIN=https://yourdomain.com`

### Frontend (Vercel/Netlify):
1. Environment Variable ekleyin:
   - `VITE_API_URL=https://your-backend-url.com`
2. Deploy edin

## ✅ Kontrol Listesi

- [ ] Backend server çalışıyor (`http://localhost:3001/api/health`)
- [ ] `.env` dosyasında `EMAIL_PASS` ayarlı
- [ ] Form gönderimi test edildi
- [ ] Email'ler geliyor mu kontrol edildi

## 🔧 Sorun Giderme

**Backend başlamıyor:**
```powershell
cd server
npm install
npm run dev
```

**Email gelmiyor:**
- `.env` dosyasında `EMAIL_PASS` kontrol edin
- Gmail App Password'un doğru olduğundan emin olun
- Backend console loglarını kontrol edin

**Production'da çalışmıyor:**
- `VITE_API_URL` environment variable'ı ayarlı mı?
- Backend CORS ayarları doğru mu?
- Backend URL'i erişilebilir mi?

