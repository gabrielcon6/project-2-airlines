class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :passenger_name
      t.integer :flight_id
      t.string :seat_number
      t.integer :user_id

      t.timestamps
    end
  end
end
