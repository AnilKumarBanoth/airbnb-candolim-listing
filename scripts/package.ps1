$ErrorActionPreference = "Stop"
$destZip = Join-Path (Get-Location) "airbnb-clone-submission.zip"

if (Test-Path $destZip) {
    Remove-Item -Force $destZip
}

Write-Host "Creating submission package: $destZip ..."

$tempDir = Join-Path (Get-Location) "temp_package"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Copy source files
$itemsToCopy = @(
    "src",
    "public",
    ".agents",
    ".claude",
    "index.html",
    "package.json",
    "package-lock.json",
    "tailwind.config.js",
    "postcss.config.js",
    "vite.config.js",
    "AGENTS.md",
    "CLAUDE.md",
    "PROMPTS_LOG.md",
    "PROMPT_SEQUENCE.md",
    "README.md",
    "ARCHITECTURE.md",
    "architecture-diagram.svg",
    "architecture-diagram.pdf",
    "architecture-diagram.png",
    "architecture-viewer.html"
)

foreach ($item in $itemsToCopy) {
    if (Test-Path $item) {
        Copy-Item -Path $item -Destination (Join-Path $tempDir $item) -Recurse -Force
    }
}

# Compress Archive
Compress-Archive -Path "$tempDir\*" -DestinationPath $destZip -CompressionLevel Optimal

# Cleanup temp
Remove-Item -Recurse -Force $tempDir

$zipSize = (Get-Item $destZip).Length / 1MB
Write-Host ("Successfully generated {0} ({1:N2} MB)!" -f $destZip, $zipSize) -ForegroundColor Green
