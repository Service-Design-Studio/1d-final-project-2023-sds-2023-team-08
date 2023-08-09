# spec/requests/api_spec.rb

require 'rails_helper'

RSpec.describe 'API', type: :request do
  describe 'POST /users/login' do
    it 'logings user' do
      post '/users/login', params: { username: "junxiang", pin:"password123"}
      expect(response).to have_http_status(:success)
      # Add more expectations as needed
    end
  end
end
