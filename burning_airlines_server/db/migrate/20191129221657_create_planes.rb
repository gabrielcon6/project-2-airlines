class CreatePlanes < ActiveRecord::Migration[6.0]
  def change
    create_table :planes do |t|
      t.text :name

      t.timestamps
    end
  end
end
