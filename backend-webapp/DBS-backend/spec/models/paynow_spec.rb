require 'rails_helper'

RSpec.describe Paynow, type: :model do
  describe '.get_accnum' do
    context 'when the phone number exists in the database' do
      it 'returns the account number' do
        paynow = Paynow.create(phone: '12345678', accnum: '1234567890', paid_bef_phone_num: [])

        expect(Paynow.get_accnum('12345678')).to eq('1234567890')
      end
    end

    context 'when the phone number does not exist in the database' do
      it 'returns a NoMethodError' do
        expect { Paynow.get_accnum('98765432').accnum }.to raise_error(NoMethodError)
      end
    end
  end

  describe '.get_nickname' do
    context 'when the phone number exists in the database' do
      it 'returns the nickname' do
        paynow = Paynow.create(phone: '12345678', nickname: 'John', paid_bef_phone_num: [])

        expect(Paynow.get_nickname('12345678')).to eq('John')
      end
    end

    context 'when the phone number does not exist in the database' do
      it 'returns a NoMethodError' do
        expect { Paynow.get_nickname('98765432').nickname }.to raise_error(NoMethodError)
      end
    end
  end

  describe '.paid_before' do
    context 'when the user phone number exists in the database' do
      it 'returns true if the other phone number exists in the paid_bef_phone_num list' do
        paynow = Paynow.create(phone: '12345678', paid_bef_phone_num: ['98765432'])
        expect(Paynow.paid_before('12345678', '98765432')).to be true
      end
      it 'returns false if the other phone number does not exist in the paid_bef_phone_num list' do
        paynow = Paynow.create(phone: '12345678', paid_bef_phone_num: ['98765432'])
        expect(Paynow.paid_before('12345678', '11111111')).to be false
      end
    end
  end

  describe '.remove_from_paid_before' do
    context 'when the user account number exists in the database' do
      it 'removes the other phone number from the paid_bef_phone_num list' do
        paynow = Paynow.create(accnum: '1234567890', paid_bef_phone_num: ['98765432'])
        Paynow.remove_from_paid_before('1234567890', '98765432')
        paynow.reload
        expect(paynow.paid_bef_phone_num).not_to include('98765432')
      end
    end
  end

  describe '.update_if_not_paid_before_else_nothing' do
    context 'when the user account number and recipient account number exist in the database' do
      it 'adds the recipient phone number to the user paid_bef_phone_num list if not already present' do
        user_paynow = Paynow.create(accnum: '1234567890', paid_bef_phone_num: [])
        recipient_paynow = Paynow.create(accnum: '9876543210', phone: '12345678', paid_bef_phone_num: [])
        Paynow.update_if_not_paid_before_else_nothing('1234567890', '9876543210')
        user_paynow.reload
        expect(user_paynow.paid_bef_phone_num).to include('12345678')
      end

      it 'does nothing if the recipient phone number is already present in the user paid_bef_phone_num list' do
        user_paynow = Paynow.create(accnum: '1234567890', paid_bef_phone_num: ['12345678'])
        recipient_paynow = Paynow.create(accnum: '9876543210', phone: '12345678', paid_bef_phone_num: [])
        Paynow.update_if_not_paid_before_else_nothing('1234567890', '9876543210')
        user_paynow.reload
        expect(user_paynow.paid_bef_phone_num).to eq(['12345678'])
      end
    end

    context 'when either user account number or recipient account number does not exist in the database' do
      it 'does nothing' do
        expect { Paynow.update_if_not_paid_before_else_nothing('9999999999', '9876543210') }.not_to raise_error
      end
    end
  end

end
