class Board
  def self.print_grid(grid)
    grid.each do |row|
        puts row.join(" ")
    end
  end

  def initialize(n)
    @grid = Array.new(n).map{|x| x = Array.new(n).fill(:N)}
    @size = n*n
  end

  def size
    @size
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @grid[row][col] = val
  end

  def num_ships
    count = 0
    @grid.each do |row|
        count += row.count(:S)
    end
    count
  end

  def attack(pos)
    if self[pos] == :S
        self[pos]= :H
        p 'You sunk my battleship!'
        return true
    else
        self[pos]= :X
        return false
    end
  end

  def place_random_ships
    ints = [*0...@size]
    (@size/4).times do
        rand = ints.sample
        ints.delete(rand)
        self[[rand / (size**0.5), rand % (size**0.5)]]= :S
    end
  end

  def hidden_ships_grid
    @grid.map do |row|
        row.map {|square| square == :S ? :N : square}
    end
  end

  def cheat
    Board.print_grid(@grid)
  end

  def print
    Board.print_grid(hidden_ships_grid())
  end
end