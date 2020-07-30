# Rollout Szenarien, Tipps & Tricks für DE
Um die fiskaltrust.Middleware in Verbindung mit Kassen und TSEs zu verwenden kommen unterschiedliche Szenarien in Frage. Bei jedem dieser Szenarien handelt es sich immer um einen Standort. Diese werden weiter unten erläutert, es gibt allerdings einige Grundvoraussetzungen welche auf jeden Fall gegeben sein müssen, unabhängig vom Szenario.

- Pro Standort muss mindestens eine [SCU](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/product-service-description/compliance-as-a-service/features/SCU-Abstraktion.md) inkl. TSE zugeordnet sein. Die TSE kann entweder eine Hardware TSE vor Ort sein, oder eine zertifizierte Cloud TSE.
- Jede fiskaltrust.Queue muss dem Finanzamt als elektronisches Aufzeichnungssystem (Kasse) gemeldet werden.
- Alle fiskaltrust.Queues, SCUs und TSEs müssen sich am Standort befinden, im sogenannten "operational environment" (sichere Einsatzumgebung). Ausnahme: Cloud-Komponente einer zertifizierten Cloud-TSE. Diese befindet sich im Rechenzentrum des Cloud-TSE Anbieters.
- Jeder fiskaltrust.Queue kann nur eine SCU zugeordnet werden. Jede SCU kann nur für eine TSE zuständig sein. D.h. jede Kasse kann nur eine TSE verwenden.
- Pro Kasse können mehrere Terminals betrieben werden. (Ein Terminal ist ein Gerät ohne Kassenfunktion).
- Der Wechsel und die Kombination der unten dargestellten Szenarien ist jederzeit möglich.

#### TSE in der Cloud
Bei einer Cloud TSE läuft eine Komponente im Rechenzentrum des Cloud TSE Anbieters. Ist diese TSE Komponente nicht mehr erreichbar, wechselt die fiskaltrust.Middleware in den Ausfallsmodus. Bei der Nutzung von Cloud TSEs möchten wir zusätzlich auf unsere Fair-Use-Policy hinweisen.

#### Hardware-TSE
Pro Kasse kann nur eine Hardware-TSE angeschlossen werden. Grundsätzlich per SD-Karte oder per USB-Anschluss.

## TSE pro Kasse
Aus technischer Sicht ist es das einfachste Szenario, benötigt allerdings auch die maximale Anzahl an TSEs. Ein Vorteil dieser Lösung ist, dass wenn eine TSE ausfällt oder verloren geht, die anderen Kassen nicht betroffen sind. Ein weiterer Vorteil ist, dass Performanceprobleme vermieden werden, weil jede Kasse ihre eigene TSE nutzt und somit nur die Requests dieser Kasse an die TSE gesendet werden.

![tse-per-cashregister](media/kasse-queue-scu-tse.png)

