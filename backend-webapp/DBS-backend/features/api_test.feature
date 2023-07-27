Feature: API Test

Scenario: Verify URL 1 returns expected JSON
    Given that I send a GET request to "http://127.0.0.1:8080/users/393/home"
    Then the response should be a JSON
    And the JSON response should contain '{"user":"junxiang","account":[{"account type":"DBS Savings Account","account number":"539-23421-2","total amount":10064,"account id":1},{"account type":"DBS Multiplier Account","account number":"539-23421-0","total amount":12035,"account id":2}]}'

Scenario: Verify URL 2 returns expected JSON
    Given that I send a GET request to "http://127.0.0.1:8080/users/393/all_transactions"
    Then the response should be a JSON
    And the JSON response should contain '[{"date":"Sat, 17 Jun 2023","transaction":{"transaction name":"PayNow Transfer from: wei xuan","transaction type":"FAST / PayNow Transfer","account number":"539-23421-2","total amount":20}},{"date":"Fri, 16 Jun 2023","transaction":{"transaction name":"PayNow Transfer from: brighton","transaction type":"FAST / PayNow Transfer","account number":"539-23421-2","total amount":15}},{"date":"Thu, 15 Jun 2023","transaction":{"transaction name":"PayNow Transfer TO: vinny","transaction type":"FAST / PayNow Transfer","account number":"539-23421-2","total amount":-5}}]'

Scenario: Accessing an Invalid URL
    Given that I send a GET request to "http://127.0.0.1:8080/users/393/home10"
    Then I should receive a 404 error

Scenario: Keying in an invalid user ID
    Given that I send a GET request to "http://127.0.0.1:8080/users/32/home"
    Then I should receive a 404 error
    And the response body should contain "User Not Found"