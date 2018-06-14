# == Schema Information
#
# Table name: watchlistitems
#
#  id       :bigint(8)        not null, primary key
#  user_id  :integer          not null
#  stock_id :integer          not null
#

class Watchlistitem < ApplicationRecord

  validates_uniqueness_of :user_id, scope: :stock_id
  belongs_to :user
  belongs_to :stock
end
