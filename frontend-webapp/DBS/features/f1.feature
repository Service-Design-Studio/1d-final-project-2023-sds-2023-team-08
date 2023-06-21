Feature: HomeToRecent

  Scenario: Opening the recent transactions page
    Given I am at the homepage
    When I clicked "Recent Transactions"
    Then I will be redirected to the Recent Transaction Page