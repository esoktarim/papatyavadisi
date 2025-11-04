# 🚀 Production Deployment - Hızlı Başlangıç

## Backend'i Sürekli Çalışır Tutma

### ⚡ Hızlı Kurulum (PM2 ile):

```powershell
# 1. PM2'yi kur
npm install -g pm2

# 2. Backend dizinine git
cd server

# 3. PM2 ile başlat
.\pm2-start.ps1

# VEYA manuel olarak:
pm2 start ecosystem.config.cjs

# 4. Bilgisayar açılışında otomatik başlatma için:
pm2 startup
pm2 save
```

### 📋 PM2 Komutları:

```powershell
pm2 status                    # Durumu kontrol et
pm2 logs                      # Tüm logları görüntüle
pm2 logs papatyavadisi-backend # Sadece backend logları
pm2 restart papatyavadisi-backend # Yeniden başlat
pm2 stop papatyavadisi-backend   # Durdur
pm2 delete papatyavadisi-backend # Sil
pm2 monit                     # Canlı monitoring
```

---

## 🌐 Hosting Alternatifleri

### 1. Railway.app (Önerilen - Ücretsiz)
- ✅ GitHub ile otomatik deploy
- ✅ Ücretsiz SSL
- ✅ Otomatik restart
- ✅ Kolay environment variable yönetimi

**Kurulum:**
1. [railway.app](https://railway.app) → Sign up with GitHub
2. New Project → Deploy from GitHub
3. Repo seç → `server` klasörünü seç
4. Environment Variables ekle:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT`

### 2. Render.com (Ücretsiz)
- ✅ Ücretsiz tier mevcut
- ✅ Otomatik SSL
- ✅ GitHub entegrasyonu

### 3. Heroku (Ücretsiz tier kaldırıldı)
- Artık ücretli

### 4. Kendi Sunucunuz (VPS)
- PM2 kullanın
- Nginx reverse proxy ekleyin
- SSL için Let's Encrypt

---

## 📝 Production Checklist

### Backend:
- [x] `.env` dosyası oluşturuldu
- [x] `EMAIL_PASS` (Gmail App Password) ayarlandı
- [x] PM2 kuruldu ve yapılandırıldı
- [ ] PM2 startup ayarlandı (`pm2 startup` + `pm2 save`)
- [ ] Firewall port 3001'i açtı (eğer dışarıdan erişilecekse)
- [ ] SSL sertifikası (HTTPS için)

### Frontend:
- [ ] `VITE_API_URL` environment variable ayarlandı
- [ ] Build test edildi
- [ ] API endpoint'leri test edildi

---

## 🔧 Troubleshooting

### Backend çalışmıyor:
```powershell
# PM2 loglarını kontrol et
pm2 logs papatyavadisi-backend --lines 50

# Process durumunu kontrol et
pm2 status

# Yeniden başlat
pm2 restart papatyavadisi-backend
```

### Email gönderilmiyor:
- `.env` dosyasında `EMAIL_PASS` kontrol edin
- Backend loglarında hata var mı bakın: `pm2 logs`
- Gmail App Password'ün süresi dolmuş olabilir

---

## 💡 En İyi Pratik

**Kendi Sunucunuzda:**
```
Backend (PM2) → Port 3001
Nginx → Reverse Proxy → Port 3001
Let's Encrypt → SSL
```

**Cloud Hosting:**
```
Backend → Railway/Render
Frontend → Vercel/Netlify
→ Her ikisi de ücretsiz!
```

