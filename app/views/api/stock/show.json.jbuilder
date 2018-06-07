json.stock do
  json.stock_id @stock.id
  json.symbol @stock.symbol
  json.name @stock.name
  json.last_sale @stock.last_sale
  json.market_cap @stock.market_cap
  json.ipo_year @stock.ipo_year
  json.sector @stock.sector
  json.industry @stock.industry
  json.summary_quote @stock.summary_quote

  json.prices @prices
end
