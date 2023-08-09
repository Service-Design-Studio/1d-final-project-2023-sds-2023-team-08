class AddForeignKeyPaynow < ActiveRecord::Migration[7.0]
  def change
    add_reference :paynows, :account, null: false, foreign_key: true
  end
end
