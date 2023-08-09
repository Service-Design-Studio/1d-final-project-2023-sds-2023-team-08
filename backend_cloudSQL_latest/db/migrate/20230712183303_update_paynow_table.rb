class UpdatePaynowTable < ActiveRecord::Migration[7.0]
  def change
    
    add_column :paynows, :accnum, :string
    add_column :paynows, :bank, :string
    add_column :paynows, :nickname, :string
    remove_foreign_key :paynows, :accounts
    remove_column :paynows, :account_id
  end
end
