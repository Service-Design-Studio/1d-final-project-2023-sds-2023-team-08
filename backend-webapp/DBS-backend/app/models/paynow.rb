class Paynow < ApplicationRecord
    #paynow db: phone,accnum,bank,nickname, no associations
    #2.go paynow db get acc numbner
    #4.go paynow db get other party's acc num and nickname by phone
    serialize :paid_bef_phone_num, Array

    def self.get_accnum(phone)
        
        paynow=Paynow.where(phone: phone).first

        return paynow.accnum
    end

    def self.get_nickname(phone)
        paynow=Paynow.where(phone: phone).first
        
        return paynow.nickname
    end

    def self.paid_before(user_phone,other_phone)
        paynow=Paynow.where(phone: user_phone).first
        begin
            
            
            return paynow.paid_bef_phone_num.include?(other_phone)

        rescue => e
            puts "Error occurred: #{e.message} . (i think this funct only avail for postgres)"
        end
        
            
    end

    def self.update_if_not_paid_before_else_nothing(user_acc_num,recipient_acc_num)
        user_paynow=Paynow.where(accnum: user_acc_num).first
        recipient_paynow=Paynow.where(accnum: recipient_acc_num).first
        if (user_paynow && recipient_paynow) 

            begin
                
                paid_bef_phone_num=user_paynow.paid_bef_phone_num
                if (!paid_bef_phone_num.include?(recipient_paynow.phone))
                
                    user_paynow.paid_bef_phone_num<<recipient_paynow.phone
                    user_paynow.save
                    
                    
                
                end
            rescue => e
                puts "Error occurred: #{e.message} . (i think this funct only avail for postgres)"
            end

    
        end
    end

  




    

end
