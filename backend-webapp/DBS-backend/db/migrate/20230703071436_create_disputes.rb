class CreateDisputes < ActiveRecord::Migration[7.0]
  def change
    create_table :disputes do |t|
      t.string :status
      t.string :disputer_id
      t.string :disputee_id
      t.string :dispute_reason
      t.text :dispute_reason_details #serialized
      
      
      t.timestamps
    end
  end
end
