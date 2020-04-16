require_relative "./piece"

class Pawn < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "P"
    end
end