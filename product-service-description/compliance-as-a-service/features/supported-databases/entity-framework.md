---
slug: /product-description/germany/products-and-services/caas/features/databases/ef
title: Entity Framework
---

# Entity Framework Storage

Mit Hilfe des Entity Framework Storage-Providers ist es möglich, die fiskaltrust.Middleware mit einem externen Microsoft SQL Server-Datenbanksystem zu betreiben. Die Middleware speichert dabei sämtliche beim Betrieb der Queue verarbeiteten Daten sowieso alle Konfigurationsdaten direkt in der Datenbank ab. 

Dieser Storage-Provider eignet sich besonders zum Aufbau ausfallsicherer Systeme, oder zur Einbindung der Middleware in bestehende Systemarchitekturen.

**Verfügbar ab Version**: 1.3.0

## Parameter

| Name                        | Beschreibung                                                                                                            | Optional              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------- |
| _connectionstring_          | EF-kompatibler Connection-String zum Datenbanksystem                                                                    | nein                  |
| _TarFileExportMode_         | `All` Aktiviert den automatischen TAR File Export der TSE auf Queue Level. `None` Deaktiviert den automatischen TAR File Export der TSE auf Queue Level. `Erased` TAR files werden nur exportiert und gespeichert wenn diese von der TSE gelöscht wurden.  (Werte: `All` / `None` / `Erased`)                           | ja (default: `true`)  |
| _StoreTemporaryExportFiles_ | Aktiviert den speicher von temporären Export Dateien im `fiskaltrust/service/Exports` ordner (Values: `true` / `false`) | ja (default: `false`) |
