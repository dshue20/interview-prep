require_relative "./piece"

class King < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "K"
    end
end