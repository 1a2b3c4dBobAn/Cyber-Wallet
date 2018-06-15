# == Schema Information
#
# Table name: fills
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  price      :float            not null
#  size       :integer          not null
#  side       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Fill < ApplicationRecord

  belongs_to :user
  belongs_to :stock
  validates :size, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

end
