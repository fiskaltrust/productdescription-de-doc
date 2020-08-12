# fiskaltrust.Middleware

**Produktnummer:** 0003

Die lokal installierte fiskaltrust.Middleware bietet die Einbindung von TSE aller Hersteller an die Registrierkasse, sowie eine vereinfachte Umsetzung der Anforderungen der Digitalen Schnittstelle der Finanzverwaltung für Kassensysteme.

![middleware](../media/middleware.png)

Die fiskaltrust.Middleware besteht aus 

- einer Launcher App zum Installieren der Middleware lokal auf dem Kassenrechner
- einem Middleware Dienstprogramm (Service/Daemon; läuft dauerhaft auf dem Kassenrechner)



## Voraussetzungen für den Betrieb

### Windows

Die fiskaltrust.Middleware läuft als Dienst auf allen Windows Plattformen ab Windows 7 in 32 + 64 bit.
Windows XP wird nicht unterstützt, da die gesetzliche Forderung der „sichern Systemumgebung“ nicht gegeben ist.

| Betriebssystem                      | Version           | C++ Runtime | .NET Framework |         |           |
| ----------------------------------- | ----------------- | ----------- | -------------- | ------- | --------- |
|                                     | unterstützt       | benötigt    | inkludiert     | minimum | empfohlen |
| Windows XP                          | nicht unterstützt |             |                |         |           |
| Windows Vista                       | nicht unterstützt |             |                |         |           |
| Windows Server 2008                 | nicht unterstützt |             |                |         |           |
| Windows 7                           | 32 & 64           | 32 or 64    | 4.0            | SP1     | SP1       |
| Windows 7 SP1                       | 32 & 64           | 32 or 64    | 4.5            | 4.6.1   | 4.7.2     |
| Windows Server 2008 R2              | 32 & 64           | 32 or 64    | 4.0            | 4.6.1   | 4.7.2     |
| Windows 8                           | 32 & 64           | 32 or 64    | 4.5            | 4.6.1   | 4.7.2     |
| Windows Server 2012                 | 32 & 64           | 32 or 64    | 4.5            | 4.6.1   | 4.7.2     |
| Windows 8.1                         | 32 & 64           | 32 or 64    | 4.5.1          | 4.6.1   | 4.7.2     |
| Windows Server 2012 R2              | 32 & 64           | 32 or 64    | 4.5.1          | 4.6.1   | 4.7.2     |
| Windows 10 1507                     | 32 & 64           | 32 or 64    | 4.6            | 4.6.1   | 4.7.2     |
| Windows 10 IoT Enterprise 2015 LTSB | 32 & 64           | 32 or 64    | 4.6            | 4.6.1   | 4.7.2     |
| Windows 10 1511                     | 32 & 64           | 32 or 64    | 4.6.1          | 4.7.2   | 4.7.2     |
| Windows 10 1607                     | 32 & 64           | 32 or 64    | 4.6.2          | 4.7.2   | 4.7.2     |
| Windows Server 2016                 | 32 & 64           | 32 or 64    | 4.6.2          | 4.7.2   | 4.7.2     |
| Windows 10 IoT Enterprise 2016 LTSB | 32 & 64           | 32 or 64    | 4.6.2          | 4.7.2   | 4.7.2     |
| Windows 10 1703                     | 32 & 64           | 32 or 64    | 4.7            | 4.7.2   | 4.7.2     |
| Windows 10 1709                     | 32 & 64           | 32 or 64    | 4.7.1          | 4.7.2   | 4.7.2     |
| Windows 10 1803-1809                | 32 & 64           | 32 or 64    | 4.7.2          | 4.7.2   | 4.7.2     |
| Windows Server 2019                 | 32 & 64           | 32 or 64    | 4.7.2          | 4.7.2   | 4.7.2     |
| Windows 10 1903-1909                | 32 & 64           | 32 or 64    | 4.8            | 4.8     | 4.8       |
| Windows 10 IoT Enterprise 2019 LTSC | 32 & 64           | 32 or 64    | 4.8            | 4.8     | 4.8       |



### Linux, MacOs

Die fiskaltrust.Middleware kann in Österreich und Frankreich auf verschiedenen Linux-Varianten als Deamon betrieben werden. 

Starting with version 1.3.3, it's possible to run the German Middleware on Linux, using [Mono](https://www.mono-project.com/). Just configure a Cashbox and download the Linux launcher via the respective button in the Cashbox overview. Like on Windows, the downloaded zip file contains scripts to install and test the Middleware.

### Requirements

In general, it's possible to run the Middleware on each Linux distribution that is supported by Mono (_Ubuntu_, _Debian_, _Raspbian_, _CentOS_ and _Fedora_, including their derivatives). Most testing at fiskaltrust is performed with Ubuntu and Debian, and we hence recommend to use these distributions.

**Please make sure to install the latest Mono version**. The default versions in the package repositories are usually extremely outdated, so please follow the official [Mono guidelines](https://www.mono-project.com/download/stable/#download-lin-ubuntu) to get the latest packages. We recommend to use at least version 6.8.0, if possible.

Other than that, no specific software needs to be installed (aside from the dependencies Mono has).

### Supported packages

- Both Entity Framework and SQLite queues can be launched on Linux, starting from version 1.3.3. 
- Currently, SCU support is limited to the fiskaly and the Cryptovision packages, starting from version 1.3.3. Other SCUs (like Swissbit) will be supported soon.

### Limitations

Currently, the Middleware only supports gRPC and REST when executed on Linux. This means that SOAP is right now not supported (due to open bugs in Mono's WCF implementation). 

If you haven't already decided for a communication technology, we strongly recommend gRPC, especially in Linux scenarios, as it provides a cleaner, more stable interface. Please refer to our demo project (currently available in [C#](https://github.com/fiskaltrust/middleware-demo-dotnet), [Java](https://github.com/fiskaltrust/middleware-demo-java), [Node.js](https://github.com/fiskaltrust/middleware-demo-node) and [others](https://github.com/fiskaltrust)) for sample implementations.

#### REST limitations

When using REST, the HTTP endpoint slightly differs from the Windows version, as the version prefix cannot be included because of the mentioned Mono issues. Hence, a REST URL on Linux would look like this: `http://localhost:1500/a4c4e466-721a-4011-a9a5-a23827a21b45/sign` (instead of `../v1/sign`).

In addition, if REST is used, a gRPC endpoint needs to be configured as the **primary** endpoint of the Queue and the SCU, so it can be properly used by our packages.

We will unify the experiences on Linux and Windows in an upcoming version.



### Android

Die fiskaltrust.Middleware für Android befindet sich in Entwicklung.



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