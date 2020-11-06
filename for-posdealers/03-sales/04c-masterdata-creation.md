# Bereitstellung von Stammdaten eines KassenBetreibers

Dieses Dokument beschreibt welche Stammdaten eines KassenBetreibers benötigt werden, um Produkte und Features von fiskaltrust nutzen zu können. Des weiteren wird definiert, wer bzw. welche Rolle (KassenHersteller, KassenHändler, KassenBetreiber) für die Bereitstellung dieser Daten verantwortlich ist, und wie diese Daten in das fisaltrust.Portal eingepflegt werden können.

## Stammdaten

### Firma

| Daten                              | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (derzeit noch nicht final definiert) | fiskaltrust Systemverwaltung | Anmerkung                                                    |
| ---------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| **Firmenname**                     | Pflicht                                       |                                                       | Pflicht                      |                                                              |
| **E-Mail Adresse**                 |                                               |                                                       | Pflicht                      |                                                              |
| **Straße**                         | Pflicht                                       |                                                       | Pflicht                      |                                                              |
| **Postleitzahl**                   | Pflicht                                       |                                                       | Pflicht                      |                                                              |
| **Stadt**                          | Pflicht                                       |                                                       | Pflicht                      |                                                              |
| **Länderkürzel**                   | Pflicht                                       |                                                       | Pflicht                      |                                                              |
| **Steuernummer**                   | Pflicht                                       |                                                       |                              | Feld ist im Formular für manuelle Anlage und im CSV Import für die Bulk-Einladung von KassenBetreibern nicht enthalten! KassenHändler müssen diese Daten derzeit manuell im Portal im Account des KassenHerstellers auf der Seite `Masterdata` nachtragen. |
| **UStId**                          | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | Optional                     |                                                              |
| **Primary Contact Vorname**        |                                               |                                                       | Pflicht                      |                                                              |
| **Primary Contact Nachname**       |                                               |                                                       | Pflicht                      |                                                              |
| **Primary Contact E-Mail Adresse** |                                               |                                                       | Pflicht                      |                                                              |
Die oben genannten Daten können bis auf die Steuernummer entweder bei manueller Anlage des Accounts eines KassenBetreibers, oder via bulk-Einladung (CSV Datei) erzeugt werden:

#### Optionen zur Bereitstellung der Firmendaten

| **Option**                                           | Beschreibung                                                 | Empfohlene Berechtigung für die Verbindung                   | **Vorteile**                                                 | **Nachteile**                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **manuelle Erstellung**                              | Die Daten werden manuell im Portal unter `POS Operator` / `Invitation` / `Add PosOperator` eingetragen.<br />Die Empfänger der Primary Contact E-Mail Adressen werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des KassenBetreibers durch Akzeptieren der Einladung bestätigt. | Geringer Aufwand für Händler bei einer kleinen Anzahl von Betreibern | Der KassenHändler kann den Rollout Prozess nicht durchführen, wenn vom KassenBetreiber die Berechtigungen durch das Akzeptieren der Einladung nicht bestätigt wurden. |
| **CSV Import**                                       | Die Daten werden via CSV Datei importiert. <br />Die Empfänger der darin enthaltenen Primary Contact E-Mail Adressen werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des KassenBetreibers durch Akzeptieren der Einladung bestätigt. | Eine größere Anzahl an Betreiber wird in einem Schritt erstellt und ins Portal eingeladen. | Der KassenHändler kann den Rollout Prozess nicht durchführen, wenn vom KassenBetreiber die Berechtigungen durch das Akzeptieren der Einladung nicht bestätigt wurden. |
| **zusätzliche Rolle: KassenHändler Auto-Invitation** | In einem ersten Schritt holt sich der Händler bei den Betreibern das Einverständnis, in seinem Namen im fiskaltrust.Portal tätig sein zu dürfen, ein.<br />Die Daten werden via CSV Datei importiert.<br />Die Empfänger der darin enthaltenen Primary Contact E-Mail Adressen werden über den erfolgreichen Abschluss des Prozesses informiert, und die Vertragsunterlagen werden zur Dokumentation übermittelt. | schreiben/lesen inkl. Vertragsabschluss<br /><br />Die erforderlichen Berechtigungen müssen vom Händler vorab und außerhalb des fiskaltrust.Portals eingeholt werden. | Eine größere Anzahl an Betreiber wird in einem Schritt erstellt und ins Portal eingeladen.<br />Der Registrierungsprozess für Betreiber entfällt und stellt kein Hindernis für einen Rollout dar.<br /> |                                                              |

### Outlet (Standort)

Namen und Orte der einzelnen Betriebsstätten mit Kassen.

| Daten                     | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (derzeit noch nicht final definiert) | fiskaltrust Systemverwaltung | Anmerkung                                                    |
| ------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| **Standortname**          | Pflicht                                       |                                                       |                              | Feld `LocationId` bei CSV Import von Outlets                 |
| **Outlet-Nummer**         |                                               |                                                       | Pflicht                      |                                                              |
| **Straße**                | Pflicht                                       |                                                       |                              |                                                              |
| **Postleitzahl**          | Pflicht                                       |                                                       |                              |                                                              |
| **Stadt**                 | Pflicht                                       |                                                       |                              |                                                              |
| **Land**                  | Pflicht                                       |                                                       |                              |                                                              |
| **UStId des Standortes**  | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       |                              | UstID des Accounts wird verwendet                            |
| **Zuständiges Finanzamt** |                                               | Pflicht                                               |                              | Wird für die automatisierte Finanzamtmeldung der TSE-Kasse benötigt. <br />Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten!<br />Feature ist von fiskaltrust noch nicht zur Verfügung gestellt. |

