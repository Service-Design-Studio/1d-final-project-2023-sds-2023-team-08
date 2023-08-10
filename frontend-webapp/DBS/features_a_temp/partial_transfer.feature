Feature: Partial Transfer

    #Raise FTD process as per the rest, must select Wrong Amount
    
    Scenario: Recieved FTD
        Given that I have logged in
        And I am the Homescreen Page
        And I will see the words "You have 1 Fund Transfer Dispute" at the top
        When I click on "Resolve Now"
        Then I will be directed to the Fund Dispute page
    
    Scenario: Resolving FTD
        Given I am on the Fund Dispute page
        When I click on the "Action Required" button
        Then I will be directed to the Dispute details page

    Scenario: Dispute details
        Given I am on the Dispute details page
        And I should see the "Reason for Transfer Dispute" as "Transfer Wrong Amount"
        And I should see the "partial refund" as the action to take
        When I click ont he "Yes - Refund" button
        Then I will be directed to the Refund Dispute page

    Scenario: Verify Refund Details
        Given I am on the Refund Dispute page
        And I should see the amount to transfer is a the actual amount the disputee wanted to Transfer
        And I should not be able to click on anywhere else except the "Submit" button
        When I click on "Submit"
        Then I will be directed to Review Transfer page
    
    Scenario: Review Refund details
        Given that I am on the Review Transfer page
        And I should see amount to refund is "{/$amount}"
        And I should reflect "junxiang" as the disputee name
        When I click on the "Transfer Now" button
        Then I will be directed to the Successful Tranfer page