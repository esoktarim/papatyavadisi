# Hızlı Durum Kontrolü Script
param(
    [switch]$quick,
    [switch]$full,
    [switch]$test
)

if ($test) {
    & .\test-api.ps1
    exit
}

if ($full) {
    Write-Host "=== TAM DURUM KONTROLÜ ===" -ForegroundColor Cyan
    Write-Host ""
    
    # Backend
    Write-Host "BACKEND:" -ForegroundColor Yellow
    $backend = Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
    if ($backend) {
        Write-Host "  ✅ Port 3001: Aktif" -ForegroundColor Green
        try {
            $health = Invoke-RestMethod -Uri "http://localhost:3001/api/health" -TimeoutSec 2
            Write-Host "  ✅ API: Çalışıyor" -ForegroundColor Green
        } catch {
            Write-Host "  ⚠️  API yanıt vermiyor" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ❌ Backend çalışmıyor" -ForegroundColor Red
    }
    Write-Host ""
    
    # Frontend
    Write-Host "FRONTEND:" -ForegroundColor Yellow
    $frontend = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
    if ($frontend) {
        Write-Host "  ✅ Port 5173: Aktif" -ForegroundColor Green
        Write-Host "  🌐 URL: http://localhost:5173" -ForegroundColor Gray
    } else {
        Write-Host "  ❌ Frontend çalışmıyor" -ForegroundColor Red
    }
    Write-Host ""
    
    # Email Config
    Write-Host "EMAIL YAPILANDIRMASI:" -ForegroundColor Yellow
    if (Test-Path "server\.env") {
        $envFile = Get-Content "server\.env"
        $hasPass = $envFile | Where-Object { $_ -match "^EMAIL_PASS=.+" -and $_ -notmatch "your_gmail_app_password" -and $_ -notmatch "EMAIL_PASS=$" }
        if ($hasPass) {
            Write-Host "  ✅ Email password ayarlı" -ForegroundColor Green
        } else {
            Write-Host "  ⚠️  Email password ayarlanmamış" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ❌ .env dosyası yok" -ForegroundColor Red
    }
    Write-Host ""
    
} else {
    # Quick check
    Write-Host "Hızlı Kontrol..." -ForegroundColor Cyan
    $backend = Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
    $frontend = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
    
    if ($backend -and $frontend) {
        Write-Host "✅ Tüm servisler çalışıyor" -ForegroundColor Green
    } elseif ($backend) {
        Write-Host "⚠️  Backend: ✅ | Frontend: ❌" -ForegroundColor Yellow
    } elseif ($frontend) {
        Write-Host "⚠️  Backend: ❌ | Frontend: ✅" -ForegroundColor Yellow
    } else {
        Write-Host "❌ Servisler çalışmıyor" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Komutlar:" -ForegroundColor Gray
Write-Host "  .\check.ps1          - Hızlı kontrol" -ForegroundColor Gray
Write-Host "  .\check.ps1 -full   - Detaylı kontrol" -ForegroundColor Gray
Write-Host "  .\check.ps1 -test   - API testleri" -ForegroundColor Gray

