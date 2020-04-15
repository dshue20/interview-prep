class Pawn < Piece
    def initialize(pos, color)
        super(pos, color)
        @symbol = :P
    end
end