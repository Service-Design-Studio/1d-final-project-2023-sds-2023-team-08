Feature: HomeToRecent

  Scenario: Opening the recent transactions page
    Given I am in the home page
    When I click on the "Recent transactions" button
    Then I will be see the "RecentTransactions" page of account xxx

  Scenario: Filtering recent transactions by account number
    Given I am in the Recent Transactions tab
    When I click on the filter buttons
    Then I will see the recent transactions page of account yyy
  
  Scenario: Toggling to Insights
    Given I am in the home page
    When I click on the Insights tab
    Then I will see the insights page

