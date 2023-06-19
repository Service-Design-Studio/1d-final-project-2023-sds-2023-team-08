class User < ApplicationRecord
    
    has_many :accounts
    has_many :transactions, :through => :accounts
    validates :username, :password, :phone, :email, presence: true
    
    def list_of_acc_infos
        accountinfo=[]
    
        accounts.each do |account|
        accountinfo.push(
            {
            "account type": account.account_type,
            "account number": account.account_number,
            "total amount": account.net_deposits,
            "account id":account.id
            }
        )
        end
        accountinfo

    end

    def total_deposits #checked
        total=0
        accounts.each do |acc|
            total+=acc.net_deposits #net_deposits is a method of account model
        
        end
        return total

    end

    def incoming_transactions #checked
        account_nums = accounts.pluck(:account_number)
        Transaction.where(recipient_account_number: account_nums) 
        #where recipient_account_number is in list of this user's accounts
    end
end
