class UpdateDisputes < ActiveRecord::Migration[7.0]
  def change
    remove_reference :disputes, :associated_transaction, foreign_key: { to_table: :transactions }
    add_reference :disputes, :transaction, foreign_key: true
  end
end
