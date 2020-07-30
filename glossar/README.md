# Glossar

## Elektronisches Aufzeichnungssystem, Kasse, Registrierkasse, Kassensystem, Eingabestation ("Terminal"), 

### Elektronisches Aufzeichnungssystem

Elektronische Aufzeichnungssysteme sind elektronische oder computergestützte Kassensysteme oder Registrierkassen einschließlich Tablet basierter Kassensysteme oder Softwarelösungen (z. B. Barverkaufsmodule),  die für den Verkauf von Waren oder die Erbringung von Dienstleistungen und deren Abrechnung spezialisiert sind und eine „Kassenfunktion“ haben. 

Kassenfunktion haben elektronische Aufzeichnungssysteme dann, wenn diese der Erfassung und Abwicklung von zumindest teilweise baren Zahlungsvorgängen dienen können. Dies gilt auch für vergleichbare elektronische, vor Ort genutzte Zahlungsformen (Elektronisches Geld wie z. B. Geldkarte, virtuelle Konten oder Bonuspunktesysteme von Drittanbietern) sowie an Geldes statt angenommener Gutscheine, Guthabenkarten, Bons und dergleichen. Eine Aufbewahrungsmöglichkeit des verwalteten Bargeldbestandes (z.B. Kassenlade) ist nicht erforderlich. 

Kassenfunktionen, die beispielsweise in ERP- oder Warenwirtschaftssystemen integriert sind, fallen unter die Definition der elektronischen Aufzeichnungssysteme. 

**Was sind keine elektronischen Aufzeichnungssysteme**

Fahrscheinautomaten, Fahrscheindrucker, elektronische Buchhaltungsprogramme, Waren- und Dienstleistungsautomaten, Geldautomaten, Taxameter und Wegstreckenzähler sowie Geld- und Warenspielgeräte gehören nicht dazu.

**Schutz durch eine zertifizierte technische Sicherheitseinrichtung**

Grundsätzlich ist jedes eingesetzte elektronische Aufzeichnungssystem sowie die damit zur führenden digitalen Aufzeichnungen durch eine zertifizierte technische Sicherheitseinrichtung zu schützen.

Werden mehrere einzelne elektronische Aufzeichnungssysteme (z. B. Verbundwaagen, Bestellsysteme ohne Abrechnungsteil, App-Systeme) mit einem Kassensystem verbunden, dann wird es nicht beanstandet, wenn die damit zu führenden digitalen Aufzeichnungen mit einer zertifizierten technischen Sicherheitseinrichtung geschützt werden, die alle im Verbund befindlichen elektronischen Aufzeichnungssysteme gemeinsam nutzen. 

#### Computergestütztes Kassensystem

Unter einem computergestützten Kassensystem versteht man eine EDV-Lösung zur Einbindung von Peripheriegeräten (z. B. Drucker oder externe Datenträger) oder -software mit einer PC- oder elektronischen Registrierkasse. 

#### PC-Registrierkasse

Eine PC-Registrierkasse kann die Daten auf einem internen Datenträger oder per Datenübermittlung extern aufbewahren.

#### Elektronische Registrierkasse

Eine elektronische Registrierkasse ist ein auf den Verkauf von Waren oder Dienstleistungen spezialisiertes Datenerfassungsgerät, das elektronische Aufzeichnungen zur Dokumentation von Einzelumsätzen zu erstellen hat. Eine solche Registrierkasse kann mit einer oder mehreren Eingabestationen verbunden sein". 

#### Eingabestation ("Terminal")

Datenerfassungsgerät welches elektronische Aufzeichnungen an die mit ihr verbundene elektronische Registrierkasse zum Zwecke der Dokumentation von Einzelumsätzen übermittelt.

### Kassenseriennummer

in Bearbeitung

### Verwendung der oben beschriebenen Begriffe im Kontext von fiskaltrust

Bei fiskaltrust wird im Sinne der Vereinfachung für die PC-Registrierkasse, Elektronische Registrierkasse und Eingabestation der Begriff "Kasse" verwendet. Diese Kasse entspricht der zu konfigurierenden "Queue" im Portal, welche zugleich die zu fiskalisierende und dem Finanzamt zu meldende Einheit darstellt.

