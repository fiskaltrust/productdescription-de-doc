# POS Archiv

**Produktnummer:** 4445-040010

## Rechtsgrundlage

Die abgesicherten Daten müssen zu jedem Zeitpunkt, über einen Zeitraum von 12 Jahren, für das Finanzamt zum Export zur Verfügung stehen.

Die Daten werden entweder lokal auf der TSE Hardware gespeichert oder sie werden regelmäßig und automatisiert aus der TSE in einen externen Speicher exportiert. Dabei kann der Speicherplatz auf der TSE wieder freigegeben werden. 

Wenn kein Cloud Speicher oder kein Speicher in der Kassenverwaltung zur Verfügung steht und alle Daten ausschließlich lokal auf der Kasse gespeichert werden, muss eine neue TSE gekauft werden, wenn der Speicher voll ist. Technische Sicherheitseinrichtungen haben zudem ein Verfalldatum, das zwischen 3 und 7 Jahren liegt.

## Funktionsweise POS Archiv

Mit Hilfe des POS Archivs können die Daten von der TSE dorthin exportiert und der Speicherplatz auf der TSE wieder freigegeben werden.

Reine „Stand-Alone“ Kassen, die über keinerlei Anbindung an einen externen Speicher verfügen und die nicht das POS Archiv für die Absicherung der Daten nutzen, haben insofern den Nachteil, dass der Datenspeicher der TSE irgendwann voll ist und dass er abhanden kommen kann. Auch wird der Betrieb unterbrochen, wenn ein Betriebsprüfer die Daten, die mehrere Gigabyte umfassen können auslesen will.

Das POS Archiv ist ein Addon der fiskaltrust.Middleware und kann nur genutzt werden, wenn die Kasse die fiskaltrust.Middleware implementiert hat. Das POS Archiv speichert Daten revisionssicher, basierend auf die übermittelten Belege über die fiskaltrust.Middleware, über einen Zeitraum von 12 Jahren. Zu diesem Zeitpunkt wird auch das spezielle Journal der signierten Transaktionen abgedeckt.

Bei Auftreten einer monatlichen Quittung wird ein Datencheck zur Konsistenz durchgeführt und eine zusätzliche Exportdatei erstellt und auf einem unveränderlichen Speicher in der fiskaltrust-cloud, entsprechend den steuerlichen Bestimmungen in deutschen Rechenzentren, gespeichert.

## Features

- [TAR-File-Export](../features/TAR-File-Export.md) 
- [DSFinV-K-Export](../features/DSFinV-K-Export.md) 
- [DFKA-Taxonomie-Kassendaten-Export](../features/DFKA-Taxonomie-Kassendaten-Export.md) 
- [revisionssichere-Queue-Items](../features/revisionssichere-Queue-Items.md) 
- [unveraenderbarer-speicher](../features/unveraenderbarer-speicher.md)
- [Azure-table-Storage](../../compliance-as-a-service/features/Azure-table-Storage.md) 

## Verkaufseinheit

Verkauf pro Kasse pro Jahr
