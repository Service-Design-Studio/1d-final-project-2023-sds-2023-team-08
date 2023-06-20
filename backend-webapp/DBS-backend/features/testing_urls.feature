Feature: URL Testing
  Scenario: Check JSON response for specific URLs
    Given I have the following URLs to test:
      | URL                             |
      | https://example.com/endpoint1   |
      | https://example.com/endpoint2   |
      | https://example.com/endpoint3   |
      | https://example.com/endpoint4   |
    When I send a GET request to each URL
    Then the response should be valid JSON

