class ChangeNameToBeStringInFlights < ActiveRecord::Migration[6.0]
  def change
    change_column :flights, :name, :string
  end
end
