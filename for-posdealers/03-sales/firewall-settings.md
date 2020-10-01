# Firewall Einstellungen

## Lokal installierte Firewall (Windows Firewall)

Bei einem lokal installierten Dienst müssen folgende Einstellungen angepasst werden:

**Url mit net.pipe:** Bei Windows kommunizieren die internen Dienste standardmäßig über net.pipe. Dies sollte keine Probleme mit einer lokalen Firewall verursachen und keine Ausnahmen erfordern.

**Url mit http:** Der verwendete Port muss in der Windows Firewall (oder einer anderen verwendeten lokal installierten Firewall) freigeschalten werden. Standardmäßig verwendet der fiskaltrust.Dienst unter Windows nur Port 1200.

Unter Linux kann kein net.pipe verwendet werden, weiters benötigt jeder Teil (Signaturerstellungseinheit, Queue, Helper, ..) seinen eigenen Port, da Portsharing unter Mono nicht unterstützt wird. Standardmäßig werden die Ports 1200, 1201, … verwendet. Alle verwendeten müssen freigeschalten werden.

## Eine Firewall zwischen dem lokalen Netzwerk und dem Internet

### Die fiskaltrust.Sicherheitseinrichtung kommuniziert in folgenden Fällen mit dem Internet

- Zum Ansprechen des Dienstes (SignatureCloud)
- Zum Signieren (A-Trust Online, fiskaltrust.HSM, fiskaly TSE)
- Zur Prüfung der Konfiguration und zum Download der Pakete beim Online Launcher
- Zum Upload der Daten in die fiskaltrust.Cloud

### Dafür werden folgende Freigaben benötigt

Port 443 https ausgehend für

- helipad.fiskaltrust.cloud (neu)
- packages.fiskaltrust.cloud (neu)
- helipad.fiskaltrust.at
- packages.fiskaltrust.at
- signing.fiskaltrust.at
- signaturcloud.fiskaltrust.at
- kassensichv.io bei Verwendung der fiskaly TSE

## Zertifikate

Die verwendeten Zertifikate stehen im fiskaltrust Portal unter "Werkzeuge -> Download" zum Download bereit.

## Troubleshooting

[Hilfestellung bei Problemen, bzw. bei sehr restriktiven Firewall-Einstellungen](../04-after-sales/troubleshooting-firewall.md).
