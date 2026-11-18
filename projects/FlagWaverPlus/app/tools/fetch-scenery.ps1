# Downloads the scenery backdrops from Wikimedia Commons into ../../scenery/ (run once, commit the files).
# Usage (from anywhere):  powershell -ExecutionPolicy Bypass -File fetch-scenery.ps1
$ErrorActionPreference = 'Continue'
$failed = @()
$dest = Join-Path $PSScriptRoot '..\..\scenery'
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$ua = 'FlagWaverPlus/1.0 (https://codegrox.github.io/projects/FlagWaverPlus/; scenery fetch script)'

$files = @(
  @{ id='capitol';    file='United_States_Capitol_west_front_edit2.jpg';      width=2048 },
  @{ id='taj';        file='Taj_Mahal,_Agra,_India_edit3.jpg';                width=2048 },
  @{ id='yosemite';   file='Tunnel_View,_Yosemite_Valley,_Yosemite_NP_-_Diliff.jpg'; width=3000 }
)

# Backdrops that were dropped from the presets
foreach ($old in @('bourbon.jpg','unhq.jpg','kosciuszko.jpg','sthelens.jpg')) {
  $p = Join-Path $dest $old
  if (Test-Path $p) { Remove-Item $p; Write-Host "Removed obsolete $old" }
}

foreach ($f in $files) {
  $url = "https://commons.wikimedia.org/wiki/Special:FilePath/$($f.file)?width=$($f.width)"
  $out = Join-Path $dest "$($f.id).jpg"
  if ((Test-Path $out) -and ((Get-Item $out).Length -gt 20KB)) { Write-Host "$($f.id) already present, skipping"; continue }
  Write-Host "Downloading $($f.id) ..." -NoNewline
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UserAgent $ua -MaximumRedirection 5 -ErrorAction Stop
    $kb = [math]::Round((Get-Item $out).Length / 1KB)
    if ($kb -lt 20) { throw "file too small ($kb KB) - probably an error page" }
    Write-Host " $kb KB"
  } catch {
    Write-Host " FAILED: $($_.Exception.Message)" -ForegroundColor Red
    $failed += "$($f.id)  $url"
    if (Test-Path $out) { Remove-Item $out }
  }
}

if ($failed.Count -gt 0) {
  Write-Host "`nThese did not download (send this list back):" -ForegroundColor Yellow
  $failed | ForEach-Object { Write-Host "  $_" }
}

@"
Scenery images, downloaded from Wikimedia Commons with fetch-scenery.ps1. Not original work of this project.

capitol.jpg     United States Capitol west front edit2.jpg   Architect of the Capitol   Public domain
                https://commons.wikimedia.org/wiki/File:United_States_Capitol_west_front_edit2.jpg
taj.jpg         Taj Mahal, Agra, India edit3.jpg             Yann (edit: Jbarta)        CC BY-SA 3.0
                https://commons.wikimedia.org/wiki/File:Taj_Mahal,_Agra,_India_edit3.jpg
yosemite.jpg    Tunnel View, Yosemite Valley, Yosemite NP - Diliff.jpg   Diliff       CC BY-SA 3.0
                https://commons.wikimedia.org/wiki/File:Tunnel_View,_Yosemite_Valley,_Yosemite_NP_-_Diliff.jpg
"@ | Set-Content -Path (Join-Path $dest 'CREDITS.txt') -Encoding UTF8
Write-Host "Done. Files are in $((Resolve-Path $dest).Path)"
