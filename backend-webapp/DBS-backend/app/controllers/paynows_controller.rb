require 'net/http'
require 'json'
class PaynowsController < ApplicationController
  





  #'users/:id/paynows/search_by_phone/:phonenumber', to: 'paynows#search_by_phone'
  def search_by_phone

    #1.get current user phone given user id
    #2.go paynow db get acc numbner current user
    #3. go acc db get acc type current user
    #4.go paynow db get other party's acc num and nickname by phone
    
    #paynow db: phone,accnum,bank,nickname, no associations
    
    id=params[:id]
    phone=params[:phonenumber]
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/paynows/#{phone}/details")
  
    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10
  
    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)
    
    
    render json: response.body
    
    
    

   
    
  end




end
