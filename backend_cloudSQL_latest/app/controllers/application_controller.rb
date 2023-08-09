class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token 
    before_action :set_cors_headers

    def set_cors_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
      headers['Access-Control-Max-Age'] = '86400' # Optional: Specify the maximum time for the browser to cache the preflight response (in seconds)
    end
end
