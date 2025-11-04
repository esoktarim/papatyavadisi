# Test API Script for Papatyavadisi Backend

Write-Host "🧪 Testing Papatyavadisi Backend API..." -ForegroundColor Cyan

# Test Health Check
Write-Host "`n1️⃣ Testing Health Check..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/health" -Method GET
    Write-Host "✅ Health Check: OK" -ForegroundColor Green
    Write-Host $response.Content
} catch {
    Write-Host "❌ Health Check Failed: Backend is not running!" -ForegroundColor Red
    Write-Host "💡 Start backend with: cd server && npm run dev" -ForegroundColor Yellow
    exit 1
}

# Test Contact Form
Write-Host "`n2️⃣ Testing Contact Form API..." -ForegroundColor Yellow
$testData = @{
    project = "Papatyavadisi - Faz 1"
    name = "Test Kullanıcı"
    phone = "0542 398 26 66"
    email = "test@example.com"
    message = "Bu bir test mesajıdır."
    language = "tr"
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/contact" -Method POST -Body $testData -ContentType "application/json"
    Write-Host "✅ Contact Form: Request sent successfully" -ForegroundColor Green
    $result = $response.Content | ConvertFrom-Json
    Write-Host "Response: $($result.message)" -ForegroundColor Cyan
    
    if ($result.success) {
        Write-Host "`n✅ API is working! Check your email inbox for:" -ForegroundColor Green
        Write-Host "   📧 Admin email: papatyavadisi80@gmail.com" -ForegroundColor Cyan
        Write-Host "   📧 User email: test@example.com (if EMAIL_PASS configured)" -ForegroundColor Cyan
    } else {
        Write-Host "⚠️ API returned success: false" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Contact Form API Failed!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response: $responseBody" -ForegroundColor Red
    }
}

Write-Host "`n✅ API Test Complete!" -ForegroundColor Green
