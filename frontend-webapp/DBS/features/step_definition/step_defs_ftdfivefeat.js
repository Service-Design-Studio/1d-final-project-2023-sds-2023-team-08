const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');
const readline = require('readline');

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

async function wrongPaynowMade(driver){
  await loginJunxiang(driver)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const paynowIcon = await driver.findElement(By.id('paynowbutton')) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  await paynowIcon.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const phoneNumberField = await driver.findElement(By.className('eightdigitER')) 
  phoneNumberField.sendKeys("88888884") 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const clickAway = await driver.findElement(By.className("overall")) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  await clickAway.click() 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const submitButtonRed = await driver.findElement(By.className('pntsubmitbuttonER'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await submitButtonRed.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const transactionAmount = await driver.findElement(By.id('keyInAmtPaynow')) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  transactionAmount.sendKeys("12") 
  const nextButton = await driver.findElement(By.id('submitrefund1'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await nextButton.click(); 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const next = await driver.findElement(By.id('reviewTransferNextButton'))
  next.click() 
  await new Promise(resolve => setTimeout(resolve, 1000))
}


async function navigateToFTDForm(driver){
  wrongPaynowMade(driver)
  const wrongTransferLink = await driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await wrongTransferLink.click()
}

async function manualFillingUpFTDForm(driver){
  navigateToFTDForm(driver)
  const checkbox = await driver.findElement(By.id('transferWrongAccountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000));
  await checkbox.click();
  const comments = await driver.findElement(By.className('commentsTextBox'))
  comments.sendKeys("Sorry! Supposed to send to someone else")
  await new Promise(resolve => setTimeout(resolve, 1000));
}










/////////// RAISING A FTD ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I have made a Paynow Transfer of '$12' to the wrong account right after paying", async function (){
  await wrongPaynowMade(this.driver)
})

When('I click on "Made a wrong transfer?" at the review page', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const wrongTransferLink = await this.driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await wrongTransferLink.click()
})

Then('I will be redirected to a "Raise A Fund Transfer Dispute" page', async function () {
  // Check if the current page is the home page
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.ok(currentUrl.includes(baseUrl +'/1/raiseFTD/'))
})


Then(/^it will reflect '([^"]*)' as the amount transferred$/, async function (wrongamt) {
  const disputeamt = await this.driver.findElement(By.className('moneytext2spend'))
  const amt = await disputeamt.getText();

  // Assert the text content matches a particular string
  expect(amt).to.equal(wrongamt)
})



/////////// FILLING UP FTD ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I am on the Raise FTD Form Page", async function () {
  await navigateToFTDForm(this.driver)
})

When('I click the "Raise Fund Transfer Dispute button" to confirm', async function () {
  const confirmbutton = await this.driver.findElement(By.className('RaiseFTDButton'))

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await confirmbutton.click();
});

Then('I will receive a warning to select a valid reason', async function () {
  const noReasonWarning = await this.driver.findElement(By.className('flashmessagetext'));
  const warningText = await noReasonWarning.getText();

  // Assert the text content matches a particular string
  expect(warningText).to.equal('* PLEASE SELECT A REASON');

});

When('I check the box for "Transfer to Wrong Account"', async function () {
  const checkbox = await this.driver.findElement(By.id('transferWrongAccountCheckbox'))

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await checkbox.click();
});

//defined above: I click the "Raise Fund Transfer Dispute button" to confirm

Then('I will see a warning that the comments field cannot be blank', async function () {
  const noReasonWarning = await this.driver.findElement(By.className('flashmessagetext'));
  const warningText = await noReasonWarning.getText();

  // Assert the text content matches a particular string
  expect(warningText).to.equal('* COMMENTS FIELD CANNOT BE LEFT BLANK');
});


When("I will key in my comments for recipient", async function () {
  const comments = await this.driver.findElement(By.className('commentsTextBox'))
  comments.sendKeys("Sorry! Supposed to send to someone else")
  await new Promise(resolve => setTimeout(resolve, 1000));
});




/////////// USING THE VERTEXAI ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I have filled up the FTD Form Page but want to make my comments more professional", async function(){
  await manualFillingUpFTDForm(this.driver)
})

When("I click on the star button on the top-right corner of the textbox", async function(){
  const sparkle = await this.driver.findElement(By.className("AIassist"))
  await sparkle.click()
})

Then('I will see loading prompt with the words "AI is Working"', async function(){
  const aiPlaceholder = await this.driver.findElement(By.id("Aitext"))
  const aiResponse = await aiPlaceholder.getText()
  let aiWorking = false
  if (aiResponse.includes("AI is working") || ("Comments is cleaned!")){
    aiWorking = true
  }
})

Then('I will see another prompt saying "Comment is cleaned!"', async function(){
  const aiPlaceholder = await this.driver.findElement(By.id("Aitext"))
  const aiResponse = await aiPlaceholder.getText()
  let aiWorking = false
  if (aiResponse.includes("AI is working") || ("Comments is cleaned!")){
    aiWorking = true
  }
})

Then(/^I will see a different comment instead of "[(^")*]"$/, async function(manualComment){
  const commentsBox = await this.driver.findElement(By.className("commentsTextBox"))
  const cleanedComment = commentsBox.getText()
  expect(cleanedComment).not.to.equal(manualComment)
})

Then(/^the comments should not exceed "[(^")*]" characters$/, async function(){
  const commentsBox = await this.driver.findElement(By.className("commentsTextBox"))
  const cleanedComment = commentsBox.getText()
  expect(cleanedComment.length).to.be.at.most(maxLength)
})









