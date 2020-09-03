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

Das Template ist ein JSON String der eine parametrisierbare Variante der Cashbox (Konfigurationskontainer als JSON String) darstellt und somit die Konfigurationen von Queues, SCUs, Helper und anderen Elementen beinhalten kann. Parametrisierbar ist es insofern, dass hier die Struktur für die zu generierende Cashbox definiert werden kann (z.B. fünf Queues, eine SCU) und dass bei den den Werten Variablen als Platzhalter eingesetzt werden können. Sobald die Generierung der daraus resultierenden Cashbox stattfindet werden die Variablen mit konkreten und finalen Werten befüllt.

Im folgenden Bild wird ein Beispiel eines solchen Template visualisiert - download unter [template1.json](media/template1.json)

![Template Beispiel](media/template1.png)

Variablen werden gekennzeichnet indem sie innerhalb von ```|[``` und  ```]|``` angegeben werden. Moglich hierbei ist die Angabe von Systemvariablen, d.h. Variablen die vom System bei der Generierung bestimmt werden und die Angabe eigener Variablen deren Werte später über einen API Aufruf zum Generieren der Cashbox übergeben werden können. 

In Zeile 1 wird zum Beispiel die Systemvariable: ```|[cashbox_id]|```  als Wert für ```"ftCashBoxId"``` angegeben. Hierbei geht es um die CashboxID, einem Wert, der automatisch von dem System generiert wird und beim Generieren der Cashbox dort hineingeschrieben wird.

In Zeile 31 des obigen Beispiels werden eigene Variablen verwendent (```|[my_shopcode]|``` und ```|[my_tillcode]|``` ) deren konkrete Werte dann später beim API Aufruf übergeben werden.  Wie in Zeile 31 zu sehen ist, können die Werte aus einer kombination von Variablen und statischen Teilen bestehen. Sie können aber auch nur statischen "Text" beinhalten oder auch nur eine Variable.

Folgende Tabellen zeigen die möglichen Inhalte (Datenstruktur) eines Template:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftCashBoxId` |ja | ```GUID String``` | Identifiziert die Cashbox im fiskaltrust System und muss daher eindeutig sein. Wird später ein Teil der Authentifizierung der Registrierkasse mit fiskaltrust. Die Systemvariable ```|[cashbox_id]|```  kann hier verwendet werden um den Wert bei Generierung der Cashbox von fiskaltrust automatisch zu vergeben und einzusetzen. |
| `ftSignaturCreationDevices` |nein | `PackageConfiguration [ ]` | Array, beinhaltet die Konfigurationen der zu verwendenden SCUs |
| `ftQueues` |nein | `PackageConfiguration [ ]` | Array, beinhaltet die Konfigurationen der zu verwendenden Queues |
| `helpers` |nein | `PackageConfiguration [ ]` | Array, beinhaltet die Konfigurationen der zu verwendenden Helper |
| `TimeStamp` |nein | ```DateTime.UtcNow.Ticks``` | Zeitpunkt der  Erstellung des Template|

Ein `PackageConfiguration` Objekt ist wie folgt aufgebaut:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `Id` |ja |  ```GUID String```  | Identifiziert die Instanz des Elements, das hier konfiguriert wird (SCU oder Queue oder Helper). Für die Queue kann hier die Systemvariable `queue[0...n]_id` verwendet werden. Für die SCU kann hier die Systemvariable `scu[0...n]_id` zum Einsatz kommen. Für Helper  `helper[0...n]_id`.|
| `Package` |ja | ```String``` | Name des Package das zum Erstellen des Elements verwendet werden soll. Z.b. `fiskaltrust.Middleware.SCU.DE.CryptoVision` für eine SCU, die mit einer Cyptovision-TSE kommunizieren soll.|
| `Version` |ja |  ```String```| Version des Package das zum Erstellen des Elements verwendet werden soll.|
| `Configuration` |nein | `<String, Object>`| Key-Value Pairs die zur Konfiguration des Elements benötigt werden. Z.B. Laufwerksbuchstabe der TSE bei der Cryptovision SCU, damit diese weiß wie sie auf die TSE Zugreifen soll. Je nach Element-Typ zu befüllen. Siehe unten. |
| `URL` |ja | `String []` | Array, Kommunikationsendpunkte des Elements, das hier konfiguriert wird. Z.B. REST Endpunkt für die Kommunikation mit der Queue. |

**Queue**
Folgende Key-Value Pairs werden in dem `Configuration` Objekt einer Queue verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `init_ftQueue` |ja |  ```Configuration``` | Allgemeiner Teil der Queue Konfiguration.|
| `init_ftQueueDE` |ja |  ```Configuration``` | Länderspezifischer Teil der Queue Konfiguration.|
| `init_ftSignaturCreationUnitDE` |nein |  ```Configuration``` | Zum Verknüpfen der Queue mit einer SCU. Hier werden Verbindungswerte hinterlegt.|
| `connectionstring` |nein |  ```String``` | Wenn eine externe Datenbank verwendet wird.|

Folgende Key-Value Pairs werden in dem `Configuration` Objekt einer Queue im Feld `init_ftQueue`  verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftQueueId` |ja |  ```GUID String``` | Identifikation der Queue. Die Systemvariable `queue[0...n]_id` kann verwendet werden.|
| `ftCashBoxId` |ja |  ```GUID String``` | Identifikation  der Cashbox. Die Systemvariable ```|[cashbox_id]|```  kann hier verwendet werden.|
| `CountryCode` |ja |  ```String``` | Länderkürzel. Für Deutschland: "DE".|
| `Timeout` |nein |  ```Int``` | Zum Verknüpfen der Queue mit einer SCU.|

