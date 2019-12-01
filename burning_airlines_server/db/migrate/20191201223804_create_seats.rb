class CreateSeats < ActiveRecord::Migration[6.0]
  def change
    create_table :seats do |t|
      t.integer :row
      t.integer :column
      t.integer :plane_id

      t.timestamps
    end
  end
end
