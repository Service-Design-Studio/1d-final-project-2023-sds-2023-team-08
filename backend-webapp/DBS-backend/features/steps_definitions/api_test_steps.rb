require 'httparty'
require 'json'

Given('that I send a GET request to {string}') do |url|
    @response = HTTParty.get(url)
end

Then('the response should be a JSON') do
    expect(@response.headers['content-type']).to include 'application/json'
end

Then('the JSON response should contain {string}') do |expected_value|
    expect(JSON.parse(expected_value) == (@response.body))
end

Then('I should receive a 404 error') do
    expect(@response.code).to eq(404)
end

Then('the response body should contain {string}') do |expected_body|
    expect(@response.body).to include(expected_body)
end


