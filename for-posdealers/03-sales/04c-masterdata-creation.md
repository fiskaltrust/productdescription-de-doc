# Bereitstellung von Stammdaten eines KassenBetreibers

Dieses Dokument beschreibt den Minimalumfang jener Stammdaten eines KassenBetreibers, welcher eingepflegt und gewartet werden muß, um Produkte und Features von fiskaltrust nutzen zu können. Daten, welche in diesem Dokument nicht aufgelistet sind, werden von fiskaltrust entweder im Hintergrund automatisiert erzeugt (z.B. TSE Daten für den DSFinV-K Export) oder sind gesetzlich nicht gefordert, oder sind optional und somit für die ordnungsgemäße Funktion nicht zwingend erforderlich. Des weiteren wird beschrieben, wie diese Daten in das fisaltrust.Portal eingepflegt werden können, und wer bzw. welche Rolle (KassenHersteller, KassenHändler, KassenBetreiber, Steuerberater) für die Erzeugung und Wartung dieser Daten verantwortlich ist.

## Stammdaten

### Firma

| Daten                              | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (vom Gesetzgeber noch nicht final definiert) | fiskaltrust Systemverwaltung | Anmerkung                                                    |
| ---------------------------------- | --------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| **Firmenname**                     | Pflicht                                       |                                                              | Pflicht                      |                                                              |
| **E-Mail Adresse**                 |                                               |                                                              | Pflicht                      |                                                              |
| **Straße**                         | Pflicht                                       |                                                              | Pflicht                      |                                                              |
| **Postleitzahl**                   | Pflicht                                       |                                                              | Pflicht                      |                                                              |
| **Stadt**                          | Pflicht                                       |                                                              | Pflicht                      |                                                              |
| **Länderkürzel**                   | Pflicht                                       |                                                              | Pflicht                      |                                                              |
| **Steuernummer**                   | Pflicht                                       |                                                              |                              | Feld ist im Formular für manuelle Anlage und im CSV Import für die Bulk-Einladung von KassenBetreibern nicht enthalten! KassenHändler müssen diese Daten derzeit manuell im Portal im Account des KassenHerstellers auf der Seite `Masterdata` nachtragen. |
| **UStId**                          | Pflicht wenn im Aufzeichnungssystem vorhanden |                                                              | Optional                     |                                                              |
| **Primary Contact Vorname**        |                                               |                                                              | Pflicht                      |                                                              |
| **Primary Contact Nachname**       |                                               |                                                              | Pflicht                      |                                                              |
| **Primary Contact E-Mail Adresse** |                                               |                                                              | Pflicht                      |                                                              |
Die oben genannten Daten können bis auf die Steuernummer entweder bei manueller Anlage des Accounts eines KassenBetreibers, oder via bulk-Einladung (CSV Datei) erzeugt werden:

#### Bereitstellung der Firmendaten

| **Option**                                           | Beschreibung                                                 | Empfohlene Berechtigung für die Verbindung                   | **Vorteile**                                                 | **Nachteile**                                                |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **manuelle Erstellung**                              | Die Daten werden manuell im Portal unter `POS Operator` / `Invitation` / `Add PosOperator` eingetragen.<br />Die Empfänger der Primary Contact E-Mail Adressen werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des KassenBetreibers durch Akzeptieren der Einladung bestätigt. | Geringer Aufwand für Händler bei einer kleinen Anzahl von Betreibern | Der KassenHändler kann den Rollout Prozess nicht durchführen, wenn vom KassenBetreiber die Berechtigungen durch das Akzeptieren der Einladung nicht bestätigt wurden. |
| **CSV Import**                                       | Die Daten werden via CSV Datei importiert. <br />Die Empfänger der darin enthaltenen Primary Contact E-Mail Adressen werden aufgefordert sich im Portal zu registrieren. | schreiben/lesen<br /><br />Die erforderlichen Berechtigungen werden seitens des KassenBetreibers durch Akzeptieren der Einladung bestätigt. | Eine größere Anzahl an Betreiber wird in einem Schritt erstellt und ins Portal eingeladen. | Der KassenHändler kann den Rollout Prozess nicht durchführen, wenn vom KassenBetreiber die Berechtigungen durch das Akzeptieren der Einladung nicht bestätigt wurden. |
| **zusätzliche Rolle: KassenHändler Auto-Invitation** | In einem ersten Schritt holt sich der Händler bei den Betreibern das Einverständnis, in seinem Namen im fiskaltrust.Portal tätig sein zu dürfen, ein.<br />Die Daten werden via CSV Datei importiert.<br />Die Empfänger der darin enthaltenen Primary Contact E-Mail Adressen werden über den erfolgreichen Abschluss des Prozesses informiert, und die Vertragsunterlagen werden zur Dokumentation übermittelt. | schreiben/lesen inkl. Vertragsabschluss<br /><br />Die erforderlichen Berechtigungen müssen vom Händler vorab und außerhalb des fiskaltrust.Portals eingeholt werden. | Eine größere Anzahl an Betreiber wird in einem Schritt erstellt und ins Portal eingeladen.<br />Der Registrierungsprozess für Betreiber entfällt und stellt kein Hindernis für einen Rollout dar.<br /> |                                                              |

