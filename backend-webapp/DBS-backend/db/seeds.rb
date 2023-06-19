# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

junxiang=User.create!(username:'junxiang', password:'password123', phone:'+6588888888', email:'junxiang@gmail.com')
wx=User.create(username: 'wei xuan',password: 'password123',phone: '+6588888887',email: 'wx@gmail.com')
vinny=User.create(username: 'vinny',password: 'password123',phone: '+6588888886',email: 'vinny@gmail.com')

# Create Accounts for User
account1=junxiang.accounts.create(
  account_number: '539-23421-2',
  initial_deposit: 200.00,
  bank: 'DBS',
  account_type: 'DBS Savings Account'
)
  

# Create Accounts for User
account2 = junxiang.accounts.create(
  account_number: '539-23421-3',
  initial_deposit: 100.00,
  bank: 'DBS',
  account_type: "DBS Multiplier Account"
)

wx.accounts.create(
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

# Create Transactions for Account 1


account1.transactions.create(
  transaction_name: "PayNow Transfer to: Vinny OTHR PayNow Transfer",
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-5',
  datetime: DateTime.strptime("Thu, 15 Jun 2023", "%a, %d %b %Y"),
  amount: 5
)
account1.transactions.create(
  transaction_name: "PayNow Transfer to: Wei Xuan OTHR PayNow Transfer",
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-4',
  datetime: DateTime.strptime("Sat, 17 Jun 2023", "%a, %d %b %Y"),
  amount: 50
)

account2.transactions.create(
  transaction_name: "PayNow Transfer to: Brighton OTHR PayNow Transfer",
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-6',
  datetime: DateTime.strptime("Fri, 16 Jun 2023", "%a, %d %b %Y"),
  amount: 150
)





