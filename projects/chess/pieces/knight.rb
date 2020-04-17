require_relative "./piece"

class Knight < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "N"
    end

    def possible_moves(grid)
        arr = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]
        moves = []
        row, col = pos
        arr.each do |sub|
            x, y = row + sub[0], col + sub[1]
            moves << [x,y] if grid[x] && grid[x][y] === "-"
        end
        moves
    end
end