### Standort (Outlet)

Namen und Orte der einzelnen Betriebsstätten mit Kassen.

| Daten                     | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (vom Gesetzgeber noch nicht final definiert) | fiskaltrust Systemverwaltung | Anmerkung                                                    |
| ------------------------- | --------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| **Standortname**          | Pflicht                                       |                                                              |                              | Feld `LocationId` bei CSV Import von Outlets                 |
| **Outlet-Nummer**         |                                               |                                                              | Pflicht                      |                                                              |
| **Straße**                | Pflicht                                       |                                                              |                              |                                                              |
| **Postleitzahl**          | Pflicht                                       |                                                              |                              |                                                              |
| **Stadt**                 | Pflicht                                       |                                                              |                              |                                                              |
| **Land**                  | Pflicht                                       |                                                              |                              |                                                              |
| **Zuständiges Finanzamt** |                                               | Pflicht                                                      |                              | Wird für die automatisierte Finanzamtmeldung der TSE-Kasse benötigt. <br />Feld ist nicht im CSV Import für die Bulk-Import von KassenBetreiber Outlets enthalten!<br />Feature ist von fiskaltrust noch nicht zur Verfügung gestellt. |

#### Bereitstellung der Standort-Daten

Die oben genannten Daten können bis auf die UStId des Standortes entweder bei manueller Anlage des Standortes/Outlets eines KassenBetreibers, oder via bulk-Import (CSV Datei) erzeugt werden:

| Option              | Beschreibung                                                 | Empfehlung                                              |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| **manuelle Anlage** | Standorte des Betreibers werden vom Händler manuell über das Portal im Account des Kassenbetreibers angelegt. | Empfohlen für weniger als 25 Standorte eines Betreibers |
| **CSV Import**      | Import von Standorten mit Hilde einer csv. Datei. Der Aufbau einer solchen Liste ist im Portal beschrieben. | Empfohlen für mehr als 25 Standorte eines Betreibers    |

### Kasse (Queue)

Stammdaten der einzelnen eingesetzten Kassen.

| Daten                                         | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Finanzamtmeldung (vom Gesetzgeber noch nicht final definiert) | fiskaltrust Systemverwaltung | Anmerkung                                                    |
| --------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| **Designation** (Description; "Beschreibung") |                                               |                                                              | Pflicht                      |                                                              |
| **Kassen-Hersteller-Marke**/Brand             | Pflicht                                       |                                                              |                              |                                                              |
| **Kassen-Modell**/Type                        | Pflicht                                       |                                                              |                              |                                                              |
| **Kassen-Seriennummer**                       | Pflicht                                       |                                                              |                              | Die `CashBox Identification`, welche bei der Erstellung einer Queue definiert wird, wird auch für die Kassenseriennummer verwendet. |
| **Terminal-ID**                               | Pflicht                                       |                                                              |                              | sign-request vom Hersteller                                  |
| **Terminal-Software Version**                 | Pflicht                                       |                                                              |                              | Die `Major Software Version` bei der Erstellung PosSystem wird verwendet |

#### Bereitstellung der Kassen-Daten

