class RemovePlaneIdFromSeats < ActiveRecord::Migration[6.0]
  def change

    remove_column :seats, :plane_id, :integer
  end
end
