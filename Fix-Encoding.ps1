# Fix-Encoding.ps1
$ErrorActionPreference = "Stop"

Write-Host "🔎 Buscando archivos no-UTF8 en el repo…" -ForegroundColor Cyan

# Extensiones de texto
$exts = @("ts","tsx","js","jsx","json","css","scss","md","html","yml","yaml","env","txt")

# Archivos trackeados por Git
$files = git ls-files | Where-Object {
  $ext = [System.IO.Path]::GetExtension($_).TrimStart('.').ToLower()
  $exts -contains $ext
}

$converted = 0
$failed = 0

function Normalize-EOL($path) {
  # Convierte CRLF a LF
  (Get-Content -Raw -LiteralPath $path).Replace("`r`n","`n") | Set-Content -NoNewline -LiteralPath $path -Encoding utf8
}

foreach ($f in $files) {
  try {
    # Intenta leer como UTF-8 (sin BOM). Si funciona, sigue
    $utf8 = New-Object System.Text.UTF8Encoding($false)
    [void][System.IO.File]::ReadAllText($f, $utf8)
    continue
  } catch {
    # Intentos de decodificación comunes
    $encodings = @(
      [System.Text.Encoding]::Unicode,        # UTF-16 LE
      [System.Text.Encoding]::BigEndianUnicode, # UTF-16 BE
      [System.Text.Encoding]::GetEncoding(1252), # Windows-1252
      [System.Text.Encoding]::GetEncoding("iso-8859-1")
    )
    $convertedThis = $false
    foreach ($enc in $encodings) {
      try {
        $text = [System.IO.File]::ReadAllText($f, $enc)
        # Guardar como UTF-8 sin BOM
        [System.IO.File]::WriteAllText($f, $text, (New-Object System.Text.UTF8Encoding($false)))
        Normalize-EOL $f
        Write-Host "✔ Convertido: $f ($($enc.WebName) -> utf-8)" -ForegroundColor Green
        $converted++
        $convertedThis = $true
        break
      } catch {
        continue
      }
    }
    if (-not $convertedThis) {
      Write-Host "✖ No se pudo convertir: $f" -ForegroundColor Red
      $failed++
    }
  }
}

# .gitattributes
$ga = ".gitattributes"
if (-not (Test-Path $ga)) {
@"
* text=auto eol=lf
*.ts  text working-tree-encoding=UTF-8
*.tsx text working-tree-encoding=UTF-8
*.js  text working-tree-encoding=UTF-8
*.jsx text working-tree-encoding=UTF-8
*.json text working-tree-encoding=UTF-8
*.css text working-tree-encoding=UTF-8
*.scss text working-tree-encoding=UTF-8
*.md  text working-tree-encoding=UTF-8
*.html text working-tree-encoding=UTF-8
*.yml text working-tree-encoding=UTF-8
*.yaml text working-tree-encoding=UTF-8
*.env text working-tree-encoding=UTF-8
*.txt text working-tree-encoding=UTF-8
"@ | Out-File -LiteralPath $ga -Encoding utf8
  Write-Host "📝 Creado .gitattributes" -ForegroundColor Yellow
}

# Renormaliza git
git add .gitattributes
git add --renormalize .

Write-Host "Resumen: convertidos=$converted, fallidos=$failed" -ForegroundColor Cyan
Write-Host "📦 Revisa 'git status' y realiza commit/push." -ForegroundColor Cyan