Die Definition des PosSystems durch Hersteller erfolgt im Portal unter `PosSystems`, die Kasse referenziert auf ein PosSystem im sign-request mit Hilfe der [ftPosSystemId](https://docs.fiskaltrust.cloud/api/fiskaltrust.ifPOS.v1.ReceiptRequest.html#fiskaltrust_ifPOS_v1_ReceiptRequest_ftPosSystemId). Ohne eine Referenzierung auf das PosSystem fehlen die Informationen der Kasse in den (archivierten) Belegdaten und den darauf basierenden Exporten (z.B. DSFinV-K Export).

Die Kassenseriennummer wird bei der Erstellung einer Queue durch den Händler über das Feld `CashBox Identification `definiert.

## Agenturdaten

| Daten            | DSFinV-K/DFKA- Export - Taxonomie Version 2.1 | Anmerkung |
| ---------------- | --------------------------------------------- | --------- |
| **Agentur Name** | Pflicht                                       |           |
| **Straße**       | Pflicht                                       |           |
| **Postleitzahl** | Pflicht                                       |           |
| **Stadt**        | Pflicht                                       |           |
| **Land**         | Pflicht                                       |           |
| **Steuernummer** | Pflicht                                       |           |
| **UStId**        | Pflicht wenn im Aufzeichnungssystem vorhanden |           |

#### Bereitstellung der Agenturdaten

Die oben genannten Agenturdaten können manuell im Portal unter `POS Dealers` / `Agencies` / `Add New Agency` angelegt werden.

## Verantwortlichkeiten 

Nachfolgend wird beschreiben, welche Rolle bezüglich der Verwaltung der Stammdaten für welche Aktivitäten verantwortlich ist, und welche Rollen zu beteiligen sind.

### Begriffe

- **Responsible** – verantwortlich (Durchführungsverantwortung), zuständig für die eigentliche Durchführung. Die Person, die die Initiative für die Durchführung (auch durch Andere) gibt. Sie kann die Aktivität auch selbst durchführen. Wird auch als Verantwortung im disziplinarischen Sinne interpretiert.
- **Accountable** – rechenschaftspflichtig (Kosten-, bzw. Gesamtverantwortung), verantwortlich im Sinne von „genehmigen“, „billigen“ oder „unterschreiben“. Die Person, die im rechtlichen oder kaufmännischen Sinne die Verantwortung trägt. Wird auch als Verantwortung aus Kostenstellensicht interpretiert.
-  **Support** – unterstützend. Die Person kann eine unterstützende Rolle spielen oder Betriebsmittel zur Verfügung stellen. In Abgrenzung zu C (Consulted), welche primär Wissen beisteuert, wird S (Support) meist als eine Rolle gesehen, die dem R (Responsible) aktiv Arbeit abnimmt.
- **Consulted** – konsultiert. Eine Person, die vielleicht nicht direkt an der Umsetzung beteiligt ist, aber relevante Informationen für die Umsetzung hat und deshalb befragt werden soll oder muss.
- **Informed** – zu informieren (Informationsrecht). Eine Person, die Informationen über den Verlauf bzw. das Ergebnis der Tätigkeit erhält oder die Berechtigung besitzt, Auskunft zu erhalten.

| Stammdaten   | Hersteller | Händler | Betreiber | fiskaltrust | Steuerberater |
| ------------ | ---------- | ------- | --------- | ----------- | ------------- |
| **Firma**    |            | S       | R + A     | C           | I             |
| **Standort** |            | S       | R + A     | C           | I             |
| **Kasse**    | R + A      | R + A*  |           | S** + C     | I             |
| **Agentur**  |            | S       | R + A     | C           | I             |

*Gilt nur für die Kassenseriennummer - Die `CashBox Identification`, welche bei der Erstellung einer Queue durch den Händler definiert wird (R + A), wird auch für die Kassenseriennummer verwendet.

**Weitere für den DSFINV-K benötigte Daten werden durch fiskaltrust automatisiert erzeugt und zur Verfügung gestellt.

## Aktualisierung und Wirksamkeit der Stammdaten

Eine Aktualisierung der oben beschriebenen Daten wird erst wirksam, wenn die betroffenen Cashboxen des KassenBetreibers neu gebuildet ("rebuild configuration") und die launcher an den Kassen neu gestartet wurden, damit diese die neuen Cashbox-Konfigurationen laden und anwenden können.

### vertiefende Informationen

 [Massenupdate von Cashboxen](../04-after-sales/how-to-mass-update-configuration.md) 