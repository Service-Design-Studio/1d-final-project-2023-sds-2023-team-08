
Rails.application.routes.draw do
  get 'users/:id/transactions/all-transactions-7-days', to: 'transactions#all_transactions'
  get 'users/:id/disputes/number-disputes-filed', to: 'disputes#new_disputes_received'
  get 'user/:id/disputes/disputes-with-transaction-details', to: 'disputes#transaction_detail_for_disputes_involving_user'
   #for paynow
  get 'users/:id/paynows/:phonenumber/details', to: 'paynows#search_by_phone'
  resources :paynows
  resources :disputes
  resources :accounts
  resources :transactions
  
  resources :users do
    resources :transactions do
      resources :disputes
    end

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
  
  post 'users/login', to: 'users#login'
  get 'users/:id/default-account', to: 'users#default_acc'
 
 

  #custom routes - disputes related
  
  #post 'users/:id/transactions/:transactions_id/withdraw_dispute', to: 'disputes#withdraw_dispute'
  #post 'users/:id/transactions/:transactions_id/refute_dispute', to: 'disputes#refute_dispute'
  #post 'users/:id/transactions/:transactions_id/resolve_dispute', to: 'disputes#resolve_dispute'
  #get 'users/:id/transaction/:transactions_id/details_for_ftd_review', to:'disputes#details_for_ftd_review'
  
  get 'users/:id/transactions/:transactions_id/dispute/refund-details', to: 'disputes#refund_details'
 
  put 'users/:id/transactions/:transactions_id/dispute/status',to: 'disputes#update_status'
 
 
 #for filter
  get 'accounts/:id/all_transactions', to: 'accounts#all_transactions'
  
end
