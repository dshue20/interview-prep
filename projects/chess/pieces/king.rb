require_relative "./piece"
require_relative "../modules/step"
require_relative "../modules/slide"

class King < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "K"
    end

    def possible_moves(grid)
        side_moves(@pos, grid, 1) + diagonal_moves(@pos, grid, 1)
    end
end