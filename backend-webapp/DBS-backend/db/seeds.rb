# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#just to reset database

Dispute.delete_all
Transaction.delete_all
Account.delete_all
User.delete_all


junxiang=User.create!(username:'junxiang', password:'password123', phone:'+6588888888', email:'junxiang@gmail.com')
wx=User.create(username: 'wei xuan',password: 'password123',phone: '+6588888887',email: 'wx@gmail.com')
vinny=User.create(username: 'vinny',password: 'password123',phone: '+6588888886',email: 'vinny@gmail.com')
brighton=User.create(username: 'brighton',password: 'password123',phone: '+6588888885',email: 'brighton@gmail.com')
tristan=User.create(username: 'tristan',password: 'password123',phone: '+6588888884',email: 'tristan@gmail.com')
seaKing=User.create(username: 'SEA KING SEAFOOD @ HOUGANG',password: 'password123',phone: '+6588888883',email: 'SEAKING@gmail.com')
shopeePay=User.create(username: 'SHOPEEPAY PRIVATE LIMITED OTHR',password: 'password123',phone: '+6588888882',email: 'SHOPEEPAY@gmail.com')
princeNoodles=User.create(username: 'PRINCE NOODLES',password: 'password123',phone: '+6588888881',email: 'PRINCE NOODLES@gmail.com')

# Create Accounts for User
jx_savings_acc=junxiang.accounts.create(
  account_number: '539-23421-2',
  initial_deposit: 10034.2356,
  bank: 'DBS',
  account_type: 'DBS Savings Account'
)
seaKing_savings_acc=seaKing.accounts.create(
  account_number: '539-20001-5',
  initial_deposit: 10034.2356,
  bank: 'DBS',
  account_type: 'DBS Savings Account'
)
shopeePay_savings_acc=shopeePay.accounts.create(
  account_number: '539-20001-6',
  initial_deposit: 234870.00,
  bank: 'DBS',
  account_type: 'DBS Savings Account'
)
princeNoodles_savings_acc=princeNoodles.accounts.create(
  account_number: '539-20001-7',
  initial_deposit: 2247980.00,
  bank: 'DBS',
  account_type: 'DBS Savings Account'
)


  

# Create Accounts for User
jx_multiplier_acc = junxiang.accounts.create(
  account_number: '234-43941-0',
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
  datetime: DateTime.strptime("Tue, 15 Aug 2023", "%a, %d %b %Y"),
  amount: 5,
  comments:" ",
  date_time: "Tue, 15 Aug 2023 10:30",
  intrabank:true
)
jx_trf_extra_to_wx=jx_savings_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings to WeiXuan OTHR PayNow Transfer
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-4',
  datetime: DateTime.strptime("Mon, 3 Jul 2023", "%a, %d %b %Y"),
  amount: 10.15,
  comments:" ",
  date_time: "Mon, 3 Jul 2023 10:37",
  intrabank:true
)


#dispute raised by wx
jx_trf_extra_to_wx.dispute= Dispute.new(
  status: "Dispute Filed",
  disputer_acc_id: jx_savings_acc.id,
  dispute_reason: "Transfer to Wrong Account" ,
  disputee_id: wx.id,
  disputer_id: junxiang.id,
  date_time:"10 July 2023 04:22",
  day_date:"Mon, 10 July 2023",
  further_action:{ }.to_json,
  dispute_reason_details: { 
    "comments" => "Was supposed to transfer to your number neighbor XXXX-9232 instead"}.to_json

)
jx_trf_extra_to_wx.save

jx_savings_acc.transactions.create(
  transaction_name: "NETS QR PAYMENT", #: jx savings to SEA KING SEAFOOD @ HOUGANG
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-20001-5',
  datetime: DateTime.strptime("Fri, 18 Aug 2023", "%a, %d %b %Y"),
  amount: 12.23,
  comments:" ",
  date_time: "Fri, 18 Aug 2023 14:37",
  intrabank:true
)
jx_savings_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings to SHOPEEPAY PRIVATE LIMITED OTHR
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-20001-6',
  datetime: DateTime.strptime("Fri, 18 Aug 2023", "%a, %d %b %Y"),
  amount: 23.20,
  comments:" ",
  date_time: "Fri, 18 Aug 2023 19:37",
  intrabank:true
)
jx_savings_acc.transactions.create(
  transaction_name: "NETS QR PAYMENT", #: jx savings to PRINCE NOODLES
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-20001-7',
  datetime: DateTime.strptime("Mon, 14 Aug 2023", "%a, %d %b %Y"),
  amount: 4.20,
  comments:" ",
  date_time: "Mon, 14 Aug 2023 18:47",
  intrabank:true
)
wx_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings from Wei Xuan OTHR PayNow Transfer
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-2',
  datetime: DateTime.strptime("Sat, 19 Aug 2023", "%a, %d %b %Y"),
  amount: 20.15,
  comments:" ",
  date_time: "Sat, 19 Aug 2023 20:47",
  intrabank:true
)

brighton_multiplier_acc.transactions.create(
  transaction_name: "PayNow Transfer", #: jx savings from Brighton OTHR PayNow Transfer #shd not be shown
  transaction_type: "FAST / PayNow Transfer",
  recipient_account_number: '539-23421-2',
  datetime: DateTime.strptime("Fri, 15 Jan 2023", "%a, %d %b %Y"),
  amount: 15,
  comments:" ",
  date_time: "Fri, 15 Jan 2023 20:47",
  intrabank:true
)
jx_multiplier_acc.transactions.create(
  transaction_name: "Account Transfer", #: jx mult to tristan via account
  transaction_type: "Account Transfer",
  recipient_account_number: '539-23421-7',
  datetime: DateTime.strptime("Sat, 19 Aug 2023", "%a, %d %b %Y"),
  amount: 7,
  comments:" ",
  date_time: "Sat, 19 Aug 2023 20:27",
  intrabank:true
)
jx_multiplier_acc.transactions.create(
  transaction_name: "Account Transfer", #: jx mult to tristan via account
  transaction_type: "Account Transfer",
  recipient_account_number: '539-23421-7',
  datetime: DateTime.strptime("Mon, 14 Aug 2023", "%a, %d %b %Y"),
  amount: 30,
  comments:" ",
  date_time: "Mon, 14 Aug 2023 01:27",
  intrabank:true
)


tristan_acc.transactions.create(
  transaction_name: "Account Transfer", #:  tristan to jx mult  via account
  transaction_type: "Account Transfer",
  recipient_account_number: '234-43941-0',
  datetime: DateTime.strptime("Sun, 13 Aug 2023", "%a, %d %b %Y"),
  amount: 150,
  comments:" ",
  date_time: "Sun, 13 Aug 2023 17:24",
  intrabank:true
)




