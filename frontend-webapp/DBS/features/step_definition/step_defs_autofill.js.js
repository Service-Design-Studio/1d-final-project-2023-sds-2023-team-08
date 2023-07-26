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

Given("that I am on the Enter Recipient's Details page", async function () {
  // Navigate to the login page
  await this.driver.get('http://localhost:3000');
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
  await new Promise(resolve => setTimeout(resolve, 2000));
  const transferIcon = await this.driver.findElement(By.id('transfermoney'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await transferIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000));

});


When(/^I have copied the following text to my clipboard:"([^"]*)"$/, async function (expectedNumber){
  const sourceField = this.driver.findElement(By.className('bankaccdetails'))
  sourceField.sendKeys(expectedNumber)
  await sourceField.sendKeys(Key.COMMAND + "c");

  //await sourceField.sendKeys(this.driver.Key.chord(this.driver.Key.CONTROL, 'c'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await sourceField.clear();
  await new Promise(resolve => setTimeout(resolve, 1000));
});



When("I tap on the Enter Account No. text field", async function (){
  const accplaceholder = await this.driver.findElement(By.className('formcontainer2'));
  await accplaceholder.click();
});

Then(/^the Enter Account No. text field should give the pop-up for me to automatically fill it with "([^"]*)"$/, async function(expectedNumber){
  const autofill = await this.driver.findElement(By.className("autofillcontainer"));
  await autofill.click();
  const numberPlaceholder = await this.driver.findElement(By.className('bankaccdetails'));
  const accNumber = numberPlaceholder.getText();
  expect(accNumber).to.equal(expectedNumber)
});