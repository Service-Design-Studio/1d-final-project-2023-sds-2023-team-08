class AddColumnPaynow < ActiveRecord::Migration[7.0]
  def change
    
    add_column :paynows, :paid_bef_phone_num, :string, array: true, default: '{}'
  end
end
