class AddAccountIdToTransactions < ActiveRecord::Migration[7.0]
  def change
    add_reference :transactions, :account, null: false, foreign_key: true
  end
end
