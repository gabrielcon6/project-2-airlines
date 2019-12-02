Rails.application.routes.draw do
  resources :planes
  resources :flights
  resources :seats
  resources :reservations
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
