export const userWatchesStock = state => {
  return !!state.watchlist[state.stock.stock_id]
}
