# == Schema Information
#
# Table name: stocks
#
#  id            :bigint(8)        not null, primary key
#  symbol        :string           not null
#  name          :string           not null
#  last_sale     :string           not null
#  market_cap    :string           not null
#  ipo_year      :string           not null
#  sector        :string           not null
#  industry      :string           not null
#  summary_quote :string           not null
#

class Stock < ApplicationRecord
  include HTTParty

  def get_price(func)
    interval = ''
    interval = '&interval=15min' if func === 'TIME_SERIES_INTRADAY'
    alpha_v_key = ENV["alpha_v_key"]
    sym = self.symbol
    response = HTTParty.get('https://www.alphavantage.co/query?function='+func+'&symbol='+sym+interval+'&outputsize=full&apikey=' + alpha_v_key)
    response.delete("Meta Data")
    # if func = 'TIME_SERIES_INTRADAY'
    #   time_series = 'Time Series (15min)'
    # elsif func = 'TIME_SERIES_DAILY'
    #   time_series = 'Time Series (Daily)'
    # elsif func = 'TIME_SERIES_WEEKLY'
    #   time_series = 'Weekly Time Series'
    # elsif func = 'TIME_SERIES_MONTHLY'
    #   time_series = 'Monthly Time Series'
    # end
    response
    # times = response[time_series].keys
    # close_prices = times.map{|time| {time => response[time_series][time]['4.close']}}
  end



end
