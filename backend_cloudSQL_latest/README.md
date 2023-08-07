# README

This README documents whatever steps are necessary to get the
application up and running.

This README also explains the project file structure and usage.

### Introduction
This is the Transaction and Disputes microservice which is linked to the main database of the banking app.

### Prerequisites
* Ensure you have ruby installed. This project uses ruby version 3.2.2 . run `ruby -v` in your terminal to check
* Ensure you have the package manager RubyGems installed by running `gem -v`
* Install Bundler, the gem manager, by running `gem install bundler`
* Ensure you have posgresql installed locally and set up a database for this project with username and password
  

### Installation Guide
* Clone this repository.
* Ensure you are in /backend_cloudSQL_latest folder
* run `bundle install` to install all dependencies

### Set up and run app locally
* connect to local database by going under default section and modifying the username and password field respectively in database.yml file
* run the following :
* `rails db:create    # Creates the database`
* `rails db:migrate   # Runs database migrations`
* `rails db:seed      # Seeds the database with initial data (if applicable)` 
* to run the app locally, run `rails server` and open localhost

### Prerequisite: Deployment to GCloud
*set up a project in gcloud console
*ensure Google Cloud SDK is installed
*refer to sections:
*Before You Begin
*Set the Project Default
*set up a CloudSQL for POSGRESQL instance 
*store secret values in secret manager
*connect rails app to production database and storage
*under [this link] (https://cloud.google.com/ruby/rails/run#windows) to setup the project on cloud. some of the files (dbpassword,.env file) are already created, thus edit accordingly
*edit the substituitions section under cloudbuild.yml file with your respective values created during the above setup

### Deployment to GCloud
*run `gcloud init` in Google Cloud  SDK and follow the steps accordingly
*run `gcloud auth login` to authenticate
*cd to /backend_cloudSQL_latest folder
*run `glocud builds submit` to deploy

### API Endpoints
### Users resource
| HTTP Verbs | Endpoints | Controller | description |
|--- | --- | --- |--- |
| GET | /users/:id/home | users#home | Returns net deposits for each of the bank accounts of user with :id|
| GET | /users/:id/default-account | users#default_acc | Returns the default account used for account transfer for user with :id |
| POST | /users/login | users#login | To login user |


### Transactions resource
| HTTP Verbs | Endpoints | Controller | description |
|--- | --- | --- |--- |
| GET | /users/:id/transactions/:transaction_id | transactions#show | Returns details of transaction and dispute associated if any |
| GET | /users/:id/transactions/all-transactions-7-days | transactions#all_transactions | Returns all transactions made within 7 days by user with :id sorted from most to least recent|
| POST | /users/:id/ transactions | transactions#create | To create a new transaction made by user with :id|
 

### Disputes resource
| HTTP Verbs | Endpoints | Controller | description |
|--- | --- | --- |--- |
| GET | users/:id/disputes/number-disputes-filed | disputes#new_disputes_received | Returns number of disputes with status ‘ Dispute Filed ’ received by user with :id |
| GET | users/:id/transactions/:id/dispute/refund-details | disputes#refund_details | Returns details required for refund page based on transaction with :transaction_id and user with :id |
| GET | user/:id/disputes/disputes-with-transaction-details | disputes#transaction_detail_for_disputes_involving_user | Returns details required for the disputes page : a list of disputes and their associated transaction details arranged most recently to least recently created based on user with :id  |
| POST | /users/:id/transactions/:transactions_id/disputes | disputes#create | Creation of dispute related to transaction with id :transaction_id by user with :id |
| PUT | users/:id/transactions/:id/dispute/status | disputes#update_status | update status field of dispute ( supports withdraw , refute and resolve dispute actions ) |




### Technologies Used
* [RubyOnRails](https://rubyonrails.org/).