Folgende Key-Value Pairs werden in dem `Configuration` Objekt einer Queue im Feld `init_ftQueueDE`  verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftQueueDEId` |ja |  ```GUID String``` | Identifikation der Queue. Die Systemvariable `queue[0...n]_id` kann verwendet werden.|
| `CashBoxIdentification` |ja |  ```printable String (20)``` | Kassenseriennummer. Wird auch als Client-ID für die TSE verwendet. Printable String, max. 20 Zeichen.|
| `ftSignaturCreationUnitDEId` |ja |  ```GUID String```  | Die ID der SCU mit der sich diese Queue verbinden soll.|

Folgende Key-Value Pairs werden in dem `Configuration` Objekt einer Queue im Feld `init_ftSignaturCreationUnitDE`  verwendet:
| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftSignaturCreationUnitDEId` |ja |  ```GUID String``` | Identifikation der SCU. Die Systemvariable `scu[0...n]_id` kann verwendet werden.|
| `Url` |ja |  ```String``` | Kommunikationsendpunkte der SCU die hier verwendet werden können. Als Array im String Bsp: ```"[\"grpc://localhost:10081\", \"grpc://localhost:10082\"]"```. Normalerweise wird nur ein Endpunkt benötigt.|

**SCU**
Folgende Key-Value Pairs werden in dem `Configuration` Objekt einer SCU je nach Hersteller der TSE verwendet:

**Swissbit TSE**
| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `devicePath` |ja |  ```String``` | Laufwerksbuchstabe gefolgt von Doppelpunkt (z.B. `E:`). Representiert das Laufwerk an dem die Swissbit TSE an der Kasse angeschossen wird.|
| `adminPin` |nein |  ```String``` | Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminPin` |nein |  ```String``` | Time Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|

**Cryptovision TSE**
| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `devicePath` |ja |  ```String``` | Laufwerksbuchstabe gefolgt von Doppelpunkt (z.B. `E:`). Representiert das Laufwerk an dem die Cryptovision TSE an der Kasse angeschossen wird.|
| `adminPin` |nein |  ```String``` | Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminPin` |nein |  ```String``` | Time Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|

**Diebold Nixdorf**
| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `comPort` |ja |  ```String``` | Definiert den Com Anschluß an, an den die TSE angeschlossen wird. Zum Beispiel `COM6`.|
| `url` |nein |  ```String``` | TODO|
| `adminUser` |nein |  ```String``` | Admin Username. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `adminPin` |nein |  ```String``` | Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminUser` |nein |  ```String``` | Time Admin Username. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminPin` |nein |  ```String``` | Time Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `slotNumber` |nein |  ```Int``` | TODO|

**Epson** 
| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `tseurl` |ja |  ```String``` | Url zum Verbinden mit der TSE. Hier wird die TSE erreichbar sein |
| `tseport` |nein |  ```String``` | Port zum Verbinden mit der TSE. Hier wird die TSE erreichbar sein|
| `deviceid` |nein |  ```String``` | Device Id beim Epson Server.|
| `timeout` |nein |  ```String``` | Timeout|

**Fiskaly**
| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `apiKey` |ja |  ```String``` | Fiskaly API Schlüssel |
| `apiSecret` |ja |  ```String``` | Fiskaly API Secret |
| `tssId` |ja |  ```GUID String``` | ID der TSE von Fiskaly |


### Zur Verfügung stellen des Konfiguration-Template über das Portal

(TODO)
- Anlegen unter `Konfiguration->Templates``
- Fereigeben an Zielgruppe

### Manuelles Ausführen der Konfiguration-Template

(TODO)
- Durch Checkout im Shop unter dem Account des Betreibers
- Outlet berücksichtigen

## Nutzung von API oder PowerShell zum Ausführen der Templates


### API
### PowerShell

