require_relative "./piece"

class Queen < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "Q"
    end
end