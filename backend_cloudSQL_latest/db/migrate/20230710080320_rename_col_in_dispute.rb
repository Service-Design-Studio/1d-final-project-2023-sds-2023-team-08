class RenameColInDispute < ActiveRecord::Migration[7.0]
  def change
    rename_column :disputes, :day_time, :day_date
  end
end
