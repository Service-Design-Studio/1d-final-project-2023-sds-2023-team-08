require 'net/http'
require 'json'
class DisputesController < ApplicationController
  

  
  
# get 'users/:id/new_disputes_received', to: 'disputes#new_disputes_received'
  def new_disputes_received()
    id=params[:id]
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/disputes/number-disputes-filed")

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)
    
    
    render json: response.body
    
  end

  #post 'users/:id/transactions/:id/withdraw_dispute', to: 'disputes#withdraw_dispute'
  def withdraw_dispute()

    id=params[:id]
    transaction_id=params[:transactions_id]

    raw=request.raw_post  
    parsed_data = JSON.parse(raw)
  
    # Add a new field to the parsed hash
    parsed_data["dispute_action"] = "withdraw"
  
      # Convert the updated hash back to a JSON string
    updated_raw = JSON.generate(parsed_data)
  
      # Now you have the updated JSON string in `updated_raw`
      
    puts updated_raw
     
    
    

    # Assuming you have the URL for the GET request
    url = URI('https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/csrf_token')

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)

    body=JSON.parse(response.body)
    csrf_token = body["csrfToken"]

    #url and http setup
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions/#{transaction_id}/dispute/status")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    
    
    #create post req
    request = Net::HTTP::Put.new(url)
    request['Content-Type'] = 'application/json'
    request['X-CSRF-Token'] = csrf_token
    request.body = updated_raw

    #send POST and get response
    response = http.request(request)
    

    #return response
    render json: response.body

  end 
  #post 'users/:id/transactions/:id/refute_dispute', to: 'disputes#refute_dispute'
  def refute_dispute()
    id=params[:id]
    transaction_id=params[:transactions_id]

    raw=request.raw_post
    parsed_data = JSON.parse(raw)
  
    # Add a new field to the parsed hash
    parsed_data["dispute_action"] = "refute"
  
      # Convert the updated hash back to a JSON string
    updated_raw = JSON.generate(parsed_data)

    

    # Assuming you have the URL for the GET request
    url = URI('https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/csrf_token')

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)

    body=JSON.parse(response.body)
    csrf_token = body["csrfToken"]

    #url and http setup
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions/#{transaction_id}/dispute/status")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    
    
    #create post req
    request = Net::HTTP::Put.new(url)
    request['Content-Type'] = 'application/json'
    request['X-CSRF-Token'] = csrf_token
    request.body = updated_raw

    #send POST and get response
    response = http.request(request)
    

    #return response
    render json: response.body
    
  end 
   
  
  
  #post 'users/:id/transactions/:id/resolve_dispute', to: 'disputes#resolve_dispute'
  def resolve_dispute()
    id=params[:id]
    transaction_id=params[:transactions_id]

    raw=request.raw_post
    puts raw
    parsed_data = JSON.parse(raw)
  
    # Add a new field to the parsed hash
    parsed_data["dispute_action"] = "resolve"
  
      # Convert the updated hash back to a JSON string
    updated_raw = JSON.generate(parsed_data)
    
    

    # Assuming you have the URL for the GET request
    url = URI('https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/csrf_token')

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)

    body=JSON.parse(response.body)
    csrf_token = body["csrfToken"]

    #url and http setup
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions/#{transaction_id}/dispute/status")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    
    
    #create post req
    request = Net::HTTP::Put.new(url)
    request['Content-Type'] = 'application/json'
    request['X-CSRF-Token'] = csrf_token
    request.body = updated_raw

    #send POST and get response
    response = http.request(request)
    

    #return response
    render json: response.body
    
    
  end
  #get 'users/:id/transactions/:id/refund_details', to: 'disputes#refund_details'
 def refund_details  #assuming intrabank
  
    
  id=params[:id]
  transaction_id=params[:transactions_id]
  # Assuming you have the URL for the GET request
  url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions/#{transaction_id}/dispute/refund-details")

  # Create a new Net::HTTP object with SSL enabled (if needed)
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  # Set the read timeout in seconds (e.g., 10 seconds)
  http.read_timeout = 10

  # Send the GET request (no request body needed for GET requests)
  response = http.get(url)
  
  
  render json: response.body

  end





  # GET user/:id/transaction_detail_for_disputes_involving_user
  def transaction_detail_for_disputes_involving_user
    id=params[:id]
    
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/user/#{id}/disputes/disputes-with-transaction-details")
  
    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10
  
    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)
    
    
    render json: response.body
  end
  


 

  # POST /users/:id/transactions/:transactions_id/disputes
  def create

    id=params[:user_id]
    transaction_id=params[:transaction_id]

    raw=request.raw_post
    puts raw
    
    

    # Assuming you have the URL for the GET request
    url = URI('https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/csrf_token')

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)

    body=JSON.parse(response.body)
    csrf_token = body["csrfToken"]

    #url and http setup
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions/#{transaction_id}/disputes")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    
    
    #create post req
    request = Net::HTTP::Post.new(url)
    request['Content-Type'] = 'application/json'
    request['X-CSRF-Token'] = csrf_token
    request.body = raw

    #send POST and get response
    response = http.request(request)
    

    #return response
    render json: response.body
  end

  #post 'disputes/generate_dispute_comment',to: 'disputes#generate_dispute_comment'
  def generate_dispute_comment
   

    raw=request.raw_post
 
    # Assuming you have the URL for the GET request


    #url and http setup
    url = URI("https://hello-zf2sgw655q-uc.a.run.app/generate_text")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    
    
    #create post req
    request = Net::HTTP::Post.new(url)
    request['Content-Type'] = 'application/json'
    
    request.body = raw

    #send POST and get response
    begin
    response = http.request(request)
    body=JSON.parse(response.body)
    data={
      success:true,
      result:body["generated_text"]
    }
  rescue => e
    data={
      success:false,
      result:"error occured"
    }
  end

    #return response
    render json: data
  end



end
