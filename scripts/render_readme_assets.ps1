$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$screenshots = Join-Path $root "screenshots"
New-Item -ItemType Directory -Force -Path $screenshots | Out-Null

Add-Type -AssemblyName System.Drawing

function New-ProofImage {
    param(
        [string]$Path,
        [string]$Title,
        [string]$Subtitle,
        [string[]]$Bullets
    )

    $bitmap = New-Object System.Drawing.Bitmap 1600, 1000
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.Clear([System.Drawing.Color]::FromArgb(12, 17, 30))

    $panelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 18, 32))
    $accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(55, 255, 139))
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(236, 243, 248))
    $mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(156, 176, 191))
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(25, 199, 255), 2)

    $graphics.FillRectangle($panelBrush, 48, 48, 1504, 904)
    $graphics.DrawRectangle($borderPen, 48, 48, 1504, 904)

    $eyebrowFont = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold)
    $titleFont = New-Object System.Drawing.Font("Georgia", 34, [System.Drawing.FontStyle]::Bold)
    $bodyFont = New-Object System.Drawing.Font("Segoe UI", 18)
    $bulletFont = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold)

    $graphics.DrawString("Crop Compliance Observation Ledger", $eyebrowFont, $accentBrush, 92, 92)
    $graphics.DrawString($Title, $titleFont, $textBrush, 92, 142)
    $graphics.DrawString($Subtitle, $bodyFont, $mutedBrush, 92, 214)

    $y = 320
    foreach ($bullet in $Bullets) {
        $graphics.DrawString("•", $bulletFont, $accentBrush, 108, $y)
        $graphics.DrawString($bullet, $bodyFont, $textBrush, 138, $y + 2)
        $y += 82
    }

    $graphics.DrawString("Synthetic proof render for README packaging.", $bodyFont, $mutedBrush, 92, 880)
    $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
}

New-ProofImage -Path (Join-Path $screenshots "01-overview-proof.png") `
    -Title "Overview proof" `
    -Subtitle "Observation queues, blocker evidence, and field posture in one buyer-safe crop compliance surface." `
    -Bullets @(
        "Observation cases map to concrete crop-review pressure.",
        "Blocked compliance stays visible before a review window burns.",
        "Field posture is buyer-readable and operator-safe."
    )

New-ProofImage -Path (Join-Path $screenshots "02-observation-lane-proof.png") `
    -Title "Observation lane" `
    -Subtitle "Each field case shows owner, crop pressure, and the next crop-safe action." `
    -Bullets @(
        "Field cases stay linked to buyer and regulator impact.",
        "Owners see the next crop-safe move.",
        "High-risk evidence drift surfaces early."
    )

New-ProofImage -Path (Join-Path $screenshots "03-compliance-risks-proof.png") `
    -Title "Compliance risks" `
    -Subtitle "Spray-log, scout-sheet, acreage, and sign-off blockers stay tied to required evidence." `
    -Bullets @(
        "Each blocker shows what proof is still missing.",
        "Impact areas stay visible for prioritization.",
        "Crop work remains mapped to a named owner."
    )

New-ProofImage -Path (Join-Path $screenshots "04-field-posture-proof.png") `
    -Title "Field posture" `
    -Subtitle "Field packets show confidence score, review window, and release pressure." `
    -Bullets @(
        "Red packets show immediate buyer or regulator window risk.",
        "Yellow packets preserve the next safe review cycle.",
        "Green packets stay governed without noise."
    )
