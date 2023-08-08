require 'net/http'
require 'json'
class UsersController < ApplicationController
  
  

  
  def home


    id=params[:id]
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/home")

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)
    
    
    render json: response.body
    


  end


  def all_transactions

    id=params[:id]
    
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/transactions/all-transactions-7-days")

    # Create a new Net::HTTP object with SSL enabled (if needed)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    # Set the read timeout in seconds (e.g., 10 seconds)
    http.read_timeout = 10

    # Send the GET request (no request body needed for GET requests)
    response = http.get(url)
    
    
    render json: response.body


  end

    # POST /login
  def login
    
    
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
    url = URI('https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/login')
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

  # GET 'users/:id/default_acc'
  def default_acc
    
    id=params[:id]
    # Assuming you have the URL for the GET request
    url = URI("https://dbs-cloudsql-service-5qwlwvimaq-as.a.run.app/users/#{id}/default-account")

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
