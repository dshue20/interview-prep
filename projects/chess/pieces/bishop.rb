require_relative "./piece"

class Bishop < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "B"
    end
end