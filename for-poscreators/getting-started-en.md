# First steps for POS creators

## Overview

As a POS creator, your first goal is to be able to send requests to our free ft.Middelware from your POS system and to be able to test your integration. This document summarizes the necessary steps to achieve this goal.  

The following steps have to be passed through:

1. [Registration in our live portal](#registration-in-our-live-portal)
2. [Registration in our sandbox portal](#registration-in-our-sandbox-portal)
3. [Configuration of a CashBox (configuration container) in the portal](#configuration-of-a-cashbox)
4. [Download and start the launcher](#download-and-start-the-launcher)
5. [Initialization with an initial operation receipt](#initialization-with-an-initial-operation-receipt)
6. [Sending further requests](#sending-further-requests)
7. [Further sources of information](#further-sources-of-information)

In the following we will go into the individual steps in more detail.

## Registration in our live portal

### Company data and cooperation agreement

To receive free support from fiskaltrust you must first register in our live portal. You can find the portal under  [https://portal.fiskaltrust.de](https://portal.fiskaltrust.de/). 

As soon as you have registered in the portal, a form for selecting your role will be displayed. Select the option "POSCreator" and sign our cooperation agreement by entering your name in the input field. If you are also a POS dealer, please select this option as well. 

By registering in the live portal and digitally signing our cooperation agreement, you are now entitled to access free support for setup questions and onboarding. You can reach our support team at [info@fiskaltrust.de](mailto:info@fiskaltrust.de).

### Registering your POS system

Next, register your POS system(s) under the menu item "POSSystems". 

## Registration in our sandbox portal

After registering on the live portal, repeat the steps described above to register on the sandbox portal [https://portal-sandbox.fiskaltrust.de](https://portal-sandbox.fiskaltrust.de/). This will give you access to our test environment, where you can carry out the further steps described in this document for testing purposes.


## Configuration of a CashBox

A so-called CashBox is a configuration container that contains the configuration of the individual components of the fiskaltrust.Middleware. The configurations can be linked together via the CashBox. The CashBox can contain the configuration of the Queue, SCU and various helpers and connects them with each other. In the following we will configure the SCU and the Queue needed for testing, include them in the CashBox and connect them.

![cashbox](media/middleware.png)

### Configuration of the SCU

The SCU (Security Creation Unit) is a component of the ft.middelware, which is responsible for the communication with the TSE. Depending on which TSE you want to use, the SCU needs a corresponding configuration.

To create the SCU configuration select the menu item ``Configuration -> Signature creation unit`` in the portal and press the button "Create". Enter a short description (name) and select the package for your TSE at "Package Name". Then select the latest version under "Package Version" and press the button "Save".

Further configuration information is now required. Depending on the previously selected TSE package, these can vary. In general, you specify here how the SCU can reach the TSE and the end point via which the Queue will communicate with the SCU. To specify the communication endpoint for reaching the SCU, select for example "gRPC" by pressing the corresponding button in the lower area. The input field is filled in automatically and can be edited further if necessary. For our goal in this document the automatically filled gRPC endpoint is sufficient. 

Next, you can specify in the upper section how the SCU can reach the selected TSE:

#### Cryptovision
Enter the device path, the drive letter followed by the colon to which you have connected the TSE. For example ``E:``

#### Swissbit
Enter the device path, the drive letter followed by the colon to which you have connected the TSE. For example ``E:``

#### Diebold Nixdorf
Enter the com port to which you have connected the TSE. For example ``COM6``

#### Epson
Under revision.

#### Fiskaly TSE
Enter the TSS ID, API key and the "Secret" key. Alternatively, you can purchase a free trial Fiskaly TSE in our sandbox portal shop. This will automatically create a SCU with the corresponding data for you. Note: Select the outlet in the shop before you add the test Fiskaly TSE to your shopping cart (outlet drop-down in the upper area).

Save the configuration of your SCU after entering the required data. In the next step we will configure the Queue.

### Configuration of the Queue

The Queue is a component of the fiskaltrust.Middleware, that collects the received data from the POS System and is responsible for creating the request chain. The Queue is the component of the fiskaltrust.Middleware with which your POS system communicates. You send your data to it and receive signatures and other data back.

Under the menu item ``Configuration -> Queue`` you will find the button for creating a new Queue. Press the button to get to the input form. Enter a short description (name) and the CashboxIdentification. The CashboxIdentification will later be used by the SCU as clientID for the TSE. It is therefore important to enter a "printable string" with a maximum of 20 characters. After saving, a form appears in which you can specify the communication endpoint. We will use this later to send requests to the queue. For our example we can choose http(REST) by pressing the corresponding button. After saving, we are done with the configuration of the Queue and can now create the CashBox (our configuration container) in the next step.

### Create CashBox, connect Queue and SCU

Under the menu item ``Configuration -> CashBox`` you will find the button to create a new CashBox. Press this button to get to the input form. After entering a short description (name) press the "Save" button. The CashBox has been created and now appears in the list. 

Next, we want to put the configuration of the Queue and SCU into the created CashBox and connect them to each other. To do this, press the button with list symbol assigned to the CashBox. Here you can now select the previously created Queue and SCU using the corresponding checkboxes and then save your selection. In the following we will connect the Queue with the SCU. To do this, expand the list entry of the new Cashbox in the overview of the CashBoxes. The detail area shows the contained configurations. Two buttons are assigned to the Queue configuration on the right. Press the first button (arrow symbol) to assign the new SCU to the Queue. A popup appears in which you can select the SCU. After assigning and saving we are done with the configuration of our CashBox.


## Download and start the launcher

#### Download
The download of the launcher is initiated by clicking the button "Download .NET Launcher" (globe symbol). Before downloading, however, it is important that you "rebuild" the CashBox. To do this, press the "Rebuild" button (first grey button with reload symbol) in the CashBox line. After rebuild you can now download the launcher.

#### Set debug mode
You will receive a zip file containing the laucher, corresponding configuration and other files. Now unpack the zip file. In the newly unzipped folder there is a ``test.cmd`` file which we will edit. Open it with an editor of your choice and add the argument `` -verbosity=Debug`` at the end of the second line (which starts fiskaltrust.exe). This will give us more detailed log output later. Now save and close the ``test.cmd'' file.

#### Start the launcher
You can start the launcher by double clicking on the ``test.cmd`` file. A terminal will appear where you can follow the start of the local middleware via log messages. This window remains open and visualizes log messages for further progress. Do not click into the inner area of the window, because this will pause the service (Windows feature). If this happens to you by mistake, click again and press "Enter" to cancel the interruption. 

## Initialization with an initial operation receipt

After starting the launcher, the local middleware is available. Next, we will initialize the launcher using an initial operation receipt. To do this, start our Postman collection from our fiskaltrust [middleware-demo-postman](https://github.com/fiskaltrust/middleware-demo-postman) github repo.

### Configuration of the Postman collection

The Postman collection must be configured to send requests to the previously started local middleware. To do this, go to "Edit" and select the "Variables" tab. Here we find the two variables that are important for us: ``base_url`` and ``cashbox_id``. We need to enter values here.

#### base_url

At ``base_url`` we specify the URL of the previously created http(REST) endpoint of the Queue. The required value can be found in the portal under the menu item ``Configuration -> Queue`` . Expand the detail area of the list entry of our Queue and copy the URL from there. For example ``rest://localhost:1500/f84bf516-a17b-4432-afa6-8c1050e2854d`` . Now replace ``rest://`` with ``http://`` in the URL to get the value for the Postman ``base_url`` variable. Example ``http://localhost:1500/f84bf516-a17b-4432-afa6-8c1050e2854d``. Now enter this value in Postmman for the variable ``base_url`` as ``CURRENT_VALUE``.

#### cashbox_id

At ``cashbox_id`` we must specify the ID of our configuration container (not to be confused with the CashboxIdentification). We can find the value for the ``cashbox_id`` in the portal under the menu item ``Configuration -> CashBox``. To do so, expand the detail area of the list entry of our CashBox and copy the value of **CashBoxId:**. For example ``90682627-f707-45ab-84df-f855118bba97``. Now enter this as the value of the variable ``cashbox_id`` under ``CURRENT_VALUE`` in the Postman collection.

#### Send a request with the initial operation receipt

In the Postman collection you will find an entry with the name ``Initial Operation Receipt``.  Click on it and select the ``Body`` tab to view its contents. You can now send the request by pressing the ``Send`` button. The request will be sent to the local middleware and you will get the response of the middleware back, which is displayed in Postman. In the terminal you can view the corresponding log messages. The ft.SecurityMechanism of the middleware and the TSE are now initialized and wait for further requests.

## Sending further requests

### Interface doc

The interface to the middleware is described in our [interface-doc](https://github.com/fiskaltrust/interface-doc/) Github repository. The fiskaltrust interface-doc repo contains important information and descriptions about the communication with the middleware. The [doc](https://github.com/fiskaltrust/interface-doc/tree/master/doc) folder contains a general part (directory ``general``) and country specific parts that specify the general part in more detail depending on the country. It is important that you read this interface description in order to be able to make further steps.

### Postman collection

In the Postman collection mentioned above there are many more examples of requests that you can analyze and execute. After you have familiarized yourself with the interface description [interface-doc](https://github.com/fiskaltrust/interface-doc/) we recommend our [webinar video](https://www.youtube.com/watch?v=mq1hHL8ezOg&t=15s) on the middleware in which we explain the examples and have collected and demonstrated further important information for you.

## Further sources of information

- German fiskaltrust website: [https://fiskaltrust.de](https://fiskaltrust.de/)
- fiskaltrust documentation portal: [https://docs.fiskaltrust.cloud](https://docs.fiskaltrust.cloud/)
- FAQ: [fiskaltrust docs - faq](https://docs.fiskaltrust.cloud/doc/faq/qna/market-de.html) and [Github faq repo](https://github.com/fiskaltrust/faq) for creating issues (questions).
- fiskaltrust gihub repos: [https://github.com/fiskaltrust](https://github.com/fiskaltrust)
- fiskaltrust videos: [Youtube Channel](https://www.youtube.com/channel/UCmMlqO4L3AzkEhh6WYA8BJg)



