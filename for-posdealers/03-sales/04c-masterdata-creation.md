# Erzeugung der für den DSFinV-K Export benötigten Stammdaten eines KassenBetreibers

Dieses Dokument beschreibt welche Stammdaten eines KassenBetreibers benötigt werden, um einen DSFinV-K Export zu erzeugen, wer (KassenHersteller, KassenHändler, KassenBetreiber) für die Lieferung dieser Daten verantwortlich ist, und wie diese Daten in das fisaltrust.Portal eingepflegt werden können.

## Stammdaten

### Firma

| DSFinV-K/DFKA-Taxonomie Version 2.1 | Verantwortlich für die Erzeugung der Daten | Anmerkung                                                    |
| ----------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| **Firmenname***                     | KassenHändler                              |                                                              |
| **Straße***                         | KassenHändler                              |                                                              |
| **Postleitzahl***                   | KassenHändler                              |                                                              |
| **Stadt***                          | KassenHändler                              |                                                              |
| **Länderkürzel***                   | KassenHändler                              |                                                              |
| **Steuernummer***                   | KassenHändler                              | Feld ist nicht im CSV Import für die Bulk-Einladung von KassenBetreibern enthalten! KassenHändler müssen diese Daten derzeit manuell im Portal im Account des KassenHerstellers auf der Seite `Masterdata` hinterlegen. |
| **UStId**                           | KassenHändler                              |                                                              |

Die oben genannten Daten können bis auf die Steuernummer entweder bei manueller Anlage des Accounts eines KassenBetreibers, oder via bulk-Einladung (CSV Datei) erzeugt werden:

#### Optionen zur Erstellung der Firmendaten

| **Option**                                           | Beschreibung                                                 | Empfohlene Berechtigung für die Verbindung                   | **Vorteile**                                                 | **Nachteile**                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **manuelle Einladung**                               | E-Mail Adressen werden manuell in ein Eingabefeld für den Versand der Einladungen eingetragen.<br />Die Empfänger werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des Betreibers durch Akzeptieren der Einladung bestätigt. | Geringer Aufwand für Händler bei einer kleinen Anzahl von Betreibern | Einladung kann vom Betreiber übersehen werden wenn diese nicht vorangekündigt wurde. |
| **CSV Import von E-Mail Adressen**                   | E-Mail Adressen werden via CSV Datei für den Versand der Einladungen importiert. <br />Die Empfänger werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des Betreibers durch Akzeptieren der Einladung bestätigt. | Eine größere Anzahl an Betreiber wird in einem Schritt ins Portal eingeladen. | Einladung kann vom Betreiber übersehen werden wenn diese nicht vorangekündigt wurde. |
| **zusätzliche Rolle: KassenHändler Auto-Invitation** | In einem ersten Schritt holt sich der Händler bei den Betreibern das Einverständnis, in seinem Namen im fiskaltrust.Portal tätig sein zu dürfen, ein.<br />E-Mail Adressen werden via CSV Datei für den Versand der Einladungen importiert. <br />Die Empfänger werden über den erfolgreichen Abschluss des Prozesses informiert, und die Vertragsunterlagen werden zur Dokumentation übermittelt. | schreiben/lesen inkl. Vertragsabschluss<br /><br />Die erforderlichen Berechtigungen müssen vom Händler vorab und außerhalb des fiskaltrust.Portals eingeholt werden. | Eine größere Anzahl an Betreiber wird in einem Schritt ins Portal eingeladen.<br />Der Registrierungsprozess für Betreiber entfällt und stellt kein Hindernis für einen Rollout dar.<br /> |                                                              |

### Outlet (Standort)

Namen und Orte der einzelnen Betriebsstätten mit Kassen.

