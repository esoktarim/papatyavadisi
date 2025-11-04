# PM2 Windows Execution Policy Düzeltme Scripti
Write-Host "🔧 PM2 için PowerShell Execution Policy ayarlanıyor...`n" -ForegroundColor Cyan

# Mevcut policy'yi kontrol et
$currentPolicy = Get-ExecutionPolicy
Write-Host "📋 Mevcut Execution Policy: $currentPolicy" -ForegroundColor Yellow

# Policy'yi değiştir
Write-Host "`n🔨 Execution Policy değiştiriliyor..." -ForegroundColor Yellow
try {
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
    Write-Host "✅ Execution Policy başarıyla ayarlandı!`n" -ForegroundColor Green
} catch {
    Write-Host "❌ Hata: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`n💡 Manuel olarak çalıştırın:" -ForegroundColor Yellow
    Write-Host "   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" -ForegroundColor White
    exit 1
}

# PM2'yi test et
Write-Host "🧪 PM2 test ediliyor..." -ForegroundColor Cyan
try {
    $pm2Version = pm2 --version 2>&1
    Write-Host "✅ PM2 çalışıyor! (Version: $pm2Version)`n" -ForegroundColor Green
} catch {
    Write-Host "⚠️  PM2 bulunamadı, kurulum kontrol ediliyor..." -ForegroundColor Yellow
    Write-Host "   npm install -g pm2" -ForegroundColor White
}

Write-Host "🚀 Şimdi PM2 komutlarını kullanabilirsiniz:" -ForegroundColor Green
Write-Host "   pm2 start ecosystem.config.cjs" -ForegroundColor White
Write-Host "   pm2 status" -ForegroundColor White
Write-Host "   pm2 logs`n" -ForegroundColor White

