class AddSeatIdToPlanes < ActiveRecord::Migration[6.0]
  def change
    add_column :planes, :seat_id, :integer
  end
end
