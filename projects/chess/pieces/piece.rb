class Piece

    attr_reader :color
    attr_accessor :pos

    def initialize(pos, color)
        @pos = pos
        @color = color
    end
end