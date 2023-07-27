// const assert = require('assert');
// const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { useEffect } = require('react');
// const { expect } = require('chai');

// async function pauseTest() {
//   // Log a message to prompt the tester to manually continue the test
//   console.log('Test execution paused. Please continue the test manually...');
//   // Return a promise that resolves when the tester continues (press "Enter")
//   return new Promise(resolve => {
//     process.stdin.resume();
//     process.stdin.once('data', () => {
//       process.stdin.pause();
//       resolve();
//     });
//   });
// }
// //////////////// never trf to before  //////////////////////////////////////////////////////////////////////////////////////////////

// Given("that I am on the Enter Recipient's Details page", async function () {
//   // Navigate to the login page
//   await this.driver.get('http://localhost:3000');
//   await this.driver.manage().window().setRect({ width: 393, height: 851 });
//   const usernameField = await this.driver.findElement(By.id('username'))
//   usernameField.sendKeys("junxiang")
//   const passwordField = await this.driver.findElement(By.id('pin'))
//   passwordField.sendKeys("password123")

//   const loginButton = await this.driver.findElement(By.className('login'));

//   // Add a delay of 1 second before clicking the button
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   // Click the button
//   await loginButton.click();

//   //click paynow
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const transferIcon = await this.driver.findElement(By.id('transfermoney'));

//   // Add a delay of 1 second before clicking the button
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   // Click the button
//   await transferIcon.click();
//   await new Promise(resolve => setTimeout(resolve, 1000));

// });

// /////HELP NEEDED HERE HELP HELP HELP HELP
// When('I have copied the following text to my clipboard:"860-345-34"', async function () {
//   const recipientNameField = await this.driver.findElement(By.id("ERname"))  
//   recipientNameField.sendKeys("my name")
//   // Add a delay of 1 second before clicking the button

//   await new Promise(resolve => setTimeout(resolve, 1000));

//   const accField = await this.driver.findElement(By.id("accno"));
//   await accField.click();  

//   await pauseTest();

//   await accField.click();
//   accField.sendKeys('86034534')
// });

// Then('the Enter Account No. text field should give the pop-up for me to automatically fill it with "86034534"', async function(){
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const recipientNameField = await this.driver.findElement(By.id("ERname"))
//   const name = recipientNameField.getText();
//   expect(name).to.equal('88888887')
// })