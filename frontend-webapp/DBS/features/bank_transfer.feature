Feature: Bank Transfer

    Scenario: Making a Bank Transfer
        Given that I have entered the Recipient's name as "Vinny"
        And I select "OVERSEA-CHINESE BANKING CORPORATION LTD" as the bank
        And I copy and paste "860-345-34" as the account no.
        And I click the Next button
        Then I will be directed to the Bank Transfer page
        
        And I should see my name as the sender name 
        And I should see my account number as the sender account number
        And I should see "Vinny" as the recipient name
        And I should see "860-345-34" as the recipient account number
        When I enter "42" as the amount of dollars to transfer
        And I enter "Transfer" as the comments for recipient
        And I click the Next button
        Then I will be directed to the Review Bank Acc page

        And I should see "42" as the amount of dollars to transfer
        And I should see my name as the sender name
        And I should see my account number as the sender account number
        And I should see "Vinny" as the recipient name
        And I should see "860-345-34" as the recipient account number
        And I should see "Transfer" as the comments
        And I click the Next button
        Then I will be directed to the Successful page

        And I should see my name as the sender name
        And I should see my account number as the sender account number
        And I should see "Vinny" as the recipient name
        And I should see "860-345-34" as the recipient account number
        And I should see "Transfer" as the comments
        



