const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');


Before(async function () {
  // Set up the Selenium WebDriver
  this.driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  // Quit the Selenium WebDriver after each scenario
  await this.driver.quit();
});


//////////////// never trf to before  //////////////////////////////////////////////////////////////////////////////////////////////

Given('that I am on the Paynow Contact page', async function () {
  // Navigate to the login page
  await this.driver.get(baseUrl);
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
  const usernameField = await this.driver.findElement(By.id('username'))
  usernameField.sendKeys("junxiang")
  const passwordField = await this.driver.findElement(By.id('pin'))
  passwordField.sendKeys("password123")

  const loginButton = await this.driver.findElement(By.className('login'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await loginButton.click();

  //click paynow
  await new Promise(resolve => setTimeout(resolve, 1000));
  const paynowIcon = await this.driver.findElement(By.id('paynowbutton'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await paynowIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000));

});

When("I enter a mobile number that I have never transferred to before", async function () {
  const phoneNumberField = await this.driver.findElement(By.className('eightdigitER'))
  phoneNumberField.sendKeys("88888887")

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  const clickAway = await this.driver.findElement(By.className("overall"))

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await clickAway.click();
  await new Promise(resolve => setTimeout(resolve, 1000));


});


Then("a warning will be displayed under the name", async function () {
  const recipientName = await this.driver.findElement(By.className('recipientnameER'));
  const autofillname = await recipientName.getText();

  // Assert the text content matches a particular string
  expect(autofillname).to.equal('wx');

  const newRecipient = await this.driver.findElement(By.className('warningtextalert'));
  const warningText = await newRecipient.getText();

  // Assert the text content matches a particular string
  expect(warningText).to.equal('STAY ALERT: You have never transferred to this phone number before. Please check and ensure that you have keyed in the phone number correctly.');

});

Then("I will see a red Submit button", async function () {
  const submitButtonRed = await this.driver.findElement(By.className('pntsubmitbuttonER'));
  const backgroundColor = await submitButtonRed.getCssValue('background-color');

  const expectedColor = 'rgba(165, 3, 3, 1)';
  expect(backgroundColor).to.equal(expectedColor);
});

When("I click the Submit button", async function () {
  const submitButtonRed = await this.driver.findElement(By.className('pntsubmitbuttonER'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await submitButtonRed.click();
  await new Promise(resolve => setTimeout(resolve, 1000));

});

Then("I will be directed to the Paynow Warning page", async function () {
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, baseUrl + '/4/paynow');
});

Then("a warning will be displayed above the blue box", async function (){
  const warning = await this.driver.findElement(By.className("WarningNoAmountPaynow"));
  const warningText = await warning.getText();

  // Assert the text content matches a particular string
  expect(warningText).to.equal('STAY ALERT: You have never transferred to this phone number before. Please check and ensure that you have keyed in the phone number correctly.');
});

Then("I will see a red Next button", async function(){
  const redNextButton = await this.driver.findElement(By.id("submitrefund1"));
  const backgroundColor = await redNextButton.getCssValue('background-color');

  const expectedColor = 'rgba(165, 3, 3, 1)';
  expect(backgroundColor).to.equal(expectedColor);
});

When("I click the Next button", async function (){

  await new Promise(resolve => setTimeout(resolve, 1000));
  // debugger;
  const transactionAmount = await this.driver.findElement(By.id('keyinamt'))
  await new Promise(resolve => setTimeout(resolve, 1000));

  transactionAmount.sendKeys("12")

  const nextButton = await this.driver.findElement(By.id('submitrefund1'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await nextButton.click();

  await new Promise(resolve => setTimeout(resolve, 1000));
});

Then("I will be directed to the Swipe To Confirm page", async function (){
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, baseUrl + '/4/review');
});

Then("I will see a red Swipe To Pay button", async function (){
  const redSwiper = await this.driver.findElement(By.className("BasedContainer"));
  const backgroundColor = await redSwiper.getCssValue('background-color');

  const expectedColor = 'rgba(165, 3, 3, 1)';
  expect(backgroundColor).to.equal(expectedColor);
});


///////HELP NEEDED HERE HELP HELP HELP
When("I swipe the Swipe to Pay button", async function (){

});

Then("I will be directed to the Succesful page", async function(){
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, baseUrl + '/4/success');
});



