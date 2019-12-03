json.extract! flight, :id, :name, :start_date, :destination, :origin, :time, :created_at, :updated_at
json.url flight_url(flight, format: :json)
