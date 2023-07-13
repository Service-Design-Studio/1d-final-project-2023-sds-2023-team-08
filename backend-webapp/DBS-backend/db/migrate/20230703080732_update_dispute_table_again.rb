class UpdateDisputeTableAgain < ActiveRecord::Migration[7.0]
  def change
    add_column :disputes, :disputee_id, :string
    add_column :disputes, :disputer_id, :string
  end
end
