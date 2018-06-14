json.stockinfo @stockinfo.each do |stockinfo|
    json.symbol stockinfo.symbol
    json.price stockinfo.price
end
