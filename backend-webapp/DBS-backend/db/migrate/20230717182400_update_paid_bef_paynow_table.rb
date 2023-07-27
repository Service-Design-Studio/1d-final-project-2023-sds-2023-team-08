class UpdatePaidBefPaynowTable < ActiveRecord::Migration[7.0]
  def change
    def change
      change_column :paynows, :paid_bef_phone_num, :text, serialized: true
      
    end
  end
end
