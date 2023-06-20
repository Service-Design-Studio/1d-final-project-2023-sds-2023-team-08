class Transaction < ApplicationRecord
    belongs_to :account

    def get_other_party_name #helper method for generate transaction name below
        acc=Account.where(account_number: self.recipient_account_number)
        other_username=" "
        acc.each do |other_party_acc|  #this is cus .where return collection even tho only 1 user
            other_username=other_party_acc.user.username
        end
        return other_username


    end

    def generate_transaction_name(outgoing) #used in user controller : all_transactions_desc
        if self.transaction_type=="Account Transfer"
            # "I-BANK TRANSFER OTHR"+transactionID e.g MB1242354363
            transaction_ID=1242004053+6*self.id
         return "I-BANK TRANSFER OTHR MB#{transaction_ID}"
          #this is just some random to generate a realistic transactionID
        else
            
            if outgoing
                 return self.transaction_name+" TO: "+self.get_other_party_name
            else
                 return self.transaction_name+" from: "+self.account.user.username
            end
            

        end
    end

    

        
    
  
end
