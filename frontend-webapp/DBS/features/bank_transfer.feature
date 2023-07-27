Feature: Bank Transfer

    Scenario: Making a Bank Transfer
        Given that I have logged in
        Then I click on the Transfer Money icon       
        And I have entered the Recipient's name as "Vinny"
        Then I navigate to the Select Bank page
        When I type "OVERSEA-CHINESE BANKING CORPORATION LTD" into the search bar
        And I select "OVERSEA-CHINESE BANKING CORPORATION LTD" as the intended bank
        When I have copied the following text to my clipboard:"860-345-34"
        Then the Enter Account No. text field should give the pop-up for me to automatically fill it with "86034534"
        And I click the Next button at the Enter Recipient Detail's page
        Then I will be directed to the Bank Transfer page
        
        And I should see "Vinny" as the recipient name
        And I should see "86034534" as the recipient account number
        When I enter "42" as the amount of dollars to transfer
        And I enter "Chicken Rice" as the comments for recipient
        And I click the Next button
        Then I will be directed to the Review Bank Acc page

        And I should see "42.00" as the amount of dollars I want to transfer
        And it will reflect "Vinny" as my recipient's name
        And it will reflect "86034534" as my recipient's bank number
        And it will reflect "Chicken Rice" as my comments
        And I click the Next button to confirm the bank transfer
        Then I will be directed to the Successful page
        
        And I should see "Vinny" as the confirmed recipient name
        And I should see "86034534" as the confirmed recipient account number
        And I should see "Chicken Rice" as the confirmed comments
        



