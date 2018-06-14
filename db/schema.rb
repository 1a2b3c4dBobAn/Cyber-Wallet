# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_10_215047) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fills", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "stock_id", null: false
    t.float "price", null: false
    t.integer "size", null: false
    t.string "side", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_fills_on_stock_id"
    t.index ["user_id"], name: "index_fills_on_user_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "purchase_power", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id", unique: true
  end

  create_table "stocks", force: :cascade do |t|
    t.string "symbol", null: false
    t.string "name", null: false
    t.string "last_sale", null: false
    t.string "market_cap", null: false
    t.string "ipo_year", null: false
    t.string "sector", null: false
    t.string "industry", null: false
    t.string "summary_quote", null: false
    t.index ["name"], name: "index_stocks_on_name"
    t.index ["symbol"], name: "index_stocks_on_symbol", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "watchlistitems", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "stock_id", null: false
    t.index ["stock_id"], name: "index_watchlistitems_on_stock_id"
    t.index ["user_id"], name: "index_watchlistitems_on_user_id"
  end

end
