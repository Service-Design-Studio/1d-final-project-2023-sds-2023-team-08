const { Before, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { navigateTo, getCurrentRoute } = require('./navigationutils');
import { render, fireEvent } from '@testing-library/react';
import Homescreen from '../../views/HomeScreen';

Given('I am on the homepage', async function () {
  // Implement code to navigate to the homepage
  try {await navigateTo('/')}
  catch (error) {
        console.error('Error navigating to the homepage:', error);
        throw error;
  }
});

When('I click on the "Recent Transactions" button', function () {
  // Implement code to click on the specified link
  const { getByText } = render(<Homescreen />);
  const buttonElement = getByText('Recent Transactions');
  fireEvent.click(buttonElement);
});

Then('I should be on the "RecentTransactions" page', async function () {
  // Implement code to get the current route and compare it to the expected route
  const currentRoute = await getCurrentRoute();
  expect(currentRoute).to.equal(expectedRoute);
});


/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////
Given('I am in the {string} route', function (route) {
        //code that turns the above phrase into concrete actions
        this.setRoute(route);
});


When('I click on the {string} button', function (buttonText) {
        //code to turn phrase above into concrete actions
        const button = this.getButtonByText(buttonText);
        this.click(button);
});

Then('I expect to be on the {string} route', function (route) {
        //code to turn phrase above into concrete actions
        //console.log(x)
        if (this.route !== route) {
                throw new Error(
                        "Expected route: " + route +
                        "\nReceived route: " + this.route
                );
        }
});

//run npx cucumber-js

*/