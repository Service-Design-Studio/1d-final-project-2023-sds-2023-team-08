require 'rails_helper'
$LOAD_PATH << File.expand_path('../fuzzer', __FILE__)
require_relative '../fuzzers/fuzzer_phone_number'

RSpec.describe Paynow, type: :model do
    describe '.get_accnum' do
      context 'when the phone number exists in the database' do
        it 'returns the account number' do
          phone_number = FuzzerPhoneNumber.new.generate
          paynow = Paynow.create(phone: phone_number, accnum: '1234567890', paid_bef_phone_num: [])
          expect(Paynow.get_accnum(phone_number)).to eq('1234567890')
        end
      end
  
      context 'when the phone number does not exist in the database' do
        it 'returns a NoMethodError' do
          phone_number = FuzzerPhoneNumber.new.generate
          expect { Paynow.get_accnum(phone_number).accnum }.to raise_error(NoMethodError)
        end
      end
    end
  
    describe '.get_nickname' do
      context 'when the phone number exists in the database' do
        it 'returns the nickname' do
          phone_number = FuzzerPhoneNumber.new.generate
          paynow = Paynow.create(phone: phone_number, nickname: 'John', paid_bef_phone_num: [])
  
          expect(Paynow.get_nickname(phone_number)).to eq('John')
        end
      end
  
      context 'when the phone number does not exist in the database' do
        it 'returns a NoMethodError' do
          phone_number = FuzzerPhoneNumber.new.generate
          expect { Paynow.get_nickname(phone_number).nickname }.to raise_error(NoMethodError)
        end
      end
    end
  
    describe '.paid_before' do
      context 'when the user phone number exists in the database' do
        it 'returns true if the other phone number exists in the paid_bef_phone_num list' do
          user_phone_number = FuzzerPhoneNumber.new.generate
          other_phone_number = FuzzerPhoneNumber.new.generate
          paynow = Paynow.create(phone: user_phone_number, paid_bef_phone_num: [other_phone_number])
          expect(Paynow.paid_before(user_phone_number, other_phone_number)).to be true
        end
        it 'returns false if the other phone number does not exist in the paid_bef_phone_num list' do
          user_phone_number = FuzzerPhoneNumber.new.generate
          other_phone_number_1 = FuzzerPhoneNumber.new.generate
          other_phone_number_2 = FuzzerPhoneNumber.new.generate
          paynow = Paynow.create(phone: user_phone_number, paid_bef_phone_num: [other_phone_number_1])
          expect(Paynow.paid_before(user_phone_number, other_phone_number_2)).to be false
        end
      end
    end
  
    describe '.remove_from_paid_before' do
      context 'when the user account number exists in the database' do
        it 'removes the other phone number from the paid_bef_phone_num list' do
          other_phone_number = FuzzerPhoneNumber.new.generate
          paynow = Paynow.create(accnum: '1234567890', paid_bef_phone_num: [other_phone_number])
          Paynow.remove_from_paid_before('1234567890', other_phone_number)
          paynow.reload
          expect(paynow.paid_bef_phone_num).not_to include(other_phone_number)
        end
      end
    end
  
    describe '.update_if_not_paid_before_else_nothing' do
      context 'when the user account number and recipient account number exist in the database' do
        it 'adds the recipient phone number to the user paid_bef_phone_num list if not already present' do
          recipient_phone_number = FuzzerPhoneNumber.new.generate
          user_paynow = Paynow.create(accnum: '1234567890', paid_bef_phone_num: [])
          recipient_paynow = Paynow.create(accnum: '9876543210', phone: recipient_phone_number, paid_bef_phone_num: [])
          Paynow.update_if_not_paid_before_else_nothing('1234567890', '9876543210')
          user_paynow.reload
          expect(user_paynow.paid_bef_phone_num).to include(recipient_phone_number)
        end
  
        it 'does nothing if the recipient phone number is already present in the user paid_bef_phone_num list' do
          recipient_phone_number = FuzzerPhoneNumber.new.generate
          user_paynow = Paynow.create(accnum: '1234567890', paid_bef_phone_num: [recipient_phone_number])
          recipient_paynow = Paynow.create(accnum: '9876543210', phone: recipient_phone_number, paid_bef_phone_num: [])
          Paynow.update_if_not_paid_before_else_nothing('1234567890', '9876543210')
          user_paynow.reload
          expect(user_paynow.paid_bef_phone_num).to eq([recipient_phone_number])
        end
      end
  
      context 'when either user account number or recipient account number does not exist in the database' do
        it 'does nothing' do
          expect { Paynow.update_if_not_paid_before_else_nothing('9999999999', '9876543210') }.not_to raise_error
        end
      end
    end
  
  end
  