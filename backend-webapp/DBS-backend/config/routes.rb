Rails.application.routes.draw do
  resources :accounts
  resources :transactions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #custom routes
  get 'users/:id/total_deposit', to: 'users#total_deposit'
  get 'users/:id/list_accounts', to: 'users#list_accounts'
  get 'users/:id/all_transactions', to: 'users#all_transactions'
  get 'accounts/:id/all_transactions', to: 'accounts#all_transactions'
end
