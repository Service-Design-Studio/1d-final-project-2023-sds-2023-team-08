// COMPLETED

const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');
const readline = require('readline');



Before(async function () {
  // Set up the Selenium WebDriver
  this.driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  // Quit the Selenium WebDriver after each scenario
  await this.driver.quit();
});


async function pauseTest() {
  // Log a message to prompt the tester to manually continue the test
  console.log('Test execution paused. Type "s" and press "Enter" to continue...');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    const onData = (input) => {
      const trimmedInput = input.trim().toLowerCase();
      if (trimmedInput === 's') {
        rl.off('line', onData); // Remove the event listener
        rl.close(); // Close the readline interface
        resolve();
      } else {
        console.log('Invalid input. Type "s" and press "Enter" to continue...');
      }
    };
    rl.on('line', onData);
  });
}

async function loginJunxiang(driver){
  await driver.get(baseUrl)
  await driver.manage().window().setRect({ width: 393, height: 851 })
  const usernameField = await driver.findElement(By.id('username'))
  usernameField.sendKeys("junxiang")
  const passwordField = await driver.findElement(By.id('pin'))
  passwordField.sendKeys("password123")

  const loginButton = await driver.findElement(By.className('login'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await loginButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}

async function navigateToRecentTransactions(driver){
  await loginJunxiang(driver)
  const transferIcon = await driver.findElement(By.id('transfermoney'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await transferIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000))
}

async function navigateToReviewBankAccountToValencia(driver){
  await loginJunxiang(driver)
  await driver.navigate().to(baseUrl + '/1/accounttransfer')
  await new Promise(resolve => setTimeout(resolve, 1000))
  const inputAmount = await driver.findElement(By.id('keyInAmtBank'));
  await inputAmount.sendKeys("42")
  await new Promise(resolve => setTimeout(resolve, 1000))
  const inputComments = await driver.findElement(By.className('commentsPNT'));
  await inputComments.clear();
  await inputComments.sendKeys("Chicken Rice");
  await new Promise(resolve => setTimeout(resolve, 1000))
  const nextButton = await driver.findElement(By.id('submitrefund1'));
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}


async function navigateToSucccesfulBankAccountToValencia(driver){
  await navigateToReviewBankAccountToValencia(driver)
  const nextButton = await driver.findElement(By.id('reviewTransferNextButton'));
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}






















/////////////////// INITIATE BANK TRANSFER ///////////////////////////////////////////////////

Given(/^that I have logged in$/, async function() {
    await loginJunxiang(this.driver)
})

When("I click on the Transfer Money icon", async function(){
  const transferIcon = await this.driver.findElement(By.id('transfermoney'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await transferIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then("I am directed to the Enter Recipient Details page", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/accounttransferrecipient'); 
})





/////////////////// FILLING UP ENTER RECIPIENT DETAILS PAGE //////////////////////////////////////


Before({tags: "@onEnterRecipientDetailsPage"}, async function(){
  await navigateToRecentTransactions(this.driver)
})


Given("I am on the Enter Recipient Details page", async function(){
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/accounttransferrecipient'); 
})


Then(/^I enter the Recipient's name as "([^"]*)"$/, async function(name) {
    const recipientName = await this.driver.findElement(By.id("ERname"))
    recipientName.sendKeys(name)
    console.log("Press 'Allow' on the alert pop-up then return here to continue the test.")
    await pauseTest();
    await new Promise(resolve => setTimeout(resolve, 1000))
})

When ("I select into the fuzzy search page", async function (){
  const openFuzz = await this.driver.findElement(By.id('banks'))
  await openFuzz.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})


When(/^I type "([^"]*)" into the search bar$/, async function(bankname){
  const fuzzBar = await this.driver.findElement(By.className("Fuzsearchinput"))
  await fuzzBar.sendKeys(bankname)
})


Then("I should see the following banks displayed:", async function(dataTable) {
  const bankSuggestion = await this.driver.findElement(By.className('Fuzscrollview'));
  const bankItems = await bankSuggestion.findElements(By.className('Fuzbutton'));

  const displayedBanks = await Promise.all(
    bankItems.map((item) => item.getText())
  );

  const expectedBanks = dataTable.raw().map((row) => row[0].trim());
  expect(displayedBanks).to.deep.equal(expectedBanks);
});


When(/^I can select the bank "([^"]*)"$/, async function(bankname){
  await new Promise(resolve => setTimeout(resolve, 2000))

  const bankSuggestion = await this.driver.findElement(By.className('Fuzscrollview'));
  const bankItems = await bankSuggestion.findElements(By.className('Fuzbutton'));
  
  for (const item of bankItems) {
    const displayedBank = await item.getText();
    if (displayedBank.includes(bankname)) {
      await item.click();
      break;
    }
  }
})

When(/^I have copied the account number "([^"]*)" to my clipboard$/, async function(bankNumber){
  console.log("Copy the bank number to clipboard during the PausetTest below:")
  await pauseTest();
})

When("I tap on the Enter Account No. text field", async function(){
  const accField = await this.driver.findElement(By.id("accno"));
  await accField.click();
  console.log("Switch tab to the simulation screen and then focus back into the terminal to continue.") 
  await pauseTest(); 
  //press allow in permission alert
  await new Promise(resolve => setTimeout(resolve, 1000));
  await accField.click();
  await new Promise(resolve => setTimeout(resolve, 1000));
})

