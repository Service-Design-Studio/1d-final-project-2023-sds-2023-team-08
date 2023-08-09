class AddForeignKeys < ActiveRecord::Migration[7.0]
  def change
    add_reference :disputes, :associated_transaction, foreign_key: { to_table: :transactions }
    add_reference :transactions, :dispute, foreign_key: true
  end
end
