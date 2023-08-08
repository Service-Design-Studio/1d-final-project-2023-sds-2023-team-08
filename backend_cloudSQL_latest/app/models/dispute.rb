class Dispute < ApplicationRecord
    
#Has 1 refute
belongs_to :associated_transaction, class_name: 'Transaction',foreign_key: 'transaction_id'

def is_withdrawable(user_id)
    update_status(self)
    
    
    (self.status=="Dispute Filed") 
end

def update_status(dispute)
    status=dispute.status
    #if old status was Dispute Filed and it has been more than 3 days since today, update status to raised to dbs
    dispute_date=Date.strptime(dispute.date_time.split(', ').last, '%d %B %Y')
    if (status== "Dispute Filed") && (dispute_date < 3.days.ago.to_date)
        dispute.status="Raised to DBS"
        
    end
end
def generate_detailed_status(user)

    update_status(self)
    status=self.status
    

    case status
    when "Dispute Filed"
        dispute_date=Date.strptime(self.date_time.split(', ').last, '%d %B %Y')
        if (self.disputer_id == user.id)  
            days= 3 - ( Date.today-dispute_date ).to_i-1 # -1 due to time zone  difference error
            
            return "Recipient has #{days} working days left before this dispute is automatically raised to DBS"
        else
            date= dispute_date + 3.days
            

            parsed_date = date.strftime('%a, %d %B %Y')
            return "Action required by #{parsed_date} "
        end

      

    when "Raised to DBS"
        
        puts "raiseddbs"
        isUnknownTransact=(self.dispute_reason=="Unknown Transaction")
        dispute_date=Date.strptime(self.date_time.split(', ').last, '%d %B %Y')
        date_status_is_raised=isUnknownTransact ? dispute_date : dispute_date+3.days #the date can only either be when unknown transaction/ auto raise to dbs
        thirty_days_from_status_change=date_status_is_raised+ 30.days
        if isUnknownTransact 
            return "This dispute is currently being investigated by the DBS claims team. You will hear back from us latest by #{thirty_days_from_status_change.strftime('%a, %d %B %Y')} "
        else
            return "The recipient did not respond within 3 working days.Your dispute has been automatically raised to the DBS claims team. You will hear back from us latest by #{thirty_days_from_status_change.strftime('%a, %d %B %Y')} "
        end
      
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
    further_action=JSON.parse(self.further_action)
    
    
    return {
        "status": self.status,
        "user": isSender ? "Sender": "Recipient",  #role in transaction : sender if sender of transaction
        "status detailed": self.generate_detailed_status(user),
        "reason": self.dispute_reason,
        "comments": comments,
        "withdrawable": isWithdrawable,
        "refutereason":further_action["refutereason"],
        "correct amount":disputeDetails["correct_amount"],
        "contact details":disputeDetails["contact_details"],
        

      }
end

def self.transaction_detail_for_disputes_involving_user(user)
#order from latest to earliest

    disputes=Dispute.where("disputee_id = ? OR disputer_id = ?", user.id,user.id).sort_by { |obj| Date.strptime(obj[:day_date].split(', ').last, '%d %B %Y') }.reverse
    result=[]
    disputes.each do |dispute|
        result.push(
            {
                "disputedate":dispute.date_time,
                "transactiondetails":dispute.associated_transaction.generate_transaction_details(user),
                "FTDdetails":dispute.generate_ftd_details(user)

            }
        )
        end
    result
    
    end

    
end
