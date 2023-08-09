require 'rails_helper'

RSpec.describe Dispute, type: :model do
  let(:transaction) { Transaction.create }
  let(:user) { User.create }

  describe '#is_withdrawable' do
    context 'when status is "Dispute Filed"' do
      it 'returns true' do
        dispute = Dispute.create(status: 'Dispute Filed', date_time: Time.now.strftime('%d %B %Y'))
        expect(dispute.is_withdrawable(user.id)).to be true
      end
    end

    context 'when status is not "Dispute Filed"' do
      it 'returns false' do
        dispute = Dispute.create(status: 'Raised to DBS', date_time: Time.now.strftime('%d %B %Y'))
        expect(dispute.is_withdrawable(user.id)).to be false
      end
    end
  end

  describe '#update_status' do
    it 'updates status to "Raised to DBS" when old status is "Dispute Filed" and more than 3 days have passed' do
      dispute = Dispute.create(status: 'Dispute Filed', date_time: 4.days.ago.to_date.strftime('%d %B %Y'))
      expect { dispute.update_status(dispute) }.to change { dispute.status }.to('Raised to DBS')
    end

    it 'does not update status when old status is not "Dispute Filed" and more than 3 days have passed' do
      dispute = Dispute.create(status: 'Resolved', date_time: 4.days.ago.to_date.strftime('%d %B %Y'))
      expect { dispute.update_status(dispute) }.not_to change { dispute.status }
    end

    it 'does not update status when less than 3 days have passed' do
      dispute = Dispute.create(status: 'Dispute Filed', date_time: 2.days.ago.to_date.strftime('%d %B %Y'))
      expect { dispute.update_status(dispute) }.not_to change { dispute.status }
    end
  end

  describe '#generate_detailed_status' do
    it 'returns the correct detailed status for "Dispute Filed" status' do
      dispute = Dispute.create(status: 'Dispute Filed', disputer_id: user.id, date_time: (Date.today - 1).strftime('%d %B %Y'))
      expect(dispute.generate_detailed_status(user)).to eq("Recipient has 2 working days left before this dispute is automatically raised to DBS")
    end
 
    it 'returns the correct detailed status for "Raised to DBS" status' do
      dispute = Dispute.create(status: 'Raised to DBS', dispute_reason: 'Unknown Transaction', date_time: (Date.today - 3).strftime('%d %B %Y'))
      expect(dispute.generate_detailed_status(user)).to eq("This dispute is currently being investigated by the DBS claims team. You will hear back from us latest by #{(Date.strptime(dispute.date_time, '%d %B %Y') + 30.days).strftime('%a, %d %B %Y')} ")
    end
  end
end

