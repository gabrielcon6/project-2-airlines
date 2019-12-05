class Plane < ApplicationRecord
    has_many :flights
    belongs_to :seat
end
