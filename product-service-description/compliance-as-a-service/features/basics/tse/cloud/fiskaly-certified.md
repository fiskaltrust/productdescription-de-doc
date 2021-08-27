---
slug: /product-description/germany/products-and-services/caas/features/basics/tse/fiskalycertified
title: fiskaly-TSE (v2)
---

# fiskaly v2-Interoperabilität

## SCU

Das _fiskaltrust.Middleware.SCU.DE.FiskalyCertified_-Package ermöglicht die Verbindung der Middleware mit einer zertifizierten fiskaly v2 Cloud-TSE.

**Verfügbar ab Version**: 1.3.22-rc2

Bitte beachten Sie, dass separat erworbene TSEs (d.h. TSEs die direkt von fiskaly oder von Drittanbietern bezogen werden) personalisiert werden müssen. Bei diesem Vorgang wird die TSE vom Status `CREATED` in den `UNINITIALIZED`-Status versetzt und ein Admin-PIN vergeben. Die fiskaltrust.Middleware führt diesen Personalisierungsvorgang nicht durch, da dazu der Admin-PUK am Endgerät gespeichert werden müsste. Genauere Informationen entnehmen Sie bitte der [fiskaly-Dokumentation](https://developer.fiskaly.com/en/docs/guides/api-v2#initial-authentication-and-setup).

Bei TSEs, die im fiskaltrust.Portal erworben werden, wird dieser Vorgang automatisch von unseren Backend-Systemen durchgeführt, es sind daher keine weiteren Schritte notwendig.

## Parameter

| Name | Beschreibung | Optional |
| ---- | ------------ |--------- |
| _TssId_ | Die ID der verwendeten fiskaly-TSE, wie im fiskaly-Dashboard angegeben. Wird bei der Produktion über das fiskaltrust-Portal automatisch befüllt. | nein |
| _ApiKey_ | Der API-Key, der zur Authentifizierung an den fiskaly-Services verwendet wird, wie im fiskaly-Dashboard angegeben. Wird bei der Produktion über das fiskaltrust-Portal automatisch befüllt. | nein |
| _ApiSecret_ | Das API-Secret, der zur Authentifizierung an den fiskaly-Services verwendet wird, wie im fiskaly-Dashboard angegeben. Wird bei der Produktion über das fiskaltrust-Portal automatisch befüllt. | nein |
| _AdminPin_ | Der Admin-PIN der TSE (nicht zu verwechseln mit dem PUK). | nein |

### Preis & Vertrieb

[fiskaltrust.Portal](https://portal.fiskaltrust.de)

