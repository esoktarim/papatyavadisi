# 🚀 PM2 ile Backend Başlatma - Windows

## ✅ PM2 Kuruldu ve Çalışıyor!

### Backend'i Başlatma:

```powershell
cd server
pm2 start ecosystem.config.cjs
```

### Backend Durumunu Kontrol:

```powershell
pm2 status
```

### Logları Görüntüleme:

```powershell
pm2 logs papatyavadisi-backend
```

### Diğer Komutlar:

```powershell
pm2 restart papatyavadisi-backend  # Yeniden başlat
pm2 stop papatyavadisi-backend      # Durdur
pm2 delete papatyavadisi-backend    # Sil
pm2 monit                           # Canlı monitoring
```

---

## 💾 Otomatik Başlatma (Bilgisayar Açılışında)

**Not:** Windows'ta `pm2 startup` komutu çalışmıyor. Bunun yerine:

### Yöntem 1: Windows Task Scheduler (Önerilen)

1. **Task Scheduler**'ı açın (Windows + R → `taskschd.msc`)
2. **Create Basic Task** → İsim: "Papatyavadisi Backend"
3. Trigger: **When I log on**
4. Action: **Start a program**
5. Program: `C:\Program Files\nodejs\node.exe`
6. Arguments: `C:\Users\IONBEE\Desktop\papatyavadisi\server\index.js`
7. Start in: `C:\Users\IONBEE\Desktop\papatyavadisi\server`
8. Finish

### Yöntem 2: PM2 ile (Alternatif)

```powershell
# PM2 ile otomatik başlatma için:
pm2 startup
# Çıkan komutu yönetici olarak çalıştırın
```

---

## 🔧 Troubleshooting

### PM2 çalışmıyor:
```powershell
# PM2'yi yeniden başlat
pm2 kill
pm2 resurrect
```

### Backend durmuyor:
```powershell
# Tüm PM2 process'lerini durdur
pm2 stop all
pm2 delete all
```

### Port kullanımda:
```powershell
# Port 3001'i kullanan process'i bul
netstat -ano | findstr :3001
# Process ID'yi durdur
taskkill /PID <process_id> /F
```

---

## 📝 Production Checklist

- [x] PM2 kuruldu
- [x] Backend PM2 ile başlatıldı
- [ ] Windows Task Scheduler ayarlandı (otomatik başlatma için)
- [ ] Firewall port 3001'i açtı (gerekirse)
- [ ] `.env` dosyasında `EMAIL_PASS` ayarlı

---

## ✅ Backend Şu Anda Çalışıyor!

Backend PM2 ile yönetiliyor. Artık:
- ✅ Otomatik restart (hata olursa)
- ✅ Log yönetimi
- ✅ Monitoring
- ✅ Sürekli çalışır durumda

