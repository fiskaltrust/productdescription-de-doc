# Epson Interoperabilität

## SCU

Das _fiskaltrust.Middleware.SCU.DE.Epson_-Package ermöglicht die Verbindung der Middleware mit einer Epson-TSE.

**Alpha Version verfügbar ab Version**: 1.3.10 

**Status:** https://github.com/fiskaltrust/roadmap/issues/25

## Parameter

| Name | Beschreibung | Optional |
| ---- | ------------ |--------- |
| _tseurl_ | Die URL, unter der die TSE erreichbar ist (ohne Port) | nein |
| _tseport_ | Der Port, hinter dem die TSE unter der angegebenen URL erreichbar ist. Falls nicht definiert, wird der Standard-Port wie vom Hersteller definiert verwendet. | ja |
| _deviceid_ | Die für die TSE spezifische Geräte-ID. Falls nicht angegeben, wird der Defaultwert verwendet. | ja |
| _timeout_ | Timeout-Wert für die Kommunikation mit der TSE in Millisekunden. Falls nicht angegeben, wird der Default-Wert von 60 Sekunden verwendet. | ja |

## Konfiguration

![scu-de-epson-config](../media/scu-de-epson-config.png)

- **Host:** The DNS or IP Address of the Epson Server, Epson Printer or local webservice
- **Port:** The Port of the Epson Server, Printer or local webservice, usually this is 8009
- **DeviceId:** This setting is only important for the Server. It identifies the device. The deviceid can be found in the EpsonTSE Server dashboard which is available via the hosts ip address.

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
