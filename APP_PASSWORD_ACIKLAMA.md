# 📱 App Password Nasıl Bulunur?

## ✅ 2 Adımlı Doğrulama Açık - Şimdi App Password Almak İçin:

### Yöntem 1: Direkt Link (EN KOLAY)
1. Tarayıcınızda şu linki açın:
   **👉 https://myaccount.google.com/apppasswords**

2. Sayfa açıldığında:
   - "Uygulama seçin" → **"Mail"** seçin
   - "Cihaz seçin" → **"Diğer (Özel ad)"** seçin
   - İsim: **"Papatyavadisi Backend"** yazın
   - **"Oluştur"** butonuna tıklayın

3. 16 haneli şifre görünecek, kopyalayın!

### Yöntem 2: Güvenlik Ayarlarından
1. Şu anki sayfada **"Güvenlik Ayarları'na gidin"** linkine tıklayın
2. Sayfayı aşağı kaydırın
3. **"2 Adımlı Doğrulama"** bölümünü bulun
4. **"Uygulama şifreleri"** linkine tıklayın
5. Yukarıdaki adımları izleyin

---

## 📋 Adım Adım Görsel Açıklama:

### App Password Sayfasında Göreceksiniz:
```
┌─────────────────────────────────────┐
│ Uygulama şifreleri                  │
├─────────────────────────────────────┤
│ Uygulama seçin: [Mail ▼]           │
│ Cihaz seçin: [Diğer (Özel ad) ▼]   │
│ İsim: [Papatyavadisi Backend    ]  │
│                                     │
│        [Oluştur] butonu            │
└─────────────────────────────────────┘
```

### Şifre Göründüğünde:
```
┌─────────────────────────────────────┐
│ 16 haneli şifreniz:                 │
│                                     │
│   abcd efgh ijkl mnop              │
│                                     │
│  ⚠️ Bu şifreyi sadece bir kez       │
│     göreceksiniz!                   │
└─────────────────────────────────────┘
```

---

## ⚡ Hızlı İşlem:

1. Bu linki aç: **https://myaccount.google.com/apppasswords**
2. Mail seç → Diğer seç → "Papatyavadisi Backend" yaz → Oluştur
3. 16 haneli şifreyi kopyala
4. `server/.env` dosyasında `EMAIL_PASS=` kısmına yapıştır
5. Backend'i yeniden başlat

---

## 🔍 Eğer "Uygulama şifreleri" Görmüyorsanız:

- **2 Adımlı Doğrulama açık mı kontrol edin** ✅ (Sizde açık!)
- Sayfayı yenileyin (F5)
- Direkt linki kullanın: https://myaccount.google.com/apppasswords



