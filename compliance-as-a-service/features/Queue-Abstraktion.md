# Queue-Abstraktion

Eine Queue ist Teil der Kommunikationskette zwischen dem POS-System und der fiskaltrust.Middleware. Alle vom POS-System erstellten regulären Belege werden an die fiskaltrust.Middleware gesendet, um gesichert und in der Queue gespeichert zu werden, und die Response des fiskaltrust.SecurityMechanismus wird zurückgesendet. Jeder Request wird nach regulatorischen Vorgaben verarbeitet und von der SCU (Signature Creation Unit) signiert. Alle Sonderbelege (zum Beispiel Tagesabschlüsse) werden als "Anfragen zur Ausführung einer Sonderfunktion" an die fiskaltrust.Middleware gesendet und von dieser beantwortet. Für jedes POS-System muss mindestens eine Queue erstellt werden.



![cashbox](../media/cashbox.png)

