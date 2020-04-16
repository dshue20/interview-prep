require_relative "./piece"

class Rook < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "R"
    end
end