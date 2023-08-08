class CreatePaynows < ActiveRecord::Migration[7.0]
  def change
    create_table :paynows do |t|
      t.string :phone
      
      t.timestamps
    end
  end
end
