Given("the following transactions:") do |table|
    @transactions = table.hashes
end
  
When("I check the datetime of each transaction") do
    @current_date = Date.today
    @date_7_days_ago = @current_date.prev_day(7)
end

Then("each transaction should be within 7 days") do
    @transactions.each do |transaction|
        @transaction_date = Date.parse(transaction['datetime'])
        expect(@transaction_date >= @date_7_days_ago)
    end
end
  