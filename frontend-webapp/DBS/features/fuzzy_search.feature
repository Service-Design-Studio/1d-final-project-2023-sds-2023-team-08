Feature: Fuzzy Search

    Scenario: Verify typing String 1 into search bar results in correct banks being filtered
        Given that I have logged in  
        Then I click on the Transfer Money icon       
        When I navigate to the Select Bank page
        When I type "COMMERZBANK AKTIENGESELLCHAFT" into the search bar
        Then I should see the following banks displayed:
            | COMMERZBANK AKTIENGESELLCHAFT |
        When I search for a new bank
        When I type "OCBC" into the search bar
        Then I should see the following banks displayed:
            | OVERSEA-CHINESE BANKING CORPORATION LTD    |
            | MEGA INTERNATIONAL COMMERCIAL BANK CO. LTD |
        When I search for a new bank
        When I type "BO" into the search bar
        Then I should see the following banks displayed:
            | BANK OF AMERICA, NA                  |
            | THE BANK OF TOKYO-MITSUBISHI UFJ LTD |
        When I search for a new bank
        When I type "bo" into the search bar
        Then I should see the following banks displayed:
            | BANK OF AMERICA, NA                  |
            | THE BANK OF TOKYO-MITSUBISHI UFJ LTD |
        
