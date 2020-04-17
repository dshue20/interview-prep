require_relative "./piece"
require_relative "../modules/step"
require_relative "../modules/slide"

class Queen < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "Q"
    end

    def possible_moves(grid)
        side_moves(@pos, @color, grid, 7) + diagonal_moves(@pos, @color, grid, 7)
    end
end