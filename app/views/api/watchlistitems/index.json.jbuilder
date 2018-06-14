@watchlist.each do |watchlistitem|
  json.set! watchlistitem.stock_id do
    json.id watchlistitem.id
    json.user_id watchlistitem.user_id
    json.stock_id watchlistitem.stock_id
  end
end