#### Optionen zur Bereitstellung der Outlet Daten

Die oben genannten Daten können bis auf die UStId des Standortes entweder bei manueller Anlage des Standortes/Outlets eines KassenBetreibers, oder via bulk-Import (CSV Datei) erzeugt werden:

| Option              | Beschreibung                                                 | Empfehlung                                              |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| **manuelle Anlage** | Standorte des Betreibers werden vom Händler manuell über das Portal im Account des Kassenbetreibers angelegt. | Empfohlen für weniger als 25 Standorte eines Betreibers |
| **CSV Import**      | Import von Standorten mit Hilde einer csv. Datei. Der Aufbau einer solchen Liste ist im Portal beschrieben. | Empfohlen für mehr als 25 Standorte eines Betreibers    |

### Queue (Kasse)

Stammdaten der einzelnen eingesetzten Kassen.

| Daten                         | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (derzeit noch nicht final definiert) | Anmerkung                                                    |
| ----------------------------- | --------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| **Kassen-Id**                 | Pflicht                                       |                                                       | possystemid (automatisch generiert bei ft)? dzt. chasboxidentification |
| **Kassen-Hersteller-Marke**   | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | (Portal - Brand) nicht im dsfinvk.export enthalten/leer      |
| **Kassen-Modell**             | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | Portal - Type? nicht im dsfinvk.export enthalten/leer        |
| **Kassen-Seriennummer**       | Pflicht                                       |                                                       | Im Zuge der Erstellung der Cashboxen; siehe [Kassenseriennummer](https://github.com/fiskaltrust/productdescription-de-doc/tree/master/glossar#kassenseriennummer) |
| **Kassen-Basiswährungscode**  | Pflicht                                       |                                                       | leer im export                                               |
| **Kassen-Software-Marke**     | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | ft.middleware (automatisch generiert)                        |
| **Kassen-Software-Version**   | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       | sw version von ft (autom. generiert)                         |
| **Terminal-ID**               | Pflicht                                       |                                                       |                                                              |
| **Terminal-Marke**            | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       |                                                              |
| **Terminal-Modell**           | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       |                                                              |
| **Terminal-Seriennummer**     | Pflicht                                       |                                                       |                                                              |
| **Terminal-Software Marke**   | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       |                                                              |
| **Terminal-Software Version** | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                       |                                                              |
| **vat id**                    | Pflicht                                       |                                                       |                                                              |
| **vat percentage**            | Pflicht                                       |                                                       |                                                              |
| **vat description**           | Pflicht                                       |                                                       |                                                              |

#### Optionen zur Bereitstellung der Queue Daten

tbd.

## Agenturdaten

| Daten            | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | fiskaltrust Systemverwaltung | Anmerkung |
| ---------------- | --------------------------------------------- | ---------------------------- | --------- |
| **Agentur Name** | Pflicht                                       |                              |           |
| **Straße**       | Pflicht                                       |                              |           |
| **Postleitzahl** | Pflicht                                       |                              |           |
| **Stadt**        | Pflicht                                       |                              |           |
| **Land**         | Pflicht                                       |                              |           |
| **Steuernummer** | Pflicht                                       |                              |           |
| **UStId**        | Pflicht wenn im Aufzeichnungssystem vorhanden |                              |           |

#### Optionen zur Bereitstellung der Agenturdaten

Die oben genannten Agenturdaten können manuell im Portal unter `POS Dealers` / `Agencies` / `Add New Agency` angelegt werden.

## Verantwortlichkeiten 

Nachfolgend wird beschreiben, welche Rolle bezüglich der Verwaltung der Stammdaten für welche Aktivitäten verantwortlich ist, und welche Rollen zu beteiligen sind.

### Begriffe

- **Responsible** – verantwortlich (Durchführungsverantwortung), zuständig für die eigentliche Durchführung. Die Person, die die Initiative für die Durchführung (auch durch Andere) gibt. Sie kann die Aktivität auch selbst durchführen. Wird auch als Verantwortung im disziplinarischen Sinne interpretiert.
- **Accountable** – rechenschaftspflichtig (Kosten-, bzw. Gesamtverantwortung), verantwortlich im Sinne von „genehmigen“, „billigen“ oder „unterschreiben“. Die Person, die im rechtlichen oder kaufmännischen Sinne die Verantwortung trägt. Wird auch als Verantwortung aus Kostenstellensicht interpretiert.
-  **Support** – unterstützend. Die Person kann eine unterstützende Rolle spielen oder Betriebsmittel zur Verfügung stellen. In Abgrenzung zu C (Consulted), welche primär Wissen beisteuert, wird S (Support) meist als eine Rolle gesehen, die dem R (Responsible) aktiv Arbeit abnimmt.
- **Consulted** – konsultiert. Eine Person, die vielleicht nicht direkt an der Umsetzung beteiligt ist, aber relevante Informationen für die Umsetzung hat und deshalb befragt werden soll oder muss.
- **Informed** – zu informieren (Informationsrecht). Eine Person, die Informationen über den Verlauf bzw. das Ergebnis der Tätigkeit erhält oder die Berechtigung besitzt, Auskunft zu erhalten.

| Stammdaten        | Hersteller | Händler | Betreiber | fiskaltrust | Steuerberater |
| ----------------- | ---------- | ------- | --------- | ----------- | ------------- |
| **Firmendaten**   |            | S       | R, A      | C           | I             |
| **Standortdaten** |            | S       | R, A      | C           | I             |
| **Kassendaten***  | R, A       |         |           | S, C        | I             |
| **Agenturdaten**  |            | S       | R, A      | C           | I             |

***Ausnahme:** Kassenseriennummer - diese wird meist im Zuge des Rollouts durch den Händler definiert.