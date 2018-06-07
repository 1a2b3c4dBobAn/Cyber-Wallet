export const fetchStock = (id, func) => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks/' + id
    data {id, func}
  })
)
