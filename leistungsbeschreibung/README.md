# fiskaltrust.Leistungsbeschreibung

Als Softwarehersteller entwickelt fiskaltrust Produkte für Kassenhersteller und Kassenhändler im Bereich Compliance-as-a-Service und Revisionssichere-Daten-as-a-Service .

## Compliance-as-a-Service

Als Kassenhersteller erhalten Sie Compliance-as-a-Service, indem Sie die fiskaltrust.Middleware in Ihr Produkt integrieren. Durch die Übermittlung der Belegdaten, Transaktionen und anderer relevanten Daten an die fiskaltrust.Middleware wird Konformität als Service bereitgestellt. 

Die fiskaltrust.Middleware stellt eine länderübergreifende Schnittstelle zur Verfügung, die über verschiedene Technologien (WCF, REST, gRPC, Serial-stream oder TCP-stream protocol) für Ihr Kassensystem erreichbar ist.

![Überblick über die Funktionsweise von fiskaltrust](../product-service-description/compliance-as-a-service/media/overview-pos-ft-middleware.png)                                

Die fiskaltrust.Middleware wird zu einem wesentlichen Bestandteil Ihres Kassensystems und gewährleistet damit die Konformität als Registrierkasse. Sie erzeugt die Belegnummer als eindeutige, fortlaufende Identifikation eines von der Registrierkasse übermittelten Beleges und stellt somit nachvollziebar dar, dass jeder Beleg von ihr verarbeitet wurde.

Die Konformität wird durch die Kombination diverser Methoden und Komponenten erreicht.

Zunächst wird über die fiskaltrust.Middleware sichergestellt, dass alle Belege von einer dritten Partei (fiskaltrust) neben dem Kassenhersteller und dem Kassenhändler verarbeitet werden. Dies nennen wir die organisatorische Implementierung des Schutzes vor Manipulation.

Zur technische Implementierung des Schutzes vor Manipulation wird jeder Request von dem Kassensystem und auch jeder Response von der fiskaltrust.Middleware gehasht, wodurch die Datenintegrität der Requests und Responses sichergestellt wird. Um nachweisen zu können, dass keine Manipulation stattgefunden hat, wird ein weiterer Hash-Wert erzeugt, der sich auf die gesamte Request-Response-Kette bezieht. Dieser wird aus folgenden Werten generiert:
- der eindeutigen Identifikation der Kette
- dem Erstellungszeitpunkt
- der Belegnummer
- der Hash-Werte des Request und Response 
- sowohl als auch dem Hash-Wert des vorherigen Blocks. 

Diese Verkettung bietet die Möglichkeit, Manipulationen sicher zu erkennen.

 ![receipt-chain](../product-service-description/compliance-as-a-service/media/receipt-chain.png)


Um das Risiko einer Manipulation der Kette auf den letzten nicht verketteten Hash-Wert zu begrenzen, stellt fiskaltrust einen Mechanismus bereit, der die aktuellen Daten in die fiskaltrust.Cloud hochlädt und dadurch spiegelt. Diese Datenspiegelung ermöglicht es, Manipulationen zu erkennen, die an der Registrierkasse selbst nicht erkennbar wären.

Als weitere Komponente des fiskaltrust.SecurityMechanism stellt die fiskaltrust.Middleware marktbezogene Sicherheitsmechanismen zur Verfügung. In Deutschland wird zum Beispiel die TSE (Technische Sicherheitseinrichtung) über die SCU (Security Creation Unit) der fiskaltrust.Middleware angebunden.

Um für verschiedene Plattformen und Betriebssysteme zur Verfügung zu stehen und um das Versprechen zu erfüllen, als einheitliche Schnittstelle zum Kassensystemen zu fungieren, ist die fiskaltrust.Middleware nach folgender Architektur aufgebaut.

  ![cashbox](../product-service-description/compliance-as-a-service/media/cashbox.png)


Der durch die CashboxId identifizierte Konfigurationscontainer (Cashbox) kann in verschiedene Plattformen und Betriebssysteme integriert werden. Die Erstellung und Verwaltung der Konfiguration inklusive der dazugehörigen Komponenten erfolgt im marktbezogenen fiskaltrust.Portal. Der fiskaltrust.SecurityMechanism wird von der Queue-Komponente und der SCU-Komponente (Signaturerstellungseinheit) bereitgestellt. Die SCU-Komponente stellt die Anbindung an den marktbezogenen Sicherheitsmechanismus (z.B. TSE) dar.


# Revisionssichere Daten-as-a-Service

Kassenbetreiber erhalten revisionssichere Daten-as-a-Service, indem sie ein Kassensystem verwenden, das die fiskaltrust.Middleware verwendet. 

## fiskaltrust.Cloud

Die fiskaltrust.Middleware, spiegelt die Daten als Teil des fiskaltrust.SecurityMechanism in die fiskaltrust.Cloud. Die Datenintegrität wird durch den Hash-Wert der Requests und Responses sichergestellt, und die Vollständigkeit kann durch Nachverfolgung der Hash-Kette überprüft werden (s.o.). Dies stellt sicher, dass alle Originaldatensätze erhalten bleiben und nicht verändert werden. Der Schutz vor Datenverlust wird durch unsere Lösung mit standortverteilten Daten-Speicherung gewährleistet. Die Daten werden in deutschen Rechenzentren gespeichert.

## POS Archiv

Das fiskaltrust POS Archiv speichert die von der fiskaltrust.Middleware übegebenen Belegdaten über einen Zeitraum von 10 Jahren. Über das fiskalttrust.Portal kann auf die Daten zugegriffen werden.

Bei Erstellen eines Monatsabschuss wird ein Datencheck zur Konsistenz der Daten durchgeführt und eine zusätzliche Exportdatei erstellt die ebenfalls in der fiskaltrust.Cloud gespeichert wird.

[PDF Download der Leistungsbeschreibung](media/leistungsbeschreibung.pdf)
