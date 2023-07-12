Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000' # Specify the allowed origin
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], 
      credentials: true, # Allow credentials
      exposed_headers: ['Access-Control-Allow-Origin'] # Expose additional headers if needed
  end
  allow do
    origins 'https://dbsservice-zwrzqgoagq-as.a.run.app' # Specify the allowed origin
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], 
      credentials: true, # Allow credentials
      exposed_headers: ['Access-Control-Allow-Origin'] # Expose additional headers if needed
  end
  end
  