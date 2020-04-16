require_relative "./piece"

class Knight < Piece

    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @symbol = "N"
    end
end