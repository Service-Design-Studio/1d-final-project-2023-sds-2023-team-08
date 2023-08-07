
This README documents whatever steps are necessary to get the
application up and running.

This README also explains the project usage.

### Introduction
This is the service broker of the banking app to redirect incoming requests to the respective microservice. Built using Ruby On Rails.

### Prerequisites
* Ensure you have ruby installed. This project uses ruby version 3.2.2 . run `ruby -v` in your terminal to check
* Ensure you have the package manager RubyGems installed by running `gem -v`
* Install Bundler, the gem manager, by running `gem install bundler`

  

### Installation Guide
* Clone this repository.
* Ensure you are in /backend-webapp/DBS-backend folder
* run `bundle install` to install all dependencies

### Set up and run app locally
* to run the app locally, run `rails server` and open localhost

### Prerequisite: Deployment to GCloud
* set up a project in gcloud console
* ensure Google Cloud SDK is installed
* refer to sections:
* Before You Begin
* Set the Project Default
* under [this link] (https://cloud.google.com/ruby/rails/run#windows) to setup the project on cloud.
* edit the substituitions section under cloudbuild.yml file with your respective values created during the above setup

### Deployment to GCloud
* run `gcloud init` in Google Cloud  SDK and follow the steps accordingly
* run `gcloud auth login` to authenticate
* cd to  /backend-webapp/DBS-backend folder folder
* run `glocud builds submit` to deploy

### NOTE
* do ignore the model files and db files as this service broker is not meant to have a database
* modify the urls in the controller if necessary

### USAGE
### API Endpoints and their redirected routes

### Users resource
| HTTP Verbs | Endpoints | service | url endpoint of service
|--- | --- | --- |--- |
| GET | /users/:id/home | Transaction and Disputes service | /users/:id/home |
| GET | /users/:id/default_acc | Transaction and Disputes service | /users/:id/default-account |
| POST | /users/login | Transaction and Disputes service | /users/login |
| GET | /users/:id/all_transactions | Transaction and Disputes service | /users/:id/transactions/all-transactions-7-days |
| GET | /users/:id/transactions/:transaction_id | Transaction and Disputes service | /users/:id/transactions/:transaction_id |
| POST | /users/:id/transactions  | Transaction and Disputes service | /users/:id/ transactions  |
| GET | /users/:id/new_disputes_received | Transaction and Disputes service | users/:id/disputes/number-disputes-filed |
| POST | /users/:id/transactions/:transactions_id/disputes  | Transaction and Disputes service | /users/:id/transactions/:transactions_id/disputes  |
| POST | /users/:id/transactions/:id/withdraw_dispute | Transaction and Disputes service | /users/:id/transactions/:id/dispute/status |
| POST | /users/:id/transactions/:id/refute_dispute | Transaction and Disputes service | /users/:id/transactions/:id/dispute/status |
| POST | users/:id/transactions/:id/resolve_dispute | Transaction and Disputes service | /users/:id/transactions/:id/dispute/status |
| GET | /users/:id/transactions/:transaction_id/refund_details | Transaction and Disputes service | /users/:id/transactions/:id/dispute/refund-details |
| GET | /user/:id/transaction_detail_for_disputes_involving_use | Transaction and Disputes service | /user/:id/disputes/disputes-with-transaction-details |
| GET | /users/:id/paynows/search_by_phone/:phonenumber | Transaction and Disputes service | /users/:id/paynows/details/:phonenumber |
| POST | /disputes/generate_dispute_comment | VertexAI service | /users/:id/transactions/:transaction_id |
