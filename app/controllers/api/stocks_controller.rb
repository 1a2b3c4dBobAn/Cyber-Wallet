class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find_by(symbol: params[:symbol])
    func = params[:func] || 'TIME_SERIES_INTRADAY'
    @prices = @stock.get_prices(func)
    render "api/stock/show"
  end

  def index
  end
end
