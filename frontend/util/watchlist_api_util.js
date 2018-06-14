export const addToWatchlist = stock_id => (
  $.ajax({
    method: 'POST',
    url: '/api/watchlistitems',
    data: { stock_id }
  })
)


export const removeFromWatchlist = stock_id => (
  $.ajax({
    method: 'DELETE',
    url: '/api/watchlistitems',
    data: {stock_id}
  })
)


export const fetchWatchList = () => (
  $.ajax({
    method: 'GET',
    url: '/api/watchlistitems'
  })
)
