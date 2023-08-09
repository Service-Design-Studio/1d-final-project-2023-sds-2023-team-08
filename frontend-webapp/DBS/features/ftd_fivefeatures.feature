# requires recipient that has been transferred to before
Feature: Making a Paynow Transfer dispute -> wrong account > click redirect link > vertexai > full refund

  Scenario: Raising a FTD
    Given I have made a Paynow Transfer of '$12' to the wrong account right after paying
    When I click on "Made a wrong transfer?" at the review page
    Then I will be redirected to a "Raise A Fund Transfer Dispute" page
    And it will reflect '-12.00' as the amount transferred

  Scenario: Filling up FTD
    Given I am on the Raise FTD Form Page
    When I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will receive a warning to select a valid reason
    When I check the box for "Transfer to Wrong Account"
    And I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will see a warning that the comments field cannot be blank
    And I will key in my comments for recipient

  Scenario: Using the VertexAI
    Given I have filled up the FTD Form Page but want to make my comments more professional
    When I click on the star button on the top-right corner of the textbox
    Then I will see loading prompt with the words "AI is Working"
    And I will see another prompt saying "Comment is cleaned!"
    Then I will see a different comment instead of "manual comment"
    And the comments should not exceed "250" characters

  Scenario: 

Feature: Making a Paynow Transfer dispute -> wrong amount > recent transactions page > vertexai > FTD status page > partial refund












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
      
#                       ======================================

  Scenario: Review FTD
      Given I am on the Review FTD page
      Then I should see "2" as the Correct Amount to Transfer
      And I should see my number "88888881" as the disputee's contact details
      And I should see the AI generated comments 
      #anyway to test this?? If not pls change


  


    And I click the "Raise Fund Transfer Dispute button" to confirm
    Then I will be redirected to the review page
    And the review will reflect my comments to the recipient
    When I confirm to raise dispute by clicking the red button
    Then I will be redirected to the successfully raised FTD page
