json.stockslist @stockslist.each do |stock|
    json.stock_id stock.id
    json.symbol stock.symbol
    json.name stock.name
end