Ein Kassensystem ("PosSystem") lässt sich über eine oder mehrere Queues, sowie einen oder mehrere Konfigurationscontainer ("Cashboxen"), flexibel abbilden. Siehe Bereich [Rollout Szenarios](../for-posdealers/03-sales/rollout-scenarios.md).

## Cashbox

Die Cashbox ist ein Konfigurationscontainer, der die Konfiguration der einzelenen Komponenten der fiskaltrust.Middleware beinhaltet. Über die Cashbox können die Konfigurationen miteinander verbunden werden. So kann die Cashbox die Konfiguration von Queue, SCU und diversen Helper beinhalten und diese miteinander verbinden. 

## Kassenbetreiber ("PosOperator")

Jeder, der ein Geschäft betreibt und dafür eine Registrierkasse benutzt ist für fiskaltrust ein Kassenbetreiber. Wenn alles reibungslos läuft, bekommen Kassenbetreiber von den erbrachten Dienstleistungen von fiskaltrust im Hintergrund nichts mit. Lediglich auf Anfrage von Steuerbehörden oder Wirtschaftsprüfern muss der Kassenbetreiber auf die Einhaltung der KassenSichV hinweisen und mit Hilfe des Kassenhändlers die Daten bereitstellen, die den Anforderungen der Steuervorschriften entsprechen.

Der Kassenbetreiber betreibt die fiskaltrust.Middleware lokal an seinem Standort.

## Kassenhändler ("PosDealer")

Der Kassenhändler (kurz „Händler“) ist unabhängiger Vertriebshändler, der [Hard- und] Software für Kassen- und Abrechnungssysteme (kurz „Kassensysteme“) an den Kassenbetreiber (kurz „Betreiber“) vertreibt.

Der Händler ist ein Systemintegrator, welcher POS Software in POS Hardware integriert und Dienstleistungen für die Installation und den Betrieb von Registrierkassen anbietet.  

Händler verkaufen verschiedene Pos-Systeme für verschiedene Branchen weiter und stehen in direkter Beziehung zu PosOperatoren ("Betreiber"). Händler verfügen über hohe Fähigkeiten in Vertrieb, Projektmanagement und Kundenservice.

Der Kassenhändler vertreibt die fiskaltrust.Middleware als solche oder als Bestandteil seiner Produkte bzw. Leistungen und übernimmt dafür den Support bei seinen Kunden.

## Kassenhersteller ("PosCreator")

Der Kassenhersteller/PosCreator (kurz „Hersteller“) entwickelt, produziert bzw. programmiert Software für Kassen ( kurz „Kassensoftware“).

Er integriert das fiskaltrust IPOS Interface in seine Software für Pos-Systeme. Er verfügt über hohe technische Fähigkeiten und vertreibt seine Produkte meist über Kassenhändler. Berührungspunkte mit Kassenbetreiber entstehen lediglich über spezielle Projekte oder über seine Kassenhändler.

Der Kassenhersteller integriert die ftiskaltrust.Middleware in seine Software.

## SCU

[Siehe SCU Abstraktion](../product-service-description/compliance-as-a-service/features/SCU-Abstraktion.md).

## Standort ("Outlet", "Location")

Standorte eines Unternehmens sind die Orte (Plätze, abgegrenzte Räume), denen betriebliches Leistungspotential zur Durchführung der Leistungsprozesse zugeordnet ist (z.B. Event-Locations im Rahmen der Leistungserfüllung im Gastro/Catering-Bereich), sowie geographische Orte einer Betriebsstätte (z. B. Produktions-, Vertriebs-, Verwaltungsstätte).

In Deutschland muss jeder PosOperator für jedes PosSystem und jeden Standort (Outlet) mindestens eine Queue betreiben.

## Queue

[Siehe Queue Abstraktion](../product-service-description/compliance-as-a-service/features/Queue-Abstraktion.md).

