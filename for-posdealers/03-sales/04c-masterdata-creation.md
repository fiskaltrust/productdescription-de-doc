# Erzeugung der für den DSFinV-K Export benötigten Stammdaten eines KassenBetreibers

Für den DSFinV-K Export müssen beim KassenBetreiber folgende Stammdaten erzeugt und hinterlegt sein:

## Firma

| DSFinV-K/DFKA-Taxonomie Version 2.1 | Datenquelle/-lieferant | Anmerkung                                                    |
| ----------------------------------- | ---------------------- | ------------------------------------------------------------ |
| **Firmenname**                      | KassenHändler          |                                                              |
| **Straße**                          | KassenHändler          |                                                              |
| **Postleitzahl**                    | KassenHändler          |                                                              |
| **Stadt**                           | KassenHändler          |                                                              |
| **Länderkürzel**                    | KassenHändler          |                                                              |
| **Steuernummer**                    | KassenHändler          | Feld ist nicht im CSV Import für die Bulk-Einladung von KassenBetreibern enthalten! KassenHändler müssen diese Daten derzeit manuell im Portal im Account des KassenHerstellers auf der Seite `Masterdata` hinterlegen. |
| **UStId**                           | KassenHändler          |                                                              |

Die oben genannten Daten können bis auf die Steuernummer entweder bei manueller Anlage des Accounts eines KassenBetreibers, oder via bulk-Einladung (CSV Datei) erzeugt werden.

## Outlet (Standort)

| DSFinV-K/DFKA-Taxonomie Version 2.1 | Datenquelle/-lieferant | Anmerkung                                                    |
| ----------------------------------- | ---------------------- | ------------------------------------------------------------ |
| **Standortname**                    | KassenHändler          | Feld `LocationId` bei CSV Import von Outlets                 |
| **Straße**                          | KassenHändler          |                                                              |
| **Postleitzahl**                    | KassenHändler          |                                                              |
| **Stadt**                           | KassenHändler          |                                                              |
| **Land**                            | KassenHändler          |                                                              |
| **UStId des Standortes**            | KassenHändler          | Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten! |
| **Zuständiges Finanzamt**           | KassenHändler          | Wird für die automatisierte Finanzamtmeldung der TSE-Kasse benötigt. <br />Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten!<br />Feature ist von fiskaltrust noch nicht zur Verfügung gestellt. |

Die oben genannten Daten können bis auf die UStId des Standortes entweder bei manueller Anlage des Standortes/Outlets eines KassenBetreibers, oder via bulk-Import (CSV Datei) erzeugt werden.



## Queue (Kasse)

| DSFinV-K/DFKA-Taxonomie Version 2.1      | Anmerkung |
| ---------------------------------------- | --------- |
| **Kassen-Id**                            |           |
| **Kassen-Hersteller-Marke**              |           |
| **Kassen-Modell**                        |           |
| **Kassen-Seriennummer**                  |           |
| **Kassen-Basiswährungscode**             |           |
| **Kasse-Umsatzsteuer nicht ermittelbar** |           |
| **Kassen-Software-Marke**                |           |
| **Kassen-Software-Version**              |           |
| **Terminal-ID**                          |           |
| **Terminal-Marke**                       |           |
| **Terminal-Modell**                      |           |
| **Terminal-Seriennummer**                |           |
| **Terminal-Softare Marke**               |           |
| **Terminal-Software Version**            |           |

## Agenturdaten

| DSFinV-K/DFKA-Taxonomie Version 2.1 | Anmerkung |
| ----------------------------------- | --------- |
| **Agentur-Id**                      |           |
| **Agentur Name**                    |           |
| **Straße**                          |           |
| **Postleitzahl**                    |           |
| **Stadt**                           |           |
| **Land**                            |           |
| **Steuernummer**                    |           |
| **UStId**                           |           |



