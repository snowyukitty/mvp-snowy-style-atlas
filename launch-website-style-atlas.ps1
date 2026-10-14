$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$url = "http://localhost:9913"

function Test-AtlasReady {
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -ge 200 -and $response.StatusCode -lt 500
  } catch {
    return $false
  }
}

if (-not (Test-AtlasReady)) {
  $npm = (Get-Command "npm.cmd" -ErrorAction SilentlyContinue).Source
  if (-not $npm) {
    $npm = "npm.cmd"
  }

  Start-Process -FilePath $npm -ArgumentList @("run", "dev") -WorkingDirectory $projectRoot -WindowStyle Hidden

  for ($attempt = 0; $attempt -lt 50; $attempt++) {
    Start-Sleep -Milliseconds 500
    if (Test-AtlasReady) {
      break
    }
  }
}

Start-Process $url
