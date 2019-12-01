class CreateFlights < ActiveRecord::Migration[6.0]
  def change
    create_table :flights do |t|
      t.integer :name
      t.date :date
      t.string :destination
      t.string :origin
      t.time :time
      t.integer :plane_id

      t.timestamps
    end
  end
end
