require_relative "./piece"
require_relative "../modules/slide"

class Bishop < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "B"
    end

    def possible_moves(grid)
        diagonal_moves(@pos, @color, grid, 7)
    end
end