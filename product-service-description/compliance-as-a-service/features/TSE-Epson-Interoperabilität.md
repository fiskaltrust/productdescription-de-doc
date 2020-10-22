# Epson Interoperabilität

## SCU

Das _fiskaltrust.Middleware.SCU.DE.Epson_-Package ermöglicht die Verbindung der Middleware mit einer Epson-TSE.

**Alpha Version verfügbar ab Version**: 1.3.10-rc1

**Status:** https://github.com/fiskaltrust/roadmap/issues/25

## Parameter

| Name | Beschreibung | Optional |
| ---- | ------------ |--------- |
| _host_ | Die URL, unter der die TSE erreichbar ist (ohne Port) | nein |
| _port_ | Der Port, hinter dem die TSE unter der angegebenen URL erreichbar ist. Falls nicht definiert, wird der Standard-Port wie vom Hersteller definiert verwendet. | ja |
| _deviceid_ | Die für die TSE spezifische Geräte-ID. Falls nicht angegeben, wird der Defaultwert verwendet. | ja |
| _timeout_ | Timeout-Wert für die Kommunikation mit der TSE in Millisekunden. Falls nicht angegeben, wird der Default-Wert von 60 Sekunden verwendet. | ja |

## Konfiguration

![scu-de-epson-config](../media/scu-de-epson-config.png)

- **Host:** DNS oder IP Addresse des Epson Servers, Epson Printers oder lokalen Webservices
- **Port:** Port des Epson Servers, Printers oder lokjalen Webservices, üblicherweise 8009
- **DeviceId:** Diese Einstellung ist nur für den Epson Server relevant und dient der Identifikation des Servers. Die DeviceId kann im Epson Server Dashboard gefunden werden, welches über die Host IP Adresse aufgerufen werden kann.

## Pilotinstallation

Für die Finalisierung der Epson TSE Imlementierung suchen wir Partner für eine Pilotinstallation.

### Rahmenbedingungen

- Abgeschlossene oder kurz vor dem Abschluss stehende Implementierung der Middleware
- Registrierung am (Produktiv) Portal als PosCreator oder PosDealer
- Registrierung am Sandbox Portal und trial-configuration knowledge
- Partner bezieht die TSE Hardware für den zukünftigen Rollout über fiskaltrust

### Teilnahme an der Pilotinstallation

Bitte kontakieren Sie [support@fiskaltrust.de](mailto:support@fiskaltrust.de) für die Teilnahme am Epson-TSE-Pilotprojekt, vielen Dank!

## Hardware

### Epson TSE, USB

**Artikel Nummer:** 4445-21500                     

Technische Sicherungseinrichtung (TSE-Modul), Bauform: Nano-USB-Stick, Lebensdauer: 20 Mio. Signaturen, Zertifikatslaufzeit: 5 Jahre

Sonderartikel: Storno und Rückgabe unabhängig von der Lieferzeit ausgeschlossen.



### Preis & Vertrieb

[fiskaltrust.Portal](https://portal.fiskaltrust.de)
