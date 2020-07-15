# Erste Schritte für Kassenhersteller

## Übersicht

Als Kassenhersteller haben Sie Anfangs das  Ziel sich mit unserer kostenlosen ft.Middelware aus ihrem Kassensystem heraus zu verbinden und Ihre Integration zu testen. Dieses Dokument fasst die notwendigen Schritte zusammen um dieses Ziel zu erreichen. 

Im Einzelnen sind folgende Schritte zu durchlaufen:

1. Registrierung im Live Portal
2. Registrierung im Sandbox Portal
3. Konfiguration einer Cashbox (Konfigurationscontainer) im ft.Portal
4. Downloaden und Starten des Launcher
5. Initialisierung mit einem Startbeleg
6. Absetzen weiterer Requests

Im Folgenden werden wir auf die einzelnen Schritte detailierter eingehen.

## Registrierung im Live Portal

### Firmendaten und Kooperationsvertrag

Um kostenlosen Support von fiskaltrust zu erhalten müssen Sie sich zuerst in unserem Live Portal registrieren. Dieses finden Sie unter  [https://portal.fiskaltrust.de](https://portal.fiskaltrust.de/). 

Sobald Sie sich im Portal registriert haben wird Ihnen ein Formular zur Auswahl Ihrer Rolle angezeigt. Wählen Sie die Option "Kassenhersteller" und unterschreiben Sie unseren Kooperationsvertrag indem Sie Ihren Namen ins Eingabefeld eingeben. Sollten Sie zudem auch Kassenhändler sein, wählen Sie bitte danach auch diese Option aus. 

Durch die Registrierung im Live Portal und die digitale Unterschrift unseres Kooperationsvertrags sind sie nun berechtigt auf kostenlosen Support für Einrichtigsfragen und Onboarding zuzugreifen. Sie können unser Support-Team unter info@fiskaltrust.de erreichen.

### Registrieren Ihres Kassensystems

Registrieren Sie als nächstes Ihr(e) Kassensystem(e) unter dem Menüpunkt "Kassensysteme". 

## Registrierung im Sandbox Portal

Nach der Registrierung im Live Portal wiederholen Sie die oben beschriebenen Schritte zur Registrierung im Sandbox Portal. Durchführen erhalten Sie Zugriff auf unsere Testumgebung und können zuerst dort, zum Testen, die weiteren in diesem Dokument beschriebenen Schritte durchführen.


## Konfiguration einer Cashbox

Eine sogenannte Cashbox ist ein Konfigurationscontainer, der die Konfiguration der einzelenen Komponenten der ft.Middleware beinhaltet. Über die Cashbox können die Konfigurationen einzelner Komponenten miteinander verbunden werden. So kann die Cashbox die Konfiguration von Queue, SCU und diversen Helper beinhalten und diese miteinander verbinden. Im folgenden werden wir die Konfiguration der zu Testen benötigten SCU und der Queue vornehmen, diese in die Cashbox inkludieren und verbinden.

### Konfiguration der SCU

Die SCU (Security Creation Unit, deutsch: Signatur-Erstellungs-Einheit) ist eine Komponente der ft.Middelware, die für die Kommunikation mit der TSE zuständig ist. Je nachdem welche TSE sie benutzen möchten benötigt die SCU eine entsprechende Konfiguration.

Um die SCU Konfiguration anzulegen wählen Sie den Menüpunkt [Konfiguration][TSE Signatur-Erstellungs-Einheit] und drücken Sie den Button "Erstellen". Geben Sie eine kurze Beschreibung ein und wählen Sie bei "Package Name" das Paket für Ihre TSE aus. Wählen Sie bei danach die neueste Version unter "Package Version" aus und drücken Sie auf "Speichern".

Es werden nun weitere Konfigurationangaben abverlangt. Je nach vorher gehähltem TSE-Packet (Package Name) können diese variiren. Im allgemeinen geben Sie hier an, wie die SCU die TSE ereichen kann und über welchen Endpunkt die Queue mit der SCU kommunizieren  kann. Um den Kommunkationsendpunkt zum Erreichen der SCU anzugeben, wählen sie z.B. gRPC aus indem Sie den entsprechenden Knopf im unteren Bereich drücken. Das Eingabefeld wird automatisch ausgefüllt und kann bei Bedarf weiter editiert werden. Für unser Zeil in diesem Dokument reicht der automatisch vorgegebene gRPC Endpunkt. 

Als nächstes können Sie im oberen Bereich angeben, wie die SCU die gewählte TSE erreichen kann:

#### Cryptovision
Geben Sie den Gerätepfad an, den Laufwerkbuchstaben gefolgt von Doppelpunkt an dem sie die TSE angeschlossen haben. Zum Beispiel ```E:```

#### Swissbit
Geben Sie den Gerätepfad an, den Laufwerkbuchstaben gefolgt von Doppelpunkt an dem sie die TSE angeschlossen haben. Zum Beispiel ```E:```

#### Diebold Nixdorf
Geben Sie den Com Anschluß an dem sie die TSE angeschlossen haben. Zum Beispiel ```COM6```

#### Epson
##### Epson TSE Server + USB TSE
```TODO```
##### Epson Printer + MicroSD
```TODO```
##### Epson USB TSE
```TODO```

#### Fiskaly TSE
Geben Sie die TSS-ID, API-Schlüssel und den "Geheimen" Schlüssel ein. Diese erhalten Sie beim Kauf der Fiskaly TSE. Im Sandbox-Portal können Sie eine Test - Fiskaly TSE zum testen kostenlos über unseren Shop beziehen.

Speichern Sie die Konfiguration Ihrer SCU nach Eingabe der benötigten Daten. Als nächstes werden wir die Queue konfigurieren.

### Konfiguration der Queue
Die Queue ist eine Komponente der ft.Middleware, sammelt die Belege und ist für das Erzeugen der Belegkette verantwortlich. Des Weiteren ist die Queue die Komponente mit der ft.Middleware mit der Ihr Kassensystem kommuniziert.

Um eine neue Queue anzulegen und zu konfigurieren 

### Cashbox anlegen, Queue und SCU verbinden


## Download und Starten des Launcher

## Initialisierung mit einem Startbeleg

## Absetzen weiterer Requests
