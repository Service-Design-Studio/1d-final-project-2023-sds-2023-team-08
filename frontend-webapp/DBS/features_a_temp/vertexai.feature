Feature: Vertex AI

        # Everything before is making a PayNow Trf as usual
    
    Scenario: Raising a FTD
        Given that I am on the Successful Transfer Page
        When I click on the "Click Now" words
        Then I am directed to the Raise FTD page

    Scenario: Reason for FTD
        Given I am on the Raise FTD page
        When I click on the "Wrong Amount" radio button
        Then I will see a drop down of more content
        And I will have to fill up the details of "Correct Amount of Transaction" and "Your Phone Number"
        
    Scenario: FTD Detail Warnings
        Given that I enter a value for the "Correct Amount of Transaction"
        When I enter a value more than the actual transaction
        Then I will get warning that says "Correct Amount should not exceed transaction amount"

    Scenario: Entering comments
        Given that I write a comment for the recipient
        When I click on the star button on the top-right corner of the textbox
        Then I will see loading prompt with the words "AI is Working"
        And I will see another prompt saying "Comment is cleaned!"
        Then I will see a different comment compared to the original comment
        And the comments should not exceed "250" characters

#                       ======================================

    Scenario: Review FTD
        Given I am on the Review FTD page
        Then I should see "2" as the Correct Amount to Transfer
        And I should see my number "88888881" as the disputee's contact details
        And I should see the AI generated comments 
        #anyway to test this?? If not pls change

