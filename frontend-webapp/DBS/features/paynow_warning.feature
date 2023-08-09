#COMPLETED
Feature: Payniw Warning

    Scenario: Verify that a warning is shown when transferring to a new mobile number
        Given that I am on the Paynow Contact page
        When I enter a mobile number "88888886" that I have never transferred to before
        Then a warning will be displayed under the name "vin"
        And I will see a red Submit button
        When I click the Submit button
        Then I will be directed to the Paynow to Mobile page
      
    @onPaynowToMobilePage
    Scenario: Paynow to Mobile page Warning
        Given that I am on the Paynow to Mobile page
        Then I should see a warning displayed above the blue box
        And I will see a red Next button
        When I key in the transaction amount
        When I click the Next button
        Then I will be directed to the Swipe To Confirm page

    @onSwipeToConfirmPage
    Scenario: Swipe to Confirm page Warning
        Given that I am on the Swipe to Confirm page
        Then I should see a red Swipe To Pay button
        When I swipe the Swipe to Pay button
        Then I will be directed to the Succesful page

    @onHomePage
    Scenario: Verify that no warning shows up when transferring to a mobile number I have transferred to before
        Given I have transferred to "vinny" which is someone I have transferred to before
        When I am on the Paynow Contact Page
        And I enter the same number "88888886"
        Then I will see that there is no warning and the Next button is blue


