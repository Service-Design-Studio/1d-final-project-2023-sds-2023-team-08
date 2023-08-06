class Transaction < ApplicationRecord
    belongs_to :account
    has_one :dispute

    def get_other_party_name #helper method for generate transaction name below
      #assume intrabank
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
            #only intrabank
            if outgoing
                 return self.transaction_name+" TO: "+self.get_other_party_name
            else
                 return self.transaction_name+" from: "+self.account.user.username
            end
            

        end
    end

    def generate_transaction_details( user)
        
        outgoing= (self.account.user.id==user.id) 
        isFTD=(self.dispute!=nil)
        return {
            "date": self.datetime.strftime("%a, %d %b %Y"),
            "transaction": {
              "transaction name": self.generate_transaction_name(outgoing) ,
              "transaction type": self.transaction_type,
              "account number": outgoing ? self.account.account_number : self.recipient_account_number,
              #if the account which made this transaction belongs to the user, it means outgoing funds thus other party is recipient acc, else sender's acc 
              "total amount": outgoing ? -self.amount : self.amount,
              #if the account which made this transaction belongs to the user, it means outgoing funds thus -ve, else +ve
              "transaction ID": self.id,
              "FTD": isFTD
            }
  
          }
    end

    def transaction_and_dispute_detail(user)
    
        dispute = self.dispute
        
    
        result=[{
                    "disputedate": dispute ? Date.strptime(dispute.date_time.split(', ').last, '%d %B %Y') : "nil",
                    "transaction":{
                      "transactiondetails": self.generate_transaction_details(user),
                      "FTDdetails": dispute ? dispute.generate_ftd_details(user) : "nil"
    
                    }
                    
    
                }]
    
        return result
      end


            

    

        
    
  
end
