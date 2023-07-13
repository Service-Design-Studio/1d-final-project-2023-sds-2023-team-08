require 'rails_helper'

RSpec.describe Paynow, type: :model do
  describe '.get_accnum' do
    context 'when the phone number exists in the database' do
      it 'returns the account number' do
        paynow = Paynow.create(phone: '1234567890', accnum: '1234567890')

        expect(Paynow.get_accnum('1234567890')).to eq('1234567890')
      end
    end

    context 'when the phone number does not exist in the database' do
      it 'returns a NoMethodError' do
        expect { Paynow.get_accnum('9876543210').accnum }.to raise_error(NoMethodError)
      end
    end
  end

  describe '.get_nickname' do
    context 'when the phone number exists in the database' do
      it 'returns the nickname' do
        paynow = Paynow.create(phone: '1234567890', nickname: 'John')

        expect(Paynow.get_nickname('1234567890')).to eq('John')
      end
    end

    context 'when the phone number does not exist in the database' do
      it 'returns a NoMethodError' do
        expect { Paynow.get_nickname('9876543210').nickname }.to raise_error(NoMethodError)
      end
    end
  end
end
