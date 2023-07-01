const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');

Before(async function () {
  // Set up the Selenium WebDriver
  this.driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  // Quit the Selenium WebDriver after each scenario
  await this.driver.quit();
});


//////////////// OPENING RECENT TRANSACTIONS PAGE //////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the homepage', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When('I click on "Recent Transactions"', async function () {
  const recentTransactionButton = await this.driver.findElement(By.id('transaction'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await recentTransactionButton.click();
});

Then('I will be redirected to the Recent Transactions page', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3000/recenttransaction');
});



/////////////////// FILTER BUTTON 0 ///////////////////////////////////////////////////////////////////////////////////////////////////////


Given('I am at the Recent Trasanctions page and I want to filter by "234-43941-0"', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000/recenttransaction');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When('I click on the filter button by account number "234-43941-0"', async function () {
  const recentTransactionButton = await this.driver.findElement(By.id('234-43941-0'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await recentTransactionButton.click();
});

Then('I will see that the transactions are filtered by account "234-43941-0"', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3000/recenttransaction/234-43941-0');
});


Then('the transaction details tally with account "234-43941-0"', async function () {

  const paragraphElement = await this.driver.findElement(By.id('transactiondetails'));
  const actualtext = await paragraphElement.getText(By.id('account'));
  const accountnumber = actualtext.split('\n')[0];
  assert.strictEqual(accountnumber, "234-43941-0")
});


/////////////////// FILTER BUTTON 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the Recent Trasanctions page and I want to filter by "539-23421-2"', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000/recenttransaction');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When('I click on the filter button by account number "539-23421-2"', async function () {
  const recentTransactionButton = await this.driver.findElement(By.id('539-23421-2'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await recentTransactionButton.click();
});

Then('I will see that the transactions are filtered by account "539-23421-2"', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3000/recenttransaction/539-23421-2');
});


Then('the transaction details tally with account "539-23421-2"', async function () {

  const paragraphElement = await this.driver.findElement(By.id('transactiondetails'));
  const actualtext = await paragraphElement.getText(By.id('account'));
  const accountnumber = actualtext.split('\n')[0];
  assert.strictEqual(accountnumber, "539-23421-2")
});



/////////////////// UNCLICKING FILTER BUTTON 0 ///////////////////////////////////////////////////////////////////////////////////////////////////////

Given('I have filtered my transactions by "234-43941-0"', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000/recenttransaction/234-43941-0');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When('I click on the greyed-out filter button by account number "234-43941-0"', async function () {
  const recentTransactionButton = await this.driver.findElement(By.id('234-43941-0'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await recentTransactionButton.click();
});

Then('I will see that all my transactions from both accounts will be shown and "234-43941-0" button is white', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3000/recenttransaction');
});



/////////////////// UNCLICKING FILTER BUTTON 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////

Given('I have filtered my transactions by "539-23421-2"', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000/recenttransaction/539-23421-2');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When('I click on the greyed-out filter button by account number "539-23421-2"', async function () {
  const recentTransactionButton = await this.driver.findElement(By.id('539-23421-2'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await recentTransactionButton.click();
});

Then('I will see that all my transactions from both accounts will be shown and "539-23421-2" button is white', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3000/recenttransaction');
});



/////////////////// BACK TO HOME PAGE  ///////////////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the Recent Transactions page', async function () {
  // Navigate to the homepage
  const RT = await this.driver.get('http://localhost:3000/recenttransaction');
  const RT_0 = await this.driver.get('http://localhost:3000/recenttransaction/234-43941-0');
  const RT_2 = await this.driver.get('http://localhost:3000/recenttransaction/539-23421-2');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
});

When('I click on the back arrow', async function () {
  const recentTransactionButton = await this.driver.findElement(By.id('backarrow'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await recentTransactionButton.click();
});

Then('I will be brought back to the home page', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3000/');
});




module.exports = {
  Given,
  When,
  Then,
  Before,
  After,
};
