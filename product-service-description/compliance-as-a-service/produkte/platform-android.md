# Android

## Systemanforderungen

Android 7 und höher

## Unterstützte Packages

Der Launcher der fiskaltrust.Middleware für Android unter folgenden Cashbox Konfiguration nutzbar:

 - SQLite Package
 - Fiskaly Cloud TSE oder Swissbit TSE

## Unterschiede zu ft.Middleware für Desktop

Aufgrund der Sicherheitseinschränkungen von Android können die benötigten Packages nicht beim Start des Dienstes geladen bzw. aktualisiert werden. Daher steht die Middleware für Android mit vorkonfigurierten Packages zum Download zur Verfügung:

- Middleware für Android (HTTP)
  - HTTP Package
  - SQLite Package
  - Fiskaly Cloud- und Swissbit Packages
- Middleware für Android (gRPC)
  - gRPC Package
  - SQLite Package
  - Fiskaly Cloud- und Swissbit Packages

Angesprochen wird die Middleware für Android mit Hilfer der Cashbox Id und dem Access Token. Beide Informationen findet man im fiskaltrust.Portal.

## Distribution

### fiskaltrust.Portal

Die Android Launcher APK-files werden jeweils für die HTTP-Variante als auch für die gRPC Variante im fiskaltrust.Portal zum Download angeboten, wenn die oben beschriebenen Voraussetzungen erfüllt sind.

### Google Play Store

Der Android Launcher wird jeweils für die HTTP-Variante als auch für die gRPC Variante im Google Play Store als App zum Download angeboten, wenn die oben beschriebenen Voraussetzungen erfüllt sind.

### Troubleshooting

Swissbit plugin-plugout

## Weiterführende Informationen zur Middleware für Android

https://github.com/fiskaltrust/middleware-demo-android