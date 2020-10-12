# Getting Started Guide for POS Creators

## Overview

This guide describes on a high level the stages, which a POS Creator should achieve, to ensure a successful completion of the journey, from the integration of the fiskaltrust.Middleware into the POS System, to a phase of pilot installations.

The success of this journey can be achieved through the completion of the following stages:

![integration phases](media/pos-creator-integration-phases.png)

[1. Portal Registration](#1-portal-registration)
[2. Middleware Integration](#2-middleware-integration)
[3. POS Dealer Onboarding](#3-pos-dealer-onboarding)
[4. Complex Business Case Analysis](#4-complex-business-case-analysis)
[5. Pilot Installation](#5-pilot-installation)
[6. Handover for Rollout](#6-handover-for-rollout)

## Useful resources

Before proceeding with this guide, you may consider getting familiar with the content of the following useful resources:

- [POS Creator Lead Presentation](presentation/media/lead-presentation-creator-en.pptx)
- [POS Creator ft.Middleware Webinar Recording on YouTube](https://www.youtube.com/watch?v=mq1hHL8ezOg)

**Note:** you can find more useful resources in the [Further sources of information](#further-sources-of-information) section at the end of this document.

## 1. Portal Registration

### 1.1 Overview

The ft.Portal is a web application which offers features required to easily manage the functions necessary for the configuration and operation of your POS Systems. The ft.Portal is accessible via common Internet browsers, however, if your browser does not display some content correctly, or features are not available or not behaving as expected, try using the current version of Google Chrome.

There are 2 instances of fiskaltrust.Portal:

- Live - [https://portal.fiskaltrust.de](https://portal.fiskaltrust.de/)
- Sandbox - [https://portal-sandbox.fiskaltrust.de](https://portal-sandbox.fiskaltrust.de/)

**Important Notes:**

- In order to receive the free support from fiskaltrust you must register in our live portal.
- No tests should be performed on the Live portal!
- The sandbox registration is needed for conducting all test activities and does not qualify for support!

### 1.2 Registration steps

The registration steps on both, the sandbox and the live portal, are identical. Simply complete the registration form, confirm your email, and sign the cooperation agreement.

### 1.3 Company data and cooperation agreement

As soon as you have registered in the portal, a form for selecting your role will be displayed. Select the option "POSCreator" and sign our cooperation agreement by entering your name in the input field. If you are also a POS dealer, please select that role as well.

By registering in the live portal and digitally signing our cooperation agreement, you are now entitled to access our free support for setup questions and onboarding. You can reach our POS Creator Support Team at <a href="mailto:support-poscreator@fiskaltrust.de">support-poscreator@fiskaltrust.de</a>.

## 2. Middleware Integration

There are several steps which must be followed to successfully integrate your solution with ft.Middleware. Those steps include the CashBox Configuration, using the Middleware Launcher, and testing of the communication. Please check our [ft.Middleware document](middleware-integration-en.md) for detailed information about this process.

## 3. POS Dealer Onboarding

Once you were able to test the integration and successfully establish a communication with the fiskaltrust.Middleware by sending simple requests and receiving correct expected responses, you are now ready to start engaging your POS Dealers into discussion about the details of the specific implementation of your POS System, and agree on the suitable rollout scenarios.

This stage is a critical part of your journey as it directly translates into the number of end customers which are going to acquire and use your PosSystem. The sooner you start collaborating with the PosDealers, the sooner they will engage with the PosOperators, and, indirectly, speed up their compliance with the fiscal laws (compliance as a service).

### 3.1 PosDealer Invitation Process

To assist you with the invitation of the POS Dealers, we have automated the invitation process in our ft.Portal. Simply navigate to ``PosSystems`` and click on ``Add``. Next, provide the ``Designation``, ``Brand``, and ``Type`` for your POS System, select its ``Cash Register Type``, and save the data. Once the POS System has been created, find it on the list of available POS Systems and click the ``PosDealer`` button, which will open the list of connected PosDealers. Next, click ``Add``, provide the email of the POS Dealer whom you'd wish to invite, and click ``Search``. If the POS Dealer is already registered in the ft.Portal you will have the option to assign that company to your POS System. If no data of that POS Dealer has been found in the system,you will be presented with the ``Company Registration Form``. Completing the form will result in an invitation email sent to the POS Dealer. Such email will contain a link allowing to complete the registration process within the ft.Portal.

### 3.2 Rollout Scenarios

As the approach to the rollout highly depends on the implementation, the components, and the capabilities of your POS System, you should select the appropriate rollout scenario and discuss it with your POS Dealers, to ensure their sufficient levels of knowledge and understanding required for the successful execution of the rollout process.

The rollout has 2 separate areas, sales and technical, which both have been covered by the [presentations available for download](https://docs.fiskaltrust.cloud/doc/productdescription-de-doc/for-posdealers/prepare-rollout-presentations-de.html) from our documentation portal.

The Technical stage requires a close collaboration of the technical experts from both sides: yours and the POS Dealer's. You will discuss the details of the implementation, agree on the approach to templating, and select the best strategy for the rollout based on the appropriate rollout scenario. We have documented the [rollout scenarios](https://docs.fiskaltrust.cloud/doc/productdescription-de-doc/for-posdealers/02-pre-sales/rollout-scenarios.html) in our documentation portal.

### 3.3 Rollout Automation

A ``Template``, which can be created in the ft.Portal, contains the details of a pre-configured CashBox with all its components. Such templates can be used to automate, and therefore to significantly speed-up the rollout process.
You can find the [details of the automation and templating](https://docs.fiskaltrust.cloud/doc/productdescription-de-doc/for-posdealers/02-pre-sales/automatisierter-rollout.html) in our documentation portal.

## 4. Complex Business Case Analysis

Each industry may have several specific and complex business cases which require a special handling in terms of requests sent to the ft.Middleware. If you require assistance establishing the proper handling of such complex business cases in the implementation of your POS System, please write us an email to our POS Creator support mailbox at <a href="mailto:support-poscreator@fiskaltrust.de">support-poscreator@fiskaltrust.de</a>, and one of our experts will be happy to assist you.

## 5. Pilot Installation

Once the rollout strategy has been selected and the approach to templating has been agreed, it's time for you and the POS Dealer to test it with selected POS Operator(s). Such pilot installation(s) should provide you with sufficient feedback, to allow early identification of problems and their possible resolutions, before approaching the mass rollout to multiple POS Operators.

## 6. Handover for Rollout

Once all previous stages have been completed, all preparations are done, the communication with ft.Middleware works, the rollout strategy has been agreed, and the pilot installation(s) have been successfully executed, you are now ready to handover the rollout to your POS Dealers.
The goal of this stage is about reaching an agreement with the POS Dealers that they are ready to start the rollout to the POS Operators.

## Further sources of information

- German fiskaltrust website: [https://fiskaltrust.de](https://fiskaltrust.de/)
- fiskaltrust documentation portal: [https://docs.fiskaltrust.cloud](https://docs.fiskaltrust.cloud/)
- FAQ: [fiskaltrust docs - faq](https://docs.fiskaltrust.cloud/doc/faq/qna/market-de.html) and [Github faq repo](https://github.com/fiskaltrust/faq) for creating issues (questions).
- fiskaltrust gihub repos: [https://github.com/fiskaltrust](https://github.com/fiskaltrust)
- fiskaltrust videos: [Youtube Channel](https://www.youtube.com/channel/UCmMlqO4L3AzkEhh6WYA8BJg)
- [POS Creator Lead Presentation](presentation/media/lead-presentation-creator-en.pptx)
- POS Creator ft.Middleware Webinar Recording on [fiskaltrust YouTube Channel](https://www.youtube.com/watch?v=mq1hHL8ezOg)