## Hardware TSE am lokalen Server für mehrere Kassen
Auf jeder Kasse und auf dem lokalen Server läuft die fiskaltrust.Middleware. Die hardware TSE wird an den lokalen Server (z.B. per USB) angeschlossen. Die fiskaltrust.CashBox des Servers konfiguriert die fiskaltrust.Middleware mit einer SCU. Die für den Server konfigurierte SCU greift auf eine hardware TSE zu. Die fiskaltrust.CashBoxen der einzelnen Kassen sind so konfiguriert, dass deren fiskaltrust.Middleware nur mit einer fiskaltrust.Queue ausgestattet wird. Die hier eingesetzten fiskaltrust.Queues verbinden sich mit der SCU des Server. Dieses Szenario ermöglicht eine Einsparung von TSEs. Da jedoch hierbei alle Requests über die SCU des Server laufen müssen, wird der Server zum Bottleneck. Auch die TSE wird zum Bottleneck. Beim Ausfall des Server oder der TSE sind alle Kassen davon betroffen. Des Weiteren kann es in diesem Szenario zu Performanceengpässen in der hardware TSE kommen. Weitere Informationen hierzu finden sie unter [Performance](#Performance). 

![tse-separated](media/server-mit-hw-tse.png)

Sollten Sie ich für dieses Szenario entscheiden, empfehlen wir bei einer großen Anzahl von Requests den Einsatz einer oder mehrerer zusätzlichen TSEs. Dies wird im unteren Bild beispielhaft visualisiert.

![tse-separated](media/server-mit-mehreren-hw-tse.png)

## Hardware TSE an der Hauptkasse für mehrere zusätzliche Kassen
Auf jeder Kasse läuft die fiskaltrust.Middleware. Die fiskaltrust.CashBox der Hauptkasse konfiguriert die fiskaltrust.Middleware mit einer fiskaltrust.Queue und einer SCU. Die für die Hauptkasse konfigurierte SCU greift auf eine TSE zu. Die fiskaltrust.CashBoxen der anderen Kassen sind so konfiguriert, dass deren fiskaltrust.Middleware nur mit einer fiskaltrust.Queue ausgestattet wird. Die hier eingesetzten fiskaltrust.Queues verbinden sich mit der SCU der Hauptkasse. Dieses Szenario ermöglicht eine Einsparung von TSEs. Da jedoch hierbei alle Requests über die SCU der Hauptkasse laufen müssen, wird die Hauptkasse zum Bottleneck. Auch die hardware TSE wird zum Bottleneck. Beim Ausfall der Hauptkasse oder der hardware TSE sind alle anderen Kassen davon betroffen. Des Weiteren kann es in diesem Szenario zu Performanceengpässen in der TSE kommen. Weitere Informationen hierzu finden sie unter [Performance](#Performance). Sollten Sie ich für dieses Szenario entscheiden, empfehlen wir bei einer großen Anzahl von Requests den Einsatz einer oder mehrerer zusätzlichen TSEs.

![tse-on-cashregister](media/kasse-als-server-mit-hw-tse.png)

## Eine Cloud TSE für mehrere Kassen
Auf jeder Kasse läuft die fiskaltrust.Middleware. Die fiskaltrust.CashBox jeder Kasse konfiguriert die fiskaltrust.Middleware mit einer eigenen fiskaltrust.Queue und einer eigenen SCU. Jede SCU greift auf die gleiche Cloud-TSE zu. Dieses Szenario ermöglicht eine Einsparung von Cloud-TSEs. Da jedoch hierbei alle Requests an die gleiche Cloud-TSE gesendet werden, wird die TSE zum Bottleneck. Des Weiteren sind hierbei ebenfalls sowohl mögliche Performanceengpässe in der Cloud-TSE zu berücksichtigen als auch unsere Fair-Use-Policy.

![tse-on-cashregister](media/kassen-mit-cloud-tse.png)

## Szenario mit Terminals
Terminals sind Eingabegeräte wie Tablets, Handhelds oder ähnliches (ohne Kassenfunktion), bei denen es nicht möglich ist eine Hardware-TSE anzuschließen bzw. die fiskaltrust.Middleware am Gerät selbst zu installieren. In diesem Fall wird die fiskaltrust.Middleware an einer Kasse oder an einem Server betrieben und sollte stets erreichbar sein. Die Terminals dienen nur als Eingabegeräte und verbinden sich mit dem Server oder der Kasse. Bei vielen gleichzeitigen Requests kann es zu Performanceengpässen in der TSE kommen. Weitere Informationen hierzu finden sie unter [Performance](#Performance). Sollten Sie ich für dieses Szenario entscheiden, empfehlen wir bei einer großen Anzahl von Requests den Einsatz mehrerer Kassen mit zusätzlichen TSEs (alternativ: mehrere fiskaltrust.Middleware Instanzen mit eigener TSE auf dem Server).

![terminals-single-queue.png](media/terminals-eine-queue.png)

Eine weitere mögliche Variante dieses Szenario ist die Zuordnung jedes Terminals zu einer eigenen fiskaltrust.Queue.

![terminals-multi-queue](media/terminals-mehrere-queues.png)


## Rechenzentrum als operational environment
Falls die Kasse in einem Rechenzentrum betrieben wird und die Terminals ohne (Internet-)Verbindung zu diesem nicht funktionsfähig sind, kann das Rechenzentrum unter bestimmten Voraussetzungen als "operational environment" angenommen werden. Die fiskaltrust.Middleware sollte in diesem Fall vollständig im Rechenzentrum betrieben werden. In diesem Szenario verbinden sich die Terminals über das Online Kassensystem zur fiskaltrust.Middleware im Rechenzentrum.
Im Falle eines Ausfalls der (Internet-)Verbindung ist es allerdings so, dass die fiskaltrust.Middleware nicht mehr erreicht werden kann und somit keine von der fiskaltrust.Middleware erzeugten Signaturen auf die Belege gedruckt werden können. Bei Interesse an einer Lösung, bei der die fiskaltrust.Middleware im Rechenzentrum des Kassenbetreibers läuft, helfen wir Ihnen gerne weiter. Kontaktieren Sie uns hierzu bitte unter: [info@fiskaltrust.de](mailto:info@fiskaltrust.de?subject=Informationen%20zu%20Bring-your-own-datacenter).

![cloud-middleware](media/terminals-mw-cloud.png)

#### Performance
In Überarbeitung. 
<!--- Wir empfehlen ab XY Requests pro Sekunde eine zusätzliche TSE.-->
<!--- Wir empfehlen ab XY Terminals eine zusätzliche TSE.-->
<!--- Wir empfehlen pro XY Terminals eine weitere fiskaltrust.Queue.-->
