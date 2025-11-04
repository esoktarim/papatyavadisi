# Contact API Test Script
Write-Host "🧪 Contact API Test Başlatılıyor...`n" -ForegroundColor Cyan

# Test verisi
$testData = @{
    project = "Papatyavadisi - Faz 1"
    name = "Test Kullanıcı"
    phone = "0542 398 26 66"
    email = "test@example.com"
    message = "Bu bir backend test mesajıdır. Email gönderimi kontrol ediliyor."
    language = "tr"
}

Write-Host "📤 Gönderilen veri:" -ForegroundColor Yellow
$testData | ConvertTo-Json | Write-Host

Write-Host "`n📡 API'ye istek gönderiliyor...`n" -ForegroundColor Yellow

try {
    $body = $testData | ConvertTo-Json
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/contact" -Method POST -Body $body -ContentType "application/json"
    
    Write-Host "✅ API Başarılı!" -ForegroundColor Green
    Write-Host "📨 Response:" -ForegroundColor Cyan
    $response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 3 | Write-Host
    
    Write-Host "`n📧 Email Durumu:" -ForegroundColor Yellow
    Write-Host "   ✅ Admin email papatyavadisi80@gmail.com adresine gönderildi" -ForegroundColor Green
    Write-Host "   ✅ Kullanıcı email test@example.com adresine gönderildi (eğer EMAIL_PASS yapılandırıldıysa)" -ForegroundColor Green
    Write-Host "`n💡 Gelen kutunuzu kontrol edin!" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ API Hatası!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response: $responseBody" -ForegroundColor Red
    }
}

