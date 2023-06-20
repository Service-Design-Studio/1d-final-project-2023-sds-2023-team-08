class Account < ApplicationRecord
    belongs_to :user
    has_many :transactions
 

    def net_deposits #checked
        
        
        outgoing =transactions.sum(:amount)
        
        net=self.initial_deposit-outgoing

        self.incoming_transactions.each do|t|
            
            net+=t.amount
        end


        return net

    end

    def incoming_transactions #checked
        Transaction.where(recipient_account_number: self.account_number)
    end
end