| DSFinV-K/DFKA-Taxonomie Version 2.1 | Verantwortlich für die Erzeugung der Daten | Anmerkung                                                    |
| ----------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| **Standortname***                   | KassenHändler                              | Feld `LocationId` bei CSV Import von Outlets                 |
| **Straße***                         | KassenHändler                              |                                                              |
| **Postleitzahl***                   | KassenHändler                              |                                                              |
| **Stadt***                          | KassenHändler                              |                                                              |
| **Land***                           | KassenHändler                              |                                                              |
| **UStId des Standortes**            | KassenHändler                              | Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten! |
| **Zuständiges Finanzamt**           | KassenHändler                              | Wird für die automatisierte Finanzamtmeldung der TSE-Kasse benötigt. <br />Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten!<br />Feature ist von fiskaltrust noch nicht zur Verfügung gestellt. |

#### Optionen zur Erzeugung der Outlet Daten

Die oben genannten Daten können bis auf die UStId des Standortes entweder bei manueller Anlage des Standortes/Outlets eines KassenBetreibers, oder via bulk-Import (CSV Datei) erzeugt werden:

| Option                        | Beschreibung                                                 | Empfehlung                                              |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| **manuelle Anlage**           | Standorte des Betreibers werden vom Händler manuell über das Portal im Account des Kassenbetreibers angelegt. | Empfohlen für weniger als 25 Standorte eines Betreibers |
| **CSV Import von Standorten** | Import von Standorten mit Hilde einer csv. Datei. Der Aufbau einer solchen Liste ist im Portal beschrieben | Empfohlen für mehr als 25 Standorte eines Betreibers    |

### Queue (Kasse)

Stammdaten der einzelnen eingesetzten Kassen.

| DSFinV-K/DFKA-Taxonomie Version 2.1 | Verantwortlich für die Erzeugung der Daten | Anmerkung                                                    |
| ----------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| **Kassen-Id***                      | KassenHersteller                           |                                                              |
| **Kassen-Hersteller-Marke**         | KassenHersteller                           |                                                              |
| **Kassen-Modell**                   | KassenHersteller                           |                                                              |
| **Kassen-Seriennummer***            | KassenHändler                              | Im Zuge der Erstellung der Cashboxen; siehe [Kassenseriennummer](https://github.com/fiskaltrust/productdescription-de-doc/tree/master/glossar#kassenseriennummer) |
| **Kassen-Basiswährungscode***       | KassenHersteller                           |                                                              |
| **Kassen-Software-Marke**           | KassenHersteller                           |                                                              |
| **Kassen-Software-Version**         | KassenHersteller                           |                                                              |
| **Terminal-ID***                    | KassenHersteller                           |                                                              |
| **Terminal-Marke**                  | KassenHersteller                           |                                                              |
| **Terminal-Modell**                 | KassenHersteller                           |                                                              |
| **Terminal-Seriennummer***          | KassenHersteller                           |                                                              |
| **Terminal-Software Marke**         | KassenHersteller                           |                                                              |
| **Terminal-Software Version**       | KassenHersteller                           |                                                              |

#### Optionen zur Erzeugung der Qeue Daten

tbd.

## Agenturdaten

| DSFinV-K/DFKA-Taxonomie Version 2.1 | verantwortlich für die Erzeugung der Daten | Anmerkung |
| ----------------------------------- | ------------------------------------------ | --------- |
| **Agentur Name***                   | KassenHändler                              |           |
| **Straße**                          | KassenHändler                              |           |
| **Postleitzahl***                   | KassenHändler                              |           |
| **Stadt***                          | KassenHändler                              |           |
| **Land***                           | KassenHändler                              |           |
| **Steuernummer***                   | KassenHändler                              |           |
| **UStId**                           | KassenHändler                              |           |

#### Optionen zur Erzeugung der Agenturdaten

Die oben genannten Agenturdaten können derzeit nur manuell im Portal angelegt werden.

## Legende

**Pflichtfelder*** sind mit einem Stern (*****) markiert. Die übrigen **Felder** sind zwingend mit Werten zu hinterlegen, sofern das Aufzeichnungssystem Daten hierzu enthält. 

