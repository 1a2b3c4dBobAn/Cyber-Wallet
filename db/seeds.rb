# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

companies = File.join(Rails.root,'assets','lists','valid_company.cvs')

CSV.foreach(companies) do |row|
  Stock.create({symbol:row[0], name:row[1], last_sale:row[2], market_cap:row[3],ipo_year:row[4], sector:row[5], industry:row[6], summary_quote:row[7]})
end
