# **Table of Contents**

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Files](#Files)
    - [Components](#Components)
    - [Routes](#Routes)
    - [Views](#Views)
    - [Cucumber Features](#Cucumber-Features)
- [Features](#Features)
  1. [Recent Transaction Page](#Recent-Transaction-Page)
  2. [Fund Transfer Dispute Process](#Fund-Transfer-Dispute)
  3. [Fuzzy Search, PayNow Warnings and Autofill](#fuzzy-search-paynow-warnings-and-autofill)
  4. [AI Written Comments](#AI-written-Comments)
- [Cucumber Testing](#Cucumber-Testing)
- [Contributions](#Contributions)

# **Getting Started**

## Required Softwares

Install Ruby

##### `rvm install ruby`

Install [Node.js](https://nodejs.org/en)

# **Installation**

1. Clone the repository:
```shell
git clone https://github.com/Service-Design-Studio/1d-final-project-2023-sds-2023-team-08.git
```

2. Directory to the project file:
```shell
cd 1d-final-project-2023-sds-2023-team-08\frontend-webapp\dbs
```

3. In the project directory: 

To install the required dependencies to run the application:

```shell
npm install
```
To start the application on a developmental server:

```shell
npm start
```
You should see the following lines: 

```
You can now view kopilo in the browser.

Local:            http://localhost:3000        
On Your Network:  http://10.12.182.8:3000

Note that the development build is not optimized.
To create a production build, use yarn build.    

webpack compiled successfully

```

Open http://localhost:3000 to view it in your browser.

You have now lauched the app on your web browser! To simulate the experience of using this webapp on a mobile device, you can install [Android Studios](https://developer.android.com/studio) and run the app on an emulator instead. <br> Alternatively, you may enable the mobile view on your browser through inspect element.

# **Files**

The key folders are stored in the `src` folder and its directory is shown in the diagram below:
```
src
  |_____ Components
            |_____ Assets
            |_____ Fonts
            |_____ Styles
  |_____ Views
  |_____ Routes
```

## Components
The components folder serves as a directory for organizing and storing reusable UI components that can be used throughout your application. They are the building blocks of the app.

Assets - Stores the images and icons for the app <br>
Fonts - Stores the fonts used for the app <br>
Styles - Stores the CSS files that stylize the HTML pages of the app. <br>

## Views
The Views folder stores the templates and files that are responsible for generating the HTML content that is sent to the client's browser. In other words, it contains the code for the different webpages the app has.

## Routes
The Routes folder stores the Route.js file, which is responsible for routing between the different webpages in the app, allowing for navigation between pages upon clicks or other actions. 

## Cucumber Features

`.feature folder`

The features folder stores the .feature files that is required for Cucumber testing. Each feature file describe the behavior of the software through scenarios. Each scenario outlines a specific use case or test case. The purpose of these files are to provide a clear and common understanding of how the software should behave from a functional standpoint.

`Step_definition folder`

The Step definition folder contains the actual automation code that implements the behavior described in the .feature files. Each step in a .feature scenario corresponds to a step definition in a JavaScript. 

More information about Cucumber Testing can be found under the [Cucumber Testing](##Cucumber-Testing) page. 

# **Features**

This section encompasses a guided demonstration of the four primary features that have been integrated into the DBS App.<br>
For the purpose of demonstration, use the following credentials to log into the app: 

**Sender:** <br>
    `username: chloe` <br>
    `password: password123`

**Recipient:** <br> 
    `username: john`<br>
    `password: password123`

## Recent Transaction Page
The Recent Transaction page allows users to access their most recent transactions of up to 7 days based on their account activity. <br>
Users will also be able to view the recent transactions of each individual account they have. 

Guide: 

1. Log In with the sender credentials.
2. On the Homepage, locate the Recent Transcation Tab below Smart Shortcuts.
3. Click on it.
4. You will be brought to the Recent Transaction Page.
5. The users' accounts will be sorted based on recent activity of the accounts, as seen in the top container. 

## Fund Transfer Dispute
This is the main feature of our version of the digiBank app - automate the process of resolving FTDs.<br>
Upon transferring money to the wrong recipient, users will be able to raise a FTD directly to the recipient instead of engaging DBS as the middleman to resolve the dispute. 

Guide:

Making a PayNow Transfer

1. While logged in, click on the PayNow icon to make a transfer.
2. For simulation purposes, enter `88888881` into the Recipient's Mobile No.
3. Click away from the box to allow for the recipient's nickname to appear.
4. Click on Submit.
5. Enter any amount of your choice. Click on Next.
6. Slide to pay (This is our Feature 3).

Raising an FTD 

7. Upon a successful transfer, click on the red text saying "Made a Wrong Transfer? __Click here__". <br>
8. You will be redirected to the Raise a FTD page. <br>
9. Indicate your reason for raising this FTD. <br>
10. Enter a comment to further justify your reason for raising an FTD. <br>
11. Click on the Raise FTD button. <br>
12. You will be redirected to a review page to verify your information.  <br>
13. Once confirmed, click on Submit.  <br>
14. The recipient has 3 working days to resolve the FTD before it is automatically raised to DBS for investigation. <br>

Checking on status

15. Back at the homepage, navigate to the Recent Transaction page. <br>
16. Click on the tab 'Fund Transfer Dispute Transactions'. <br>
17. You will see the status of the FTD. There are 6 statuses: <br>
    
  - Awaiting Action - Awaiting for recipient's action.
  - Action Required - By the recipient. Will be seen on their account.
  - Resolved - FTD has been resolved by recipient.
  - Refuted - FTD has been refuted by recipient. 
  - Pending DBS - Pending DBS action.
  - Withdrawn - FTD has been withdrawn by sender

Recepient actions

18. Open another web browser. <br>
19. Log into the app with the Recipient's credentials. <br>
20. On the Homepage, you will see an alert `You have 1 Fund Transfer Dispute`. <br>
21. Click on Resolve now. <br>
22. You will be redirected to the Fund Dispute page with all the statuses.  <br>
23. Click on Action Required button.<br>
24. Decide on whether you want to refund or refute. <br>
    a. Refund: You will not be able to change the amount transacted as the refund amount. It will either be a full or partial refund depending on the fund transfer dispute reason: wrong account or wrong amount respectively. <br>
    b. Refute: Provide a reason for the sender as to why you decide to refute the dispute. <br>
25. Verify the dispute details and confirm your choice. <br>


## Fuzzy Search, PayNow Warnings and Autofill

These features takes a preventive approach towards FTDs. <br>
The app consists of the following implementations and its rationale: <br>
- Warnings - to warn users when they are making a transfer to someone for the first time. <br>
- Autofill function - to allow users to copy number and auto-fill into the textbox to prevent mistyping of account numbers. <br>
- Fuzzy Search for Bank Transfers - to allow users to choose banks based on acronyms and reduce error when searching for a desired bank. <br>

Guide: 

PayNow Warnings

1. Log in with the Sender's credentials.
2. Make a PayNow transfer (refer to the guide under [Recent Transactions](#recent-transaction-page)).
3. For this case, use the phone number `88888881`. You should see `Johnny` as the nickname. 
4. An alert text in red will also be shown below the Recipient's Nickname, warning you that this is a new payee.
5. The button 'Submit' as well as 'Next' in the next page are now red to warn you of your actions. 
6. Then final layer of warning is a Swipe to Pay function. It requires you to consciously make the decision to swipe and make the transfer.
7. Return to homepage.

Autofill & Fuzzy Search 

8. On the homepage, click on Transfer Money icon.
9. Enter the Recipient's name. Let's use `Tristan` for demonstration purposes.
10. Click on select bank. You should see a list of banks and a search bar. 
11. In the search bar, enter `OCBC` and you will see the list of banks that go by this acronym.
12. Select `OVERSEA-CHINESE BANKING CORPORATION LTD`.
13. Copy the following bank account number: `860-345-34`
14. When you click on Enter account number textbox, there will be a dropdown that automatically shows the number that is copied on your clipboard. (Note: You might need to click into the textbox a few times before the autofill appears. This is due to the browser checking your permissions to read the clipboard which takes some time)
15. Click on the autofill box to enter the copied number.
16. The rest of the procedure are the same steps as making a PayNow transfer.

## AI Written Comments
As part of our module to implement a feature driven by AI, we have chosen to use AI in the comments that senders will write to inform recipients about a FTD. <br>
By utilizing Google's Vertex AI and its Large Language Model, the AI will be able to take in a short comment and convert it into a polite one for the recipient to read. <br>
This is to aid user's who have a language barrier or those that made a wrong transfer and are momentarily too emotional to craft a polite message. <br>
Furthermore, a profanity checker has been integrated to the comments. Once users has wrote finished the comment and tap away from the screen, a background profanity checker will run to check if there is any profanities. An alert will show in the presence of any profanity and the Raise A Dispute button will turn gray and users are not allowed to submit. This is done to protect users from receiving harmful languages. 

Guide:

1. Raise a FTD (refer to the guide under [Fund Transfer Dispute](#fund-transfer-dispute)) <br> 
2. At Step 10, click on the `AI Assists` glitter icon after keying in a comment that elaborates on the reason of the wrong transfer.<br> 
3. The AI will take in your input comment and output a polite and structured reply with details such as the wrong amount.<br>
4. Upon clicking next, you will see the generated comment as part of the FTD details that the recipient will see. <br>

# **Cucumber Testing**

Cucumber testing is a type of behavior-driven testing framework that focuses on enabling collaboration between developers, testers, and domain experts in order to define and automate the testing of software's behavior. For our project, we use Cucumber to test the features based on the scenarios we have written in the .features files. <br>

To test the features, follow the steps shown: 

1. Enter your project directory
```shell
cd 1d-final-project-2023-sds-2023-team-08\frontend-webapp\dbs
```

2. Install Cucumber
```shell
npm install @cucumber/cucumber
```

3. Run the test
```shell
npx cucumber-js
```

Allow the webdriver to run and test the different feature files. 
*Note: For the auto-fill feature, the webdriver will not have permission to access your clipboard. You will have to manaully enter a bank account number before continuing with the automated Cucumber test.* 

# **Contributions**

Cheng Wei Xuan <br> 
Vinny Koh <br>
Tristan Yeo <br>
Valencia Arlin Halim <br>
Noven Zen <br>
Brighton Yip <br>
