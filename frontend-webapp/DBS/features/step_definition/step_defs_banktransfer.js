const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');
const readline = require('readline');


async function pauseTest() {
  // Log a message to prompt the tester to manually continue the test
  console.log('Test execution paused. Type "S" and press "Enter" to continue...');

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
        console.log('Invalid input. Type "S" and press "Enter" to continue...');
      }
    };
    rl.on('line', onData);
  });
}

Given(/^that I have logged in$/, async function() {
    await this.driver.get(baseUrl)
    await this.driver.manage().window().setRect({ width: 393, height: 851 })
    const usernameField = await this.driver.findElement(By.id('username'))
    usernameField.sendKeys("junxiang")
    const passwordField = await this.driver.findElement(By.id('pin'))
    passwordField.sendKeys("password123")
  
    const loginButton = await this.driver.findElement(By.className('login'))
    await new Promise(resolve => setTimeout(resolve, 1000))
    await loginButton.click()
    await new Promise(resolve => setTimeout(resolve, 1000))
})

Then("I click on the Transfer Money icon", async function(){
  const transferIcon = await this.driver.findElement(By.id('transfermoney'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await transferIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then(/^I have entered the Recipient's name as "([^"]*)"$/, async function(name) {
    const recipientName = await this.driver.findElement(By.id("ERname"))
    recipientName.sendKeys(name)
    await pauseTest();
    await new Promise(resolve => setTimeout(resolve, 1000))
})


When(/^I select "([^"]*)" as the intended bank$/, async function(bankname){
  const bankSuggestion = await this.driver.findElement(By.className('Fuzscrollview'));
  const bankItems = await bankSuggestion.findElements(By.className('Fuzbutton'));
  
  for (const item of bankItems) {
    const displayedBank = await item.getText();
    if (displayedBank.includes(bankname)) {
      await item.click();
      break;
    }
  }
    // TODO: STEP DEF to select the bankinput from the dropdown list
})


Then(/^I click the Next button at the Enter Recipient Detail's page$/, async function() {
  const nextButton = await this.driver.findElement(By.id("pntsubmitbutton"));
  await nextButton.click();
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then(/^I will be directed to the Bank Transfer page$/, async function() {
  await new Promise(resolve => setTimeout(resolve, 1000))
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

Then(/^I enter "([^"]*)" as the comments for recipient$/, async function(comments) {
  const inputComments = await this.driver.findElement(By.className('commentsPNT'));
  await inputComments.clear();
  await inputComments.sendKeys(comments);
  await new Promise(resolve => setTimeout(resolve, 1000))

})

Then(/^I will be directed to the Review Bank Acc page$/, async function() {
  const currentUrl = await this.driver.getCurrentUrl();
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/review');
})

Then(/^I should see "([^"]*)" as the amount of dollars I want to transfer$/, async function(amount) {
  const amountTransacted = await this.driver.findElement(By.className('ReviewTransferBoxBlueSubTextRight'))
  const confirmAmount = await amountTransacted.getText()
  expect(confirmAmount).to.equal(amount)
})

Then(/^it will reflect "([^"]*)" as my recipient's name$/, async function (name) {
  const receiverDeet = await this.driver.findElement(By.id('recipientAccountTextName'));
  const recipientName = await receiverDeet.getText();

  // Assert the text content matches a particular string
  expect(recipientName).to.equal(name);
});

Then(/^it will reflect "([^"]*)" as my recipient's bank number$/, async function (accountno) {
  const receiverDeet = await this.driver.findElement(By.id('phonenumber'));
  const accountNumber = await receiverDeet.getText();

  // Assert the text content matches a particular string
  expect(accountNumber).to.equal(accountno);
});

Then(/^it will reflect "([^"]*)" as my comments$/, async function (comment) {
  const receiverDeet = await this.driver.findElement(By.id('yourcomments'));
  const myComment = await receiverDeet.getText();

  // Assert the text content matches a particular string
  expect(myComment).to.equal(comment);
});

Then('I click the Next button to confirm the bank transfer', async function(){
  const nextButton = await this.driver.findElement(By.id('reviewTransferNextButton'));
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then('I will be directed to the Successful page', async function (){
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
