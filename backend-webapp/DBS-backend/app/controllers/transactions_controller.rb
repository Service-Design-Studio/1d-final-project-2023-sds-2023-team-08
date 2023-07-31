require_relative '../helpers/application_helper'
class TransactionsController < ApplicationController
  


  # GET users/:id/transactions/1 or /transactions/1.json
  def show
    

    id=params[:id]
    uid=params[:user_id]
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{uid}/transactions/#{id}")

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)
    
    
    render json: response.body

  end





  # POST /transactions or /transactions.json
  def create

    id=params[:user_id]
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
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions")
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


end
