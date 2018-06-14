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

  has_many :watchlistitems
  has_many :fills

  include HTTParty
  def get_prices(func, time_range)
    response = self.send_request(time_range)
    response.delete("Meta Data")
    key = response.keys[0]
    stock_data = response[key]
    if stock_data.is_a?(String)
      return get_prices(func, time_range)
    end
    times = stock_data.keys
    times = self.format_time(times,time_range)
    close_prices = (times.map{|time| {time: time,  price: (response[response.keys[0]][time]['4. close']).to_f}})
  end


  def send_request(time_range)
    sym = self.symbol
    alpha_v_key = ENV["alpha_v_key"]
    case time_range
    when 'for_one_day'
      response = HTTParty.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+sym+'&interval=5min&outputsize=compact&apikey=' + alpha_v_key)
    when 'for_one_week'
      response = HTTParty.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+sym+'&interval=30min&outputsize=compact&apikey=' + alpha_v_key)
    when 'for_one_month'
      response = HTTParty.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+sym+'&outputsize=compact&apikey=' + alpha_v_key)
    when 'for_five_month'
      response = HTTParty.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+sym+'&outputsize=compact&apikey=' + alpha_v_key)
    when 'for_one_year'
      response = HTTParty.get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+sym+'&apikey=' + alpha_v_key)
    when 'for_five_year'
      response = HTTParty.get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+sym+'&apikey=' + alpha_v_key)
    end
  end


  def format_time(times,time_range)
    case time_range
    when 'for_one_day'
      times = self.for_one_day(times)
    when 'for_one_week'
      times = self.for_one_week(times)
    when 'for_one_month'
      times = self.for_one_month(times)
    when 'for_five_month'
      times.reverse!
    when 'for_one_year'
      times = self.for_one_year(times)
    when 'for_five_year'
      times = self.for_five_year(times)
    end
  end


  def for_one_day(times)
    result = [];
    today = times[0].split(' ')[0]
    times.each do |time|
      date = time.split(' ')[0]
      break if date != today
      result.unshift(time)
    end
    result
  end

  def for_one_week(times)
    range = 5
    self.time_helper(times, range)
  end

  def for_one_month(times)
    range = 20
    self.time_helper(times, range)
  end

  def for_five_month(times)
    range = 100
    self.time_helper(times, range)
  end

  def for_one_year(times)
    range = 52
    self.time_helper(times, range)
  end

  def for_five_year(times)
    range = 260
    self.time_helper(times, range)
  end

  def time_helper(times, range)
    result = [];
    count = 0;
    today = times[0].split(' ')[0]
    times.each_with_index do |time, index|
      date = time.split(' ')[0]
      prev_date = times[index-1].split(' ')[0]
      count = count + 1 if date != prev_date && index > 1
      break if count > range
      result.unshift(time)
    end
    result
  end

  def self.search_by_symbol(keyword)
    Stock.where("lower(symbol) LIKE ?", "%#{ keyword.downcase }%").limit(3)
  end

  def self.search_by_name(keyword)
    Stock.where("lower(name) LIKE ?", "%#{ keyword.downcase }%").limit(3)
  end
end
