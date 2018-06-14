class CreateFills < ActiveRecord::Migration[5.2]
  def change
    create_table :fills do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.float :price, null: false
      t.integer :size, null: false
      t.string :side, null: false

      t.timestamps
    end
    add_index :fills, :user_id
    add_index :fills, :stock_id
  end
end
