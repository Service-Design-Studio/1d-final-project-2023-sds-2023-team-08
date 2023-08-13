// COMPLETED
const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');
const readline = require('readline');


async function navigateToPaynowToMobilePage(driver){
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
}

async function navigateToSwipeToConfirmPage(driver){
  await navigateToPaynowToMobilePage(driver)
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  const transactionAmount = await driver.findElement(By.id('keyInAmtPaynow')) 
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  transactionAmount.sendKeys("12") 
  const nextButton = await driver.findElement(By.id('submitrefund1')); 
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  await nextButton.click(); 
  await new Promise(resolve => setTimeout(resolve, 1000)); 
}


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
  await new Promise(resolve => setTimeout(resolve, 2000)) //end up on success page
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


async function needsNewPayee(driver){
  await loginJunxiang(driver)
  await new Promise(resolve => setTimeout(resolve, 2000))
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
    return //exit try catch
  } catch (error){
    //make a FTD, call the function again
    await makePaynowToOldie(driver) 
    await raiseFTDToClearSeed(driver) //success screen of ftd
  }
}

async function raiseFTDToClearSeed(driver){
  await new Promise(resolve => setTimeout(resolve,2000))
  const wrongTransferLink = await driver.findElement(By.className('successtxclicklink'))
  await new Promise(resolve => setTimeout(resolve, 2000))
  await wrongTransferLink.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const checkbox = await driver.findElement(By.id('transferWrongAccountCheckbox'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await checkbox.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
  const comments = await driver.findElement(By.className('commentsTextBox'))
  comments.sendKeys("Sorry! Supposed to send to someone else") //never press submit, still on ftd form
  await new Promise(resolve => setTimeout(resolve, 2000))
  const raiseFTD = await driver.findElement(By.className("RaiseFTDButton"))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await raiseFTD.click()
  await new Promise(resolve => setTimeout(resolve, 3000))
  const confirmRaise= await driver.findElement(By.className("SubmitButton"))
  await confirmRaise.click() //success screen of ftd
}


async function needsOldPayee(driver){
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
    //exit try catch
    return
  }
}

Before({tags: "@newPayee"}, async function(){
  await needsNewPayee(this.driver)
})

Before({tags: "@oldPayee"}, async function(){
  await needsOldPayee(this.driver)
})




















/////////// VERIFY THAT A WARNING IS SHOWN WHEN SUBMITTING NO INPUT ////////////////////////////////////////////////////////////////////////////////////////////// 

Given('that I am on the Paynow Contact Page', async function () { 
  await loginJunxiang(this.driver)
  await new Promise(resolve => setTimeout(resolve, 1000))
  const paynowIcon = await this.driver.findElement(By.id('paynowbutton')) 
 
  // Add a delay of 1 second before clicking the button 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
  // Click the button 
  await paynowIcon.click(); 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
})

When('I click "SUBMIT" before keying in a valid recipient', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const loginButton = await this.driver.findElement(By.id('pntsubmitbutton'))
  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000))
  // Click the button
  await loginButton.click();
});

Then('I will see a warning to key in a valid phone number', async function () {
  // Check if there is a warning
  await new Promise(resolve => setTimeout(resolve, 1000));

  const noRecipientWarning = await this.driver.findElement(By.className('WarningMessagePaynow'));
  const warningText = await noRecipientWarning.getText()

  // Assert the text content matches a particular string
  expect(warningText).to.equal('* Please Enter A Phone Number')
})







/////////// VERIFY THAT A WARNING IS SHOWN WHEN TRANSFERRING TO A NEW MOBILE NUMBER ////////////////////////////////////////////////////////////////////////////////////////////// 
 
// GIVEN has been defined above
 
When(/^I enter a mobile number "([^"]*)" that I have never transferred to before$/, async function (newNumber) { 
  const phoneNumberField = await this.driver.findElement(By.className('eightdigitER')) 
  phoneNumberField.sendKeys(newNumber) 
 
  // Add a delay of 1 second before clicking the button 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
  const clickAway = await this.driver.findElement(By.className("overall")) 
 
  // Add a delay of 1 second before clicking the button 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
  // Click the button 
  await clickAway.click(); 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
 
}); 
 
 
Then(/^a warning will be displayed under the name "([^"]*)"$/, async function (newName) { 
  const recipientName = await this.driver.findElement(By.className('recipientnameER')); 
  const autofillname = await recipientName.getText(); 
 
  // Assert the text content matches a particular string 
  expect(autofillname).to.equal(newName); 
 
  const newRecipient = await this.driver.findElement(By.className('warningtextalert')); 
  const warningText = await newRecipient.getText(); 
 
  // Assert the text content matches a particular string 
  expect(warningText).to.equal('STAY ALERT: You have never transferred to this phone number before. Please check and ensure that you have keyed in the phone number correctly.'); 
 
}); 
 
