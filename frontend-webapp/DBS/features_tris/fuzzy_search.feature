Feature: Fuzzy Search

    Scenario: Verify typing String 1 into search bar results in correct banks being filtered
        Given that I am on the Select Bank page
        When that I type "COMMERZBANK AKTIENGESELLCHAFT" into the search bar
        Then I should see the following banks displayed:
            | COMMERZBANK AKTIENGESELLCHAFT |

    Scenario: Verify typing String 2 into search bar results in correct banks being filtered
        Given that I am on the Select Bank page
        When that I type "OCBC" into the search bar
        Then I should see the following banks displayed:
            | OVERSEA-CHINESE BANKING CORPORATION LTD    |
            | MEGA INTERNATIONAL COMMERCIAL BANK CO. LTD |

    Scenario: Verify typing String 3 into search bar results in correct banks being filtered
        Given that I am on the Select Bank page
        When that I type "BO" into the search bar
        Then I should see the following banks displayed:
            | BANK OF AMERICA, NA                  |
            | THE BANK OF TOKYO-MITSUBISHI UFJ LTD |

    Scenario: Verify typing String 4 into search bar results in correct banks being filtered
        Given that I am on the Select Bank page
        When that I type "bo" into the search bar
        Then I should see the following banks displayed:
            | BANK OF AMERICA, NA                  |
            | THE BANK OF TOKYO-MITSUBISHI UFJ LTD |
        
