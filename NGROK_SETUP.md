# 🌐 Ngrok ile Backend'i Internet'e Açma

## Adım 1: Ngrok Kurulumu

1. [ngrok.com](https://ngrok.com) → Sign up (ücretsiz)
2. Download → Windows için indirin
3. İndirilen `ngrok.exe` dosyasını `C:\Windows\System32` klasörüne kopyalayın
   - VEYA PATH'e ekleyin

## Adım 2: Ngrok Token Alın

1. [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken)
2. Authtoken'ı kopyalayın
3. PowerShell'de:
```powershell
ngrok config add-authtoken YOUR_TOKEN_HERE
```

## Adım 3: Backend'i Internet'e Açın

```powershell
ngrok http 3001
```

Bu komut size bir URL verecek:
- Örnek: `https://abc123.ngrok-free.app`
- Bu URL'i kopyalayın

## Adım 4: Frontend'e Ekleyin

Vercel/Netlify'da:
- Environment Variable ekleyin:
  - Name: `VITE_API_URL`
  - Value: `https://abc123.ngrok-free.app` (ngrok'dan aldığınız URL)
- Redeploy yapın

## ⚠️ Önemli Notlar

- Ngrok ücretsiz planında URL her restart'ta değişir
- Her ngrok başlattığınızda yeni URL alırsınız
- Frontend'i her seferinde güncellemeniz gerekir
- **Kalıcı çözüm için Vercel Serverless Functions kullanın**

