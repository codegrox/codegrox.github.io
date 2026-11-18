# Downloads the scenery backdrops from Wikimedia Commons into ../../scenery/ (run once, commit the files).
# Usage (from anywhere):  powershell -ExecutionPolicy Bypass -File fetch-scenery.ps1
$ErrorActionPreference = 'Continue'
$failed = @()
$dest = Join-Path $PSScriptRoot '..\..\scenery'
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$ua = 'FlagWaverPlus/1.0 (https://codegrox.github.io/projects/FlagWaverPlus/; scenery fetch script)'

$files = @(
  @{ id='capitol';    file='United_States_Capitol_west_front_edit2.jpg';      width=2048 },
  @{ id='bourbon';    file='Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg';    width=2048 },
  @{ id='unhq';       file='UN_Members_Flags.JPG';                            width=1600 },
  @{ id='sthelens';   file='Mount_St_Helens_Summit_Pano.jpg';                 width=4096 },
  @{ id='kosciuszko'; file='Mount_Kosciuszko_Summit_360_panorama.jpg';        width=4096 }
)

foreach ($f in $files) {
  $url = "https://commons.wikimedia.org/wiki/Special:FilePath/$($f.file)?width=$($f.width)"
  $out = Join-Path $dest "$($f.id).jpg"
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
bourbon.jpg     Pont de la Concorde Palais Bourbon Paris.jpg Jebulon                    CC0 1.0
                https://commons.wikimedia.org/wiki/File:Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg
unhq.jpg        UN Members Flags.JPG                         Aotearoa                   CC BY-SA 3.0
                https://commons.wikimedia.org/wiki/File:UN_Members_Flags.JPG
sthelens.jpg    Mount St Helens Summit Pano.jpg              Gregg M. Erickson          CC BY 3.0
                https://commons.wikimedia.org/wiki/File:Mount_St_Helens_Summit_Pano.jpg
kosciuszko.jpg  Mount Kosciuszko Summit 360 panorama.jpg     Toby Hudson                CC BY-SA 3.0
                https://commons.wikimedia.org/wiki/File:Mount_Kosciuszko_Summit_360_panorama.jpg
"@ | Set-Content -Path (Join-Path $dest 'CREDITS.txt') -Encoding UTF8
Write-Host "Done. Files are in $((Resolve-Path $dest).Path)"
