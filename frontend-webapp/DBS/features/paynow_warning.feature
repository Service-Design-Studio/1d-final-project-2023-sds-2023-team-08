Feature: Paynow Transfer

    # Scenario: Verify that a warning is shown when transferring to a new mobile number
    #     Given that I am on the Paynow Contact page
    #     When I enter a mobile number that I have never transferred to before
    #     Then a warning will be displayed under the name
    #     And I will see a red Submit button
    #     When I click the Submit button
    #     Then I will be directed to the Paynow Warning page
    #     And a warning will be displayed above the blue box
    #     And I will see a red Next button
    #     When I key in the transaction amount
    #     When I click the Next button
    #     Then I will be directed to the Swipe To Confirm page
    #     And I will see a red Swipe To Pay button
    #     When I swipe the Swipe to Pay button
    #     Then I will be directed to the Succesful page
    
    Scenario: Initiate Paynow Transfer
        Given that I have logged in
        When I click on the Paynow icon
        Then I am directed to the Paynow Recipient Details page
    
    Scenario: Paynow Recipient Details page Warning
        Given that I am on the Paynow Recipient Details page
        When I enter the number "88888884"
        Then I should see Recipient's Nickname as "tris"
        And a warning will be displayed under the name
        And I will see a red Submit button
        When I click the Submit button
        Then I will be directed to the Paynow to Mobile page
        
    Scenario: Paynow to Mobile page Warning
        Given that I am on the Paynow to Mobile page
        Then I should see a warning displayed above the blue box
        And I will see a red Next button
        When I key in the transaction amount
        When I click the Next button
        Then I will be directed to the Swipe To Confirm page
    
    Scenario: Swipe to Confirm page Warning
        Given that I am on the Swipe to Confirm page
        Then I should see a red Swipe To Pay button
        When I swipe the Swipe to Pay button
        Then I will be directed to the Succesful page

