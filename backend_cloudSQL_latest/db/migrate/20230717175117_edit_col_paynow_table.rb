class EditColPaynowTable < ActiveRecord::Migration[7.0]
  def change
    change_column :paynows, :paid_bef_phone_num, :text, default: [].to_json, serialized: true
    
  end
end
