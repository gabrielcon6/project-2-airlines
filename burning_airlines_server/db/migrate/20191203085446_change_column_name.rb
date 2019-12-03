class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :flights, :date, :start_date
  end
end
