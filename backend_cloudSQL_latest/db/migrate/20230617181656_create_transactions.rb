class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :transcation_name
      t.string :transaction_type
      t.string :recipient_account_number
      t.datetime :datetime
      t.integer :amount

      t.timestamps
    end
  end
end
