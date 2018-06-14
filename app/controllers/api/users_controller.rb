class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @user.portfolio = Portfolio.new({purchase_power: 100000, user_id: @user.id })
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
