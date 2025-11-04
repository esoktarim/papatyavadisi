# Papatyavadisi Website

Modern villa projeleri için geliştirilmiş web sitesi.

## Kurulum

### Frontend

1. Bağımlılıkları yükleyin:
```bash
npm install --legacy-peer-deps
```

2. Development server'ı başlatın:
```bash
npm run dev
```

### Backend

1. Backend klasörüne gidin:
```bash
cd server
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Gmail App Password oluşturun:
   - Google Hesap Ayarları'na gidin
   - 2 Adımlı Doğrulama'yı etkinleştirin
   - Uygulama Şifresi oluşturun
   - Şifreyi kopyalayın

4. `.env` dosyası oluşturun:
```bash
cp .env.example .env
```

5. `.env` dosyasını düzenleyin:
```
EMAIL_USER=papatyavadisi80@gmail.com
EMAIL_PASS=your_gmail_app_password_here
PORT=3001
```

6. Backend server'ı başlatın:
```bash
npm run dev
```

## Çalıştırma

İki terminal açın:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```

## Özellikler

- Modern React + TypeScript
- Tailwind CSS ile responsive tasarım
- Email entegrasyonu (Nodemailer)
- Çok dilli destek (TR/EN)
- Form validasyonu
- Toast bildirimleri
