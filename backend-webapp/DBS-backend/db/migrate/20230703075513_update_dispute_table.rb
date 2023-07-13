class UpdateDisputeTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :disputes, :disputer_id, :disputer_acc_id
    remove_column :disputes, :disputee_id
  end
end
