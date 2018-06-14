class Api::WatchlistitemsController < ApplicationController

  def index
    @watchlist = current_user.watchlistitems
    render 'api/watchlistitems/index'
  end

  def create

    watchlistitem = Watchlistitem.create({user_id: current_user.id, stock_id: params[:stock_id]})
    @watchlist = current_user.watchlistitems
    render 'api/watchlistitems/index'
  end


  def destroy
    @watchlistitem = Watchlistitem.find_by(user_id: current_user.id, stock_id: params[:stock_id])
    @watchlistitem.destroy
    render json: @watchlistitem
  end
end
