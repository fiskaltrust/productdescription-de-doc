# Rollout Szenarien, Tipps & Tricks
Um die fiskaltrust.Middleware in Verbindung mit Kassen und TSEs zu verwenden kommen unterschiedliche Szenarien in Frage. Diese werden weiter unten erläutert, es gibt allerdings einige Grundvoraussetzungen welche auf jeden Fall gegeben sein müssen, unabhängig vom Szenario.

- Pro POS-System (Standort) muss mindestens eine SCU inkl. TSE zugeordnet sein.
- Für jede Kassa die dem Finanzamt gemeldet werden muss, muss eine Queue zugeordnet sein.

## Hardware TSE

Die folgenden Szenarien erfordern alle eine Hardware TSE vor Ort.

### TSE pro Kasse
Das ist das technisch einfachste Szenario, benötigt allerdings auch die maximale Anzahl an TSEs. Technisch ist diese Lösung sehr einfach zu handhaben, da die Exporte der TSE ausschließlich direkt an der Kasse erfolgen.

![tse-per-cashregister](media/tse-per-cashregister.png)

### TSE pro Standort
Es ist auch möglich, für den gesamten Standort nur eine SCU inkl. TSE zu verwenden. An den Kassen sind dennoch Cashboxen installiert, welche allerdings nur eine Queue haben und mit der SCU-Cashbox inkl. TSE verbunden sind. Es gibt zwei Möglichkeiten dieses Szenario zu realisieren. Die SCU-Cashbox kann auf einer Kassa laufen, oder auf einem separatem Rechner. Wichtig ist, dass sich alle Komponenten am gleichen Standort befinden, im sogenannten "operational environment". Bei diesen Szenarien ist darauf zu achten, dass die Exporte aller Kassen zentral auf einer TSE stattfinden und es beim Löschen der Daten zu Probleme führen kann.

SCU auf der Kasse|SCU separat
:--:|:--:
![tse-on-cashregister](media/tse-on-cashregister.png)|![tse-separated](media/tse-separated.png)

### Kassen/Terminals ohne Cashboxen
Werden die Kassen nur als Eingabeterminals verwendet, so ist es nicht notwendig eine Cashbox an der Kasse zu installieren. Das ist auch möglich wenn es keine Kassen gibt, sondern nur Terminals (zum Beispiel Tablets) welches als Eingabeterminals fungieren. Dabei ist zu unterscheiden, ob die Terminals/Kassen dem Finanzamt gemeldet werden oder nicht. Werden sie nicht gemeldet kann alles in eine Queue laufen, ansonsten braucht man für jede Kasse/jedes Terminal eine Queue. 

Single Queue|Queue pro Terminal
:--:|:--:
![terminals-single-queue](media/terminals-single-queue.png)|![terminals-multi-queue](media/terminals-multi-queue.png)

## Cloud TSE

Die nachfolgenden Szenarien setzen auf eine Cloud TSE welche zertifiziert sein muss.

### TSE in der Cloud
Mit einer Cloud-TSE kann die TSE auch in der Cloud laufen. Es ist hier prinzipiell möglich die Cashboxen, Queues und SCUs so wie in der vorherigen Szenarien abzubilden.

![cloud-tse](media/cloud-tse.png)

### Komplettlösung in der Cloud
Sofern es nicht die Möglichkeit besteht, Hardware vor Ort lokal laufen zu lassen kann auch die komplette fiskaltrust.Middleware inkl. TSE in der Cloud laufen. Dafür verbinden sich die Terminals zur Queue in der Cloud. Es ist allerdings so, dass keine Belege gedruckt werden können wenn keine Verbindung zur Queue hergestellt werden kann. Merh zu dieser Lösung gibt es hier: [bring-your-own-datacenter](https://github.com/fiskaltrust/product-de-bring-your-own-datacenter).

![cloud-middleware](media/cloud-middleware.png)