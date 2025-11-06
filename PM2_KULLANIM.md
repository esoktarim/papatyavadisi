# 📋 PM2 Kullanım Rehberi

## ✅ Backend Başarıyla Çalışıyor!

Backend şu anda PM2 ile çalışıyor ve mail gönderme aktif.

## 🔧 PM2 Komutları

### Durum Kontrolü:
```powershell
pm2 status                    # Tüm process'leri listele
pm2 logs                      # Tüm logları görüntüle
pm2 logs papatyavadisi-backend # Sadece backend logları
```

### Yönetim:
```powershell
pm2 restart papatyavadisi-backend  # Yeniden başlat
pm2 stop papatyavadisi-backend     # Durdur
pm2 delete papatyavadisi-backend   # Sil
pm2 monit                          # Canlı monitoring
```

### Otomatik Başlatma:
```powershell
pm2 save                         # Mevcut process'leri kaydet
pm2 startup                      # Bilgisayar açılışında otomatik başlat (Windows için)
```

## 📧 Mail Gönderme

Backend çalışıyorsa:
- ✅ Form gönderimi çalışıyor
- ✅ Admin email: `papatyavadisi80@gmail.com`
- ✅ Kullanıcı email: Form'da verilen email adresine

## 🔍 Sorun Giderme

### Backend çalışmıyor:
```powershell
cd server
pm2 delete papatyavadisi-backend
pm2 start ecosystem.config.cjs
pm2 logs
```

### Port 3001 kullanılıyor:
```powershell
# Port'u kullanan process'i bul
Get-NetTCPConnection -LocalPort 3001

# PM2'yi durdur
pm2 delete papatyavadisi-backend

# Yeniden başlat
cd server
pm2 start ecosystem.config.cjs
```

### Mail gelmiyor:
1. `.env` dosyasında `EMAIL_PASS` kontrol edin
2. PM2 loglarını kontrol edin: `pm2 logs papatyavadisi-backend`
3. Gmail App Password'un süresi dolmuş olabilir

## 🌐 Frontend Bağlantısı

### Development (Local):
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`
- Vite proxy otomatik `/api` isteklerini backend'e yönlendiriyor

### Production:
- Frontend Vercel/Netlify'da
- Backend local'de çalışıyor
- **ÖNEMLİ:** Production'da `localhost` çalışmaz!
- Çözüm: Backend'i internet'e açmak veya hosting kullanmak

## 💡 İpuçları

1. **PM2 her zaman çalışır:** Bilgisayar açık olduğu sürece backend çalışır
2. **Loglar:** `server/logs/` klasöründe kaydediliyor
3. **Otomatik restart:** PM2 crash olursa otomatik yeniden başlatır
4. **Monitoring:** `pm2 monit` ile canlı durumu izleyebilirsiniz

