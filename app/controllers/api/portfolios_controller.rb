class Api::PortfoliosController < ApplicationController

  def show
    @portfolio = current_user.portfolio
    render 'api/portfolio/show'
  end

  def value
    purchase_power = current_user.portfolio.purchase_power

    holding_value = 0
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
      holding_value = holding_value + value
    end
    @portfolio_value = [{type:'purchase_power', value: purchase_power}, {type: 'holding_value',  value: holding_value}]
    render 'api/portfolio/value'
  end

  def watchlist_info
    watchlist = current_user.watchlistitems
    @watchlist = watchlist.map{|item| { symbol: item.stock.symbol, name: item.stock.name, price: item.stock.last_sale }}

    render json: {watchlist: @watchlist}
  end

end
