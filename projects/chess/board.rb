require_relative "pieces/pawn"
require_relative "pieces/rook"
require_relative "pieces/knight"
require_relative "pieces/bishop"
require_relative "pieces/queen"
require_relative "pieces/king"
require "colorize"

class Board

    attr_accessor :grid

    def initialize
        @grid = Array.new(8) {Array.new(8, "-")}
        (0..7).each do |space|
            @grid[1][space] = Pawn.new([1, space], "black")
            @grid[6][space] = Pawn.new([1, space], "white")
            if space == 0 || space == 7
                @grid[0][space] = Rook.new([1, space], "black")
                @grid[7][space] = Rook.new([1, space], "white")
            elsif space == 1 || space == 6
                @grid[0][space] = Knight.new([1, space], "black")
                @grid[7][space] = Knight.new([1, space], "white")
            elsif space == 2 || space == 5
                @grid[0][space] = Bishop.new([1, space], "black")
                @grid[7][space] = Bishop.new([1, space], "white")
            elsif space == 3
                @grid[0][space] = Queen.new([1, space], "black")
                @grid[7][space] = Queen.new([1, space], "white")
            elsif space == 4
                @grid[0][space] = King.new([1, space], "black")
                @grid[7][space] = King.new([1, space], "white")
            end
        end
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
        @grid.each_with_index do |row, idx1|
            row.each_with_index do |space, idx2|
                if (idx1.even? && idx2.even?) || (idx1.odd? && idx2.odd?)
                    print space == "-" ? space.colorize(:background => :green, :color => :black) : space.symbol.colorize(:background => :green, :color => space.color.to_sym) 
                else
                    print space == "-" ? space.colorize(:background => :light_black, :color => :black) : space.symbol.colorize(:background => :light_black, :color => space.color.to_sym) 
                end
            end
            puts
        end
    end
end