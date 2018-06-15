# == Schema Information
#
# Table name: portfolios
#
#  id             :bigint(8)        not null, primary key
#  user_id        :integer          not null
#  purchase_power :integer          not null
#

class Portfolio < ApplicationRecord

  belongs_to :user
  validates :purchase_power, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def update_portfolio(fill)
    if fill.side === 'buy'
      # render json: fill.errors.full_messages, status: 422 if self.purchase_power - fill.price * fill.size < 0
      purchase_power = (self.purchase_power - fill.price * fill.size).round
    else
      purchase_power = (self.purchase_power + fill.price * fill.size).round
    end
    self.update( {:purchase_power => purchase_power} )
  end
end
