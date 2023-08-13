const assert = require('assert')
const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const { Builder, By, Key, until } = require('selenium-webdriver')
const { useEffect } = require('react')
const { expect } = require('chai')
const readline = require('readline')

async function loginJunxiang(driver){
  await driver.get(baseUrl)
  await driver.manage().window().setRect({ width: 393, height: 851 })
  const usernameField = await driver.findElement(By.id('username'))
  await usernameField.sendKeys("junxiang")
  const passwordField = await driver.findElement(By.id('pin'))
  await passwordField.sendKeys("password123")
  const loginButton = await driver.findElement(By.className('login'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await loginButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}

async function loginTristan(driver){
  await driver.get(baseUrl)
  await driver.manage().window().setRect({ width: 393, height: 851 })
  const usernameField = await driver.findElement(By.id('username'))
  await usernameField.sendKeys("tristan")
  const passwordField = await driver.findElement(By.id('pin'))
  await passwordField.sendKeys("password123")
  const loginButton = await driver.findElement(By.className('login'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await loginButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}

async function makePaynowToOldie(driver){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const submitButtonRed = await driver.findElement(By.className('pntsubmitbuttonER'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await submitButtonRed.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const transactionAmount = await driver.findElement(By.id('keyInAmtPaynow')) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  await transactionAmount.sendKeys("12") 
  const nextButton = await driver.findElement(By.id('submitrefund1'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await nextButton.click() 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const next = await driver.findElement(By.id('reviewTransferNextButton'))
  await next.click() 
  await new Promise(resolve => setTimeout(resolve, 2000))
}

async function checkForPaynowHistory(driver){
  await loginJunxiang(driver)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const paynowIcon = await driver.findElement(By.id('paynowbutton')) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  await paynowIcon.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const phoneNumberField = await driver.findElement(By.className('eightdigitER')) 
  await phoneNumberField.sendKeys("88888884") 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const clickAway = await driver.findElement(By.className("overall")) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  await clickAway.click() 
  await new Promise(resolve => setTimeout(resolve, 1000))
  try{
    const condition = await driver.findElement(By.className('warningtextalert'))
    await makePaynowToNewbie(driver) //send a paymenent if history does not exist, end up on success page
  } catch (error){
    await makePaynowToOldie(driver) //proceed with paynow, end up on success page
  }
}

async function makePaynowToNewbie(driver){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const submitButtonRed = await driver.findElement(By.className('pntsubmitbuttonER'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await submitButtonRed.click() 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const transactionAmount = await driver.findElement(By.id('keyInAmtPaynow')) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  transactionAmount.sendKeys("12") 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const nextButton = await driver.findElement(By.id('submitrefund1'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const inputSlider = await driver.findElement(By.id('inputslider'))
  inputSlider.sendKeys(100) 
  await new Promise(resolve => setTimeout(resolve, 2000)) //end up on success page
}


async function navigateToFTDForm(driver){
  await checkForPaynowHistory(driver)
  await new Promise(resolve => setTimeout(resolve,2000))
  const wrongTransferLink = await driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 2000))
  await wrongTransferLink.click()
  await new Promise(resolve => setTimeout(resolve, 3000))
}

async function manualFTDWrongAccount(driver){
  await navigateToFTDForm(driver)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const checkbox = await driver.findElement(By.id('transferWrongAccountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await checkbox.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const comments = await driver.findElement(By.className('commentsTextBox'))
  comments.sendKeys("Sorry! Supposed to send to someone else") //never press submit, still on ftd form
}


async function raiseFTDAgainstTristan(driver){
  await manualFTDWrongAccount(driver)
  const raiseFTD = await driver.findElement(By.className("RaiseFTDButton"))
  await raiseFTD.click()
  await new Promise(resolve => setTimeout(resolve, 2000))
  const confirmRaise= await driver.findElement(By.className("SubmitButton"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await confirmRaise.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}

async function navigateToFTDStatusPage(driver){
  const resolveNowButton = await driver.findElement(By.className('buttonText'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await resolveNowButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}



async function pauseTest() {
  // Log a message to prompt the tester to manually continue the test
  console.log('Test execution paused. Type "s" and press "Enter" to continue...')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) => {
    const onData = (input) => {
      const trimmedInput = input.trim().toLowerCase()
      if (trimmedInput === 's') {
        rl.off('line', onData) // Remove the event listener
        rl.close() // Close the readline interface
        resolve()
      } else {
        console.log('Invalid input. Type "s" and press "Enter" to continue...')
      }
    }
    rl.on('line', onData)
  })
}


async function raiseFTDWrongAmount(driver){
  await checkForPaynowHistory(driver)
  await new Promise(resolve => setTimeout(resolve,2000))
  const wrongTransferLink = await driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 2000))
  await wrongTransferLink.click()
  await new Promise(resolve => setTimeout(resolve, 3000))
  //on ftd form page now
  const checkbox = await driver.findElement(By.id('transferWrongAmountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await checkbox.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const blank = await driver.findElement(By.id("correctAmount"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await blank.sendKeys('4.00')
  await new Promise(resolve => setTimeout(resolve, 1000))
  const contact = await driver.findElement(By.id("contactDetails"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await contact.sendKeys('88888888')
  await new Promise(resolve => setTimeout(resolve, 1000))
  const comments = await driver.findElement(By.className('commentsTextBox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await comments.sendKeys("Sorry! Sent the wrong amount, please refund excess")
  await new Promise(resolve => setTimeout(resolve, 1000))
  const raiseFTD = await driver.findElement(By.className("RaiseFTDButton"))
  await raiseFTD.click()
  await new Promise(resolve => setTimeout(resolve, 2000))
  const confirmRaise= await driver.findElement(By.className("SubmitButton"))
  await confirmRaise.click()
  //filed FTD for wrong amount, at ftd successfully raised page
  await new Promise(resolve => setTimeout(resolve, 2000))
  const exit = await driver.findElement(By.className("successtxtransparent"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await exit.click() //exit the success ftdsuccess to homescreen
  await new Promise(resolve => setTimeout(resolve, 1000))
  const logout = await driver.findElement(By.id("logoutButton"))
  await logout.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  //logged out
  const usernameField = await driver.findElement(By.id('username'))
  await usernameField.sendKeys("tristan") //log into tristan, the recipient
  const passwordField = await driver.findElement(By.id('pin'))
  await passwordField.sendKeys("password123")
  const loginButton = await driver.findElement(By.className('login'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await loginButton.click()
  //home page of tristan
}











/////////// RAISING A FTD THROUGH REDIRECT ////////////////////////////////////////////////////////////////////////////////////////////// 


Given(/^I have made a Paynow Transfer of '([^"]*)'$/, async function (paid){
  await checkForPaynowHistory(this.driver)
  //successful screen
})

When('I click on "Made a wrong transfer?" at the review page', async function () {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const wrongTransferLink = await this.driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 2000))
  await wrongTransferLink.click()
  await new Promise(resolve => setTimeout(resolve, 2000))
  //click on link in successful page
})

Then('I will be redirected to a "Raise A Fund Transfer Dispute" page', async function () {
  // Check if the current page is the home page
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.ok(currentUrl.includes(baseUrl +'/1/raiseFTD'))
})


Then(/^it will reflect '([^"]*)' as the amount transferred$/, async function (wrongamt) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const disputeamt = await this.driver.findElement(By.className('moneytext2spend'))
  const amt = await disputeamt.getText()

  // Assert the text content matches a particular string
  expect(amt).to.equal(wrongamt)
})



/////////// FILLING UP FTD ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I am on the Raise FTD Form Page", async function () {
  await checkForPaynowHistory(this.driver)
  await new Promise(resolve => setTimeout(resolve, 3000))
  const wrongTransferLink = await this.driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 2000))
  await wrongTransferLink.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.ok(currentUrl.includes(baseUrl +'/1/raiseFTD'))
})



When('I click the "Raise Fund Transfer Dispute button" to confirm', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const confirmbutton = await this.driver.findElement(By.className('RaiseFTDButton'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await confirmbutton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then('I will receive a warning to select a valid reason', async function () {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const noReasonWarning = await this.driver.findElement(By.className('flashmessagetext'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  const warningText = await noReasonWarning.getText()
  await new Promise(resolve => setTimeout(resolve, 1000))
  expect(warningText).to.equal('* PLEASE SELECT A REASON')
})

When('I check the box for "Transfer to Wrong Account"', async function () {
  const checkbox = await this.driver.findElement(By.id('transferWrongAccountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await checkbox.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

//defined above: I click the "Raise Fund Transfer Dispute button" to confirm

Then('I will see a warning that the comments field cannot be blank', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const noReasonWarning = await this.driver.findElement(By.className('flashmessagetextcomments'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  const warningText = await noReasonWarning.getText()
  await new Promise(resolve => setTimeout(resolve, 1000))
  expect(warningText).to.equal('* COMMENTS FIELD CANNOT BE LEFT BLANK')
})


When("I will key in my comments for recipient", async function () {
  const comments = await this.driver.findElement(By.className('commentsTextBox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await comments.sendKeys("Sorry! Supposed to send to someone else")
  await new Promise(resolve => setTimeout(resolve, 1000))
})




/////////// USING THE VERTEXAI - WRONG ACCOUNT ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I have filled up the FTD Form Page but want to make my comments more professional", async function(){
  await manualFTDWrongAccount(this.driver)
})

When("I click on the star button on the top-right corner of the textbox", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const sparkle = await this.driver.findElement(By.className("AIassist"))
  await new Promise(resolve => setTimeout(resolve, 1000))
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
  await new Promise(resolve => setTimeout(resolve, 1000))
  const aiPlaceholder = await this.driver.findElement(By.id("Aitext"))
  const aiResponse = await aiPlaceholder.getText()
  let aiWorking = false
  if (aiResponse.includes("Comments is cleaned!")){
    aiWorking = true
  }
})

Then(/^I will see a different comment instead of "([^"]*)"$/, async function(manualComment){
  await new Promise(resolve => setTimeout(resolve, 2000))
  const commentsBox = await this.driver.findElement(By.className("commentsTextBox"))
  const cleanedComment = commentsBox.getText()
  expect(cleanedComment).not.to.equal(manualComment)
})

Then(/^the comments should not exceed "([^"]*)" characters$/, async function(maxLength){
  const commentsBox = await this.driver.findElement(By.className("commentsTextBox"))
  const cleanedComment = await commentsBox.getText()
  expect(cleanedComment.length).to.be.at.most(Number(maxLength))
})

Then("I submit the FTD", async function(){
  await new Promise(resolve => setTimeout(resolve, 2000))
  const raiseFTD = await this.driver.findElement(By.className("RaiseFTDButton"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await raiseFTD.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const confirmRaise= await this.driver.findElement(By.className("SubmitButton"))
  await confirmRaise.click()
})


/////////// FTD PAGE THROUGH DASHBOARD ////////////////////////////////////////////////////////////////////////////////////////////// 


Given('my dashboard on my homepage has alerted me to a FTD raised against me', async function () {
  await manualFTDWrongAccount(this.driver)
  const raiseFTD = await this.driver.findElement(By.className("RaiseFTDButton"))
  await raiseFTD.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const confirmRaise= await this.driver.findElement(By.className("SubmitButton"))
  await confirmRaise.click()
  //ftd has been raised against tristan

  await new Promise(resolve => setTimeout(resolve, 2000))
  const exit = await this.driver.findElement(By.className("successtxtransparent"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await exit.click() //exit the success ftdsuccess to homescreen
  await new Promise(resolve => setTimeout(resolve, 1000))
  const logout = await this.driver.findElement(By.id("logoutButton"))
  await logout.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const usernameField = await this.driver.findElement(By.id('username'))
  await usernameField.sendKeys("tristan") //log into tristan, the recipient
  const passwordField = await this.driver.findElement(By.id('pin'))
  await passwordField.sendKeys("password123")
  const loginButton = await this.driver.findElement(By.className('login'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await loginButton.click()
  await new Promise(resolve => setTimeout(resolve, 2000))
  const alert = await this.driver.findElement(By.className("textheaderftd1"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  const alertwords = await alert.getText()
  expect(alertwords).to.include(":(")
})

When('I click on "RESOLVE NOW" on the dashboard', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const resolveNowButton = await this.driver.findElement(By.className('buttonText'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await resolveNowButton.click()
})

Then('I will be redirected to the FTD Page', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.strictEqual(currentUrl, baseUrl+'/5/FTDtransactionsall')
})



/////////// REFUND FULLY  ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I am logged into 'Tristan' and I am at the FTD Page", async function(){
  await raiseFTDAgainstTristan(this.driver)
  await loginTristan(this.driver)
  await navigateToFTDStatusPage(this.driver)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.strictEqual(currentUrl, baseUrl+'/5/FTDtransactionsall')
})

When(/^I click on the FTD raised from "([^"]*)" with amount "([^"]*)" and status button "([^"]*)"$/, async function (sender, refundAmt, status) {
  const container = await this.driver.findElements(By.className("transactiontitle"))
    for (const transaction of container) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        const senderName = await transaction.getText()
        const amount = await this.driver.findElement(By.className('moneyin2'))
        const ftdAmt = await amount.getText()
        const ftdstatus = await this.driver.findElement(By.className('statustext'))
        const state = await ftdstatus.getText()
        if ((senderName.includes(sender)) && (Number(ftdAmt) === Number(refundAmt)) && (state === status)) {
            console.log('recipient found')
            await new Promise(resolve => setTimeout(resolve, 2000))
            await transaction.click()
            await new Promise(resolve => setTimeout(resolve, 1000))
            break
        }
      }
})



Then(/^I am brought to the dispute details page which reflects "([^"]*)" as the amount being disputed$/, async function (disputeamount) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const disputeamt = await this.driver.findElement(By.className('moneydisputein'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  const amt = await disputeamt.getText()
  await new Promise(resolve => setTimeout(resolve, 1000))
  expect(Number(amt)===disputeamount)
})


When('I click on the Yes - Refund button', async function () {
  const refundButton = await this.driver.findElement(By.className('refundbutton'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await refundButton.click()

})

Then(/^I will be redirected to the Refund Dispute page which shows "([^"]*)" as the amount to refund$/, async function (refundamount) {
  // Check if the current page is Refund Dispute page
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.ok(currentUrl.includes(baseUrl + '/5/refunddispute'))
  const amount = await this.driver.findElement(By.className('refundamount1'))
  const amountrefund = await amount.getText()
  expect(Number(amountrefund) === refundamount)
})


When('I click on the Submit button', async function () {
  const submitButton = await this.driver.findElement(By.id('submitrefund1'))

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Click the button
  await submitButton.click()
})

Then('I will be redirected to the Review Transfer page', async function () {
  // Check if the current page is the home page
  const currentUrl = await this.driver.getCurrentUrl()
  expect(currentUrl).to.include(baseUrl + '/5/review')
})


When('I click on Transfer Now', async function () {
  const transferNowButton = await this.driver.findElement(By.className('TransferNow'))

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Click the button
  await transferNowButton.click()

})

Then(/^I will be redirected to the Successful transfer page showing "([^"]*)" as the refund amount$/, async function (refundamount) {
  // Check if the current page is the home page
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.strictEqual(currentUrl, baseUrl+ '/5/success')
  const amount = await this.driver.findElement(By.className("successtxdescriptboxtransparentright"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  const number = await amount.getText()
  expect(Number(number) === refundamount)
})






/////////// RAISING FTD THROUGH RECENT TRANSACTIONS TAB ////////////////////////////////////////////////////////////////////////////////////////////// 

// given above in :Raising a FTD through redirect

When('I navigated to the Recent Transactions page', async function () {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const exit = await this.driver.findElement(By.className("successtxtransparent"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await exit.click() //exit the success ftdsuccess to homescreen
  await new Promise(resolve => setTimeout(resolve, 1000))
  //homescreen now
  const recent = await this.driver.findElement(By.id("transaction"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await recent.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  //in recent transaction tab now
})

When(/^I click into the transaction of "([^"]*)" to "([^"]*)"$/, async function(transactionAmount,recpname){
  const currentUrl = await this.driver.getCurrentUrl()
  assert.strictEqual(currentUrl, baseUrl+'/1/recenttransaction')
  const container = await this.driver.findElements(By.className("transactiontitletext"))
  for (const transaction of container) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      // const recipient = await transaction.findElement(By.className("transactiontitletext"))
      const senderName = await transaction.getText()
      const amount = await this.driver.findElement(By.className('moneyout'))
      const txnamt = await amount.getText()
      if ((senderName.includes(recpname)) && (Number(txnamt) === Number(transactionAmount))) {
          console.log('recipient found')
          await new Promise(resolve => setTimeout(resolve, 2000))
          await transaction.click()
          await new Promise(resolve => setTimeout(resolve, 1000))
          break
      }
    }
})

// it will reflect -12.00 defined above


When('I click the "Raise a Fund Dispute button" to proceed', async function () {
  const confirmbutton = await this.driver.findElement(By.className('FTDbutton1'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await confirmbutton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

Then("I will be directed to the FTD Form page", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  console.log(currentUrl)
  expect(currentUrl).to.include(baseUrl+'/1/raiseFTD')
})

Then('I check the box for "Transfer Wrong Amount"', async function(){
  const checkbox = await this.driver.findElement(By.id('transferWrongAmountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await checkbox.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})


Then(/^I can indicate that "([^"]*)" is the correct amount, and my phone number is "([^"]*)"$/, async function(rightfulAmount, phone){
  const blank = await this.driver.findElement(By.id("correctAmount"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await blank.sendKeys(rightfulAmount)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const contact = await this.driver.findElement(By.id("contactDetails"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await contact.sendKeys(phone)
  await new Promise(resolve => setTimeout(resolve, 1000))
})

When("I will key in my comments for recipient to tell them I paid wrong amount", async function () {
  const comments = await this.driver.findElement(By.className('commentsTextBox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await comments.sendKeys("Sorry! Sent the wrong amount, please refund excess")
  await new Promise(resolve => setTimeout(resolve, 1000))
})




/////////// USING VERTEXAI - WRONG AMOUNT ////////////////////////////////////////////////////////////////////////////////////////////// 


Given(/^I have filled up the FTD Form Page but want my comments to reflect the correct amount of '([^"]*)' and to contact me at '([^"]*)' professionally$/, async function(rightfulAmount, phone){
  await checkForPaynowHistory(this.driver)
  await new Promise(resolve => setTimeout(resolve,2000))
  const wrongTransferLink = await this.driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 2000))
  await wrongTransferLink.click()
  await new Promise(resolve => setTimeout(resolve, 3000))
  //on ftd form page now
  const checkbox = await this.driver.findElement(By.id('transferWrongAmountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await checkbox.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const blank = await this.driver.findElement(By.id("correctAmount"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await blank.sendKeys(rightfulAmount)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const contact = await this.driver.findElement(By.id("contactDetails"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await contact.sendKeys(phone)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const comments = await this.driver.findElement(By.className('commentsTextBox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await comments.sendKeys("Sorry! Sent the wrong amount, please refund excess")
  await new Promise(resolve => setTimeout(resolve, 1000))
  //filled out ftd form for wrong amount
})

//vertex ai defined above




/////////// FTD PAGE THROUGH RECENT TXNS ////////////////////////////////////////////////////////////////////////////////////////////// 

When("I have logged in to tristan's account", async function(){
  await loginTristan(this.driver)
  const currentUrl = await this.driver.getCurrentUrl()
  expect(currentUrl).to.include(baseUrl+'/5/home')
})

When('I navigate to the Recent Transactions page to access the FTD', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const recent = await this.driver.findElement(By.id("transaction"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await recent.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

When("I click into the FTD tab", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const ftdtab = await this.driver.findElement(By.id('ftdtab')) //redeploy
  await new Promise(resolve => setTimeout(resolve, 1000))
  await ftdtab.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
})

//check redirect to FTD page defined above





/////////// PARTIAL TRANSFER SCREEN ////////////////////////////////////////////////////////////////////////////////////////////// 

Given("I have a partial transfer FTD raised against me", async function(){
  await raiseFTDWrongAmount(this.driver)
})

// when click on ftd raised by jx with 12 defined above

//brought to dispute page defined above

When(/^The Correct Amount of Transaction is indicated to be '([^"]*)'$/, async function(rightfulamt){
  const correctamt = await this.driver.findElement(By.id("correctamount"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  const supposedtopay = await correctamt.getText()
  expect(String(supposedtopay)).to.include(rightfulamt)
})

// click on yes refund defined above

//redirection to refnid disput page defined above





/////////// SUBMIT PARTIAL REFUND ////////////////////////////////////////////////////////////////////////////////////////////// 

// given at the refund dispute page defined above

When(/^the refund amount has been fixed to '([^"]*)'$/, async function (refundexcess){
  const excess = await this.driver.findElement(By.className("refundamount1"))
  const topay = excess.getText()
  expect(Number(topay) === refundexcess)
})

// When I click on the Submit button defined above 
// Then I will be redirected to the Review Transfer page defined above
// When I click on Transfer Now defined above
// Then I will be redirected to the Successful transfer page showing "8.00" as the refund amount defined above




/////////// REPETITION OF MAKING FTD ////////////////////////////////////////////////////////////////////////////////////////////// 
/////////// REPETITION OF NAVIGATING TO FTD PAGE ////////////////////////////////////////////////////////////////////////////////////////////// 

/////////// REFUTING DISPUTE  ////////////////////////////////////////////////////////////////////////////////////////////// 
When("I click on the No - Refute button", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const refutebutton = await this.driver.findElement(By.className("refutebutton"))
  await refutebutton.click()
})

Then("I will be redirected to the Refute Dispute page", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  assert.ok(currentUrl.includes(baseUrl + '/5/refutedispute'))
})

When("I input my reason for refuting", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const refutecomment = await this.driver.findElement(By.className("RefuteDisputeReason"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await refutecomment.sendKeys("Sorry, it is mine")
})

When("I click on the Submit button to submit refute", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const refutebutton = await this.driver.findElement(By.className("SubmitButton"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await refutebutton.click()
})

// redirect to review tranfer page defined above

When("I click on REFUTE DISPUTE to confirm", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const confirmrefute = await this.driver.findElement(By.className("SubmitButtonRed"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await confirmrefute.click()
})

Then("I will be redirected to the Successful Refute page", async function(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  const currentUrl = await this.driver.getCurrentUrl()
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl+ '/5/success')
})