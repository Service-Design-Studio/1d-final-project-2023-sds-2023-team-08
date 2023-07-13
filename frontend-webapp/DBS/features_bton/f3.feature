Feature: Log in page fail

  Background: Logging in to my account
    Given I am at the log in page
    When I click "LOGIN" without entering details
    Then I will see a warning to fill in the inputs
    When I click "LOGIN" after entering details
    Then feat2 I will be redirected to the homepage

  Scenario: I am at Home and I have a notification
    Given I am at Home page
    When I click on Resolve Now
    Then I will be redirected to the FTD Page

  Scenario: I am at the Fund Dispute page
    Given I am at the Fund Dispute page
    When I click on Action Required as the Recipient
    Then I will be redirected to the Dispute details Page
    And it will reflect the amount being disputed
    And it will reflect the comments made to me
    When I click on the Yes - Refund button
    Then I will be redirected to the Refund Dispute page
    When I click on the Submit button
    Then I will be redirected to the Review Transfer page
    When I click on Transfer Now
    Then I will be redirected to the Successful transfer page
    When I click on Exit button
    Then I will be redirected to the Home page