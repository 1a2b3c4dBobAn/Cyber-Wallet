export const fetchHoldingInfo =() => (
  $.ajax({
    method: 'GET',
    url: '/api/fill/holdings'
  })
)


export const fetchPortfolioValue =() => (
  $.ajax({
    method: 'GET',
    url: '/api/portfolio/value'
  })
)


export const getWatchedStockList =() => (
  $.ajax({
    method: 'GET',
    url: '/api/portfolio/watchlist_info'
  })
)
