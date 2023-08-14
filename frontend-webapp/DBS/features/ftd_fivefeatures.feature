Feature: Making a Paynow Transfer dispute, 5 STATUS of ftd, vertexAI, Dashboard, responding to FTDs

  Scenario: Raising a FTD through redirect
    Given I have made a Paynow Transfer of '$12'
    When I click on "Made a wrong transfer?" at the review page
    Then I will be redirected to a "Raise A Fund Transfer Dispute" page
    And it will reflect '-12.00' as the amount transferred

  Scenario: Filling up FTD
    Given I am on the Raise FTD Form Page
    When I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will receive a warning to select a valid reason
    When I check the box for "Transfer to Wrong Account"
    And I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will see a warning that the comments field cannot be blank
    And I will key in my comments for recipient

  Scenario: Using the VertexAI - wrong account
    Given I have filled up the FTD Form Page but want to make my comments more professional
    When I click on the star button on the top-right corner of the textbox
    Then I will see loading prompt with the words "AI is Working"
    And I will see another prompt saying "Comment is cleaned!"
    Then I will see a different comment instead of "Sorry! Supposed to send to someone else"
    And the comments should not exceed "250" characters
    Then I submit the FTD





  Scenario: FTD page through Dashboard
    Given my dashboard on my homepage has alerted me to a FTD raised against me
    When I click on "RESOLVE NOW" on the dashboard
    Then I will be redirected to the FTD Page
 

  Scenario: Refund fully
    Given I am logged into 'Tristan' and I am at the FTD Page
    When I click on the FTD raised from "junxiang" with amount "12.00" and status button "ACTION REQUIRED"
    Then I am brought to the dispute details page which reflects "12.00" as the amount being disputed
    When I click on the Yes - Refund button
    Then I will be redirected to the Refund Dispute page which shows "12.00" as the amount to refund
    When I click on the Submit button
    Then I will be redirected to the Review Transfer page
    When I click on Transfer Now
    Then I will be redirected to the Successful transfer page showing "12.00" as the refund amount




  Scenario: Raising a FTD through recent transaction tab
    Given I have made a Paynow Transfer of '$12'
    When I navigated to the Recent Transactions page
    And I click into the transaction of "-12.00" to "tristan"
    Then it will reflect '-12.00' as the amount transferred
    When I click the "Raise a Fund Dispute button" to proceed
    Then I will be directed to the FTD Form page
    And I check the box for "Transfer Wrong Amount"
    Then I can indicate that "4.00" is the correct amount, and my phone number is "88888888"


  Scenario: Using the VertexAI - wrong amount
    Given I have filled up the FTD Form Page but want my comments to reflect the correct amount of '4.00' and to contact me at '88888888' professionally
    When I click on the star button on the top-right corner of the textbox
    Then I will see loading prompt with the words "AI is Working"
    And I will see another prompt saying "Comment is cleaned!"
    Then I will see a different comment instead of "Sorry! Sent the wrong amount, please refund excess"
    And the comments should not exceed "250" characters




  Scenario: FTD page through recent transactions
    Given I have logged in to tristan's account
    When I navigate to the Recent Transactions page to access the FTD
    And I click into the FTD tab
    Then I will be redirected to the FTD Page


  Scenario: Partial Transfer screen
    Given I have a partial transfer FTD raised against me
    When I click on "RESOLVE NOW" on the dashboard
    Then I will be redirected to the FTD Page
    When I click on the FTD raised from "junxiang" with amount "12.00" and status button "ACTION REQUIRED"
    Then I am brought to the dispute details page which reflects "12.00" as the amount being disputed
    And The Correct Amount of Transaction is indicated to be '4'
    When I click on the Yes - Refund button
    Then I will be redirected to the Refund Dispute page which shows "8.00" as the amount to refund
    When I click on the Submit button
    Then I will be redirected to the Review Transfer page
    When I click on Transfer Now
    Then I will be redirected to the Successful transfer page showing "8.00" as the refund amount





  Scenario: Refuting dispute
    Given I am logged into 'Tristan' and I am at the FTD Page
    When I click on the FTD raised from "junxiang" with amount "12.00" and status button "ACTION REQUIRED"
    Then I am brought to the dispute details page which reflects "12.00" as the amount being disputed
    When I click on the No - Refute button
    Then I will be redirected to the Refute Dispute page
    When I input my reason for refuting
    And I click on the Submit button to submit refute
    Then I will be redirected to the Review Transfer page
    When I click on REFUTE DISPUTE to confirm
    Then I will be redirected to the Successful Refute page