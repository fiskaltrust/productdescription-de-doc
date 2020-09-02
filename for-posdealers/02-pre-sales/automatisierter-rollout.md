# Rollout Optimierung durch Automatisierung

Dieses Dokument soll Kassenhändler beim Rollout-Prozess untestützen indem es Möglichkeiten der Vereinfachung und Optimierung des Rollout durch Automatisierung aufzeigt. 

## Einleitung

Jede fiskaltrust.Middelware Instanz wird mit einer sogenannten Cashbox konfiguriert. Dieser Konfigurationscontainer wird zusammen mit der fiskaltrust.Middleware beim Kassenbetreiber ausgerollt. Dazu wird zum Beispiel der Launcher aus dem Portal heruntergeladen und in der Kasse gestartet. Die Cashbox beinhaltet hauptsächlich die Konfigurationen der Queue und der SCU. 



![Massenupdate](media/cashbox.png)



Darin sind Kommunikations-Endpunkte, Datenbankzugriff, TSE-Zusgriff usw. definiert. Im Normallfall wird eine solche Cashbox pro Kasse benötigt. Ein Rollout mit vielen Kassen ist daher bei einer manuellen Vorgehensweise sehr zeitintensiv da grundsätzlich für jede Kasse eine eigene Cashbox im Portal angelegt und editiert werden muss. Des Weiteren muss der Launcher heruntergeladen werden und in der Kasse ausgeführt werden. 

Um diesen Prozess zu optimieren stellt fiskaltrust diverse Tools zur Verfügung. Eine zentrale Rolle spielen dabei die Möglichkeit des Templating zum Anlegen von Cashboxen und die Möglichkeit zum automatisierten Ausfüren der Templates mit Hilfe der fiskaltrust Portal-API. 

Im Folgenden gehen wir auf diese und andere Möglichkeiten der Optimierung ein und zeigen auf, wie Sie als Kassenhändler je nach Bedarf davon gebrauch machen können.




## Überblick manueller Prozess

Wie bereits in der Einleitung erwähnt wird grundsätzlich pro Kasse eine Cashbox benötigt. Im Normalfall wird hier die Konfiguration einer Queue und einer SCU vorgenommen und diese werden 
miteinander verknüpft. 

Es existieren auch andere Szenarien (siehe dazu [Rollout-Szenarien](/rollout-scenarios.md) ) auf die wir jedoch erst später einegehen werden. Die Konfiguration der Cashbox ist im [Getting Stared Guide](../for-poscreators/getting-started-en.md) für Kassenhersteller beschrieben.

Sobald die Cashbox für die Kasse im Portal angelegt, konfiguriert und zusammengestellt wurde, kann der Launcher aus dem Portal herunter geladen werden und auf der Kasse gestartet werden. Der Launcher beinhaltet den zuvor angeleten Konfigurationskontainer (Cashbox) und die fiskaltrust.Middleware. Sobald der Launcher gestartet wird, wendet er den Konfigurationskontainer an und es entsteht daraus eine interne Middleware-Konfiguration. Dadurch ist die Middleware bereit und wird im nächsten Schritt vom Launcher gestartet. 



D.h. im manuellen Prozess sind beim Rollout mindestens folgende initialen Schritte für jede Kasse vorzunehmen:

1. Anlegen und Konfiguration Queue
2. Anlegen und Konfiguration der SCU
3. Verknüpfen der Queue mit der SCU
4. Erstellen und konfigurieren der Cashbox
5. Rebuild configuration für die Cashbox (Zusammenbauen der Cashbox)
6. Download des Launcher
7. Starten des Launcher

Möchte man später die Konfiguration updaten (z.B. eine neue SCU Package Version verwenden), dann sind folgende Schritte vorzunehmen:

1. Update der betroffenen Konfiguration im Portal  (z.B. SCU Konfiguration)
2. Rebuild Configuration für die Cashbox im Portal
3. Stoppen der Middleware und Neustart des Launcher an der Kasse. 

Der Launcher lädt daraufhin automatisch die neue Version der Cashbox, wendet diese an und startet die Middleware mit der neuen Konfiguration.

Bei einer großen Menge von Kassen sind sowohl der initiale Rollout als auch ein Update sehr Zeitaufwendig, wenn sie mit Hilfe der oben beschriebenen, manuellen Prozessen, vorgenommen werden. Deshalb stellt fiskaltrust die in den nächsten Kapitel beschribenen Optimirungsmöglichkeiten zur Verfügung.



## Massenupdate über das Portal

Für einen Massenupdate bereits ausgerollter Cashboxen stellt fiskaltrust unter dem Portalmenüpunkt ```Konfiguration -> Update``` die Möglichkeit zur Verfügung viele der Cashboxen gleichzeitig zu aktualisieren. 

Wird zum Beispiel eine neue Package Version des Persistenzlayer benötigt, so kann diese für alle betroffenen Cashboxen aktualisiert werden:



![Massenupdate](media/mass-update.png)



Im oben dargestellten Screenshot wird für alle Queues mit der SQLite Package Version 1.3.3 die Konfiguration auf die SQL Package Version 1.3.5 upgedatet. Zusätzlich werden automatisch die entsprechenden Cashboxen aktualisiert und zusammengebaut (Rebuild Configuration checkbox).




## Templating zum Anlegen von Cashboxen

Beim Templating besteht die Möglichkeit mit Hilfe eines Konfiguration-Template automatisch Checkboxen für den Kassenbetreiber anzulegen. Dabei wird ein Template vom Kassenhändler vorbereitet und für den Kassenbetreiber im Portal hinterlegt. Daraufhin erscheint das Template im fisklatrust.Webshop innerhalb des Accounts des Kassenberteibers als kostenloses Produkt. Es kann dort in beliebiger Menge ausgecheckt werden. Die Menge stellt dabei die Anzahl der Cashboxen dar, die generiert werden sollen. Sobald der Checkout-Prozess abgeschlossen ist, wird automatisch vom Portal die entsprechende Anzahl von Cashboxen durch Anwendung des Templates generiert und im Account des Kassenbetreiber hinterlegt. 

Im Folgenden werden die einzelenen Schritte des oben beschriebenen Prozess detailiert dargestellt.

### Erstellung und Inhalte des Konfiguration-Template

Das Template ist ein JSON String der die Konfigurationen von Queues, SCUs, Helper und anderen Elementen beinhalten kann. Werte können statisch ausgefüllt oder es können Variablen verwendet werden. 

Im folgenden Bild wird ein Template visualisiert - download unter [template1.json](media/template1.json)

![Template Beispiel](media/template1.png)

### Zur Verfügung stellen des Konfiguration-Template über das Portal

### Manuelles Ausführen der Konfiguration-Template


## Nutzung von API oder PowerShell zum Ausführen der Templates
