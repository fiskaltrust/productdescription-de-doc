# Schritte zur Herstellung und Konfiguration der Produkte im Account des KassenBetreibers

Hat ein Kassenbetreiber vom Kassenhändler einen Anspruch auf die Nutzung von Produkten von fiskaltrust erworben, müssen die Entitlements auf die Standorte bzw. Kassen des Betreibers übertragen und die Produkte für den Betreiber aktiviert werden. 

Dieses Dokument beschreibt den generellen Prozess zur Herstellung von Produkten beim KassenBetreiber. Einzelne Variationen dieses Prozesses, die durch unterschiedliche Produkteigenschaften zustande kommen, werden auf den jeweiligen Produktseiten beschrieben, welche im Bereich "weiterführende Informationen" verlinkt sind.

## Voraussetzungen

| Voraussetzung                                                | Pflicht                                                      | Optional                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [**KassenHändler ist mit KassenBetreiber verbunden**](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posdealers/getting-started.md#11-verkn%C3%BCpfung-und-konfiguration-von-kassenbetreibern) | Ja, da ansonsten nicht für den KassenBetreiber die Produkte hergestellt werden können |                                                              |
| [**Standorte des KassenBetreibers sind definiert**](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posdealers/getting-started.md#11-verkn%C3%BCpfung-und-konfiguration-von-kassenbetreibern) | Ja, für Produkte, welche für einen gesamten Standort gelten (Sorglos-Bundle) |                                                              |
| **[schreiben/lesen Berechtigung](schreiben/lesen Berechtigung)** | Ja, um in den Account des KassenBetreibers wechseln und Produkte aktivieren zu können |                                                              |
| **[Für KassenBetreiber freigegebene Konfigurations-Templates](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posdealers/02-pre-sales/automatisierter-rollout.md#templating-zum-anlegen-von-cashboxen)** |                                                              | Ja, wenn man Cashboxen gleich automatisiert mit den Produkten herstellen möchte. |

## Optionen zur Herstellung von Produkten für den KassenBetreiber

| Optionen     | Beschreibung                                                 | Vorteile                                                     | Nachteile                                                    |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Option 1** | **Übertragung von bestehenden Entitlements** mit gleichzeitiger Herstellung und Konfiguration der Produkte im Account des KassenBetreibers | Übersicht über noch verfügbare Entitlements                  | Bezug von Händlereinkaufsprodukten kann nicht direkt Kunden zugeordnet werden |
| **Option 2** | **Bezug von Händlereinkaufs-Produkten** mit gleichzeitiger Herstellung und Konfiguration der Produkte im Account des KassenBetreibers | Direkte Zuordnung des Einkaufs von Händlereinkaufsprodukten zum Kunden und auf der Rechnung dokumentiert | Keine Übersicht über noch verfügbare Mengen laut Rahmenvertrag. |

## Empfohlene Schritte zur Herstellung von Produkten für den KasseBetreiber

### Option 1 - Übertragung von bestehenden Entitlements mit gleichzeitiger Herstellung und Konfiguration der Produkte im Account des KassenBetreibers

Die Schritte der ersten und von fiskaltrust empfohlenen Variante sind in folgendem YouTube Video ab ca. Minute 09:30 beschrieben: https://youtu.be/l6IcV7o_LFM?t=567.

#### Schritt 1: Wählen Sie den Account Ihres KassenBetreibers 

Wählen Sie über das Menü `PosOperator`/ `Übersicht` den KassenBetreiber.

#### Schritt 2: Wechseln Sie in den Shop

Wechseln Sie im KassenBetreiber-Account in `Shop`/`Produkte`.

#### Schritt 3: Übertragen Sie Ihre Entitlements an den KassenBetreiber

Wählen Sie jene (Sonder-)Produkte aus, dessen Ansprüche Sie auf Ihren KassenBetreiber übertragen möchten, und legen Sie diese in den Warenkorb.

```
Hinweis: Die Entitlements ("Ansprüche") für jene Produkte, welche Sie als KassenHändler erworben haben, werden im Shop in dieser Ansicht als Sonderprodukte dargestellt (erkenntlich durch den Zusatz "- Anspruch übertragen" im Produktnamen), welche potenziell Ihrem Kunden übertragen werden können. Die Anzahl dieser Sonderprodukte, welche Sie an Ihren KassenHändler übertragen, werden von Ihren verfügbaren Entitlements abgezogen. Dieser Vorgang ist vergleichbar mit einem Gutschein für ein bestimmtes Produkt, den Sie Ihrem Kunden übertragen. Die Ansprüche auf Produkte sind standort-unabhängig.
```

#### Schritt 4: Wählen Sie den Standort aus, für welchen Sie Produkte herstellen wollen.

Nutzen Sie dazu den gewünschten Standort im Drop-Down Feld oberhalb der Produktliste.

```
Hinweis: Berücksichtigen Sie, dass gegebenenfalls Hardware (z.B. bei einem fiskaltrust.Sorglos mit TSE Bundle enthalten) ebenfalls an diesen Standort geliefert wird.
```

#### Schritt 5: Wählen Sie die herzustellenden Produkte

Wählen Sie nun die dazugehörigen Sonderprodukte aus, welche Sie mit Hilfe der soeben übertragenen Ansprüche kostenlos erzeugen möchten, und legen Sie diese in den Warenkorb dazu.

```
Im vorherigen Schritt haben Sie Ansprüche für bestimmte Produkte an Ihren KassenBetreiber übertragen. Der KassenBetreiber hält somit (potenziell, da sich diese noch im Warenkorb befinden) Ansprüche, ganz bestimmte Produkte im Shop von fiskaltrust kostenlos herzustellen. Die Sonderprodukte zur Herstellung von Produkten aus derartigen Ansprüchen sind erkenntlich durch den Zusatz "- aus Anspruch erzeugen" im Produktnamen. Die herzustellenden Produkte gelten für einen bestimmten, nämlich jenen im Shop zum Zeitpunkt der Übertragung in den Warenkorb ausgewählten, Standort.
```

***Anmerkung:*** *In Deutschland ist es KassenHändlern nicht möglich, Ihre Entitlements/Ansprüche auf Produkte den Kunden zu übertragen und die KassenBetreiber die Produkte selbst herstellen zu lassen. KassenBetreiber können in Deutschland nicht direkt bei fiskaltrust Produkte erwerben. Dieser Schritt ist daher für alle Kassenhändler zwingend notwendig.*

#### (Optional) Schritt 6: Wählen Sie die herzustellende Cashbox-Konfiguration

Wählen Sie das dazugehörige Template aus, mit dessen Hilfe Cashboxen am ausgewählten Standort hergestellt werden sollen. 

```
Wenn Sie Templates vorab konfiguriert und für die mit Ihnen verbundenen KassenBetreiber freigegeben haben, werden diese im Shop dargestellt.
```

#### Hinweis zur Variation

Übertragen Sie die Gesamtzahl an benötigter Entitlements in Schritt 3 und wiederholen Sie die Schritte 4, 5 & 6, um für den KassenBetreiber gleich für mehrere Standorte Produkte inklusive Konfiguration in einem Durchlauf herzustellen.

#### Schritt 7: Wechseln Sie zurück in Ihren Account

Um als KassenHändler die Bestellung auszulösen und die Rechnung auf Ihrem Namen und Ihre Rechnungsadresse zu erhalten, wählen Sie rechts oben den roten Hinweis `Zu Ihrem Account wechseln`.

#### Hinweis zur Variation

Wiederholen Sie die Schritte 1-7, um für mehrere KassenBetreiber auf einmal Ansprüche zu übertragen und Produkte herzustellen.

#### Schritt 8: Wählen Sie Ihren eigenen Warenkorb und prüfen Sie die Daten

Auf der Checkout-Seite des Shops sind alle Sonderprodukte ("aus Anspruch übertragen", "aus Anspruch erzeugen") aufgelistet. Prüfen Sie ob die zu übertragenden Ansprüche auf Produkte mit den aus den Ansprüchen herzustellenden Produkten zusammenpassen ("Mit einem Gutschein für einen roten Luftballon kann kein Vanille-Eis eingelöst werden").

Prüfen Sie bei den herzustellenden Produkten die Angaben des KassenBetreibers und des Standortes (Lieferadressen!).

Wenn ausschließlich Ansprüche übertragen und daraus Produkte hergestellt werden sollen, so ist die Bestellung kostenlos.

Mit "verbindlich bestellen" werden die Ansprüche übertragen, Produkte hergestellt und bei Sorglos-Bundles das Jahres-Abo gestartet und gegebenenfalls der Versand von Hardware ausgelöst. 

#### (Optional) Schritt 9: Abschließende Kontrollen in den Kunden-Accounts

Wir empfehlen abschließend in den betroffenen Kunden-Accounts und deren Standorten, die Herstellung der Produkte (und Cashboxen) zu verifizieren.

### Option 2 - Bezug von Händlereinkaufs-Produkten mit gleichzeitiger Herstellung und Konfiguration der Produkte im Account des KassenBetreibers

Die Schritte der zweiten Variante sind in folgendem YouTube Video ab ca. Minute 15:25 beschrieben: https://youtu.be/l6IcV7o_LFM?t=923.

Der Unterschied in Variante 2 liegt darin, dass das Händlereinkaufsprodukt direkt aus dem Account des KassenBetreibers heraus gekauft wird. Dadurch entfällt der Schritt zur Übertragung der Entitlements.

#### Schritte 1 & 2: Wählen Sie den Account Ihres KassenBetreibers und wechseln Sie in den Shop

Wählen Sie wie in Variante 1 über das Menü `PosOperator`/ `Übersicht` den KassenBetreiber und wechseln Sie im KassenBetreiber-Account in `Shop`/`Produkte`.

#### Schritt 3: Wählen Sie den Standort aus, für welchen Sie Produkte herstellen wollen

Nutzen Sie dazu den gewünschten Standort im Drop-Down Feld oberhalb der Produktliste.

#### Schritt 4: Wählen Sie die Händlereinkaufs-Produkte

Wählen Sie Ihre gewünschten Händlereinkaufs-Produkte, und legen Sie diese in den Warenkorb.

```
Im Gegensatz zur Variante 1 übertragen Sie in diesem Schritt nicht Ihre Ansprüche auf den KassenBetreiber, sondern beziehen die Händlereinkaufs-Produkte direkt im Account des KassenBetreibers.
```

#### Schritt 5: Wählen Sie die herzustellenden Produkte

Wählen Sie nun die dazugehörigen Sonderprodukte aus, welche Sie mit Hilfe der soeben erworbenen Händlereinkaufsprodukte für den KassenBetreiber kostenlos erzeugen möchten, und legen Sie diese in den Warenkorb dazu.

#### (Optional) Schritt 6: Wählen Sie die herzustellende Cashbox-Konfiguration

Wählen Sie das dazugehörige Template aus, mit dessen Hilfe Cashboxen am ausgewählten Standort hergestellt werden sollen. 

#### Hinweis zur Variation

Wiederholen Sie die Schritte 3-6, um für den KassenBetreiber gleich für mehrere Standorte Produkte inklusive Konfiguration in einem Durchlauf herzustellen.

#### Schritte 7 & 8: Wechseln Sie zurück in Ihren Account, wählen Sie Ihren eigenen Warenkorb und prüfen Sie die Daten

Es ist wichtig dass Sie als KassenHändler in Ihren eigenen Account zurückwechseln, um die Bestellung auszulösen und die Rechnung auf Ihrem Namen und Ihre Rechnungsadresse zu erhalten.

Falls Sie auf Basis der Rahmenvereinbarung Anspruch auf Mengenrabatte haben, prüfen Sie ob der dargestellte Preis der Händlereinkaufsprodukte mit der Vereinbarung Ihres Rahmenvertrages übereinstimmt.

#### Hinweis zur Variation

Wiederholen Sie die Schritte 1-7, um für mehrere KassenBetreiber auf einmal Händlereinkaufsprodukte zu beziehen und diese Produkte gleich herzustellen.

#### (Optional) Schritt 9: Abschließende Kontrollen in den Kunden-Accounts

Wir empfehlen abschließend in den betroffenen Kunden-Accounts und deren Standorten, die Herstellung der Produkte (und Cashboxen) zu verifizieren.

## Weiterführende Informationen

### fiskaltrust.Sorglos mit TSE

Nach dem Bezug des Händlereinkaufsproduktes fiskaltrust.Sorglos mit TSE stehen zwei unterschiedliche Varianten einer TSE in Form von Entitlements zur Wahl zur Verfügung: Einer Hardware-TSE Subscription, und einer CLoud-TSE Subscription. Dies ermöglicht eine frühzeitige Bestellung des Sorglos Paketes unabhängig von der Verfügbarkeit von zertifizierten TSEs. Erst bei der Herstellung der Produkte muss entschieden werden, welche TSE Subscription zum Einsatz kommen soll.

[Einkauf & Weiterverkauf des fiskaltrust.Sorglos mit TSE Bundles](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posdealers/01-produkte/Sorglos-mit-TSE.md#how-to-guide-einkauf--weiterverkauf)

## Nächste Schritte

[Auslieferung & Inbetriebnahme](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posdealers/getting-started.md#13-auslieferung--inbetriebnahme)