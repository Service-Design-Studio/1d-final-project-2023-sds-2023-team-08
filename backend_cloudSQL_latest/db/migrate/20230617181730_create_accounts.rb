class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :account_number
      t.integer :initial_deposit
      t.string :bank
      t.string :account_type
      t.timestamps
    end
  end
end
