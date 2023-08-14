Feature: Paynow Warning

    @newPayee
    Scenario: Verify that a warning is shown when submitting no input
        Given that I am on the Paynow Contact Page
        When I click "SUBMIT" before keying in a valid recipient
        Then I will see a warning to key in a valid phone number 
    
    @newPayee
    Scenario: Verify that a warning is shown when transferring to a new mobile number
        Given that I am on the Paynow Contact Page
        When I enter a mobile number "88888884" that I have never transferred to before
        Then a warning will be displayed under the name "tris"
        And I will see a red Submit button
        When I click the Submit button
        Then I will be directed to the Paynow to Mobile page
      
    @newPayee
    Scenario: Paynow to Mobile page Warning
        Given that I am on the Paynow to Mobile page
        Then I should see a warning displayed above the blue box
        And I will see a red Next button
        When I key in the transaction amount
        When I click the Next button
        Then I will be directed to the Swipe To Confirm page

    @newPayee
    Scenario: Swipe to Confirm page Warning
        Given that I am on the Swipe to Confirm page
        Then I should see a red Swipe To Pay button
        When I swipe the Swipe to Pay button
        Then I will be directed to the Succesful page

    @oldPayee
    Scenario: Verify that no warning shows up when transferring to a mobile number I have transferred to before
        Given that I am on the Paynow Contact Page
        And I enter the same number "88888884"
        Then I will see that there is no warning and the Next button is blue


