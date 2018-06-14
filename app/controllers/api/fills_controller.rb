class Api::FillsController < ApplicationController
  before_action :require_logged_in

  def create
    fill = Fill.new(fill_params)
    if fill.save
      current_user.portfolio.update_portfolio(fill)
    # else
    end
    @portfolio = current_user.portfolio
    render 'api/portfolio/show'
  end

  def index
    fills = Fill.where(stock_id: params[:stock_id])
    if !!fills
      @stock_symbol = fills[0].stock.symbol
      @total_shares = 0

      fills.each {|fill|
        if fill.side === 'buy'
            @total_shares = @total_shares + fill.size
        else
          @total_shares = @total_shares - fill.size
        end
      }
      render 'api/fill/index'
    end
  end


  def holdings
    @holdings = []
    fills = current_user.fills
    stock_div = []
    fills.each do |fill|
      stock_div << fill.stock.id unless stock_div.include?(fill.stock.id)
    end

    stock_div.each do |stock_id|
      fills = current_user.fills.where(stock_id: stock_id)
      total_shares = 0
      fills.each {|fill|
        if fill.side === 'buy'
            total_shares = total_shares + fill.size
        else
          total_shares = total_shares - fill.size
        end
      }
      value = total_shares * fills[0].stock.last_sale.to_i
      @holdings << {symbol: fills[0].stock.symbol,  value: value }
    end
    @holdings
    @holdings
    render 'api/fill/holdings'
  end

  private

  def fill_params
    params.require(:fill).permit(:user_id, :stock_id, :price, :size, :side)
  end
end
