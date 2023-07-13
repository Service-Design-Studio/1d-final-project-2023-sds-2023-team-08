Feature: Log in page fail

  Background: Logging in to my account
    Given I am at the log in page
    When I click "LOGIN" without entering details
    Then I will see a warning to fill in the inputs
    When I click "LOGIN" after entering details
    Then feat2 I will be redirected to the homepage

  Scenario: I am navigating to the PayNow page
    Given I am at the homepage
    When I click on the PayNow icon
    Then I will be redirected to the PayNow Recipient page


