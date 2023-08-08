class AddFieldsTransactionTable < ActiveRecord::Migration[7.0]
  def change
    add_column :transactions, :comments, :string
    add_column :transactions, :date_time, :string
    add_column :transactions, :intrabank, :boolean
  end
end
