Feature: Log in page fail

  Background: Logging in to my account
    Given I am at the log in page
    When I click "LOGIN" without entering details
    Then I will see a warning to fill in the inputs
    When I click "LOGIN" after entering details
    Then I will be redirected to the homepage

  Scenario: I am navigating to the PayNow page
    Given I am at the homepage
    When I click on the PayNow icon
    Then I will be redirected to the PayNow Recipient page

  Scenario: I am keying in the PayNow Recipient details fail
    Given I am at the PayNow Recipient page
    When I click "SUBMIT" before keying in a valid recipient
    Then I will see a warning to key in a valid phone number 

  Scenario: Filing a FTD after making a PayNow Transfer
    Given I am at the PayNow Recipient page
    When I key in my desired recipient's details
    And I tap away to the empty space
    Then the recipient's PayNow nickname will show up automatically in the field below
    And I can click "SUBMIT"

    And I will be redirected to the PayNow transaction page
    When I have keyed in the amount I want to PayNow and I click "NEXT"
    Then I will be redirected to the Review Transfer page
    And it will reflect my bank account number
    And it will reflect my recipient's phone number
    And the comments is "Paynow Transfer"

    When I click "NEXT"
    Then I will be brought to a successful PayNow transfer page
    And it will reflect my bank account number
    And it will reflect my recipient's phone number
    And the comments is "Paynow Transfer"

    When I realise that I have sent to the wrong person and click on "Made a wrong transfer?"
    Then I will be redirected to a "Raise A Fund Transfer Dispute" page
    And it will reflect the amount transferred

    When I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will receive a warning to select a valid reason

    When I check the box for "Transfer to Wrong Account"
    And I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will see a warning that the comments field cannot be blank

    When I have keyed in my comments for recipient
    And I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will be redirected to the review page
    And the review will reflect my comments to the recipient
    When I confirm to raise dispute by clicking the red button
    Then I will be redirected to the successfully raised FTD page

    When I press the x button
    Then I will be redirected to the homepage

  Scenario: Check if my FTD has been logged successfully
    Given I am at the homepage
    And I navigated to the Recent Transactions page
    When I click onto the FTD status tab
    Then I should see the FTD page
    And I should see that the status is "AWAITING ACTION" of the transaction I made with amount "-12.00"


