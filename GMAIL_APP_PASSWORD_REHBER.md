# 🔐 Gmail App Password Alma Rehberi

## 📋 Adım Adım Talimatlar

### 1️⃣ Google Hesabınıza Giriş Yapın
- Tarayıcınızda [myaccount.google.com](https://myaccount.google.com/) adresine gidin
- Gmail hesabınızla giriş yapın (papatyavadisi80@gmail.com)

### 2️⃣ Güvenlik Ayarlarına Gidin
- Sol menüden **"Güvenlik"** sekmesine tıklayın
- Veya direkt bu linke gidin: [Google Güvenlik Ayarları](https://myaccount.google.com/security)

### 3️⃣ 2 Adımlı Doğrulamayı Etkinleştirin
- **"2 Adımlı Doğrulama"** bölümünü bulun
- Eğer kapalıysa:
  1. **"Başlat"** veya **"2 Adımlı Doğrulamayı Aç"** butonuna tıklayın
  2. Telefon numaranızı ekleyin
  3. SMS ile kod alıp onaylayın
  4. **"Aç"** butonuna tıklayın

**⚠️ ÖNEMLİ:** App Password almak için 2 Adımlı Doğrulama MUTLAKA açık olmalı!

### 4️⃣ App Password Oluşturun
1. **"2 Adımlı Doğrulama"** bölümüne geri dönün
2. **"Uygulama şifreleri"** seçeneğine tıklayın
   - Direkt link: [App Passwords](https://myaccount.google.com/apppasswords)
3. Eğer ilk defa kullanıyorsanız:
   - "Şu anda kullandığınız cihazı seçin" ekranı gelir
   - **"Diğer (Özel ad)"** seçeneğini seçin
   - İsim girin: `Papatyavadisi Backend`
   - **"Oluştur"** butonuna tıklayın
4. **16 haneli şifre** ekranda görünecek
   - Örnek format: `abcd efgh ijkl mnop` (boşluklu)
   - VEYA: `abcdefghijklmnop` (boşluksuz)

### 5️⃣ Şifreyi Kopyalayın
- **16 haneli şifreyi kopyalayın**
- **ÖNEMLİ:** Bu şifreyi sadece bir kez göreceksiniz!
- Daha sonra tekrar göremeyeceğiniz için hemen kopyalayın

### 6️⃣ Backend'e Ekleyin
1. `server` klasöründeki `.env` dosyasını açın
2. `EMAIL_PASS=` satırını bulun
3. Şifreyi yapıştırın (boşlukları kaldırabilirsiniz):
   ```env
   EMAIL_PASS=abcdefghijklmnop
   ```
4. Dosyayı kaydedin

### 7️⃣ Backend'i Yeniden Başlatın
```powershell
cd server
npm run dev
```

## ✅ Kontrol Listesi

- [ ] 2 Adımlı Doğrulama açık mı?
- [ ] App Password oluşturdunuz mu?
- [ ] 16 haneli şifreyi kopyaladınız mı?
- [ ] `.env` dosyasına eklediniz mi?
- [ ] Backend'i yeniden başlattınız mı?

## 🔍 Şifre Formatı

**Doğru Format:**
- ✅ `abcdefghijklmnop` (16 karakter, harf/rakam)
- ✅ `abcd efgh ijkl mnop` (boşluklu da çalışır)

**Yanlış Format:**
- ❌ `papatyavadisi123.` (normal şifre - çalışmaz!)
- ❌ Normal Gmail şifreniz (çalışmaz!)

## 🆘 Sorun mu Yaşıyorsunuz?

### "Uygulama şifreleri" seçeneğini göremiyorum
- **Çözüm:** 2 Adımlı Doğrulama'yı önce etkinleştirin

### Şifre çalışmıyor
- **Kontrol:** Boşlukları kaldırdınız mı?
- **Kontrol:** Şifreyi tam olarak kopyaladınız mı?
- **Çözüm:** Yeni bir App Password oluşturup tekrar deneyin

### Email gönderilemiyor
- Backend console'daki hata mesajını kontrol edin
- `server/test-email.js` scriptini çalıştırıp test edin

## 📞 Destek

Daha fazla yardım için:
- Google Destek: [support.google.com](https://support.google.com/accounts/answer/185833)



