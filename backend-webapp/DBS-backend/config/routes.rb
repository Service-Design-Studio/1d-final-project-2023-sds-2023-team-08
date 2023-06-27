Rails.application.routes.draw do
  resources :accounts
  resources :transactions
  resources :users do
    resources :accounts do
      resources :transactions
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #csrf
  get '/csrf_token', to: 'csrf#fetch_csrf_token'
  #custom routes
  get 'users/:id/home', to: 'users#home'
  get 'users/:id/all_transactions', to: 'users#all_transactions'
  post 'users/login', to: 'users#login'

  #for filter
  get 'accounts/:id/all_transactions', to: 'accounts#all_transactions'
  
end
