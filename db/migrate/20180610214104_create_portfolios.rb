class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.integer :purchase_power, null: false
    end
    add_index :portfolios, :user_id, unique: true
  end
end
