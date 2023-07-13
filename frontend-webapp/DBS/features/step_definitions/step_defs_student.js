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


//////////////// I am navigating to the PayNow page //////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the homepage', async function () {
    await this.driver.get(baseUrl + '/4/home');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });

When('I click on the PayNow icon', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const paynowIcon = await this.driver.findElement(By.id('paynowbutton'));
  
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await paynowIcon.click();
  });
  
Then('I will be redirected to the PayNow Recipient page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));

    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/4/paynowrecipient');
});

//////////////// I am keying in the PayNow Recipient details fail //////////////////////////////////////////////////////////////////////////////////////////////

Given('I am at the PayNow Recipient page', async function () {
    await this.driver.get(baseUrl + '/4/paynowrecipient');
    await this.driver.manage().window().setRect({ width: 393, height: 851 });
  });

When('I click "SUBMIT" before keying in a valid recipient', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const loginButton = await this.driver.findElement(By.id('pntsubmitbutton'));
    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Click the button
    await loginButton.click();
  });

Then('I will see a warning to key in a valid phone number', async function () {
    // Check if there is a warning
    await new Promise(resolve => setTimeout(resolve, 1000));

    const noRecipientWarning = await this.driver.findElement(By.className('WarningMessagePaynow'));
    const warningText = await noRecipientWarning.getText();
  
    // Assert the text content matches a particular string
    expect(warningText).to.equal('* Please Enter A Phone Number');
});



//////////////// Filing a FTD after making a PayNow Transfer //////////////////////////////////////////////////////////////////////////////////////////////

When("I key in my desired recipient's details", async function () {
    const phoneNumberField = await this.driver.findElement(By.className('eightdigitER'))
    phoneNumberField.sendKeys("88888887")

    const submitERbutton = await this.driver.findElement(By.id('pntsubmitbutton'));

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await submitERbutton.click();
  });


When("I tap away to the empty space", async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const clickAway = await this.driver.findElement(By.className("overall"))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await clickAway.click();
});

Then("the recipient's PayNow nickname will show up automatically in the field below", async function () {
    const recipientName = await this.driver.findElement(By.className('recipientnameER'));
    const autofillname = await recipientName.getText();
  
    // Assert the text content matches a particular string
    expect(autofillname).to.equal('wx');
  });

When('I can click "SUBMIT"', async function() {
    const submitButton = await this.driver.findElement(By.className("pntsubmitER"))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await submitButton.click();
});

Then('I will be redirected to the PayNow transaction page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/4/paynow');
});



When('I have keyed in the amount I want to PayNow and I click "NEXT"', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // debugger;
    const transactionAmount = await this.driver.findElement(By.id('keyinamt'))
    console.log(transactionAmount)
    await new Promise(resolve => setTimeout(resolve, 1000));

    transactionAmount.sendKeys("12")

    const nextButton = await this.driver.findElement(By.id('submitrefund1'));

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await nextButton.click();
  });

Then('I will be redirected to the Review Transfer page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/4/review');
});

Then('it will reflect my bank account number', async function () {
    const senderDeet = await this.driver.findElement(By.id('banknumber'));
    const bankNumber = await senderDeet.getText();
  
    // Assert the text content matches a particular string
    expect(bankNumber).to.equal('539-23421-2');
  });

Then("it will reflect my recipient's phone number", async function () {
    const receiverDeet = await this.driver.findElement(By.id('phonenumber'));
    const phoneNumber = await receiverDeet.getText();
  
    // Assert the text content matches a particular string
    expect(phoneNumber).to.equal('88888887');
  });

Then('the comments is "Paynow Transfer"', async function () {
    const deets = await this.driver.findElement(By.id('yourcomments'));
    const comments = await deets.getText();
  
    // Assert the text content matches a particular string
    expect(comments).to.equal('Paynow Transfer');
  });

