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
    await this.driver.get(baseUrl);
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });


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
  
Then('I will be redirected to the homepage', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + "/4/home");
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

Given('I am at the homepage', async function () {
    await this.driver.get(baseUrl + '/4/home');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });


//////////////// OPENING RECENT TRANSACTIONS PAGE //////////////////////////////////////////////////////////////////////////////////////////////


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
  assert.strictEqual(currentUrl, baseUrl + '/4/recenttransaction');
});



/////////////////// FILTER BUTTON 0 ///////////////////////////////////////////////////////////////////////////////////////////////////////


When(/^I click on the filter button by account number "([^"]*)"$/, async function (filternumber) { 

    const containers = await this.driver.findElements(By.name("filtercontainer"));
        console.log('found the filter buttons')
        for (const filterbutton of containers) {
            console.log('iterating')
            await new Promise(resolve => setTimeout(resolve, 2000));
            const filteraccnumb = await filterbutton.findElement(By.id("accountnumbers"));
            console.log('found acc element')
            await new Promise(resolve => setTimeout(resolve, 2000));
            const bankaccnumfilter = await filteraccnumb.getText();
            if (bankaccnumfilter.includes(filternumber) ){
                console.log('good job')
                await filterbutton.click()
                console.log('press filter button')

                await new Promise(resolve => setTimeout(resolve, 2000));
                break;
            }
        }

});


Then(/^I will see that the transactions are filtered by account "([^"]*)"$/, async function (accountnumber) {
  // Check if the current page is the Sign Up Page
  await new Promise(resolve => setTimeout(resolve, 2000));
  const currentUrl = await this.driver.getCurrentUrl();
  assert.strictEqual(currentUrl, baseUrl + '/4/recenttransaction/' + accountnumber);
});


Then(/^the transaction details tally with account "([^"]*)"$/, async function (accountnumber) {

  const paragraphElement = await this.driver.findElement(By.id('transactiondetails'));
  const actualtext = await paragraphElement.getText(By.id('account'));
  const accno = actualtext.split('\n')[0];
  assert.strictEqual(accno, accountnumber)
});


/////////////////// FILTER BUTTON 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the Recent Trasanctions page and I want to filter by "539-23421-2"', async function () {
  // Navigate to the homepage
  await this.driver.get('http://localhost:3000/4/recenttransaction');
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
  assert.strictEqual(currentUrl, 'http://localhost:3000/4/recenttransaction/539-23421-2');
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
  await this.driver.get('http://localhost:3000/4/recenttransaction/234-43941-0');
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
  assert.strictEqual(currentUrl, 'http://localhost:3000/4/recenttransaction');
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
  assert.strictEqual(currentUrl, 'http://localhost:3000/4/recenttransaction');
});



/////////////////// BACK TO HOME PAGE  ///////////////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the Recent Transactions page', async function () {
  // Navigate to the homepage
  const RT = await this.driver.get('http://localhost:3000/4/recenttransaction');
  const RT_0 = await this.driver.get('http://localhost:3000/4/recenttransaction/234-43941-0');
  const RT_2 = await this.driver.get('http://localhost:3000/4/recenttransaction/539-23421-2');
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
  assert.strictEqual(currentUrl, 'http://localhost:3000/4/home');
});




module.exports = {
  Given,
  When,
  Then,
  Before,
  After,
};
