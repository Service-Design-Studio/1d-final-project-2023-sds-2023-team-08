# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#just to reset database

Transaction.delete_all
Account.delete_all
User.delete_all


junxiang=User.create!(username:'junxiang', password:'password123', phone:'+6588888888', email:'junxiang@gmail.com')
wx=User.create(username: 'wei xuan',password: 'password123',phone: '+6588888887',email: 'wx@gmail.com')
vinny=User.create(username: 'vinny',password: 'password123',phone: '+6588888886',email: 'vinny@gmail.com')
brighton=User.create(username: 'brighton',password: 'password123',phone: '+6588888885',email: 'brighton@gmail.com')
tristan=User.create(username: 'tristan',password: 'password123',phone: '+6588888884',email: 'tristan@gmail.com')
# Create Accounts for User
jx_savings_acc=junxiang.accounts.create(
  account_number: '539-23421-2',
  initial_deposit: 10034.2356,
  bank: 'DBS',
  account_type: 'DBS Savings Account'
)
  

# Create Accounts for User
jx_multiplier_acc = junxiang.accounts.create(
  account_number: '539-23421-0',
  initial_deposit: 12042.45,
  bank: 'DBS',
  account_type: "DBS Multiplier Account"
)

wx_acc=wx.accounts.create(
    account_number: '539-23421-4',
    initial_deposit: 1003.00,
    bank: 'DBS',
    account_type: "DBS Savings Account"
  )
  
  
 vinny.accounts.create(
    account_number: '539-23421-5',
    initial_deposit: 1008.00,
    bank: 'DBS',
    account_type: "DBS Multiplier Account"
  )

  brighton_multiplier_acc= brighton.accounts.create(
    account_number: '539-23421-6',
    initial_deposit: 100.00,
    bank: 'DBS',
    account_type: "DBS Multiplier Account"
  )

  tristan_acc=tristan.accounts.create(
    account_number: '539-23421-7',
    initial_deposit: 1060.00,
    bank: 'DBS',
    account_type: "DBS Multiplier Account"
  )

# Create Transactions for Account 1


jx_savings_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings to Vinny OTHR PayNow Transfer
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-5',
  datetime: DateTime.strptime("Thu, 20 Jun 2023", "%a, %d %b %Y"),
  amount: 5
)
wx_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings from Wei Xuan OTHR PayNow Transfer
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-2',
  datetime: DateTime.strptime("Sat, 17 Jun 2023", "%a, %d %b %Y"),
  amount: 20.15
)

brighton_multiplier_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings from Brighton OTHR PayNow Transfer #shd not be shown
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-2',
  datetime: DateTime.strptime("Fri, 15 Jan 2023", "%a, %d %b %Y"),
  amount: 15
)
jx_multiplier_acc.transactions.create(
  transaction_name: "Account Transfer", #: jx mult to tristan via account
  transaction_type: "Account Transfer",
  recipient_account_number: '539-23421-7',
  datetime: DateTime.strptime("Mon, 22 Jun 2023", "%a, %d %b %Y"),
  amount: 7
)

tristan_acc.transactions.create(
  transaction_name: "Account Transfer", #:  tristan to jx mult  via account
  transaction_type: "Account Transfer",
  recipient_account_number: '539-23421-0',
  datetime: DateTime.strptime("Mon, 23 Jun 2023", "%a, %d %b %Y"),
  amount: 150
)




