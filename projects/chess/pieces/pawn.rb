require_relative "./piece"

class Pawn < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "P"
    end

    def possible_moves(grid)
        moves = []
        row, col = @pos
        if @color == "white"
            if grid[row-1][col] === "-"
                moves << [row-1, col]
                moves << [row-2, col] if row == 6 && grid[row-2][col] === "-"
            end
        else
            if grid[row+1][col] === "-"
                moves << [row+1, col]
                moves << [row+2, col] if row == 1 && grid[row+2][col] === "-"
            end
        end
        moves
    end
end