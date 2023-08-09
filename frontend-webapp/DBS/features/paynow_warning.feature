Feature: Paynow Warning

    Scenario: Verify that a warning is shown when transferring to a new mobile number
        Given that I am on the Paynow Contact page
        When I enter a mobile number that I have never transferred to before
        Then a warning will be displayed under the name
        And I will see a red Submit button
        When I click the Submit button
        Then I will be directed to the Paynow Warning page
        And a warning will be displayed above the blue box
        And I will see a red Next button
        When I key in the transaction amount
        When I click the Next button
        Then I will be directed to the Swipe To Confirm page
        And I will see a red Swipe To Pay button
        When I swipe the Swipe to Pay button
        Then I will be directed to the Succesful page