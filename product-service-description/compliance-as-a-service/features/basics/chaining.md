---
slug: /product-description/germany/products-and-services/caas/features/basics/receipt-chaining
title: Receipt-Chaining
---

# Receipt-Chaining & -Hashing

Als technische Implementierung der Sicherheit wird jeder Request und auch jede Response gehasht, wodurch die Datenintegrität der Anforderungen und Antworten sichergestellt wird. Um Unveränderlichkeit zu gewährleisten, wird ein weiterer Hash-Wert generiert, der sich auf den gesamten Anforderungs-Antwort-Zyklus bezieht, einschließlich der Identifizierung des Zyklus, des Betriebszeitpunkts, der vom Menschen lesbaren Belegnummer und der Hash-Werte von Anforderung, Antwort und vorherigem Empfang , der so genannte Belegs-Hash-Wert. Diese Verkettung des Empfangs-Hash-Werts bietet Unveränderlichkeit und bietet die Möglichkeit, alle Änderungen und auch das Löschen bei jeder vom POS-System bereitgestellten Aktion zu erkennen.


![receipt-chain](../../media/receipt-chain.png)


Um das Risiko eines Angriffs auf die Kette ab dem letzten nicht verketteten Hashwert zu begrenzen, bietet fiskaltrust einen Mechanismus, der die aktuellen Daten in die fiskaltrust-Cloud spiegelt. Dieser Datenspiegel bietet die Möglichkeit, Angriffe zu erkennen, die an der Registrierkasse selbst nicht erkennbar wären.