When('I click "NEXT"', async function () {
    const nextButton = await this.driver.findElement(By.className('TransferPayNow'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await nextButton.click();
});

Then('I will be brought to a successful PayNow transfer page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, baseUrl + '/4/success');
});


When('I realise that I have sent to the wrong person and click on "Made a wrong transfer?"', async function () {
    const wrongTransferLink = await this.driver.findElement(By.className('successtxclicklink'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await wrongTransferLink.click();
});

Then('I will be redirected to a "Raise A Fund Transfer Dispute" page', async function () {
    // Check if the current page is the home page
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes(baseUrl +'/4/raiseFTD/'));

});

Then("it will reflect the amount transferred", async function () {
    const disputeamt = await this.driver.findElement(By.className('moneytext2spend'));
    const amt = await disputeamt.getText();
  
    // Assert the text content matches a particular string
    expect(amt).to.equal('-12.00')

});

//////////////// Raise FTD  //////////////////////////////////////////////////////////////////////////////////////////////




When('I click the "Raise Fund Transfer Dispute button" to confirm', async function () {
    const confirmbutton = await this.driver.findElement(By.className('RaiseFTDButton'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await confirmbutton.click();
});

Then('I will receive a warning to select a valid reason', async function () {
    const noReasonWarning = await this.driver.findElement(By.className('flashmessagetext'));
    const warningText = await noReasonWarning.getText();
  
    // Assert the text content matches a particular string
    expect(warningText).to.equal('* PLEASE SELECT A REASON');

});

When('I check the box for "Transfer to Wrong Account"', async function () {
    const checkbox = await this.driver.findElement(By.id('transferWrongAccountCheckbox'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await checkbox.click();
});


Then('I will see a warning that the comments field cannot be blank', async function () {
    const noReasonWarning = await this.driver.findElement(By.className('flashmessagetext'));
    const warningText = await noReasonWarning.getText();
  
    // Assert the text content matches a particular string
    expect(warningText).to.equal('* COMMENTS FIELD CANNOT BE LEFT BLANK');
});


When("I have keyed in my comments for recipient", async function () {
    const comments = await this.driver.findElement(By.className('commentsTextBox'))
    comments.sendKeys("Sorry! Supposed to send to someone else")
    await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('I will be redirected to the review page', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes( baseUrl +'/4/review'));
});


Then("the review will reflect my comments to the recipient", async function () {
    const commentsbox = await this.driver.findElement(By.className('rereboxtextcontentbottom'));
    const commentsreview = await commentsbox.getText();
  
    // Assert the text content matches a particular string
    expect(commentsreview).to.equal('Sorry! Supposed to send to someone else')
});

When('I confirm to raise dispute by clicking the red button', async function () {
    const submitButton = await this.driver.findElement(By.className('SubmitButton'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await submitButton.click();
});

Then('I will be redirected to the successfully raised FTD page', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes(baseUrl +'/4/success'));
});

When('I press the x button', async function () {
    const crossButtom = await this.driver.findElement(By.className('successtxtransparent'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await crossButtom.click();
});




//////////////// Check if my FTD has been logged successfully //////////////////////////////////////////////////////////////////////////////////////////////


When('I navigated to the Recent Transactions page', async function () {
    const rcnttxntab = await this.driver.findElement(By.className('recenttransaction'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await rcnttxntab.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes(baseUrl +'/4/recenttransaction'));
});

When('I click onto the FTD status tab', async function () {
    const ftdtab = await this.driver.findElement(By.className('ftdtext'))

    // Add a delay of 1 second before clicking the button
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Click the button
    await ftdtab.click();
});

Then('I should see the FTD page', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const currentUrl = await this.driver.getCurrentUrl();
    assert.ok(currentUrl.includes(baseUrl +'/4/FTDtransactionsall'));
});


Then(/^I should see that the status is "([^"]*)" of the transaction I made with amount "([^"]*)"$/, async function (expectedStat, expectedAmt) {
    const container = await this.driver.findElements(By.id("txncontainer"));
    for (const transaction of container) {
        const money = await transaction.findElement(By.className("moneyout2"));
        const amount = await money.getText();
        const status = await transaction.findElement(By.className("statustext"));
        const statusi = await status.getText();
        if (amount.includes(expectedAmt) && statusi.includes(expectedStat)) {
            //console.log('good job')
            await transaction.click()
            await new Promise(resolve => setTimeout(resolve, 2000));
            break;
        }
    }

});



