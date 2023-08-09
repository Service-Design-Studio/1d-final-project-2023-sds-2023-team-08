class UpdateFloatToDecimalTransaction < ActiveRecord::Migration[7.0]
  def change
    change_column :transactions, :amount, :decimal, precision: 20, scale: 2
  end
end
