# Bereitstellung von Stammdaten eines KassenBetreibers

Dieses Dokument beschreibt welche Stammdaten eines KassenBetreibers benötigt werden, um Produkte und Features von fiskaltrust nutzen zu können. Des weiteren wird definiert, wer bzw. welche Rolle (KassenHersteller, KassenHändler, KassenBetreiber) für die Bereitstellung dieser Daten verantwortlich ist, und wie diese Daten in das fisaltrust.Portal eingepflegt werden können.

## Stammdaten

### Firma

| Daten                              | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (derzeit noch nicht final definiert) | fiskaltrust Systemverwaltung | Verantwortlich für die Bereitstellung der Daten | Anmerkung                                                    |
| ---------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| **Firmenname**                     | Pflicht                                       |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **E-Mail Adresse**                 |                                               |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Straße**                         | Pflicht                                       |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Postleitzahl**                   | Pflicht                                       |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Stadt**                          | Pflicht                                       |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Länderkürzel**                   | Pflicht                                       |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Steuernummer**                   | Pflicht                                       |                                                       |                              | KassenHändler                                   | Feld ist im Formular für manuelle Anlage und im CSV Import für die Bulk-Einladung von KassenBetreibern nicht enthalten! KassenHändler müssen diese Daten derzeit manuell im Portal im Account des KassenHerstellers auf der Seite `Masterdata` nachtragen. |
| **UStId**                          | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | Optional                     | KassenHändler                                   |                                                              |
| **Primary Contact Vorname**        |                                               |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Primary Contact Nachname**       |                                               |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
| **Primary Contact E-Mail Adresse** |                                               |                                                       | Pflicht                      | KassenHändler                                   |                                                              |
Die oben genannten Daten können bis auf die Steuernummer entweder bei manueller Anlage des Accounts eines KassenBetreibers, oder via bulk-Einladung (CSV Datei) erzeugt werden:

#### Optionen zur Bereitstellung der Firmendaten

| **Option**                                           | Beschreibung                                                 | Empfohlene Berechtigung für die Verbindung                   | **Vorteile**                                                 | **Nachteile**                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **manuelle Erstellung**                              | Die Daten werden manuell im Portal unter `POS Operator` / `Invitation` / `Add PosOperator` eingetragen.<br />Die Empfänger der Primary Contact E-Mail Adressen werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des KassenBetreibers durch Akzeptieren der Einladung bestätigt. | Geringer Aufwand für Händler bei einer kleinen Anzahl von Betreibern | Der KassenHändler kann den Rollout Prozess nicht durchführen, wenn vom KassenBetreiber die Berechtigungen durch das Akzeptieren der Einladung nicht bestätigt wurden. |
| **CSV Import**                                       | Die Daten werden via CSV Datei importiert. <br />Die Empfänger der darin enthaltenen Primary Contact E-Mail Adressen werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des KassenBetreibers durch Akzeptieren der Einladung bestätigt. | Eine größere Anzahl an Betreiber wird in einem Schritt erstellt und ins Portal eingeladen. | Der KassenHändler kann den Rollout Prozess nicht durchführen, wenn vom KassenBetreiber die Berechtigungen durch das Akzeptieren der Einladung nicht bestätigt wurden. |
| **zusätzliche Rolle: KassenHändler Auto-Invitation** | In einem ersten Schritt holt sich der Händler bei den Betreibern das Einverständnis, in seinem Namen im fiskaltrust.Portal tätig sein zu dürfen, ein.<br />Die Daten werden via CSV Datei importiert.<br />Die Empfänger der darin enthaltenen Primary Contact E-Mail Adressen werden über den erfolgreichen Abschluss des Prozesses informiert, und die Vertragsunterlagen werden zur Dokumentation übermittelt. | schreiben/lesen inkl. Vertragsabschluss<br /><br />Die erforderlichen Berechtigungen müssen vom Händler vorab und außerhalb des fiskaltrust.Portals eingeholt werden. | Eine größere Anzahl an Betreiber wird in einem Schritt erstellt und ins Portal eingeladen.<br />Der Registrierungsprozess für Betreiber entfällt und stellt kein Hindernis für einen Rollout dar.<br /> |                                                              |

### Outlet (Standort)

Namen und Orte der einzelnen Betriebsstätten mit Kassen.

