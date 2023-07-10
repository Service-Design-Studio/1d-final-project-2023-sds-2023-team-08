class AddFieldsToDisputeTable < ActiveRecord::Migration[7.0]
  def change
    add_column :disputes, :date_time, :string
    add_column :disputes, :day_time, :string
    add_column :disputes, :further_action, :text, serialized: true
  end
end