Then(/^the Enter Account No. text field should give the pop-up for me to automatically fill it with "([^"]*)"$/, async function(cleanedNumber){
  await new Promise(resolve => setTimeout(resolve, 1000));
  const autofillpop = await this.driver.findElement(By.className("autofillcontainer"));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await autofillpop.click();
  await new Promise(resolve => setTimeout(resolve, 1000));
  const filled = await this.driver.findElement(By.id('accno'));
  const inputValue = await filled.getAttribute('value');
  console.log('Input Element Value:', inputValue);
  expect(inputValue).to.equal(cleanedNumber);
});


Then(/^I click the Next button after pasting$/, async function() {
  const nextButton = await this.driver.findElement(By.id("pntsubmitbutton"));
  await nextButton.click();
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then(/^I am directed to the Bank Transfer page$/, async function() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/accounttransfer');
})



/////////////////// ENTER TRANSFER DETAILS //////// //////////////////////////////////////

Before({tags: "@onBankTransferPage"}, async function(){
  await loginJunxiang(this.driver)
  await this.driver.navigate().to(baseUrl + '/1/accounttransfer')
})

Given("I am on the Bank Transfer page", async function(){
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/accounttransfer');
})

Then(/^I should see "([^"]*)" as the recipient name$/, async function(name) {
  const recipientNameElement = await this.driver.findElement(By.id('recipientName'))
  recipientNameElement.getText().then(actualRecipientName => {
    assert.equal(actualRecipientName, name)
  })
})

Then(/^I should see "([^"]*)" as the recipient account number$/, async function(accountno) {
  const recipientNumberElement = await this.driver.findElement(By.id('recipientAccNumber'))
  recipientNumberElement.getText().then(actualRecipientNumber => {
    assert.equal(actualRecipientNumber, accountno)
  })
})

When(/^I enter "([^"]*)" as the amount of dollars to transfer$/, async function(amount) {
  const inputAmount = await this.driver.findElement(By.id('keyInAmtBank'));
  await inputAmount.sendKeys(amount)
  await new Promise(resolve => setTimeout(resolve, 1000))
})

When(/^I enter "([^"]*)" as the comments for recipient$/, async function(comments) {
  const inputComments = await this.driver.findElement(By.className('commentsPNT'));
  await inputComments.clear();
  await inputComments.sendKeys(comments);
  await new Promise(resolve => setTimeout(resolve, 1000))
})


When("I click the Next button to go to the verification page", async function(){
  const nextButton = await this.driver.findElement(By.id('submitrefund1'));
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then('I am directed to the Review Bank Account page', async function (){
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/review');
})





/////////////////// VERIFY TRANSFER DETAILS //////////////////////////////////////////////

Before({tags: "@onReviewBankAccountPage"}, async function(){
  await navigateToReviewBankAccountToValencia(this.driver)
})

Given(/^I am on the Review Bank Account page$/, async function() {
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/review');
})

Then(/^I should see "([^"]*)" as the amount to be transacted$/, async function(amount) {
  const amountTransacted = await this.driver.findElement(By.className('ReviewTransferBoxBlueSubTextRight'))
  const confirmAmount = await amountTransacted.getText()
  expect(confirmAmount).to.equal(amount)
})

Then(/^it should reflect "([^"]*)" as my recipient's name$/, async function (name) {
  const receiverDeet = await this.driver.findElement(By.id('recipientAccountTextName'));
  const recipientName = await receiverDeet.getText();
  // Assert the text content matches a particular string
  expect(recipientName).to.equal(name);
});

Then(/^it should reflect "([^"]*)" as my recipient's bank number$/, async function (accountno) {
  const receiverDeet = await this.driver.findElement(By.id('phonenumber'));
  const accountNumber = await receiverDeet.getText();
  // Assert the text content matches a particular string
  expect(accountNumber).to.equal(accountno);
});

Then(/^it should reflect "([^"]*)" as my comments$/, async function (comment) {
  const receiverDeet = await this.driver.findElement(By.id('yourcomments'));
  const myComment = await receiverDeet.getText();
  // Assert the text content matches a particular string
  expect(myComment).to.equal(comment);
});





/////////////////// CONFIRM BANK TRANSFER //////////////////////////////////////////////

Before({tags: "@onReviewBankAccountPage"}, async function(){
  await navigateToReviewBankAccountToValencia(this.driver)
})

// Given(/^I am on the Review Bank Account page -> defined in VERIFY TRANSFER DETAILS

Then('I click the Next button to confirm the bank transfer', async function(){
  const nextButton = await this.driver.findElement(By.id('reviewTransferNextButton'));
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then('I am directed to the Successful page', async function (){
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/success');
})







/////////////////// VERIFY SUCCESSFUL BANK TRANSFER//////////////////////////////////////////////

Before({tags: "@onSuccessfulBankTransferPage"}, async function(){
  await navigateToSucccesfulBankAccountToValencia(this.driver)
})

Given("I am on the Successful page", async function(){
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/success');
})

Then(/^I should see "([^"]*)" as the confirmed recipient name$/, async function (name){
  const confirmedRecipientBank = await this.driver.findElement(By.id('recipientConfirmName'))
  const confirmName = await confirmedRecipientBank.getText()
  expect(confirmName).to.equal(name)
})

Then(/^I should see "([^"]*)" as the confirmed recipient account number$/, async function (accountno){
  const confirmedRecipientNumber = await this.driver.findElement(By.id('phonenumber'))
  const confirmNumber = await confirmedRecipientNumber.getText()
  expect(confirmNumber).to.equal(accountno)
})

Then(/^I should see "([^"]*)" as the confirmed comments$/, async function (comment){
  const transactionComment = await this.driver.findElement(By.id('yourcomments'))
  const confirmComment = await transactionComment.getText()
  expect(confirmComment).to.equal(comment)
})
