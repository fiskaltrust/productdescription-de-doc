# Troubleshooting Firewall 

Hinter diesen DNS Namen liegt ein Traffic Manager, der einen Redirect auf einen Load Balancer durchführt, der Load Balancer leitet die Anfrage an einen Server weiter, wobei üblicherweise der Load Balancer aber die Antwort zurückliefert und nicht der Server direkt.

Je nach Sicherheitskonzept und Stufe, sowie verwendeter Hardware kann es recht diffizil werden hier eine korrekte Firewall Konfiguration zu erstellen, die vor allem auch im Fail-Over Fall funktioniert. Einen eindeutigen Proxy zu nutzen sollte kein Problem darstellen, wenn keinerlei Veränderung an den zu übertragenden Daten vorgenommen werden.

### Weitere Informationen

Host-Header für den Traffic-Manager, dieser ist DNS-Basiert und gibt HTTP-30x Redirects auf eine aktive Umgebung zurück. (im Notfall kann dies umgangen werden).

### IPs bis Juni 2020

| Datacenter    | FT.Country | URL                                                   | IP             | Package  Download | Configuration  Download Upload | Onlinesignature  SCU (AT only) | Portal | SignaturCloud |
| ------------- | ---------- | ----------------------------------------------------- | -------------- | ----------------- | ------------------------------ | ------------------------------ | ------ | ------------- |
| westeurope    | at         | ft-a103-helipad.fiskaltrust.at                        | 52.232.31.243  |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a103-packages.fiskaltrust.at                       | 52.232.31.243  | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a103-portal.fiskaltrust.at                         | 52.232.31.243  |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a103-signaturcloud-azure.fiskaltrust.at            | 52.232.31.243  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a103-signaturcloud-sql.fiskaltrust.at              | 52.232.31.243  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a103-signing.fiskaltrust.at                        | 52.232.31.243  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a103-signing-secondary.fiskaltrust.at              | 52.232.31.243  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a104-helipad.fiskaltrust.at                        | 52.232.31.248  |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a104-packages.fiskaltrust.at                       | 52.232.31.248  | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a104-portal.fiskaltrust.at                         | 52.232.31.248  |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a104-signaturcloud-azure.fiskaltrust.at            | 52.232.31.248  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a104-signaturcloud-sql.fiskaltrust.at              | 52.232.31.248  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a104-signing.fiskaltrust.at                        | 52.232.31.248  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a104-signing-secondary.fiskaltrust.at              | 52.232.31.248  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a105-helipad.fiskaltrust.at                        | 52.166.149.161 |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a105-packages.fiskaltrust.at                       | 52.166.149.161 | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a105-portal.fiskaltrust.at                         | 52.166.149.161 |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a105-signaturcloud-azure.fiskaltrust.at            | 52.166.149.161 |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a105-signaturcloud-sql.fiskaltrust.at              | 52.166.149.161 |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a105-signing.fiskaltrust.at                        | 52.166.149.161 |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a105-signing-secondary.fiskaltrust.at              | 52.166.149.161 |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a106-helipad.fiskaltrust.at                        | 52.232.31.234  |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a106-packages.fiskaltrust.at                       | 52.232.31.234  | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a106-portal.fiskaltrust.at                         | 52.232.31.234  |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a106-signaturcloud-azure.fiskaltrust.at            | 52.232.31.234  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a106-signaturcloud-sql.fiskaltrust.at              | 52.232.31.234  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a106-signing.fiskaltrust.at                        | 52.232.31.234  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a106-signing-secondary.fiskaltrust.at              | 52.232.31.234  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a240-helipad-sandbox.fiskaltrust.at                | 52.232.105.99  |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a240-packages-sandbox.fiskaltrust.at               | 52.232.105.99  | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a240-portal-sandbox.fiskaltrust.at                 | 52.232.105.99  |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a240-signaturcloud-azure-sandbox.fiskaltrust.at    | 52.232.105.99  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a240-signaturcloud-sql-sandbox.fiskaltrust.at      | 52.232.105.99  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a240-signing-sandbox.fiskaltrust.at                | 52.232.105.99  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a240-signing-sandbox-secondary.fiskaltrust.at      | 52.232.105.99  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a248-helipad-sandbox.fiskaltrust.at                | 52.233.153.172 |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a248-packages-sandbox.fiskaltrust.at               | 52.233.153.172 | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a248-portal-sandbox.fiskaltrust.at                 | 52.233.153.172 |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.at    | 52.233.153.172 |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.at      | 52.233.153.172 |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a248-signing-sandbox.fiskaltrust.at                | 52.233.153.172 |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a248-signing-sandbox-secondary.fiskaltrust.at      | 52.233.153.172 |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a252-helipad-sandbox.fiskaltrust.at                | 52.233.199.77  |                   | X                              |                                |        |               |
| westeurope    | at         | ft-a252-packages-sandbox.fiskaltrust.at               | 52.233.199.77  | X                 |                                |                                |        |               |
| westeurope    | at         | ft-a252-portal-sandbox.fiskaltrust.at                 | 52.233.199.77  |                   |                                |                                | X      |               |
| westeurope    | at         | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.at    | 52.233.199.77  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a252-signaturcloud-sql-sandbox.fiskaltrust.at      | 52.233.199.77  |                   |                                |                                |        | X             |
| westeurope    | at         | ft-a252-signing-sandbox.fiskaltrust.at                | 52.233.199.77  |                   |                                | X                              |        |               |
| westeurope    | at         | ft-a252-signing-sandbox-secondary.fiskaltrust.at      | 52.233.199.77  |                   |                                | X                              |        |               |
| graz          | at         | ft-at11-signing.fiskaltrust.at                        | 149.154.100.21 |                   |                                | X                              |        |               |
| graz          | at         | ft-at11-signing-secondary.fiskaltrust.at              | 149.154.100.21 |                   |                                | X                              |        |               |
| westeurope    | cloud      | ft-a103-data.fiskaltrust.cloud                        | 52.232.31.245  |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a103-helipad.fiskaltrust.cloud                     | 52.232.31.245  |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a103-packages.fiskaltrust.cloud                    | 52.232.31.245  | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a103-signaturcloud-azure.fiskaltrust.cloud         | 52.232.31.245  |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a103-signaturcloud-sql.fiskaltrust.cloud           | 52.232.31.245  |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a104-data.fiskaltrust.cloud                        | 52.232.31.252  |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a104-helipad.fiskaltrust.cloud                     | 52.232.31.252  |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a104-packages.fiskaltrust.cloud                    | 52.232.31.252  | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a104-signaturcloud-azure.fiskaltrust.cloud         | 52.232.31.252  |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a104-signaturcloud-sql.fiskaltrust.cloud           | 52.232.31.252  |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a105-data.fiskaltrust.cloud                        | 52.166.150.3   |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a105-helipad.fiskaltrust.cloud                     | 52.166.150.3   |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a105-packages.fiskaltrust.cloud                    | 52.166.150.3   | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a105-signaturcloud-azure.fiskaltrust.cloud         | 52.166.150.3   |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a105-signaturcloud-sql.fiskaltrust.cloud           | 52.166.150.3   |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a106-data.fiskaltrust.cloud                        | 13.80.159.55   |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a106-helipad.fiskaltrust.cloud                     | 13.80.159.55   |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a106-packages.fiskaltrust.cloud                    | 13.80.159.55   | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a106-signaturcloud-azure.fiskaltrust.cloud         | 13.80.159.55   |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a106-signaturcloud-sql.fiskaltrust.cloud           | 13.80.159.55   |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a240-data-sandbox.fiskaltrust.cloud                | 52.232.105.98  |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a240-helipad-sandbox.fiskaltrust.cloud             | 52.232.105.98  |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a240-packages-sandbox.fiskaltrust.cloud            | 52.232.105.98  | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a248-data-sandbox.fiskaltrust.cloud                | 52.174.199.114 |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a248-helipad.fiskaltrust.cloud                     | 52.174.199.114 |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a248-helipad-sandbox.fiskaltrust.cloud             | 52.174.199.114 |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a248-packages.fiskaltrust.cloud                    | 52.174.199.114 | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a248-packages-sandbox.fiskaltrust.cloud            | 52.174.199.114 | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a248-signaturcloud-azure.fiskaltrust.cloud         | 52.174.199.114 |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.cloud | 52.174.199.114 |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a248-signaturcloud-sql.fiskaltrust.cloud           | 52.174.199.114 |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.cloud   | 52.174.199.114 |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a252-data-sandbox.fiskaltrust.cloud                | 52.233.198.78  |                   |                                |                                |        |               |
| westeurope    | cloud      | ft-a252-helipad-sandbox.fiskaltrust.cloud             | 52.233.198.78  |                   | X                              |                                |        |               |
| westeurope    | cloud      | ft-a252-packages-sandbox.fiskaltrust.cloud            | 52.233.198.78  | X                 |                                |                                |        |               |
| westeurope    | cloud      | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.cloud | 52.233.198.78  |                   |                                |                                |        | X             |
| westeurope    | cloud      | ft-a252-signaturcloud-sql-sandbox.fiskaltrust.cloud   | 52.233.198.78  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a103-portal.fiskaltrust.de                         | 52.174.101.91  |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a103-signaturcloud-azure.fiskaltrust.de            | 52.174.101.91  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a103-signaturcloud-sql.fiskaltrust.de              | 52.174.101.91  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a104-portal.fiskaltrust.de                         | 13.80.144.75   |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a104-signaturcloud-azure.fiskaltrust.de            | 13.80.144.75   |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a104-signaturcloud-sql.fiskaltrust.de              | 13.80.144.75   |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a105-portal.fiskaltrust.de                         | 13.95.25.48    |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a105-signaturcloud-azure.fiskaltrust.de            | 13.95.25.48    |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a105-signaturcloud-sql.fiskaltrust.de              | 13.95.25.48    |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a106-portal.fiskaltrust.de                         | 52.233.135.71  |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a106-signaturcloud-azure.fiskaltrust.de            | 52.233.135.71  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a106-signaturcloud-sql.fiskaltrust.de              | 52.233.135.71  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a240-portal-sandbox.fiskaltrust.de                 | 13.93.13.52    |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a240-siganturcloud-azure-sandbox.fiskaltrust.de    | 13.93.13.52    |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a240-siganturcloud-sandbox.fiskaltrust.de          | 13.93.13.52    |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a240-signaturcloud-sql-sandbox.fiskaltrust.de      | 13.93.13.52    |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a248-portal-sandbox.fiskaltrust.de                 | 13.80.148.248  |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.de    | 13.80.148.248  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.de      | 13.80.148.248  |                   |                                |                                |        | X             |
| westeurope    | de         | ft-a252-portal-sandbox.fiskaltrust.de                 | 13.80.149.240  |                   |                                |                                | X      |               |
| westeurope    | de         | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.de    | 13.80.149.240  |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a103-portal.fiskaltrust.fr                         | 52.166.149.170 |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a103-signaturcloud-azure.fiskaltrust.fr            | 52.166.149.170 |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a103-signaturcloud-sql.fiskaltrust.fr              | 52.166.149.170 |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a104-portal.fiskaltrust.fr                         | 52.174.149.36  |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a104-signaturcloud-azure.fiskaltrust.fr            | 52.174.149.36  |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a104-signaturcloud-sql.fiskaltrust.fr              | 52.174.149.36  |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a105-portal.fiskaltrust.fr                         | 23.101.74.60   |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a105-signaturcloud-azure.fiskaltrust.fr            | 23.101.74.60   |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a105-signaturcloud-sql.fiskaltrust.fr              | 23.101.74.60   |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a106-portal.fiskaltrust.fr                         | 52.233.130.60  |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a106-signaturcloud-azure.fiskaltrust.fr            | 52.233.130.60  |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a106-signaturcloud-sql.fiskaltrust.fr              | 52.233.130.60  |                   |                                |                                |        | X             |
| francecentral | fr         | ft-a108-portal.fiskaltrust.fr                         | 40.89.143.55   |                   |                                |                                | X      |               |
| francecentral | fr         | ft-a108-signaturcloud-azure.fiskaltrust.fr            | 40.89.143.55   |                   |                                |                                |        | X             |
| francecentral | fr         | ft-a108-signaturcloud-sql.fiskaltrust.fr              | 40.89.143.55   |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a240-portal-sandbox.fiskaltrust.fr                 | 13.93.11.101   |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a240-signaturcloud-azure-sandbox.fiskaltrust.fr    | 13.93.11.101   |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a240-signaturcloud-sql-sandbox.fiskaltrust.fr      | 13.93.11.101   |                   |                                |                                |        | X             |
| francecentral | fr         | ft-a241-portal-sandbox.fiskaltrust.fr                 | 40.89.140.232  |                   |                                |                                | X      |               |
| francecentral | fr         | ft-a241-signaturcloud-azure-sandbox.fiskaltrust.fr    | 40.89.140.232  |                   |                                |                                |        | X             |
| francecentral | fr         | ft-a241-signaturcloud-sql-sandbox.fiskaltrust.fr      | 40.89.140.232  |                   |                                |                                |        | x             |
| westeurope    | fr         | ft-a248-portal-sandbox.fiskaltrust.fr                 | 40.68.86.85    |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.fr    | 40.68.86.85    |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.fr      | 40.68.86.85    |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a252-portal-sandbox.fiskaltrust.fr                 | 13.81.216.246  |                   |                                |                                | X      |               |
| westeurope    | fr         | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.fr    | 13.81.216.246  |                   |                                |                                |        | X             |
| westeurope    | fr         | ft-a252-signaturcloud-sql-sandbox.fiskaltrust.fr      | 13.81.216.246  |                   |                                |                                |        | X             |
| Westeurope    | cloud      | ft-a103-fiskaltrust-cloud.cloud                       | 52.232.31.245  |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a103-fiskaltrust-cloud.at                          | 52.232.31.245  |                   |                                |                                |        |               |
| Westeurope    | cloud      | ft-a104-fiskaltrust-cloud.cloud                       | 52.232.31.252  |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a104-fiskaltrust-cloud.at                          | 52.232.31.252  |                   |                                |                                |        |               |
| Westeurope    | cloud      | ft-a104-fiskaltrust-at.cloud                          | 52.232.31.248  |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a104-fiskaltrust-at.at                             | 52.232.31.248  |                   |                                |                                |        |               |
| Westeurope    | cloud      | ft-a105-fiskaltrust-cloud.cloud                       | 52.166.150.3   |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a105-fiskaltrust-cloud.at                          | 52.166.150.3   |                   |                                |                                |        |               |
| Westeurope    | cloud      | ft-a105-fiskaltrust-at.cloud                          | 52.166.149.161 |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a105-fiskaltrust-at.at                             | 52.166.149.161 |                   |                                |                                |        |               |
| Westeurope    | cloud      | ft-a106-fiskaltrust-cloud.cloud                       | 13.80.159.55   |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a106-fiskaltrust-cloud.at                          | 13.80.159.55   |                   |                                |                                |        |               |
| Westeurope    | cloud      | ft-a106-fiskaltrust-at.cloud                          | 52.232.31.234  |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a106-fiskaltrust-at.at                             | 52.232.31.234  |                   |                                |                                |        |               |
| Paris         | fr         | ft-a108-fiskaltrust-fr.fr                             | 40.89.143.55   |                   |                                |                                |        |               |
| Paris         | fr         | ft-a109-fiskaltrust-fr.fr                             | 40.66.60.130   |                   |                                |                                |        |               |
| Frankfurt     | de         | ft-a111-fiskaltrust-de.de                             | 51.116.232.218 |                   |                                |                                |        |               |
| Frankfurt     | de         | ft-a112-fiskaltrust-de.de                             | 51.116.168.9   |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a114-fiskaltrust-at.at                             | 13.95.22.62    |                   |                                |                                |        |               |
| Westeurope    | at         | ft-a115-fiskaltrust-at.at                             | 52.166.206.12  |                   |                                |                                |        |               |
| Graz          | at         | ft-at11-fiskaltrust-at.at                             | 149.154.100.21 |                   |                                |                                |        |               |

