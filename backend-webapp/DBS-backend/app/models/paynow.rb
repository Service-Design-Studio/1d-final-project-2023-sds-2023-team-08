class Paynow < ApplicationRecord
    #paynow db: phone,accnum,bank,nickname, no associations
    #2.go paynow db get acc numbner
    #4.go paynow db get other party's acc num and nickname by phone
    def self.get_accnum(phone)
        
        paynow=Paynow.where(phone: phone).first

        return paynow.accnum
    end

    def self.get_nickname(phone)
        paynow=Paynow.where(phone: phone).first
        
        return paynow.nickname
    end

end
