class CreateWatchlistitems < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlistitems do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
    end
    add_index :watchlistitems, :user_id
    add_index :watchlistitems, :stock_id
  end
end
