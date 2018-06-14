export const createFill = fill => (
  $.ajax({
    url: '/api/fill',
    method: 'POST',
    data: { fill }
  })
)

export const fetchTotalShares = stock_id => (
  $.ajax({
    url: '/api/fill/index',
    method: 'GET',
    data: { stock_id }
  })
)

export const fetchPortfolio = () => (
  $.ajax({
    url: '/api/portfolio',
    method: 'GET'
  })
)
