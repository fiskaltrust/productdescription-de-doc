# Erste Schritte für Kassenhersteller

## Übersicht

Dieser Leitfaden stellt Kassenherstellern eine Übersicht der von uns empfohlenen Phasen der Integration mit fiskaltrust zur Verfügung. 

Im Einzelnen sind folgende Schritte zu durchlaufen:

![integration phases](media/pos-creator-integration-phases-de.png)

1. [Registrierung im Live Portal](#registrierung-im-live-portal)
2. [Registrierung im Sandbox Portal](#registrierung-im-sandbox-portal)
3. [Konfiguration einer Cashbox (Konfigurationscontainer) im Portal](#konfiguration-einer-cashbox)
4. [Downloaden und Starten des Launcher](#download-und-starten-des-launcher)
5. [Initialisierung mit einem Startbeleg](#initialisierung-mit-einem-startbeleg)
6. [Absetzen weiterer Requests](#absetzen-weiterer-requests)
7. [Weiterführende Informationsquellen](#weiterführende-informationsquellen)

Im Folgenden werden wir auf die einzelnen Schritte detailierter eingehen.

## Registrierung im Live Portal

### Firmendaten und Kooperationsvertrag

Um kostenlosen Support von fiskaltrust zu erhalten, müssen Sie sich zuerst in unserem Live Portal registrieren. Dieses finden Sie unter  [https://portal.fiskaltrust.de](https://portal.fiskaltrust.de/). 

Sobald Sie sich im Portal registriert haben, wird Ihnen ein Formular zur Auswahl Ihrer Rolle angezeigt. Wählen Sie die Option "Kassenhersteller" und unterschreiben Sie unseren Kooperationsvertrag, indem Sie Ihren Namen ins Eingabefeld eingeben. Sollten Sie zudem auch Kassenhändler sein, wählen Sie bitte danach auch diese Option aus. 

Durch die Registrierung im Live Portal und die digitale Unterschrift unseres Kooperationsvertrags sind sie nun berechtigt auf kostenlosen Support für Einrichtungsfragen und Onboarding zuzugreifen. Sie können unser Support-Team unter [info@fiskaltrust.de](mailto:info@fiskaltrust.de) erreichen.

### Registrieren Ihres Kassensystems

Registrieren Sie als Nächstes Ihr(e) Kassensystem(e) unter dem Menüpunkt "Kassensysteme". 

## Registrierung im Sandbox Portal

Nach der Registrierung im Live Portal wiederholen Sie die oben beschriebenen Schritte zur Registrierung im Sandbox Portal [https://portal-sandbox.fiskaltrust.de](https://portal-sandbox.fiskaltrust.de/). Dadurch erhalten Sie Zugriff auf unsere Testumgebung und können zuerst dort, zum Testen, die weiteren in diesem Dokument beschriebenen Schritte durchführen.


## Integration der fiskaltrust.Middleware in Ihr Kassensystem

Die fiskaltrust.Middleware bietet Ihnen Compliance-As-A-Service im Fiskalisierungsbereich. Sie muss dafür in Ihr Kassensystem integriert werden. In unserer [Anleitung zur Integration der fiskaltrust.Middleware](middleware-integration-en.md) können Sie die dazu benötigten Schritte erfahren.

## Onboarding der Kassenhändler

Sobald Sie die fiskaltrust.Missleware in Ihr Kassensystem integriert haben und ihre einfachen Business Cases implementiert haben, empfehlen wir Ihnen mit dem Onboarding Ihrer Kassenhändler zu beginnen um sich gemeinsam mit Ihren Kassenhändler auf den Rollout vorzubereiten. 

Es ist wichtig Ihre Kassenhändler möglichst früh einzubeziehen, denn die Kassenhändler müssen unter anderen folgende Schritte absolvieren bevor Sie die fiskaltrust.Middleware an die Kassenbetreiber ausrollen können:

1. Registrierung im fiskaltrust.Portal und digitale Unterzeichnung des fiskaltrust Kassenhändler Kooperationsvertrags.
2. Je nach Gegebenheiten und geplanten Einkaufsmengen muss durch den Kassenhändler einen Rahmenvertrag bezüglich der Abnahmemengen über einen bestimmten Zeitraum und den dazugehörigen Mengenrabatten von fiskaltrust angefordert, ausgehandelt und unterzeichnet werden.
3. Der Kassenhändler muss alle Kassenbetreiber ins fiskaltrust Portal einladen, wo diese vor dem Rollout die Nutzungsvereinbarung für die fiskaltrust.Middleware unterzeichnen müssen.
4. Zugriffsrechte von den  Kassenbetreiber auf Ihre Accounts anfordern, so dass der Kassenhändler im  Namen des Kassenbetreibers Produktansprüche (Entitlements) einlösen und  aktivieren kann.
5. Zugriffsrechte von den  Kassenbetreiber auf Ihre Accounts anfordern, so dass der Kassenhändler im  Namen des Kassenbetreibers die Konfiguration der fiskaltrust.Middleware Instanzen vornehmen kann, die dann beim Kassenbetreiber installiert werden.
6. Für den korrekten DSFinV-K Export muss der Kassenhändler die Angaben aus dem Kassensystem mit den Stammdaten des Kassenbetreibers im fiskaltrust.Portal verknüpfen.
7. Technische Planung und Vorbereitung für den Rollout zusammen mit dem Kassenhersteller.

Die oben dargestellten Schritte können sehr zeitaufwendig sein. Deshalb empfehlen wir dringen, dass Sie Ihre Kassenhändler früh informieren und insbesondere sie so früh wie möglich im fiskaltrust.Portal einladen, so dass die Kassenhändler mit Ihren Vorbereitungen beginnen können.

## Lösung komplexer Business Cases
## Pilotinstallation
## Handover zum Rollout an den Kassenhändler


## Weiterführende Informationsquellen

- Deutsche fiskaltrust Website: [https://fiskaltrust.de](https://fiskaltrust.de/)
- fiskaltrust Dokumentations-Platform: [https://docs.fiskaltrust.cloud](https://docs.fiskaltrust.cloud/)
- FAQ: [fiskaltrust docs - faq](https://docs.fiskaltrust.cloud/doc/faq/qna/market-de.html) und [Github faq repo](https://github.com/fiskaltrust/faq) zum Anlegen von Issues (Fragen).
- fiskaltrust Gihub repos: [https://github.com/fiskaltrust](https://github.com/fiskaltrust)
- fiskaltrust Videos: [Youtube Channel](https://www.youtube.com/channel/UCmMlqO4L3AzkEhh6WYA8BJg)



