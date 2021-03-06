# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Seat.destroy_all 
Plane.destroy_all # Remove every row from the planes table 
Flight.destroy_all 
User.destroy_all 
Reservation.destroy_all 

seat_boeing777 = Seat.create(row: 10, column: 4)

plane_boeing777 = Plane.create(name: 'Boeing 777', seat_id: seat_boeing777.id)
plane_boeing747 = Plane.create(name: 'Boeing 747', seat_id: seat_boeing777.id)
plane_airbusA300 = Plane.create(name: 'Airbus A300', seat_id: seat_boeing777.id)

flight_VA123 = Flight.create(name: 'VA123', start_date: '2019-12-25', destination: 'SCL', origin: 'SYD', time: '07:00', plane_id: plane_boeing777.id)

gabe = User.create(name: 'Gabe', password_digest: BCrypt::Password.create('gabe'), email: 'gabe@ga.com')

gabe_reservation0 = Reservation.create(passenger_name: 'Gabriel Conceicao', flight_id: flight_VA123.id, seat_number: '1A', user_id: gabe.id)


flight_VA125 = Flight.create(name: 'VA125', start_date: '2019-12-25', destination: 'SAO', origin: 'SYD', time: '09:00', plane_id: plane_boeing777.id)


gabe_reservation0 = Reservation.create(passenger_name: 'Gabriel Conceicao', flight_id: flight_VA123.id, seat_number: '1A', user_id: gabe.id)

gabe_reservation1 = Reservation.create(passenger_name: 'Lillian Luzinsky', flight_id: flight_VA125.id, seat_number: '1A', user_id: gabe.id)

puts '--------> seed has been planted  <------------'