---
slug: /product-description/germany/products-and-services/caas/products/middleware
title: fiskaltrust.Middleware
---

# fiskaltrust.Middleware

Die lokal installierte fiskaltrust.Middleware bietet die Einbindung von TSE aller Hersteller an die Registrierkasse, sowie eine vereinfachte Umsetzung der Anforderungen der Digitalen Schnittstelle der Finanzverwaltung für Kassensysteme.

![middleware](../media/middleware.png)

Die fiskaltrust.Middleware besteht aus dem fiskaltrust.Launcher welcher unter Windows und Unix, die jeweils relevanten Komponenten der fiskaltrust.Middleware installiert und diese dann als Service/Daemon auf dem POS-System, in einem Rechenzentrum oder in der fiskaltrust.Cloud (_Art des Deployments ist länderabhängig_) betreibt und für Aktualisierungen der Versionen sorgt. Die Aktualisierung des lokalen fiskaltrust.Launchers selbst ist nur durch neuerlichen Download aus dem fiskaltrust.Portal und manuellen Tausch der Installation möglich.

Unter Android ist der Launcher systembedingt eine monolithische Applikation, welche bereits fix alle relevanten Komponenten inkludiert.

## Hardware Voraussetzungen

| Hardware                          | Mindestanforderung                                           |
| --------------------------------- | ------------------------------------------------------------ |
| Allgemeine Hardware Anforderungen | Die Middleware kann grundsätzlich auf einem [Rasperry PI 2](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) betrieben werden. |
| lokaler Speicher                  | ca. 500 MB (200 MB für die Middleware + 200 MB reserviert für update-packages); optional: Speicher für SQLite DB (ca. 8-10Kb/Beleg) |
| Hardware Anschlüsse für TSE       | USB, SD, Micro-SD oder COM Port bei lokal angeschlossener TSE |
| Internet Connektivität            | optional: (WIFI)Modem für Internet Anschluß zur Nutzung von Cloud TSE, data as a service-, backup,- oder Konfigurations-/update Services. |

## Unterstützte Plattformen & TSEs

|                                                              | Windows                                 | Linux, macOS | Android |
| ------------------------------------------------------------ | --------------------------------------- | ------------ | ------- |
| [A-Trust Cloud TSE](../features/basics/tse/cloud/a-trust.md) | ja                                      |              |         |
| [Cryptovision Hardware-TSE](../features/basics/tse/hardware/cryptovision.md) | ja                                      | ja           |         |
| [Deutsche Fiskal Cloud-TSE](../features/basics/tse/cloud/deutsche-fiskal.md) | derzeit nur für Windows 10 zertifiziert | derzeit nur für Ubuntu LTS 20.04 zertifiziert |         |
| [Diebold-Nixdorf Hardware-TSE](../features/basics/tse/hardware/diebold-nixdorf.md) | ja                                      | ja           |         |
| [Epson Hardware-TSE](../features/basics/tse/hardware/epson.md) | ja                                      | ja           |         |
| [fiskaly Cloud-TSE](../features/basics/tse/cloud/fiskaly.md) | ja                                      | ja           | ja      |
| [Swissbit Hardware-TSE](../features/basics/tse/hardware/swissbit.md) | ja                                      | ja           | ja      |
| [Swissbit Cloud-TSE](../features/basics/tse/cloud/swissbit-cloud.md)| derzeit nur für Windows 10 zertifiziert | derzeit nur für Ubuntu LTS 20.04 zertifiziert |         |

### Systemvoraussetzungen

- [Windows](../features/supported-platforms/windows.md)
- [Linux, macOS](../features/supported-platforms/linux.md)
- [Android](../features/supported-platforms/android.md)

## Features

### Schnittstellentechnologien

freie Auswahl folgender konfigurierbarer Schnittstellentechnologien:

|      | Windows | Linux, macOS | Android |
| ---- | ------- | ------------ | ------- |
| WCF  | ja      |              |         |
| gRPC | ja      | ja           | ja      |
| REST | ja      | ja           | ja      |

### Schnittstellendokumentation

https://github.com/fiskaltrust/interface-doc/blob/master/doc/general/communication/communication.md

### Datenspeicher

Folgende Optionen sind über die Konfiguration der Queue einstellbar:

|                                                              | Windows | Linux, macOS | Android |
| ------------------------------------------------------------ | ------- | ------------ | ------- |
| [SQLite-Storage](../features/supported-databases/sqlite.md)       | ja      | ja           | ja      |
| [EF-Storage](../features/supported-databases/entity-framework.md)               | ja      | ja           |         |
| [MySQL-Storage](../features/supported-databases/mysql.md) | ja      | ja           | ja      |

### Daten-Export

-  [TAR-File-Export](../features/upload-and-export/tar-unload-and-export.md) 
-  [DSFinV-K-Export](../features/upload-and-export/dsfinvk-export.md) 
-  [DFKA-Taxonomie-Export](../features/upload-and-export/dfka-taxonomie-export.md) 

### Abstraktion

- [SCU-Abstraktion](../features/basics/scu-abstraction.md)  
- [Queue-Abstraktion](../features/basics/queue-abstraction.md) 
