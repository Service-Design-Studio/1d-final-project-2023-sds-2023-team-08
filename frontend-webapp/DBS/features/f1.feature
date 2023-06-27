Feature: Frontend Cucumber

  Scenario: Opening the recent transactions page
    Given I am at the homepage
    When I click on "Recent Transactions"
    Then I will be redirected to the Recent Transactions page

  Scenario: Filter button 0 filters correctly to "234-43941-0"
    Given I am at the Recent Trasanctions page and I want to filter by "234-43941-0"
    When I click on the filter button by account number "234-43941-0"
    Then I will see that only transactions under account "234-43941-0" are shown
    
  Scenario: Filter button 2 filters correctly to "539-23421-2"
    Given I am at the Recent Trasanctions page and I want to filter by "539-23421-2"
    When I click on the filter button by account number "539-23421-2"
    Then I will see that only transactions under account "539-23421-2" are shown

  Scenario: Clicking out of "234-43941-0" button 0 works
    Given I have filtered my transactions by "234-43941-0"
    When I click on the greyed-out filter button by account number "234-43941-0"
    Then I will see that all my transactions from both accounts will be shown and "234-43941-0" button is white

  Scenario: Clicking out of "539-23421-2" button 2 works
    Given I have filtered my transactions by "539-23421-2"
    When I click on the greyed-out filter button by account number "539-23421-2"
    Then I will see that all my transactions from both accounts will be shown and "539-23421-2" button is white

  Scenario: Going back to home page from recent transactions
    Given I am at the Recent Transactions page
    When I click on the back arrow
    Then I will be brought back to the home page