## IPs ab Juni 2020

| Datacenter    | FT.Country | URL                                                   | IP             | Package Download | Configuration Download Upload | Onlinesignature SCU (AT only) | Portal | SignaturCloud |
| ------------- | ---------- | ----------------------------------------------------- | -------------- | ---------------- | ----------------------------- | ----------------------------- | ------ | ------------- |
| westeurope    | at         | ft-a103-helipad.fiskaltrust.at                        | 52.232.31.243  |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a103-packages.fiskaltrust.at                       | 52.232.31.243  | X                |                               |                               |        |               |
| westeurope    | at         | ft-a103-portal.fiskaltrust.at                         | 52.232.31.243  |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a103-signaturcloud-azure.fiskaltrust.at            | 52.232.31.243  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a103-signaturcloud-sql.fiskaltrust.at              | 52.232.31.243  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a103-signing.fiskaltrust.at                        | 52.232.31.243  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a103-signing-secondary.fiskaltrust.at              | 52.232.31.243  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a104-helipad.fiskaltrust.at                        | 52.232.31.248  |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a104-packages.fiskaltrust.at                       | 52.232.31.248  | X                |                               |                               |        |               |
| westeurope    | at         | ft-a104-portal.fiskaltrust.at                         | 52.232.31.248  |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a104-signaturcloud-azure.fiskaltrust.at            | 52.232.31.248  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a104-signaturcloud-sql.fiskaltrust.at              | 52.232.31.248  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a104-signing.fiskaltrust.at                        | 52.232.31.248  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a104-signing-secondary.fiskaltrust.at              | 52.232.31.248  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a105-helipad.fiskaltrust.at                        | 52.166.149.161 |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a105-packages.fiskaltrust.at                       | 52.166.149.161 | X                |                               |                               |        |               |
| westeurope    | at         | ft-a105-portal.fiskaltrust.at                         | 52.166.149.161 |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a105-signaturcloud-azure.fiskaltrust.at            | 52.166.149.161 |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a105-signaturcloud-sql.fiskaltrust.at              | 52.166.149.161 |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a105-signing.fiskaltrust.at                        | 52.166.149.161 |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a105-signing-secondary.fiskaltrust.at              | 52.166.149.161 |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a106-helipad.fiskaltrust.at                        | 52.232.31.234  |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a106-packages.fiskaltrust.at                       | 52.232.31.234  | X                |                               |                               |        |               |
| westeurope    | at         | ft-a106-portal.fiskaltrust.at                         | 52.232.31.234  |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a106-signaturcloud-azure.fiskaltrust.at            | 52.232.31.234  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a106-signaturcloud-sql.fiskaltrust.at              | 52.232.31.234  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a106-signing.fiskaltrust.at                        | 52.232.31.234  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a106-signing-secondary.fiskaltrust.at              | 52.232.31.234  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a240-helipad-sandbox.fiskaltrust.at                | 52.232.105.99  |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a240-packages-sandbox.fiskaltrust.at               | 52.232.105.99  | X                |                               |                               |        |               |
| westeurope    | at         | ft-a240-portal-sandbox.fiskaltrust.at                 | 52.232.105.99  |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a240-signaturcloud-azure-sandbox.fiskaltrust.at    | 52.232.105.99  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a240-signaturcloud-sql-sandbox.fiskaltrust.at      | 52.232.105.99  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a240-signing-sandbox.fiskaltrust.at                | 52.232.105.99  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a240-signing-sandbox-secondary.fiskaltrust.at      | 52.232.105.99  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a248-helipad-sandbox.fiskaltrust.at                | 52.233.153.172 |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a248-packages-sandbox.fiskaltrust.at               | 52.233.153.172 | X                |                               |                               |        |               |
| westeurope    | at         | ft-a248-portal-sandbox.fiskaltrust.at                 | 52.233.153.172 |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.at    | 52.233.153.172 |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.at      | 52.233.153.172 |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a248-signing-sandbox.fiskaltrust.at                | 52.233.153.172 |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a248-signing-sandbox-secondary.fiskaltrust.at      | 52.233.153.172 |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a252-helipad-sandbox.fiskaltrust.at                | 52.233.199.77  |                  | X                             |                               |        |               |
| westeurope    | at         | ft-a252-packages-sandbox.fiskaltrust.at               | 52.233.199.77  | X                |                               |                               |        |               |
| westeurope    | at         | ft-a252-portal-sandbox.fiskaltrust.at                 | 52.233.199.77  |                  |                               |                               | X      |               |
| westeurope    | at         | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.at    | 52.233.199.77  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a252-signaturcloud-sql-sandbox.fiskaltrust.at      | 52.233.199.77  |                  |                               |                               |        | X             |
| westeurope    | at         | ft-a252-signing-sandbox.fiskaltrust.at                | 52.233.199.77  |                  |                               | X                             |        |               |
| westeurope    | at         | ft-a252-signing-sandbox-secondary.fiskaltrust.at      | 52.233.199.77  |                  |                               | X                             |        |               |
| graz          | at         | ft-at11-signing.fiskaltrust.at                        | 149.154.100.21 |                  |                               | X                             |        |               |
| graz          | at         | ft-at11-signing-secondary.fiskaltrust.at              | 149.154.100.21 |                  |                               | X                             |        |               |
| westeurope    | cloud      | ft-a103-data.fiskaltrust.cloud                        | 52.232.31.245  |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a103-helipad.fiskaltrust.cloud                     | 52.232.31.245  |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a103-packages.fiskaltrust.cloud                    | 52.232.31.245  | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a103-signaturcloud-azure.fiskaltrust.cloud         | 52.232.31.245  |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a103-signaturcloud-sql.fiskaltrust.cloud           | 52.232.31.245  |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a104-data.fiskaltrust.cloud                        | 52.232.31.252  |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a104-helipad.fiskaltrust.cloud                     | 52.232.31.252  |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a104-packages.fiskaltrust.cloud                    | 52.232.31.252  | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a104-signaturcloud-azure.fiskaltrust.cloud         | 52.232.31.252  |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a104-signaturcloud-sql.fiskaltrust.cloud           | 52.232.31.252  |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a105-data.fiskaltrust.cloud                        | 52.166.150.3   |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a105-helipad.fiskaltrust.cloud                     | 52.166.150.3   |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a105-packages.fiskaltrust.cloud                    | 52.166.150.3   | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a105-signaturcloud-azure.fiskaltrust.cloud         | 52.166.150.3   |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a105-signaturcloud-sql.fiskaltrust.cloud           | 52.166.150.3   |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a106-data.fiskaltrust.cloud                        | 13.80.159.55   |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a106-helipad.fiskaltrust.cloud                     | 13.80.159.55   |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a106-packages.fiskaltrust.cloud                    | 13.80.159.55   | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a106-signaturcloud-azure.fiskaltrust.cloud         | 13.80.159.55   |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a106-signaturcloud-sql.fiskaltrust.cloud           | 13.80.159.55   |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a240-data-sandbox.fiskaltrust.cloud                | 52.232.105.98  |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a240-helipad-sandbox.fiskaltrust.cloud             | 52.232.105.98  |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a240-packages-sandbox.fiskaltrust.cloud            | 52.232.105.98  | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a248-data-sandbox.fiskaltrust.cloud                | 52.174.199.114 |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a248-helipad.fiskaltrust.cloud                     | 52.174.199.114 |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a248-helipad-sandbox.fiskaltrust.cloud             | 52.174.199.114 |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a248-packages.fiskaltrust.cloud                    | 52.174.199.114 | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a248-packages-sandbox.fiskaltrust.cloud            | 52.174.199.114 | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a248-signaturcloud-azure.fiskaltrust.cloud         | 52.174.199.114 |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.cloud | 52.174.199.114 |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a248-signaturcloud-sql.fiskaltrust.cloud           | 52.174.199.114 |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.cloud   | 52.174.199.114 |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a252-data-sandbox.fiskaltrust.cloud                | 52.233.198.78  |                  |                               |                               |        |               |
| westeurope    | cloud      | ft-a252-helipad-sandbox.fiskaltrust.cloud             | 52.233.198.78  |                  | X                             |                               |        |               |
| westeurope    | cloud      | ft-a252-packages-sandbox.fiskaltrust.cloud            | 52.233.198.78  | X                |                               |                               |        |               |
| westeurope    | cloud      | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.cloud | 52.233.198.78  |                  |                               |                               |        | X             |
| westeurope    | cloud      | ft-a252-signaturcloud-sql-sandbox.fiskaltrust.cloud   | 52.233.198.78  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a103-portal.fiskaltrust.de                         | 52.174.101.91  |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a103-signaturcloud-azure.fiskaltrust.de            | 52.174.101.91  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a103-signaturcloud-sql.fiskaltrust.de              | 52.174.101.91  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a104-portal.fiskaltrust.de                         | 13.80.144.75   |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a104-signaturcloud-azure.fiskaltrust.de            | 13.80.144.75   |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a104-signaturcloud-sql.fiskaltrust.de              | 13.80.144.75   |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a105-portal.fiskaltrust.de                         | 13.95.25.48    |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a105-signaturcloud-azure.fiskaltrust.de            | 13.95.25.48    |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a105-signaturcloud-sql.fiskaltrust.de              | 13.95.25.48    |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a106-portal.fiskaltrust.de                         | 52.233.135.71  |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a106-signaturcloud-azure.fiskaltrust.de            | 52.233.135.71  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a106-signaturcloud-sql.fiskaltrust.de              | 52.233.135.71  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a240-portal-sandbox.fiskaltrust.de                 | 13.93.13.52    |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a240-siganturcloud-azure-sandbox.fiskaltrust.de    | 13.93.13.52    |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a240-siganturcloud-sandbox.fiskaltrust.de          | 13.93.13.52    |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a240-signaturcloud-sql-sandbox.fiskaltrust.de      | 13.93.13.52    |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a248-portal-sandbox.fiskaltrust.de                 | 13.80.148.248  |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.de    | 13.80.148.248  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.de      | 13.80.148.248  |                  |                               |                               |        | X             |
| westeurope    | de         | ft-a252-portal-sandbox.fiskaltrust.de                 | 13.80.149.240  |                  |                               |                               | X      |               |
| westeurope    | de         | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.de    | 13.80.149.240  |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a103-portal.fiskaltrust.fr                         | 52.166.149.170 |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a103-signaturcloud-azure.fiskaltrust.fr            | 52.166.149.170 |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a103-signaturcloud-sql.fiskaltrust.fr              | 52.166.149.170 |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a104-portal.fiskaltrust.fr                         | 52.174.149.36  |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a104-signaturcloud-azure.fiskaltrust.fr            | 52.174.149.36  |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a104-signaturcloud-sql.fiskaltrust.fr              | 52.174.149.36  |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a105-portal.fiskaltrust.fr                         | 23.101.74.60   |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a105-signaturcloud-azure.fiskaltrust.fr            | 23.101.74.60   |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a105-signaturcloud-sql.fiskaltrust.fr              | 23.101.74.60   |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a106-portal.fiskaltrust.fr                         | 52.233.130.60  |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a106-signaturcloud-azure.fiskaltrust.fr            | 52.233.130.60  |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a106-signaturcloud-sql.fiskaltrust.fr              | 52.233.130.60  |                  |                               |                               |        | X             |
| francecentral | fr         | ft-a108-portal.fiskaltrust.fr                         | 40.89.143.55   |                  |                               |                               | X      |               |
| francecentral | fr         | ft-a108-signaturcloud-azure.fiskaltrust.fr            | 40.89.143.55   |                  |                               |                               |        | X             |
| francecentral | fr         | ft-a108-signaturcloud-sql.fiskaltrust.fr              | 40.89.143.55   |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a240-portal-sandbox.fiskaltrust.fr                 | 13.93.11.101   |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a240-signaturcloud-azure-sandbox.fiskaltrust.fr    | 13.93.11.101   |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a240-signaturcloud-sql-sandbox.fiskaltrust.fr      | 13.93.11.101   |                  |                               |                               |        | X             |
| francecentral | fr         | ft-a241-portal-sandbox.fiskaltrust.fr                 | 40.89.140.232  |                  |                               |                               | X      |               |
| francecentral | fr         | ft-a241-signaturcloud-azure-sandbox.fiskaltrust.fr    | 40.89.140.232  |                  |                               |                               |        | X             |
| francecentral | fr         | ft-a241-signaturcloud-sql-sandbox.fiskaltrust.fr      | 40.89.140.232  |                  |                               |                               |        | x             |
| westeurope    | fr         | ft-a248-portal-sandbox.fiskaltrust.fr                 | 40.68.86.85    |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a248-signaturcloud-azure-sandbox.fiskaltrust.fr    | 40.68.86.85    |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a248-signaturcloud-sql-sandbox.fiskaltrust.fr      | 40.68.86.85    |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a252-portal-sandbox.fiskaltrust.fr                 | 13.81.216.246  |                  |                               |                               | X      |               |
| westeurope    | fr         | ft-a252-signaturcloud-azure-sandbox.fiskaltrust.fr    | 13.81.216.246  |                  |                               |                               |        | X             |
| westeurope    | fr         | ft-a252-signaturcloud-sql-sandbox.fiskaltrust.fr      | 13.81.216.246  |                  |                               |                               |        | X             |
| Westeurope    | cloud      | ft-a103-fiskaltrust-cloud.cloud                       | 52.232.31.245  |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a103-fiskaltrust-cloud.at                          | 52.232.31.245  |                  |                               |                               |        |               |
| Westeurope    | cloud      | ft-a104-fiskaltrust-cloud.cloud                       | 52.232.31.252  |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a104-fiskaltrust-cloud.at                          | 52.232.31.252  |                  |                               |                               |        |               |
| Westeurope    | cloud      | ft-a104-fiskaltrust-at.cloud                          | 52.232.31.248  |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a104-fiskaltrust-at.at                             | 52.232.31.248  |                  |                               |                               |        |               |
| Westeurope    | cloud      | ft-a105-fiskaltrust-cloud.cloud                       | 52.166.150.3   |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a105-fiskaltrust-cloud.at                          | 52.166.150.3   |                  |                               |                               |        |               |
| Westeurope    | cloud      | ft-a105-fiskaltrust-at.cloud                          | 52.166.149.161 |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a105-fiskaltrust-at.at                             | 52.166.149.161 |                  |                               |                               |        |               |
| Westeurope    | cloud      | ft-a106-fiskaltrust-cloud.cloud                       | 13.80.159.55   |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a106-fiskaltrust-cloud.at                          | 13.80.159.55   |                  |                               |                               |        |               |
| Westeurope    | cloud      | ft-a106-fiskaltrust-at.cloud                          | 52.232.31.234  |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a106-fiskaltrust-at.at                             | 52.232.31.234  |                  |                               |                               |        |               |
| Paris         | fr         | ft-a108-fiskaltrust-fr.fr                             | 40.89.143.55   |                  |                               |                               |        |               |
| Paris         | fr         | ft-a109-fiskaltrust-fr.fr                             | 40.66.60.130   |                  |                               |                               |        |               |
| Frankfurt     | de         | ft-a111-fiskaltrust-de.de                             | 51.116.232.218 |                  |                               |                               |        |               |
| Frankfurt     | de         | ft-a112-fiskaltrust-de.de                             | 51.116.168.9   |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a114-fiskaltrust-at.at                             | 13.95.22.62    |                  |                               |                               |        |               |
| Westeurope    | at         | ft-a115-fiskaltrust-at.at                             | 52.166.206.12  |                  |                               |                               |        |               |
| Graz          | at         | ft-at11-fiskaltrust-at.at                             | 149.154.100.21 |                  |                               |                               |        |               |




### Anforderungen bei Benutzung der fiskaly TSE

Port 443 https ausgehend für

- kassensichv.io 


### bei Verwendung der Deutschen Fiskal TSE / der Swissbit Cloud TSE

Port 443 https ausgehend für

- fiskal.cloud 

Aus den FAQ der Deutschen Fiskal:
Der Fiskal Cloud-Konnektor benötigt Zugriff über https auf den Hostnamen fiskal.cloud auf Port 443.
Der Dienst ist DNS-basiert und die IP-Adresse kann nicht garantiert werden und kann sich ohne Vorankündigung ändern.
Ein Cloud-basierter TSS Fiskal Cloud Connector benötigt eine kontinuierliche Konnektivität für alle Signier-, Export- und andere Operationen.
Bei einem Token-basierten Fiskal Cloud Connector funktionieren die Signierungsvorgänge auch ohne Internet-Konnektivität. Konfigurationsänderungen und Exportfunktionen erfordern jedoch eine regelmäßige Internetverbindung.
