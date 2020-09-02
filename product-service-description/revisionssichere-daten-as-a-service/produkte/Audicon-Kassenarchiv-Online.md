# Audicon Kassenarchiv Online (AKO) (in Entwicklung)

**Produktnummer:** 4445-040020

Das AKO ist grundsätzlich unabhängig von der Fiskaltrust-Middleware. Die Daten werden durch manuelles Hochladen oder API-basiertes Hochladen von strukturierten Tagesabschluss-Daten oder anderen Blob-Daten, wie zum Beispiel Verfahrensdokumentation, erfasst. Alle ursprünglich hochgeladenen Daten werden mithilfe eines unveränderlichen Speichers im Backend, entsprechend den steuerlichen Bestimmungen in deutschen Rechenzentren, über einen Zeitraum von 12 Jahren im Original beibehalten.

![ako-data-flow](../media/ako-data-flow.png)                               

## Datenupload Optionen

![ako-data-upload-options](../media/ako-data-upload-options.png)

### Manueller Datenupload

Folgende Daten können manuell über einen File-Drop in das Archiv hochgeladen werden: 

| File Typ | DSFinV-K Datenprüfung bei upload |
| -------- | ----------------------- |
| DSFinV-K | ja                      |
| TSE TAR  | nein                    |
| blob     | nein                    |



### Automatisierter Datenupload

Folgende Daten können über einen automatisierten Daten-upload via API in das Archiv hochgeladen werden: 

| File Typ | DSFinV-K Datenprüfung bei upload |
| -------- | -------------------------------- |
| DSFinV-K | ja                               |
| TSE TAR  | nein                             |
| blob     | nein                             |



### Automatischer Datenupload

Folgende Daten werden über einen automatischen Daten-upload via fiskaltrust.Middleware in das Archiv hochgeladen, damit sowohl Belegdaten von Kassen, die die fiskaltrust.Middleware nicht unterstützen, als auch Belgdaten von Kassen, die die fiskaltrust.Middleware unterstützen, an einem zentralen Ort revisionssicher aufbewahrt werden: 

| File Typ | DSFinV-K Datenprüfung bei upload |
| ---------- | ----------------------- |
| Belegdaten | nein                    |
| TSE TAR    | nein                    |



## Features:

- [DSFinV-K upload inklusive Datenprüfung eingehender Daten](../features/DSFinV-K-upload.md)
- [blob-file upload](../features/blob-file-upload.md)
- [TAR-file upload](../features/TAR-file-upload.md)
- [Datenexport, basierend auf Start- und Enddatum, im fiskaltrust-Portal für DSFinV-K-Datei](../features/DSFinV-K-Export.md)
- Datenexport, basierend auf einem Token, der Zeitrahmen enthält, über eine AKO-Webseite (Mandantenlösung für Betriebsprüfungen)
- [Request & Responses bleiben im Original gespeichert](../features/unveraenderbarer-speicher.md)

## Verkaufseinheit

Verkauf pro Filiale pro Jahr