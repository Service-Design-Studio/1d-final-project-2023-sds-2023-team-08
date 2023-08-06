const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');



Given('wx I am at the log in page', async function () {
    // Navigate to the login page
    await this.driver.get(baseUrl);
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });

//////////////// Logging in to my account //////////////////////////////////////////////////////////////////////////////////////////////

When('wx I click "LOGIN" after entering details', async function () {
    const usernameField = await this.driver.findElement(By.id('username'))
    usernameField.sendKeys("wei xuan")
    const passwordField = await this.driver.findElement(By.id('pin'))
    passwordField.sendKeys("password123")

    const loginButton = await this.driver.findElement(By.className('login'));

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await loginButton.click();
  });
  
Then('wx I will be redirected to the homepage', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/5/home');
});

//////////////// Log in page fail //////////////////////////////////////////////////////////////////////////////////////////////


When('wx I click "LOGIN" without entering details', async function () {
  const loginButton = await this.driver.findElement(By.className('login'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Click the button
  await loginButton.click();
});

Then('wx I will see a warning to fill in the inputs', async function () {
  // Check if there is a warning
  const loginWarning = await this.driver.findElement(By.className('alert'));
  const warningText = await loginWarning.getText();

  // Assert the text content matches a particular string
  expect(warningText).to.equal('* Please fill in the required fields.');
});


//////////////// I am at Home and I have a notification //////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at Home page', async function () {
    // Navigate to the login page
    await this.driver.get(baseUrl + '/5/home');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });

  When('I click on Resolve Now', async function () {
    const resolveNowButton = await this.driver.findElement(By.className('buttonText'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await resolveNowButton.click();
  });
  
Then('I will be redirected to the FTD Page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl+'/5/FTDtransactionsall');
});
//////////////// I am at the Fund Dispute page //////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the Fund Dispute page', async function () {
    // Navigate to the Fund Dispute Page
    await this.driver.get(baseUrl + '/5/FTDtransactionsall');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });


  When('I click on Action Required as the Recipient', async function () {
    const actionRequiredButton = await this.driver.findElement(By.className('statustext'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await actionRequiredButton.click();
  });
  
Then('I will be redirected to the Dispute details Page', async function () {
    // Check if the current page is the Fund Dispute Page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes(baseUrl + '/5'));
});

Then("it will reflect the amount being disputed", async function () {
    const disputeamt = await this.driver.findElement(By.className('moneydisputein'));
    const amt = await disputeamt.getText();
  
    // Assert the text content matches a particular string
    expect(amt).to.equal('12.00')

});

Then("it will reflect the comments made to me", async function () {
    const commentsbox = await this.driver.findElement(By.id('commentstome'));
    const commentsreview = await commentsbox.getText();
  
    // Assert the text content matches a particular string
    expect(commentsreview).to.equal('Sorry! Supposed to send to someone else')
});
//////////////// I am feeling nice and I will return the money //////////////////////////////////////////////////////////////////////////////////////////////

  When('I click on the Yes - Refund button', async function () {
    const refundButton = await this.driver.findElement(By.className('refundbutton'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Click the button
    await refundButton.click();

  });
  
Then('I will be redirected to the Refund Dispute page', async function () {
    // Check if the current page is Refund Dispute page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes(baseUrl + '/5/refunddispute'));
});


//////////////// I am reviewing the fund transfer //////////////////////////////////////////////////////////////////////////////////////////////

  When('I click on the Submit button', async function () {
    const submitButton = await this.driver.findElement(By.id('submitrefund1'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await submitButton.click();
  });
  
Then('wx I will be redirected to the Review Transfer page', async function () {
    // Check if the current page is the home page
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/5/review');
});


//////////////// I am sure that the details are correct //////////////////////////////////////////////////////////////////////////////////////////////

  When('I click on Transfer Now', async function () {
    const transferNowButton = await this.driver.findElement(By.className('TransferNow'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await transferNowButton.click();

  });
  
Then('I will be redirected to the Successful transfer page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl+ '/5/success');
});



//////////////// I have refund the money and am going back to the home page //////////////////////////////////////////////////////////////////////////////////////////////

  When('I click on Exit button', async function () {
    const exitButton = await this.driver.findElement(By.className('successtxtransparent'));
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Click the button
    await exitButton.click();
  });
  
Then('I will be redirected to the Home page', async function () {
    // Check if the current page is the review transfer page
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/5/home');
});