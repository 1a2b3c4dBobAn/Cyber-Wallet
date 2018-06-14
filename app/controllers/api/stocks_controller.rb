class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find_by(symbol: params[:symbol])
    func = params[:func] || 'TIME_SERIES_INTRADAY'
    @func = params[:func]
    time_range = params[:time_range]
    @prices = @stock.get_prices(func, time_range)
    render "api/stock/show"
  end

  def search
    stocks_by_symbol = Stock.search_by_symbol(params[:search_keyword])
    stocks_by_name = Stock.search_by_name(params[:search_keyword])
    @stockslist = ( stocks_by_symbol | stocks_by_name )

    render "api/stock/search"
  end

  def index
  end
end
