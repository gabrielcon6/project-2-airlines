json.extract! reservation, :id, :passenger_name, :flight_id, :seat_number, :user_id, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
