Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    get '/stocks/:symbol', to: 'stocks#show'
    get '/search', to: 'stocks#search' #working on this
    resource :portfolio, only: [:show]
    get '/portfolio/value', to: 'portfolios#value'
    get '/portfolio/watchlist_info', to: 'portfolios#watchlist_info'
    get '/fill/index', to: 'fills#index'
    get '/fill/holdings', to: 'fills#holdings'
    resource :fill, only: [:create]
    resources :watchlistitems, only: [:create, :index]
    delete '/watchlistitems', to: 'watchlistitems#destroy'
  end

  root "static_pages#root"
end
