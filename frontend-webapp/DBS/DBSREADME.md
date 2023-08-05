![projectlogo](Group37.png)

# **Kopilo Fund Transfer Dispute Resolution**

### **Useful Links**
  1. [digiBank] (https://dbsservice-zwrzqgoagq-as.a.run.app/) 
  2. [Figma Board](https://www.figma.com/file/WkGoaInNq3u3Roneu88PwL/Service-Design-Studio?type=design&mode=design&t=FPdOO8D8DAoc3PY8-0)
  3. [Design Workbook](https://docs.google.com/document/d/18kb1gEeE0T5lsJ9isN1ms7r1HdiIQdBYnW9oUsV7_Ck/edit)
  4. [Google Site]( insert link !!)

### **About the project**
This project aims to enhance the existing DBS digiBank mobile application by introducing a streamlined and user-friendly process for resolving fund transfer disputes (FTDs). <br>
Our goal is to provide an efficient and reliable online service that simplifies the dispute resolution procedure, benefiting both users and DBS Bank.

### **Technology Stack**
- Frontend: The application's frontend is built using the [React.js](https://react.dev/) framework, ensuring a responsive and intuitive user interface.
- Backend: The backend is developed using [Ruby on Rails](https://rubyonrails.org/), providing a robust and scalable foundation for data processing and business logic.
- Deployment: The application is deployed on [Google Cloud](https://cloud.google.com/), ensuring reliable and secure access.

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

### Required Softwares

Install Ruby

##### `rvm install ruby`

Install React.js 

##### `????`


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

You have now lauched the app on your web browser! To simulate the experience of using this webapp on a mobile device, you can install [Android Studios](https://developer.android.com/studio) and run the app on an emulator instead.

# **Files**

The key folders are stored in the `src` folder and its directory is shown in the diagram below:
    `src`
      |_____ `Components`
                |_____ `Assets`
                |_____ `Fonts`
                |_____ `Styles`
      |_____ `Views`
      |_____ `Routes`

### Components
The components folder serves as a directory for organizing and storing reusable UI components that can be used throughout your application. They are the building blocks of the app.

Assets - Stores the images and icons for the app
Fonts - Stores the fonts used for the app
Styles - Stores the CSS files that stylize the HTML pages of the app.

### Views
The Views folder stores the templates and files that are responsible for generating the HTML content that is sent to the client's browser. In other words, it contains the code for the differnt webpages the app has.

### Routes
The Routes folder stores the Route.js file, which is responsible for routing between the differnt webpages in the app, allowing for navigation between pages upon clicks or other actions. 

### Cucumber Features

.feature folder

The features folder stores the .feature files that is required for Cucumber testing. Each feature file cdescribe the behavior of the software through scenarios. Each scenario outlines a specific use case or test case. The purpose of these files are to provide a clear and common understanding of how the software should behave from a functional standpoint.

Step_defintion folder

The Step definition folder contains the actual automation code that implements the behavior described in the .feature files. Each step in a .feature scenario corresponds to a step definition in a JavaScript. 

More information about Cucumber Testing can be found under the [Cucumber Testing](#Cucumber Testing) page. 

# **Features**

This section encompasses a guided demonstration of the four primary features that have been integrated into the DBS App.<br>
For the purpose of demonstration, use the following credentials to log into the app: 

**Sender**
    `username: wei xuan`
    `password: password123`

**Recipient** 
    `username: junxiang`
    `password: password123`

### Recent Transaction Page
The Recent Transaction page allows users access their most recent transactions up to 7 days based on their account activity. <br>
Users will be able to view the recent transactions of every account they have. 

Guide: 

1. Log In with the sender credentials.
2. On the Homepage, locate the Recent Transcation Tab below Smart Shortcuts.
3. Click on it.
4. You will be brought to the Recent Transaction Page.
5. The users' accounts will be sorted based on recent activity of the accounts, as seen in the top container. 

### Fund Transfer Dispute
This is the main feature of our version of the digiBank app - automate the process of resolving FTDs.<br>
Upon transferring money to the wrong recipient, users will be able to raise a FTD directly to the recipient instead of engaging DBS as the middleman to resolve the dispute. 

Guide:

Making a PayNow Transfer
1. While logged in, click on the PayNow icon to make a transfer.
2. For simulation purposes, enter `88888887` into the Recipient's Mobile No.
3. Click away from the box to allow for the recipient's nickname to appear.
4. Click on Submit.
5. Enter any amount of your choice. Click on Next.
6. Slide to pay (This is our Feature 3).

Raising an FTD
7. Upon a successful transfer, click on the red text saying "Made a Wrong Transfer? __Click here__".
8. You will be redirected to the Raise a FTD page.
9. Indicate your reason for raising this FTD. 
10. Enter a comment to further justify your reason for raising an FTD.
11. Click on the Raise FTD button.
12. You will be redirected to a review page to verify your information. 
13. Once confirmed, click on Submit. 
14. The recipient has 3 working days to resolve the FTD before it is automatically raised to DBS for investigation.

Checking on status
15. Back at the homepage, navigate to the Recent Transaction page.
16. Click on the tab 'Fund Transfer Dispute Transactions'.
17. You will see the status of the FTD. There are 5 statuses:
    
    - Awaiting Action - Awaiting for recipient's action.
    - Action Required - By the recipient. Will be seen on their account.
    - Resolved - FTD has been resolved by recipient.
    - Refuted - FTD has been refuted by recipient. 
    - Pending DBS - Pending DBS action. 

Recepient actions
18. Open another web browser.
19. Log into the app with the Recipient's credentials. 
20. On the Homepage, you will see an alert `You have 1 Fund Transfer Dispute`.
21. Click on Resolve now.
22. You will be redirected to the Fund Dispute page with all the statuses. 
23. Click on Action Required button.
24. Decide on whether you want to refund or refute.
    a. Refund: You will not be able to change the amount transacted as the refund amount. <br>
    It will be a full refund.
    b. Refute: Provide a reason for the sender as to why you decide to refute the dispute.
25. Verify the dispute details and confirm your choice.


### Fuzzy Search, PayNow Warnings and Autofill
These features takes a preventive approach towards FTDs. <br>
The app consists of the following implementations and its rationale: 
- Warnings - to warn users when they are making a transfer to someone for the first time.
- Autofill function - to allow users to copy number and auto-fill into the textbox to prevent mistyping of account numbers.
- Fuzzy Search for Bank Transfers - to allow users to choose banks based on acronyms and reduce error when searching for a desired bank.

Guide: 

PayNow Warnings
1. Log in with the Sender's credentials.
2. Make a PayNow transfer (refer to the guide under [Recent Transactions](#recent-transaction-page)).
3. For this case, use the phone number `88888886`. You should see `vin` as the nickname. 
4. An alert text in red will also be shown below the Recipient's Nickname, warning you that this is a new payee.
5. The button 'Submit' as well as 'Next' in the next page are now red to warn you of your actions. 
6. Then final layer of warning is a Swipe to Pay function. It involves the you to consciously make the decision to swipe and make the transfer.
7. Return to homepage.

Autofill & Fuzzy Search 
8. On the homepage, click on Transfer Money icon.
9. Enter the Recipient's name. Let's use `Tristan` for demonstration purposes.
10. Click on select bank. You should see a list of banks and a search bar. 
11. In the search bar, enter `OCBC` and you will see the list of banks that go by this acronym.
12. Select `OVERSEA-CHINESE BANKING CORPORATION LTD`.
13. Copy the following bank account number: `860-345-34`
14. When you click on Enter account number textbox, there will be a dropdown that automatically shows the number that is copied on your clipboard. 
15. Click on the autofill box to enter the copied number.
16. The rest of the procedure are the same steps as making a PayNow transfer.

### AI Written Comments
As part of our module to implement a feature driven by AI, we have chosen to use AI in the comments that senders will write to inform recipients about a FTD. <br>
By utilizing Google's Vertex AI and its Large Language Model, the AI will be able to take in a short comment and convert it into a polite one for the recipient to read. <br>
This is to aid user's who have a language barrier or those that made a wrong transfer and are momentarily too emotional to craft a polite message.

Guide:

1. Raise a FTD (refer to the guide under [Fund Transfer Dispuite](#fund-transfer-dispute))
2. At Step 10, click on the `AI Assists` button after keying in a comment that elaborates on the reason of the wrong transfer.
3. The AI will take in your input comment and output a polite and structured reply with details such as the wrong amount.
4. Upon clicking next, you will see the generated comment as part of the FTD details that the recipient will see. 

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

# ** Contributions

Cheng Wei Xuan 
Vinny Koh 
Tristan Yeo 
Valencia Arlin Halim 
Noven Zen 
Brighton Yip 
