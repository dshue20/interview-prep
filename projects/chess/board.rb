require_relative "pieces/pawn"

class Board

    attr_accessor :grid

    def initialize
        @grid = Array.new(8) {Array.new(8, "-")}
    end

    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @grid[row][col] = val
    end

    def move_piece(start, end_pos)
        raise 'There is no piece there' if self[start] === "-"
        self[end_pos] = self[start]
        self[start] = "-"
    end

    def print_grid
       @grid.each {|row| p row}
    end
end