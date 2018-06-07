class Api::UsersController < ApplicationController

  def show
    @stock = Stock.find_by(:symbol)
    @stock.get_price(params[:func])
    render "api/stock/show"
  end
end
