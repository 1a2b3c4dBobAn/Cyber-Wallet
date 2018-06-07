Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    get '/stocks/:symbol', to: 'stocks#show'
  end

  root "static_pages#root"
end
