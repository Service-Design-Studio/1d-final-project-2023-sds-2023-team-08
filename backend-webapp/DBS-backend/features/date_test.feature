Feature: Date Test

Scenario: Verify transaction datetime is within 7 days
    Given the following transactions:
        | id | transaction_name   | transaction_type        | recipient_account_number | datetime                      | amount | created_at                    | updated_at                    | account_id |
        | 1  | PayNow Transfer    | FAST / PayNow Transfer  | 539-23421-5              | 2023-06-15 00:00:00 UTC+00:00 | 5      | 2023-06-19 18:58:55.442241000 | 2023-06-19 18:58:55.442241000 | 1          |
        | 2  | PayNow Transfer    | FAST / PayNow Transfer  | 539-23421-2              | 2023-06-17 00:00:00 UTC+00:00 | 20     | 2023-06-19 18:58:55.452048000 | 2023-06-19 18:58:55.452048000 | 3          |
        | 3  | PayNow Transfer    | FAST / PayNow Transfer  | 539-23421-2              | 2023-06-16 00:00:00 UTC+00:00 | 15     | 2023-06-19 18:58:55.461394000 | 2023-06-19 18:58:55.461394000 | 5          |
        | 4  | Account Transfer   | Account Transfer        | 539-23421-7              | 2023-06-12 00:00:00 UTC+00:00 | 7      | 2023-06-19 18:58:55.474935000 | 2023-06-19 18:58:55.474935000 | 2          |
    
    When I check the datetime of each transaction
    Then each transaction should be within 7 days