---
slug: /product-description/germany/glossar
title: Glossar
---

# Glossar

## Anwendungserlass

Anweisung eines Ministeriums an die nachgeordneten Behörden, wie ein Gesetz und/oder eine Verordnung auszulegen und anzuwenden ist – beim Finanzministerium oft als „BMF-Schreiben“ bezeichnet.

## AO (Abgabenordnung)

Abgabenordnung, ein zentrales Gesetz des Steuerrechts, in dem die wesentlichen Anforderungen an die Buchführung und damit auch die Kassenführung festgelegt sind. TSE und Kassen-Nachschau werden in den Paragraphen [146a](https://www.gesetze-im-internet.de/ao_1977/__146a.html) und [146b](https://www.gesetze-im-internet.de/ao_1977/__146b.html) behandelt, Bußgelder für Verstöße dagegen in [§ 379](https://www.gesetze-im-internet.de/ao_1977/__379.html)

## Authentizität (TSE)

Im Zusammenhang mit der TSE bedeutet Authentizität, dass die Daten tatsächlich vom angeblichen Urheber, z.B. dem jeweiligen Unternehmen stammen.

## BMF

Bundesministerium der Finanzen

## BSI

Bundesamt für Sicherheit in der Informationstechnik, verantwortlich für Konzeption und Zertifizierung der TSE.

## DSFinV-K

„Digitale Schnittstelle der Finanzverwaltung für Kassensysteme“, eine Standardisierung der Kassenaufzeichnungen. Dabei handelt es sich weitgehend um die vom DFKA e.V. definierte Taxonomie für Kassendaten. Die Taxonomie bildet die Daten standardmäßig in einem JSON-Format ab (das z.B. gut erweiterbar ist) und bietet einen Weg, die Daten in eine CSV-Struktur (mehrere, miteinander verknüpfte Tabellen) zu konvertieren. Da die Finanzverwaltung nur CSV-Daten auswerten kann, nutzt die DSFinV-K diese Darstellung.

## Einheitliche digitale Schnittstelle

Begriff aus § 146a AO, dessen Bedeutung bei der Formulierung des Gesetzes noch nicht klar definiert war. Daher sind daraus in der Praxis drei Schnittstellen entstanden: die „Exportschnittstelle“ der TSE (Schnittstelle für Datenabruf aus der TSE), die „Einbindungsschnittstelle“ der TSE (Schnittstelle für die Kommunikation der Kasse mit der TSE, die aber aufgrund der „Technologieoffenheit“ nur eine Empfehlung und damit nicht einheitlich ist) und die DSFinV-K.

## Einzelaufzeichnung

Darunter versteht die Finanzverwaltung die getrennte Aufzeichnung jedes einzelnen Geschäftsvorfalls, so dass dessen Inhalt eindeutig nachvollziehbar ist. Laut Anwendungserlass zum § 146 sind dazu aufzuzeichnen: der “verkaufte, eindeutig bezeichnete Artikel, der endgültige Einzelverkaufspreis, der dazugehörige Umsatzsteuersatz und -betrag, vereinbarte Preisminderungen, die Zahlungsart, das Datum und der Zeitpunkt des Umsatzes sowie die verkaufte Menge bzw. Anzahl”.

## Elektronisches Aufzeichnungssystem, Kasse, Registrierkasse, Kassensystem, Eingabestation ("Terminal"), 

### Elektronisches Aufzeichnungssystem

Elektronische Aufzeichnungssysteme sind elektronische oder computergestützte Kassensysteme oder Registrierkassen einschließlich Tablet basierter Kassensysteme oder Softwarelösungen (z. B. Barverkaufsmodule),  die für den Verkauf von Waren oder die Erbringung von Dienstleistungen und deren Abrechnung spezialisiert sind und eine „Kassenfunktion“ haben. 

Kassenfunktion haben elektronische Aufzeichnungssysteme dann, wenn diese der Erfassung und Abwicklung von zumindest teilweise baren Zahlungsvorgängen dienen können. Dies gilt auch für vergleichbare elektronische, vor Ort genutzte Zahlungsformen (Elektronisches Geld wie z. B. Geldkarte, virtuelle Konten oder Bonuspunktesysteme von Drittanbietern) sowie an Geldes statt angenommener Gutscheine, Guthabenkarten, Bons und dergleichen. Eine Aufbewahrungsmöglichkeit des verwalteten Bargeldbestandes (z.B. Kassenlade) ist nicht erforderlich. 

Kassenfunktionen, die beispielsweise in ERP- oder Warenwirtschaftssystemen integriert sind, fallen unter die Definition der elektronischen Aufzeichnungssysteme. 

**Was sind keine elektronischen Aufzeichnungssysteme**

Fahrscheinautomaten, Fahrscheindrucker, elektronische Buchhaltungsprogramme, Waren- und Dienstleistungsautomaten, Geldautomaten, Taxameter und Wegstreckenzähler sowie Geld- und Warenspielgeräte gehören nicht dazu.

**Schutz durch eine zertifizierte technische Sicherheitseinrichtung**

Grundsätzlich ist jedes eingesetzte elektronische Aufzeichnungssystem sowie die damit zu führenden digitalen Aufzeichnungen durch eine zertifizierte technische Sicherheitseinrichtung zu schützen.

Werden mehrere einzelne elektronische Aufzeichnungssysteme (z. B. Verbundwaagen, Bestellsysteme ohne Abrechnungsteil, App-Systeme) mit einem Kassensystem verbunden, dann wird es nicht beanstandet, wenn die damit zu führenden digitalen Aufzeichnungen mit einer zertifizierten technischen Sicherheitseinrichtung geschützt werden, die alle im Verbund befindlichen elektronischen Aufzeichnungssysteme gemeinsam nutzen. 

#### Computergestütztes Kassensystem

Unter einem computergestützten Kassensystem versteht man eine EDV-Lösung zur Einbindung von Peripheriegeräten (z. B. Drucker oder externe Datenträger) oder Software mit einer PC- oder elektronischen Registrierkasse. 

#### PC-Registrierkasse

Eine PC-Registrierkasse kann die Daten auf einem internen Datenträger oder per Datenübermittlung extern aufbewahren.

#### Elektronische Registrierkasse

Eine elektronische Registrierkasse ist ein auf den Verkauf von Waren oder Dienstleistungen spezialisiertes Datenerfassungsgerät, das elektronische Aufzeichnungen zur Dokumentation von Einzelumsätzen zu erstellen hat. Eine solche Registrierkasse kann mit einer oder mehreren Eingabestationen verbunden sein". 

#### Eingabestation ("Terminal")

Datenerfassungsgerät welches elektronische Aufzeichnungen an die mit ihr verbundene elektronische Registrierkasse zum Zwecke der Dokumentation von Einzelumsätzen übermittelt.

### Kassenseriennummer

Die Kassenseriennummer ist eine **eindeutige** Information, die auf den Beleg gedruckt werden muss. Dazu wird von fiskaltrust die ftCashboxIdentification verwendet, Base64-kodiert, Sonderzeichen entfernt  und von der fiskaltrust.Middleware im Signatur-lock in der Response (ftSignatureType) zurückgeliefert. Die ftCashboxIdentification selbst ist die frei wählbare, **eindeutige** Bezeichnung für eine Queue. Sie wird auch von der SCU als ClientId für die TSE verwendet. Deshalb ist es wichtig hierbei einen "printable string" mit maximal 20 Zeichen einzugeben. 

### Verwendung der oben beschriebenen Begriffe im Kontext von fiskaltrust

Bei fiskaltrust wird im Sinne der Vereinfachung für die PC-Registrierkasse, Elektronische Registrierkasse und Eingabestation der Begriff "Kasse" verwendet. Diese Kasse entspricht der zu konfigurierenden "Queue" im Portal, welche zugleich die zu fiskalisierende und dem Finanzamt zu meldende Einheit darstellt.

Ein Kassensystem ("PosSystem") lässt sich über eine oder mehrere Queues, sowie einen oder mehrere Konfigurationscontainer ("Cashboxen"), flexibel abbilden. Siehe Bereich [Rollout Szenarios](../for-posdealers/03-sales/rollout-scenarios.md).

## Cashbox

Die Cashbox ist ein Konfigurationscontainer, der die Konfiguration der einzelenen Komponenten der fiskaltrust.Middleware beinhaltet. Über die Cashbox können die Konfigurationen miteinander verbunden werden. So kann die Cashbox die Konfiguration von Queue, SCU und diversen Helper beinhalten und diese miteinander verbinden. 

## Geschäftsvorfall

Definition im Anwendungserlass: „Geschäftsvorfälle sind alle rechtlichen und wirtschaftlichen Vorgänge, die innerhalb eines bestimmten Zeitabschnitts den Gewinn bzw. Verlust oder die Vermögens­zusammensetzung in einem Unternehmen dokumentieren oder beeinflussen bzw. verändern (z. B. zu einer Veränderung des Anlage- und Umlaufvermögens sowie des Eigen- und Fremdkapitals führen)“

## GoBD

„Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff” – Erlass zu den formalen Anforderungen an die Buchführung, die Aufbewahrung von steuerrechtlich relevanten Dokumenten und elektronischen Daten sowie den Datenzugriff unter Bezug auf die Grundsätze ordnungsmäßiger Buchführung (GoB)

## Integrität (der Daten und TSE)

Integrität im Zusammenhang mit Daten bedeutet, dass diese seit der Erstellung unverändert geblieben sind. In Zusammenhang mit der TSE bedeutet es auch, dass keine Datensätze nachträglich entfernt wurden.


## Kassenbetreiber ("PosOperator")

Jeder, der ein Geschäft betreibt und dafür eine Registrierkasse benutzt ist für fiskaltrust ein Kassenbetreiber. Wenn alles reibungslos läuft, bekommen Kassenbetreiber von den erbrachten Dienstleistungen von fiskaltrust im Hintergrund nichts mit. Lediglich auf Anfrage von Steuerbehörden oder Wirtschaftsprüfern muss der Kassenbetreiber auf die Einhaltung der KassenSichV hinweisen und mit Hilfe des Kassenhändlers die Daten bereitstellen, die den Anforderungen der Steuervorschriften entsprechen.

Der Kassenbetreiber betreibt die fiskaltrust.Middleware lokal an seinem Standort.

siehe auch [Personas für Kassenbetreiber (en)](personas-posoperator.md)

## Kassenhändler ("PosDealer")

Der Kassenhändler (kurz „Händler“) ist unabhängiger Vertriebshändler, der [Hard- und] Software für Kassen- und Abrechnungssysteme (kurz „Kassensysteme“) an den Kassenbetreiber (kurz „Betreiber“) vertreibt.

Der Händler ist ein Systemintegrator, welcher POS Software in POS Hardware integriert und Dienstleistungen für die Installation und den Betrieb von Registrierkassen anbietet.  

Händler verkaufen verschiedene Pos-Systeme für verschiedene Branchen weiter und stehen in direkter Beziehung zu PosOperatoren ("Betreiber"). Händler verfügen über hohe Fähigkeiten in Vertrieb, Projektmanagement und Kundenservice.

Der Kassenhändler vertreibt die fiskaltrust.Middleware als solche oder als Bestandteil seiner Produkte bzw. Leistungen und übernimmt dafür den Support bei seinen Kunden.

siehe auch [Personas für Kassenhändler (en)](personas-posdealer.md)

## Kassenhersteller ("PosCreator")

Der Kassenhersteller/PosCreator (kurz „Hersteller“) entwickelt, produziert bzw. programmiert Software für Kassen ( kurz „Kassensoftware“).

Er integriert das fiskaltrust IPOS Interface in seine Software für Pos-Systeme. Er verfügt über hohe technische Fähigkeiten und vertreibt seine Produkte meist über Kassenhändler. Berührungspunkte mit Kassenbetreiber entstehen lediglich über spezielle Projekte oder über seine Kassenhändler.

Der Kassenhersteller integriert die fiskaltrust.Middleware in seine Software.

siehe auch [Personas für Kassenhersteller (en)](personas-poscreator.md)

## Kassen-Nachschau

Zum 1.1.2018 neu gesetzlich eingeführte Möglichkeit der Finanzbehörden, die Kassenführung unangemeldet außerhalb normaler Betriebsprüfungen zu kontrollieren. Auch vorher gab es einzelne Kassen-Nachschauen, die allerdings das bereits länger existierende Instrument der Umsatzsteuer-Nachschau genutzt haben.

## KassenSichV

Kassensicherungsverordnung, hier sollen die allgemeinen Regeln in der AO konkretisiert werden (was nur teilweise erfolgt ist).

## Prüfwert

In verschiedenen Vorschriften wird dieser Begriff statt „Signatur” verwendet.

## Queue

[Siehe Queue Abstraktion](../product-service-description/compliance-as-a-service/features/Queue-Abstraktion.md).

## Signatur

Zu einer digitalen Nachricht (d. h. zu beliebigen Daten) kann mit Hilfe eines geheimen Signaturschlüssels (dem Private Key) eine digitale Signatur berechnet werden. Diese Signatur ermöglicht es, mit Hilfe des öffentlichen Verifikationsschlüssels (dem Public Key) die nichtabstreitbare Urheberschaft und Integrität der Nachricht zu prüfen. Um eine mit einem Signaturschlüssel erstellte Signatur einer Person zuordnen zu können, muss der zugehörige Verifikationsschlüssel dieser Person zweifelsfrei zugeordnet sein.

## SCU

[Siehe SCU Abstraktion](../product-service-description/compliance-as-a-service/features/SCU-Abstraktion.md).

## Standort ("Outlet", "Location")

Standorte eines Unternehmens sind die Orte (Plätze, abgegrenzte Räume), denen betriebliches Leistungspotential zur Durchführung der Leistungsprozesse zugeordnet ist (z.B. Event-Locations im Rahmen der Leistungserfüllung im Gastro/Catering-Bereich), sowie geographische Orte einer Betriebsstätte (z. B. Produktions-, Vertriebs-, Verwaltungsstätte).

In Deutschland muss jeder PosOperator für jedes PosSystem und jeden Standort (Outlet) mindestens eine Queue betreiben.

## TAR

TAR ist ein Datenformat, mit dem viele Dateien zu einer zusammengefasst werden können. Der standardisierte Datenexport aus der TSE erfolgt in diesem Format. Daher ist mit „TAR-Datei” hier der Export aus der TSE gemeint.

## Taxonomie

Hier ist mit “Taxonomie” immer die DFKA-Taxonomie Kassendaten gemeint. Diese standardisiert hersteller- und branchenunabhängig die Einzelaufzeichnungen und die Tagesabschlüsse von Kassensystemen. Damit können standardisierte Daten für Kassen-Nachschauen und Betriebsprüfungen bereitgestellt werden. Außerdem kann damit eine einheitliche Schnittstelle zwischen Kassensystemen und Buchführung hergestellt werden.

## TSE

(Zertifizierte) Technische Sicherheitseinrichtung, laut gesetzlicher Definition bestehend aus einem Sicherheitsmodul, einem Speichermedium und einer „einheitlichen digitalen Schnittstelle“.

## Verifikation (der Signaturen)

Im Zusammenhang mit digitalen Signaturen die Prüfung, ob die abgesicherten Daten unverändert und vollständig sind (Integrität) sowie vom angeblichen Absender stammen (Authentizität). Ob die Daten auch inhaltlich richtig sind (also z.B. korrekt erfasst wurden), wird in diesem Rahmen nicht überprüft.

## Zertifizierung (TSE)

Bestätigung einer erfolgreichen Prüfung der Übereinstimmung mit bestimmten Anforderungen. Im Falle der TSE hat das BSI mehrere Technische Richtlinien und sog. Schutzprofile veröffentlicht. TSE-Hersteller können die Übereinstimmung ihres Produktes mit diesen Anforderungen von einer sog. Prüfstelle untersuchen lassen, die ein Evaluierungsgutachten erstellt. Auf Basis dieses Gutachtens erteilt dann das BSI die Zertifizierung.

## Zertifikat (kryptografisches)

Damit ist meistens nicht die „Zertifizierungsurkunde” für ein Produkt gemeint, sondern ein „kryptografisches Zertifikat”. Das ist ein Datensatz, der in einer abgesicherten Form kryptografische Schlüssel mit anderen Daten wie z.B. der Identität einer Person verbindet. Mit einem Zertifikat kann man z.B. prüfen, ob eine digitale Signatur wirklich von einer dazu berechtigten Person erstellt wurde.

