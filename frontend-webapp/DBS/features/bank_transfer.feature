Feature: Bank Transfer

    Scenario: Initiate Bank Transfer
        Given that I have logged in
        When I click on the Transfer Money icon
        Then I am directed to the Enter Recipient Details page

    @onEnterRecipientDetailsPage
    Scenario: Filling up Enter Recipient Details Page
        Given I am on the Enter Recipient Details page
        When I enter the Recipient's name as "valencia"
        
        When I select into the fuzzy search page
        And I type "OCBC" into the search bar
        Then I should see the following banks displayed:
            | OVERSEA-CHINESE BANKING CORPORATION LTD    |
            | MEGA INTERNATIONAL COMMERCIAL BANK CO. LTD |
        And I can select the bank "OVERSEA-CHINESE BANKING CORPORATION LTD"

        When I have copied the account number "342-454-350" to my clipboard
        And I tap on the Enter Account No. text field
        Then the Enter Account No. text field should give the pop-up for me to automatically fill it with "342454350"
        And I click the Next button after pasting
        Then I am directed to the Bank Transfer page

    @onBankTransferPage
    Scenario: Enter Transfer Details
          Given I am on the Bank Transfer page
          Then I should see "valencia" as the recipient name
          And I should see "342454350" as the recipient account number
          When I enter "42" as the amount of dollars to transfer
          And I enter "Chicken Rice" as the comments for recipient
          And I click the Next button to go to the verification page
          Then I am directed to the Review Bank Account page

    @onReviewBankAccountPage
    Scenario: Verify Transfer Details
        Given I am on the Review Bank Account page
        Then I should see "42.00" as the amount to be transacted 
        And it should reflect "valencia" as my recipient's name
        And it should reflect "342454350" as my recipient's bank number
        And it should reflect "Chicken Rice" as my comments

    @onReviewBankAccountPage
    Scenario: Confirm Bank Transfer
        Given I am on the Review Bank Account page
        When I click the Next button to confirm the bank transfer
        Then I am directed to the Successful page

    @onSuccessfulBankTransferPage
    Scenario: Verify Successful Bank Transfer
        Given I am on the Successful page
        Then I should see "valencia" as the confirmed recipient name
        And I should see "342454350" as the confirmed recipient account number
        And I should see "Chicken Rice" as the confirmed comments


