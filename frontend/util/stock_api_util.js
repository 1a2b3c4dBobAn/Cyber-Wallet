export const fetchStock = (symbol, func) => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks/' + symbol
    data: { func }
  })
)
