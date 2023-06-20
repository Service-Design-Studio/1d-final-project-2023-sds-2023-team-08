Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Set this to the specific origins you want to allow
      resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  