| DSFinV-K/DFKA-Taxonomie Version 2.1 | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (derzeit noch nicht final definiert) | fiskaltrust Systemverwaltung | Verantwortlich für die Bereitstellung der Daten | Anmerkung                                                    |
| ----------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| **Standortname**                    | Pflicht                                       |                                                       |                              | KassenHändler                                   | Feld `LocationId` bei CSV Import von Outlets                 |
| **Outlet-Nummer**                   |                                               |                                                       | Pflicht                      |                                                 |                                                              |
| **Straße**                          | Pflicht                                       |                                                       |                              | KassenHändler                                   |                                                              |
| **Postleitzahl**                    | Pflicht                                       |                                                       |                              | KassenHändler                                   |                                                              |
| **Stadt**                           | Pflicht                                       |                                                       |                              | KassenHändler                                   |                                                              |
| **Land**                            | Pflicht                                       |                                                       |                              | KassenHändler                                   |                                                              |
| **UStId des Standortes**            | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       |                              | KassenHändler                                   | UstID des Accounts wird verwendet                            |
| **Zuständiges Finanzamt**           |                                               | Pflicht                                               |                              | KassenHändler                                   | Wird für die automatisierte Finanzamtmeldung der TSE-Kasse benötigt. <br />Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten!<br />Feature ist von fiskaltrust noch nicht zur Verfügung gestellt. |

#### Optionen zur Bereitstellung der Outlet Daten

Die oben genannten Daten können bis auf die UStId des Standortes entweder bei manueller Anlage des Standortes/Outlets eines KassenBetreibers, oder via bulk-Import (CSV Datei) erzeugt werden:

| Option              | Beschreibung                                                 | Empfehlung                                              |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| **manuelle Anlage** | Standorte des Betreibers werden vom Händler manuell über das Portal im Account des Kassenbetreibers angelegt. | Empfohlen für weniger als 25 Standorte eines Betreibers |
| **CSV Import**      | Import von Standorten mit Hilde einer csv. Datei. Der Aufbau einer solchen Liste ist im Portal beschrieben. | Empfohlen für mehr als 25 Standorte eines Betreibers    |

### Queue (Kasse)

Stammdaten der einzelnen eingesetzten Kassen.

| DSFinV-K/DFKA-Taxonomie Version 2.1 | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (derzeit noch nicht final definiert) | Verantwortlich für die Bereitstellung der Daten | Anmerkung                                                    |
| ----------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| **Kassen-Id**                       | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |
| **Kassen-Hersteller-Marke**         | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Kassen-Modell**                   | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Kassen-Seriennummer**             | Pflicht                                       |                                                       | KassenHändler                                   | Im Zuge der Erstellung der Cashboxen; siehe [Kassenseriennummer](https://github.com/fiskaltrust/productdescription-de-doc/tree/master/glossar#kassenseriennummer) |
| **Kassen-Basiswährungscode**        | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |
| **Kassen-Software-Marke**           | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Kassen-Software-Version**         | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Terminal-ID**                     | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |
| **Terminal-Marke**                  | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Terminal-Modell**                 | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Terminal-Seriennummer**           | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |
| **Terminal-Software Marke**         | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **Terminal-Software Version**       | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | KassenHersteller                                |                                                              |
| **vat id**                          | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |
| **vat percentage**                  | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |
| **vat description**                 | Pflicht                                       |                                                       | KassenHersteller                                |                                                              |

#### Optionen zur Bereitstellung der Queue Daten

tbd.

## Agenturdaten

| Daten            | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | fiskaltrust Systemverwaltung | verantwortlich für die Bereitstellung der Daten | Anmerkung |
| ---------------- | --------------------------------------------- | ---------------------------- | ----------------------------------------------- | --------- |
| **Agentur Name** | Pflicht                                       |                              | KassenHändler                                   |           |
| **Straße**       | Pflicht                                       |                              | KassenHändler                                   |           |
| **Postleitzahl** | Pflicht                                       |                              | KassenHändler                                   |           |
| **Stadt**        | Pflicht                                       |                              | KassenHändler                                   |           |
| **Land**         | Pflicht                                       |                              | KassenHändler                                   |           |
| **Steuernummer** | Pflicht                                       |                              | KassenHändler                                   |           |
| **UStId**        | Pflicht wenn im Aufzeichnungssystem vorhanden |                              | KassenHändler                                   |           |

#### Optionen zur Bereitstellung der Agenturdaten

Die oben genannten Agenturdaten können manuell im Portal unter `POS Dealers` / `Agencies` / `Add New Agency` angelegt werden.

