const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { useEffect } = require('react');
const { expect } = require('chai');


And(/^I select "([^"]*)" as the bank$/, async function(bankinput) {
    Given("that I am on the Select Bank page")
    When(`I type "${bankinput}" into the search bar`)
    // TODO: STEP DEF to select the bankinput from the dropdown list
})

And(/^I copy and paste "([^"]*)" as the account no.$/, async function(accountno) {
    /* TODO:
        1. When (`I have copied the following text to my clipboard: "${accountno}"`)
        2. STEP DEF to paste contents of pop-up into account no. text field
    */ 
})

And(/^I click the Next button$/, async function() {
    // TODO: STEP DEF to click Next button
})

Then(/^I will be directed to the Bank Transfer page$/, async function() {
    // TODO: STEP DEF to check that I am on the Bank Transfer page
})

And(/^I should see my name as the sender name$/, async function(){
    // TODO: STEP DEF to check sender name = user's name
})

And(/^I should see my account number as the sender account number$/, async function() {
    // TODO: STEP DEF to check sender account number = user's account number
})

And(/^I should see "([^"]*)" as the recipient name$/, async function(name) {
    // TODO: STEP DEF to check recipient name = name
})

And(/^I should see "([^"]*)" as the recipient account number$/, async function(accountno) {
    // TODO: STEP DEF to check recipient account number = accountno
})

When(/^I enter "([^"]*)" as the amount of dollars to transfer$/, async function(amount) {
    // TODO: STEP DEF to set amount to be transferred to amount
})

And(/^I enter "([^"]*)" as the comments for recipient$/, async function(comments) {
    // TODO: STEP DEF to set comments
})

Then(/^I will be directed to the Review Bank Acc page$/, async function() {
    // TODO: STEP DEF to check that I am on the Review Bank Acc page
})

And(/^I should see "([^"]*)" as the amount of dollars to transfer$/, async function(amount) {
    // TODO: STEP DEF to check that the amount to be transferred = amount
})

// TODO: Add more STEP DEFS