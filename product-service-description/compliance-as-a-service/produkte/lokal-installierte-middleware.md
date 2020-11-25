# fiskaltrust.Middleware

Die lokal installierte fiskaltrust.Middleware bietet die Einbindung von TSE aller Hersteller an die Registrierkasse, sowie eine vereinfachte Umsetzung der Anforderungen der Digitalen Schnittstelle der Finanzverwaltung für Kassensysteme.

![middleware](../media/middleware.png)

Die fiskaltrust.Middleware besteht aus 

- einer Launcher App zum Installieren der Middleware lokal auf dem Kassenrechner
- einem Middleware Dienstprogramm (Service/Daemon; läuft dauerhaft auf dem Kassenrechner)

## Hardware Voraussetzungen

| Hardware                          | Mindestanforderung                                           |
| --------------------------------- | ------------------------------------------------------------ |
| Allgemeine Hardware Anforderungen | Die Middleware kann grundsätzlich auf einem [Rasperry PI 2](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) betrieben werden. |
| lokaler Speicher                  | ca. 500 MB (200 MB für die Middleware + 200 MB reserviert für update-packages); optional: Speicher für SQLite DB (ca. 8-10Kb/Beleg) |
| Hardware Anschlüsse für TSE       | USB, SD, Micro-SD oder COM Port bei lokal angeschlossener TSE |
| Internet Connektivität            | optional: (WIFI)Modem für Internet Anschluß zur Nutzung von Cloud TSE, data as a service-, backup,- oder Konfigurations-/update Services. Bitte beachten sie die [Firewall Einstellungen](../../../for-posdealers/03-sales/firewall-settings.md). |

## Unterstützte Plattformen

- [Windows](platform-android.md)
- [Linux, MacOs](platform-linux.md)
- [Android](platform-android.md)

## Features

### Schnittstellentechnologien

freie Auswahl folgender konfigurierbarer Schnittstellentechnologien:

- WCF
- gRPC
- REST

Schnittstellendokumentation: https://github.com/fiskaltrust/interface-doc/blob/master/doc/general/communication/communication.md

### Datenspeicher

Folgende Optionen sind über die Konfiguration der Queue einstellbar:

- Lokale Speicher:
  - [SQLite-Storage](../features/SQLite-Storage.md) 
  - [EF-Storage](../features/EF-Storage.md) 

- Cloud Speicher:
  -  [Azure-table-Storage](../features/Azure-table-Storage.md) 

### Daten Export

-  [TAR-File-Export](../../revisionssichere-daten-as-a-service/features/TAR-File-Export.md) 
-  [DSFinV-K-Export](../../revisionssichere-daten-as-a-service/features/DSFinV-K-Export.md) 
-  [revisionssichere-Queue-Items](../../revisionssichere-daten-as-a-service/features/revisionssichere-Queue-Items.md) 

### Abstraktion

- [SCU-Abstraktion](../features/SCU-Abstraktion.md)  
- [Queue-Abstraktion](../features/Queue-Abstraktion.md) 

### Interoperabilität

-  [TSE-A-Trust-Interoperabilität](../features/TSE-A-Trust-Interoperabilität.md) 
-  [TSE-Cryptovision-Interoperabilität](../features/TSE-Cryptovision-Interoperabilität.md) 
-  [TSE-Deutsche-Fiskal-Interoperabilität](../features/TSE-Deutsche-Fiskal-Interoperabilität.md) 
-  [TSE-Diebold-Nixdorf-Interoperabilität](../features/TSE-Diebold-Nixdorf-Interoperabilität.md) 
-  [TSE-Epson-Interoperabilität](../features/TSE-Epson-Interoperabilität.md) 
-  [TSE-Fiskaly-Interoperabilität](../features/TSE-Fiskaly-Interoperabilität.md) 
-  [TSE-Swissbit-Interoperabilität](../features/TSE-Swissbit-Interoperabilität.md) 
