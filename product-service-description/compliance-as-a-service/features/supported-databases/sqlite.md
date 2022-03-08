---
slug: /product-description/germany/products-and-services/caas/features/databases/sqlite
title: SQLite
---

# SQLite Storage

Die Verwendung des SQLite Storage-Providers ermöglicht den Betrieb der Middleware mit einer lokalen, dateibasierten Datenbank. Die Middleware speichert dabei sämtliche beim Betrieb der Queue verarbeiteten Daten sowie alle Konfigurationsdaten direkt in der Datenbank ab. 

Dieser Storage-Provider eignet sich besonders zum einfachen Aufbau kleinerer, lokal betriebener Kassensysteme.


**Verfügbar ab Version**: 1.3.0

## Parameter
| Name                  | Beschreibung                                                                                  | Optional             |
| --------------------- | --------------------------------------------------------------------------------------------- | -------------------- |
| _EnableTarFileExport_ | Aktiviert den automatischen TAR File Export der TSE auf Queue Level (Werte: `true` / `false`) | ja (default: `true`) |
