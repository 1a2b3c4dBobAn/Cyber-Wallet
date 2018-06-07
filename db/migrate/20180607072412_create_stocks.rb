class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.string :last_sale, null: false
      t.string :market_cap, null: false
      t.string :ipo_year, null: false
      t.string :sector, null: false
      t.string :industry, null: false
      t.string :summary_quote, null: false
    end
    add_index :stocks, :symbol, unique: true
    add_index :stocks, :name
  end
end
