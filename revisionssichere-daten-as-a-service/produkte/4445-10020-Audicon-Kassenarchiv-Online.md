# Audicon Kassenarchiv Online (AKO)

**Produktnummer:** 4445-10020

Das AKO ist unabhängig von der Fiskaltrust-Middleware. Die Daten werden durch manuelles Hochladen oder API-basiertes Hochladen von strukturierten Daily-Closing-Daten oder anderen Blob-Daten, wie zum Beispiel Verfahrensdokumentation, erfasst. Alle ursprünglich hochgeladenen Daten werden mithilfe eines unveränderlichen Speichers im Backend für über 10 Jahre im Original beibehalten.

![ako-data-flow](../media/ako-data-flow.png)                               

## Datenupload Optionen

![ako-data-upload-options](../media/ako-data-upload-options.png)

### Manueller Datenupload

Folgende Daten können manuell über einen File-Drop in das Archiv hochgeladen werden: 

| File Typ | Datenprüfung bei upload |
| -------- | ----------------------- |
| DSFinV-K | ja                      |
| TSE TAR  | nein                    |
| blob     | nein                    |



### Automatisierter Datenupload

Folgende Daten können über einen automatisierten Daten-upload via API in das Archiv hochgeladen werden: 

| File Typ | Datenprüfung bei upload |
| -------- | ----------------------- |
| DSFinV-K | ja                      |
| TSE TAR  | nein                    |



### Automatischer Datenupload

Folgende Daten können über einen automatischen Daten-upload via fiskaltrust.Middleware in das Archiv hochgeladen werden: 

| File Typ | Datenprüfung bei upload |
| -------- | ----------------------- |
| DSFinV-K | ja                      |
| TSE TAR  | nein                    |



## Features:

- [DSFinV-K upload inklusive Datenprüfung eingehender Daten](../features/DSFinV-K-upload.md)
- [blob-file upload](../features/blob-file-upload.md)
- [TAR-file upload](../features/TAR-file-upload.md)
- [Datenexport, basierend auf Start- und Enddatum, im fiskaltrust-Portal für DSFinV-K-Datei](../features/DSFinV-K-Export.md)
- Datenexport, basierend auf einem Token, der Zeitrahmen enthält, über eine AKO-Webseite (Mandantenlösung für Betriebsprüfungen)
- [Request & Responses bleiben im Original gespeichert](../features/unveraenderbarer-speicher.md)