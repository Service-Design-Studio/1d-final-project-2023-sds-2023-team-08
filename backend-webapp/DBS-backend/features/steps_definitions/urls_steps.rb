
Given("I have the following URLs to test:") do |table|
  @urls = table.hashes.map { |row| row['URL'] }
end

When("I send a GET request to each URL") do
  @responses = {}
  @urls.each do |url|
    # Send a GET request to the URL and store the response
    @responses[url] = HTTParty.get(url)
  end
end

Then("the response should be valid JSON") do
  @responses.each do |url, response|
    expect { JSON.parse(response.body) }.not_to raise_error
  end
end
