class Dispute < ApplicationRecord
    
#Has 1 refute
belongs_to :associated_transaction, class_name: 'Transaction',foreign_key: 'transaction_id'

def is_withdrawable()
    update_status(self)
    isSender && (self.status=="Dispute Filed") 
end

def update_status(dispute)
    status=dispute.status
    #if old status was Dispute Filed and it has been more than 3 days since today, update status to raised to dbs
    if (status== "Dispute Filed") && (dispute.created_at < 3.days.ago.to_date)
        dispute.status="Raised to DBS"
    end
end
def generate_detailed_status(user)

    update_status(self)
    status=self.status
    

    case status
    when "Dispute Filed"
        if (self.disputer_id == user.id)  
            days= 3 - ( Date.today-self.created_at.to_date ).to_i
            return "Recipient has #{days} working days left before this dispute is automatically raised to DBS"
        else
            date= self.created_at + 3.days
            return "Action required by #{date} "
        end

      

    when "Raised to DBS"
        return "This dispute is currently being investigated by the DBS claims team. You will hear back from us latest by (30 days from date of status change)"
      
    when "Withdrawn"
        return "Withdrawn by Recipient"
    when "Resolved"
        return "Refunded by Recipient"
    when "Refuted"
        return "Refuted by Recipient"
    end
end


def generate_ftd_details(user)
    update_status(self)
    isSender =(self.associated_transaction.account.user.id==user.id)
    isWithdrawable = isSender && (self.status=="Dispute Filed")  
    disputeDetails=JSON.parse(self.dispute_reason_details)
    
    if disputeDetails.key?("comments") 
        comments=disputeDetails["comments"] 
    else 
        raise KeyError, "The dispute details  does not contain the 'comments' key."
    end

    return {
        "status": self.status,
        "user": isSender ? "sender": "recipient",  #role in transaction : sender if sender of transaction
        "status detailed": self.generate_detailed_status(user),
        "reason": self.dispute_reason,
        "comments": comments,
        "withdrawable": isWithdrawable
        

      }
end

def self.transaction_detail_for_disputes_involving_user(user)

    disputes=Dispute.where("disputee_id = ? OR disputer_id = ?", user.id,user.id)
    result=[]
    disputes.each do |dispute|
        result.push(
            {
                "dispute date":dispute.created_at,
                "transaction details":dispute.associated_transaction.generate_transaction_details(user),
                "FTD details":dispute.generate_ftd_details(user)

            }
        )
        end
    result
    
    end
    
end
