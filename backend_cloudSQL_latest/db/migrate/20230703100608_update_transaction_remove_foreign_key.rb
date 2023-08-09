class UpdateTransactionRemoveForeignKey < ActiveRecord::Migration[7.0]
  def change
    remove_reference :transactions, :dispute, foreign_key: true
  end
end
