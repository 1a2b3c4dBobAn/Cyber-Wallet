export const fetchStock = (symbol, func, time_range ) => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks/' + symbol,
    data: { time_range }
  })
)


export const searchStocks = ( search_keyword ) => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { search_keyword }
  })
)
