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

Given('I am at the log in page', async function () {
    // Navigate to the login page
    await this.driver.get('http://localhost:3000');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });

//////////////// Logging in to my account //////////////////////////////////////////////////////////////////////////////////////////////

When('I click "LOGIN" after entering details', async function () {
    const usernameField = await this.driver.findElement(By.id('username'))
    usernameField.sendKeys("junxiang")
    const passwordField = await this.driver.findElement(By.id('pin'))
    passwordField.sendKeys("password123")

    const loginButton = await this.driver.findElement(By.className('login'));

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await loginButton.click();
  });
  
Then('feat2 I will be redirected to the homepage', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/4/home');
});

//////////////// Log in page fail //////////////////////////////////////////////////////////////////////////////////////////////


When('I click "LOGIN" without entering details', async function () {
  const loginButton = await this.driver.findElement(By.className('login'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await loginButton.click();
});

Then('I will see a warning to fill in the inputs', async function () {
  // Check if there is a warning
  const loginWarning = await this.driver.findElement(By.className('alert'));
  const warningText = await loginWarning.getText();

  // Assert the text content matches a particular string
  expect(warningText).to.equal('* Please fill in the required fields.');
});


//////////////// I am navigating to the PayNow page //////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the homepage', async function () {
    // Navigate to the login page
    await this.driver.get('http://localhost:3000/4/home');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });

  When('I click on the PayNow icon', async function () {
    const paynowIcon = await this.driver.findElement(By.id('paynowbutton'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await paynowIcon.click();
  });
  
Then('I will be redirected to the PayNow Recipient page', async function () {
    // Check if the current page is the home page
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/4/paynowrecipient');
});