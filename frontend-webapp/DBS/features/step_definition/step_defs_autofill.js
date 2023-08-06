const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');
const readline = require('readline');



async function pauseTest() {
  // Log a message to prompt the tester to manually continue the test
  console.log('Test execution paused. Type "S" and press "Enter" to continue...');

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
        console.log('Invalid input. Type "S" and press "Enter" to continue...');
      }
    };
    rl.on('line', onData);
  });
}


//////////////// never trf to before  //////////////////////////////////////////////////////////////////////////////////////////////

Given("that I am on the Enter Recipient's Details page", async function () {
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
  const transferIcon = await this.driver.findElement(By.id('transfermoney'));

  // Add a delay of 1 second before clicking the button
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Click the button
  await transferIcon.click();
  await new Promise(resolve => setTimeout(resolve, 1000));

});

/////HELP NEEDED HERE HELP HELP HELP HELP
When(/^I have copied the following text to my clipboard:"([^"]*)"$/, async function (bankNumber) {

  await pauseTest(); 
  //copy the bank number
  const accField = await this.driver.findElement(By.id("accno"));
  await accField.click(); 
  await pauseTest(); 
  //press allow in permission alert
  await new Promise(resolve => setTimeout(resolve, 1000));
  await accField.click();
  await new Promise(resolve => setTimeout(resolve, 1000));
});

Then(/^the Enter Account No. text field should give the pop-up for me to automatically fill it with "([^"]*)"$/, async function(cleanedNumber){
  await new Promise(resolve => setTimeout(resolve, 1000));
  const autofillpop = await this.driver.findElement(By.className("autofillcontainer"));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await autofillpop.click();
  await new Promise(resolve => setTimeout(resolve, 1000));
  const filled = await this.driver.findElement(By.id('accno'));
  const inputValue = await filled.getAttribute('value');
  console.log('Input Element Value:', inputValue);
  expect(inputValue).to.equal(cleanedNumber);
});