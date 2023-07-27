const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');




//////////////// never trf to before  //////////////////////////////////////////////////////////////////////////////////////////////

Given("that I am on the Select Bank page", async function () {
  // Navigate to the login page
  await this.driver.get('http://localhost:3000');
  await this.driver.manage().window().setRect({ width: 393, height: 851 });
  const usernameField = await this.driver.findElement(By.id('username'))
  usernameField.sendKeys("junxiang")
  const passwordField = await this.driver.findElement(By.id('pin'))
  passwordField.sendKeys("password123")

  const loginButton = await this.driver.findElement(By.className('login'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await loginButton.click();
  await new Promise(resolve => setTimeout(resolve, 1000));

  const transferIcon = await this.driver.findElement(By.id('transfermoney'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await transferIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000));

  const selectBank = await this.driver.findElement(By.id('banks'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await selectBank.click();
  await new Promise(resolve => setTimeout(resolve, 1000));
});

When(/^I type "([^"]*)" into the search bar$/, async function(bankinput) {
  const searchField = await this.driver.findElement(By.className('Fuzsearchinput'));
  searchField.sendKeys(bankinput);
});

When("I search for a new bank", async function (){
  const back = await this.driver.findElement(By.id('backarrow'));
  await back.click()
  await new Promise(resolve => setTimeout(resolve, 1000));
  const selectBank = await this.driver.findElement(By.id('banks'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await selectBank.click();
  await new Promise(resolve => setTimeout(resolve, 1000));
});

Then("I should see the following banks displayed:", async function(dataTable) {
  const bankSuggestion = await this.driver.findElement(By.className('Fuzscrollview'));
  const bankItems = await bankSuggestion.findElements(By.className('Fuzbutton'));

  const displayedBanks = await Promise.all(
    bankItems.map((item) => item.getText())
  );

  const expectedBanks = dataTable.raw().map((row) => row[0].trim());
  expect(displayedBanks).to.deep.equal(expectedBanks);
});


