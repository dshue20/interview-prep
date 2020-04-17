require_relative "./piece"
require_relative "../modules/step"

class Rook < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "R"
    end

    def possible_moves(grid)
        side_moves(@pos, @color, grid, 7)
    end
end