class Transaction < ApplicationRecord
    belongs_to :account

    def get_other_party_name
        acc=Account.where(account_number: self.recipient_account_number)
        other_username=" "
        acc.each do |other_party_acc|  #this is cus .where return collection even tho only 1 user
            other_username=other_party_acc.user.username
        end
        return other_username


    end
  
end
