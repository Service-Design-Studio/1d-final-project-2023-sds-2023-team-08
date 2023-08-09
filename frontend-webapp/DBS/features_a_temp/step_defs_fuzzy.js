const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');
const readline = require('readline');


// async function pauseTest() {
//   // Log a message to prompt the tester to manually continue the test
//   console.log('Test execution paused. Type "S" and press "Enter" to continue...');

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) => {
//     const onData = (input) => {
//       const trimmedInput = input.trim().toLowerCase();
//       if (trimmedInput === 's') {
//         rl.off('line', onData); // Remove the event listener
//         rl.close(); // Close the readline interface
//         resolve();
//       } else {
//         console.log('Invalid input. Type "S" and press "Enter" to continue...');
//       }
//     };
//     rl.on('line', onData);
//   });
// }




// //////////////// never trf to before  //////////////////////////////////////////////////////////////////////////////////////////////

// When("I navigate to the Select Bank page", async function () {
//   // Navigate to the login page
//   const selectBank = await this.driver.findElement(By.id('banks'));
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   await selectBank.click();
//   await new Promise(resolve => setTimeout(resolve, 1000));
// });

// // When(/^I type "([^"]*)" into the search bar$/, async function(bankinput) {
// //   const searchField = await this.driver.findElement(By.className('Fuzsearchinput'));
// //   searchField.sendKeys(bankinput);
// // });

// When("I search for a new bank", async function (){
//   const back = await this.driver.findElement(By.id('backarrow'));
//   await back.click()
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const selectBank = await this.driver.findElement(By.id('banks'));
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   await selectBank.click();
//   await new Promise(resolve => setTimeout(resolve, 1000));
// });