Then("I will see a red Submit button", async function () { 
  const submitButtonRed = await this.driver.findElement(By.className('pntsubmitbuttonER'))
  const backgroundColor = await submitButtonRed.getCssValue('background-color')
  const expectedColor = 'rgba(165, 3, 3, 1)'; 
  expect(backgroundColor).to.equal(expectedColor); 
}); 
 
When("I click the Submit button", async function () { 
  const submitButtonRed = await this.driver.findElement(By.className('pntsubmitbuttonER'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await submitButtonRed.click(); 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
}); 
 
Then("I will be directed to the Paynow to Mobile page", async function () { 
  const currentUrl = await this.driver.getCurrentUrl()
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/paynow')
}); 







/////////// PAYNOW TO MOBILE PAGE WARNING ////////////////////////////////////////////////////////////////////////////////////////////// 


Given("that I am on the Paynow to Mobile page", async function(){
  await navigateToPaynowToMobilePage(this.driver)
  const currentUrl = await this.driver.getCurrentUrl()
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/paynow')
})

Then("I should see a warning displayed above the blue box", async function (){ 
  const warning = await this.driver.findElement(By.className("WarningNoAmountPaynow"))
  const warningText = await warning.getText()
  expect(warningText).to.equal('STAY ALERT: You have never transferred to this phone number before. Please check and ensure that you have keyed in the phone number correctly.')
})
 
Then("I will see a red Next button", async function(){ 
  const redNextButton = await this.driver.findElement(By.id("submitrefund1"))
  const backgroundColor = await redNextButton.getCssValue('background-color')
  const expectedColor = 'rgba(165, 3, 3, 1)'
  expect(backgroundColor).to.equal(expectedColor)
})
 
When('I key in the transaction amount', async function (){ 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const transactionAmount = await this.driver.findElement(By.id('keyInAmtPaynow')) 
  await new Promise(resolve => setTimeout(resolve, 1000))
  transactionAmount.sendKeys("12") 
}) 
 
When("I click the Next button", async function (){ 
  const nextButton = await this.driver.findElement(By.id('submitrefund1'))
  await new Promise(resolve => setTimeout(resolve, 1000))
  await nextButton.click()
  await new Promise(resolve => setTimeout(resolve, 1000))
}); 
 
Then("I will be directed to the Swipe To Confirm page", async function (){ 
  const currentUrl = await this.driver.getCurrentUrl()
  assert.strictEqual(currentUrl, baseUrl + '/1/review')
}); 
 



/////////// SWIPE TO CONFIRM PAGE WARNING ////////////////////////////////////////////////////////////////////////////////////////////// 



Given("that I am on the Swipe to Confirm page", async function(){
  await navigateToSwipeToConfirmPage(this.driver)
  const currentUrl = await this.driver.getCurrentUrl()
  await new Promise(resolve => setTimeout(resolve, 1000))
  assert.strictEqual(currentUrl, baseUrl + '/1/review')
})

Then("I should see a red Swipe To Pay button", async function (){ 
  const redSwiper = await this.driver.findElement(By.className("BasedContainer"))
  const backgroundColor = await redSwiper.getCssValue('background-color')
 
  const expectedColor = 'rgba(165, 3, 3, 1)'
  expect(backgroundColor).to.equal(expectedColor)
}); 
 
 
When("I swipe the Swipe to Pay button", async function (){ 
  await new Promise(resolve => setTimeout(resolve, 1000))
  const inputSlider = await this.driver.findElement(By.id('inputslider'))
  inputSlider.sendKeys(100) 
  await new Promise(resolve => setTimeout(resolve, 1000))
}); 
   
 
Then("I will be directed to the Succesful page", async function(){ 
  const currentUrl = await this.driver.getCurrentUrl()
  assert.strictEqual(currentUrl, baseUrl + '/1/success')
});




/////////// VERIFY THAT NO WARNING SHOWS UP WHEN TRANSFERRING TO A MOBILE NUMBER I HAVE TRANSFERRED TO BEFORE ////////////////////////////////////////////////////////////////////////////////////////////// 


When(/^I enter the same number "([^"]*)"$/, async function (oldNumber) {
  console.log(oldNumber)
  const phoneNumberField = await this.driver.findElement(By.className('eightdigitER')) 
  phoneNumberField.sendKeys(oldNumber) 
 
  // Add a delay of 1 second before clicking the button 
  await new Promise(resolve => setTimeout(resolve, 1000))
 
  const clickAway = await this.driver.findElement(By.className("overall")) 
 
  // Add a delay of 1 second before clicking the button 
  await new Promise(resolve => setTimeout(resolve, 1000)); 
 
  // Click the button 
  await clickAway.click(); 
  await new Promise(resolve => setTimeout(resolve, 1000)); 
})

Then("I will see that there is no warning and the Next button is blue", async function(){
  const submitButtonRed = await this.driver.findElement(By.className('pntsubmitbuttonER'))
  const backgroundColor = await submitButtonRed.getCssValue('background-color')
  const expectedColor = 'rgba(6, 109, 175, 1)'
  expect(backgroundColor).to.equal(expectedColor)
})