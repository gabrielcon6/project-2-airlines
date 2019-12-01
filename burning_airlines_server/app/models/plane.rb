class Plane < ApplicationRecord
    has_many :flights
    has_one :seat
end
