class ChangeColType < ActiveRecord::Migration[7.0]
  def change
    change_column :disputes, :disputee_id, :integer, using: 'disputee_id::integer'
    change_column :disputes, :disputer_id, :integer, using: 'disputer_id::integer'
  end
end
