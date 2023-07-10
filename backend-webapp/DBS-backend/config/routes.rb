Rails.application.routes.draw do
  resources :disputes
  resources :accounts
  resources :transactions
  
  resources :users do
    resources :transactions
    resources :disputes
    resources :accounts do
      resources :transactions
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #csrf
  get '/csrf_token', to: 'csrf#fetch_csrf_token'

  #custom routes - user related
  get 'users/:id/home', to: 'users#home'
  get 'users/:id/all_transactions', to: 'users#all_transactions'
  post 'users/login', to: 'users#login'

  #custom routes - disputes related
  get 'users/:id/new_disputes_received', to: 'disputes#new_disputes_received'
  post 'users/:id/transactions/:id/withdraw_dispute', to: 'disputes#withdraw_dispute'
  post 'users/:id/transactions/:id/refute_dispute', to: 'disputes#refute_dispute'
  post 'users/:id/transactions/:id/resolve_dispute', to: 'disputes#resolve_dispute'
  get 'users/:id/transactions/:id/refund_details', to: 'disputes#refund_details'
  get 'user/:id/transaction_detail_for_disputes_involving_user', to: 'disputes#transaction_detail_for_disputes_involving_user'
  
  #for filter
  get 'accounts/:id/all_transactions', to: 'accounts#all_transactions'
  
end
