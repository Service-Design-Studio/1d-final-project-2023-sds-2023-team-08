const assert = require('assert');
const { Given, When, Then, Before, After } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');

Before(async function () {
  // Set up the Selenium WebDriver
  this.driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  // Quit the Selenium WebDriver after each scenario
  await this.driver.quit();
});

Given('I am at the homepage', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000');
});

When('I clicked "Recent Transactions"', async function () {
  // Implementation to click the "Get Started" button
  const recenttransaction = await this.driver.findElement(By.className('recenttransaction'));
  await recenttransaction.click();
});

Then('I will be redirected to the Recent Transaction Page', async function () {
  // Check if the current page is the Sign Up Page
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'http://localhost:3001/recenttransaction');
});
