class CorrectColNameTransaction < ActiveRecord::Migration[7.0]
  def change
    rename_column :transactions, :transcation_name, :transaction_name
  end
end
